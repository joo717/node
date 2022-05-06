import express from "express";

const app = express();

app.use(express.json());

app
  .route("/posts")
  .get((req, res, next) => {
    res.status(201).send("GET: /posts");
  })
  .post((req, res, next) => {
    res.status(201).send("POST: /posts");
  });
app
  .route("/posts/:id")
  .get((req, res, next) => {
    res.status(201).send("GET: /posts/:id");
  })
  .post((req, res, next) => {
    res.status(201).send("POST: /posts/:id");
  });

app.listen(8080);
