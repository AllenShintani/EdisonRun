import { board, attachRgbLed, SerialPort, delay, attachBuzzer } from "edison";

board.connectManual("/dev/ttyUSB0");

board.on("ready", async (port: SerialPort) => {
  console.log("Board is ready!");
  const buzzer = attachBuzzer(port, 13);

  await buzzer.on();

  await delay(1000);

  await buzzer.off();

  await delay(1000);

  await buzzer.on();

  await delay(1000);

  await buzzer.off();
});
