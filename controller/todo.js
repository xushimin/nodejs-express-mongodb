var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to the database
//
mongoose.connect('mongodb://todo:mytodo1@ds225382.mlab.com:25382/minry');

//create a schema - this is like a blueprint
//
var todoSchema = new mongoose.Schema({
  item: String
})

var Todo = mongoose.model('Todo', todoSchema);

var itemOne = Todo({"item": "learn more"}).save(function(error){
  if(error) throw err;
  console.log('item saved');
});

var urlencodedParser = bodyParser.urlencoded({extended: true});

var data = [{item: 'get milk'},{item: 'walk dog'},{item: 'kick some'}]

module.exports =  {
  gettodo: (req, res)=>{
    Todo.find({}, function(error, data){
      res.render('todo', {todos: data});
    })
  },

  addtodo: (req, res)=>{
    var newTodo = new Todo(req.body).save((e, data)=>{
      res.json(data);
    })
  },

  deletetodo: (req, res)=>{
    Todo.find({item: req.params.itemName.replace(/\-/g, ' ')}).deleteOne((e, data)=>{
      if(e) throw e;
      res.json(data);
    })
  }
}
