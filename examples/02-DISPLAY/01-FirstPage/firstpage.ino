#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <M5Stack.h>

int i;

void setup() {
  M5.begin();
  M5.Lcd.fillScreen(WHITE);
  dacWrite(25, 0);
  /* setup code */

  /* block setup */
  M5.Lcd.fillScreen(0xffff);
  M5.Lcd.setBrightness(255);

  M5.Lcd.setTextSize(3);
  M5.Lcd.setCursor(10, 10);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(String("Dimming screen")));
  for (i = 255; i >= 0; i -= 8) {
    M5.Lcd.setBrightness(i);
    delay(50);
  }
  for (i = 0; i <= 255; i += 8) {
    M5.Lcd.setBrightness(i);
    delay(50);
  }
  delay(1000);
  M5.Lcd.fillScreen(0xffff);

  M5.Lcd.setTextSize(3);
  M5.Lcd.setCursor(10, 10);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(String("Line : ")));
  for (i = 50; i <= 240; i += 10) {
    M5.Lcd.drawLine(0, 50, 320, i, 0xf800);
    delay(100);
  }
  M5.Lcd.fillScreen(0xffff);

  M5.Lcd.setTextSize(2);
  M5.Lcd.setCursor(10, 10);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(String("Rectangle : not fill")));

  M5.Lcd.drawRect(110, 70, 100, 100, 0xffe0);
  delay(1000);
  M5.Lcd.fillScreen(0xffff);

  M5.Lcd.setTextSize(2);
  M5.Lcd.setCursor(10, 10);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(String("Rectangle : fill")));

  M5.Lcd.fillRect(110, 70, 100, 100, 0xffe0);
  delay(1000);
  M5.Lcd.fillScreen(0xffff);

  M5.Lcd.setTextSize(3);
  M5.Lcd.setCursor(10, 10);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(String("Progress Bar : ")));
  for (i = 5; i <= 100; i += 5) {
    M5.Lcd.progressBar(60, 90, 150, 50, i);
    delay(100);
  }
  for (i = 100; i >= 5; i -= 5) {
    M5.Lcd.progressBar(60, 90, 150, 50, i);
    delay(100);

    M5.Lcd.fillRect(60, 90, 155, 55, 0xffff);
  }
  M5.Lcd.fillScreen(0xffff);
  M5.Lcd.qrcode(String("www.kbide.org"), 50, 10, 220, 6);
}

void loop() {
  M5.update();
}
