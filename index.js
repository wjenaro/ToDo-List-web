import express from "express";
import ejs from "ejs";

const app = express();
const port = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('', (req, res)=>{
    res.render('index.ejs');
});

// Define a route for the `/add` path
app.post("/add", (req, res) => {
  // Get the new todo item from the request body
  const newTodo = req.body.todo;

  // Add the new todo item to the array
  todos.push(newTodo);

  // Redirect to the todo list page
  res.redirect("/");
});


// Listening to the server
app.listen(port, () => {
  console.log(`Server working at port ${port}`);
});
