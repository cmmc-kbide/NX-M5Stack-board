#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <M5Stack.h>

#include <DHT12.h>

DHT12 dht12;

void setup() {
  M5.begin();
  M5.Lcd.fillScreen(WHITE);
  dacWrite(25, 0);
  /* setup code */

  /* block setup */
  M5.Lcd.fillScreen(0xffff);
  M5.Lcd.setBrightness(255);

  Wire.begin(21, 22);
  dht12.begin();
}

void loop() {
  M5.update();

  M5.Lcd.setTextSize(3);
  M5.Lcd.setCursor(10, 10);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(
      String(((String("Temp : ") + String((dht12.readTemperature()))))));
  M5.Lcd.setTextSize(3);
  M5.Lcd.setCursor(10, 50);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(
      String(((String("Humid: ") + String((dht12.readHumidity()))))));
  delay(1000);
  M5.Lcd.fillRect(130, 0, 100, 80, 0xffe6);
}
