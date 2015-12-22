define(["require", "exports"], function (require, exports) {
    'use strict';
    class Dom {
        static el(selector) {
            return document.querySelector(selector);
        }
    }
    exports.Dom = Dom;
});
//# sourceMappingURL=Dom.js.map