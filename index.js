var express=require('express')
var app=express()

app.use('/assets',express.static('css'))
app.use('/assets',express.static('js'))
app.use('/assets',express.static('node_modules'))
app.use('/assets',express.static('metronic'))

app.use(express.static('views'))

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
}).listen(8070)