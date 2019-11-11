#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <M5Stack.h>

#include <Adafruit_BMP280.h>

Adafruit_BMP280 bmp;

void setup() {
  M5.begin();
  M5.Lcd.fillScreen(WHITE);
  dacWrite(25, 0);
  /* setup code */

  /* block setup */
  M5.Lcd.fillScreen(0xffff);
  M5.Lcd.setBrightness(255);

  Wire.begin(21, 22);
  while (!bmp.begin()) {
    Serial.println(F("Could not find a valid BMP280 sensor, check wiring!"));
    delay(1000);
  }
  Serial.println(F("Initial BMP280 sensor done..."));
}

void loop() {
  M5.update();

  M5.Lcd.setTextSize(3);
  M5.Lcd.setCursor(10, 10);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(
      String(((String("Temp : ") + String((bmp.readTemperature()))))));
  M5.Lcd.setTextSize(3);
  M5.Lcd.setCursor(10, 50);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(((String("Pres : ") + String((bmp.readPressure()))))));
  M5.Lcd.setTextSize(3);
  M5.Lcd.setCursor(10, 90);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(
      String(((String("Alt  : ") + String((bmp.readAltitude(1013.25)))))));
  delay(250);
  M5.Lcd.fillRect(130, 0, 150, 150, 0xffe6);
}
