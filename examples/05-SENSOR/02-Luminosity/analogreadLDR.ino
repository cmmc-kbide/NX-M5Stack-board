#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <M5Stack.h>

void setup() {
  M5.begin();
  M5.Lcd.fillScreen(WHITE);
  dacWrite(25, 0);
  /* setup code */

  /* block setup */
  M5.Lcd.fillScreen(0xffff);
  M5.Lcd.setBrightness(255);
}

void loop() {
  M5.update();

  M5.Lcd.setTextSize(4);
  M5.Lcd.setCursor(10, 10);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(String("Luminosity")));
  M5.Lcd.setTextSize(3);
  M5.Lcd.setCursor(10, 50);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(((String("Value : ") + String((analogRead(34)))))));
  M5.Lcd.setTextSize(3);
  M5.Lcd.setCursor(10, 90);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(((String("Value : ") + String((digitalRead(2)))))));
  delay(250);
  M5.Lcd.fillRect(130, 40, 100, 80, 0xffe6);
}
