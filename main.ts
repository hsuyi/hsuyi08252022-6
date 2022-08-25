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
    if (receivedNumber == -1) {
        turn = -1
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
        basic.showString("RC")
        basic.pause(100)
    }
    if (turn == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showString("LS")
        basic.pause(100)
    }
    if (turn == 3 || pins.digitalReadPin(DigitalPin.P2) == 0 || pins.digitalReadPin(DigitalPin.P8) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showString("ST")
        basic.pause(100)
        if (pins.digitalReadPin(DigitalPin.P2) == 0) {
            basic.pause(1000)
            turn = 3
        }
        if (pins.digitalReadPin(DigitalPin.P8) == 0) {
            basic.pause(1000)
            turn = 3
        }
    }
})
