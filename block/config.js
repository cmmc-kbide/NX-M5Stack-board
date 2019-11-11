let display = require("./menu/config.group.display");
let neopixel = require("./menu/config.group.neopixel");
let music = require("./menu/config.group.music");
let gpio = require("./menu/config.group.gpio");
let sensors = require("./menu/config.group.sensors");
let sdcard = require("./menu/config.group.sdcard");
let motors = require("./menu/config.group.motors");
let relays = require("./menu/config.group.relays");
let keypad = require("./menu/config.group.keypad");
let dacadc = require("./menu/config.group.dacadc");
let communication = require("./menu/config.group.communication");

module.exports = {
  //language=HTML format=false
  blocks: [
    gpio,
    display,
    neopixel,
    music,
    sensors,
    dacadc,
    sdcard,
    motors,
    relays,
    keypad,
    communication,
    {
      override : true,
      name: "Time",
      index: 60,
      color: "230",
      icon: "/static/icons/icons8_Story_Time_96px.png",
      blocks: [
          {
              xml:
                  `<block type="time_delay">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
          },
          {
              xml:
                  `<block type="time_delay_microsec">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
          },
          "time_millis",
          "time_micros"
      ]
  },
  ],
};
