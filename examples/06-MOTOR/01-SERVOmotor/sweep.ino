#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <M5Stack.h>

#include <ESP32Servo.h>

int i;
Servo myservo;

void setup() {
  M5.begin();
  M5.Lcd.fillScreen(WHITE);
  dacWrite(25, 0);
  /* setup code */

  /* block setup */
  M5.Lcd.fillScreen(0xffff);
  M5.Lcd.setBrightness(255);

  myservo.setPeriodHertz(50);
  myservo.attach(2, 1000, 2000);
}

void loop() {
  M5.update();

  M5.Lcd.setTextSize(4);
  M5.Lcd.setCursor(10, 10);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(String("Servo motor")));
  for (i = 0; i <= 180; i += 10) {
    M5.Lcd.setTextSize(3);
    M5.Lcd.setCursor(10, 50);
    M5.Lcd.setTextColor(0x0);
    M5.Lcd.println(String(((String("Angle : ") + String(i)))));
    myservo.write(i);
    delay(100);
    M5.Lcd.fillRect(120, 40, 110, 40, 0xffe6);
  }
  for (i = 180; i >= 0; i -= 10) {
    M5.Lcd.setTextSize(3);
    M5.Lcd.setCursor(10, 50);
    M5.Lcd.setTextColor(0x0);
    M5.Lcd.println(String(((String("Angle : ") + String(i)))));
    myservo.write(i);
    delay(100);
    M5.Lcd.fillRect(130, 40, 110, 40, 0xffe6);
  }
}
