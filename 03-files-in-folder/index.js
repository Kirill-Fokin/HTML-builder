const fs = require('fs/promises');
const path = require('path');
const folderPath = path.join(__dirname, 'secret-folder');
const { stdout } = process;
fs.readdir(folderPath, { withFileTypes: true }).then((files) => {
  files.forEach((file) => {
    let filePath = path.join(folderPath, file.name);
    let ext = path.extname(filePath);
    fs.stat(filePath).then((stat) => {
      const fileSize = `${stat.size / 1024}`;
      stdout.write(
        `${path.basename(filePath, ext)} - ${ext} - ${fileSize}kb\n`,
      );
    });
  });
});
