const express =  require('express');
const bodyParser = require('body-parser');
const date = require('./date');

const app = express();
const port = 8000;
const items = [];
const workItems=[];

app.set('view engine','ejs'); 
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.render('list',{listTitle:date.getDate(),listitems:items})
});

app.post('/',(req,res)=>{
    var item = req.body.newItem;
    if (req.body.list ==="Work"){
        workItems.push(item);
        res.redirect('/work');
    }else{
        items.push(item);
        res.redirect("/")
    }
});

app.get('/work',(req,res)=>{
    res.render("list",{listTitle:"Work List",listitems:workItems})
});

app.get('/about',(req,res)=>{
    res.render('about');
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
});