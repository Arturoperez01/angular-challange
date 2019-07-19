const express = require('express'),
    path = require('path');

const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.static(path.join(__dirname,'./app')));

app.use('/',function(req,res){
  res.sendFile(path.join(__dirname,'./app','index.html'))
});
const port = process.env.PORT || 80;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});