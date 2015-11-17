import {Component, bootstrap} from 'angular2/angular2';


@Component({
    selector: 'app',
    template: `<div>
                    <input placeholder="Type here"  #input>
                    <button (click)="onOk()">Push OK</button>

                </div>`
})
export class App {


    onOk() {
        alert('Hello World !!');
    }

}


bootstrap(App);