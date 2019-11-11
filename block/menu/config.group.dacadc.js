const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
    name: "Digital to Analog",
    index: 30,
    color: "65",
    icon: `file:///${dirIcon}/static/icons/transferdata.png`,
    blocks: [
        {
            xml: `<sep gap="32"></sep><label text="M5Stack kits : Digital Analog converter" web-class="headline"></label>`
        },
        {
            xml: `<sep gap="32"></sep><label text="DAC x 4 channel" web-class="headline"></label>`
        },
        "m5_dac_begin",
        "m5_dac_out_voltage",
        {
            xml:
            `<block type="m5_dac_out_voltage_adjust">
                <value name="VOLTAGE">
                    <shadow type="math_number">
                        <field name="NUM">512</field>
                    </shadow>
                </value>
            </block>`
        },
        {
            xml: `<sep gap="32"></sep><label text="ADC x 4 channel" web-class="headline"></label>`
        },
        'm5_ads1115_begin',
        'm5_ads1115_set_gain',
        'm5_ads1115_read_adc_single',
        'm5_ads1115_read_adc_differential',
        'm5_ads1115_read_adc_differential_mV'
    ]
};
