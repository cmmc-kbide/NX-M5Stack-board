#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <M5Stack.h>

const int MOTOR_A = 2;
const int MOTOR_B = 5;
const int MOTOR_C = 12;
const int MOTOR_D = 13;

int motorPin[16] = {
    MOTOR_A, MOTOR_B, MOTOR_C, MOTOR_D, MOTOR_A, MOTOR_B, MOTOR_C, MOTOR_D,
    MOTOR_A, MOTOR_B, MOTOR_C, MOTOR_D, MOTOR_A, MOTOR_B, MOTOR_C, MOTOR_D,
};

int motorForward[16] = {
    1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1,
};

int motorBackward[16] = {
    1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0,
};

int motorStop[4] = {0, 0, 0, 0};

void stop_steper() {
  for (int i = 1; i <= 4; i++) {
    digitalWrite(motorPin[i], motorStop[i]);
    delay(2);
  }
}

void forward_steper(uint16_t degree) {
  for (int j = 1; j <= (1.42 * degree); j++) {
    for (int i = 0; i <= 16; i++) {
      digitalWrite(motorPin[i], motorForward[i]);
      delay(2);
    }
  }
}

void backward_steper(uint16_t degree) {
  for (int j = 1; j <= (1.42 * degree); j++) {
    for (int i = 0; i <= 16; i++) {
      digitalWrite(motorPin[i], motorBackward[i]);
      delay(2);
    }
  }
}

void setup() {
  M5.begin();
  M5.Lcd.fillScreen(WHITE);
  dacWrite(25, 0);
  /* setup code */

  /* block setup */
  M5.Lcd.fillScreen(0xffff);
  M5.Lcd.setBrightness(255);

  for (int i = 0; i <= 3; i++) {
    pinMode(motorPin[i], OUTPUT);
  }
}

void loop() {
  M5.update();

  M5.Lcd.setTextSize(4);
  M5.Lcd.setCursor(10, 10);
  M5.Lcd.setTextColor(0x0);
  M5.Lcd.println(String(String("Step motor")));
  if ((M5.BtnA.read()) == 1) {
    M5.Lcd.setTextSize(3);
    M5.Lcd.setCursor(10, 50);
    M5.Lcd.setTextColor(0x0);
    M5.Lcd.println(String(String("Forward --->")));
    forward_steper(90);
  } else if ((M5.BtnB.read()) == 1) {
    M5.Lcd.setTextSize(3);
    M5.Lcd.setCursor(10, 50);
    M5.Lcd.setTextColor(0x0);
    M5.Lcd.println(String(String("Backward <---")));
    backward_steper(90);
  } else {
    stop_steper();
    M5.Lcd.fillRect(0, 50, 300, 40, 0xffe6);
  }
}
