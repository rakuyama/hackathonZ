'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    const userName = $('#userName').val();
    var message = $('#message').val();

    message = $.trim( message );

    if (message.length < 1) {
        alert('なにかにゅうりょくしてください！！！');
        return;
    }

    var data = {
       userName:userName
      ,message:message
    };

    socket.emit('eve_pub',data);

    $('#message').val('');

    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('eve_pub', function (data) {
    var msg = '';
    msg += '[' + ts2dt(data.timestamp) + '] '
    msg += data.userName;
    msg += 'さん: ';
    msg += data.message.split("\n").join('<br>');
    $('#thread').prepend('<p>' + msg + '</p>');
});
