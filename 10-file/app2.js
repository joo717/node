const fs = require("fs").promises;

// read a file
fs.readFile("./text.txt", "utf8")
  .then((data) => console.log(data))
  .catch(console.error);

// writing a file
fs.writeFile("./file.txt", "hello ~~~") //
  .catch(console.error);

// append file
fs.appendFile("./file.txt", " It's me") //
  .then(() => {})
  .catch(console.error);

// copy
fs.copyFile("./file.txt", "file2.txt") //
  .catch(console.error);

// folder
fs.mkdir("sub-folder") //
  .catch(console.error);

// read dir
fs.readdir("./") //
  .then(console.log)
  .catch(console.error);
