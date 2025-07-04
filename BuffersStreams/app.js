import fs from "fs"

const read = fs.createReadStream('info.txt');
const write = fs.createWriteStream('out.txt');

read.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes`);
});

read.on('end', () => console.log('Reading complete'));
write.on('finish', () => console.log('Writing complete'));

read.pipe(write);

//Datazview to edit the arrayBuffers we cant edit arraybuffers without this and arraybuffers also edited by typearray