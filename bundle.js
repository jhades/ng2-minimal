var SystemBuilder = require('systemjs-builder');
var builder = new SystemBuilder();

builder.loadConfig('./system.config.js')
  .then(function(){
	  return builder.buildStatic('app', 'dist/libs-bundle.js', {minify: false});
  })
  .then(function(){
	  console.log('bundle built successfully!');
  });
