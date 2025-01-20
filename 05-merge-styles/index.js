const fs = require('fs');
const path = require('path');
const writeStream = fs.createWriteStream(
  '05-merge-styles/project-dist/bundle.css',
);
const slylesPath = '05-merge-styles/styles';

fs.readdir(slylesPath, { withFileTypes: true }, (err, files) => {
  if (err) {
    process.stdout.write('Something went wrong: ' + err);
  } else {
    files
      .filter((file) => path.extname(file.name) === '.css')
      .forEach((file) => {
        const filePath = path.join(slylesPath, file.name);
        const readStream = fs.createReadStream(filePath);
        readStream.on('data', (text) => {
          writeStream.write(`${text}\n`);
        });
      });
    process.stdout.write('bundle is created !');
  }
});
