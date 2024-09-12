let my_body = document.querySelector("#my_body");
let btnRed = document.querySelector("#btnRed");
let btnYellow = document.querySelector("#btnYellow");
let btnBlue = document.querySelector("#btnBlue");
let btnGreen = document.querySelector("#btnGreen");
let btnReset = document.querySelector("#btnReset");
let title = document.querySelector("#title");

title.style.background = 'aqua';

btnRed.addEventListener('click', function(){
    my_body.style.background = '#e94560';
})

btnYellow.addEventListener('click', function(){
    my_body.style.background = '#ffd66b';
})

btnBlue.addEventListener('click', function(){
    my_body.style.background = '#0278ae';
})

btnGreen.addEventListener('click', function(){
    my_body.style.background = '#61b15a';
})

btnReset.addEventListener('click', function(){
    my_body.style.background = '#fff';
})

