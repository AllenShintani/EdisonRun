import { board, attachOutput, delay, SerialPort } from "edison";

board.connectManual('/dev/ttyUSB0');

board.on('ready', async (port: SerialPort) => {
  const output = attachOutput(port, 13)
  output.on()
  await delay(1000)
  output.off()
})