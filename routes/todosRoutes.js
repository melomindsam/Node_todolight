var express = require('express');
var router = express.Router();
var Todo = require('../models/Todos');

//@GET ==> Todo.getAll et Todo.gatById  
router.get('/:id?', function(request, response, next){ 
//Si présence de paramètre on appelle la méthode getById
    if(request.params.id) {

        Todo.getById(request.params.id, function(error, rows) {
            if(error) {
                response.json(error);
            }else{
                response.json(rows);
            }
        })
        
    } else { //si pas de paramètre on apelle la méthode getAll
        Todo.getAll(function(error, rows) {
            if(error) {
                response.json(error);
            }else {
                response.json(rows);
            }
        })

    }
});

// POST ==> Todo.add
router.post('/', function(request, response, next){
    Todo.add(request.body, function(error, count){
        if(error) {
            response.json(error);
        }else {
            response.json(request.body);
        }
    })
});

// PUT ==> Todo.update
router.put('/', function(request, response, next){
    Todo.update(request.body, function(error, count){
        if(error){
            response.json(error);
        }else{
            response.json(request.body)
        }
    })
});

//DELETE ==> Todo.delete
router.delete('/:id', function(request, response, next){
    Todo.delete(request.params.id, function(error, count){
        if(error){
            response.json(error);
        }else{
            response.json(request.body)
        }
    })
});

module.exports = router;
