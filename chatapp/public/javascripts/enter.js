'use strict';

// 入室メッセージをサーバに送信する
const userName = $('#userName').val();


// サーバから受信した入室メッセージを画面上に表示する
socket.on('', function (data) {
    $('#thread').prepend('<p>' + data + '</p>');
});
