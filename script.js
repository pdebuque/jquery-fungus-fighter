$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let heroAP = 100;


function onReady() {

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!

    $('.arcane-sceptre').on('click', arcaneSceptre);
    $('.entangle').on('click', entangle);
    $('.dragon-blade').on('click', dragonBlade);
    $('.star-fire').on('click', starFire);
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


function arcaneSceptre() {
    fungusHP -= 14;
    heroAP -= 12;
    render();
}
function entangle() {
    fungusHP -= 9;
    heroAP -= 23;
    render();
}
function dragonBlade() {
    fungusHP -= 47;
    heroAP -= 38;
    render();
}
function starFire() {
    fungusHP -= 25;
    heroAP -= 33;
    render();
}

function render() {
    $('.ap-text').html(heroAP);
    $('.hp-text').html(fungusHP);
}