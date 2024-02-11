import { board, SerialPort, attachBuzzer } from "edison";
import type React from "react";

type BuzzerProps = {
  pin: number;
  isOn?: boolean;
};

export const Buzzer: React.FC<BuzzerProps> = ({ pin, isOn }) => {
  console.log(1);
  board.on("ready", (port: SerialPort) => {
    console.log(2);
    const buzzer = attachBuzzer(port, pin);

    if (isOn === true) {
      buzzer.on();
    }

    if (isOn === false) {
      buzzer.off();
    }
  });

  return null;
};
