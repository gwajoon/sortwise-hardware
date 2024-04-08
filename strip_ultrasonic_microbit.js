radio.setGroup(7)
let strip = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB);

input.onButtonPressed(Button.A, function () {
    radio.sendString("itemInBin")
    radio.sendString("processing")
})

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
basic.forever(function () {
    distance = grove.measureInCentimetersV2(DigitalPin.P0)
    if (distance <= 8) {
        showColor()
    } else {
        clearStrip()
    }
})
