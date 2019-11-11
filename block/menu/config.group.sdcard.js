const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
  name: "SD Card",
  index: 50,
  color: "65",
  icon: `file:///${dirIcon}/static/icons/sdcard.png`,
  blocks: [
     "sdcard_begin",
     {
      xml:
        `<block type="sdcard_write_txt">
            <value name="DATA">
                <shadow type="basic_string">
                    <field name="VALUE">Hello KB-IDE</field>
                </shadow>
            </value>
        </block>`
     },
     "sdcard_read_txt",
     {
      xml:
        `<block type="sdcard_write_csv">
            <value name="DATA1">
                <shadow type="basic_string">
                    <field name="VALUE"></field>
                </shadow>
            </value>
            <value name="DATA2">
                <shadow type="basic_string">
                    <field name="VALUE"></field>
                </shadow>
            </value>
            <value name="DATA3">
                <shadow type="basic_string">
                    <field name="VALUE"></field>
                </shadow>
            </value>
            <value name="DATA4">
                <shadow type="basic_string">
                    <field name="VALUE"></field>
                </shadow>
            </value>
        </block>`
     }
  ]
};
