const fs = require("fs");
const fsPromises = fs.promises;

const targetFolder = process.argv[process.argv.length - 1];
const month = new Date().toLocaleString("default", { month: "short" });

fsPromises
  .readdir(targetFolder) //
  .then((files) => {
    files.forEach((fileName) => {
      const ext = fileName.substring(fileName.lastIndexOf(".") + 1);

      let type = "";
      if (["mp4", "mov"].includes(ext)) {
        type = "video";
      }
      if (["png", "aae"].includes(ext)) {
        type = "captured";
      }
      if (
        fileName.startsWith("IMG_") &&
        files.includes(fileName.replace("IMG_", "IMG_E"))
      ) {
        type = "duplicated";
      }

      const dist = `${month}${type ? "/" + type : ""}`;

      // make a directory
      if (!fs.existsSync(`${dist}/`)) {
        fsPromises
          .mkdir(`${dist}/`, { recursive: true }) //
          .then(() => {
            console.info("made a folder: ", `./${dist}`);
          })
          .catch(console.error);
      }

      // copy a file
      fsPromises.copyFile(
        `./${targetFolder}/${fileName}`,
        `./${dist}/${fileName}`
      );
      console.info(`copied ${fileName} to ${type}`);
    });
  })
  .catch(console.error);
