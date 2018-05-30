//intègre la connexion à la base de données
var database = require('../dbconnect');
//création de la classe Todos
var todos = {
        getAll: function(callback) {
                return database.query(
                'SELECT id, task, debut, fin FROM tasks ORDER BY debut',    
                callback
            );
        },

    
        getById: function(id, callback) {
                return database.query(
                'SELECT id, task, debut, fin FROM tasks WHERE id=?',
                [id],
                callback
            );
        },

        add: function(Todo, callback) {
                return database.query(
                'INSERT INTO tasks (task, debut, fin) VALUES (?,?,?)',
                [Todo.task, Todo.debut, Todo.fin],
                callback
            );
        },

        update: function(Todo, callback) {
                return database.query(
                'UPDATE tasks SET task = ?, debut = ?, fin = ? WHERE id = ?',
                [Todo.task, Todo.debut, Todo.fin, Todo.id],
                callback
            );
        },

        delete: function(id, callback) {
                return database.query(
                'DELETE FROM tasks WHERE id=?',
                [id],
                callback
            );
        },

}
//permet d'exporter la classe
module.exports = todos;



