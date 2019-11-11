#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <M5Stack.h>

#include "Adafruit_NeoPixel.h"

#define PIN 15
#define NUMPIXELS 64
Adafruit_NeoPixel pixels =
    Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if (WheelPos < 85) {
    return pixels.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  }
  if (WheelPos < 170) {
    WheelPos -= 85;
    return pixels.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
  WheelPos -= 170;
  return pixels.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
}

void setup() {
  M5.begin();
  M5.Lcd.fillScreen(WHITE);
  dacWrite(25, 0);
  /* setup code */
  pixels.begin();
  /* block setup */
  pixels.setBrightness(5);
  pixels.show();

  for (uint16_t i = 0; i < pixels.numPixels(); i++) {
    pixels.setPixelColor(i, pixels.Color(153, 0, 0));
    delay(50);
  }
  pixels.show();

  delay(500);

  for (int clearPixel = 0; clearPixel < pixels.numPixels(); clearPixel++) {
    pixels.setPixelColor(clearPixel, pixels.Color(0, 0, 0));
    pixels.show();
  }

  for (uint16_t i = 0; i < pixels.numPixels(); i++) {
    pixels.setPixelColor(i, pixels.Color(0, 153, 0));
    delay(50);
  }
  pixels.show();

  delay(500);

  for (int clearPixel = 0; clearPixel < pixels.numPixels(); clearPixel++) {
    pixels.setPixelColor(clearPixel, pixels.Color(0, 0, 0));
    pixels.show();
  }

  for (uint16_t i = 0; i < pixels.numPixels(); i++) {
    pixels.setPixelColor(i, pixels.Color(51, 51, 255));
    delay(50);
  }
  pixels.show();

  delay(500);

  for (int clearPixel = 0; clearPixel < pixels.numPixels(); clearPixel++) {
    pixels.setPixelColor(clearPixel, pixels.Color(0, 0, 0));
    pixels.show();
  }

  for (uint16_t i = 0; i < pixels.numPixels(); i++) {
    pixels.setPixelColor(i, pixels.Color(255, 255, 0));
    pixels.show();
    delay(50);
  }

  for (int j = 0; j < 10; j++) {
    for (int q = 0; q < 3; q++) {
      for (uint16_t i = 0; i < pixels.numPixels(); i = i + 3) {
        pixels.setPixelColor(i + q, pixels.Color(204, 102, 0));
      }
      pixels.show();
      delay(50);
      for (uint16_t i = 0; i < pixels.numPixels(); i = i + 3) {
        pixels.setPixelColor(i + q, 0);
      }
      pixels.show();
    }
  }

  uint16_t i, j;
  for (j = 0; j < 256; j++) {
    for (i = 0; i < pixels.numPixels(); i++) {
      pixels.setPixelColor(i, Wheel((i + j) & 255));
    }
    pixels.show();
    delay(20);
  }
}

void loop() {
  M5.update();

  uint16_t k, m;
  for (m = 0; m < 256 * 5; m++) {  // 5 cycles of all colors on wheel
    for (k = 0; k < pixels.numPixels(); k++) {
      pixels.setPixelColor(k,
                           Wheel(((k * 256 / pixels.numPixels()) + m) & 255));
    }
    pixels.show();
    delay(20);
  }
}
