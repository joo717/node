const path = require("path");
const fs = require("fs");
const os = require("os");

const folder = process.argv[2];
console.log(__dirname);
const workingDir = path.join(__dirname, folder);

if (!folder || !fs.existsSync(workingDir)) {
  console.error("Please enter correct folder name");
  return;
}

const videoDir = path.join(workingDir, "video");
const capturedDir = path.join(workingDir, "captured");
const duplicatedDir = path.join(workingDir, "duplicated");
!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

fs.promises
  .readdir(workingDir) //
  .then(processFiles)
  .catch(console.error);

function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      move(file, videoDir);
    } else if (isCapturedFile(file)) {
      move(file, capturedDir);
    } else if ((files, isDuplicatedFile(files, file))) {
      move(file, duplicatedDir);
    }
  });
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isCapturedFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isDuplicatedFile(files, file) {
  if (!file.startsWith("IMG_") || file.startsWith("IMG_E")) {
    return false;
  }
  const edited = `IMG_E${file.split("_")[1]}`;
  const found = files.find((f) => f.includes(edited));
  return !!found;
}

function move(file, targetDir) {
  console.info(`move ${file} to ${path.basename(targetDir)}`);
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);
  fs.promises
    .rename(oldPath, newPath) //
    .catch(console.error);
}
