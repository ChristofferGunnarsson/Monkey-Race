let txt = document.getElementById("text");
var monkey = $(".monkey");
var monkey2 = $(".monkey2");


$('body').on('keyup', e => {
    if(e.keyCode == 32) {
        monkey.animate({
            left: '+=5px'
        },10, checkWinner);
    }
});


$('body').on('keyup', e => {
    if(e.keyCode == 13) {
        monkey2.animate({
            right: '+=5px',
        },10, checkWinner);
    }
});

$('body').on('keyup', e => {
    console.log(event.keyCode);
    if(e.keyCode == 82) {
        location.reload();
    }
});
function checkWinner() {
    let monkey1Width = parseInt( monkey.css('left'));
    let monkey2Width = parseInt( monkey2.css('right'));
    
    if(monkey1Width > ($(window).width()/2) - monkey1Width/3) {
        $(".banana").hide();
        $('audio#pop')[0].play();
        txt.innerHTML = "PLAYER1 WINS!!<br>PRESS R TO RETRY!";
        $(monkey).animate({ top: '-=60px'}, 500, function() {
            $(monkey).toggleClass('flip');
            $(monkey).animate({ top: '+=60px'}, 1000,function(){
                $(monkey).hide();
                $(monkey2).hide();
            });
        });
    }
    if(monkey2Width > ($(window).width()/2) - monkey2Width/3) {
        $(".banana").hide();
        $('audio#pop')[0].play();
        txt.innerHTML = "PLAYER2 WINS!!<br>PRESS R TO RETRY!";
        $(monkey2).animate({ top: '-=60px'}, 500, function() {
            $(monkey2).toggleClass('flip2');
            $(monkey2).animate({ top: '+=60px'}, 1000,function(){
                $(monkey).hide();
                $(monkey2).hide();
            });
        });
    }
}
