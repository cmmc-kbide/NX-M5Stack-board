const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
  "use strict";
  // ############################   RS232 Communication   ##################################
  Blockly.Blocks['m5_rs232_begin'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : RS232 begin")
        .appendField(new Blockly.FieldDropdown([
          ["Serial2", "Serial2"],
          ["Serial1", "Serial1"],
          ["Serial", "Serial"]
        ]), "SERIAL")
        .appendField("(baudrate:")
        .appendField(new Blockly.FieldDropdown([
          ["115200", "115200"],
          ["300", "300"],
          ["1200", "1200"],
          ["2400", "2400"],
          ["4800", "4800"],
          ["9600", "9600"],
          ["19200", "19200"],
          ["38400", "38400"],
          ["57600", "57600"],
          ["74880", "74880"],
          ["230400", "230400"],
          ["250000", "250000"]
        ]), "BAUDRATE")
        .appendField(", RXD:")
        .appendField(new Blockly.FieldNumber(16), "RXD")
        .appendField(", TXD:")
        .appendField(new Blockly.FieldNumber(17), "TXD")
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_rs232_available'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("if")
        .appendField(new Blockly.FieldDropdown([
          ["Serial2", "Serial2"],
          ["Serial1", "Serial1"],
          ["Serial", "Serial"]
        ]), "SERIAL")
        .appendField(".available()");
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

  Blockly.Blocks['m5_rs232_serial_read'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : RS232 ")
        .appendField(new Blockly.FieldDropdown([
          ["Serial2", "Serial2"],
          ["Serial1", "Serial1"],
          ["Serial", "Serial"]
        ]), "SERIAL")
        .appendField("Read");
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_rs232_serial_write_char'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : RS232")
        .appendField(new Blockly.FieldDropdown([
          ["Serial2", "Serial2"],
          ["Serial1", "Serial1"],
          ["Serial", "Serial"]
        ]), "SERIAL")
        .appendField("Write (string)")
        .appendField(new Blockly.FieldTextInput("hello RS232"), "DATA");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_rs232_serial_write_num'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : RS232")
        .appendField(new Blockly.FieldDropdown([
          ["Serial2", "Serial2"],
          ["Serial1", "Serial1"],
          ["Serial", "Serial"]
        ]), "SERIAL")
        .appendField("Write (number)")
      this.appendValueInput("DATA")
        .setCheck("Number");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  // #######################################################################################
  // ############################   RS485 Communication   ##################################
  Blockly.Blocks['m5_rs485_begin'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : RS485 begin")
        .appendField(new Blockly.FieldDropdown([
          ["Serial2", "Serial2"],
          ["Serial1", "Serial1"],
          ["Serial", "Serial"]
        ]), "SERIAL")
        .appendField("(baudrate:")
        .appendField(new Blockly.FieldDropdown([
          ["115200", "115200"],
          ["300", "300"],
          ["1200", "1200"],
          ["2400", "2400"],
          ["4800", "4800"],
          ["9600", "9600"],
          ["19200", "19200"],
          ["38400", "38400"],
          ["57600", "57600"],
          ["74880", "74880"],
          ["230400", "230400"],
          ["250000", "250000"]
        ]), "BAUDRATE")
        .appendField(", RXD:")
        .appendField(new Blockly.FieldNumber(16), "RXD")
        .appendField(", TXD:")
        .appendField(new Blockly.FieldNumber(17), "TXD")
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_rs485_available'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("if")
        .appendField(new Blockly.FieldDropdown([
          ["Serial2", "Serial2"],
          ["Serial1", "Serial1"],
          ["Serial", "Serial"]
        ]), "SERIAL")
        .appendField(".available()");
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

  Blockly.Blocks['m5_rs485_serial_read'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : RS485 ")
        .appendField(new Blockly.FieldDropdown([
          ["Serial2", "Serial2"],
          ["Serial1", "Serial1"],
          ["Serial", "Serial"]
        ]), "SERIAL")
        .appendField("Read");
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_rs485_serial_write_char'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : RS485")
        .appendField(new Blockly.FieldDropdown([
          ["Serial2", "Serial2"],
          ["Serial1", "Serial1"],
          ["Serial", "Serial"]
        ]), "SERIAL")
        .appendField("Write (string)")
        .appendField(new Blockly.FieldTextInput("hello RS485"), "DATA");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_rs485_serial_write_num'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : RS485")
        .appendField(new Blockly.FieldDropdown([
          ["Serial2", "Serial2"],
          ["Serial1", "Serial1"],
          ["Serial", "Serial"]
        ]), "SERIAL")
        .appendField("Write (number)")
      this.appendValueInput("DATA")
        .setCheck("Number");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  // ##############################################################################
};
