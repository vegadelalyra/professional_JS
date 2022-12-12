function AutoPlay () {}
AutoPlay.prototype.run = function(player) {
    if (!player.muted) player.muted = true
    player.play()
    player.media.volume = 0.1
}

export default AutoPlay