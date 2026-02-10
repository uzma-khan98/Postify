import { Router } from "express";
import { signin } from "../controllers/user.controller.js";



const userRouter = Router();

userRouter.get('/signin', signin);
// userRouter.post("/signout", )
// userRouter.post("/signup", )

export default userRouter;
  
