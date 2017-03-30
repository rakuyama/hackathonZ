'use strict';

// 退室メッセージをサーバに送信する
function exit() {
    const data = {
        userName: $('#userName').val()
    };
    socket.emit('eve_exi',data);

    // 退室
    location.href = '/';
}


// サーバから受信した退室メッセージを画面上に表示する
socket.on('eve_exi', function (data) {
    var msg = '';
    msg += '[' + ts2dt(data.timestamp) + '] '
    msg += data.userName;
    msg += 'さんが退室しました。';
    $('#thread').prepend('<p>' + msg + '</p>');
});
