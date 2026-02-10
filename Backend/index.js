import express from "express";
import {signin} from './controllers/user.controller.js'

const app = express();

// * middlewares
app.use(express.json());
app.use('/api/v1/user', userRouter)

// * Routes
app.get("/", (req, res) => {
  res.send({
    msg: "Hello Our First page",
  });
});

app.listen(3000, () => {
  console.log("Our app is running on Port 3000");
});
