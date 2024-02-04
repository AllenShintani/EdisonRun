import type React from "react";
import { attachLed } from "../factory/output/uniqueDevice/led";
import { board } from "../utils/board";
import type { SerialPort } from "serialport";

interface LEDProps {
  pin: number;
  isOn: boolean;
}

export const LED: React.FC<LEDProps> = ({ pin, isOn }) => {
  console.log(3);
  console.log("isOn", isOn);
  board.on("ready", (port: SerialPort) => {
    const led = attachLed(port, pin);
    console.log(1);

    console.log("LED is on:", isOn);
    if (isOn) {
      led.blink(500);
    }
  });

  return null;
};
