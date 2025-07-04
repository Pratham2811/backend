import fs from "fs"
const path = "C:\\Users\\prath\\OneDrive\\Desktop\\Episode 14 - NetflixGPT - The Beginning.mp4";

const totalSize = fs.statSync(path).size; // Total size in bytes
let bytesRead = 0;

const readStream = fs.createReadStream(path);

readStream.on('data', (chunk) => {
  bytesRead += chunk.length;
  const percent = bytesRead / totalSize;
  const progress = Math.floor(percent * 30); // 30 blocks width

  const bar = '█'.repeat(progress) + '░'.repeat(30 - progress);
  const display = `📤 [${bar}] ${(percent * 100).toFixed(2)}%`;

  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  process.stdout.write(display);
});

readStream.on('end', () => {
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  console.log('✅ Completed reading file!');
});

readStream.on('error', (err) => {
  console.error('❌ Error:', err);
});
