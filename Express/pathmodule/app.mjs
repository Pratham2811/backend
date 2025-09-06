import path from "node:path"
console.log(path.join("/test","../..///../hello","//num.txt../../../"));
console.log(path.join("test",".///hello","/hii"));

console.log(path.join("./hii","///text","./lesson","../../../../../"));
console.log(process.cwd());


//cureent working directory cwd i changesd accrding to from where node js is excuten the directory from which you run node js file is the working directory
//the thing which not change is import.meta.dirname

//path.resolve()

//this method resolve the path removes extra / or things 

console.log(path.resolve("hi","test"));//D:\Fullstack\Backend\Express\pathmodule\hi\test
console.log("join: ",path.join("hi","test","file"));//hi\test\file
//in join method if first has "/somethinf"
//"\" is added before somthing while joining it and after all thing no matter what you write it join it with the "\" then normalize it 

//in method resolve add the argument passed to it with current workjing directory 
//but if we add 

console.log(path.resolve("/hii","test")); //its goes so up final parent directory means d drive  and it write name after / to d drive then all after that
//D:\hii\test
console.log(path.resolve("/hii","/test")); //in this case resolve read argument from left sees text is root which come after drive writes it and then ignore /hii 


{/**
    join

Glues paths left-to-right.

Doesn’t know about CWD.

Doesn’t reset on absolute paths

resolve

Reads right-to-left.

First absolute path resets everything before.

If no absolute found, prepends CWD.

Always returns an absolute path.
*/}

console.log(path.join("/","../../../../test"));// \test

console.log(path.join("/","/../../../../test")); // \test
console.log(path.join("/","test"));// \test 
console.log(path.join("./","test"));// test 
console.log(path.join("./hello","test"));// hello\test 