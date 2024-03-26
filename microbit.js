let greenLightState = 1;
let redLightState = 0;
let blueLightState = 0;
let processing = false;
let distance = 50;
let itemInBin = false;

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

    pins.digitalWritePin(DigitalPin.P0, blueLightState)
    pins.digitalWritePin(DigitalPin.P4, greenLightState)
    pins.digitalWritePin(DigitalPin.P5, redLightState)
})

// simulate processing, logic to come from rpi
input.onButtonPressed(Button.A, function () {
    processing = !processing;
});

// simulate item inside bin
input.onButtonPressed(Button.B, function () {
    itemInBin = !itemInBin
});