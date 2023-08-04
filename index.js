import express from "express";
const app = express();
const port = process.env.PORT || 8000;


app.get('', (req, res)=>{
    res.send("Good work");
});


// Listening to the server
app.listen(port, () => {
  console.log(`Server working at port ${port}`);
});
