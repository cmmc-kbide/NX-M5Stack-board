const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
  "use strict";
  // ############################   DHT sensor   ##################################
  Blockly.Blocks['m5_sensor_dht_init'] = {
    init: function () {
      this.appendDummyInput()
        // .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/1137754.svg`,20,20,"*"))
        .appendField("M5Stack : DHT sensor begin (SDA:")
        .appendField(new Blockly.FieldNumber(21), "SDA")
        .appendField(", SCL:")
        .appendField(new Blockly.FieldNumber(22), "SCL")
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_sensor_dht_readTemp'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : DHT read Temperature")
        .appendField(new Blockly.FieldDropdown([["Celsius", "0"], ["Fahrenheit", "1"]]), "type");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_sensor_dht_readHumid'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : DHT read Humidity");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  // ##############################################################################
  // ############################   LDR sensor   ##################################

  Blockly.Blocks['m5_sensor_ldr_analog'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : Luminosity analog value");
      this.appendValueInput("PIN")
        .setCheck("Number");
      this.appendDummyInput()
        .appendField("(0-4095)");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_sensor_ldr_digital'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : Luminosity digital value");
      this.appendValueInput("PIN")
        .setCheck("Number");
      this.appendDummyInput()
        .appendField("(0-1)");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  // ##############################################################################
  // ############################   BMP280 sensor   ###############################

  Blockly.Blocks['m5_sensor_bmp_init'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : BMP280 sensor begin (SDA:")
        .appendField(new Blockly.FieldNumber(21), "SDA")
        .appendField(", SCL:")
        .appendField(new Blockly.FieldNumber(22), "SCL")
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_sensor_bmp_readTemp'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : BME280 read Temperature");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_sensor_bmp_readPressure'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : BME280 read Pressure");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_sensor_bmp_readAltitude'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : BME280 read Altitude");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  // ##############################################################################
  // ############################   MicroPhone sensor   ############################
  Blockly.Blocks['m5_sensor_microphone_analog'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : Microphone analog value");
      this.appendValueInput("PIN")
        .setCheck("Number");
      this.appendDummyInput()
        .appendField("(0-4095)");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_sensor_microphone_digital'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : Microphone digital value");
      this.appendValueInput("PIN")
        .setCheck("Number");
      this.appendDummyInput()
        .appendField("(0-1)");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  // ##############################################################################
  // ############################   RFID sensor   #################################
  Blockly.Blocks['m5_sensor_rfid_init'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : RFID sensor begin (SDA:")
        .appendField(new Blockly.FieldNumber(21), "SDA")
        .appendField(", SCL:")
        .appendField(new Blockly.FieldNumber(22), "SCL")
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_sensor_rfid_read_loop'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : RFID read loop");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_sensor_rfid_cardid'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : RFID read Card ID");
      this.setInputsInline(true);
      this.setOutput(true, "String");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_sensor_rfid_newcard'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : RFID IsNewCardPresent");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_sensor_rfid_readserial'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : RFID ReadCardSerial");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_sensor_rfid_statement'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("if New Card ID Present");
      this.appendStatementInput("IF_STAT")
          .setCheck(null);
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
   this.setTooltip("IF RFID statement");
   this.setHelpUrl("");
    }
  };




};
