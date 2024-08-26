function right () {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 1000)
    pins.analogWritePin(AnalogPin.P16, 0)
    pins.analogWritePin(AnalogPin.P15, 1000)
    // Move for 500 milliseconds
    basic.pause(500)
    stop()
}
function left () {
    pins.analogWritePin(AnalogPin.P13, 1000)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P16, 1000)
    pins.analogWritePin(AnalogPin.P15, 0)
    // Move for 500 milliseconds
    basic.pause(500)
    stop()
}
function stop () {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
}
function backward () {
    pins.analogWritePin(AnalogPin.P13, 1000)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 1000)
    pins.analogWritePin(AnalogPin.P16, 0)
    // Move for 500 milliseconds
    basic.pause(500)
    stop()
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "stop") {
        stop()
        basic.showIcon(IconNames.Sad)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
    } else if (receivedString == "forward") {
        forward()
    } else if (receivedString == "backward") {
        backward()
    } else if (receivedString == "left") {
        left()
        music.play(music.createSoundExpression(WaveShape.Square, 1534, 1569, 255, 255, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    } else if (receivedString == "right") {
        right()
        music.play(music.createSoundExpression(WaveShape.Square, 1534, 1569, 255, 255, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
function forward () {
    pins.analogWritePin(AnalogPin.P14, 1000)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P16, 1000)
    pins.analogWritePin(AnalogPin.P15, 0)
    // Move for 500 milliseconds
    basic.pause(500)
    stop()
}
radio.setGroup(1)
led.enable(true)
OLED12864_I2C.init(60)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
// Any additional code if necessary
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
})
