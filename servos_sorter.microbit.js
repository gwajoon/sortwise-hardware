function resetServos() {
  servos.P1.setPulse(1500)
}

function moveServos(direction: string) {
  if (direction == 'left') {
      servos.P1.setPulse(3000)
  } else {
      servos.P1.setPulse(0)
  }
}

input.onButtonPressed(Button.A, function() {
  moveServos('left')
  basic.pause(2000)
  resetServos()
})

input.onButtonPressed(Button.B, function () {
  moveServos('right')
  basic.pause(2000)
  resetServos()
})

resetServos()