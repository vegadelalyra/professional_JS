import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'

const video : HTMLMediaElement = document.querySelector('video') as HTMLMediaElement
const player = new MediaPlayer({
    el: video, 
    plugins : [ new AutoPlay(), new AutoPause() ]
  }
)

// Play button
const button: HTMLElement = document.querySelector('button') as HTMLElement
button.onclick = () => player.togglePlay()

// Mute button
const mute: HTMLElement = document.querySelector('.mute') as HTMLElement
mute.onclick = () => player.toggleMute()

// service Worker registration (among internet and browser)
if ('serviceWorker' in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker.register(
      new URL('/sw.js', import.meta.url),{type: 'module'})
        .then(function(registration) {
          console.log('Service worker registration succeeded:', registration);
        }).catch(function(error) {
          console.log('Service worker registration failed:', error);
        });
  } else {
    console.log('Service workers are not supported.');
  }