
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";

@Component({
    selector: 'hello-world',
    template: `<input placeholder="Type hello world !" (keyup)="hello(input.value)" #input>{{message}}`
})
export class HelloWorld {

    private message = ""; 

    hello(value) {
        console.log("Hello World !");
        this.message = value;
    }

}

bootstrap(HelloWorld, []);