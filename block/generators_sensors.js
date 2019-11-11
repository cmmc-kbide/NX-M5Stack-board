module.exports = function (Blockly) {
  "use strict";

  // ############################   DHT sensor   ##################################
  Blockly.JavaScript['m5_sensor_dht_init'] = function (block) {
    var number_sda = block.getFieldValue('SDA');
    var number_scl = block.getFieldValue('SCL');

    var code = `
#EXTINC#include <DHT12.h>#END
#VARIABLEDHT12 dht12;#END
Wire.begin(${number_sda}, ${number_scl});
dht12.begin();\n`;
    return code;
  };

  Blockly.JavaScript['m5_sensor_dht_readTemp'] = function (block) {
    var dropdown_type = block.getFieldValue('type');

    if (dropdown_type == 0) {
      var code = `dht12.readTemperature()`;
    } else if (dropdown_type == 1) {
      var code = `dht12.readTemperature(true)`;
    }

    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['m5_sensor_dht_readHumid'] = function (block) {
    var code = `dht12.readHumidity()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  // ##############################################################################
  // ############################   LDR sensor   ##################################

  Blockly.JavaScript['m5_sensor_ldr_analog'] = function (block) {
    var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `analogRead(${value_pin})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['m5_sensor_ldr_digital'] = function (block) {
    var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `digitalRead(${value_pin})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  // ##############################################################################
  // ############################   BMP280 sensor   ###############################

  Blockly.JavaScript['m5_sensor_bmp_init'] = function (block) {
    var number_sda = block.getFieldValue('SDA');
    var number_scl = block.getFieldValue('SCL');

    var code = `
#EXTINC#include <Adafruit_BMP280.h>#END
#VARIABLEAdafruit_BMP280 bmp;#END
Wire.begin(${number_sda}, ${number_scl});
while (!bmp.begin()) {
  Serial.println(F("Could not find a valid BMP280 sensor, check wiring!"));
  delay(1000);
}
Serial.println(F("Initial BMP280 sensor done..."));
\n`;
    return code;
  };

  Blockly.JavaScript['m5_sensor_bmp_readTemp'] = function (block) {
    var code = `bmp.readTemperature()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['m5_sensor_bmp_readPressure'] = function (block) {
    var code = `bmp.readPressure()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['m5_sensor_bmp_readAltitude'] = function (block) {
    var code = `bmp.readAltitude(1013.25)`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  // ##############################################################################
  // ############################   MicroPhone sensor   ###########################

  Blockly.JavaScript['m5_sensor_microphone_analog'] = function (block) {
    var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `analogRead(${value_pin})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['m5_sensor_microphone_digital'] = function (block) {
    var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `digitalRead(${value_pin})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  // ##############################################################################
  // ############################   RFID sensor   #################################

  Blockly.JavaScript['m5_sensor_rfid_init'] = function (block) {
    var number_sda = block.getFieldValue('SDA');
    var number_scl = block.getFieldValue('SCL');

    var code = `
#EXTINC#include "MFRC522_I2C.h"#END
#VARIABLE
MFRC522 mfrc522(0x28);
String cardID = "";
#END
Wire.begin(${number_sda}, ${number_scl});
mfrc522.PCD_Init();\n`;
    return code;
  };

  Blockly.JavaScript['m5_sensor_rfid_read_loop'] = function (block) {
    var code =
`
if (!mfrc522.PICC_IsNewCardPresent() || !mfrc522.PICC_ReadCardSerial()) {
  delay(50);
} else {
  cardID = "";
  for (byte i = 0; i < mfrc522.uid.size; i++) {
    if (mfrc522.uid.uidByte[i] < 0x10) cardID += "0";
    cardID += String(mfrc522.uid.uidByte[i], HEX);
  }
  cardID.toUpperCase();
  Serial.println(cardID);
}
\n`;
    return code;
  };

  Blockly.JavaScript['m5_sensor_rfid_cardid'] = function (block) {
    var code = `String(cardID)`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['m5_sensor_rfid_statement'] = function(block) {
    var statements_if_stat = Blockly.JavaScript.statementToCode(block, 'IF_STAT');
    var code = 
`
if (!mfrc522.PICC_IsNewCardPresent() || !mfrc522.PICC_ReadCardSerial()) {
  delay(1);
} else {
  cardID = "";
  for (byte i = 0; i < mfrc522.uid.size; i++) {
    if (mfrc522.uid.uidByte[i] < 0x10) cardID += "0";
    cardID += String(mfrc522.uid.uidByte[i], HEX);
  }
  cardID.toUpperCase();
${statements_if_stat}
}
\n`;
    return code;
  };

  Blockly.JavaScript['m5_sensor_rfid_newcard'] = function (block) {
    var code = `mfrc522.PICC_IsNewCardPresent()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['m5_sensor_rfid_readserial'] = function (block) {
    var code = `mfrc522.PICC_ReadCardSerial()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };


};
