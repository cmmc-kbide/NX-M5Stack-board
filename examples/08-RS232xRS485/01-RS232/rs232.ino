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

  Serial2.begin(115200, SERIAL_8N1, 16, 17);
}

void loop() {
  M5.update();

  if (Serial2.available()) {
    Serial.println((Serial2.read()));
  }
  if (M5.BtnA.wasPressed()) {
    Serial2.write("hello RS232");
  }
}
