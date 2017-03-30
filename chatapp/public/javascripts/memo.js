'use strict';

// メモを画面上に表示する
function memo() {
  const userName = $('#userName').val();
  const message = $('#message').val();

  if (message.length < 1) {
      alert('なにかにゅうりょくしてください！！！');
      return;
  }

  const data = {
     userName:userName
    ,message:message
  };

  var msg = '';
  msg += data.userName;
  msg += 'さん: ';
  msg += data.message;
  $('#thread').prepend('<p>' + msg + '</p>');

  $('#message').val('');

  return false;
}
