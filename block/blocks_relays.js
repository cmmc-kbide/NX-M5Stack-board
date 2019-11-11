const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
  "use strict";
  // ######################################################################
  Blockly.Blocks["m5_relay_begin"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("Relay1", null, ["Plugin.Relay"], ["Plugin.Relay"]), "instance")
        .appendField("begin pin");
      this.appendValueInput("PIN")
        .setCheck("Number");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['m5_relay_onoff'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("M5Stack : ")
        .appendField(new Blockly.FieldVariable("Relay1", null, ["Plugin.Relay"], ["Plugin.Relay"]), "instance")
      this.appendDummyInput()
        .appendField("status")
        .appendField(new Blockly.FieldDropdown([["ON", "0"], ["OFF", "1"]]), "STATE")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  // ######################################################################
};
