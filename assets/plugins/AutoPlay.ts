import MediaPlayer from '../MediaPlayer'

class AutoPlay {
    constructor() { }
    run(player: MediaPlayer) {
        if (!player.media.muted)
            player.media.muted = true
        player.media.play()
        player.media.volume = 0.1
    }
}

export default AutoPlay