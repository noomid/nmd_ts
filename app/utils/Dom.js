System.register([], function(exports_1) {
    'use strict';
    var Dom;
    return {
        setters:[],
        execute: function() {
            Dom = (function () {
                function Dom() {
                }
                Dom.el = function (selector) {
                    return document.querySelector(selector);
                };
                return Dom;
            })();
            exports_1("Dom", Dom);
        }
    }
});
//# sourceMappingURL=Dom.js.map