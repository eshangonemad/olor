bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . # . .
        . . . . .
        # . # . #
        . . . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.A, function () {
    x += 1
})
input.onButtonPressed(Button.B, function () {
    x += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    absmouse.click()
})
let y = 0
let x = 0
absmouse.startAbsoluteMouseService()
basic.forever(function () {
    absmouse.movexy(x, y)
})
