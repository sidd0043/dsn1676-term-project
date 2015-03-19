var $toggle = $('.toggle');
var $panel = $('.navigation');

var $btnMove = $('.btn-move');
var $fish = $('.fish');

var $btnRoll = $('.btn-roll');
var $yarn = $('.yarn');
var $yarnMove = $('.yarn-move');

var $btnMouse = $('.btn-mouse');
var $mouse = $('.mouse');




$toggle.on('click', function () {
    $panel.toggleClass('js-panel-open');
});






$btnMove.on('click', function () {
    $fish.toggleClass('js-fish-move');
});

$btnRoll.on('click', function () {
    $yarn.toggleClass('js-yarn-rotate');
    $yarnMove.toggleClass('js-yarn-move');
});

$btnMouse.on('click', function () {
    $mouse.toggleClass('js-mouse-move');
});