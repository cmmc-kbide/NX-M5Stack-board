#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <M5Stack.h>

#include <tts.h>
#include <KBSound.h>

KBSound kbsound;

void setup() {
  M5.begin();
  M5.Lcd.fillScreen(WHITE);
  dacWrite(25, 0);
  /* setup code */
  kbsound.begin(0);
  /* block setup */
  kbsound.setVolume(5);
  kbsound.speak((std::vector<const uint8_t *>{spHELLO, spWELL, spCOME}));
  dacWrite(25, 0);
  delay(1000);
  kbsound.speak((std::vector<const uint8_t *>{spHOW, spARE, spYOU}));
  dacWrite(25, 0);
  delay(1000);

  kbsound.playNotes(
      1, (std::vector<int>{59, 61, 63, 64, 66, 68, 70, 71, 73, 75, 76}), 70);
  dacWrite(25, 0);
}

void loop() {
  M5.update();

  if (M5.BtnA.wasPressed()) {
    M5.Speaker.beep();
  }
  if (M5.BtnB.wasPressed()) {
    kbsound.playNotes(1, (std::vector<int>{59, 61, 63}), 70);
    dacWrite(25, 0);
  }
  if (M5.BtnC.wasPressed()) {
    kbsound.speak((std::vector<const uint8_t *>{spHELLO}));
    dacWrite(25, 0);
  }
}
