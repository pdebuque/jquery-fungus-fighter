$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let heroAP = 100;
let regenerate = false;

const attacks = {
    arcaneSceptre: {
        cost: 12,
        damage: 14
    },
    entangle: {
        cost: 23,
        damage: 9
    },
    dragonBlade: {
        cost: 38,
        damage: 47
    },
    starFire: {
        cost: 33,
        damage: 25
    }

}

function onReady() {

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!

    $('.attack-btn').on('click', handleAttack);

    // $('.arcane-sceptre').on('click', arcaneSceptre);
    // $('.entangle').on('click', entangle);
    // $('.dragon-blade').on('click', dragonBlade);
    // $('.star-fire').on('click', starFire);

    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function handleAttack() {
    let attack = $(this).attr('class').split(' ')[1];
    let attackVals = attacks[attack];
    fungusHP -= attackVals.damage;
    heroAP -= attackVals.cost;
    render();

}

// function arcaneSceptre() {
//      fungusHP -= 14;
//      heroAP -= 12;
//      render();
// }
// }
// function entangle() {
//     fungusHP -= 9;
//     heroAP -= 23;
//     render();
// }
// function dragonBlade() {
//     fungusHP -= 47;
//     heroAP -= 38;
//     render();
// }
// function starFire() {
//     fungusHP -= 25;
//     heroAP -= 33;
//     render();
// }

function render() {
    $('.ap-text').html(heroAP);
    $('.hp-text').html(fungusHP);

    $('#ap-meter').val(heroAP);
    $('#hp-meter').val(fungusHP);

    if (fungusHP <= 0) {
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('dead');
    };
    if (heroAP <= 0) {
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('jump');
        $('button').prop('disabled', true);
    };

    if (fungusHP < 50 && fungusHP > 0 && !regenerate) {
        setInterval(regenerateFn, 1000)
    };

    if (fungusHP >= 100) {
        fungusHP = 100;
    };
}

function regenerateFn() {
    regenerate = true;
    fungusHP++;
    render();
    // regenerate=true;
    // fungusHP++;
}