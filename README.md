# ng2-minimal
A minimal Angular 2 seed project with the following features:

- source maps support out of the box
- uses the official Angular 2 Typescript typings (bundled in npm)
- works well on Windows boxes
- based on npm scripts only

# Purposes

This repo is meant to be the simplest possible way to get started with Angular 2. It's ideal for quickly putting together a demo, or for trying out a new concept.

# Technologies used

Besides Angular 2 and npm, this setup uses:

- Typescript
- SystemJs for module loading 

# Installation 

Its advisable to install Typescript globally, if not already installed:

    npm install -g typescript

After cloning the repo, run the following commands:

    npm install
    npm start 
    
After the installation is successful, run npm start and open a browser at the following url:

    http://localhost:8080
        
And there you have it, a minimal Angular 2 App up and running. You're all set!
    
### Installation Problems?

npm installations sometimes fail, specially if behind corporate proxies (but it's getting better). This is a general npm problem, not related to this repo specifically. 

Its advisable in general to upgrade your npm to version 3, specially if running on a windows box. This will avoid any problems with long file paths. If you are having generic npm installation problems, try the following after the installation fails:

    npm cache clean
    npm install
    
This will resume the installation from the point it failed (might be needed several times). 

# Issues

If you find some problem with the setup, please open an [issue](https://github.com/jhades/ng2-minimal/issues) and i'll follow up. Can you also include the full error message and your npm and node version?

# Unit Testing
Check the official unit testing seed repo - https://github.com/juliemr/ng2-test-seed and the corresponding talk [Testing strategies with Angular 2](https://www.youtube.com/watch?v=C0F2E-PRm44).

# Typings

There are no legacy reference typing imports in this project, this uses the typings bundled in npm implicitly. For this its important to upgrade to Typescript 1.6, so that the new Typescript module resolution mechanism works, see this [comment](https://github.com/angular/angular/issues/5248#issuecomment-156886060) for more details.

# Credit

This repo is based on the [ng2-play seed repo](https://github.com/pkozlowski-opensource/ng2-play), check it out.

