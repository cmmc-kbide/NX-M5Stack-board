#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <M5Stack.h>

int _EN_A = 13;
int _EN_B = 15;
int _MotorA_ch = 0;
int _MotorB_ch = 1;

void setup() {
  M5.begin();
  M5.Lcd.fillScreen(WHITE);
  dacWrite(25, 0);
  /* setup code */

  /* block setup */
  M5.Lcd.fillScreen(0xffff);
  M5.Lcd.setBrightness(255);

  ledcSetup(_MotorA_ch, 5000, 8);
  ledcAttachPin(_EN_A, _MotorA_ch);
  ledcSetup(_MotorB_ch, 5000, 8);
  ledcAttachPin(_EN_B, _MotorB_ch);
}

void loop() {
  M5.update();

  M5.Lcd.setTextSize(4);
  M5.Lcd.setCursor(10, 10);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(String("DC motor")));
  if ((M5.BtnA.read()) == 1) {
    M5.Lcd.setTextSize(3);
    M5.Lcd.setCursor(10, 50);
    M5.Lcd.setTextColor(0x0);
    M5.Lcd.println(String(String("Forward --->")));
    ledcWrite(_MotorA_ch, 0);
    ledcWrite(_MotorB_ch, 255);
  } else if ((M5.BtnB.read()) == 1) {
    M5.Lcd.setTextSize(3);
    M5.Lcd.setCursor(10, 50);
    M5.Lcd.setTextColor(0x0);
    M5.Lcd.println(String(String("Backward <---")));
    ledcWrite(_MotorA_ch, 255);
    ledcWrite(_MotorB_ch, 0);
  } else {
    ledcWrite(_MotorA_ch, 0);
    ledcWrite(_MotorB_ch, 0);
    M5.Lcd.fillRect(0, 50, 300, 40, 0xffe6);
  }
}
