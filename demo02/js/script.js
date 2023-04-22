

//見えている状態にする//
$(".hamburger").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#nav").toggleClass('active');//ナビゲーションにactiveクラスを付与
    $("#hamburger-demo-cover").toggleClass('active');//カバーにactiveクラスを付与
});

$("#nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".hamburger").removeClass('active');//ボタンの activeクラスを除去し
    $("#nav").removeClass('active');//ナビゲーションのactiveクラスも除去
    $("#hamburger-demo-cover").removeClass('active');//カバーのactiveクラスも除去
});

$("#hamburger-demo-cover").click(function () { //カバーがクリックされたら
  $(".hamburger").removeClass('active');
  $("#nav").removeClass('active');
  $("#hamburger-demo-cover").removeClass('active');
});