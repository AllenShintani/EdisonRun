import { SerialPort, attachLed, attachPressureSensor, board } from "edison";

board.connectManual("/dev/ttyUSB0");

board.on("ready", (port: SerialPort) => {
  console.log("Board is ready!");
  const led1 = attachLed(port, 12);
  const sensor1 = attachPressureSensor(port, "A0");

  sensor1.read("on", () => {
    led1.on();
    console.log(1);
  });
  sensor1.read("off", () => {
    led1.off();
    console.log(0);
  });
});
