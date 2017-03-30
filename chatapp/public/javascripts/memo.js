'use strict';

// メモを画面上に表示する
function memo() {
    // get
    const userName = $('#userName').val();
    let message = $('#message').val();
    message = $.trim( message );

    // check
    if (message.length < 1) {
        alert('なにかにゅうりょくしてください！！！');
        return;
    }

    // dummy from
    const data = {
         userName: userName
        ,message: message
        ,timestamp: parseInt((new Date) / 1000)
    };

    // dummy to
    let msg = '';
    msg += '[' + ts2dt(data.timestamp) + '] '
    msg += 'めも: ';
    msg += data.message.split("\n").join('<br>');
    $('#thread').prepend('<p>' + msg + '</p>');

    // clear
    $('#message').val('');

    // end
    return false;
}
