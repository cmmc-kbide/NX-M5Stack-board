const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
  "use strict";
  // #############################  Servo Motor  ##################################
  Blockly.Blocks['m5_sensor_servo_init'] = {
    init: function () {
      this.appendDummyInput()
        // .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/1137754.svg`,20,20,"*"))
        .appendField("M5Stack : Servo motor begin");
      this.appendValueInput("PIN")
        .setCheck("Number");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_sensor_servo_angle'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : Servo motor go to position");
      this.appendValueInput("ANGLE")
        .setCheck("Number");
      this.appendDummyInput()
        .appendField("(0-180)");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  // #############################  DC Motor  ##################################
  Blockly.Blocks['m5_sensor_dc_init'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : DC-Motor Setup");
      this.appendValueInput("ENA")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Timer ch :")
        .appendField(new Blockly.FieldDropdown([["pwm0", "0"], ["pwm1", "1"], ["pwm2", "2"], ["pwm3", "3"], ["pwm4", "4"], ["pwm5", "5"], ["pwm6", "6"]]), "TIMER_A")
        .appendField(": M+");
      this.appendValueInput("ENB")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Timer ch :")
        .appendField(new Blockly.FieldDropdown([["pwm0", "0"], ["pwm1", "1"], ["pwm2", "2"], ["pwm3", "3"], ["pwm4", "4"], ["pwm5", "5"], ["pwm6", "6"]]), "TIMER_B")
        .appendField(": M-");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_sensor_dc_forward'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : DC-Motor forward speed");
      this.appendValueInput("SPEED")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField("(0-255)");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_sensor_dc_backward'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : DC-Motor backward speed");
      this.appendValueInput("SPEED")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField("(0-255)");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_sensor_dc_stop'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : DC-Motor stop");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  // #############################  Steper Motor  ##################################
  Blockly.Blocks['m5_motor_stepper_init'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : Stepper Motor Setup");
      this.appendValueInput("MOTOR_A")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("A :");
      this.appendValueInput("MOTOR_B")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("B :");
      this.appendValueInput("MOTOR_C")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("C :");
      this.appendValueInput("MOTOR_D")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("D :");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_motor_stepper_forward'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : Stepper Motor forward");
      this.appendValueInput("DEGREE")
        .setCheck("Number");
      this.appendDummyInput()
        .appendField("degree (0-360)");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_motor_stepper_backward'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : Stepper Motor backward");
      this.appendValueInput("DEGREE")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField("degree (0-360)");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_motor_stepper_stop'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : Stepper Motor stop");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

};