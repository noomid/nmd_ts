System.register(['../utils/Dom'], function(exports_1) {
    'use strict';
    var Dom_1;
    var Component;
    return {
        setters:[
            function (Dom_1_1) {
                Dom_1 = Dom_1_1;
            }],
        execute: function() {
            Component = (function () {
                function Component() {
                    console.log(this);
                }
                Component.prototype.render = function () {
                    // let test = document.querySelector('.test');
                    // test.innerHTML = 'asdf';
                    // console.log(this.template_vars);
                    var matches = this.template.match(/{{([a-z]*)}}/);
                    console.log(matches);
                    // for(let i = 1; i< matches.length; i+=1){
                    //   this.template = this.template.replace(matches[i], this[matches[i]]);
                    // }
                    Dom_1.Dom.el(this.selector).innerHTML = this.template;
                };
                return Component;
            })();
            exports_1("Component", Component);
        }
    }
});
//# sourceMappingURL=Component.js.map