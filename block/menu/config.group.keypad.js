const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
    name: "Keypad Joystick",
    index: 40,
    color: "65",
    icon: `file:///${dirIcon}/static/icons/dial.png`,
    blocks: [
        {
            xml: `<sep gap="32"></sep><label text="Keypad 4x4" web-class="headline"></label>`
        },
        {
            xml:
        `<block type="m5_keyboard_init">
                <value name="Col0"><block type="math_number"><field name="NUM">5</field></block></value>
                <value name="Col1"><block type="math_number"><field name="NUM">12</field></block></value>
                <value name="Col2"><block type="math_number"><field name="NUM">13</field></block></value>
                <value name="Col3"><block type="math_number"><field name="NUM">15</field></block></value>
                <value name="Row0"><block type="math_number"><field name="NUM">17</field></block></value>
                <value name="Row1"><block type="math_number"><field name="NUM">16</field></block></value>
                <value name="Row2"><block type="math_number"><field name="NUM">21</field></block></value>
                <value name="Row3"><block type="math_number"><field name="NUM">22</field></block></value>
        </block>`
        },
        "m5_keyboard_press",
        {
            xml: `<sep gap="32"></sep><label text="Joystick" web-class="headline"></label>`
        },
        {
            xml:
            `<block type="m5_joystick_x_read">
                <value name="X_PIN">
                    <block type="m5_adc_pin_dummy_input"></block>
                </value>
            </block>`
        },
        {
            xml:
            `<block type="m5_joystick_y_read">
                <value name="Y_PIN">
                    <block type="m5_adc_pin_dummy_input"></block>
                </value>
            </block>`
        },
        {
            xml:
            `<block type="m5_joystick_button_read">
                <value name="B_PIN">
                    <block type="m5_io_pin_dummy_input"></block>
                </value>
            </block>`
        },
        {
            xml: `<sep gap="32"></sep><label text="Encoder" web-class="headline"></label>`
        },
        {
            xml:
            `<block type="m5_encoder_init">
                <value name="PIN_A">
                    <block type="math_number">><field name="NUM">12</field></block>
                </value>
                <value name="PIN_B">
                    <block type="math_number">><field name="NUM">13</field></block>
                </value>
            </block>`
        },
        'm5_encoder_read_position',
        {
            xml:
            `<block type="m5_encoder_button_read">
                <value name="B_PIN">
                    <block type="m5_io_pin_dummy_input"></block>
                </value>
            </block>`
        }
    ]
};
