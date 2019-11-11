var hexToRgbA = function (hex) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
  } else {
    console.error(`${hex} is invalid.`);
  }
};


module.exports = function (Blockly) {
  "use strict";
  const ORDER_ATOMIC = Blockly.JavaScript.ORDER_ATOMIC;
  const valueToCode = (a, b) => Blockly.JavaScript.valueToCode(a, b);

  Blockly.JavaScript["sdcard_begin"] = function (block) {
    var code = `
#VARIABLEFile file;#END
#FUNCTION
void listDir(fs::FS &fs, const char * dirname, uint8_t levels) {
  File root = fs.open(dirname);
  if (!root) {
    Serial.println("Failed to open directory");
    return;
  }
  if (!root.isDirectory()) {
    Serial.println("Not a directory");
    return;
  }

  File file = root.openNextFile();
  while (file) {
    if (file.isDirectory()) {
      Serial.print("  DIR : ");
      Serial.println(file.name());
      if (levels) {
        listDir(fs, file.name(), levels - 1);
      }
    } else {
      Serial.print("  FILE: ");
      Serial.print(file.name());
      Serial.print("  SIZE: ");
      Serial.println(file.size());
    }
    file = root.openNextFile();
  }
}

String readFile(const char *path) {
  char ch;
  String msg;
  File file = SD.open(path);
  if (!file) {
    Serial.println("Failed to open file for reading");
    return;
  }

  Serial.print("Read from file: ");
  while (file.available()) {
    ch = file.read();
    msg += ch;
  }
  return msg;
}

void writeFile(fs::FS &fs, const char * path, const char * message) {
  File file = fs.open(path, FILE_APPEND);
  if (!file) {
    Serial.println("Failed to open file for writing");
    return;
  } else {
    file.println(message);
    file.flush();
    file.close();
  }
}
#END
\n`;
    return code;
  };

  Blockly.JavaScript["sdcard_write_txt"] = function (block) {
    var value_filename = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('FILENAME'), Blockly.Variables.NAME_TYPE);
    var value_data = valueToCode(block, "DATA", ORDER_ATOMIC);
    var code =`
writeFile(SD, "/${value_filename}.txt", String(${value_data}).c_str());
\n`;
    return code;
  };

  Blockly.JavaScript["sdcard_write_csv"] = function (block) {
    var value_filename = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('FILENAME'), Blockly.Variables.NAME_TYPE);
    var value_data1 = valueToCode(block, "DATA1", ORDER_ATOMIC);
    var value_data2 = valueToCode(block, "DATA2", ORDER_ATOMIC);
    var value_data3 = valueToCode(block, "DATA3", ORDER_ATOMIC);
    var value_data4 = valueToCode(block, "DATA4", ORDER_ATOMIC);
    var code =
      `
file = SD.open("/${value_filename}.csv", FILE_APPEND);
if (file) {
  file.print(String(${value_data1}));
  file.print(",");
  file.print(String(${value_data2}));
  file.print(",");
  file.print(String(${value_data3}));
  file.print(",");
  file.println(String(${value_data4}));
  file.close();
}
\n`;
    return code;
  };

  Blockly.JavaScript['sdcard_read_txt'] = function(block) {
    var value_filename = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('FILENAME'), Blockly.Variables.NAME_TYPE);;
    var code = `readFile("/${value_filename}.txt")`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  // ######################################################################
};
