var SystemBuilder = require('systemjs-builder');
var builder = new SystemBuilder();

builder.loadConfig('./system.config.js')
  .then(function(){
	  return builder.bundle(
          'app - dist/libs-bundle.js', // build the app only, exclude everything already included in dependencies
          'dist/app-bundle.js');
  })
  .then(function(){
	  console.log('Application bundles built successfully!');
  });
