process.binding('natives').NativeModule = 'module.exports = require("native_module");';
module.exports = require('NativeModule');