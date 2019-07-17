const express = require('express')
const bodyParser = require('body-parser')
const bitcoinMessage = require('bitcoinjs-message')
const cors = require('cors')
const app = express()

const messagePrefix = "\x19Monacoin Signed Message:\n"

var fs = require('fs');
var https = require('https');
app.use(bodyParser.json())
app.use(cors())

var options = {
  key:  fs.readFileSync('../../../work/ssl/localhost.key'),
  cert: fs.readFileSync('../../../work/ssl/localhost.crt')
};

var server = https.createServer(options,app);

app.post('/verify', function(req, res) {
  var date = new Date();
  var a = date.getTime();
  var address = req.body.address
  var message = req.body.message
  var signature = req.body.signature

  var result = message.split(':');
  var time_diff = a - parseInt(result[1], 10)

  var is_varify = bitcoinMessage.verify(message, address, signature, messagePrefix)
  console.log(is_varify)

  if(time_diff < 6000 && is_varify) {
  	var return_message = true
  } else {
  	var return_message = false
  }

  res.send({
    message: return_message
  })
})

server.listen(3000);