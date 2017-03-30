'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // get
    const userName = $('#userName').val();
    let message = $('#message').val();
    message = $.trim( message );

    // check
    if (message.length < 1) {
        alert('なにかにゅうりょくしてください！！！');
        return;
    }

    // send
    const data = {
         userName:userName
        ,message:message
    };
    socket.emit('eve_pub', data);

    // clear
    $('#message').val('');

    // end
    return false;
}


// サーバから受信した投稿メッセージを画面上に表示する
socket.on('eve_pub', function (data) {
    console.log(data);

    let msg = '';
    msg += '[' + ts2dt(data.timestamp) + '] '
    msg += data.userName;
    msg += 'さん: ';
    msg += data.message.split("\n").join('<br>');
    $('#thread').prepend('<p>' + msg + '</p>');
});
