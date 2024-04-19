radio.setGroup(7)

let generalBinDistance = 0
let recyclableBinDistance = 0

radio.onReceivedString(function (receivedString) {
    recyclableBinDistance = grove.measureInCentimetersV2(DigitalPin.P2)
    generalBinDistance = grove.measureInCentimetersV2(DigitalPin.P0)
    serial.writeLine("recyclable," + recyclableBinDistance)
    serial.writeLine("general," + generalBinDistance)
})
