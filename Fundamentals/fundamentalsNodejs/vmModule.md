 The vm (virtual machine) module lets you compile and run code within a V8 context — a sandboxed environment.
✅ How Node.js Internally Uses vm:

When you use require('./something.js'), Node.js does something like this under the hood:

    Reads the file from disk

    Wraps the code with the module wrapper:

    (function (exports, require, module, __filename, __dirname) {
      // contents of your file
    });

    Uses vm.runInThisContext() to compile and execute that wrapped function as code.

🧪 Practical Simulation of How Node Uses vm:
📁 math.js

function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
module.exports = { sum };

🧠 Custom loader using vm

const fs = require('fs');
const vm = require('vm');
const path = require('path');

function loadModule(filePath) {
  const absPath = path.resolve(filePath);
  const code = fs.readFileSync(absPath, 'utf-8');

  // Simulate Node's wrapper
  const wrappedCode = `(function(exports, require, module, __filename, __dirname) {
    ${code}
  })`;

  const script = new vm.Script(wrappedCode);
  const exports = {};
  const module = { exports };

  const context = vm.createContext({
    console,
    require,
    exports,
    module,
    __filename: absPath,
    __dirname: path.dirname(absPath)
  });

  // Run and get the wrapper function
  const wrapperFunc = script.runInContext(context);
  wrapperFunc(exports, require, module, absPath, path.dirname(absPath));

  return module.exports;
}

const math = loadModule('./math.js');
console.log(math.sum(10, 20, 30)); // 60

🚀 Why vm over eval?

    eval() runs in the current scope and has full access to everything (unsafe).

    vm can create separate contexts (sandboxes), useful for:

        Running user-submitted code

        Running isolated plugins

        Building REPLs

        Executing modules safely