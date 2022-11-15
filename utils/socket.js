const users = {};
const ROOM = "room";

//Socket connection
const socket = (io) => {
  io.on("connection", (socket) => {
    let user = "";

    socket.on("join", (data) => {
      console.log({ Join: data });
      user = data.user;
      users[user] = "";

      //Joining the Socket Room
      socket.join(ROOM);

      //Emitting New Username to Clients
      io.to(ROOM).emit("join", { user });

      //Send online users array
      io.to(ROOM).emit("online-users", users);
    });

    //Broadcasting the user who is typing
    socket.on("browsing", (data) => {
      console.log({ browsing: data });
      users[user] = data.page;
      io.to(ROOM).emit("browsing", users);
    });

    //Remove user from memory when they disconnect
    socket.on("disconnecting", () => {
      console.log({ disconnecting: user });
      delete users[user];

      //Send online users array
      io.to(ROOM).emit("online-users", users);
    });
  });
};

module.exports = socket;
