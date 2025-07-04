#!/usr/bin/env node
import { readFile, writeFile } from "fs/promises";

const fileToCopy = process.argv[2];
const fileWhereToCOpy = process.argv[3];

console.log(fileToCopy);
console.log(fileWhereToCOpy);

try {
  const fileContent = await readFile(fileToCopy, "utf-8");
  console.log(fileContent);
  await writeFile(fileWhereToCOpy, fileContent);
  console.log("File copied successfully!");
} catch (err) {
  console.error("Error:", err.message);
}
