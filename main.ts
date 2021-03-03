controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
    	
    }
    mySprite.vy = -200
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level6`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 6 6 6 . . . . a a a . . . 
    . . . . 6 . . . . . . a . . . . 
    . . . . 6 . . . . . . a . . . . 
    . . . 6 6 6 . . . . a a a . . . 
    . . 6 . 6 . 6 . . a . a . a . . 
    . . . . 6 . . . . . . a . . . . 
    . . . . 6 . . . . . . a . . . . 
    . . . . 6 . . . . . . a . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
mySprite.ay = 500
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        1 1 1 e e e e e e e e e e 1 1 1 
        1 1 1 e e e e e e e e e e 1 1 1 
        1 1 1 e e e e e e e e e e 1 1 1 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        1 1 1 e e e e e e e e e e 1 1 1 
        1 1 1 e e e e e e e e e e 1 1 1 
        1 1 1 e e e e e e e e e e 1 1 1 
        `, randint(-100, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
})
