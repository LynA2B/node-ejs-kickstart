//include Express
const express = require('express');

//server will listen on this port
const port = 3000;

//create instance of Express app
const app = express();

const userData = require('./data/test.json');

//ejs is templating engine
app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname + '/public'));

//index/home URL (page 1)
app.get('/',(req,res)=>{
    let title = "Home Page";
    res.render('pages/index',{'title': title});
});

//about URL (page 2)
app.get('/about',(req,res)=>{
    let title = "About Page";
    res.render('pages/about',{'title': title});
});

//gallery URL (page 3)
app.get('/gallery',(req,res)=>{
    let title = "Gallery Page";
    res.render('pages/gallery', {'title': title});
});

//contact URL (page 4)
app.get('/contact',(req,res)=>{
    let title = "Contact Page";
    res.render('pages/contact',{'title': title});
});

//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

app.get('/users', (req, res) => {
    res.render('users/index', {
        title: 'User Directory',
        users: userData
    });
});

app.get('/user/view/:id', (req, res) => {
    let id = parseInt(req.params.id) - 1;
    res.render('users/view', {
        title: 'User Profile',
        user: userData[id]
    });
});

