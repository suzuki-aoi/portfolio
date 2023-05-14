$('.pagetop').click(function () {
    $('body,html').animate({scrollTop: 0}, 500);
});

$(window).scroll(function() {
    //画面一番上からのスクロール位置が100を超えたら
    if ($(this).scrollTop() > 100){
        $('.pagetop').fadeIn();
    //画面一番上からのスクロール位置が100を超えなかったら
    } else { 
        $('.pagetop').fadeOut();
    }
});