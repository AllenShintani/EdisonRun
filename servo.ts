import { SerialPort, attachServo, board } from "edison";

board.connectManual("/dev/ttyUSB0");
board.on("ready", async (port: SerialPort) => {
  const servo = attachServo(port, 9);
  const servo2 = attachServo(port, 8);
  console.log("board is ready");
  await servo.rotate(50);
  await servo2.rotate(50);
  await servo.rotate(150);
  await servo2.rotate(150);
  await servo.rotate(50);
  await servo2.rotate(50);
  await servo.rotate(150);
});
