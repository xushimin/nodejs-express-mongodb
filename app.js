var express = require('express');
var app = express();
var route = require('./routes/index.js');


//set up templat engine
app.set('view engine', 'ejs');

//static files
//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static('./public'))

//fire controller
route(app);
console.log(route);

// localhost:3000/
//
app.listen(3000);
console.log("listen 3000");
