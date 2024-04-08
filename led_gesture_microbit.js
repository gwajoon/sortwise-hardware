radio.setGroup(7)
let greenLightState = 1;
let redLightState = 0;
let blueLightState = 0;
let processing = false;
let itemInBin = false;

radio.onReceivedString(function (receivedString) {
    if (receivedString == "itemInBin") {
        itemInBin = true;
        resetServos();
    } else if (receivedString == "itemNotInBin") {
        itemInBin = false;
    } else if (receivedString == "processing") {
        processing = true;
    } else if (receivedString == "processingEnd") {
        processing = false;
    } else if (receivedString == "openBox") {
        servos.P1.setPulse(0)
    }
})

basic.forever(function () {
    if (processing) {
        basic.showString("P");
        blueLightState = 1;
    } else {
        blueLightState = 0;

        if (itemInBin) {
            basic.showString("I");
            greenLightState = 0;
            redLightState = 1;
        } else {
            basic.showString("R");
            greenLightState = 1;
            redLightState = 0;
        }
    }
    updateLEDs();
});

function updateLEDs() {
    pins.digitalWritePin(DigitalPin.P0, blueLightState);
    pins.digitalWritePin(DigitalPin.P8, greenLightState);
    pins.digitalWritePin(DigitalPin.P12, redLightState);
}

function resetServos() {
    servos.P1.setPulse(1500)
}

resetServos()