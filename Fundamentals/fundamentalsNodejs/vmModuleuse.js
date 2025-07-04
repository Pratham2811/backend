const fs =require('fs');
const vm=require('vm');
const path=require('path');

function loadModule(filepath){
    const abspath=path.resolve(filepath);
    const code=fs.readFileSync(abspath,'utf-8')
   //simulate Nodes wrapper 
   const wrappedcode=`(function(exports,require,module,_filename,_dirname){
   ${code};
   })`

const script=new vm.script(wrappedcode);
const exports={}
const module={exports};
const context=vm.createContext({
    console,
    require,
    exports,
    module,
   __filename: abspath,
   _dirname:path.dirname(abspath)


})

//Run and get wrapper function

const wrapperFunc=script.runInContext(context);
wrapperFunc(exports,require,module,abspath,path.dirname(abspath));
return module.exports;
}

const math =loadModule('./math.js');
console.log(math.sum(10,20,30));
