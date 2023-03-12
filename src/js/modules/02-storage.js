const STORAGE_KEY = 'videoplayer-current-time';

const updateStorage = (time) => {
    localStorage.setItem(STORAGE_KEY, time);
};

function getTimeStorage() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY));
   } catch (error) {
    return
   } 
};

export {updateStorage, getTimeStorage}