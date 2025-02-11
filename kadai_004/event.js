// HTMLドキュメントが読み込み完了した時に
$(window).on('load',function(){
    console.log('loadイベントが発生しました');
});

//    画面をスクロールしたら
$(window).on('scroll',function(){
    console.log('scrollイベントが発生しました');
});