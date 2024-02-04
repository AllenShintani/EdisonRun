import { SerialPort, attachServo, board } from "edison"

board.on('ready', async (port: SerialPort) => {
  const servo1 = attachServo(port, 8)
  const servo2 = attachServo(port, 10)
  await servo1.rotate(0)
  await servo2.rotate(0)
  await servo1.rotate(50)
  await servo2.rotate(50)
  await servo1.rotate(150)
    await servo2.rotate(150)
})