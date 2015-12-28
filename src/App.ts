import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'app',
    template: `<div>
                    <input placeholder="Type Hello World!"  #input>
                    <button (click)="onOk()">Push OK</button>
                    <div>{{message}}</div>
                </div>`
})
export class App {

    message = "";

    onOk() {
        this.message = "Hello World!";
    }

}


bootstrap(App);