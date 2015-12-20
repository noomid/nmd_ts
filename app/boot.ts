'use strict';

import {Component} from './core/Core';
import {bind} from './core/decorators/bind';

class Menu extends Component{
  @bind
  public test: string;
  // constructor(){
  //   super(constructor);
  // }
}

let menu = new Menu();
// let test = new Component();
menu.template = `<h1>Its menu: {{test}}</h1>`;
menu.selector = 'nmd-menu';
menu.test = 'test value';
setInterval(function(){
  // menu.test = Date.now().toString();
  // menu.render();
}, 1000);
