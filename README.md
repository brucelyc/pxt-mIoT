# 歡迎使用 pxt-mIoT 擴展

這是一個 **Micro:bit** 的擴展，主要是為了擴充 Micro:bit 的**無線**能力而設計.


# 環境準備

使用本擴展前，除了 Micro:bit 外，還要準備一片 **ESP8266** 開發板，建議使用 **NodeMCU**.

## 連接方式

將 Micro:bit 的 **3V** 、 **GND** 、 **15** 、 **16** 接腳與 ESP8266 的 **3V3** 、 **GND** 、 **RX** 、 **TX** 接腳分別連接.  
  
Micro:bit <---> ESP8266  
3V <---> 3V3  
GND <---> GND  
Pin 15 <---> RX  
Pin 16 <---> TX  
  
![Micro:bit 與 NodeMCU連接圖](https://user-images.githubusercontent.com/19259753/153125118-9781d2f8-0ee5-43df-b46a-9317ef87b23b.png "Micro:bit 與 NodeMCU連接圖")