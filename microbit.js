let greenLightState = 1;
let redLightState = 0;
let blueLightState = 0;
let processing = false;
let itemInBin = false;
let distance = 50;

basic.forever(function () {
    // let distance = grove.measureInCentimeters(DigitalPin.P1)

    if (processing) {
        basic.showNumber(2)
        greenLightState = 0;
        redLightState = 0;
        blueLightState = 1
    } else {
        if (itemInBin) {
            basic.showNumber(1)
            greenLightState = 0;
            redLightState = 1;
            blueLightState = 0;
        } else {
            basic.showNumber(0)
            greenLightState = 1;
            redLightState = 0;
            blueLightState = 0;
        }
    }
    updateLEDs();
})

function updateLEDs() {
    pins.digitalWritePin(DigitalPin.P0, blueLightState);
    pins.digitalWritePin(DigitalPin.P8, greenLightState);
    pins.digitalWritePin(DigitalPin.P12, redLightState);
}

// simulate processing, logic to come from rpi
input.onButtonPressed(Button.A, function () {
    processing = !processing;
});

// simulate item inside bin
input.onButtonPressed(Button.B, function () {
    itemInBin = !itemInBin
});

// reset state
input.onButtonPressed(Button.AB, function () {
    greenLightState = 1;
    redLightState = 0;
    blueLightState = 0;
    processing = false;
    itemInBin = false;
});
