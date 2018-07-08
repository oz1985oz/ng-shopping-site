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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = "header {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tbackground-color: #eee;\r\n\tmargin: 0;\r\n\tpadding: 1rem 0;\r\n}\r\n\r\nheader h1 {\r\n\tmargin: 1rem;\t\r\n}\r\n\r\n.hideShow {\r\n\tdisplay: none !important;\r\n}\r\n\r\n#cart {\r\n\twidth: 4rem;\r\n\tbackground-image: url('https://oz1985oz.github.io/ng-shopping-site/assets/images/cart.png');\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: contain;\r\n\tpadding: 1rem;\r\n\tcursor: pointer;\r\n\t/*background-color: white;*/\r\n}\r\n\r\n#cartList {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n\t-webkit-animation: slow 1s;\r\n\t        animation: slow 1s;\r\n}\r\n\r\n.close {\r\n\tcursor: pointer;\r\n}\r\n\r\ntable {\r\n    border: 1px solid #333;\r\n    border-radius: 1rem;\r\n}\r\n\r\ntr:nth-child(even) {\r\n\tbackground-color: #ccc;\r\n}\r\n\r\ntr:last-child {\r\n    font-weight: bold;\r\n}\r\n\r\ntable tr:last-child td:first-child {\r\n    border-bottom-left-radius: 1rem;\r\n}\r\n\r\ntable tr:last-child td:last-child {\r\n    border-bottom-right-radius: 1rem;\r\n}\r\n\r\n.fontTh {\r\n\tfont-weight: normal;\r\n}\r\n\r\n#round {\r\n\t/*background-image: url('assets/images/circle.png');*/\r\n\t/*background-repeat: no-repeat;*/\r\n\tbackground-color: purple;\r\n\tbackground-size: contain;\r\n\tborder-radius: 50%;\r\n\tcolor: #eee;\r\n\tdisplay:block;\r\n\twidth: 1.2rem;\r\n\ttext-align: center;\r\n}\r\n\r\n@-webkit-keyframes  slow {\r\n\tfrom {\r\n\t\topacity: 0;\r\n\t\tmargin-top: -5rem;\r\n\t\tmargin-right: -15rem;\r\n\t\t-webkit-transform: scale(.6);\r\n\t\t        transform: scale(.6);\r\n\t}\r\n\tto {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n@keyframes  slow {\r\n\tfrom {\r\n\t\topacity: 0;\r\n\t\tmargin-top: -5rem;\r\n\t\tmargin-right: -15rem;\r\n\t\t-webkit-transform: scale(.6);\r\n\t\t        transform: scale(.6);\r\n\t}\r\n\tto {\r\n\t\topacity: 1;\r\n\t}\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>Shop With Us</h1>\n  <!-- <img src=\"assets/images/cart.png\" alt=\"cart\"> -->\n  <div id=\"cart\" (click)=\"showAndHide()\">\n    <span id=\"round\">{{count}}</span>\n  </div>\n</header>\n\n<div id=\"cartList\" class=\"hideShow\">\n    <table>\n      <tr>\n        <th>Name</th>\n        <th>Quantity</th>\n        <th>Total Price</th>\n      </tr>\n      <tr *ngFor = \"let cartProduct of cartList\">\n        <td class=\"fontTd\">{{cartProduct.name}}</td>\n        <td class=\"fontTd\">{{cartProduct.quantity}}</td>\n      <td class=\"fontTd\">{{cartProduct.quantity * cartProduct.price}}</td>\n      </tr>\n      <tr>\n        <td>Total Amount</td>\n        <td>{{count}}</td>\n        <td>{{sum}}</td>\n      </tr>\n    </table>\n  <span class=\"close\" (click)=\"showAndHide()\">✖</span>\n</div>\n\n<app-product-list\n    [products]=\"productList\"\n    (productListMessenger)=\"cart($event)\"\n></app-product-list>\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.count = 0;
        this.sum = 0;
        this.cartList = [];
        this.productList = [
            { id: 1, name: 'Basketball', image: 'assets/images/basketball.png', price: 45, quantity: 0 },
            { id: 2, name: 'Playstation 4', image: 'assets/images/playstation 4.png', price: 1800, quantity: 0 },
            { id: 3, name: 'Xbox One', image: 'assets/images/xbox.png', price: 1700, quantity: 0 },
            { id: 4, name: 'Laptop', image: 'assets/images/laptop.png', price: 1500, quantity: 0 },
            { id: 5, name: 'Wallet', image: 'assets/images/wallet.png', price: 240, quantity: 0 },
            { id: 6, name: 'Oneplus 5t', image: 'assets/images/oneplus.png', price: 1600, quantity: 0 }
        ];
    }
    AppComponent.prototype.cart = function (index) {
        if (!this.cartList.includes(this.productList[index])) {
            this.cartList.push(this.productList[index]);
            console.log(this.cartList);
        }
        this.amount(index);
        return this.count++;
    };
    AppComponent.prototype.amount = function (i) {
        this.sum += this.productList[i].price;
        return this.sum;
    };
    AppComponent.prototype.showAndHide = function () {
        document.querySelector('#cartList').classList.toggle('hideShow');
    };
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
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product-list/product-list.component */ "./src/app/components/product-list/product-list.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"],
                _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/product-list/product-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: space-between;\r\n}"

/***/ }),

/***/ "./src/app/components/product-list/product-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n\t<app-product\n\t\t*ngFor=\"let product of products; index as i\"\n\t\t[product]=\"product\"\n\t\t[index]=\"i\"\n\t\t(productMessenger)=\"counter($event)\"\n\t></app-product>\n</main>"

/***/ }),

/***/ "./src/app/components/product-list/product-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
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

var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
        this.count = 0;
        this.productListMessenger = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProductListComponent.prototype.counter = function (index) {
        // console.log(index);
        // this.count += index/index;
        this.productListMessenger.emit(index);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProductListComponent.prototype, "products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProductListComponent.prototype, "productListMessenger", void 0);
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/components/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/components/product-list/product-list.component.css")]
        })
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/components/product/product.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/product/product.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\r\n\tborder: 1px solid #333;\r\n\tborder-radius: 1rem;\r\n\theight: 400px;\r\n\tmargin: 1rem;\r\n\tposition: relative;\r\n}\r\n\r\np, h3 {\r\n\tpadding-left: 1rem;\r\n}\r\n\r\n.qnt {\r\n\tposition: absolute;\r\n\tbottom: 1rem;\r\n}\r\n\r\n.price{\r\n\tposition: absolute;\r\n\tbottom: 3rem;\r\n}\r\n\r\nimg {\r\n\tpadding: 1rem;\r\n}"

/***/ }),

/***/ "./src/app/components/product/product.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/product/product.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section (click)=\"counter($event)\">\n\t<h3>{{product.name}}</h3>\n\t<img [src]=\"product.image\" alt=\"\" width=\"200\">\n\t<p class=\"price\">Price: {{product.price}} ILS</p>\n\t<p class=\"qnt\">Quantity: {{product.quantity}}</p>\n</section>\n"

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
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

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.productMessenger = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProductComponent.prototype.counter = function (e) {
        this.product.quantity++;
        console.log(e);
        console.log(this.index);
        this.productMessenger.emit(this.index);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ProductComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProductComponent.prototype, "productMessenger", void 0);
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/components/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/components/product/product.component.css")]
        })
    ], ProductComponent);
    return ProductComponent;
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

module.exports = __webpack_require__(/*! C:\xampp\htdocs\shopping-site-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map