# ng2-minimal
A minimal Angular 2 seed project. This is the simplest possible setup for getting started with Angular 2 using the SystemJs module loader. Its ideal for use as a learning playground for quickly trying out an idea or building a component.

The way that it works is that there are two bundles:

 - the dependencies bundle that only gets build once
 -  the application bundle, that gets rebuilt everytime you edit a Typescript file

This makes for a good first experience in Angular 2: The application starts up fast, and there are only a few network requests.
But still iterative development is available: just hit Ctrl+S and your changes are applied.

The project uses a very simple build based on npm-run-all and nodemon. This build is both powerful and simple, and makes for a good starting point
for a beginner, as it has a lot of features without being overwhelming.

Clone it and start using Angular 2 in seconds!

# Installation 

No global dependencies are needed. After cloning the repo, run the following commands:

    npm install
    npm start 
        
Then open a browser at the following url:

    http://localhost:8080
        
And there you have it, a minimal Angular 2 App up and running. You're all set!

# Scope
This repo is meant a starter for learning purposes only. This repo aims at being at the sweet spot for a beginner for an introduction to the Angular 2 ecosystem - a simple example that still already uses the Typescript compiler, SystemJs and the SystemJs builder. 

For bootstrapping an app, please use the official [angular-cli](https://cli.angular.io/). If the CLI is still in early stages, these are the most popular starters kits:

- Based on SystemJs, SystemJs-Builder and Gulp - [ng2-seed](https://github.com/mgechev/angular2-seed) 
- Based on Webpack - [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)

# Credit

This repo is based on the RC0 [demo](https://github.com/robwormald/new-world-test) made by [Rob Wormald](https://twitter.com/robwormald). Go check it out for other examples  (like Webpack 2).

This repo was originally based on the [ng2-play seed repo](https://github.com/pkozlowski-opensource/ng2-play), check it out.

