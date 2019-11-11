const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
    name: "Motors",
    index: 35,
    color: "65",
    icon: `file:///${dirIcon}/static/icons/engine.png`,
    blocks: [
        {
            xml: `<sep gap="32"></sep><label text="M5Stack kits : Motors" web-class="headline"></label>`
        },
        {
            xml: `<sep gap="32"></sep><label text="Servo Motor" web-class="headline"></label>`
        },
        {
            xml:
                `<block type="m5_sensor_servo_init">
                <value name="PIN">
                    <block type="m5_io_pin_dummy_input"></block>
                </value>
            </block>`
        },
        {
            xml:
                `<block type="m5_sensor_servo_angle">
                <value name="ANGLE">
                        <shadow type="math_number">
                            <field name="NUM">90</field>
                        </shadow>
                </value>
            </block>`
        },
        {
            xml: `<sep gap="32"></sep><label text="DC Motor" web-class="headline"></label>`
        },
        {
            xml: 
            `<block type="m5_sensor_dc_init">
                <value name="ENA">
                    <block type="math_number">
                        <field name="NUM">13</field>
                    </block>
                </value>
                <value name="ENB">
                    <block type="math_number">
                        <field name="NUM">15</field>
                 </block>
                </value>
            </block>`
        },
        {
            xml: 
            `<block type="m5_sensor_dc_forward">
                <value name="SPEED">
                    <block type="math_number">
                        <field name="NUM">255</field>
                    </block>
                </value>
            </block>`
        },
        {
            xml: 
            `<block type="m5_sensor_dc_backward">
                <value name="SPEED">
                    <block type="math_number">
                        <field name="NUM">255</field>
                    </block>
                </value>
            </block>`
        },
        "m5_sensor_dc_stop",
        {
            xml: `<sep gap="32"></sep><label text="Stepper Motor" web-class="headline"></label>`
        },
        {
            xml: 
            `<block type="m5_motor_stepper_init">
                <value name="MOTOR_A">
                    <block type="math_number">
                        <field name="NUM">2</field>
                    </block>
                </value>
                <value name="MOTOR_B">
                    <block type="math_number">
                        <field name="NUM">5</field>
                    </block>
                </value>
                <value name="MOTOR_C">
                    <block type="math_number">
                        <field name="NUM">12</field>
                    </block>
                </value>
                <value name="MOTOR_D">
                    <block type="math_number">
                        <field name="NUM">13</field>
                    </block>
                </value>
            </block>`
        },
        {
            xml: 
            `<block type="m5_motor_stepper_forward">
                <value name="DEGREE">
                    <block type="math_number">
                        <field name="NUM">90</field>
                    </block>
                </value>
            </block>`
        },
        {
            xml: 
            `<block type="m5_motor_stepper_backward">
                <value name="DEGREE">
                    <block type="math_number">
                        <field name="NUM">90</field>
                    </block>
                </value>
            </block>`
        },
        "m5_motor_stepper_stop"
    ]
};
