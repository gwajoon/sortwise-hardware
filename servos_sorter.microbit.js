// Init
radio.setGroup(7)
basic.pause(300)
resetServo()

function resetServo() {
    servos.P1.setPulse(1500)
    basic.pause(300)
}

function pauseServ() {
    basic.pause(3000)
}

function moveServoTowardMax() {
    servos.P1.setPulse(3000)
    pauseServ()
    resetServo()
}

function moveServoTowardMin() {
    servos.P1.setPulse(0)
    pauseServ()
    resetServo()
} 

serial.onDataReceived(serial.delimiters(Delimiters.NewLine), () => {
    const command = serial.readLine()
    if (command.includes("NonRecyclable")) {
        music.playTone(440, music.beat(BeatFraction.Half));
        moveServoTowardMax()
    } else {
        music.playTone(440, music.beat(BeatFraction.Whole));
        moveServoTowardMin()
    }
    radio.sendString("measureDistance")
})
