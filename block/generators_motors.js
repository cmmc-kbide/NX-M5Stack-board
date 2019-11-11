module.exports = function (Blockly) {
  "use strict";

  // #############################  Servo Motor  ##################################
  Blockly.JavaScript['m5_sensor_servo_init'] = function (block) {
    var number_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);

    var code = `
#EXTINC#include <ESP32Servo.h>#END
#VARIABLEServo myservo;#END
myservo.setPeriodHertz(50);
myservo.attach(${number_pin}, 1000, 2000);\n`;
    return code;
  };

  Blockly.JavaScript['m5_sensor_servo_angle'] = function (block) {
    var number_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `myservo.write(${number_angle});\n`;
    return code;
  };


  // #############################  DC Motor  ##################################
  Blockly.JavaScript['m5_sensor_dc_init'] = function (block) {
    var value_ena = Blockly.JavaScript.valueToCode(block, 'ENA', Blockly.JavaScript.ORDER_ATOMIC);
    var value_enb = Blockly.JavaScript.valueToCode(block, 'ENB', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_channel_a = block.getFieldValue('TIMER_A');
    var dropdown_channel_b = block.getFieldValue('TIMER_B');

    var code =
      `
#VARIABLE
int _EN_A = ${value_ena};
int _EN_B = ${value_enb};
int _MotorA_ch = ${dropdown_channel_a};
int _MotorB_ch = ${dropdown_channel_b};
#END

ledcSetup(_MotorA_ch, 5000, 8);
ledcAttachPin(_EN_A, _MotorA_ch);
ledcSetup(_MotorB_ch, 5000, 8);
ledcAttachPin(_EN_B, _MotorB_ch);\n`;
    return code;
  };

  Blockly.JavaScript['m5_sensor_dc_forward'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
ledcWrite(_MotorA_ch, 0);
ledcWrite(_MotorB_ch, ${number_speed});\n`;
    return code;
  };

  Blockly.JavaScript['m5_sensor_dc_backward'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
ledcWrite(_MotorA_ch, ${number_speed});
ledcWrite(_MotorB_ch, 0);\n`;
    return code;
  };

  Blockly.JavaScript['m5_sensor_dc_stop'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
ledcWrite(_MotorA_ch, 0);
ledcWrite(_MotorB_ch, 0);\n`;
    return code;
  };

  // #############################  Steper Motor  ##################################
  Blockly.JavaScript['m5_motor_stepper_init'] = function (block) {
    var value_step_a = Blockly.JavaScript.valueToCode(block, 'MOTOR_A', Blockly.JavaScript.ORDER_ATOMIC);
    var value_step_b = Blockly.JavaScript.valueToCode(block, 'MOTOR_B', Blockly.JavaScript.ORDER_ATOMIC);
    var value_step_c = Blockly.JavaScript.valueToCode(block, 'MOTOR_C', Blockly.JavaScript.ORDER_ATOMIC);
    var value_step_d = Blockly.JavaScript.valueToCode(block, 'MOTOR_D', Blockly.JavaScript.ORDER_ATOMIC);
    var code =
      `
#VARIABLE
const int MOTOR_A = ${value_step_a};
const int MOTOR_B = ${value_step_b};
const int MOTOR_C = ${value_step_c};
const int MOTOR_D = ${value_step_d};

int motorPin[16] = {
  MOTOR_A, MOTOR_B, MOTOR_C, MOTOR_D,
  MOTOR_A, MOTOR_B, MOTOR_C, MOTOR_D,
  MOTOR_A, MOTOR_B, MOTOR_C, MOTOR_D,
  MOTOR_A, MOTOR_B, MOTOR_C, MOTOR_D,
 };

int motorForward[16] = {
      1, 1, 0, 0,
      0, 1, 1, 0,
      0, 0, 1, 1,
      1, 0, 0, 1,
     };

int motorBackward[16] = {
       1, 0, 0, 1,
       0, 0, 1, 1,
       0, 1, 1, 0,
       1, 1, 0, 0,
      };

int motorStop[4] = {0, 0, 0, 0};
#END

#FUNCTION
void stop_steper() {
  for (int i = 1; i <= 4; i++) {
    digitalWrite(motorPin[i], motorStop[i]);
    delay(2);
  }
}

void forward_steper(uint16_t degree) {
  for (int j = 1; j <= (1.42 * degree); j++) {
    for (int i = 0; i <= 16; i++) {
      digitalWrite(motorPin[i], motorForward[i]);
      delay(2);
    }
  }
}

void backward_steper(uint16_t degree) {
  for (int j = 1; j <= (1.42 * degree); j++) {
    for (int i = 0; i <= 16; i++) {
      digitalWrite(motorPin[i], motorBackward[i]);
      delay(2);
    }
  }
}
#END

for (int i = 0; i <= 3; i++) {
  pinMode(motorPin[i], OUTPUT);
}
\n`;
    return code;
  };

  Blockly.JavaScript['m5_motor_stepper_forward'] = function(block) {
    var value_degree = Blockly.JavaScript.valueToCode(block, 'DEGREE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `forward_steper(${value_degree});\n`;
    return code;
  };

  Blockly.JavaScript['m5_motor_stepper_backward'] = function (block) {
    var value_degree = Blockly.JavaScript.valueToCode(block, 'DEGREE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `backward_steper(${value_degree});\n`;
    return code;
  };

  Blockly.JavaScript['m5_motor_stepper_stop'] = function (block) {
    var code = `stop_steper();\n`;
    return code;
  };

  // ######################################################################
};
