const fs = require('fs/promises');
const fss = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, 'styles');
const { stdout } = process;




    fs.readdir(folderPath, { withFileTypes: true }).then((files) => {
      let data = '';
      files.forEach((file) => {
        let filePath = path.join(folderPath, file.name);
        let ext = path.extname(filePath);
        if (ext == '.css') {
           console.log(file.name);

           const stream = fss.createReadStream(path.join(__dirname, 'styles', file.name), 'utf-8');
           stream.on('data', (chunk) => (data += chunk));
           stream.on('error', (error) => console.log('Error', error.message));

           const fs = require("fs");
 
           const data = "Hello Node.js\n";
                
           fs.writeFile("hello2.txt", data, function(error){
               if(error){  // если ошибка
                   return console.log(error);
               }
               console.log("Файл успешно записан");
           });
       
      });
    });
