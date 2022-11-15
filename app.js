const express = require("express");
const bodyParser = require("body-parser");
const socket = require("socket.io");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
var port = process.env.PORT || 3000;

//Start Server
const server = app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});

const io = socket(server);
require("./utils/socket")(io);
