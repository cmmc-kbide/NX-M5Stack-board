module.exports = function (Blockly) {
  "use strict";
  Blockly.JavaScript["m5_adc_pin_dummy_input"] = function (block) {
    let dropdown_name = block.getFieldValue("PIN");
    let code = `${dropdown_name}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["m5_io_pin_dummy_input"] = function (block) {
    let dropdown_name = block.getFieldValue("IO_PIN");
    let code = `${dropdown_name}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['m5_button_read'] = function (block) {
    var dropdown_button = block.getFieldValue('button');
    var code = `M5.${dropdown_button}.read()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['m5_button_press'] = function (block) {
    var dropdown_button = block.getFieldValue('button');
    var code = `M5.${dropdown_button}.wasPressed()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['m5_button_press_for'] = function (block) {
    var dropdown_button = block.getFieldValue('button');
    var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `M5.${dropdown_button}.pressedFor(${value_time})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  // M5.BtnA/B/C.read();
  //     M5.BtnA/B/C.isPressed();
  //     M5.BtnA/B/C.isReleased();
  //     M5.BtnA/B/C.wasPressed();
  //     M5.BtnA/B/C.wasReleased();
  //     M5.BtnA/B/C.wasreleasedFor()
  //     M5.BtnA/B/C.pressedFor(uint32_t ms);
  //     M5.BtnA/B/C.releasedFor(uint32_t ms);
  //     M5.BtnA/B/C.lastChange();


};
