radio.setGroup(7)

let preRecyclableBinDistance = 0;
let postRecyclableBinDistance = 0;
let preGeneralBinDistance = 0;
let postGeneralBinDistance = 0;

basic.forever(function () {
  recyclableBinDistance = grove.measureInCentimetersV2(DigitalPin.P0);
  generalBinDistance = grove.measureInCentimetersV2(DigitalPin.P2);
});

radio.onReceivedString(function (receivedString) {
  recyclableBinDistance = grove.measureInCentimetersV2(DigitalPin.P0);
  generalBinDistance = grove.measureInCentimetersV2(DigitalPin.P2);
  if (receivedString == "preprocessing") {
    preRecyclableBinDistance = recyclableBinDistance
    preGeneralBinDistance = generalBinDistance
  } else if (receivedString == "postprocessing") {
    postRecyclableBinDistance = recyclableBinDistance
    postGeneralBinDistance = generalBinDistance
    serial.writeLine("recyclable:" + [preRecyclableBinDistance, postRecyclableBinDistance]);
    serial.writeLine("general:" + [preGeneralBinDistance, postGeneralBinDistance]);
  }
})

