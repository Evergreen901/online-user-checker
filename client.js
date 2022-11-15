//Socket server URL
const socket = io.connect("http://localhost:3000");

socket.on("join", console.log);
socket.on("browsing", console.log);
socket.on("online-users", console.log);

const user1 = "user1";

socket.emit("join", { user: user1 });

socket.emit("browsing", { page: "page1" });
socket.emit("browsing", { page: "page2" });
socket.emit("browsing", { page: "page3" });
