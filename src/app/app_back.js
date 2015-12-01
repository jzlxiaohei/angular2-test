//import 'reflect-metadata'
//import {Component,View,bootstrap,NgFor,Input} from 'angular2/angular2'
//var HEROES = [
//    { "id": 11, "name": "Mr. Nice" },
//    { "id": 12, "name": "Narco" },
//    { "id": 13, "name": "Bombasto" },
//    { "id": 14, "name": "Celeritas" },
//    { "id": 15, "name": "Magneta" },
//    { "id": 16, "name": "RubberMan" },
//    { "id": 17, "name": "Dynama" },
//    { "id": 18, "name": "Dr IQ" },
//    { "id": 19, "name": "Magma" },
//    { "id": 20, "name": "Tornado" }
//];
//
//@Component({
//    //directives: [ NgFor],
//    selector:'my-app'
//})
//@View({
//    //directives: [ NgFor],
//    //template:`<ul (click)="onClick($event)">
//    //    {{name}}
//    //    <li *ng-for="#hero of heroes">
//    //    <span class="badge">{{hero.id}}</span> {{hero.name}}
//    //    </li>
//    //</ul>`
//    template:`<div>{{value}}</div>
//        <button (click)="increase()">Increase</button>
//        `
//})
//class AppComponent{
//
//    value:number;
//
//    constructor(){
//        this.value=1;
//    }
//
//    increase(event){
//        this.value++;
//    }
//}
//
//bootstrap(AppComponent);