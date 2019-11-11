const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
    name: "Sensors",
    index: 25,
    color: "65",
    icon: `file:///${dirIcon}/static/icons/car.png`,
    blocks: [
        {
            xml: `<sep gap="32"></sep><label text="M5Stack kits : Sensors" web-class="headline"></label>`
        },
        {
            xml: `<sep gap="32"></sep><label text="DHT sensor" web-class="headline"></label>`
        },
        "m5_sensor_dht_init",
        "m5_sensor_dht_readTemp",
        "m5_sensor_dht_readHumid",
        {
            xml: `<sep gap="32"></sep><label text="Luminosity sensor" web-class="headline"></label>`
        },
        {
            xml:
                `<block type="m5_sensor_ldr_analog">
                <value name="PIN">
                    <block type="m5_adc_pin_dummy_input"></block>
                </value>
            </block>`
        },
        {
            xml:
                `<block type="m5_sensor_ldr_digital">
                <value name="PIN">
                    <block type="m5_io_pin_dummy_input"></block>
                </value>
            </block>`
        },
        {
            xml: `<sep gap="32"></sep><label text="AIR Pressure sensor" web-class="headline"></label>`
        },
        "m5_sensor_bmp_init",
        "m5_sensor_bmp_readTemp",
        "m5_sensor_bmp_readPressure",
        "m5_sensor_bmp_readAltitude",
        {
            xml: `<sep gap="32"></sep><label text="Microphone sensor" web-class="headline"></label>`
        },
        {
            xml:
                `<block type="m5_sensor_microphone_analog">
                <value name="PIN">
                    <block type="m5_adc_pin_dummy_input"></block>
                </value>
            </block>`
        },
        {
            xml:
                `<block type="m5_sensor_microphone_digital">
                <value name="PIN">
                    <block type="m5_io_pin_dummy_input"></block>
                </value>
            </block>`
        },
        {
            xml: `<sep gap="32"></sep><label text="RFID sensor" web-class="headline"></label>`
        },
        "m5_sensor_rfid_init",
        "m5_sensor_rfid_cardid",
        {
            xml:
            `<block type="m5_sensor_rfid_statement">
                <value name="IF_STAT">
                    <block type="serial_write_data">
                        <value name="text">
                            <block type="m5_sensor_rfid_cardid"></block>
                        </value>
                    </block>
                </value>
            </block>`
        }
    ]
};
