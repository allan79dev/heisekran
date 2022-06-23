input.onButtonPressed(Button.A, function () {
    servos.P0.run(100)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.run(-100)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    servos.P0.stop()
})
basic.forever(function () {
	
})
