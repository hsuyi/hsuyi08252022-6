radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        turn = 1
        basic.showNumber(receivedNumber)
    }
    if (receivedNumber == 0) {
        turn = 0
        basic.showNumber(receivedNumber)
    }
    if (receivedNumber == 3) {
        turn = 3
        basic.showNumber(receivedNumber)
    }
})
let turn = 0
radio.setGroup(9)
radio.setTransmitPower(7)
turn = 3
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
    if (turn == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (turn == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
    if (turn == 3 || pins.digitalReadPin(DigitalPin.P2) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        basic.pause(1000)
        turn = 3
    }
})
