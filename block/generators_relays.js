module.exports = function (Blockly) {
  "use strict";

  // ######################################################################
  Blockly.JavaScript["m5_relay_begin"] = function (block) {
    var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code =`
#VARIABLE
int ${variable_instance} = ${value_pin};
#END
pinMode(${variable_instance}, OUTPUT);\n`;
    return code;
  };

  Blockly.JavaScript['m5_relay_onoff'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    // var value_state = Blockly.JavaScript.valueToCode(block, 'STATE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_state = block.getFieldValue('STATE');
    var code = `digitalWrite(${variable_instance}, ${value_state});`;
    return code;
  };
  // ######################################################################
};
