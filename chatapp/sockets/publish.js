'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('eve_pub', function (data) {
        console.log(data);

        // check
        if (!data){
            return;
        }
        if (!data.userName) {
            return;
        }
        if (!data.message) {
            return;
        }

        // set
        data.timestamp = parseInt((new Date) / 1000);

        // end
        io.sockets.emit('eve_pub', data);
    });
};
