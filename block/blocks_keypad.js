const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
  "use strict";
  // #############################  Keypad 4x4  ############################
  Blockly.Blocks['m5_keyboard_init'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : Keyboard 4x4 Setup:");
      this.appendValueInput("Col0")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("COL-0");
      this.appendValueInput("Col1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("COL-1");
      this.appendValueInput("Col2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("COL-2");
      this.appendValueInput("Col3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("COL-3");
      this.appendValueInput("Row0")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ROW-0");
      this.appendValueInput("Row1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ROW-1");
      this.appendValueInput("Row2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ROW-2");
      this.appendValueInput("Row3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ROW-3");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_keyboard_init2'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : Keyboard 4x4 mapPin:");
      this.appendValueInput("Col0")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("COL-0");
      this.appendValueInput("Col1")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("COL-1");
      this.appendValueInput("Col2")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("COL-2");
      this.appendValueInput("Col3")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("COL-3");
      this.appendValueInput("Row0")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ROW-0");
      this.appendValueInput("Row1")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ROW-1");
      this.appendValueInput("Row2")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ROW-2");
      this.appendValueInput("Row3")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ROW-3");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_keyboard_getKey'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : Keyboard 4x4 getKey");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_keyboard_press'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : Keyboard 4x4 getKey");
      this.setInputsInline(false);
      this.setOutput(true, "String");
      this.setColour(330);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  // #######################################################################
  // #############################  Joystick  ##############################
  Blockly.Blocks['m5_joystick_x_read'] = {
    init: function () {
      this.appendValueInput("X_PIN")
        .setCheck("Number")
        .appendField("M5Stack: Joystic X-ADC pin");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_joystick_y_read'] = {
    init: function () {
      this.appendValueInput("Y_PIN")
        .setCheck("Number")
        .appendField("M5Stack: Joystic B-ADC pin");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_joystick_button_read'] = {
    init: function () {
      this.appendValueInput("B_PIN")
        .setCheck("Number")
        .appendField("M5Stack: Joystic Button pin");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  // #######################################################################
  // #############################  Encoder  ###############################
  Blockly.Blocks['m5_encoder_init'] = {
    init: function () {
      this.appendValueInput("PIN_A")
        .setCheck("Number")
        .appendField("M5Stack: Encoder setup (A");
      this.appendValueInput("PIN_B")
        .setCheck("Number")
        .appendField(", B");
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_encoder_read_position'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack: Encoder read Position");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_encoder_button_read'] = {
    init: function () {
      this.appendValueInput("B_PIN")
        .setCheck("Number")
        .appendField("M5Stack: Encoder read Button pin");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  // #######################################################################
};
