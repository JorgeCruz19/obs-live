const express = require("express");

const app = express();
const port = 8080;

app.use(express.static(__dirname + "/"));
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});
app.get("/devices", (req, res) => {
	res.sendFile(__dirname + "/devices.html");
});
app.get("/iframe", (req, res) => {
	res.sendFile(__dirname + "/iframe.html");
});
app.get("/examples/multi", (req, res) => {
	res.sendFile(__dirname + "/examples/rooms.html");
});
app.get("/examples/channels", (req, res) => {
	res.sendFile(__dirname + "/examples/channels.html");
});

app.listen(port, () => console.log("server on port", port));
