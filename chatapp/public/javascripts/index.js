'use strict';

// チャットルームに入室する
function enter() {
    // get param
    const userName = $('#userName').val();

    // ユーザ名をチェックする
    if (userName.length < 1) {
        alert('ユーザー名を入力してください。');
        return;
    }

    $('form').submit();
}
