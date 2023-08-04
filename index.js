import express from "express";
import ejs from "ejs";

const app = express();
const port = process.env.PORT || 8000;

app.set("view engine", "ejs");
// add styling
app.use(express.static("public"));
// list objects to include in the list
const taskList = [
  "Wake up",
  "Eat breakfast",
  "Get dressed",
  "Go to work",
  "Take a break",
  "Eat lunch",
  "Work on projects",
  "Take another break",
  "Finish work",
  "Go home",
  "Make dinner",
  "Eat dinner",
  "Relax",
  "Go to bed",
];

app.get("/", (req, res) => {
  // Render the EJS template with the task list
  res.render("index.ejs", { tasks: taskList });
});

// Define a route for the `/add` path
app.post("/add", (req, res) => {
  // Get the new todo item from the request body
  const newTask = req.body.task;

  // Add the new todo item to the task list
  taskList.push(newTask);

  // Redirect to the todo list page
  res.redirect("/");
});

// Listening to the server
app.listen(port, () => {
  console.log(`Server working at port ${port}`);
});
