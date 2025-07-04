#!/usr/bin/env node

import fs from "node:fs/promises";
const filePath=process.argv[2]
const SingleWord=process.argv[3];


const content = await fs.readFile(filePath, "utf-8");

// Split by anything that is NOT a word character
const words = content.split(/\W+/).filter(Boolean);

const wordCount={};

words.forEach(word => {
    if(word in wordCount){
        wordCount[word]+=1;

    }else{
        wordCount[word]=1;

    }
  
      
});


if(SingleWord){
    console.log(`${SingleWord} : `,wordCount[SingleWord]||0);
    
}else{
    console.log(wordCount);
    
}