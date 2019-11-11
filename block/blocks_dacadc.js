const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
  "use strict";
  // ############################   Digital to Analog   ##################################
  Blockly.Blocks['m5_dac_begin'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : DAC sensor begin (SDA:")
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

  Blockly.Blocks['m5_dac_out_voltage'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : DAC ch")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2 ", "2 "], ["3", "3"]]), "CHANNEL")
        .appendField("out Voltage")
        .appendField(new Blockly.FieldDropdown([
          ["0.00v", "0"],
          ["1.25v", "256"],
          ["2.50v ", "512"],
          ["3.75v", "768"],
          ["5.00v", "1023"]
        ]), "VOLTAGE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_dac_out_voltage_adjust'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : DAC ch")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2 ", "2 "], ["3", "3"]]), "CHANNEL")
      this.appendValueInput("VOLTAGE")
        .appendField("out Voltage:")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField("(0-1023)")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  // ##################################################################################
  // ############################  Analog to Digital ##################################

  Blockly.Blocks['m5_ads1115_begin'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : ADC begin (SDA")
        .appendField(new Blockly.FieldTextInput("21"), "SDA")
        .appendField(", SCL")
        .appendField(new Blockly.FieldTextInput("22"), "SCL")
        .appendField(") Address")
        .appendField(new Blockly.FieldDropdown([["0x48", "0x48"], ["0x49", "0x49"], ["0x4A ", "0x4A "], ["0x4B", "0x4B"]]), "ADDR");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_ads1115_set_gain'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : ADC set Gain")
        .appendField(new Blockly.FieldDropdown([
          ["GAIN_TWOTHIRDS", "GAIN_TWOTHIRDS"],
          ["GAIN_ONE", "GAIN_ONE"],
          ["GAIN_TWO ", "GAIN_TWO"],
          ["GAIN_FOUR", "GAIN_FOUR"],
          ["GAIN_EIGHT", "GAIN_EIGHT"],
          ["GAIN_SIXTEEN", "GAIN_SIXTEEN"]
        ]), "GAIN");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_ads1115_read_adc_single'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : ADC read SingleEnded ch")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2 ", "2 "], ["3", "3"]]), "CHANNEL");
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_ads1115_read_adc_differential'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : ADC read Differential")
        .appendField(new Blockly.FieldDropdown([["0 and 1", "readADC_Differential_0_1"], ["2 and 3", "readADC_Differential_2_3"]]), "CHANNEL");
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_ads1115_read_adc_differential_mV'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : ADC read Differential (mV)")
        .appendField(new Blockly.FieldDropdown([["0 and 1", "readADC_Differential_0_1"], ["2 and 3", "readADC_Differential_2_3"]]), "CHANNEL");
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  // ##################################################################################



};
