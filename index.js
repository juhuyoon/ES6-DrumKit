//Listen to an event of pressing key
function playSound(e) {
    //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return; //stops the function from running
        audio.currentTime = 0; //rewind to start 
        audio.play();
    //console.log(key)


    //classList.add same thing as addClass of jQuery
    key.classList.add('playing');
}
function removeTransition(e) {
    //to skip when it's not a transform
    if(e.propertyName !== 'transform') return; 
    //console.log(e.propertyName);
    this.classList.remove(`playing`);
}


const keys = document.querySelectorAll(`.key`);

keys.forEach(key => key.addEventListener(`transitionend`, removeTransition));
window.addEventListener(`keydown`, playSound);
