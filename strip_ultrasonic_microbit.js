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

let itemDistance = 0
let userDistance = 0
let state = 0

basic.forever(function () {
    itemDistance = grove.measureInCentimetersV2(DigitalPin.P1)
    userDistance = grove.measureInCentimetersV2(DigitalPin.P0)

    if (itemDistance <= 25) {
        showColor()
    } else {
        clearStrip()
    }

    if (userDistance <= 4 && state == 0 && itemDistance > 25) {
        radio.sendString("openBox")
        state = 1
    } else if (itemDistance <= 25 && state == 1) {
        basic.pause(3500)
        radio.sendString("itemInBin")
        basic.pause(10000)
        radio.sendString("processing")   
        state = 2     
    }
    else if (itemDistance > 25 && state == 2) {
        radio.sendString("processingEnd")
        state = 0
    }
})
