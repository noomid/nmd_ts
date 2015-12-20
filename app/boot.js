System.register(['./core/Core', './core/decorators/bind'], function(exports_1) {
    'use strict';
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var Core_1, bind_1;
    var Menu, menu;
    return {
        setters:[
            function (Core_1_1) {
                Core_1 = Core_1_1;
            },
            function (bind_1_1) {
                bind_1 = bind_1_1;
            }],
        execute: function() {
            Menu = (function (_super) {
                __extends(Menu, _super);
                function Menu() {
                    _super.apply(this, arguments);
                }
                __decorate([
                    bind_1.bind, 
                    __metadata('design:type', String)
                ], Menu.prototype, "test", void 0);
                return Menu;
            })(Core_1.Component);
            menu = new Menu();
            // let test = new Component();
            menu.template = "<h1>Its menu: {{test}}</h1>";
            menu.selector = 'nmd-menu';
            menu.test = 'test value';
            setInterval(function () {
                // menu.test = Date.now().toString();
                // menu.render();
            }, 1000);
        }
    }
});
//# sourceMappingURL=boot.js.map