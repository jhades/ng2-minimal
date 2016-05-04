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

Its better to install Typescript globally, if not already installed:

    npm install -g typescript

After cloning the repo, run the following commands:

    npm install
    npm start 
        
Then open a browser at the following url:

    http://localhost:8080
        
And there you have it, a minimal Angular 2 App up and running. You're all set!
    
# Credit

This repo is based on the [ng2-play seed repo](https://github.com/pkozlowski-opensource/ng2-play), check it out.

