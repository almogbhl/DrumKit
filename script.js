const $ = s => document.querySelector(s); 
const $$ = s => document.querySelectorAll(s); 

const keys = $$('.key');



function play_sound(e) {
    const key = $(`.key[data-key="${e.keyCode}"]`);
    const audio = $(`audio[data-key="${e.keyCode}"`); 
    
        if(!audio) return;

        audio.currentTime = 0;
        audio.play();

        key.classList.add('playing');
}

function remove_transition(e) {
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', remove_transition));

window.addEventListener("keydown", play_sound);

