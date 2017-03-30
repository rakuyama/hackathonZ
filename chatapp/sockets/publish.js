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
      data.timestamp = parseInt((new Date) / 1000);

      console.log('eve_pub: ' + data.userName);
      console.log('eve_pub: ' + data.message);
      console.log('eve_pub: ' + data.timestamp);

      io.sockets.emit('eve_pub', data);
    });
};
