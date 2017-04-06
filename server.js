var express = require('express')
var app = express()
var port = process.env.PORT || 3000;
var uaParser = require('ua-parser');


app.get('/', function (req, res) {
    
    var ip = req.ip;
     if (ip.substr(0, 7) == '::ffff:') {
      ip = ip.substr(7);
    }
    
    var language = req.acceptsLanguages('fr', 'es', 'en-US','pt-BR');
        
    var uaHeader = req.headers['user-agent'];
    
    var agent = uaParser.parseOS(uaHeader).toString();

     
     res.json({"ipaddress": ip, "language": language, "software": agent});

})



app.listen(port, function () {
  console.log('Example app listening on port '+port+'!')
})