//% color=#45B39D icon="\uf1eb" block="mIoT"
//% groups="['WiFi', 'Thingspeak', 'Dashboard']"
namespace mIoT {
    //debug
    const debug = false

    //network type
    const netTypeIsSucc = 0
    const netTypeIsErr = 1
    const netTypeIsWifiConnectTimeout = -1
    const netTypeIsWifiConnectFailure = -2

    //data type
    const strTypeIsNone   = ""
    const boolTypeIsTrue  = true
    const boolTypeIsFalse = false

    //serial
    let mIoTSerialInited = boolTypeIsFalse
    let mIoTSerialTX     = SerialPin.P15
    let mIoTSerialRX     = SerialPin.P16

    //wifi
    let mIoTWifiSSID   = strTypeIsNone
    let mIoTWifiPSWD   = strTypeIsNone
    let mIoTWifiIP     = "0.0.0.0"

    //state
    let mIoTWifiConnected = boolTypeIsFalse

    //msg	
    let msg = strTypeIsNone
  
    function mIoTSerialInit(): void{ 
        showSerialNO()
        serial.redirect(
            mIoTSerialTX,
            mIoTSerialRX,
            BaudRate.BaudRate115200
        )
	mIoTWriteString("Connected", 100)
	while(msg.substr(0,6) != "ConnOK"){
            msg = strTypeIsNone
            mIoTReadString()
        }
        showSerialOK()
        mIoTSerialInited = boolTypeIsTrue
    }

    function mIoTWriteString(text: string, waitTime: number=10): void {
        serial.writeString(text)
        basic.pause(waitTime)
    }
	
    function mIoTReadString(): void {
        while(msg == strTypeIsNone) {
            msg = serial.readLine()
        }	
    }

    function mIoTSetSSIDPW(ssid: string, password: string): void {
        mIoTWifiSSID = ssid
        mIoTWifiPSWD = password
    }

    //% blockId=mIoTWifiConnect block="Wifi connect to|SSID|%ssid|PASSWORD|%password" group="WiFi"
    export function mIoTWifiConnect(ssid: string="", password: string=""): void {
        if (ssid != strTypeIsNone || password != strTypeIsNone) {
            mIoTSetSSIDPW(ssid, password)
        }

        if (mIoTWifiConnected == boolTypeIsTrue) { 
            return
        }

        if (!mIoTSerialInited) {
            mIoTSerialInit()
        }

	if (mIoTSerialInited) {
            mIoTWriteString("SSID:" + mIoTWifiSSID, 1000)
	        mIoTWriteString("PSWD:" + mIoTWifiPSWD, 1000)
	        msg = strTypeIsNone
	        mIoTReadString()
            if (msg.substr(0,6) == "WIFIOK") {
                basic.showLeds(`
                    # # # . .
                    . . . # .
                    # # . . #
                    . . # . #
                    # . # . #
                `)
                mIoTWifiConnected = boolTypeIsTrue
            }
            if (msg.substr(0,6) == "WIFITO") {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # . # . .
                    . # . . .
                    # . # . .
                `)
            }
        }        
    }

    //% blockId=mIoTWifiReconnect block="Wifi Reconnect" group="WiFi"
    export function mIoTWifiReconnect(): void {
        if (mIoTWifiConnected == boolTypeIsFalse) {
            mIoTWifiConnect(strTypeIsNone, strTypeIsNone)
        }
    }

    //% blockId=mIoTWifiStatus block="Wifi Status" group="WiFi"
    export function mIoTWifiStatus(): boolean {
        return mIoTWifiConnected
    }

    function showSerialNO() {
        basic.showIcon(IconNames.No)        
    }

    function showSerialOK() {
        basic.showIcon(IconNames.Yes)        
    }

    //% weight=30 block="Write Thingspeak| apiKey(write) %apiKey| text %text" group="Thingspeak"
    export function writeThingspeak(apiKey: string, text: string) {
        mIoTWifiReconnect()
        mIoTWriteString("TKEY:" + apiKey, 100)
        mIoTWriteString("TTXT:" + text, 100)
        mIoTWriteString("TWRGO", 100)
    }

    //% weight=20 block="Write Thingspeak| apiKey(write) %apiKey| field1 %value1" group="Thingspeak"
    export function writeThingspeakv1(apiKey: string, value1: number) {
        mIoTWifiReconnect()
        mIoTWriteString("TKEY:" + apiKey, 100)
        mIoTWriteString("VAL1:" + value1, 100)
        mIoTWriteString("TWRGO", 100)
    }

    //% weight=10 block="Write Thingspeak| apiKey(write) %apiKey| field1 %value1| field2 %value2" group="Thingspeak"
    export function writeThingspeakv2(apiKey: string, value1: number, value2: number) {
        mIoTWifiReconnect()
        mIoTWriteString("TKEY:" + apiKey, 100)
        mIoTWriteString("VAL1:" + value1, 100)
        mIoTWriteString("VAL2:" + value2, 100)
        mIoTWriteString("TWRGO", 100)
    }

    //% block="Web Dashboard Init| SSID %wSSID| Password %wPassword" group="Dashboard" advanced=true
    export function mIoTWebDashboard(wSSID: string, wPassword: string) {
        mIoTWifiReconnect()
        mIoTWriteString("WSID:" + wSSID, 100)
        mIoTWriteString("WPWD:" + wPassword, 100)
        mIoTWriteString("WDBGO", 100)
    }
}