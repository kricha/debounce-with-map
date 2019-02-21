'use strict';

let timerMap = new Map();

const debounce = (fn, key, delay = 1000) => {
    if (!key) throw Error('You need to set a key');
    ((...args) => {
        let timeOutId = timerMap.get(key);
        if (timeOutId) {
            clearTimeout(timeOutId);
        }
        timeOutId = setTimeout(() => {
            fn(...args);
            timerMap.delete(key);
        }, delay);
        timerMap.set(key, timeOutId);
    })();
};

module.exports = debounce;