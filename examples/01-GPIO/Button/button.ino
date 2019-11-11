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
  M5.Lcd.setBrightness(255);
  M5.Lcd.fillScreen(0xffff);
  pinMode(39, INPUT_PULLUP);
  pinMode(38, INPUT_PULLUP);
  pinMode(37, INPUT_PULLUP);
}

void loop() {
  M5.update();

  if (M5.BtnA.wasPressed()) {
    M5.Lcd.fillScreen(0xc800);
  }
  if (M5.BtnB.wasPressed()) {
    M5.Lcd.fillScreen(0x320);
  }
  if (M5.BtnC.wasPressed()) {
    M5.Lcd.fillScreen(0xc);
  }
  M5.Lcd.setTextSize(2);
  M5.Lcd.setCursor(10, 10);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(((String("Button A : ") + String((M5.BtnA.read()))))));
  M5.Lcd.setTextSize(2);
  M5.Lcd.setCursor(10, 30);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(((String("Button B : ") + String((M5.BtnB.read()))))));
  M5.Lcd.setTextSize(2);
  M5.Lcd.setCursor(10, 50);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(((String("Button C : ") + String((M5.BtnC.read()))))));
  delay(200);
  // Create Rectangle for Clear display
  M5.Lcd.fillRect(135, 0, 30, 70, 0xffff);
}
