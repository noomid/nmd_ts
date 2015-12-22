'use strict';
// import Component = require('./core/Component');
// import {Component} from './core/Core';
var Component = require('./core/Component');
let bind = require('./core/decorators/bind');


// import {Component} from './core/Core';
// import {bind} from './core/decorators/bind';
// import * as jade from './node_modules/jade/jade';
// let jade = require('jade');
// console.log(jade);
// let Component = require('./core/Component.js');
class Menu extends Component{
  @bind public test: string;
  @bind public new_test: string;

  protected selector: string = 'nmd-menu';
  protected template: string = `
  Hello, <%= test %>
  <% _(5).times(function(i){ %>
    <%= i %><br/>
  <% }); %>
  `;
}


let menu = new Menu();
menu.test = 'asdfasdf';
