var express = require('express')
var app = express()
var port = process.env.PORT || 3000;
var uaParser = require('ua-parser');
var parseAcceptLanguage = require('parse-accept-language');


app.get('/', function (req, res) {
    
    var ip = req.ip;
     if (ip.substr(0, 7) == '::ffff:') {
      ip = ip.substr(7);
    }
    
    var language = parseAcceptLanguage(req);
    //get an array of preferred languages from http req headers, and take the first one, which is most preferred language
        
    var uaHeader = req.headers['user-agent'];
    
    var agent = uaParser.parseOS(uaHeader).toString();

     
     res.json({"ipaddress": ip, "language": language[0], "software": agent});

})



app.listen(port, function () {
  console.log('Example app listening on port '+port+'!')
})