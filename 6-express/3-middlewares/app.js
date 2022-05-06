import express from "express";
const app = express();

app.all("/all", (req, res, next) => {
  console.log("all"); // '/all'
  next();
});
app.use("/use", (req, res, next) => {
  console.log("use"); // '/use/*'
  next();
});

app.get("/sky/:id", (req, res, next) => {
  res.status(201).send("created");
});
app.get(
  "/chaining",
  (req, res, next) => {
    console.log("first");
    next();
  },
  (req, res, next) => {
    console.log("first2");

    if (true) {
      return res.send("true"); // return 을 안쓰면 send가 두 번 되서 에러나므로 주의
    }

    res.send("ok");
  }
);
app.get("/chaining", (req, res, next) => {
  console.log("second");
});

app.use((req, res, next) => {
  console.error(error);
  res.status(404).send("Not available");
});
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Sorry, try later");
});

app.listen(8080);
