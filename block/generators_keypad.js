module.exports = function (Blockly) {
  "use strict";

  // #############################  Keypad 4x4  ############################
  Blockly.JavaScript['m5_keyboard_init'] = function(block) {
    var value_col0 = Blockly.JavaScript.valueToCode(block, 'Col0', Blockly.JavaScript.ORDER_ATOMIC);
    var value_col1 = Blockly.JavaScript.valueToCode(block, 'Col1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_col2 = Blockly.JavaScript.valueToCode(block, 'Col2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_col3 = Blockly.JavaScript.valueToCode(block, 'Col3', Blockly.JavaScript.ORDER_ATOMIC);
    var value_row0 = Blockly.JavaScript.valueToCode(block, 'Row0', Blockly.JavaScript.ORDER_ATOMIC);
    var value_row1 = Blockly.JavaScript.valueToCode(block, 'Row1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_row2 = Blockly.JavaScript.valueToCode(block, 'Row2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_row3 = Blockly.JavaScript.valueToCode(block, 'Row3', Blockly.JavaScript.ORDER_ATOMIC);

    var code =`
#EXTINC#include "Keypad.h" #END
#VARIABLE
String getKeyboard;
const byte ROWS = 4;
const byte COLS = 4;

char keys[ROWS][COLS] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};

byte colPins[COLS] = {${value_col0}, ${value_col1}, ${value_col2}, ${value_col3}}; 
byte rowPins[ROWS] = {${value_row0}, ${value_row1}, ${value_row2}, ${value_row3}}; 

Keypad m5Keypad = Keypad( makeKeymap(keys), rowPins, colPins, ROWS, COLS );
#END
\n`;

    return code;
  };


  Blockly.JavaScript['m5_keyboard_init2'] = function(block) {
    var code = `...\n`;
    return code;
  };

  Blockly.JavaScript['m5_keyboard_getKey'] = function(block) {
    var code = `m5Keypad.getKey()\n`;
    return code;
  };

  Blockly.JavaScript['m5_keyboard_press'] = function(block) {
    var code = `#LOOP_EXT_CODEgetKeyboard = String(m5Keypad.getKey());#ENDgetKeyboard\n`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  // #######################################################################
  // #############################  Joystick  ##############################
  Blockly.JavaScript['m5_joystick_x_read'] = function(block) {
    var value_x_pin = Blockly.JavaScript.valueToCode(block, 'X_PIN', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `analogRead(${value_x_pin})\n`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['m5_joystick_y_read'] = function(block) {
    var value_y_pin = Blockly.JavaScript.valueToCode(block, 'Y_PIN', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `analogRead(${value_y_pin})\n`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['m5_joystick_button_read'] = function(block) {
    var value_button_pin = Blockly.JavaScript.valueToCode(block, 'B_PIN', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `#SETUPpinMode(${value_button_pin}, INPUT_PULLUP);#ENDdigitalRead(${value_button_pin})\n`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  // #######################################################################
  // #############################  Encoder  ###############################
  Blockly.JavaScript['m5_encoder_init'] = function(block) {
    var value_pin_a = Blockly.JavaScript.valueToCode(block, 'PIN_A', Blockly.JavaScript.ORDER_ATOMIC);
    var value_pin_b = Blockly.JavaScript.valueToCode(block, 'PIN_B', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 
`
#EXTINC#include <Encoder.h>#END
#VARIABLEEncoder myEncoder(${value_pin_a}, ${value_pin_b});#END
\n`;
    return code;
  };

  Blockly.JavaScript['m5_encoder_read_position'] = function(block) {
    var code = `myEncoder.read()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['m5_encoder_button_read'] = function(block) {
    var value_button_pin = Blockly.JavaScript.valueToCode(block, 'B_PIN', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `#SETUPpinMode(${value_button_pin}, INPUT_PULLUP);#ENDdigitalRead(${value_button_pin})\n`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  // #######################################################################
};
