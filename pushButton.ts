import {
  SerialPort,
  attachButton,
  attachCollisionSensor,
  attachLed,
  board,
} from "edison";

board.connectManual("/dev/ttyUSB0");

board.on("ready", (port: SerialPort) => {
  console.log("Board is ready!");
  const led1 = attachLed(port, 12);
  const pushButton = attachButton(port, 8);
  pushButton.read("on", () => {
    led1.on();
    console.log(1);
  });
  pushButton.read("off", () => {
    led1.off();
    console.log(0);
  });

  led1.on();
  led1.off();
  const collisionSensor = attachCollisionSensor(port, 2);
  collisionSensor.read("on", () => {
    led1.on();
    console.log(1);
  });
  collisionSensor.read("off", () => {
    led1.off();
    console.log(0);
  });
});
