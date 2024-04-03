let leftBinDistance = 0;
let rightBinDistance = 0;

basic.forever(function () {
  leftBinDistance = grove.measureInCentimetersV2(DigitalPin.P0);
  rightBinDistance = grove.measureInCentimetersV2(DigitalPin.P2);

  // both bins full
  if (leftBinDistance < 20 && rightBinDistance < 20) {
    basic.showNumber(3);
  // right bin full
  } else if (rightBinDistance < 20) {
    basic.showNumber(1);
  // left bin full
  } else if (leftBinDistance < 20) {
    basic.showNumber(2);
  } else {
    basic.showNumber(0);
  }
});
