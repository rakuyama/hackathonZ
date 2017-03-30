'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    const userName = $('#userName').val();
    const message = $('#message').val();

    var dct = {
       userName:userName
      ,message:message
    };

    socket.emit('eve_pub',dct);

    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('eve_pub', function (data) {
    var msg = '';
    msg += data.userName;
    msg += 'さん: ';
    msg += data.message;
    $('#thread').prepend('<p>' + msg + '</p>');
});
