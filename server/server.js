var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var server = app.listen(5000, function(){
    console.log("Express server has started on port 5000")
})
let placeAry=new Array();
var id=0;

app.use(cors());

app.post('/placelist', function(req,res) {
    placeAry.push({lat : req.body.lat, lng : req.body.lng});
    console.log(req.body.lat);
    console.log(req.body.lng);
    console.log(placeAry);
    res.redirect('http://localhost:3000');
});


app.get('/placelist', (req,res)=> {
    res.send( placeAry );
});