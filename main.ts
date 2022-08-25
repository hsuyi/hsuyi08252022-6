basic.showString("L")
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P2, 1)
pins.digitalWritePin(DigitalPin.P3, 1)
basic.pause(1000)
basic.showLeds(`
    . . # . .
    . # . # .
    # . # . #
    . # . # .
    . . # . .
    `)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0 || pins.digitalReadPin(DigitalPin.P3) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(1000)
        basic.showString("ST")
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
    } else {
        if (input.buttonIsPressed(Button.A)) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.showString("RC")
            basic.pause(1000)
            basic.showIcon(IconNames.Scissors)
        }
        if (input.buttonIsPressed(Button.B)) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.showString("LC")
            basic.pause(1000)
            basic.showIcon(IconNames.Duck)
        }
    }
})
