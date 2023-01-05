input.onButtonPressed(Button.AB, function () {
    game.gameOver()
})
let b = 0
let a = 0
let sprite = game.createSprite(2, 2)
let man = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    a = input.acceleration(Dimension.X)
    b = input.acceleration(Dimension.Y)
})
basic.forever(function () {
    if (a > 0 && a <= 1023) {
        sprite.move(1)
        basic.pause(150)
    }
})
basic.forever(function () {
    if (a < 0 && a >= -1023) {
        sprite.move(-1)
        basic.pause(150)
    }
})
basic.forever(function () {
    if (b < 0 && b >= -1023) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(150)
    }
})
basic.forever(function () {
    if (b > 0 && b <= 1023) {
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(150)
    }
})
basic.forever(function () {
    if (sprite) {
        if (sprite.isTouching(man)) {
            game.addScore(1)
            man.delete()
            man = game.createSprite(randint(0, 4), randint(0, 4))
        }
    }
})
