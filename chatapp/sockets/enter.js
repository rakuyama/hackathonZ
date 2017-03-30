'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('eve_ent', function (data) {
      if (!data){
        return;
      }
      if (!data.userName) {
          return;
      }
      data.timestamp = parseInt((new Date) / 1000);

      console.log('eve_ent: ' + data.userName);
      console.log('eve_ent: ' + data.timestamp);

      socket.broadcast.emit('eve_ent', data);
    });
};
