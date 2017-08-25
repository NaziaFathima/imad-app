var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool = require('pg').Pool;
var config = { 
    user: 'nfathima07',
    database: 'nfathima07',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
}


var app = express();
app.use(morgan('combined'));
var articles = ["article-one" ,"article-two" ,"article-three"];

var articleOne={
    title: 'Article One : Nazia Fathima',
    heading: 'Article One',
    date: 'Aug 15, 2017',
    content:` <p>
               This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
            </p>
            <p>
               This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
            </p>
            <p>
               This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
            </p>`
};

function createTemplate(data) {
    var title= data.title;
    var date= data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width-device-width, initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />

    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div> 
        <hr/>
        <h3> ${heading} </h3>
           <div>
               ${date}
           </div> 
           <div> 
                ${content}
            </div>
            </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var pool = new Pool(config);
app.get('/test-db',function(req,res){
    //make a select request
    pool.query('SELECT * FROM test',function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }else{
           res.send(JSON.stringify(result)); 
        }
    });
});

var counter = 0;
app.get('/counter',function(req,res){
    counter=counter + 1;
    res.send(counter.toString());
    
});


app.get('/articles/:articleName', function(req,res){
    
    pool.query("SELECT * FROM article WHERE title ='" + req.params.articleName + "'", function(err,result){
       if(err){
           res.status(500).send(err.toString());
       } else {
           if(result.rows.length === 0){
               res.status(404).send('Article not found');
           } else{
               var articleData  = result.rows[0];
               res.send(createTemplate(articleData));
           }
       }
        
    });
    res.send(createTemplate(articles[articleName]));
});

//app.get('/article-one', function (req, res) {
 // res.send(createTemplate(articleOne));
//});

//app.get('/article-two', function (req, res) {
  //res.send('Article two requested and will be served here.');
//});

//app.get('/article-three', function (req, res) {
 // res.send('Article three requested and will be served here.');
//});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
  });
  
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
    
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name',function(req,res)
{ //URL: /submit-name?name=xxxx
    //get the name from the request
    var name = req.query.name;
    
    names.push(name);
    //JSON : JavaScript Object Notation
    
    res.send(JSON.stringify(names)); //
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
