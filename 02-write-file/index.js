const path = require('path');
const fs = require('fs');
const { stdout } = require('process');
const writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

process.stdout.write('Hello! Write text, please)');
process.stdin.on('data', (text) => {
  let fileText = text.toString().trim();
  if (fileText === 'exit') {
    process.stdout.write('Goodbye!');
    process.exit();
  } else {
    writeStream.write(text);
  }
});

process.on('SIGINT', () => process.exit());
process.on('exit', () => stdout.write('Goodbye'));
