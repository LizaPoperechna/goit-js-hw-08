import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = throttle(event => {
    localStorage.setItem("videoplayer-current-time", event.seconds);
}, 1000);

player.on('timeupdate', onPlay);

 
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
    .catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
});

  
    

    