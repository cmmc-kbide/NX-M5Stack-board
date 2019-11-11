const nativeImage = require("electron").nativeImage;

function rgbto16bit(colorIN) {
  let color = colorIN.replace("#", "0x");
  let sourceColor = parseInt(color, 16);
  let red = (sourceColor & 0x00FF0000) >> 16;
  let green = (sourceColor & 0x0000FF00) >> 8;
  let blue = sourceColor & 0x000000FF;
  let out = (red >> 3 << 11) + (green >> 2 << 5) + (blue >> 3);
  out = out.toString(16);
  return out;   // The function returns the product of p1 and p2
}

module.exports = function (Blockly) {
  "use strict";
  Blockly.JavaScript["i2c128x64_create_image"] = function (block) {
    var dataurl = block.inputList[1].fieldRow["0"].src_;
    var image = nativeImage.createFromDataURL(dataurl);
    var size = image.getSize();

    var mm = image.getBitmap();
    var arr = [];
    var raw = [];
    for (let i = 0; i < image.getBitmap().length - 4; i += 4) {
      let [r, g, b] = [mm[i + 2], mm[i + 1], mm[i + 0]];
      let out = (((r & 0xf8) << 8) + ((g & 0xfc) << 3) + (b >> 3));
      arr.push("0x" + out.toString(16));
    }
    console.log(raw);
    var code = `(std::vector<uint16_t>{${arr.join(",")}})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["i2c128x64_display_image"] = function (block) {
    var value_img = Blockly.JavaScript.valueToCode(block,
      "img",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_x = Blockly.JavaScript.valueToCode(block,
      "x",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block,
      "y",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_width = Blockly.JavaScript.valueToCode(block,
      "width",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_height = Blockly.JavaScript.valueToCode(block,
      "height",
      Blockly.JavaScript.ORDER_ATOMIC);
    //var code = `display.drawFastImage(${value_x}, ${value_y}, ${value_width},${value_height},${value_img}.data());\n`;
    var code = `M5.Lcd.drawBitmap(${value_x}, ${value_y}, ${value_width}, ${value_height}, ${value_img}.data());`;

    return code;
  };

  // ######################################################################
  Blockly.JavaScript["tft_display_setBrightness"] = function (block) {
    var value_bright = Blockly.JavaScript.valueToCode(block, "bright", Blockly.JavaScript.ORDER_ATOMIC);
    var code = `M5.Lcd.setBrightness(${value_bright});\n`;
    return code;
  };

  Blockly.JavaScript["tft_display_fillScreen"] = function (block) {
    let color = block.getFieldValue("COLOR");
    color = color.replace("#", "0x");
    let sourceColor = parseInt(color, 16);
    let red = (sourceColor & 0x00FF0000) >> 16;
    let green = (sourceColor & 0x0000FF00) >> 8;
    let blue = sourceColor & 0x000000FF;
    let out = (red >> 3 << 11) + (green >> 2 << 5) + (blue >> 3);
    out = out.toString(16);
    var code = "M5.Lcd.fillScreen(0x" + out + ");\n";
    return code;
  };

  Blockly.JavaScript["tft_display_setTextSize"] = function (block) {
    var code = "M5.Lcd.setTextSize(" + block.getFieldValue("textSize") + ");\n";
    return code;
  };

  Blockly.JavaScript["tft_display_print"] = function (block) {
    var value_text = Blockly.JavaScript.valueToCode(block,
      "TEXT",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_x = Blockly.JavaScript.valueToCode(block,
      "X",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block,
      "Y",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_textSize = block.getFieldValue("textSize");
    var value_color = rgbto16bit(block.getFieldValue("COLOR"));

    var code =
      `
  M5.Lcd.setTextSize(${value_textSize});
  M5.Lcd.setCursor(${value_x}, ${value_y});
  M5.Lcd.setTextColor(0x${value_color});
  M5.Lcd.println(String(${value_text}));
  `;
    return code;
  };
  // ######################################################################
  Blockly.JavaScript["tft_display_draw_line"] = function (block) {
    var value_x0 = Blockly.JavaScript.valueToCode(block,
      "x0",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y0 = Blockly.JavaScript.valueToCode(block,
      "y0",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_x1 = Blockly.JavaScript.valueToCode(block,
      "x1",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y1 = Blockly.JavaScript.valueToCode(block,
      "y1",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_color = rgbto16bit(block.getFieldValue("COLOR"));

    var code =
      `
M5.Lcd.drawLine(${value_x0},${value_y0},${value_x1},${value_y1},0x${value_color});
`;
    return code;
  };

  Blockly.JavaScript["tft_display_draw_rect"] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block,
      "x",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block,
      "y",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_width = Blockly.JavaScript.valueToCode(block,
      "width",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_height = Blockly.JavaScript.valueToCode(block,
      "height",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_color = rgbto16bit(block.getFieldValue("COLOR"));
    var checkbox_fill = block.getFieldValue("fill") == "TRUE";

    if (checkbox_fill) {
      var code =
        `
    M5.Lcd.fillRect(${value_x},${value_y},${value_width},${value_height},0x${value_color});
    `;
    } else {
      var code =
        `
    M5.Lcd.drawRect(${value_x},${value_y},${value_width},${value_height},0x${value_color});
    `;
    }
    return code;
  };

  Blockly.JavaScript["tft_display_draw_triangle"] = function (block) {
    var value_x0 = Blockly.JavaScript.valueToCode(block, "x0", Blockly.JavaScript.ORDER_ATOMIC);
    var value_y0 = Blockly.JavaScript.valueToCode(block, "y0", Blockly.JavaScript.ORDER_ATOMIC);
    var value_x1 = Blockly.JavaScript.valueToCode(block, "x1", Blockly.JavaScript.ORDER_ATOMIC);
    var value_y1 = Blockly.JavaScript.valueToCode(block, "y1", Blockly.JavaScript.ORDER_ATOMIC);
    var value_x2 = Blockly.JavaScript.valueToCode(block, "x2", Blockly.JavaScript.ORDER_ATOMIC);
    var value_y2 = Blockly.JavaScript.valueToCode(block, "y2", Blockly.JavaScript.ORDER_ATOMIC);
    var value_color = rgbto16bit(block.getFieldValue("COLOR"));
    var checkbox_fill = block.getFieldValue("fill") == "TRUE";

    if (checkbox_fill) {
      var code =
        `
    M5.Lcd.fillTriangle(${value_x0},${value_y0},${value_x1},${value_y1},${value_x2},${value_y2},0x${value_color});
    `;
    } else {
      var code =
        `
    M5.Lcd.drawTriangle(${value_x0},${value_y0},${value_x1},${value_y1},${value_x2},${value_y2},0x${value_color});
    `;
    }
    return code;
  };

  Blockly.JavaScript["tft_display_draw_circle"] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block,
      "x",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block,
      "y",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_r = Blockly.JavaScript.valueToCode(block,
      "r",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_color = rgbto16bit(block.getFieldValue("COLOR"));
    var checkbox_fill = block.getFieldValue("fill") == "TRUE";

    if (checkbox_fill) {
      var code =
        `
    M5.Lcd.fillCircle(${value_x},${value_y},${value_r},0x${value_color});
    `;
    } else {
      var code =
        `
    M5.Lcd.drawCircle(${value_x},${value_y},${value_r},0x${value_color});
    `;
    }
    return code;
  };

  Blockly.JavaScript["display_draw_progress_bar"] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block,
      "x",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block,
      "y",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_width = Blockly.JavaScript.valueToCode(block,
      "width",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_height = Blockly.JavaScript.valueToCode(block,
      "height",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_progress = Blockly.JavaScript.valueToCode(block,
      "progress",
      Blockly.JavaScript.ORDER_ATOMIC);
    var code = `M5.Lcd.progressBar(${value_x}, ${value_y}, ${value_width}, ${value_height}, ${value_progress});\n`;
    return code;
  };

  Blockly.JavaScript["display_draw_pixel"] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block,
      "x",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block,
      "y",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_color = rgbto16bit(block.getFieldValue("color"));
    var code = `
M5.Lcd.drawPixel(${value_x}, ${value_y}, 0x${value_color});
`;
    return code;
  };

  Blockly.JavaScript["i2c128x64_display_string_width"] = function (block) {
    var value_text = Blockly.JavaScript.valueToCode(block,
      "text",
      Blockly.JavaScript.ORDER_ATOMIC);
    var code = `display.getStringWidth(${value_text},${value_text.length})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['display_qrcode'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var number_x = block.getFieldValue('x');
    var number_y = block.getFieldValue('y');
    var number_width = block.getFieldValue('width');
    var number_version = block.getFieldValue('version');
    var code = `M5.Lcd.qrcode(${value_name}, ${number_x}, ${number_y},${number_width}, ${number_version});\n`;
    return code;
  };
};
