#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <M5Stack.h>

#include "Keypad.h"

String getKeyboard;
const byte ROWS = 4;
const byte COLS = 4;

char keys[ROWS][COLS] = {{'1', '2', '3', 'A'},
                         {'4', '5', '6', 'B'},
                         {'7', '8', '9', 'C'},
                         {'*', '0', '#', 'D'}};

byte colPins[COLS] = {5, 12, 13, 15};
byte rowPins[ROWS] = {17, 16, 21, 22};

Keypad m5Keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

void setup() {
  M5.begin();
  M5.Lcd.fillScreen(WHITE);
  dacWrite(25, 0);
  /* setup code */

  /* block setup */
  M5.Lcd.setBrightness(255);
  M5.Lcd.fillScreen(0xffff);
}

void loop() {
  M5.update();
  getKeyboard = String(m5Keypad.getKey());
  if ((getKeyboard) == String("1")) {
    M5.Lcd.fillScreen(0x9800);
  } else if ((getKeyboard) == String("A")) {
    M5.Lcd.fillScreen(0x4c0);
  } else if ((getKeyboard) == String("*")) {
    M5.Lcd.fillScreen(0x319f);
  }
  M5.Lcd.setTextSize(2);
  M5.Lcd.setCursor(10, 10);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(((String("Press : ") + String((getKeyboard))))));
  delay(200);
  // Create Rectangle for Clear display
  M5.Lcd.fillRect(100, 0, 30, 30, 0xffff);
}
