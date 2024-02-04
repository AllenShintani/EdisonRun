import {
  SerialPort,
  board,
  attachUltrasonicSensor,
  attachBuzzer,
} from "edison";

board.connectManual("/dev/ttyUSB0");

board.on("ready", async (port: SerialPort) => {
  console.log("Board is ready!");
  const led1 = attachBuzzer(port, 12);
  const ultrasonicSensor = attachUltrasonicSensor(port, 3, 2);
  ultrasonicSensor.measure("sonic", () => {
    console.log("ooooooooooooooooooooooooooooooooooooooooooo");
    led1.on();
  });
});
