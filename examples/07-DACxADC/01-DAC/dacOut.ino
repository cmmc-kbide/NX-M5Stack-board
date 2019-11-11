#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <M5Stack.h>

int i;
#define DAC_ADDR 0x4C

void outVoltage(uint8_t ch, uint16_t v) {
  Wire.beginTransmission(DAC_ADDR);
  Wire.write(0x10 | (ch << 1));

  Wire.write((v >> 2) & 0xff);
  Wire.write((v << 6) & 0xff);
  Wire.endTransmission();
}

void setup() {
  M5.begin();
  M5.Lcd.fillScreen(WHITE);
  dacWrite(25, 0);
  /* setup code */

  /* block setup */
  M5.Lcd.fillScreen(0xffff);
  M5.Lcd.setBrightness(255);

  Wire.begin(21, 22);
}

void loop() {
  M5.update();

  M5.Lcd.setTextSize(4);
  M5.Lcd.setCursor(10, 10);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(String("DAC 0 - 5 v")));
  for (i = 0; i <= 1023; i += 8) {
    M5.Lcd.setTextSize(3);
    M5.Lcd.setCursor(10, 50);
    M5.Lcd.setTextColor(0x0);
    M5.Lcd.println(String(((String("Value : ") + String(i)))));
    outVoltage(0, i);
    delay(100);
    M5.Lcd.fillRect(150, 50, 100, 50, 0xffe6);
  }
}
