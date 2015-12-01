import 'reflect-metadata'

import {Component,View,bootstrap} from  'angular2/angular2'

@Component({
    selector: 'my-app',
    template: `
    <div>
      <h4>Give me some keys!</h4>
      <div><input (input)="onKey($event)"></div>
      <div>{{values}}</div>
    </div>
    `
})
class KeyUpComponent {
    values:string;
    constructor(){
        this.values='1111'
    }
    onKey(event) {
        console.log(this.values)
        this.values += event.target.value + ' | ';
    }
}


bootstrap(KeyUpComponent,[
]);
