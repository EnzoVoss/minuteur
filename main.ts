input.onButtonPressed(Button.A, function () {
    minuterie()
})
function minuterie () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . . . # .
        . . . # .
        . . . # .
        . . . # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # .
        . . . # .
        . . . # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    beep()
}
function beep () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(300)
}
