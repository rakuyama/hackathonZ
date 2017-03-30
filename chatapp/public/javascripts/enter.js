'use strict';

// 入室メッセージをサーバに送信する
const aaa = {
    userName: $('#userName').val()
};
socket.emit('eve_ent', aaa);

// サーバから受信した入室メッセージを画面上に表示する
socket.on('eve_ent', function (data) {
    var msg = '';
    msg += '[' + ts2dt(data.timestamp) + '] '
    msg += data.userName;
    msg += 'さんが入室しました。';
    $('#thread').prepend('<p>' + msg + '</p>');
});
