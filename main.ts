let num = 0
input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    num = num
    basic.showNumber(num)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    num += -1
    basic.showNumber(num)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    num = 0
    basic.showNumber(num)
    basic.clearScreen()
})
basic.forever(function () {
	
})
