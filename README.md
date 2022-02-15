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

## 燒錄 ESP8266 軔體
建議使用 [ESP 燒錄工具 (Flash Download Tools)](https://drive.google.com/file/d/1wSWfuXHIryLkY6OmBwAyBPnEuEe0v_Ki/view?usp=sharing) 燒錄軔體.  
  
![燒錄程式說明](https://user-images.githubusercontent.com/19259753/153983108-947e5c31-26c0-44ba-8b32-0d674bc20e94.JPG "燒錄程式說明")  

# 擴展積木說明

![積木程式說明一](https://user-images.githubusercontent.com/19259753/153134643-622dda37-a01f-4161-b0a3-2c8999c8f874.JPG "積木程式說明一")

## 與 AP 連線

![AP連線積木範例](https://user-images.githubusercontent.com/19259753/154007479-567ef1a4-16d9-4071-a4a2-71f1920c4a97.png "AP連線積木範例")

## Micro:bit 顯示之 ESP8266 連接狀態

![ESP8266狀態](https://user-images.githubusercontent.com/19259753/153134041-766cf9ed-04de-415e-a14d-331e995545e9.JPG "ESP8266狀態")

## 將資料傳送至 Thingspeak

![Thinkspeak積木範例一](https://user-images.githubusercontent.com/19259753/154010069-95199474-a5fd-49cf-ba66-125aab5a9dc3.png "Thinkspeak積木範例一")