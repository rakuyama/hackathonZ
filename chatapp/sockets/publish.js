'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('eve_pub', function (data) {
      if (!data){
        return;
      }
      if (!data.userName) {
          return;
      }
      if (!data.message) {
          return;
      }

      console.log('eve_pub: ' + data.userName);
      console.log('eve_pub: ' + data.message);

      io.sockets.emit('eve_pub', data);

    });
};
