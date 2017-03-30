'use strict';

// 入室メッセージをサーバに送信する
socket.emit('eve_ent', { userName: $('#userName').val() });


// サーバから受信した入室メッセージを画面上に表示する
socket.on('eve_ent', function (data) {
    console.log(data);

    let msg = '';
    msg += '[' + ts2dt(data.timestamp) + '] '
    msg += data.userName;
    msg += 'さんが入室しました。';
    $('#thread').prepend('<p>' + msg + '</p>');
});
