radio.setGroup(7)
let greenLightState = 1;
let redLightState = 0;
let blueLightState = 0;
updateLEDs();

radio.onReceivedString(function (receivedString) {
    if (receivedString == "itemInBin") {
        blueLightState = 0;
        greenLightState = 0;
        redLightState = 1;
        resetServos();
    } else if (receivedString == "processing") {
        blueLightState = 1;
        greenLightState = 0;
        redLightState = 1;
    } else if (receivedString == "processingEnd") {
        blueLightState = 0;
        greenLightState = 1;
        redLightState = 0;
    } else if (receivedString == "openBox") {
        servos.P1.setPulse(0)
    }
    updateLEDs();
})

function updateLEDs() {
    pins.digitalWritePin(DigitalPin.P0, blueLightState);
    pins.digitalWritePin(DigitalPin.P8, greenLightState);
    pins.digitalWritePin(DigitalPin.P12, redLightState);
}

function resetServos() {
    servos.P1.setPulse(1500)
}

resetServos()