'use strict';

// メモを画面上に表示する
function memo() {
  const userName = $('#userName').val();
  var message = $('#message').val();

  message = $.trim( message );

  if (message.length < 1) {
      alert('なにかにゅうりょくしてください！！！');
      return;
  }

  const data = {
     userName: userName
    ,message: message
    ,timestamp: parseInt((new Date) / 1000)
  };

  var msg = '';
  msg += '[' + ts2dt(data.timestamp) + '] '
  msg += data.userName;
  msg += 'さん: ';
  msg += data.message;
  $('#thread').prepend('<p>' + msg + '</p>');

  $('#message').val('');

  return false;
}
