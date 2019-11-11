const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
    name: "Display",
    index: 10,
    color: "230",
    icon: `file:///${dirIcon}/static/icons/graphictablet.png`,
    blocks: [
        {
            xml: `<sep gap="32"></sep><label text="M5Stack ILI9341 320x240" web-class="headline"></label>`
        },
        {
            xml: `<block type="variables_set">
                                     <field name="VAR">img1</field>
                                     <value name="VALUE">
                                         <block type="i2c128x64_create_image" inline="false"></block>
                                     </value>
                                 </block>`
        },
        {
            xml:
                `<block type="i2c128x64_display_image">
                             <value name="img">
                                 <block type="variables_get">
                                     <field name="VAR">img1</field>
                                 </block>
                             </value>
                             <value name="x">
                                 <shadow type="math_number">
                                     <field name="NUM">0</field>
                                 </shadow>
                             </value>
                             <value name="x">
                                 <shadow type="math_number">
                                     <field name="NUM">0</field>
                                 </shadow>
                             </value>
                             <value name="y">
                                 <shadow type="math_number">
                                     <field name="NUM">0</field>
                                 </shadow>
                             </value>
                             <value name="width">
                                 <shadow type="math_number">
                                     <field name="NUM">10</field>
                                 </shadow>
                             </value>
                             <value name="height">
                                 <shadow type="math_number">
                                     <field name="NUM">10</field>
                                 </shadow>
                             </value>
                         </block>`
        },
        {
            xml:
                `<block type="tft_display_setBrightness">
                    <value name="bright">
                        <block type="math_number">
                            <field name="NUM">255</field>
                        </block>
                    </value>
                </block>`
        },
        "tft_display_fillScreen",
        {
            xml:
                `<block type="tft_display_print">
                            <value name="TEXT">
                                <shadow type="basic_string">
                                    <field name="VALUE">Hello world!</field>
                                </shadow>
                            </value>
                            <value name="X">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                            <value name="Y">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                        </block>`
        },
        {
            xml:
                `<block type="tft_display_draw_line">
                            <value name="x0">
                                <shadow type="math_number">
                                    <field name="NUM">10</field>
                                </shadow>
                            </value>
                            <value name="y0">
                                <shadow type="math_number">
                                    <field name="NUM">10</field>
                                </shadow>
                            </value>
                            <value name="x1">
                                <shadow type="math_number">
                                    <field name="NUM">100</field>
                                </shadow>
                            </value>
                            <value name="y1">
                                <shadow type="math_number">
                                    <field name="NUM">50</field>
                                </shadow>
                            </value>
                        </block>`
        },
        {
            xml:
                `<block type="tft_display_draw_rect">
                            <value name="x">
                                <shadow type="math_number">
                                    <field name="NUM">50</field>
                                </shadow>
                            </value>
                            <value name="y">
                                <shadow type="math_number">
                                    <field name="NUM">220</field>
                                </shadow>
                            </value>
                            <value name="width">
                                <shadow type="math_number">
                                    <field name="NUM">50</field>
                                </shadow>
                            </value>
                            <value name="height">
                                <shadow type="math_number">
                                    <field name="NUM">30</field>
                                </shadow>
                            </value>
                        </block>`
        },
        {
            xml:
                `<block type="tft_display_draw_circle">
                            <value name="x">
                                <shadow type="math_number">
                                    <field name="NUM">250</field>
                                </shadow>
                            </value>
                            <value name="y">
                                <shadow type="math_number">
                                    <field name="NUM">200</field>
                                </shadow>
                            </value>
                            <value name="r">
                                <shadow type="math_number">
                                    <field name="NUM">20</field>
                                </shadow>
                            </value>
                        </block>`
        },
        {
            xml:
                `<block type="tft_display_draw_triangle">
                            <value name="x0">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                            <value name="y0">
                                <shadow type="math_number">
                                    <field name="NUM">100</field>
                                </shadow>
                            </value>
                            <value name="x1">
                                <shadow type="math_number">
                                    <field name="NUM">160</field>
                                </shadow>
                            </value>
                            <value name="y1">
                                <shadow type="math_number">
                                    <field name="NUM">50</field>
                                </shadow>
                            </value>
                            <value name="x2">
                                <shadow type="math_number">
                                    <field name="NUM">250</field>
                                </shadow>
                            </value>
                            <value name="y2">
                                <shadow type="math_number">
                                    <field name="NUM">150</field>
                                </shadow>
                            </value>
                        </block>`
        },
        {
            xml:
                `<block type="display_draw_progress_bar">
                            <value name="x">
                                <shadow type="math_number">
                                    <field name="NUM">120</field>
                                </shadow>
                            </value>
                            <value name="y">
                                <shadow type="math_number">
                                    <field name="NUM">110</field>
                                </shadow>
                            </value>
                            <value name="width">
                                <shadow type="math_number">
                                    <field name="NUM">100</field>
                                </shadow>
                            </value>
                            <value name="height">
                                <shadow type="math_number">
                                    <field name="NUM">20</field>
                                </shadow>
                            </value>
                            <value name="progress">
                                <shadow type="math_number">
                                    <field name="NUM">50</field>
                                </shadow>
                            </value>
                        </block>`
        },
        {
            xml:
                `<block type="display_draw_pixel">
                            <value name="x">
                                <shadow type="math_number">
                                    <field name="NUM">160</field>
                                </shadow>
                            </value>
                            <value name="y">
                                <shadow type="math_number">
                                    <field name="NUM">120</field>
                                </shadow>
                            </value>
                        </block>`
        },
        {
            xml:
                `<block type="display_qrcode">
                    <value name="NAME">
                        <shadow type="basic_string">
                            <field name="VALUE">www.kbide.org</field>
                        </shadow>
                    </value>
                    <value name="x">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                     </value>
                     <value name="y">
                        <shadow type="math_number">
                            <field name="NUM">10</field>
                        </shadow>
                     </value>
                     <value name="width">
                        <shadow type="math_number">
                            <field name="NUM">220</field>
                        </shadow>
                     </value>
                     <value name="version">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                     </value>
                </block>`
        },
        "basic_string"
    ]
};