radio.setGroup(7)
let strip = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB);

function showColor() {
    strip.showColor(neopixel.colors(NeoPixelColors.White))
}

function clearStrip() {
    strip.clear()
    strip.show()
}

grove.onGesture(GroveGesture.Down, function () {
    radio.sendString("openBox")
})

let distance = 0
let previouslyDetected = false

basic.forever(function () {
    itemDistance = grove.measureInCentimetersV2(DigitalPin.P1)
    if (itemDistance <= 8) {
        showColor()
    } else {
        clearStrip()
    }

    let userDistance = grove.measureInCentimetersV2(DigitalPin.P0)
    if (userDistance <= 20 && !previouslyDetected) {
        radio.sendString("openBox")
        previouslyDetected = true
    } else if (userDistance > 20 && previouslyDetected) {
        radio.sendString("itemInBin")
        radio.sendString("processing")
        previouslyDetected = false
    }
})

input.onButtonPressed(Button.A, function () {
    radio.sendString("itemInBin")
    radio.sendString("processing")
})

input.onButtonPressed(Button.B, function() {
    radio.sendString("openBox")
})
