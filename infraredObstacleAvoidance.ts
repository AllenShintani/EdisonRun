// can't run on edison
import { attachInfraredObstacleAvoidanceSensor, board,SerialPort } from "edison"

board.connectManual('/dev/ttyUSB0')

board.on('ready', async (port: SerialPort) => {
  console.log('Board is ready!')
  const infraredObstacleAvoidanceSensor = attachInfraredObstacleAvoidanceSensor(
    port,
    6,
  )
  await infraredObstacleAvoidanceSensor.on()
})
