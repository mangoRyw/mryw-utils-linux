
function debounce(fn, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  }
  

  function throttle(fn, limit) {
    let lastFn;
    let lastTime = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastTime >= limit) {
        fn(...args);
        lastTime = now;
      } else {
        clearTimeout(lastFn);
        lastFn = setTimeout(() => {
          fn(...args);
          lastTime = now;
        }, limit - (now - lastTime));
      }
    };
  }
  
 
  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  module.exports = { debounce, throttle, deepClone };
  