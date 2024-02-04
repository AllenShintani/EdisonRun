import { SerialPort, attachRgbLed, board, delay } from "edison"

board.connectManual('/dev/ttyUSB0')

board.on('ready', async (port: SerialPort) => {
  console.log('Board is ready!')
  //red, green, blue, vcc or gnd
  const rgbLed = attachRgbLed(port, 9, 10, 11)

  await rgbLed.setColor(255, 0, 0)

  await new Promise((resolve) => setTimeout(resolve, 1000))

  await rgbLed.setColor(0, 255, 0)

  await new Promise((resolve) => setTimeout(resolve, 1000))

  await rgbLed.off()
})
