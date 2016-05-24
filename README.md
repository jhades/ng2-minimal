# ng2-minimal
A minimal Angular 2 seed project. This is the simplest possible setup for getting started with Angular 2 using the SystemJs module loader.

This repo is meant as a starting point for learning purposes only. It aims at being at the sweet spot for giving the beginner a gentle introduction to parts of the Angular 2 ecosystem - a simple example that still already uses the Typescript compiler, SystemJs and the SystemJs builder.

This build is simple but already has a lot of features and tools without being overwhelming,
 and it allows to get a feel for what the development Ecosystem of the framework looks like right off the bat.

The way that it works is the following:

 - the dependencies bundle is built only once at startup time
 - Once the server is started, the application gets rebuilt everytime you edit a Typescript file
 - The aplication is served in separate HTTP requests for easy debugging and a quick development cycle

This makes for a good first experience in Angular 2: The application starts up fast, and there are only a few network requests because the libraries are bundled.

But still iterative development is available: just hit Ctrl+S and your changes are applied.


Clone it and start using Angular 2 in seconds!

# Installation 

No global dependencies are needed. After cloning the repo, run the following commands:

    npm install
    npm start 
        
Then open a browser at the following url:

    http://localhost:8080
        
And there you have it, a minimal Angular 2 App up and running. You're all set!

# Project Starters

ng2-minimal is not a project starter and is meant for learning purposes only, as a playground.

For bootstrapping an app, please use the official [angular-cli](https://cli.angular.io/). If the CLI is still in early stages, these are the most popular starters kits:

- Based on SystemJs, SystemJs-Builder and Gulp - [ng2-seed](https://github.com/mgechev/angular2-seed) 
- Based on Webpack - [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)

# Credit

This repo is based on the RC0 [demo](https://github.com/robwormald/new-world-test) made by [Rob Wormald](https://twitter.com/robwormald). Go check it out for other examples  (like Webpack 2).

This repo was originally based on the [ng2-play seed repo](https://github.com/pkozlowski-opensource/ng2-play), check it out.

