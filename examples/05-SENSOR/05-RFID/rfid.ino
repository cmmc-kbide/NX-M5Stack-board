#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <M5Stack.h>

#include "MFRC522_I2C.h"

MFRC522 mfrc522(0x28);
String cardID = "";

void setup() {
  M5.begin();
  M5.Lcd.fillScreen(WHITE);
  dacWrite(25, 0);
  /* setup code */

  /* block setup */
  M5.Lcd.fillScreen(0xffff);
  M5.Lcd.setBrightness(255);

  Wire.begin(21, 22);
  mfrc522.PCD_Init();
}

void loop() {
  M5.update();

  M5.Lcd.setTextSize(3);
  M5.Lcd.setCursor(10, 10);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(((String("RFID : ") + String((String(cardID)))))));
  if (!mfrc522.PICC_IsNewCardPresent() || !mfrc522.PICC_ReadCardSerial()) {
    delay(1);
  } else {
    cardID = "";
    for (byte i = 0; i < mfrc522.uid.size; i++) {
      if (mfrc522.uid.uidByte[i] < 0x10) cardID += "0";
      cardID += String(mfrc522.uid.uidByte[i], HEX);
    }
    cardID.toUpperCase();
    if ((String(cardID)) == String("6AAC8715")) {
      M5.Lcd.fillScreen(0x4c0);
    } else if ((String(cardID)) == String("206C68A4")) {
      M5.Lcd.fillScreen(0xf800);
    }
  }
  delay(250);
  M5.Lcd.fillRect(120, 0, 170, 40, 0xffe6);
}
