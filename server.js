const express = require("express");
const WebSocket = require("ws");
const url = "ws://localhost:8080";
const app = express();
const port = 3000;
const path = require("path");
const wss = new WebSocket.Server({ port: 8080 });
var bodyparser = require('body-parser');
var urlencodedparser = bodyparser.urlencoded({extended:false})


wss.on("connection", (ws) => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

  app.use(express.static('hoost'))
  app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
  });

  app.post('/ajax', urlencodedparser, function (req, res){  
    console.log(req.body);
    //ws.send(req.body)
    ws.send(JSON.stringify(req.body));
    console.log('req received');
    res.send(req.body);
    //res.redirect('/');
  });
});
