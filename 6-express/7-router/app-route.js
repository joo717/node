import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";

const app = express();

// middlewares
app.use(express.json()); // REST API -> Body
app.use(express.urlencoded({ extended: false })); // HTML Form -> Body
app.use(express.static("public"));

// routers
app.use("/posts", postRouter);
app.use("/users", userRouter);

app.listen(8080);