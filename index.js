var btns = document.querySelectorAll('button');

for(let i = 0; i < btns.length; i++) {
    var btnClicked = btns[i];

    btnClicked.addEventListener('click', function() {
        btnSound = this.innerHTML;
        makeSound(btnSound);
        animation(btnSound);
    });
};


document.addEventListener('keydown', function(event) {
    makeSound(event.key);
    animation(event.key);
});

function makeSound(e) {
    if(e === 'w') {
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
    } else if(e === 'a') {
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    } else if(e === 's') {
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
    } else if(e === 'd') {
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    } else if(e === 'j') {
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    } else if(e === 'k') {
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    } else {
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    };
};

function animation(currentKey) {
    var animated = document.querySelector(`.${currentKey}`);
    animated.classList.add('pressed');
    setTimeout(() => {
        animated.classList.remove('pressed');
    }, 3000);
}
