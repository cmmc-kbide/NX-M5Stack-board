#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <M5Stack.h>

#include <Adafruit_ADS1015.h>

Adafruit_ADS1115 adc(0x48);

void setup() {
  M5.begin();
  M5.Lcd.fillScreen(WHITE);
  dacWrite(25, 0);
  /* setup code */
  adc.setGain(GAIN_TWOTHIRDS);
  /* block setup */
  M5.Lcd.fillScreen(0xffff);
  M5.Lcd.setBrightness(255);

  adc.begin();
}

void loop() {
  M5.update();

  M5.Lcd.setTextSize(4);
  M5.Lcd.setCursor(10, 10);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(String("ADC 0 - 1023")));
  M5.Lcd.setTextSize(3);
  M5.Lcd.setCursor(10, 50);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(
      String(((String("Value : ") + String((adc.readADC_SingleEnded(0)))))));
  delay(500);
  M5.Lcd.fillRect(150, 50, 100, 50, 0xffe6);
}
