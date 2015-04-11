var $navBtn = $('.nav-btn');
var $nav = $('.navigation');

var $btnMove = $('.btn-move');
var $wolverine = $('.wolverine');

var $btnRoll = $('.btn-roll');
var $ball = $('.ball');
var $ballMove = $('.ball-move');

var $btnMoveInOut = $('.btn-move-in-out');
var $mikeTyson = $('.mike-tyson');

var $btnCollapseExpand = $('.btn-collapse-expand');


$navBtn.on('click', function () {
    $nav.toggleClass('js-navigation-open');
});





$btnMove.on('click', function () {
    $wolverine.toggleClass('js-wolverine-move');
});


$btnRoll.on('click', function () {
    $ball.toggleClass('js-ball-rotate');
    $ballMove.toggleClass('js-ball-move');
});


$btnMoveInOut.on('click', function () {
    $mikeTyson.toggleClass('js-mike-move');
});

$('.navigation').localScroll({
    target: 'body'
});

$('.test').localScroll({
    target: 'body'
});