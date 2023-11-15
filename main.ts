input.onButtonPressed(Button.A, function () {
    radio.sendString("Fin Boom al lio")
    basic.showString("Send")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("" + (receivedString))
})
radio.setGroup(1)
