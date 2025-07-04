//renaaming the file to file.txt to renamed.txt

import { copyFile,cp,unlink,rmdir,writeFile,stat } from "fs/promises";
import{rename} from "fs/promises"
import { log } from "util";
//rename("file.txt","renamed.txt");
//copyfile
copyFile("renamed.txt","file1.txt")//used for copying files 
///copy folders or directory we use method cp 
cp("./src","./cp",{recursive:true})

//rename method is used to rename file and we can move file as well 
//gigving wholw path we can move and rename at same time the file 

// rename("photo1.jpg","./src/assests/madane.jpg")
//rename("madane.jpg","./src/assests/madane1.jpg")
//deleting the file using unlink
//await unlink("./src/app.jsx") deletes file
//await rmdir("./src/services"); deletes empty directory 
//await rm("dir path",{recursive:true})//delete all folders in dir recursively
const stats=await stat("src")
console.log(stats);

await writeFile('files.txt',"")//create file