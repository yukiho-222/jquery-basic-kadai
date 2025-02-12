$(function () {
    // 文字色を変える（青に変更）
    $('#change-color').on('click', function() {
        $('#target').css('color', 'blue');
    });

    // 文字内容を変更する
    $('#change-text').on('click', function() {
        $('#target').text('さようなら！');
    });

    // フェードアウトで文字を消す
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    });

    // フェードインで文字を表示する
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });
});
