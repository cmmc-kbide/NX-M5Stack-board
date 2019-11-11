module.exports = function (Blockly) {
  "use strict";
  Blockly.Blocks["m5_adc_pin_dummy_input"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Analog Pin")
        .appendField(new Blockly.FieldDropdown([
          ["ADC6 (IO34)", "34"],
          ["ADC7 (IO35)", "35"],
          ["ADC1 (IO36)", "36"]
        ]), "PIN");
      this.setOutput(true, null);
      this.setColour(45);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["m5_io_pin_dummy_input"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Digital Pin")
        .appendField(new Blockly.FieldDropdown([
          ["GPIO_02", "2"],
          ["GPIO_05", "5"],
          ["GPIO_12", "12"],
          ["GPIO_13", "13"],
          ["GPIO_15", "15"],
          ["BUTTON_A (IO39)", "39"],
          ["BUTTON_B (IO38)", "38"],
          ["BUTTON_C (IO37)", "37"],
          ["SPEAKER (IO25)", "25"],
          ["TFT_LED (IO32)", "32"],
          ["I2C_SDA (IO21)", "21"],
          ["I2C_SCL (IO22)", "22"],
          ["SPI_SCK (IO18)", "18"],
          ["SPI_MISO (IO19)", "19"],
          ["SPI_MOSI (IO23)", "23"],
          ["UART2_TXD (IO17)", "17"],
          ["UART2_RXD (IO16)", "16"]
        ]), "IO_PIN");
      this.setOutput(true, null);
      this.setColour(45);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_button_read'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5 read Button")
        .appendField(new Blockly.FieldDropdown([["BtnA", "BtnA"], ["BtnB", "BtnB"], ["BtnC", "BtnC"]]), "button");
      this.setOutput(true, null);
      this.setColour(45);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_button_press'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5 Button")
        .appendField(new Blockly.FieldDropdown([["BtnA", "BtnA"], ["BtnB", "BtnB"], ["BtnC", "BtnC"]]), "button")
        .appendField(" isPressed");
      this.setOutput(true, null);
      this.setColour(45);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_button_press_for'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5 Button")
        .appendField(new Blockly.FieldDropdown([["BtnA", "BtnA"], ["BtnB", "BtnB"], ["BtnC", "BtnC"]]), "button")
        .appendField(" pressedFor");
      this.appendValueInput("time")
        .setCheck("Number");
      this.appendDummyInput()
        .appendField("ms");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(45);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };


};

