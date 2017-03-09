'use strict';

// 退室メッセージをサーバに送信する
function exit() {
    const userName = '';
    
    // 退室
    location.href = '/';
}

// サーバから受信した退室メッセージを画面上に表示する
socket.on('', function (data) {
    $('#thread').prepend('<p>' + '</p>');
});
