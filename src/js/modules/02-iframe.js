import Player from '@vimeo/player';


import { updateStorage, getTimeStorage } from './02-storage';

const iframe = document.querySelector('iframe');
const throttle = require('lodash.throttle');
const player = new Player(iframe);

const playerOn = player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(e) {
   updateStorage(e.seconds);
}

const startVideo = () => {
   const time = getTimeStorage();

   player.setCurrentTime(time).then(function(seconds) {
    // seconds = the actual time that the player seeked to
   }).catch(function(error) {
      switch (error.name) {
         case 'RangeError':
               // the time was less than 0 or greater than the video’s duration
               break;

         default:
               // some other error occurred
               break;
      }
   });
}

export { startVideo };