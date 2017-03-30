'use strict';

module.exports = function (socket, io) {
    // 退室メッセージをクライアントに送信する
    socket.on('eve_exi', function (data) {
        console.log(data);

        // check
        if (!data){
            return;
        }
        if (!data.userName) {
            return;
        }

        // set
        data.timestamp = parseInt((new Date) / 1000);

        io.sockets.emit('eve_exi', data);
    });
};
