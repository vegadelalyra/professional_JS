import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video')
const player = new MediaPlayer({
    el: video, 
    plugins : [
    new AutoPlay(), new AutoPause()
]})

// Play button
const button = document.querySelector('button')
button.onclick = () => player.togglePlay()

// Mute button
const mute = document.querySelector('.mute')
mute.onclick = () => player.toggleMute()

// service Worker registration (among internet and browser)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .catch(error => {
        console.log(error.message)
    })
}