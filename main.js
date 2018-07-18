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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_brands_brands_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/brands/brands.component */ "./src/app/components/brands/brands.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'brands', component: _components_brands_brands_component__WEBPACK_IMPORTED_MODULE_4__["BrandsComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_brands_brands_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/brands/brands.component */ "./src/app/components/brands/brands.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
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
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _components_brands_brands_component__WEBPACK_IMPORTED_MODULE_6__["BrandsComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- PAGE HEADER -->\n<header id=\"page-header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 m-auto text-center\">\n        <h1>About Us</h1>\n        <!-- <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, temporibus?</p> -->\n      </div>\n    </div>\n  </div>\n</header>\n\n<!-- ABOUT SECTION -->\n<section id=\"about\" class=\"py-3\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 my-5\">\n        <h1 class=\"pt-1\">What We Do</h1>\n        <p>We are 100% malaysian owned and operated company. We deliver malaysian products and services across the globe. Tradfield's\n          extensive network of supplier and customer partners in North America and Asia enable our company to deliver an\n          exceptionally high standard of products and after sales service. Our companies established network and long term\n          relationships allows us to continue the commitment to be the number one.</p>\n\n        <h1 class=\"pt-3\">Our Business Area</h1>\n        <p>Tradfield is a leading import and export Company in Malaysia. Our motto has always been timely service, Best quality\n          and optimum cost. We are in touch with our customers through quality, performance, service and assistance. Tradfield\n          bringing the best of value to our customers, we also care as much about our customers. We value the trust and beliefs\n          vested in us by our clients and professional contacts and provide a dedicated service with an honest and direct\n          approach in all our dealings. We have dedicated professional staff for each field to get the best solution for\n          your requirements.</p>\n      </div>\n      <div class=\"col-md-6\">\n        <img src=\"../../../assets/img/about-whatWeDo.jpg\" alt=\"\" class=\"img-fluid rounded-circle d-none d-md-block about-img\">\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-img {\n  margin-top: -50px; }\n\n#page-header {\n  height: 200px;\n  background: url('image9.jpg');\n  background-position: 0 -160px;\n  color: #682a2a;\n  border-bottom: 1px #eee solid;\n  padding-top: 80px;\n  background-repeat: no-repeat;\n  background-size: cover; }\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/brands/brands.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/brands/brands.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-2 col-md-3 col-lg-4 col-xl-4\"></div>\n\n  <div class=\"col-sm-8 col-md-6 col-lg-4 col-xl-4\">\n    <div class=\"card mt-5 mb-5\">\n      <img class=\"card-img-top img-fluid\" src=\"../../../assets/img/CubaLibreCoffee.jpeg\" alt=\"\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Cuba Libre Coffee</h4>\n        <p class=\"card-text\">Our instant coffees are expertly roasted and freeze-dried, locking in the taste and aroma of our top notch beans.</p>\n        <p></p>\n        <a class=\"btn btn-outline-dark\" routerLink=\"/contact\">Read More</a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-2 col-md-3 col-lg-4 col-xl-4\">\n    <!-- <div class=\"card\">\n      <img class=\"card-img-top img-fluid\" src=\"../../../assets/img/CubaLibreCoffee.jpeg\" alt=\"\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Card title</h4>\n        <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n        <p class=\"card-text\">\n          <small class=\"text-muted\">Last updated 3 mins ago</small>\n        </p>\n      </div>\n    </div> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/brands/brands.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/brands/brands.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/brands/brands.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/brands/brands.component.ts ***!
  \*******************************************************/
/*! exports provided: BrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsComponent", function() { return BrandsComponent; });
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

var BrandsComponent = /** @class */ (function () {
    function BrandsComponent() {
    }
    BrandsComponent.prototype.ngOnInit = function () {
    };
    BrandsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brands',
            template: __webpack_require__(/*! ./brands.component.html */ "./src/app/components/brands/brands.component.html"),
            styles: [__webpack_require__(/*! ./brands.component.scss */ "./src/app/components/brands/brands.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BrandsComponent);
    return BrandsComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- PAGE HEADER -->\n<header id=\"page-header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 m-auto text-center\">\n        <h1>Contact Us</h1>\n        <!-- <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, temporibus?</p> -->\n      </div>\n    </div>\n  </div>\n</header>\n\n<!-- CONTACT SECTION -->\n<section id=\"contact\" class=\"py-3\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"card p-4\">\n          <div class=\"card-body\">\n            <h4>Get In Touch</h4>\n            <p>We are here to answer any questions you may have.</p>\n            <h4>Address</h4>\n            <p>A~G~23, Block A Jalan PJS 2B/3, Pusat Perniagaan Metro Square, 46150 Petaling Jaya, Selangor, Malaysia\n            </p>\n            <h4>Email</h4>\n            <p>info@tradfield.com</p>\n            <h4>Phone</h4>\n            <p>+60 3 7772 2725</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"card p-4\">\n          <div class=\"card-body\">\n            <h3 class=\"text-center\">Please submit your questions and enquires.</h3>\n            <hr>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"First Name\">\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\">\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <textarea class=\"form-control\" placeholder=\"Message\"></textarea>\n                </div>\n              </div>\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <input type=\"submit\" value=\"Submit\" routerLink=\"/\" class=\"btn btn-outline-danger btn-block\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#page-header {\n  height: 200px;\n  background: url('image10.png');\n  background-position: 0 -360px;\n  background-attachment: fixed;\n  color: #fff;\n  border-bottom: 1px #eee solid;\n  padding-top: 80px;\n  background-repeat: no-repeat;\n  background-size: cover; }\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FOOTER -->\n<footer id=\"main-footer\" class=\"text-center bg-dark text-light p-4\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <p>Copyright &copy;\n          <span id=\"year\"></span> Tradfield</p>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SHOWCASE SLIDER -->\n<section id=\"showcase\">\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item carousel-image-1 active\">\n        <div class=\"container\">\n          <div class=\"carousel-caption d-none d-sm-block text-left mb-5\">\n            <h1 class=\"display-6 text-light font-weight-bold\">We Import and export your products to</h1>\n            <p class=\"display-3 font-weight-bold\">existing markets.</p>\n            <!-- <a href=\"#\" class=\"btn btn-danger btn-lg\">Sign Up Now</a> -->\n          </div>\n        </div>\n      </div>\n\n      <div class=\"carousel-item carousel-image-2\">\n        <div class=\"container\">\n          <div class=\"carousel-caption d-none d-sm-block text-left mb-5\">\n            <h1 class=\"display-6 text-light font-weight-bold\">We Import and export your products to</h1>\n            <p class=\"display-3 font-weight-bold\">existing markets.</p>\n            <!-- <a href=\"#\" class=\"btn btn-danger btn-lg\">Sign Up Now</a> -->\n          </div>\n        </div>\n      </div>\n\n      <div class=\"carousel-item carousel-image-3\">\n        <div class=\"container\">\n          <div class=\"carousel-caption d-none d-sm-block text-left mb-5\">\n            <h1 class=\"display-6 text-light font-weight-bold\">We Import and export your products to</h1>\n            <p class=\"display-3 font-weight-bold\">existing markets.</p>\n            <!-- <a href=\"#\" class=\"btn btn-danger btn-lg\">Sign Up Now</a> -->\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <a href=\"#myCarousel\" data-slide=\"prev\" class=\"carousel-control-prev\">\n      <span class=\"carousel-control-prev-icon\"></span>\n    </a>\n\n    <a href=\"#myCarousel\" data-slide=\"next\" class=\"carousel-control-next\">\n      <span class=\"carousel-control-next-icon\"></span>\n    </a>\n  </div>\n</section>\n\n<!--HOME ICON SECTION  -->\n<section id=\"home-icons\" class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 mb-4 text-center\">\n        <i class=\"fa fa-phone fa-3x mb-2\"></i>\n        <h3>Questions?\n          <small class=\"text-warning\">Call Us</small>\n        </h3>\n        <p>If you would like to know more about Tradfield and its business areas, Please get in touch. we’d love to here from\n          you.\n        </p>\n        <small class=\"text-warning\">+60 3 7772 2725</small>\n      </div>\n      <div class=\"col-md-4 mb-4 text-center\">\n        <i class=\"fa fa-user fa-3x mb-2\"></i>\n        <h3>Contact\n          <small class=\"text-warning\">Sales</small>\n        </h3>\n        <p>Get answers before you purchase or make a purchase from award winning sales team. We are here to match the best for\n          your needs.</p>\n        <small class=\"text-warning\" routerLink=\"/contact\">Contact Sales</small>\n      </div>\n      <div class=\"col-md-4 mb-4 text-center\">\n        <i class=\"fa fa-commenting-o fa-3x mb-2\"></i>\n        <h3>Get a\n          <small class=\"text-warning\">Quote</small>\n        </h3>\n        <p>If you would like to get a quote on specific product, please get in touch. We'd love to help you out with best price.</p>\n        <small class=\"text-warning\" routerLink=\"/contact\">Get a Quote</small>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- HOME HEADING SECTION -->\n<section id=\"home-heading\" class=\"p-5\">\n  <div class=\"dark-overlay\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"container pt-5\">\n          <h1>OUR BUSINESS AREAS</h1>\n          <p class=\"d-none d-md-block\">Tradfield is a leading import and export Company in Malaysia. Our motto has always been timely service, Best quality\n            and optimum cost. We are in touch with our customers through quality, performance, service and assistance.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- INFO SECTION -->\n<section id=\"info\" class=\"py-3\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 align-self-center\">\n        <h3>Tradfield</h3>\n        <p>Bringing the best of value to our customers, we also care as much about our customers. We value the trust and beliefs\n          vested in us by our clients and professional contacts and provide a dedicated service with an honest and direct\n          approach in all our dealings. We have dedicated professional staff for each field to get the best solution for\n          your requirements.</p>\n        <a routerLink=\"/about\" class=\"btn btn-outline-danger btn-lg\">Learn More</a>\n      </div>\n      <div class=\"col-md-6\">\n        <img src=\"img/laptop.png\" alt=\"\" class=\"img-fluid\">\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- VIDEO PLAY -->\n<section id=\"video-play\">\n  <div class=\"dark-overlay\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"container p-5\">\n          <a href=\"#\" class=\"video\" data-video=\"https://www.youtube.com/embed/S2xZS5zSPxQ\" data-toggle=\"modal\" data-target=\"#videoModal\">\n            <i class=\"fa fa-play fa-3x\"></i>\n          </a>\n          <h1>See What We Do</h1>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- PHOTO GALLERY -->\n<!-- <section id=\"gallery\" class=\"py-5\">\n  <div class=\"container\">\n    <h1 class=\"text-center\">Photo Gallery</h1>\n    <p class=\"text-center\">Check out our photos</p>\n    <div class=\"row mb-4\">\n      <div class=\"col-md-4\">\n        <a href=\"https://source.unsplash.com/random/560x560\" data-toggle=\"lightbox\" data-gallery=\"img-gallery\" data-height=\"560\"\n          data-width=\"560\">\n          <img src=\"https://source.unsplash.com/random/560x560\" alt=\"\" class=\"img-fluid\">\n        </a>\n      </div>\n\n      <div class=\"col-md-4\">\n        <a href=\"https://source.unsplash.com/random/561x561\" data-toggle=\"lightbox\" data-gallery=\"img-gallery\" data-height=\"561\"\n          data-width=\"561\">\n          <img src=\"https://source.unsplash.com/random/561x561\" alt=\"\" class=\"img-fluid\">\n        </a>\n      </div>\n\n      <div class=\"col-md-4\">\n        <a href=\"https://source.unsplash.com/random/562x562\" data-toggle=\"lightbox\" data-gallery=\"img-gallery\" data-height=\"562\"\n          data-width=\"562\">\n          <img src=\"https://source.unsplash.com/random/562x562\" alt=\"\" class=\"img-fluid\">\n        </a>\n      </div>\n    </div>\n\n    <div class=\"row mb-4\">\n      <div class=\"col-md-4\">\n        <a href=\"https://source.unsplash.com/random/563x563\" data-toggle=\"lightbox\" data-gallery=\"img-gallery\" data-height=\"563\"\n          data-width=\"563\">\n          <img src=\"https://source.unsplash.com/random/563x563\" alt=\"\" class=\"img-fluid\">\n        </a>\n      </div>\n\n      <div class=\"col-md-4\">\n        <a href=\"https://source.unsplash.com/random/564x564\" data-toggle=\"lightbox\" data-gallery=\"img-gallery\" data-height=\"564\"\n          data-width=\"564\">\n          <img src=\"https://source.unsplash.com/random/564x564\" alt=\"\" class=\"img-fluid\">\n        </a>\n      </div>\n\n      <div class=\"col-md-4\">\n        <a href=\"https://source.unsplash.com/random/565x565\" data-toggle=\"lightbox\" data-gallery=\"img-gallery\" data-height=\"565\"\n          data-width=\"565\">\n          <img src=\"https://source.unsplash.com/random/565x565\" alt=\"\" class=\"img-fluid\">\n        </a>\n      </div>\n    </div>\n  </div>\n</section> -->\n\n<!-- NEWSLETTER -->\n<!-- <section id=\"newsletter\" class=\"text-center p-5 bg-dark text-white\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h1>Sign Up For Our Newsletter</h1>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores consectetur, quae ducimus voluptates vero\n          repellendus architecto maiores recusandae mollitia?</p>\n        <form class=\"form-inline justify-content-center\">\n          <input type=\"text\" class=\"form-control mb-2 mr-2\" placeholder=\"Enter Name\">\n          <input type=\"text\" class=\"form-control mb-2 mr-2\" placeholder=\"Enter Email\">\n          <button class=\"btn btn-primary mb-2\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section> -->\n\n<!-- FOOTER -->\n<!-- <footer id=\"main-footer\" class=\"text-center p-4\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <p>Copyright &copy;\n          <span id=\"year\"></span> Glozzom</p>\n      </div>\n    </div>\n  </div>\n</footer> -->\n\n\n<!-- VIDEO MODAL -->\n<div class=\"modal fade\" id=\"videoModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <button class=\"close\" data-dismiss=\"modal\">\n          <span>&times;</span>\n        </button>\n        <iframe src=\"\" frameborder=\"0\" height=\"350\" width=\"100%\" allowfullscreen></iframe>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  overflow-x: hidden; }\n\n.navbar .nav-link {\n  font-size: 14px;\n  text-transform: uppercase;\n  padding-left: 1rem !important;\n  padding-right: 1rem !important; }\n\n.navbar .nav-item.active {\n  border-left: #444 3px solid; }\n\n.carousel-item {\n  height: 450px; }\n\n.carousel-image-1 {\n  background: url('image1.jpg');\n  background-size: cover; }\n\n.carousel-image-2 {\n  background: url('image11.jpg');\n  background-size: cover; }\n\n.carousel-image-3 {\n  background: url('image12.jpg');\n  background-size: cover; }\n\n#home-heading {\n  position: relative;\n  min-height: 200px;\n  background: url('lights1.jpg');\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  text-align: center;\n  color: #fff; }\n\n.dark-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7); }\n\n#video-play {\n  position: relative;\n  min-height: 200px;\n  background: url('image13.jpg');\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-position: 0 100px;\n  text-align: center;\n  color: #fff;\n  background-size: cover; }\n\n#video-play a {\n  color: #fff; }\n\n#faq .card {\n  border: #444; }\n\n#faq a {\n  color: #fff;\n  text-decoration: none; }\n\n#faq .card-body,\n#faq .card-header {\n  background: #333; }\n\n#main-footer {\n  background: #000;\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Get the current year for the copyright
        $('#year').text(new Date().getFullYear());
        // Configure Slider
        $('.carousel').carousel({
            interval: 6000,
            pause: 'hover'
        });
        // Lightbox Init
        $(document).on('click', '[data-toggle="lightbox"]', function (event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        });
        // Video Play
        $(function () {
            // Auto play modal video
            $('.video').click(function () {
                var theModal = $(this).data('target'), videoSRC = $(this).attr('data-video'), videoSRCauto = videoSRC +
                    '?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1';
                $(theModal + ' iframe').attr('src', videoSRCauto);
                $(theModal + ' button.close').click(function () {
                    $(theModal + ' iframe').attr('src', videoSRC);
                });
            });
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-light\">\n  <div class=\"container\">\n    <a routerLink=\"/\" class=\"navbar-brand text-dark\">Tradfield</a>\n    <button class=\"navbar-toggler bg-dark\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/\" class=\"nav-link text-dark\">Home</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/about\" class=\"nav-link text-dark\">About Us</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/brands\" class=\"nav-link text-dark\">Our Brands</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/contact\" class=\"nav-link text-dark\">Contact Us</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
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

module.exports = __webpack_require__(/*! /Users/Mehdi/Documents/WEB/inProgressProjects/GitHub/tradfield/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map