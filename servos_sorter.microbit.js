serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
  if (command.includes("NonRecyclable")) {
    music.playTone(988, music.beat(BeatFraction.Whole));
    moveServos("left");
    basic.pause(5000);
    resetServo();
  } else {
    music.playTone(440, music.beat(BeatFraction.Half));
    moveServos("right");
    basic.pause(5000);
    resetServo();
  }
});

function resetServos() {
  servos.P1.setPulse(1500);
  basic.pause(300);
}

function moveServos(direction: string) {
  if (direction == "left") {
    servos.P1.setPulse(3000);
  } else {
    servos.P1.setPulse(0);
  }

  basic.pause(2000);
  resetServos();
}

input.onButtonPressed(Button.A, function () {
  moveServos("left");
});

input.onButtonPressed(Button.B, function () {
  moveServos("right");
});

resetServos();
