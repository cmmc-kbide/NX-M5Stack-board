#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <M5Stack.h>

${EXTINC}

${VARIABLE}

${FUNCTION}

void setup()
{
  M5.begin();
  M5.Lcd.fillScreen(WHITE);
  dacWrite(25, 0);
    /* setup code */
${SETUP_CODE}
    /* block setup */
${BLOCKSETUP}
}

void loop()
{
  M5.update();
  ${LOOP_EXT_CODE}
  ${LOOP_CODE}
}
