# ng2-minimal
An absolutely minimal Angular 2 seed project with the following features:

- source maps support out of the box
- includes the official Angular 2 Typescript typings
- works well on Windows boxes
- based on npm scripts only

# Purposes

This repo is meant to be the simplest possible way to getting started with Angular 2. It's ideal for quickly putting together a demo, or for trying out a new concept.

# Technologies used

Besides Angular 2 and npm, this setup uses:

- Typescript
- SystemJs for module loading 

# Installation 

Is it advisable to install Typescript globally, if not already installed:

    npm install -g typescript

After cloning the repo, run the following commands:

    npm install
    npm start 
    
### Installation Problems?

npm installations sometimes fail, specially if behind corporate proxies (but it's getting better). This is a general npm problem, not related to this repo specifically. 

Its advisable in general to upgrade your npm to version 3, specially if running on a windows box. This will avoid any problems with long file paths. If you are having generic npm installation problems, try the following after the installation fails:

    npm cache clean
    npm install
    
This will resume the installation from the point it failed (might be needed several times). After the installation is successful, run npm start and open a browser at the following url:

    http://localhost:8080
    
And there you have it, a minimal Angular 2 App up and running. You're all set!

# Issues

If you find some problem with the setup, please open an [issue](https://github.com/jhades/ng2-minimal/issues) and i'll follow up. Can you also include the full error message and your npm and node version?

# Unit Testing
Check the official unit testing seed repo - https://github.com/juliemr/ng2-test-seed and the corresponding talk [Testing strategies with Angular 2](https://www.youtube.com/watch?v=C0F2E-PRm44).


