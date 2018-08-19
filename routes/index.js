var bodyParser = require('body-parser');
var controller = require('../controller/todo');
var urlencodedParser = bodyParser.urlencoded({extended: true});

module.exports =  function(app){
  app.get('/todo', controller.gettodo)

  app.post('/todo', urlencodedParser, controller.addtodo)

  app.delete('/todo/:itemName', controller.deletetodo)
}
