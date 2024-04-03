let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB);

input.onButtonPressed(Button.A, function () {
    strip.showRainbow()
})

input.onButtonPressed(Button.B, function () {
    strip.clear()
    strip.show()
})
function showColor () {
    strip.showColor(neopixel.colors(NeoPixelColors.White))
}

function clearStrip() {
    strip.clear()
    strip.show()
}

let distance = 0
basic.forever(function () {
    distance = grove.measureInCentimetersV2(DigitalPin.P2)
    if (distance < 10) {
        showColor()
    } else {
        clearStrip()
    }
})
