module.exports = function (Blockly) {
  "use strict";

  // ############################   RS232 Communication   ##################################
  Blockly.JavaScript['m5_rs232_begin'] = function (block) {
    var dropdown_serial = block.getFieldValue('SERIAL');
    var dropdown_baudrate = block.getFieldValue('BAUDRATE');
    var number_rx = block.getFieldValue('RXD');
    var number_tx = block.getFieldValue('TXD');

    var code = `
${dropdown_serial}.begin(${dropdown_baudrate}, SERIAL_8N1, ${number_rx}, ${number_tx});
\n`;
    return code;
  };


  Blockly.JavaScript['m5_rs232_available'] = function (block) {
    var dropdown_serial = block.getFieldValue('SERIAL');
    var statements_if_stat = Blockly.JavaScript.statementToCode(block, 'IF_STAT');
    var code =
      `
if (${dropdown_serial}.available()) {
${statements_if_stat}
}
\n`;
    return code;
  };

  Blockly.JavaScript['m5_rs232_serial_read'] = function (block) {
    var dropdown_serial = block.getFieldValue('SERIAL');
    var code = `${dropdown_serial}.read()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };


  Blockly.JavaScript['m5_rs232_serial_write_char'] = function (block) {
    var dropdown_serial = block.getFieldValue('SERIAL');
    var value_data = block.getFieldValue('DATA');
    var code = `${dropdown_serial}.write("${value_data}");\n`;
    return code;
  };

  Blockly.JavaScript['m5_rs232_serial_write_num'] = function (block) {
    var dropdown_serial = block.getFieldValue('SERIAL');
    var value_data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${dropdown_serial}.write(${value_data});\n`;
    return code;
  };

  // #######################################################################################
  // ############################   RS485 Communication   ##################################
  Blockly.JavaScript['m5_rs485_begin'] = function (block) {
    var dropdown_serial = block.getFieldValue('SERIAL');
    var dropdown_baudrate = block.getFieldValue('BAUDRATE');
    var number_rx = block.getFieldValue('RXD');
    var number_tx = block.getFieldValue('TXD');

    var code = `
${dropdown_serial}.begin(${dropdown_baudrate}, SERIAL_8N1, ${number_rx}, ${number_tx});
\n`;
    return code;
  };


  Blockly.JavaScript['m5_rs485_available'] = function (block) {
    var dropdown_serial = block.getFieldValue('SERIAL');
    var statements_if_stat = Blockly.JavaScript.statementToCode(block, 'IF_STAT');
    var code =
      `
if (${dropdown_serial}.available()) {
${statements_if_stat}
}
\n`;
    return code;
  };

  Blockly.JavaScript['m5_rs485_serial_read'] = function (block) {
    var dropdown_serial = block.getFieldValue('SERIAL');
    var code = `${dropdown_serial}.read()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };


  Blockly.JavaScript['m5_rs485_serial_write_char'] = function (block) {
    var dropdown_serial = block.getFieldValue('SERIAL');
    var value_data = block.getFieldValue('DATA');
    var code = `${dropdown_serial}.write("${value_data}");\n`;
    return code;
  };

  Blockly.JavaScript['m5_rs485_serial_write_num'] = function (block) {
    var dropdown_serial = block.getFieldValue('SERIAL');
    var value_data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${dropdown_serial}.write(${value_data});\n`;
    return code;
  };
  // ##############################################################################
};
