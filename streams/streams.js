const fs = require('fs');
const through = require('through2');

/* Create a read stream here
const readPoemStream = ???
*/

/* Create a write stream here
const writePoemStream =
*/

/* EXTENSION: Create a transform stream (modify the read stream before piping to write stream)
const transformStream = ???
readPoemStream.pipe(transformStream).pipe(writePoemStream)
*/
/*
  Copy over to streams.js to test
*/

const readPoemStream = fs.createReadStream('on-joy-and-sorrow-emoji.txt');
const writePoemStream = fs.createWriteStream('on-joy-and-sorrow-fixed.txt');

function write(buffer, encoding, next) {
  let text = buffer.toString();
  text = text.replace(/:\)/gi, 'joy');
  text = text.replace(/:\(/gi, 'sorrow');
  this.push(text);
  next();
}

const transformStream = through(write);

readPoemStream.pipe(transformStream).pipe(writePoemStream);
