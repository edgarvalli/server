const MongoModel = require("../models/MongoModel");

module.exports = app => {
  const http = require("http").Server(app);
  const io = require("socket.io")(http);

  io.of("/tlacrm").on("connection", socket => {
    const { room } = socket.handshake.query;
    socket.join(room);
    const mongo = new MongoModel("tlacrm", room);

    socket.on("client_typing", data => {
      console.log(data);
      socket.broadcast.to(room).emit("client_typing", data);
    });

    socket.broadcast.on("client_stop_typing", data => {
      socket.broadcast.to(room).emit("client_stop_typing", data);
    });

    socket.on("add_commnet", async ({ id, comment }) => {
      try {

        comment.createDate = new Date();
        await mongo.Update(id, {
          $push: { comments: comment }
        });

        socket.emit("add_comment", comment);
      } catch (message) {
        console.log(message);
      }
    });
  });

  return http;
};
