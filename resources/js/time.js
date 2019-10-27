(function setTime() {
   const $time = document.querySelector('#time');
   const time = new Date();
   time.innerText = time.toLocaleTimeString();
   setTimeout(function () {
    setTime();
}, 1000);
})();