'use strict';
import {Dom} from '../utils/Dom';

export class Component{
  public template: string;
  public selector: string;
  protected template_vars: Array<string>;

  public render(){
    // let test = document.querySelector('.test');
    // test.innerHTML = 'asdf';
    // console.log(this.template_vars);

    let matches = this.template.match(/{{([a-z]*)}}/);
    console.log(matches)
    // for(let i = 1; i< matches.length; i+=1){
    //   this.template = this.template.replace(matches[i], this[matches[i]]);
    // }
    Dom.el(this.selector).innerHTML = this.template;
  }

  constructor(){
    console.log(this);
  }
}
