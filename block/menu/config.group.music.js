const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
  name: "Music",
  index: 20,
  color: "230",
  icon: `file:///${dirIcon}/static/icons/karaoke.png`,
  blocks: [
    {
      xml: `<sep gap="32"></sep><label text="Speaker" web-class="headline"></label>`
    },
    "speaker_begin",
    "speaker_beep",
    "speaker_mute",
    {
      xml: `<sep gap="20"></sep><label text="Text to Speak" web-class="headline"></label>`
    },
    "speaker_set_volume",
    "speaker_get_volume",
    "speaker_tts_word",
    {
      xml:
        `<block type="speaker_tts_speak">
          <value name="words">                    
            <block type="speaker_tts_word">
            </block>
          </value>
        </block>`
    },
    {
      xml:
        `<block type="speaker_tts_speak_number">
          <value name="number">                    
            <block type="math_number">
              <field name="NUM">326</field>
            </block>
          </value>
        </block>`
    },
    {
      xml: `<sep gap="20"></sep><label text="Play speaker note" web-class="headline"></label>`
    },
    "speaker_music_note",
    {
      xml:
        `<block type="speaker_play_note">
          <value name="note">                    
            <block type="speaker_music_note">
            </block>
          </value>
        </block>`
    }
  ]
};
