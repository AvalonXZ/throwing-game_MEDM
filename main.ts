// bluetooth.onUartDataReceived("MODE=1", function () {
// Flag = 1
// counter = 0
// Pressure_input = 0
// })
function c_Value () {
    if (pins.analogReadPin(AnalogPin.P0) > Pressure_input) {
        Pressure_input = pins.analogReadPin(AnalogPin.P0)
    }
}
function S_Value () {
    // blockyTalkyBLE.sendMessageWithNumberValue("P", Pressure_input)
    // bluetooth.uartWriteLine("P=" + Pressure_input)
    counter = 0
}
let Pressure_input = 0
let counter = 0
basic.showIcon(IconNames.Heart)
let Flag = 0
counter = 0
Pressure_input = 0
basic.forever(function () {
    if (counter >= 30 && Flag == 1) {
        S_Value()
    }
})
loops.everyInterval(100, function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 1 && counter < 30) {
        c_Value()
        counter += 1
    } else {
        serial.writeLine("P=" + Pressure_input)
    }
})
