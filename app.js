var express = require('express');
var sortr=require('./sortr');


var app = express();

//set view engine
app.set('view engine','ejs');
//set static folder
app.use('/assets',express.static('assets'));
//
app.set('port', process.env.PORT || 8080);

sortr(app);

app.listen(app.get('port'),function(){
    console.log('listening on' + app.get('port'))
     });


