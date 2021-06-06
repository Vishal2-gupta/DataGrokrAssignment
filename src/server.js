var express = require('express');
var app = express();
var fs = require("fs");

var user={
  "user4": {
      "name": "value",
      "phone":"value",
      "email": "value",
      "password": "value",
      "confirmpassword": "value"
    }
}

app.post('/addUser', function (req, res) {
   fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log( data );
      
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
