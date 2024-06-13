



let x = require('express');
let p = require('path');
let cors = require('cors');

const bdp = require('body-parser');

let app = x();

app.use(
    cors({
        origin: '*',
    })
  );
app.use(x.json());
const port = 8000;

app.use(bdp.urlencoded({extended:true}));




app.get('/' ,function(req, res){
    console.log("hi");
    res.sendFile(p.join(__dirname,'/a.html')); 
});

app.get('/dp',function(req,res){
    res.sendFile(p.join(__dirname,'/d.html')); 

})

app.get('/images/:f',function(req,res){
    console.log(req);
    console.log(req.params);
    console.log(req.url);
    res.sendFile(p.join(__dirname,'/images' +"/"+ req.params.f));
});

app.get('/dp/move',function(req,res){
    res.sendFile(p.join(__dirname,'/a.html')); 

});


app.get('/img/t/:p/:e/:d',function(req,res){
    console.log(req);
    console.log(req.params);
    console.log(req.url);
    res.status(500).json({message:"success"});
    
})

app.post('/k',function(req,res){
    console.log("gafsg");
})









app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});