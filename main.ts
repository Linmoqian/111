enum RadioMessage {
    message1 = 49434
}
radio.onReceivedString(function (receivedString) {
    if (!(receivedString.isEmpty())) {
        let _this = ""
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        parseFloat(receivedString.substr(0, _this.indexOf("/"))),
        robotbit.Motors.M2B,
        parseFloat(receivedString.substr(0, _this.indexOf("/")))
        )
    }
})
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
