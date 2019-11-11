const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
    name: "RS232 RS485",
    index: 45,
    color: "65",
    icon: `file:///${dirIcon}/static/icons/network.png`,
    blocks: [
        {
            xml: `<sep gap="32"></sep><label text="M5Stack kits : RS232 and RS485 Communication" web-class="headline"></label>`
        },
        {
            xml: `<sep gap="32"></sep><label text="RS-232" web-class="headline"></label>`
        },
        "m5_rs232_begin",
        {
            xml:
                `<block type="m5_rs232_available">
                <value name="IF_STAT">
                    <block type="serial_write_data">
                        <value name="text">
                            <block type="m5_rs232_serial_read"></block>
                        </value>
                    </block>
                </value>
            </block>`
        },
        "m5_rs232_serial_read",
        "m5_rs232_serial_write_char",
        {
            xml:
                `<block type="m5_rs232_serial_write_num">
                <value name="DATA">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
            </block>`
        },
        {
            xml: `<sep gap="32"></sep><label text="RS-485" web-class="headline"></label>`
        },
        "m5_rs485_begin",
        {
            xml:
                `<block type="m5_rs485_available">
                <value name="IF_STAT">
                    <block type="serial_write_data">
                        <value name="text">
                            <block type="m5_rs485_serial_read"></block>
                        </value>
                    </block>
                </value>
            </block>`
        },
        "m5_rs485_serial_read",
        "m5_rs485_serial_write_char",
        {
            xml:
                `<block type="m5_rs485_serial_write_num">
                <value name="DATA">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
            </block>`
        }
    ]
};
