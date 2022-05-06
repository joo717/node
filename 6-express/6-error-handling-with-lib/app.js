import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";
// require('express-async-errors'); // CommonJS module일 때
import {} from "express-async-errors";

const app = express();

app.use(express.json());

app.get("/file1", (req, res, next) => {
  fs.readFile("/file1.txt", (err, data) => {});
});

// 꼭 리턴을 해줘야 express-async-errors 라이브러리를 통해 맨 아래 use 에러처리에서 에러가 잡힘
app.get("/file2", (req, res, next) => {
  return fsAsync.readFile("/file.txt").then((data) => {
    console.log("wow");
  });
});

app.get("/file3", async (req, res, next) => {
  const data = await fsAsync.readFile("file.txt");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(8080);
