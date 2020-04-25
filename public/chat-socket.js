// Making a connection
const socket = io("http://localhost:3200");

// Query Dom
var message = document.getElementById("message");
handle = document.getElementById("handle");
btn = document.getElementById("send");
output = document.getElementById("output");

// Emit events
btn.addEventListener("click", function () {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value,
  });
});

socket.on("chat", function (data) {
  output.innerHTML +=
    "<p><strong>" + data.handle + "</strong>: " + data.message + "</p>";
});
