basic.forever(function () {
    serial.writeValue("Light", input.lightLevel())
    if (input.lightLevel() < 30) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else {
        basic.clearScreen()
    }
})
