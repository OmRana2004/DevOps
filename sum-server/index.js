import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const todos = [
  {
    id: 1,
    title: 'Buy groceries',
    description: 'Milk, Bread, Eggs, Butter',
    completed: false,
  },
  {
    id: 2,
    title: 'Clean the house',
    description: 'Vacuum, Dust, Mop',
    completed: false,
  },
  {
    id: 3,
    title: 'Finish project',
    description: 'Complete coding task and submit it',
    completed: false,
  },
  {
    id: 4,
    title: 'Go for a run',
    description: 'Morning exercise',
    completed: false,
  }
];

app.get("/", (req, res) => {
    res.send("Welcome To AWS");
});

app.get('/todo', (req, res) => {
    const todo = todos.find(
      t => t.id == req.query.id
    );

    res.json(todo);
});

app.get("/todos", (req, res) => {
    const randomTodos = [];

    for(let i = 0; i < todos.length; i++) {
        if(Math.random() > 0.5){
            randomTodos.push(todos[i]);
        }
    }

    res.json({
        todos: randomTodos
    });
});

app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.send((a+b).toString());
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});