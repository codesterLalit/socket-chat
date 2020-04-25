const express = require("express");
const socket = require("socket.io");

//app setip
const app = express();
const server = app.listen(3200, () => {
  console.log("Server is running at port 3200");
});

// static content setup
app.use(express.static("public"));

//Socket setup
const io = socket(server);

io.on("connection", (socket) => {
  console.log("something is not working fine", socket.id);
});
