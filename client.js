const WebSocket = require("ws");
const url = "ws://localhost:8080";
const express = require("express");
const app = express();
const port = 4000;
var recieve = [];

const connection = new WebSocket(url);
connection.onmessage = (e) => {
  order = JSON.parse(e.data);
  console.log(order.menu);
  //recieve.push(e.data);
};

app.use(express.static('cliient'))
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname + "/chef.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
app.get("/", (req, res) => {
  res.send(`${recieve}`);
});
