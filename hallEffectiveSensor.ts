import { SerialPort, attachHallEffectSensor, attachLed, board } from "edison";

board.connectManual("/dev/ttyUSB0");

board.on("ready", (port: SerialPort) => {
  console.log("Board is ready!");
  const led1 = attachLed(port, 13);

  const hallEffectSensor = attachHallEffectSensor(port, 8);
  hallEffectSensor.read("on", () => {
    led1.on();
    console.log(1);
  });
  hallEffectSensor.read("off", () => {
    led1.off();
    console.log(0);
  });
});
