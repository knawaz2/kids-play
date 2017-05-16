webpackJsonp([1,4],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlockService = (function () {
    function BlockService(http) {
        this.http = http;
    }
    BlockService.prototype.loadBlocks = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var port = process.env.PORT;
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://kids-play.herokuapp.com/getblocks', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BlockService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], BlockService);
    return BlockService;
    var _a;
}());
//# sourceMappingURL=C:/Program Files (x86)/VertrigoServ/www/angular_tests/kidsplay/angular-src/src/block.service.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(233)))

/***/ }),

/***/ 386:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 386;


/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(506);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Program Files (x86)/VertrigoServ/www/angular_tests/kidsplay/angular-src/src/main.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__(671),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Program Files (x86)/VertrigoServ/www/angular_tests/kidsplay/angular-src/src/about.component.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(672),
            styles: [__webpack_require__(666)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Program Files (x86)/VertrigoServ/www/angular_tests/kidsplay/angular-src/src/app.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blocks_blocks_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contentarea_contentarea_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__block_service__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__blocks_blocks_component__["a" /* BlocksComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__contentarea_contentarea_component__["a" /* ContentareaComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: 'about',
                        component: __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */]
                    },
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_8__contentarea_contentarea_component__["a" /* ContentareaComponent */]
                    }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__block_service__["a" /* BlockService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Program Files (x86)/VertrigoServ/www/angular_tests/kidsplay/angular-src/src/app.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlocksComponent = (function () {
    function BlocksComponent() {
    }
    BlocksComponent.prototype.ngOnInit = function () {
    };
    BlocksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-blocks',
            template: __webpack_require__(673),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [])
    ], BlocksComponent);
    return BlocksComponent;
}());
//# sourceMappingURL=C:/Program Files (x86)/VertrigoServ/www/angular_tests/kidsplay/angular-src/src/blocks.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(325);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentareaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var babbler = __webpack_require__(512);
var ContentareaComponent = (function () {
    function ContentareaComponent(blockService, router) {
        this.blockService = blockService;
        this.router = router;
        this.blockObjects = [];
        this.state = 'inactive';
    }
    ContentareaComponent.prototype.ngOnInit = function () {
        this.loadBlocksFromService();
    };
    ContentareaComponent.prototype.loadBlocksFromService = function () {
        var _this = this;
        console.log("it is in the load blocks from service");
        this.blockService.loadBlocks().subscribe(function (data) {
            console.log("-------------------------------------------------");
            console.log("data returned from block", data);
            var carouselstatus = 'active';
            data.forEach(function (blockData) {
                console.log("block got is ", blockData);
                blockData.carouselstatus = carouselstatus;
                _this.blockObjects.push(blockData);
                console.log("-------------------------------------------------");
                console.log("data returned from block", _this.blockObjects);
                carouselstatus = '';
            });
            if (_this.blockObjects.length > 0) {
                _this.activeBlock = _this.blockObjects[0];
            }
        });
    };
    ContentareaComponent.prototype.showRelatedBlocks = function (block) {
        if (block.associatedTo.length > 0) {
            this.activeBlock = block;
            this.state = 'inactive';
        }
    };
    ContentareaComponent.prototype.makespeech = function (block) {
        var _this = this;
        //state = 'active';
        this.activeId = block._id;
        this.state = 'active';
        console.log("clicked on make speech function", block);
        babbler.speak(block.objname).then(function (e) {
            _this.state = 'inactive';
            console.log('speak text finished', e);
        });
        console.log('speek is passed');
    };
    ContentareaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            template: __webpack_require__(674),
            styles: [__webpack_require__(668)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* trigger */])('focusPanel', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({
                        transform: 'scale(1)',
                        backgroundColor: '#fff'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({
                        transform: 'scale(1.2)',
                        backgroundColor: '#ddaaaa'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('200ms ease-in')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('200ms ease-in'))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* trigger */])('movePanel', [])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__block_service__["a" /* BlockService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__block_service__["a" /* BlockService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ContentareaComponent);
    return ContentareaComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Program Files (x86)/VertrigoServ/www/angular_tests/kidsplay/angular-src/src/contentarea.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(675),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Program Files (x86)/VertrigoServ/www/angular_tests/kidsplay/angular-src/src/footer.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__(676),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=C:/Program Files (x86)/VertrigoServ/www/angular_tests/kidsplay/angular-src/src/header.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Program Files (x86)/VertrigoServ/www/angular_tests/kidsplay/angular-src/src/environment.js.map

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "<p>\n  Contents to be added\n</p>\n"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-header></app-header>\n\n\n\n  <router-outlet> </router-outlet>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "<p>\n  blocks works!\n</p>\n"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 style=\"margin-top:50px;\"> Kids learn while they play </h1>\n      <div class=\"main\" *ngIf=\"blockObjects.length > 0\">\n\n\n\n\n\n        <div class=\"row\" *ngIf=\"activeBlock.associatedTo.length > 0\">\n          <div *ngFor=\"let associatedobj of activeBlock.associatedTo\" >\n            <div class=\"col-sm-6\">\n              <h3>{{associatedobj.objname}}</h3>\n                <div *ngIf=\"activeId==associatedobj._id\" >\n                  <button value=\"associatedobj.objname\" (click)=\"makespeech(associatedobj)\" [@focusPanel] = 'state' [@movePanel]='active' >\n                    <img height=\"auto\" width=\"100%\" src=\"{{associatedobj.objImage}}\" />\n                    </button>\n                </div>\n                <div *ngIf=\"activeId!==associatedobj._id\" >\n                  <button value=\"associatedobj.objname\" (click)=\"makespeech(associatedobj)\" [@focusPanel] = 'inactive'  >\n                    <img height=\"auto\" width=\"100%\" src=\"{{associatedobj.objImage}}\" />\n                    </button>\n                </div>\n            </div>\n          </div>\n        </div>\n\n\n        <!-- div id=\"myCarousel\"  class=\"carousel\" data-ride=\"carousel\">\n          <div class=\"carousel-inner container-fluid\">\n              <div  *ngFor=\"let block of blockObjects; let i=index\" >\n                <div class=\"item col-md-2\">\n                    <div class=\"item letters\" (click)=\"showRelatedBlocks(block)\"> {{block.name}} </div>\n                </div>\n              </div>\n          </div>\n        </div -->\n\n        <!-- div id=\"myCarousel\"  class=\"carousel\" data-ride=\"carousel\">\n          <ul class=\"slides\">\n                <li *ngFor=\"let block of blockObjects; let i=index\">\n                    <h2> {{block.name}} </h2>\n\n                </li>\n          </ul>\n        </div -->\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n\n                <div id=\"imageCarousel\" class=\"carousel slide\" data-interval=\"3500\" data-ride=\"carousel\" data-pause=\"hover\" data-wrap=\"true\">\n\n                    <div class=\"carousel-inner\">\n\n\n                      <!-- div  *ngFor=\"let block of blockObjects; let i=index\" -->\n                          <div *ngFor=\"let block of blockObjects; let i=index\" class=\"item {{block.carouselstatus}}\">\n                            <div class=\"row\">\n                              <div class=\"col-xs-12\">\n                                <div class=\"item letters\" (click)=\"showRelatedBlocks(block)\"> {{block.name}} </div>\n                              </div>\n                            </div>\n                          </div>\n                      <!-- /div -->\n\n                        <!-- div class=\"item active\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-4\">\n                                    this is first\n                                </div>\n                                <div class=\"col-xs-4\">\n                                    this is first\n                                </div>\n                                <div class=\"col-xs-4\">\n                                    this is first\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"item\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-4\">\n                                    this is first10\n                                </div>\n                                <div class=\"col-xs-4\">\n                                    this is first11\n                                </div>\n                                <div class=\"col-xs-4\">\n                                    this is first12\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"item\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-4\">\n                                    this is first20\n                                </div>\n                                <div class=\"col-xs-4\">\n                                    this is first21\n                                </div>\n                                <div class=\"col-xs-4\">\n                                    this is first22\n                                </div>\n                            </div>\n                        </div -->\n\n\n\n\n                    </div>\n\n                    <a href=\"#imageCarousel\" class=\"carousel-control left\" data-slide=\"prev\"> <span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n                    <a href=\"#imageCarousel\" class=\"carousel-control right\" data-slide=\"next\"> <span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n                </div>\n\n\n            </div>\n          </div>\n\n      </div>\n    </div>\n\n\n    <!-- section class=\"main\">\n      <div class=\"content\">\n\n\n        <button class=\"top-button\" (click)=\"loadBlocksFromService()\"><label> Reset Button </label> </button>\n\n          <div class=\"main\" *ngIf=\"blockObjects.length > 0\">\n            <div class=\"block-list\">\n              <div *ngFor=\"let block of blockObjects\" >\n\n                <button class=\"\" (click)=\"showRelatedBlocks(block)\">\n                  <label>{{block.name}} </label>\n                </button>\n              </div>\n            </div>\n\n            < div class=\"row\" *ngIf=\"activeBlock.associatedTo.length > 0\">\n              <div *ngFor=\"let associatedobj of activeBlock.associatedTo\" >\n                  <button value=\"associatedobj.objname\" (click)=\"makespeech(associatedobj)\" >\n                    <img src=\"{{associatedobj.objImage}}\" />\n                    <label>{{associatedobj.objname}} </label>\n                  </button>\n              </div>\n            </div>\n\n          </div>\n\n      </div>\n    </section -->\n"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\" id=\"navbar-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button  type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <!-- a href=\"\" class=\"navbar-brand\"><img src=\"../assets/logo.png\" alt=\"logo\" /></a -->\r\n        </div><!-- Navbar Header -->\n\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n          <a class=\"btn navbar-right navbar-btn navbar-warning\" href=\"http://being-yourself.com\"> Visit Blog</a>\n          <ul class=\"nav navbar-nav\">\n            <li> <a routerLink=\"/\"> Home </a></li>\n            <!-- li> <a href=\"#hitbuttons\"> Buttons section </a></li -->\n            <li> <a routerLink=\"/about\"> About </a></li>\n            <li> <a routerLink=\"/contact\"> Contact </a></li>\n          </ul>\n        </div>\n\n\n\n    </div>\n\n</nav><!-- End navbar -->\n"

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(387);


/***/ })

},[695]);
//# sourceMappingURL=main.bundle.map