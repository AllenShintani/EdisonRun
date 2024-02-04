import { SerialPort, attachLed, board } from "edison";

board.connectManual("/dev/ttyUSB0");

board.on("ready", (port: SerialPort) => {
  const led = attachLed(port, 13);
  console.log(1);
  led.blink(500);
});
