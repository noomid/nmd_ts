'use strict';
// import {Dom} from '../utils/Dom';
var _ = require('underscore');
module.exports = class Component{
  protected template: string;
  protected selector: string;
  protected template_vars: Array<string> = [];

  private render(){
    var vars = {};
    this.template_vars.forEach((variable) => {
      vars[variable] = this[variable];
    })
    console.log(this.template_vars);
    console.log(vars);
    let compiled = _.template(this.template);
    document.querySelector(this.selector).innerHTML = compiled(vars);
  }

  constructor(){

  }
}
