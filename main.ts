control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    servos.P0.stop()
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    servos.P0.run(100)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    servos.P0.stop()
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    servos.P0.run(-100)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
	
})
basic.forever(function () {
	
})
