
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'hello-world',
    template: `<input placeholder="Type Hello World!" (keyup)="hello(input.value)" #input>
                {{message}}`
})
export class HelloWorld {

    message = "";

    hello(value) {
        this.message = value;
    }

}

bootstrap(HelloWorld, []);