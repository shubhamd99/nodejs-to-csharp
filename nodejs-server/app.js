var net = require("net");
var colors = require("colors");

var server = net.createServer();

server.on("connection", (socket) => {
    var remoteAddress = socket.remoteAddress + ":" + socket.remotePort;
    console.log("new client connection is made %s".green, remoteAddress);

    socket.on("data", (d) => {
        console.log("Data from %s: %s".cyan, remoteAddress, d);
        socket.write("Hello from Shubham " + d);
    });

    socket.once("close", () => {
        console.log("Connection from %s closed".yellow, remoteAddress);
    });

    socket.on("error", (err) => {
        console.log("Connection %s error: %s".red, remoteAddress, err.message);
    });
});

server.listen(9000, () => {
    console.log("server listening to %j", server.address());
})