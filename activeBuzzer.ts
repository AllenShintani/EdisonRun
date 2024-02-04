import { SerialPort, attachBuzzer, board } from "edison";

board.connectManual("/dev/ttyUSB0");

board.on("ready", (port: SerialPort) => {
  const buzzer = attachBuzzer(port, 13);
  buzzer.on();
});
