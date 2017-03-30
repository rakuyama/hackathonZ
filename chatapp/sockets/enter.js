'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('eve_ent', function (data) {
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

        // end
        socket.broadcast.emit('eve_ent', data);
    });
};
