const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
  name: "GPIO",
  index: 5,
  color: "230",
  icon: `file:///${dirIcon}/static/icons/chip.png`,
  blocks: [
    {
      xml: `<sep gap="24"></sep><label text="M5Stack GPIO" web-class="headline"></label>`
    },
    "m5_adc_pin_dummy_input",
    "m5_io_pin_dummy_input",
    "m5_button_read",
    "m5_button_press"
  ]
};
