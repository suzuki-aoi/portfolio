$(".hamburger").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#nav").toggleClass('active');//ナビゲーションにactiveクラスを付与
});