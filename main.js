(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n .sub\r\n{\r\n    /*padding-top: 10px;*/\r\n    background-color:whitesmoke;\r\n    width: 99%;\r\n    height: 90%;\r\n   min-width: 98%;\r\n   min-height: 90%;\r\n   position: fixed;\r\n}\r\n\r\n.main{\r\n\t\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tmin-width: 100%;\r\n\tmin-height: 100%;\r\n}\r\n\r\n.rectangle\r\n\t{\r\n\t\tposition:absolute;\r\n\t\ttop: 8%;\r\n\t\tleft: 15%;\r\n\t\tz-index: 1;\r\n\t}\r\n\r\n.exit\r\n\t{\r\n\t\tposition:absolute;\r\n\t\ttop: 35%;\r\n\t\tleft: 40%;\r\n\t\tz-index: 2;\r\n\t\tcursor: move;\r\n    }\r\n\r\n.gwc\r\n\t{\r\n\t\tposition:absolute;\r\n\t\ttop: 40%;\r\n\t\tleft: 70%;\r\n\t\tz-index: 3;\r\n\t\tcursor: move;\r\n    }\r\n\r\n.rwc\r\n\t{\r\n\t\tposition:absolute;\r\n\t\ttop: 40%;\r\n\t\tleft: 17%;\r\n\t\tz-index: 4;\r\n\t\tcursor: move;\r\n    }\r\n\r\n.connector\r\n\t{\r\n\t\tposition:absolute;\r\n\t\ttop: 8%;\r\n\t\tleft: 46%;\r\n\t\tz-index: 5;\r\n    }\r\n\r\n.smallrectangleleft\r\n\t{\r\n\t\tposition:absolute;\r\n\t\ttop: 87%;\r\n\t\tleft:19%;\r\n\t\tz-index: 6;\r\n    }\r\n\r\n.smallrectangleright\r\n\t{\r\n\t\tposition:absolute;\r\n\t\ttop: 87%;\r\n\t\tleft: 73%;\r\n\t\tz-index: 7;\r\n    }\r\n\r\n.tools\r\n    {\r\n        padding-left: 40%;\r\n        /*padding-top: 1px;*/\r\n\t}\r\n\t"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"main\">\n\n\n\n \n    <img src=\"assets/images/Header.png\" width=\"99.9%\" height=\"10%\" />\n    <div class=\"sub\">\n    <img src=\"assets/images/Tools.png\" width=\"20%\" height=\"8%\" class=\"tools\" />\n \n\n\n \n    <img #rectImg src=\"assets/images/Rectangle.png\" width=\"70%\" height=\"85%\" class=\"rectangle\" (dragover)=\"allowDrop($event)\" (drop)=\"dropHandler($event)\"/>\n    <img #exitImg src=\"assets/images/Exit.png\" width=\"20%\" height=\"20%\" class=\"exit\" id=\"exitImg\" (touchmove)=\"touchHandler($event)\"  (dragstart)=\"dragHandler($event)\" draggable=\"true\" />\n    <img #gwcImg src=\"assets/images/GWC.png\" width=\"13%\" height=\"20%\" class=\"gwc\" id=\"gwcImg\" (dragstart)=\"dragHandler($event)\" draggable=\"true\"/>\n\n    <img #rwcImg src=\"assets/images/RWC.png\" width=\"13%\" id=\"rwcImg\" height=\"20%\" class=\"rwc\" (dragstart)=\"dragHandler($event)\" draggable=\"true\"/>\n    <img src=\"assets/images/SRectangle.png\" width=\"8%\" height=\"4%\" class=\"smallrectangleleft\" />\n    <img src=\"assets/images/SRectangle.png\" width=\"8%\" height=\"4%\" class=\"smallrectangleright\" />\n    <img src=\"assets/images/Group.png\" width=\"5%\" height=\"5%\" class=\"connector\" />\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myngapp';
        this.showFiller = false;
        this.startLine = false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.allowDrop = function (ev) {
        ev.preventDefault();
    };
    AppComponent.prototype.touchHandler = function (te) {
        te.preventDefault();
        var exitCircuit = this.exitImg.nativeElement;
        exitCircuit.style.left = te.touches[te.touches.length - 1].clientX - exitCircuit.offsetWidth / 2 + "px";
        exitCircuit.style.top = te.touches[te.touches.length - 1].clientY - exitCircuit.offsetHeight / 2 + "px";
        window.alert("touch move");
    };
    AppComponent.prototype.dropHandler = function (ev) {
        ev.preventDefault();
        console.trace("drop");
        var data = ev.dataTransfer.getData("text");
        if (data == "exitImg") {
            var exitCircuit = this.exitImg.nativeElement;
            exitCircuit.style.left = ev.pageX - exitCircuit.offsetWidth / 2 + "px";
            exitCircuit.style.top = ev.pageY - exitCircuit.offsetHeight / 2 + "px";
        }
        else if (data == "gwcImg") {
            var gwcCircuit = this.gwcImg.nativeElement;
            gwcCircuit.style.left = ev.pageX - gwcCircuit.offsetWidth / 2 + "px";
            gwcCircuit.style.top = ev.pageY - gwcCircuit.offsetHeight / 2 + "px";
        }
        else if (data == "rwcImg") {
            var rwcCircuit = this.rwcImg.nativeElement;
            rwcCircuit.style.left = ev.pageX - rwcCircuit.offsetWidth / 2 + "px";
            rwcCircuit.style.top = ev.pageY - rwcCircuit.offsetHeight / 2 + "px";
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        /*let canvas = this.myCanvas.nativeElement;
        var dpr = window.devicePixelRatio || 1;
        // Get the size of the canvas in CSS pixels.
        var rect = canvas.getBoundingClientRect();
        // Give the canvas pixel dimensions of their CSS
        // size * the device pixel ratio.
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        
        this.ctx = canvas.getContext("2d");
        var img1 = new Image();
        img1.src ="assets/images/Exit.png";
        var imgData=this.ctx.drawImage(img1,100,100,500,100);*/
    };
    AppComponent.prototype.dragHandler = function (de) {
        console.trace("drag");
        de.dataTransfer.setData("text", de.target.id);
    };
    AppComponent.prototype.capturePoint = function (me) {
        if (this.selectedDrawingObject == "line") {
            this.ctx.lineWidth = 5;
            if (this.startLine) {
                this.ctx.lineTo(me.offsetX, me.offsetY);
                this.ctx.stroke();
            }
            else {
                this.ctx.moveTo(me.offsetX, me.offsetY);
                this.startLine = !this.startLine;
            }
        }
        else {
            this.ctx.closePath();
        }
    };
    AppComponent.prototype.shapeSelectClick = function (value) {
        console.trace(value);
        this.selectedDrawingObject = value;
        if (this.selectedDrawingObject == "line") {
            this.ctx.beginPath();
        }
    };
    AppComponent.prototype.clearRect = function (sx, sy, ex, ey) {
        this.ctx.clearRect(sx, sy, ex, ey);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("exitImg"),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "exitImg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("gwcImg"),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "gwcImg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("rwcImg"),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "rwcImg", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pkguntur\angular\cdrawapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map