import { SerialPort, attachOutput, attachRgbLed, board, delay } from "edison"

board.connectManual('/dev/ttyUSB0')

board.on('ready', async (port: SerialPort) => {
  console.log('Board is ready!')
  //red, green, blue, vcc or gnd
  const rgbLed = attachRgbLed(port, 9, 10, 11)
  const output = attachOutput(port, 12)
  await output.on()
  await rgbLed.setColor(255, 0, 0)
  await delay(1000)
  await rgbLed.setColor(0, 255, 0)
  await delay(1000)
  await rgbLed.setColor(0, 0, 255)
  await delay(1000)
  await rgbLed.off()
  await output.off()
})
