function loadModule(path) {
    const fs = require("fs");
    const fileContent = fs.readFileSync(path, "utf-8");
  
    const exports = {};
    const module = { exports };
    const __filename = path;
    const __dirname = require("path").dirname(path);
  
    // Define and immediately invoke the wrapper function
    return (function(send) {
      eval(fileContent);
     
      return send
       // Execute the module code in the given context
    })({});
  
    return module.exports; // Return the exported value
  }
  
  // Load the module
//   const a = loadModule('./math.js');
//   console.log(a);
  const{sum}=loadModule('./math.js')
  console.log(sum);
    console.log(sum(10,20,30,40));
  