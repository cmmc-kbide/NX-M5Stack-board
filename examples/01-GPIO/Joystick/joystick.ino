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
  pinMode(2, INPUT_PULLUP);
  /* block setup */
  M5.Lcd.setBrightness(255);
  M5.Lcd.fillScreen(0xffff);
  Serial.println(((String("Connect Joystick !") + String("X ADC to pin IO34") +
                   String("Y ADC to pin IO35") + String("Button to pin IO2") +
                   String("") + String(""))));
}

void loop() {
  M5.update();

  M5.Lcd.setTextSize(2);
  M5.Lcd.setCursor(10, 10);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(((String("X pos : ") + String((analogRead(34)))))));
  M5.Lcd.setTextSize(2);
  M5.Lcd.setCursor(10, 30);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(((String("Y pos : ") + String((analogRead(35)))))));
  M5.Lcd.setTextSize(2);
  M5.Lcd.setCursor(10, 50);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(((String("Button : ") + String((digitalRead(2)))))));
  delay(200);
  // Create Rectangle for Clear display
  M5.Lcd.fillRect(100, 0, 60, 70, 0xfff3);
}
