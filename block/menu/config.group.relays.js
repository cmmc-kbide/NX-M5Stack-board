const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
    name: "Relays",
    index: 35,
    color: "65",
    icon: `file:///${dirIcon}/static/icons/switch.png`,
    blocks: [
        {
            xml: `<sep gap="32"></sep><label text="M5Stack kits : RELAY x 8" web-class="headline"></label>`
        },
        {
            xml:
                `<block type="m5_relay_begin">
                <value name="PIN">
                        <block type="m5_io_pin_dummy_input">
                        </block>
                </value>
            </block>`
        },
        "m5_relay_onoff"
    ]
};
