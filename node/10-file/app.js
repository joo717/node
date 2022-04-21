const fs = require("fs");

// 3
// rename(...., callback(error, data))
// try {renameSync(....)} catch(e){}
// promises.rename().then().catch(0)

// 동기
try {
  fs.renameSync("./text.txt", "./text-new.txt");
} catch (error) {
  console.error(error);
}

// 비동기
fs.rename("./text-new.txt", "./text.txt", (error) => {
  console.log(error);
});
console.log("hello");

// fs 모듈의 promise 이용
fs.promises
  .rename("./text2.txt", "./text-new.txt") //
  .then(() => console.log("done"))
  .catch(console.error);
