const fs = require('fs/promises');
const fss = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, 'files');

fs.mkdir(path.join(__dirname, 'files-copy'), true)
  .then(function (err) {
    console.log('Directory created successfully');
  })
  .then(function () {
    fs.readdir(folderPath, { withFileTypes: true }).then((files) => {
      files.forEach((file) => {
        let filePath = path.join(folderPath, file.name);
        fss.copyFile(
          path.join(filePath),
          path.join(__dirname, 'files-copy', file.name),
          (err) => {
            if (err) throw err;
            console.log('Файл успешно скопирован');
          },
        );
      });
    });
  })
  .catch(function (err) {
    if (err.code === 'EEXIST') {
      fs.readdir(folderPath, { withFileTypes: true }).then((files) => {
        files.forEach((file) => {
          let filePath = path.join(folderPath, file.name);
          fss.copyFile(
            path.join(filePath),
            path.join(__dirname, 'files-copy', file.name),
            (err) => {
              if (err) throw err;
              console.log('Файл успешно скопирован');
            },
          );
        });
      });
    } else {
      console.log('somethin went wrong');
    }
  });
