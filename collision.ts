import { board, attachLed, attachCollisionSensor, SerialPort } from "edison"

board.connectManual('/dev/ttyUSB0')

board.on('ready', (port: SerialPort) => {
  console.log('Board is ready!')
  const led1 = attachLed(port, 13)

  const collisionSensor = attachCollisionSensor(port, 12)
  collisionSensor.read('on', () => {
    led1.on()
    console.log('collision detected')
    })
collisionSensor.read('off', () => {
    console.log('collision not detected')
    led1.off()
})

})
