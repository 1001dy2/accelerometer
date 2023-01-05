let x = 0
let b = 0
let a = 0
let sprite = game.createSprite(2, 2)
basic.forever(function () {
    a = input.acceleration(Dimension.X)
    b = input.acceleration(Dimension.Y)
})
basic.forever(function () {
    if (x > 4) {
        x = 4
    }
    if (x < -4) {
        x = -4
    }
})
basic.forever(function () {
    if (a > 0 && a <= 1023) {
        basic.clearScreen()
        sprite.move(1)
        basic.pause(200)
    }
    if (a < 0 && a >= -1023) {
        basic.clearScreen()
        sprite.move(-1)
        basic.pause(200)
    }
})
basic.forever(function () {
    if (b > 0 && b <= 1023) {
        basic.clearScreen()
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    if (b < 0 && b >= -1023) {
        basic.clearScreen()
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
})
