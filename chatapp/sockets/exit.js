'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('eve_exi', function (data) {
        if (!data){
            return;
        }
        if (!data.userName) {
            return;
        }
        data.timestamp = parseInt((new Date) / 1000);

        console.log('eve_exi: ' + data.userName);
        console.log('eve_exi: ' + data.timestamp);

        socket.broadcast.emit('eve_exi', data);
    });
};
