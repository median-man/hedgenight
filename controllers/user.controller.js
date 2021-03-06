const db = require("../models");

const findAllTasks = (req, res) => {
    db.User.findById(req.user.id)
    .populate("tasks")
    .then(user => {
        res.json(user.tasks)
    }).catch(err => {
        console.log(err)
        res.sendStatus(400)
    })
}

const deleteTask = (req, res) => {
    res.end()
}

// WTF DOES THIS DO
const createTask = (req, res) => {
    console.log(req.body)
    db.User.findById(req.user.id)
    .then((user)=>{
        return user.addTask(req.body)
    })
    .then((task)=>{
        res.json(task)
    })
    .catch(err => {
      res.json(err);
    });
}

module.exports = { findAllTasks, deleteTask, createTask }