module.exports = function (Blockly) {
  "use strict";

  // ############################   Digital to Analog   ##################################
  Blockly.JavaScript['m5_dac_begin'] = function (block) {
    var number_sda = block.getFieldValue('SDA');
    var number_scl = block.getFieldValue('SCL');

    var code = `
#VARIABLE#define DAC_ADDR 0x4C#END
#FUNCTION
void outVoltage(uint8_t ch, uint16_t v) {

  Wire.beginTransmission(DAC_ADDR);
  Wire.write(0x10 | (ch << 1));

  Wire.write((v >> 2) & 0xff);
  Wire.write((v << 6) & 0xff);
  Wire.endTransmission();
}
#END
Wire.begin(${number_sda}, ${number_scl});
\n`;
    return code;
  };

  Blockly.JavaScript['m5_dac_out_voltage'] = function (block) {
    var dropdown_ch = block.getFieldValue('CHANNEL');
    var dropdown_out = block.getFieldValue('VOLTAGE');
    var code = `outVoltage(${dropdown_ch}, ${dropdown_out});\n`;
    return code;
  };

  Blockly.JavaScript['m5_dac_out_voltage_adjust'] = function (block) {
    var dropdown_ch = block.getFieldValue('CHANNEL');
    var dropdown_out = Blockly.JavaScript.valueToCode(block, 'VOLTAGE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `outVoltage(${dropdown_ch}, ${dropdown_out});\n`;
    return code;
  };

  // ##################################################################################
  // ############################  Analog to Digital ##################################
  
  Blockly.JavaScript['m5_ads1115_begin'] = function (block) {
    var dropdown_addr = block.getFieldValue('ADDR');
    var code =
      `
#EXTINC
#include <Adafruit_ADS1015.h>
#END
#VARIABLE
Adafruit_ADS1115 adc(${dropdown_addr});
#END
adc.begin();
\n
`;

    return code;
  };

  Blockly.JavaScript['m5_ads1115_set_gain'] = function (block) {
    var dropdown_gain = block.getFieldValue('GAIN');
    var code = `#SETUPadc.setGain(${dropdown_gain});#END`;
    return code;
  };

  Blockly.JavaScript['m5_ads1115_read_adc_single'] = function (block) {
    var dropdown_ch = block.getFieldValue('CHANNEL');
    var code = `adc.readADC_SingleEnded(${dropdown_ch})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['m5_ads1115_read_adc_differential'] = function (block) {
    var dropdown_ch = block.getFieldValue('CHANNEL');
    var code = `adc.${dropdown_ch}()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['m5_ads1115_read_adc_differential_mV'] = function (block) {
    var dropdown_ch = block.getFieldValue('CHANNEL');
    var code = `adc.${dropdown_ch}() * 0.1875F`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  // ##############################################################################

};
