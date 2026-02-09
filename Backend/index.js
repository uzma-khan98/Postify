import express from "express";

const app = express();

// * middlewares
app.use(express.json());

// * Routes
app.get("/", (req, res) => {
  res.send({
    msg: "Hello Our First page",
  });
});

app.listen(3000, () => {
  console.log("Our app is running on Port 3000");
});
