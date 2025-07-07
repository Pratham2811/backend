import fs from "fs/promises";

const fileHandleDest = await fs.open("stream.mp4", "w");
const fileHandleSrc = await fs.open(
  "C:\\Users\\prath\\OneDrive\\Desktop\\Episode 14 - NetflixGPT - The Beginning.mp4",
  "r"
);

// Create streams from file handles
const readStream = fileHandleSrc.createReadStream();
const writeStream = fileHandleDest.createWriteStream();

// Pipe data
readStream.pipe(writeStream);

// Close handles when done
writeStream.on("close", async () => {
  await fileHandleDest.close();
  await fileHandleSrc.close();
  console.log("✅ File copied successfully");
});
