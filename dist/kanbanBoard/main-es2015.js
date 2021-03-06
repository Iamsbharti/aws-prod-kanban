(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _task_tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task/tasklist/tasklist.component */ "./src/app/task/tasklist/tasklist.component.ts");









const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], pathMatch: 'full' },
    { path: 'signup', component: _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' },
    { path: '404', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
    { path: 'taskList', component: _task_tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_6__["TasklistComponent"], pathMatch: 'full' },
    { path: '**', redirectTo: '/404' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'kanbanBoard';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, consts: [[1, "container-sm"], [1, "navbar", "sticky-top", "navbar-expand-lg", "navbar-light", "title", "heading"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo01", "aria-controls", "navbarTogglerDemo01", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo01", 1, "collapse", "navbar-collapse"], ["href", "/", 1, "navbar-brand"], ["src", "assets/todo.png", "width", "40", "height", "40", "alt", "", 1, "d-inline-block", "align-top"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " KanbanBoard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: rgb(167, 130, 75);\n}\n\n@media only screen and (max-width: 725px) {\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtBQUNBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5hIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMTY3LCAxMzAsIDc1KTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzI1cHgpIHtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/compiler */ "./node_modules/@angular/compiler/fesm2015/compiler.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toast-notifications */ "./node_modules/ngx-toast-notifications/__ivy_ngcc__/fesm2015/ngx-toast-notifications.js");
/* harmony import */ var _task_task_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task/task.module */ "./src/app/task/task.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _multiuser_multiuser_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./multiuser/multiuser.module */ "./src/app/multiuser/multiuser.module.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"],
            _task_task_module__WEBPACK_IMPORTED_MODULE_9__["TaskModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _multiuser_multiuser_module__WEBPACK_IMPORTED_MODULE_13__["MultiuserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastNotificationsModule"].forRoot({
                duration: 3500,
                type: 'primary',
                autoClose: true,
                position: 'top-right',
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"],
        _task_task_module__WEBPACK_IMPORTED_MODULE_9__["TaskModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _multiuser_multiuser_module__WEBPACK_IMPORTED_MODULE_13__["MultiuserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastNotificationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"],
                    _task_task_module__WEBPACK_IMPORTED_MODULE_9__["TaskModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _multiuser_multiuser_module__WEBPACK_IMPORTED_MODULE_13__["MultiuserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastNotificationsModule"].forRoot({
                        duration: 3500,
                        type: 'primary',
                        autoClose: true,
                        position: 'top-right',
                    }),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/login"]; };
const _c1 = function () { return ["/signup"]; };
class HomeComponent {
    constructor() { }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 4, consts: [[1, "container"], [1, "introduction"], [3, "routerLink"], [1, "ml-4", 3, "routerLink"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Welcome to KanbanBoard,A perfect way to manage Your tasks in a shared way with your peers and friends. Let's get Started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SignUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: \"Montserrat\", sans-serif;\n}\n.introduction[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin-top: 120px;\n  font-size: 1rem;\n  font-weight: bold;\n  border-radius: 5px;\n  padding: 25px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);\n  width: 300px;\n}\n@media screen and (max-width: 767px) {\n  .introduction[_ngcontent-%COMP%] {\n    display: fixed;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0MsWUFBWTtBQUNkO0FBQ0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuLmludHJvZHVjdGlvbiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIHdpZHRoOiAzMDBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5pbnRyb2R1Y3Rpb24ge1xuICAgIGRpc3BsYXk6IGZpeGVkO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/multiuser/friend-list/friend-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/multiuser/friend-list/friend-list.component.ts ***!
  \****************************************************************/
/*! exports provided: FriendListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendListComponent", function() { return FriendListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _multi_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../multi-user.service */ "./src/app/multiuser/multi-user.service.ts");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toast-notifications */ "./node_modules/ngx-toast-notifications/__ivy_ngcc__/fesm2015/ngx-toast-notifications.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function FriendListComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friend_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", friend_r3.recieverName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](friend_r3.status);
} }
function FriendListComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendListComponent_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const friend_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.openFriendsItem(friend_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friend_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", friend_r4.split(":")[0], " ");
} }
function FriendListComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendListComponent_li_12_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const friend_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.updateFRequest(friend_r7, "accepted"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendListComponent_li_12_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const friend_r7 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.updateFRequest(friend_r7, "rejected"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friend_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", friend_r7.senderName, " ");
} }
class FriendListComponent {
    constructor(multiUserService, _toaster) {
        this.multiUserService = multiUserService;
        this._toaster = _toaster;
        this.friends = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedFriend = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reloadTaskList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resultList = [];
        this.friendsList = []; //status -accepted
        this.friendListObj = []; //for selection purpose
        this.pendingFriendLists = []; //status --pending
        this.toApproveRequest = []; //status --pending && recieverId==this.userId
        this.rejectedLists = []; //status --rejected
        this.authToken = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken');
    }
    ngOnInit() {
        console.debug('NGINIT_______FRIENDLIST');
        /**get friend list on user's login */
        this.getFriends();
        /**listen for any friend request made */
        this.getFriendRequestList();
        /**listen for any approval/rejection for this user */
        this.fRequestUpdateListener();
        /**listen for any updates made by friends */
        this.friendlyUpdatesListener();
    }
    ngOnDestroy() { }
    handeShakeAuthentication() {
        console.debug('listen to hand shake');
        this.multiUserService.autheticateUser().subscribe((data) => {
            this.multiUserService.setUser(this.authToken);
            this.getFriends();
        });
    }
    /**get friend list by API end point */
    getFriends() {
        //console.debug('get online users list', this.userId);
        let user = {
            senderId: this.userId,
        };
        this.multiUserService.getFriendRequests(user).subscribe((response) => {
            //console.debug('friend reques::', response.message);
            //console.debug('friend reques::', typeof response.data);
            if (response.status === 200) {
                this.resultList = response.data;
                this.friends.emit(response.data);
                this.refineLists(this.resultList);
            }
        }, (error) => {
            console.error('Error::', error.error);
        });
    }
    /**compute different type of friend list */
    refineLists(friends) {
        //console.debug('refining list:: for different groups', friends);
        friends.map((req) => {
            switch (req.status) {
                case 'pending':
                    /**compute pending list based when user id the sender and include onle once */
                    if (req.senderId == this.userId &&
                        !this.pendingFriendLists.includes(req.senderId)) {
                        this.pendingFriendLists.push(req);
                    }
                    /**compute the approval list for pending req and later filter
                     * based on when the user is the reciever of the request Line NO(101)
                     */
                    this.toApproveRequest.push(req);
                    break;
                case 'accepted':
                    /**include id for openFriendsItem */
                    if (req.senderId === this.userId) {
                        this.friendsList.push(`${req.recieverName}:${req.recieverId}`);
                    }
                    if (req.recieverId === this.userId &&
                        !this.friendsList.includes(req.senderName)) {
                        this.friendsList.push(`${req.senderName}:${req.senderId}`);
                        this.friendListObj.push(req);
                    }
            }
        });
        /**filter approval list
         * based on when the user is the reciever of the request Line NO
         */
        this.toApproveRequest = this.toApproveRequest.filter((usr) => usr.recieverId == this.userId);
        //console.debug('to approve list::', this.toApproveRequest);
        //console.debug('friend list::', this.friendsList);
    }
    /**listen for any friend request made for this user and update the friend list */
    getFriendRequestList() {
        this.multiUserService.getUpdatedFriendList().subscribe((data) => {
            /**updated the existing friend's list after any request is added or approved*/
            this.getFriends();
        });
    }
    /**approve/reject friend request */
    updateFRequest(request, action) {
        //console.debug('Clicked updateFRequest:', action);
        let updatedFriendRequest = Object.assign(Object.assign({}, request), { status: action });
        /**emit the updated request */
        this.multiUserService.updateFriendRequest(updatedFriendRequest);
        /**call for updated friend list API */
        setTimeout(() => this.getFriends(), 1200);
    }
    /**listen for updated approval & rejection if it's for this userID */
    fRequestUpdateListener() {
        this.multiUserService.friendRequestAction().subscribe((updatedRequest) => {
            const { recieverId, recieverName, senderId, senderName, status, uniqueCombination, } = updatedRequest;
            /**if senderId is this userId , this request is meant for self
             * take action accordingly
             */
            if (senderId === this.userId) {
                /**toast approval/rejection */
                this._toaster.open({
                    text: `${recieverName} ${status} your request`,
                    type: status === 'accepted' ? 'success' : 'dark',
                });
                /**refine current pendinglist based on current action(accepted/rejected) */
                if (status === 'accepted') {
                    this.pendingFriendLists = this.pendingFriendLists.filter((req) => {
                        req.senderId === senderId;
                    });
                }
            }
            if (recieverId === this.userId && status === 'accepted') {
                /**toast approver for success */
                this._toaster.open({
                    text: `${senderName} is now your friend`,
                    type: 'success',
                });
                /**clean up approval list for this request on client side*/
                this.toApproveRequest = this.toApproveRequest.filter((req) => {
                    req.senderId === senderId;
                });
            }
            /**get the updated friendlist from server*/
            this.getFriends();
        });
    }
    /**Invoke addition to friendsItem  */
    openFriendsItem(friend) {
        console.debug('friend::', friend);
        this.selectedFriend.emit(friend);
    }
    /**listener for friendly task updates */
    friendlyUpdatesListener() {
        let toastString;
        let friendList = [];
        console.debug('Friendly task updates');
        this.multiUserService.friendlyTaskUpdates().subscribe((updates) => {
            console.debug('updates listener::', updates);
            if (typeof updates === 'string') {
                toastString = updates;
                console.debug('toast string::', toastString);
            }
            else {
                friendList = updates;
                console.debug('friendlist::', updates);
            }
            console.debug('is friend::', friendList, this.userId);
            if (friendList.length !== 0) {
                friendList.map((fr) => {
                    if (fr !== null && fr === this.userId) {
                        console.debug('Found friend');
                        this._toaster.open({ text: toastString, type: 'dark' });
                        //emit reload tasklist event
                        console.debug("reloading task for  ,since it's a friend");
                        setTimeout(() => this.reloadTaskList.emit(this.userId), 1400);
                    }
                });
            }
        });
    }
}
FriendListComponent.ɵfac = function FriendListComponent_Factory(t) { return new (t || FriendListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_multi_user_service__WEBPACK_IMPORTED_MODULE_2__["MultiUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_3__["Toaster"])); };
FriendListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FriendListComponent, selectors: [["app-friend-list"]], inputs: { userId: "userId", username: "username" }, outputs: { friends: "friends", selectedFriend: "selectedFriend", reloadTaskList: "reloadTaskList" }, decls: 13, vars: 3, consts: [[1, "badge", "badge-dark", "mt-2"], [1, "list-group-flush", "list-group-item-light", "onlineUsers"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "badge", "badge-success"], ["class", "list-group-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "badge", "badge-info"], [1, "list-group-item"], [1, "badge", "badge-pill", "badge-primary", "ml-3"], [1, "list-group-item", 3, "click"], [1, "btn", "btn-outline-dark", "btn-sm", 3, "click"], [1, "btn", "btn-outline-dark", "btn-sm", "ml-3", 3, "click"]], template: function FriendListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Friend Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FriendListComponent_li_4_Template, 4, 2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FriendListComponent_li_8_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Take Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FriendListComponent_li_12_Template, 6, 1, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pendingFriendLists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.friendsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toApproveRequest);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".onlineUsers[_ngcontent-%COMP%] {\n  width: 350px;\n}\nli[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\nimg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-right: 40px;\n}\n.image[_ngcontent-%COMP%] {\n  background: url(\"/assets/offlineuser.png\") no-repeat;\n  width: 20px; \n  height: 20px; \n}\n.addfriend[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 10px;\n}\n.approve[_ngcontent-%COMP%]   .reject[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGl1c2VyL2ZyaWVuZC1saXN0L2ZyaWVuZC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9EQUFvRDtFQUNwRCxXQUFXLEVBQUUsdUJBQXVCO0VBQ3BDLFlBQVksRUFBRSx3QkFBd0I7QUFDeEM7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tdWx0aXVzZXIvZnJpZW5kLWxpc3QvZnJpZW5kLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vbmxpbmVVc2VycyB7XG4gIHdpZHRoOiAzNTBweDtcbn1cbmxpIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbi5pbWFnZSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvb2ZmbGluZXVzZXIucG5nXCIpIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDIwcHg7IC8qIFdpZHRoIG9mIG5ldyBpbWFnZSAqL1xuICBoZWlnaHQ6IDIwcHg7IC8qIEhlaWdodCBvZiBuZXcgaW1hZ2UgKi9cbn1cbi5hZGRmcmllbmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmFwcHJvdmUgLnJlamVjdCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FriendListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-friend-list',
                templateUrl: './friend-list.component.html',
                styleUrls: ['./friend-list.component.css'],
            }]
    }], function () { return [{ type: _multi_user_service__WEBPACK_IMPORTED_MODULE_2__["MultiUserService"] }, { type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_3__["Toaster"] }]; }, { userId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], username: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], friends: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], selectedFriend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], reloadTaskList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/multiuser/multi-user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/multiuser/multi-user.service.ts ***!
  \*************************************************/
/*! exports provided: MultiUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiUserService", function() { return MultiUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");








class MultiUserService {
    constructor(_http, userService) {
        this._http = _http;
        this.userService = userService;
        this.socketUrl = 'http://api.kanbanboard.co.in/multiusers';
        this.apiBaseUrl = 'http://api.kanbanboard.co.in/api/v1';
        this.httpHeaderOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                authToken: this.userService.getAutheticatedUserInfo().authToken,
            }),
        };
        /**define listeners and emitters */
        /**1: Listen to authentication handshake */
        this.autheticateUser = () => {
            console.debug('Auth user listener');
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
                this.socket.on('authenticate', (data) => {
                    observer.next(data);
                });
            });
        };
        /**2 send/emit authToken for authentication */
        this.setUser = (authToken) => {
            console.debug('Emmit user authentication');
            this.socket.emit('set-user', authToken);
        };
        /**3 Get Online Userlist by listning to online-users broadcase */
        this.getOnlineUserList = () => {
            //console.debug('get online user service');
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
                this.socket.on('online-users', (data) => {
                    observer.next(data);
                });
            });
        };
        /**emitt disconnect event with userId */
        this.disconnectUser = (userId) => {
            //console.debug('Disconnecting user', userId);
            this.socket.emit('disconnected', userId);
            /**delete cookie and  localstorage*/
            //console.debug('clearing localstorage and cookie');
            localStorage.clear();
            ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('name');
            ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('authToken');
            ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('email');
            ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('userId');
        };
        /**emit friend request */
        this.sendFriendRequest = (friendRequest) => {
            //console.debug('Send friend Request:');
            this.socket.emit('sentFriendRequest', friendRequest);
        };
        /**listen for friend request */
        this.recieveFriendRequest = (recieverId) => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observable) => {
                this.socket.on(recieverId, (data) => {
                    observable.next(data);
                });
            });
        };
        /**emit request approve/rejection FR */
        this.updateFriendRequest = (friendRequest) => {
            //console.debug('Emit actions on fr request');
            this.socket.emit('update-friend-request', friendRequest);
        };
        /**init client socket */
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(this.socketUrl, {
            'auto connect': true,
            'max reconnection attempts': 10,
            multiplex: false,
            'try multiple transports': true,
        });
    }
    //handle exceptions
    handleError(error) {
        console.debug('Http Error:', error.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message);
    }
    /**fetch friend requests */
    getFriendRequests(senderId) {
        return this._http.post(`${this.apiBaseUrl}/getFriendRequests`, senderId, this.httpHeaderOptions);
    }
    /**listen for friendsList */
    getUpdatedFriendList() {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observable) => {
            this.socket.on('friendlist-updates', (data) => {
                observable.next(data);
            });
        });
    }
    /**listen for friend request approval/rejection for appropiate sender */
    friendRequestAction() {
        /**here fr component will update and toast for approval
         * or rejection & fr list updates based appropiate
         * senderId (i.e if senderId is userId)
         */
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observable) => {
            this.socket.on('friend-request-updates', (data) => {
                observable.next(data);
            });
        });
    }
    /**emit update notification to friends when any edit if
     * performed 'updates' has What was updated by whom
     */
    notifyFriendsForUpdates(updates, friendlist) {
        console.debug('emit notify friendly updates');
        this.socket.emit('friend-updated-tasks', updates, friendlist);
    }
    /**listen for updates from friends and show notificationa
     * and reload tasklist if userId is in Friend's list
     */
    friendlyTaskUpdates() {
        console.debug('friendly task updates');
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observable) => {
            this.socket.on('updates-from-friend', (updates, friendList) => {
                observable.next(updates);
                observable.next(friendList);
                observable.complete();
            });
        });
    }
}
MultiUserService.ɵfac = function MultiUserService_Factory(t) { return new (t || MultiUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
MultiUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MultiUserService, factory: MultiUserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiUserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/multiuser/multiuser.module.ts":
/*!***********************************************!*\
  !*** ./src/app/multiuser/multiuser.module.ts ***!
  \***********************************************/
/*! exports provided: MultiuserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiuserModule", function() { return MultiuserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./friend-list/friend-list.component */ "./src/app/multiuser/friend-list/friend-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _multi_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./multi-user.service */ "./src/app/multiuser/multi-user.service.ts");
/* harmony import */ var _online_users_online_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./online-users/online-users.component */ "./src/app/multiuser/online-users/online-users.component.ts");










class MultiuserModule {
}
MultiuserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MultiuserModule });
MultiuserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MultiuserModule_Factory(t) { return new (t || MultiuserModule)(); }, providers: [_multi_user_service__WEBPACK_IMPORTED_MODULE_6__["MultiUserService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                { path: 'friendlist', component: _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_2__["FriendListComponent"], pathMatch: 'full' },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MultiuserModule, { declarations: [_friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_2__["FriendListComponent"], _online_users_online_users_component__WEBPACK_IMPORTED_MODULE_7__["OnlineUsersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_2__["FriendListComponent"], _online_users_online_users_component__WEBPACK_IMPORTED_MODULE_7__["OnlineUsersComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiuserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_2__["FriendListComponent"], _online_users_online_users_component__WEBPACK_IMPORTED_MODULE_7__["OnlineUsersComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                        { path: 'friendlist', component: _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_2__["FriendListComponent"], pathMatch: 'full' },
                    ]),
                ],
                exports: [_friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_2__["FriendListComponent"], _online_users_online_users_component__WEBPACK_IMPORTED_MODULE_7__["OnlineUsersComponent"]],
                providers: [_multi_user_service__WEBPACK_IMPORTED_MODULE_6__["MultiUserService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/multiuser/online-users/online-users.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/multiuser/online-users/online-users.component.ts ***!
  \******************************************************************/
/*! exports provided: OnlineUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineUsersComponent", function() { return OnlineUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _multi_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../multi-user.service */ "./src/app/multiuser/multi-user.service.ts");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toast-notifications */ "./node_modules/ngx-toast-notifications/__ivy_ngcc__/fesm2015/ngx-toast-notifications.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function OnlineUsersComponent_li_2_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnlineUsersComponent_li_2_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addFriend(user_r1.userId, user_r1.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Friend ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OnlineUsersComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OnlineUsersComponent_li_2_button_2_Template, 2, 0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.usersFriend.includes(user_r1.userId));
} }
class OnlineUsersComponent {
    constructor(multiUserService, _toaster) {
        this.multiUserService = multiUserService;
        this._toaster = _toaster;
        this.usersFriend = [];
        this.onlineUsers = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isFriend = true;
        this.authToken = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken');
        /**keep listeners active */
        this.getOnlineUsersList();
        this.recieveFriendRequestByUserId();
    }
    ngOnInit() {
        this.handeShakeAuthentication();
        this.getOnlineUsersList();
        this.recieveFriendRequestByUserId();
    }
    handeShakeAuthentication() {
        console.debug('listen to hand shake online compoenent');
        this.multiUserService.autheticateUser().subscribe((data) => {
            this.multiUserService.setUser(this.authToken);
            this.getOnlineUsersList();
        });
    }
    getOnlineUsersList() {
        //console.debug('get online users list');
        this.multiUserService.getOnlineUserList().subscribe((data) => {
            //console.debug('Online users from socket::', data);
            /**filter out the current user */
            let users = [];
            data.map((d) => {
                if (d.userId !== this.userId) {
                    users.push(d);
                }
            });
            //console.debug('final list:', users);
            this.onlineUsers.emit(users);
            this.onlineUsersList = users;
        });
    }
    addFriend(userId, username) {
        //console.debug('Add friend start', userId);
        /**to and from denotes friend request sent to and from user */
        let friendList = {
            recieverId: userId,
            recieverName: username,
            senderId: this.userId,
            senderName: this.username,
        };
        this.multiUserService.sendFriendRequest(friendList);
        //console.debug('fiendlist::', friendList);
    }
    recieveFriendRequestByUserId() {
        //console.debug('listen to friend request');
        this.multiUserService
            .recieveFriendRequest(this.userId)
            .subscribe((data) => {
            //console.debug('recieved friend request for ', data);
            const { recieverId, recieverName, senderId, senderName } = data;
            this._toaster.open({
                text: `${senderName} sent you an friend request`,
                type: 'success',
            });
        });
    }
}
OnlineUsersComponent.ɵfac = function OnlineUsersComponent_Factory(t) { return new (t || OnlineUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_multi_user_service__WEBPACK_IMPORTED_MODULE_2__["MultiUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_3__["Toaster"])); };
OnlineUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnlineUsersComponent, selectors: [["app-online-users"]], inputs: { userId: "userId", username: "username", usersFriend: "usersFriend" }, outputs: { onlineUsers: "onlineUsers" }, decls: 3, vars: 1, consts: [[1, "list-group-flush", "list-group-item-light", "onlineUsers"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], ["type", "button", "class", "btn btn-light", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-light", 3, "click"]], template: function OnlineUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OnlineUsersComponent_li_2_Template, 3, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.onlineUsersList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".onlineUsers[_ngcontent-%COMP%] {\n  width: 350px;\n}\nli[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\nimg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-right: 40px;\n}\n.image[_ngcontent-%COMP%] {\n  background: url(\"/assets/offlineuser.png\") no-repeat;\n  width: 20px; \n  height: 20px; \n}\n.addfriend[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGl1c2VyL29ubGluZS11c2Vycy9vbmxpbmUtdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0RBQW9EO0VBQ3BELFdBQVcsRUFBRSx1QkFBdUI7RUFDcEMsWUFBWSxFQUFFLHdCQUF3QjtBQUN4QztBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL211bHRpdXNlci9vbmxpbmUtdXNlcnMvb25saW5lLXVzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub25saW5lVXNlcnMge1xuICB3aWR0aDogMzUwcHg7XG59XG5saSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pbWcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG4uaW1hZ2Uge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL29mZmxpbmV1c2VyLnBuZ1wiKSBuby1yZXBlYXQ7XG4gIHdpZHRoOiAyMHB4OyAvKiBXaWR0aCBvZiBuZXcgaW1hZ2UgKi9cbiAgaGVpZ2h0OiAyMHB4OyAvKiBIZWlnaHQgb2YgbmV3IGltYWdlICovXG59XG4uYWRkZnJpZW5kIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlineUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-online-users',
                templateUrl: './online-users.component.html',
                styleUrls: ['./online-users.component.css'],
            }]
    }], function () { return [{ type: _multi_user_service__WEBPACK_IMPORTED_MODULE_2__["MultiUserService"] }, { type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_3__["Toaster"] }]; }, { userId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], username: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], usersFriend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onlineUsers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/login"]; };
class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 13, vars: 2, consts: [[1, "container"], [1, "loginbox"], [1, "badge", "badge-danger"], [1, "blockquote", "text-center"], [1, "blockquote-footer"], [1, "ml-2", 3, "routerLink"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Error Not Found!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "blockquote", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " The Page you Requested Is not Found, Please Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.loginbox[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  box-sizing: border-box;\n  border-radius: 20px;\n  padding: 25px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);\n  width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDJDQUEyQztFQUMzQyxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubG9naW5ib3gge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICB3aWR0aDogNTAwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/create-task/create-task.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/create-task/create-task.component.ts ***!
  \*************************************************************/
/*! exports provided: CreateTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskComponent", function() { return CreateTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _task_tasklist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../task/tasklist.service */ "./src/app/task/tasklist.service.ts");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toast-notifications */ "./node_modules/ngx-toast-notifications/__ivy_ngcc__/fesm2015/ngx-toast-notifications.js");
/* harmony import */ var _multiuser_multi_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../multiuser/multi-user.service */ "./src/app/multiuser/multi-user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function (a0, a1) { return { "badge badge-danger": a0, "badge badge-success": a1 }; };
class CreateTaskComponent {
    constructor(taskService, _toast, multiUserService) {
        this.taskService = taskService;
        this._toast = _toast;
        this.multiUserService = multiUserService;
        this.errorResponse = true;
        this.successResponse = true;
        //component will emit tasklist reload
        this.notifyNewTaskList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notifyNewTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notifyNewSubTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    /**create a single task */
    createTask() {
        console.debug('operation::', this.operationName);
        if (this.operationName.endsWith('New Task')) {
            console.debug('create new task');
            let taskInfo = {
                taskListId: this.taskListId,
                userId: this.userId,
                name: this.taskName,
                status: 'open',
            };
            console.debug('taskinfo::', taskInfo);
            this.taskService.createTask(taskInfo).subscribe((response) => {
                console.debug('Create task response::', response.message);
                console.debug('error::', response);
                /**New task Create success */
                if (response.status === 200) {
                    this._toast.open({ text: response.message, type: 'success' });
                    this.errorResponse = false;
                    this.successResponse = true;
                    this.createNewtaskResponse = response.message;
                    console.debug('emitt new task change', response.data);
                    //this.notifyNewTask.emit(response.data);
                    /**notify tasklist component for task updates */
                    let refreshUserId;
                    if (this.flagOperationForFriend) {
                        refreshUserId = this.userId;
                    }
                    else {
                        refreshUserId = this.loggedInUser;
                    }
                    console.debug('refreshing for::', refreshUserId);
                    //this.notifyEditTask.emit(refreshUserId);
                    this.notifyNewTask.emit(refreshUserId);
                    /**emit update notifiation to friends if any*/
                    let notification = `${this.username} created a Task`;
                    this.notifyFriends(notification);
                    /**emit close modal event */
                    this.closeModal.emit();
                }
                if (response.error === true && response.status === 400) {
                    this._toast.open({ text: `${response.data}`, type: 'danger' });
                }
            }, (error) => {
                console.warn('Error::', error.error);
                /**compute any error while */
                this.errorResponse = false;
                this.createNewtaskResponse = error.error.message;
                console.debug('resposen::', this.createNewtaskResponse);
                this._toast.open({ text: error.error.message, type: 'danger' });
            });
        }
        if (this.operationName.includes('New SubTask')) {
            console.debug('create new subtask');
            let taskInfo = {
                taskId: this.taskId,
                name: this.taskName,
                status: 'open',
                userId: this.userId,
            };
            console.debug('subtaskinfor::', taskInfo);
            this.taskService.createSubTask(taskInfo).subscribe((response) => {
                console.debug('Create task response::', response.message);
                /**New subtask Create success */
                if (response.status === 200) {
                    this._toast.open({ text: response.message, type: 'success' });
                    this.errorResponse = false;
                    this.successResponse = true;
                    this.createNewtaskResponse = response.message;
                    /**notify tasklist component for task updates */
                    let refreshUserId;
                    if (this.flagOperationForFriend) {
                        refreshUserId = this.userId;
                    }
                    else {
                        refreshUserId = this.loggedInUser;
                    }
                    console.debug('refreshing for::', refreshUserId);
                    this.notifyNewSubTask.emit(refreshUserId);
                    /**emit update notifiation to friends if any*/
                    let notification = `${this.username} created a SubTask`;
                    this.notifyFriends(notification);
                    /**emit modal close event */
                    this.closeModal.emit();
                }
                if (response.error === true && response.status === 400) {
                    this._toast.open({ text: `${response.data}`, type: 'danger' });
                }
            }, (error) => {
                console.warn('Error::', error.error);
                /**compute any error while */
                this.errorResponse = false;
                this.createNewtaskResponse = error.error.message;
                console.debug('resposen-subtask::', this.createNewtaskResponse);
                this._toast.open({ text: error.error.message, type: 'danger' });
            });
        }
        if (this.operationName.includes('New TaskList')) {
            console.debug('create new tasklist');
            let taskListInfo = {
                userId: this.userId,
                name: this.taskName,
            };
            this.taskService.createTaskList(taskListInfo).subscribe((response) => {
                console.debug('Create tasklist  response::', response.message);
                /**New subtask Create success */
                if (response.status === 200) {
                    this._toast.open({ text: response.message, type: 'success' });
                    this.errorResponse = false;
                    this.successResponse = true;
                    this.createNewtaskResponse = response.message;
                    console.debug('emmit new tasklist create', response.data);
                    this.notifyNewTaskList.emit(response.data);
                    /**emit modal close event */
                    this.closeModal.emit();
                    /**emit create notifiation to friends if any*/
                    let notification = `${this.username} created a TaskList`;
                    this.notifyFriends(notification);
                }
                if (response.error === true && response.status === 400) {
                    this._toast.open({ text: `${response.data}`, type: 'danger' });
                }
            }, (error) => {
                console.warn('Error::', error.error);
                /**compute any error while */
                this.errorResponse = false;
                this.createNewtaskResponse = error.error.message;
                console.debug('resposen-taklist::', this.createNewtaskResponse);
                this._toast.open({ text: error.error.message, type: 'danger' });
            });
        }
    }
    notifyFriends(notification) {
        console.debug('notify friends for updates');
        /**emit update notifiation to friends if any*/
        if (this.usersFriend.length !== 0) {
            console.debug('updates string::', notification, this.usersFriend);
            this.multiUserService.notifyFriendsForUpdates(notification, this.usersFriend);
        }
    }
}
CreateTaskComponent.ɵfac = function CreateTaskComponent_Factory(t) { return new (t || CreateTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_tasklist_service__WEBPACK_IMPORTED_MODULE_1__["TasklistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["Toaster"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_multiuser_multi_user_service__WEBPACK_IMPORTED_MODULE_3__["MultiUserService"])); };
CreateTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateTaskComponent, selectors: [["app-create-task"]], inputs: { userId: "userId", operationName: "operationName", loggedInUser: "loggedInUser", username: "username", flagOperationForFriend: "flagOperationForFriend", usersFriend: "usersFriend", taskListId: "taskListId", taskName: "taskName", taskListName: "taskListName", subTaskName: "subTaskName", taskId: "taskId" }, outputs: { notifyNewTaskList: "notifyNewTaskList", notifyNewTask: "notifyNewTask", notifyNewSubTask: "notifyNewSubTask", closeModal: "closeModal" }, decls: 16, vars: 10, consts: [[1, "badge", "badge-secondary"], [3, "ngSubmit"], ["createTaskForm", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "name", "taskName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_name", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], [1, "badge", "badge-danger", 3, "hidden", "ngClass"], [1, "mt-2", 3, "disabled"]], template: function CreateTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateTaskComponent_Template_form_ngSubmit_3_listener() { return ctx.createTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateTaskComponent_Template_input_ngModelChange_8_listener($event) { return ctx.taskName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " TaskName is Required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Create Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.operationName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.taskName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.errorResponse)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx.errorResponse, ctx.successResponse));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.createNewtaskResponse, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n}\n.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%] {\n  border-left: 5px solid green;\n}\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border-left: 5px solid red;\n}\n.add[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.createTask[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  box-sizing: border-box;\n  border-radius: 12px;\n  padding: 25px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);\n  width: 200px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NyZWF0ZS10YXNrL2NyZWF0ZS10YXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTs7RUFFRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDJDQUEyQztFQUMzQyxZQUFZO0VBQ1osYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NyZWF0ZS10YXNrL2NyZWF0ZS10YXNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuLm5nLXZhbGlkW3JlcXVpcmVkXSxcbi5uZy12YWxpZC5yZXF1aXJlZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JlZW47XG59XG4ubmctaW52YWxpZDpub3QoZm9ybSkge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbn1cbi5hZGQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNyZWF0ZVRhc2sge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-task',
                templateUrl: './create-task.component.html',
                styleUrls: ['./create-task.component.css'],
            }]
    }], function () { return [{ type: _task_tasklist_service__WEBPACK_IMPORTED_MODULE_1__["TasklistService"] }, { type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["Toaster"] }, { type: _multiuser_multi_user_service__WEBPACK_IMPORTED_MODULE_3__["MultiUserService"] }]; }, { userId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], operationName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loggedInUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], username: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], flagOperationForFriend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], usersFriend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], taskListId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], taskName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], taskListName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subTaskName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], taskId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], notifyNewTaskList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], notifyNewTask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], notifyNewSubTask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], closeModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/edit-task/edit-task.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/edit-task/edit-task.component.ts ***!
  \*********************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _task_tasklist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../task/tasklist.service */ "./src/app/task/tasklist.service.ts");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toast-notifications */ "./node_modules/ngx-toast-notifications/__ivy_ngcc__/fesm2015/ngx-toast-notifications.js");
/* harmony import */ var _multiuser_multi_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../multiuser/multi-user.service */ "./src/app/multiuser/multi-user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function EditTaskComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", task_r11.taskListId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r11.name);
} }
function EditTaskComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", task_r12.taskId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r12.name);
} }
function EditTaskComponent_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", status_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](status_r13);
} }
const _c0 = function (a0, a1) { return { "badge badge-danger": a0, "badge badge-success": a1 }; };
class EditTaskComponent {
    constructor(taskService, _toast, multiUserService) {
        this.taskService = taskService;
        this._toast = _toast;
        this.multiUserService = multiUserService;
        this.errorResponse = true;
        this.successResponse = true;
        this.toggleTaskList = false;
        this.toggleTasks = false;
        this.toggleStatusSelection = false;
        this.selectedTaskList = [];
        //component will emit tasklist reload
        this.notifyEditTaskList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notifyEditTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notifyEditSubTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.statusOptions = ['open', 'done'];
        //this.selected = this.selectTasks[0];
        /**toggle selection item based on task ops */
        if (this.operationName === 'Edit TaskList') {
            console.debug('ops edit tasklist::', this.selectTasks);
            this.toggleTaskList = true;
            this.toggleTasks = true;
            this.toggleStatusSelection = true;
        }
        if (this.operationName === 'Edit Task') {
            console.debug('ops edit task::', this.selectTasksList);
            console.debug('ops edit task');
            /*this.selectTasksList.map((list) => {
              if (list.taskListId === this.taskListId) {
                console.debug('taskname::', list.name);
                this.selectedTask = list.name;
              }
            });*/
            this.toggleTaskList = false;
            this.toggleTasks = true;
            //console.debug('selected value::', this.selectedTask);
        }
        if (this.operationName === 'Edit SubTask') {
            console.debug('ops edit subtask::', this.selectTasks);
            console.debug('ops edit subtasks');
            this.toggleTaskList = true;
            this.toggleTasks = false;
            this.getAllTask();
        }
    }
    /**fetch all tasks for selection use while updating subtasks */
    getAllTask() {
        let taskInfo = {
            taskListId: this.taskListId,
            userId: this.userId,
        };
        console.debug('input:', taskInfo);
        this.taskService.getTasks(taskInfo).subscribe((response) => {
            console.debug('get all task res::', response.message);
            /**updated tasks */
            this.selectTasks = response.data;
            console.debug('All tasks::', this.selectTasks);
            this.selectTasks.map((list) => {
                if (list.taskId === this.taskId) {
                    console.debug('taskfor subtask::', list.taskId);
                    this.selected = list.taskId;
                }
            });
            console.debug('selected task::', this.selected);
        }, (error) => {
            console.warn('Error::', error.error);
        });
    }
    editTask() {
        console.debug('editing task');
        /**create a single task */
        console.debug('operation::', this.operationName);
        if (this.operationName.endsWith('Edit Task')) {
            console.debug('edit task');
            let taskInfo = {
                taskListId: this.taskListId,
                taskId: this.taskId,
                userId: this.userId,
                operation: 'edit',
                update: {
                    name: this.name,
                    status: this.status,
                    taskListId: this.selectedTask,
                },
            };
            console.debug('update taskinfo::', taskInfo);
            this.taskService.updateTask(taskInfo).subscribe((response) => {
                console.debug('update task response::', response.message);
                /**New task Create success */
                if (response.status === 200) {
                    this._toast.open({ text: response.message, type: 'success' });
                    this.errorResponse = false;
                    this.successResponse = true;
                    this.editTaskResponse = response.message;
                    console.debug('emitt new task change', response.data);
                    /**notify tasklist component for task updates */
                    let refreshUserId;
                    if (this.flagOperationForFriend) {
                        refreshUserId = this.userId;
                    }
                    else {
                        refreshUserId = this.loggedInUser;
                    }
                    console.debug('refreshing for::', refreshUserId);
                    this.notifyEditTask.emit(refreshUserId);
                    /**emit update notifiation to friends if any*/
                    let notification = `${this.username} updated a Task`;
                    this.notifyFriends(notification);
                    /**emit close modal event */
                    this.closeModal.emit();
                }
            }, (error) => {
                console.warn('Error::', error.error);
                /**compute any error while */
                this.errorResponse = false;
                this.editTaskResponse = error.error.message;
                console.debug('resposen::', this.editTaskResponse);
                this._toast.open({ text: error.error.message, type: 'danger' });
            });
        }
        if (this.operationName.includes('Edit SubTask')) {
            console.debug('edit new subtask');
            let taskInfo = {
                taskId: this.taskId,
                subTaskId: this.subTaskId,
                operation: 'edit',
                userId: this.userId,
                update: {
                    name: this.name,
                    status: this.status,
                    taskId: this.selected,
                },
            };
            console.debug('subtaskinfor::', taskInfo);
            this.taskService.updateSubTask(taskInfo).subscribe((response) => {
                console.debug('update task response::', response.message);
                /**subtask update success */
                if (response.status === 200) {
                    this._toast.open({ text: response.message, type: 'success' });
                    this.errorResponse = false;
                    this.successResponse = true;
                    this.editTaskResponse = response.message;
                    let refreshUserId;
                    if (this.flagOperationForFriend) {
                        refreshUserId = this.userId;
                    }
                    else {
                        refreshUserId = this.loggedInUser;
                    }
                    this.notifyEditSubTask.emit(refreshUserId);
                    /**emit update notifiation to friends if any*/
                    let notification = `${this.username} updated a SubTask`;
                    this.notifyFriends(notification);
                    /**emit close modal event */
                    this.closeModal.emit();
                }
            }, (error) => {
                console.warn('Error::', error.error);
                /**compute any error while */
                this.errorResponse = false;
                this.editTaskResponse = error.error.message;
                console.debug('resposen-subtask::', this.editTaskResponse);
                this._toast.open({ text: error.error.message, type: 'danger' });
            });
        }
        if (this.operationName.includes('Edit TaskList')) {
            console.debug('update tasklist');
            let taskListInfo = {
                userId: this.userId,
                taskListId: this.taskListId,
                operation: 'edit',
                update: {
                    name: this.name,
                },
            };
            this.taskService.updateTaskList(taskListInfo).subscribe((response) => {
                console.debug('update tasklist  response::', response.message);
                /**New subtask update success */
                if (response.status === 200) {
                    this._toast.open({ text: response.message, type: 'success' });
                    this.errorResponse = false;
                    this.successResponse = true;
                    this.editTaskResponse = response.message;
                    console.debug('emmit  tasklist edit');
                    this.notifyEditTaskList.emit(`${this.name + ':' + this.taskListId}`);
                    /**emit update notifiation to friends if any*/
                    let notification = `${this.username} updated a TaskList`;
                    this.notifyFriends(notification);
                    /**emit close modal event */
                    this.closeModal.emit();
                }
            }, (error) => {
                console.warn('Error::', error.error);
                /**compute any error while update*/
                this.errorResponse = false;
                this.editTaskResponse = error.error.message;
                console.debug('resposen-taklist::', this.editTaskResponse);
                this._toast.open({ text: error.error.message, type: 'danger' });
            });
        }
    }
    notifyFriends(notification) {
        console.debug('notify friends for updates');
        /**emit update notifiation to friends if any*/
        if (this.usersFriend.length !== 0) {
            console.debug('updates string::', notification, this.usersFriend);
            this.multiUserService.notifyFriendsForUpdates(notification, this.usersFriend);
        }
    }
}
EditTaskComponent.ɵfac = function EditTaskComponent_Factory(t) { return new (t || EditTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_tasklist_service__WEBPACK_IMPORTED_MODULE_1__["TasklistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["Toaster"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_multiuser_multi_user_service__WEBPACK_IMPORTED_MODULE_3__["MultiUserService"])); };
EditTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditTaskComponent, selectors: [["app-edit-task"]], inputs: { userId: "userId", operationName: "operationName", name: "name", status: "status", loggedInUser: "loggedInUser", usersFriend: "usersFriend", username: "username", taskListId: "taskListId", taskListName: "taskListName", selectTasksList: "selectTasksList", subTaskName: "subTaskName", taskId: "taskId", subTaskId: "subTaskId", selectedFriendName: "selectedFriendName", selectTasks: "selectTasks", flagOperationForFriend: "flagOperationForFriend" }, outputs: { notifyEditTaskList: "notifyEditTaskList", notifyEditTask: "notifyEditTask", notifyEditSubTask: "notifyEditSubTask", closeModal: "closeModal" }, decls: 31, vars: 18, consts: [[1, "badge", "badge-secondary"], [3, "ngSubmit"], ["editTaskForm", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "name", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_name", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], [3, "hidden"], ["required", "", "name", "selectedTask", 1, "form-control", "mt-1", 3, "ngModel", "ngModelChange"], ["list", "", "_tsk", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["required", "", "name", "selected", 1, "form-control", "mt-1", 3, "ngModel", "ngModelChange"], [1, "status", 3, "hidden"], ["required", "", "name", "status", 1, "form-control", "mt-1", 3, "ngModel", "ngModelChange"], [1, "badge", "badge-danger", 3, "hidden", "ngClass"], [1, "mt-2"], [3, "value"]], template: function EditTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditTaskComponent_Template_form_ngSubmit_3_listener() { return ctx.editTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditTaskComponent_Template_input_ngModelChange_8_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " TaskName is Required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditTaskComponent_Template_select_ngModelChange_13_listener($event) { return ctx.selectedTask = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EditTaskComponent_option_16_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 12, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditTaskComponent_Template_select_ngModelChange_18_listener($event) { return ctx.selected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EditTaskComponent_option_21_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditTaskComponent_Template_select_ngModelChange_23_listener($event) { return ctx.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EditTaskComponent_option_26_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Edit Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.operationName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.toggleTaskList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedTask);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectTasksList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.toggleTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.toggleStatusSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statusOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.errorResponse)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c0, ctx.errorResponse, ctx.successResponse));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.editTaskResponse, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9lZGl0LXRhc2svZWRpdC10YXNrLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-task',
                templateUrl: './edit-task.component.html',
                styleUrls: ['./edit-task.component.css'],
            }]
    }], function () { return [{ type: _task_tasklist_service__WEBPACK_IMPORTED_MODULE_1__["TasklistService"] }, { type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["Toaster"] }, { type: _multiuser_multi_user_service__WEBPACK_IMPORTED_MODULE_3__["MultiUserService"] }]; }, { userId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], operationName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loggedInUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], usersFriend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], username: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], taskListId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], taskListName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectTasksList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subTaskName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], taskId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subTaskId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedFriendName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectTasks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], flagOperationForFriend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], notifyEditTaskList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], notifyEditTask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], notifyEditSubTask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], closeModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _task_tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task/tasklist/tasklist.component */ "./src/app/task/tasklist/tasklist.component.ts");
/* harmony import */ var _create_task_create_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-task/create-task.component */ "./src/app/shared/create-task/create-task.component.ts");
/* harmony import */ var _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-task/edit-task.component */ "./src/app/shared/edit-task/edit-task.component.ts");
/* harmony import */ var _multiuser_multiuser_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../multiuser/multiuser.module */ "./src/app/multiuser/multiuser.module.ts");








class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [_task_tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_3__["TasklistComponent"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _multiuser_multiuser_module__WEBPACK_IMPORTED_MODULE_6__["MultiuserModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_4__["CreateTaskComponent"], _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_5__["EditTaskComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _multiuser_multiuser_module__WEBPACK_IMPORTED_MODULE_6__["MultiuserModule"]], exports: [_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_4__["CreateTaskComponent"], _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_5__["EditTaskComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_4__["CreateTaskComponent"], _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_5__["EditTaskComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _multiuser_multiuser_module__WEBPACK_IMPORTED_MODULE_6__["MultiuserModule"]],
                exports: [_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_4__["CreateTaskComponent"], _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_5__["EditTaskComponent"]],
                providers: [_task_tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_3__["TasklistComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/task/router-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/task/router-guard.service.ts ***!
  \**********************************************/
/*! exports provided: RouterGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterGuardService", function() { return RouterGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router/ */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class RouterGuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate(router) {
        console.log('Guard Route');
        let authToken = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken');
        if (authToken == null || authToken == undefined || authToken == '') {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    }
}
RouterGuardService.ɵfac = function RouterGuardService_Factory(t) { return new (t || RouterGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router___WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RouterGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouterGuardService, factory: RouterGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouterGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router___WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/task/subtasks/subtasks.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/task/subtasks/subtasks.component.ts ***!
  \*****************************************************/
/*! exports provided: SubtasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtasksComponent", function() { return SubtasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tasklist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasklist.service */ "./src/app/task/tasklist.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SubtasksComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtasksComponent_li_1_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const task_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.emitSubTaskDeletion(task_r1.taskId, task_r1.subTaskId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtasksComponent_li_1_Template_img_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const task_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.emitEditSubTask(task_r1.taskId, task_r1.name, task_r1.subTaskId, task_r1.status); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r1.name);
} }
class SubtasksComponent {
    constructor(taskService) {
        this.taskService = taskService;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.getAllSubTasks();
    }
    getAllSubTasks() {
        let taskInfo = {
            taskId: this.taskId,
        };
        this.taskService.getSubTasks(taskInfo).subscribe((response) => {
            /**get subtasks */
            //console.debug('Subtasks Response::', response.message);
            if (response.status === 200)
                this.subtasks = response.data;
        }, (error) => {
            console.warn('Error fetching Subtasks:', error.error);
        });
    }
    addNewSubTask(newSubTask) {
        //console.debug('New sub task in subtask component::', newSubTask);
        this.subtasks.push(newSubTask);
    }
    /**emit subtask deletion */
    emitSubTaskDeletion(taskId, subTaskId) {
        //console.debug('Emit sub task deletetion', taskId, subTaskId);
        this.delete.emit(`${taskId}:${subTaskId}`);
    }
    /**emit subtask edit */
    emitEditSubTask(taskId, name, subTaskId, status) {
        //console.debug('Emit edit sub task::', taskId, name, subTaskId);
        this.edit.emit(`${taskId}:${name}:${subTaskId}:${status}`);
    }
}
SubtasksComponent.ɵfac = function SubtasksComponent_Factory(t) { return new (t || SubtasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tasklist_service__WEBPACK_IMPORTED_MODULE_1__["TasklistService"])); };
SubtasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubtasksComponent, selectors: [["app-subtasks"]], inputs: { taskId: "taskId", userId: "userId" }, outputs: { delete: "delete", edit: "edit" }, decls: 2, vars: 1, consts: [[1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "name"], [1, "taskHeader"], ["src", "/assets/removetaskicon.png", 1, "add", "mr-2", 3, "click"], ["src", "/assets/edit.png", 1, "add", 3, "click"]], template: function SubtasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubtasksComponent_li_1_Template, 6, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subtasks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".add[_ngcontent-%COMP%] {\n  margin-left: 9px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.remove[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.add[_ngcontent-%COMP%]::hover {\n  border-color: blueviolet;\n}\n.remove[_ngcontent-%COMP%]::hover {\n  border-color: blueviolet;\n}\n.status[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.status[_ngcontent-%COMP%]::hover {\n  color: aliceblue;\n}\n.taskHeader[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: flex-start;\n  justify-content: flex-end;\n  margin-top: -21px;\n}\n.name[_ngcontent-%COMP%] {\n  color: #8598ee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay9zdWJ0YXNrcy9zdWJ0YXNrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdGFzay9zdWJ0YXNrcy9zdWJ0YXNrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZCB7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZW1vdmUge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFkZDo6aG92ZXIge1xuICBib3JkZXItY29sb3I6IGJsdWV2aW9sZXQ7XG59XG4ucmVtb3ZlOjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogYmx1ZXZpb2xldDtcbn1cbi5zdGF0dXMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3RhdHVzOjpob3ZlciB7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG59XG4udGFza0hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IC0yMXB4O1xufVxuLm5hbWUge1xuICBjb2xvcjogIzg1OThlZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubtasksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subtasks',
                templateUrl: './subtasks.component.html',
                styleUrls: ['./subtasks.component.css'],
            }]
    }], function () { return [{ type: _tasklist_service__WEBPACK_IMPORTED_MODULE_1__["TasklistService"] }]; }, { taskId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], userId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], delete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], edit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/task/task.module.ts":
/*!*************************************!*\
  !*** ./src/app/task/task.module.ts ***!
  \*************************************/
/*! exports provided: TaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasklist/tasklist.component */ "./src/app/task/tasklist/tasklist.component.ts");
/* harmony import */ var _tasklist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasklist.service */ "./src/app/task/tasklist.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/task/tasks/tasks.component.ts");
/* harmony import */ var _subtasks_subtasks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./subtasks/subtasks.component */ "./src/app/task/subtasks/subtasks.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _multiuser_multiuser_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../multiuser/multiuser.module */ "./src/app/multiuser/multiuser.module.ts");
/* harmony import */ var _router_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./router-guard.service */ "./src/app/task/router-guard.service.ts");















class TaskModule {
}
TaskModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TaskModule });
TaskModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TaskModule_Factory(t) { return new (t || TaskModule)(); }, providers: [_tasklist_service__WEBPACK_IMPORTED_MODULE_6__["TasklistService"], _router_guard_service__WEBPACK_IMPORTED_MODULE_12__["RouterGuardService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _multiuser_multiuser_module__WEBPACK_IMPORTED_MODULE_11__["MultiuserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                {
                    path: 'taskList',
                    component: _tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_5__["TasklistComponent"],
                    pathMatch: 'full',
                    canActivate: [_router_guard_service__WEBPACK_IMPORTED_MODULE_12__["RouterGuardService"]],
                },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskModule, { declarations: [_tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_5__["TasklistComponent"], _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__["TasksComponent"], _subtasks_subtasks_component__WEBPACK_IMPORTED_MODULE_9__["SubtasksComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
        _multiuser_multiuser_module__WEBPACK_IMPORTED_MODULE_11__["MultiuserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__["TasksComponent"], _subtasks_subtasks_component__WEBPACK_IMPORTED_MODULE_9__["SubtasksComponent"], _tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_5__["TasklistComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_5__["TasklistComponent"], _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__["TasksComponent"], _subtasks_subtasks_component__WEBPACK_IMPORTED_MODULE_9__["SubtasksComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                    _multiuser_multiuser_module__WEBPACK_IMPORTED_MODULE_11__["MultiuserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                        {
                            path: 'taskList',
                            component: _tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_5__["TasklistComponent"],
                            pathMatch: 'full',
                            canActivate: [_router_guard_service__WEBPACK_IMPORTED_MODULE_12__["RouterGuardService"]],
                        },
                    ]),
                ],
                providers: [_tasklist_service__WEBPACK_IMPORTED_MODULE_6__["TasklistService"], _router_guard_service__WEBPACK_IMPORTED_MODULE_12__["RouterGuardService"]],
                exports: [_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__["TasksComponent"], _subtasks_subtasks_component__WEBPACK_IMPORTED_MODULE_9__["SubtasksComponent"], _tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_5__["TasklistComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/task/tasklist.service.ts":
/*!******************************************!*\
  !*** ./src/app/task/tasklist.service.ts ***!
  \******************************************/
/*! exports provided: TasklistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasklistService", function() { return TasklistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");







class TasklistService {
    constructor(_http, userService) {
        this._http = _http;
        this.userService = userService;
        //initialize
        this.baseurl = 'http://api.kanbanboard.co.in/api/v1';
        this.socketUrl = 'http://api.kanbanboard.co.in/multiusers';
        /**define listeners and emitters */
        /**1: Listen to authentication handshake */
        this.autheticateUser = () => {
            console.debug('Auth user listener');
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
                this.socket.on('authenticate', (data) => {
                    observer.next(data);
                });
            });
        };
        /**2 send/emit authToken for authentication */
        this.setUser = (authToken) => {
            console.debug('Emmit user authentication');
            this.socket.emit('set-user', authToken);
        };
        /**3 Get Online Userlist by listning to online-users broadcase */
        this.getOnlineUserList = () => {
            //console.debug('get online user service');
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
                this.socket.on('online-users', (data) => {
                    observer.next(data);
                });
            });
        };
        this.httpHeaderOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                authToken: this.userService.getAutheticatedUserInfo().authToken,
            }),
        };
        /**init client socket */
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(this.socketUrl, {
            'auto connect': true,
            multiplex: false,
            'try multiple transports': true,
        });
    }
    //handle exceptions
    handleError(error) {
        console.debug('Http Error:', error.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message);
    }
    //create taskList
    createTaskList(taskListData) {
        console.debug('https header:', this.httpHeaderOptions);
        let createTaskListRes = this._http.post(`${this.baseurl}/createTaskList`, taskListData, this.httpHeaderOptions);
        return createTaskListRes;
    }
    //get taskLists for a userId
    getTaskLists(userId, skip) {
        let allTaskLists = this._http.post(`${this.baseurl}/getAllTaskList/?skip=${skip}`, userId, this.httpHeaderOptions);
        return allTaskLists;
    }
    //created task
    createTask(taskDetails) {
        //console.debug('create task service:', taskDetails);
        let createTaskRes = this._http.post(`${this.baseurl}/createTask`, taskDetails, this.httpHeaderOptions);
        return createTaskRes;
    }
    //get tasks for a tasklist and userid
    getTasks(taskData) {
        let allTasks = this._http.post(`${this.baseurl}/getTasks`, taskData, this.httpHeaderOptions);
        return allTasks;
    }
    //create subtask for a taskid
    createSubTask(subTaskDetails) {
        let createSubTaskRes = this._http.post(`${this.baseurl}/createSubTask`, subTaskDetails, this.httpHeaderOptions);
        return createSubTaskRes;
    }
    //get subtask for a taskid
    getSubTasks(subTaskDetails) {
        let allSubTasks = this._http.post(`${this.baseurl}/getSubTasks`, subTaskDetails, this.httpHeaderOptions);
        return allSubTasks;
    }
    /**update task */
    updateTask(taskInfo) {
        //console.debug('update task sevice::', taskInfo);
        let udpatedTask = this._http.post(`${this.baseurl}/updateTask`, taskInfo, this.httpHeaderOptions);
        return udpatedTask;
    }
    /**update/delete tasklist */
    updateTaskList(taskListInfo) {
        console.debug('update tasklist service:');
        return this._http.post(`${this.baseurl}/updatetaskList`, taskListInfo, this.httpHeaderOptions);
    }
    /**update/delete subtask */
    updateSubTask(subTaskInfo) {
        console.debug('update subtask  servcie');
        return this._http.post(`${this.baseurl}/updateSubTask`, subTaskInfo, this.httpHeaderOptions);
    }
    /**revert changes */
    revertLatestChange(userId) {
        console.debug('reverting changes::for', userId);
        return this._http.post(`${this.baseurl}/revertChanges`, userId, this.httpHeaderOptions);
    }
}
TasklistService.ɵfac = function TasklistService_Factory(t) { return new (t || TasklistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
TasklistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TasklistService, factory: TasklistService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasklistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/task/tasklist/tasklist.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/task/tasklist/tasklist.component.ts ***!
  \*****************************************************/
/*! exports provided: TasklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasklistComponent", function() { return TasklistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tasklist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasklist.service */ "./src/app/task/tasklist.service.ts");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toast-notifications */ "./node_modules/ngx-toast-notifications/__ivy_ngcc__/fesm2015/ngx-toast-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _multiuser_multi_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../multiuser/multi-user.service */ "./src/app/multiuser/multi-user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _multiuser_online_users_online_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../multiuser/online-users/online-users.component */ "./src/app/multiuser/online-users/online-users.component.ts");
/* harmony import */ var _multiuser_friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../multiuser/friend-list/friend-list.component */ "./src/app/multiuser/friend-list/friend-list.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tasks/tasks.component */ "./src/app/task/tasks/tasks.component.ts");
/* harmony import */ var _shared_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/create-task/create-task.component */ "./src/app/shared/create-task/create-task.component.ts");
/* harmony import */ var _shared_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/edit-task/edit-task.component */ "./src/app/shared/edit-task/edit-task.component.ts");















const _c0 = ["scrollBar"];
function TasklistComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.onlineUser.length || 0);
} }
function TasklistComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.friendList.length || 0);
} }
function TasklistComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasklistComponent_div_32_Template_img_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const list_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34); return ctx_r9.open(_r3, "New Task", list_r7.taskListId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasklistComponent_div_32_Template_img_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const list_r7 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.deleteTaskList(list_r7.taskListId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasklistComponent_div_32_Template_img_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const list_r7 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36); return ctx_r12.openEdit(_r5, "Edit TaskList", list_r7.taskListId, list_r7.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-tasks", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notify", function TasklistComponent_div_32_Template_app_tasks_notify_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34); return ctx_r13.openCreateSubTaskForm($event, _r3); })("delete", function TasklistComponent_div_32_Template_app_tasks_delete_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.deleteTask($event); })("edit", function TasklistComponent_div_32_Template_app_tasks_edit_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36); return ctx_r15.editTask($event, _r5); })("editSTask", function TasklistComponent_div_32_Template_app_tasks_editSTask_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36); return ctx_r16.editSubTask($event, _r5); })("notifyForSTaskDelete", function TasklistComponent_div_32_Template_app_tasks_notifyForSTaskDelete_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.notifyFriendsSTaskDelete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("taskListId", list_r7.taskListId)("userId", list_r7.userId)("loggedInUser", ctx_r2.userId)("flagOperationForFriend", ctx_r2.flagDisplayingFriendsItem);
} }
function TasklistComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You are creating... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-create-task", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notifyNewTaskList", function TasklistComponent_ng_template_33_Template_app_create_task_notifyNewTaskList_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.addNewTaskList($event); })("notifyNewTask", function TasklistComponent_ng_template_33_Template_app_create_task_notifyNewTask_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.addNewTask($event); })("notifyNewSubTask", function TasklistComponent_ng_template_33_Template_app_create_task_notifyNewSubTask_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.addNewSubTask($event); })("closeModal", function TasklistComponent_ng_template_33_Template_app_create_task_closeModal_4_listener() { const modal_r18 = ctx.$implicit; return modal_r18.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasklistComponent_ng_template_33_Template_button_click_6_listener() { const modal_r18 = ctx.$implicit; return modal_r18.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Done? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("operationName", ctx_r4.operationName)("taskListId", ctx_r4.selectedTaskListId)("userId", ctx_r4.selectedUserId)("taskId", ctx_r4.selectedTaskId)("loggedInUser", ctx_r4.userId)("username", ctx_r4.username)("flagOperationForFriend", ctx_r4.flagDisplayingFriendsItem)("usersFriend", ctx_r4.usersFriendList);
} }
function TasklistComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You are editing... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-edit-task", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notifyEditTaskList", function TasklistComponent_ng_template_35_Template_app_edit_task_notifyEditTaskList_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.editTaskLists($event); })("notifyEditTask", function TasklistComponent_ng_template_35_Template_app_edit_task_notifyEditTask_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.postEditTask($event); })("notifyEditSubTask", function TasklistComponent_ng_template_35_Template_app_edit_task_notifyEditSubTask_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.postEditSubTask($event); })("closeModal", function TasklistComponent_ng_template_35_Template_app_edit_task_closeModal_4_listener() { const modal_r25 = ctx.$implicit; return modal_r25.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasklistComponent_ng_template_35_Template_button_click_6_listener() { const modal_r25 = ctx.$implicit; return modal_r25.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Done? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("operationName", ctx_r6.operationName)("taskListId", ctx_r6.selectedTaskListId)("userId", ctx_r6.selectedUserId)("taskId", ctx_r6.selectedTaskId)("subTaskId", ctx_r6.selectedSubTaskId)("name", ctx_r6.selectedTaskName)("status", ctx_r6.selectedTaskStatus)("selectTasksList", ctx_r6.selectTasksList)("selectTasks", ctx_r6.selectTasks)("loggedInUser", ctx_r6.userId)("username", ctx_r6.username)("flagOperationForFriend", ctx_r6.flagDisplayingFriendsItem)("usersFriend", ctx_r6.usersFriendList);
} }
class TasklistComponent {
    constructor(taskListService, _toast, _router, userService, modalService, multiUserService) {
        this.taskListService = taskListService;
        this._toast = _toast;
        this._router = _router;
        this.userService = userService;
        this.modalService = modalService;
        this.multiUserService = multiUserService;
        //init fields
        this.taskLists = [];
        this.subtasks = [];
        this.usersFriendList = [];
        this.toggleLoadMoreTasks = false;
        this.selectTasks = [];
        this.selectTasksList = [];
        this.tasks = [];
        /**multiusers */
        this.toggleOnlineUser = true;
        this.toggleFriendList = true;
        this.authToken = String;
        this.selectedFriendName = String;
        this.toggleBannerDisplay = true;
        this.flagDisplayingFriendsItem = false;
        /**component will emit event ot update
         * task and subtask array in their respective compoenents
         */
        this.notifyNewTaskList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notifyNewTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notifyNewSubTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        const { authToken, firstName, lastName, friends, } = userService.getAutheticatedUserInfo();
        this.userId = userService.getAutheticatedUserInfo().userId;
        this.username = firstName + ' ' + lastName;
        this.authToken = authToken;
        this.selectedUserId = this.userId;
        this.usersFriendList = friends;
        this.page = 0;
    }
    /**document listener for undo process */
    onKeyDown(ev) {
        if (ev.metaKey || (ev.ctrlKey && ev.key === 'z')) {
            console.debug('undo start');
            this.startUndoProcess();
        }
    }
    ngOnInit() {
        console.debug('NGONIT RELOAD_______________TASKLIST');
        this.handeShakeAuthentication();
        //load task list on component load
        this.getAllTaskList(this.userId);
    }
    userLogout() {
        console.debug('user logout');
        this.multiUserService.disconnectUser(this.userId);
        /**redirect to login page */
        setTimeout(() => this._router.navigate(['/login']), 130);
    }
    handeShakeAuthentication() {
        console.debug('listen to hand shake from task-list');
        this.taskListService.autheticateUser().subscribe((data) => {
            this.taskListService.setUser(this.authToken);
        });
    }
    /**set inline users list */
    setOnlineUsers(users) {
        //console.debug('online users::');
        this.onlineUser = users;
    }
    /**toggle friend list */
    showFriendList() {
        //console.debug('Show friend list');
        this.toggleFriendList = !this.toggleFriendList;
        this.toggleOnlineUser = true;
    }
    /**set friend list */
    setFriendList(friends) {
        //console.debug('Set friend list::', friends);
        this.friendList = friends;
    }
    /**toggle online userlist */
    showOnlineUsers() {
        this.toggleOnlineUser = !this.toggleOnlineUser;
        this.toggleFriendList = true;
    }
    /**open modal */
    open(content, ops, id) {
        //console.debug('modal open::', ops, id);
        this.operationName = ops;
        //console.debug(ops == 'New Task');
        if (ops == 'New Task') {
            //console.debug('new task case');
            this.taskListId = id;
            this.selectedTaskListId = id;
        }
        if (ops == 'New SubTask') {
            //console.debug('new subtask case');
            this.taskId = id;
            this.selectedTaskId = id;
        }
        //console.debug('tasklistid::', this.taskListId);
        //console.debug('taskid::', this.taskId);
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-create' })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed`;
        });
        //console.debug('Modal closed::', this.closeResult);
    }
    /**open edit modal */
    openEdit(content, ops, id, name) {
        console.debug('modal edit open::', ops, id);
        this.operationName = ops;
        console.debug(ops == 'Edit Task');
        if (ops == 'Edit TaskList') {
            console.debug('Edit TaskList case');
            this.taskListId = id;
            this.selectedTaskListId = id;
            this.name = name;
            this.selectedTaskName = name;
            console.debug('selecteduser,selectedtasklistid,name::', this.selectedUserId, this.selectedTaskListId, this.selectedTaskName);
        }
        if (ops == 'Edit Task') {
            console.debug('Edit task option', id);
            /**split the incoming values from task-compnent
             * and send it over to edit-component to complete
             * the edit operation
             */
            const [taskId, name, taskListId, status] = id.split(':');
            this.taskId = taskId;
            this.selectedTaskId = taskId;
            this.selectedTaskName = name;
            this.selectedTaskListId = taskListId;
            this.selectedTaskStatus = status;
            this.selectTasksList = this.taskLists;
        }
        if (ops == 'Edit SubTask') {
            console.debug('edit subtask case');
            /**split the incoming values from task-compnent
             * and send it over to edit-component to complete
             * the edit operation
             */
            const [taskId, name, subTaskId, status, taskListId] = id.split(':');
            //console.debug('list if from tasks::', taskListId);
            this.taskId = taskId;
            this.selectedTaskId = taskId;
            this.name = name;
            this.selectedTaskName = name;
            this.subTaskId = subTaskId;
            this.selectedSubTaskId = subTaskId;
            this.taskListId = taskListId;
            this.selectedTaskListId = taskListId;
            this.status = status;
            this.selectedTaskStatus = status;
            this.selectTasks = [];
        }
        //console.debug('tasklistid::', this.taskListId);
        //console.debug('taskid::', this.taskId);
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-edit' })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed`;
        });
        //console.debug('Modal closed::', this.closeResult);
    }
    /**get all taskLists */
    getAllTaskList(userId) {
        let userdata = {
            userId: userId,
        };
        this.page = 5;
        this.taskListService.getTaskLists(userdata, this.page).subscribe((response) => {
            console.debug('get all task list', response.message);
            this.fetchedAlltaskLists = response.message;
            /**store all tasklists */
            //console.debug('tasklists return::', response.data);
            //this.taskLists.push(...response.data);
            this.taskLists = response.data;
        }, (error) => {
            console.warn('Error fetching task list', error, error);
            this.fetchedAlltaskLists = error.error.message;
            this._toast.open({ text: error.error.message, type: 'danger' });
        });
    }
    /**listen for newly created task list and push it to existing array */
    addNewTaskList(newTaskList) {
        console.debug('refresh new taskList::', newTaskList.name);
        //console.debug('Adding to current list');
        /**notification for delete items for friends */
        console.debug('notify friends for updates');
        /**emit update notifiation to friends if any*/
        let notification = `${this.username} Created a Task`;
        this.notifyFriends(notification);
        return this.taskLists.push(newTaskList);
    }
    /**listen for newly created task  and emitt event to update it */
    addNewTask(userId) {
        //console.debug('addnew task listeners::', newTask);
        //console.debug(typeof newTask);
        this.getAllTaskList(userId);
        //this.notifyNewTask.emit(newTask);
    }
    /**listen for newly created task list and emit event to update it */
    addNewSubTask(userId) {
        //console.debug(typeof newSubTask);
        //console.debug(newSubTask);
        this.getAllTaskList(userId);
        //this.notifyNewSubTask.emit(newSubTask);
    }
    /**toggle create subtask popup */
    openCreateSubTaskForm(taskId, modal) {
        //console.debug('Emit from task component::', taskId);
        this.taskId = taskId;
        this.open(modal, 'New SubTask', taskId);
    }
    /**delete task listeners from task component*/
    deleteTask(values) {
        //console.debug('Delete task listeners::', values, this.userId);
        /**call delete service */
        let [taskId, taskListId, userId] = values.split(':');
        //console.debug(taskListId, taskId);
        let taskInfo = {
            taskListId: taskListId,
            taskId: taskId,
            userId: userId,
            operation: 'delete',
        };
        console.debug('delete taskinfo::', taskInfo);
        this.taskListService.updateTask(taskInfo).subscribe((response) => {
            //console.debug('Delete api reponse::', response.message);
            /**success toast  */
            this._toast.open({ text: response.message, type: 'success' });
            /**notify tasklist component for task updates */
            let refreshUserId;
            if (this.flagDisplayingFriendsItem) {
                refreshUserId = this.selectedUserId;
            }
            else {
                refreshUserId = this.userId;
            }
            console.debug('refreshing for::', refreshUserId);
            this.getAllTaskList(refreshUserId);
        }, (error) => {
            console.debug('Error Deleting Task::', error.error);
            this._toast.open({ text: error.error.message, type: 'danger' });
        });
        /**notification for delete items for friends */
        console.debug('notify friends for updates');
        /**emit update notifiation to friends if any*/
        let notification = `${this.username} deleted a Task`;
        this.notifyFriends(notification);
    }
    /**edit task listeners from task-component */
    editTask(values, modal) {
        console.debug('Edit task modal open::', values, modal);
        this.openEdit(modal, 'Edit Task', values, name);
    }
    /**edit subtask listeners from sub-task-> task-component */
    editSubTask(values, modal) {
        this.openEdit(modal, 'Edit SubTask', values, name);
    }
    /**delete tasklist */
    deleteTaskList(taskListId) {
        //console.debug('delete tasklist::', taskListId);
        /**compute input params based on loggedIn user or friend's selection */
        let userId = this.flagDisplayingFriendsItem
            ? this.selectedUserId
            : this.userId;
        console.debug('deleting task list for ::', userId);
        let taskListInfo = {
            userId: userId,
            taskListId: taskListId,
            operation: 'delete',
        };
        this.taskListService.updateTaskList(taskListInfo).subscribe((response) => {
            //console.debug('Delete task list response::', response.message);
            this._toast.open({ text: response.message, type: 'success' });
            /**delete the entry from current tasklist */
            this.taskLists = this.taskLists.filter((list) => list.taskListId != taskListId);
            /**notification for delete items for friends */
            console.debug('notify friends for updates');
            /**emit update notifiation to friends if any*/
            let notification = `${this.username} deleted a TaskList`;
            this.notifyFriends(notification);
        }, (error) => {
            console.debug('Error deleting tasklist::', error.error);
            this._toast.open({ text: error.error.message, type: 'danger' });
        });
    }
    /**edit task list */
    editTaskLists(value) {
        //console.debug('edit tasklist listener::', value);
        const [name, taskListId] = value.split(':');
        //console.debug('to edit::', name, taskListId);
        /**update tasklist name */
        this.taskLists.filter((list) => {
            if (list.taskListId === taskListId) {
                list.name = name;
                return list;
            }
        });
    }
    postEditTask(value) {
        this.getAllTaskList(value);
    }
    postEditSubTask(value) {
        this.getAllTaskList(value);
    }
    getFriendsItems(selectedFriend) {
        console.debug('listen to friend selection::', selectedFriend);
        let [friendName, friendUserId] = selectedFriend.split(':');
        /**hide the friendlist div */
        this.toggleFriendList = true;
        /**switch flag to friend's view */
        this.flagDisplayingFriendsItem = true;
        /**fetch taskLists for friend and add to existing taskList array */
        this.selectedUserId = friendUserId;
        this.selectedFriendName = friendName;
        /**display banner */
        this.toggleBannerDisplay = false;
        console.debug('get all task tasklist for friends::');
        this.getAllTaskList(friendUserId);
        /**filter the current task list based on current USERID i.e
         * loggedIn user or selected friend
         */
        this.taskLists = this.taskLists.filter((list) => {
            list.userId !== this.userId;
        });
        console.debug('tasklist::', this.taskLists);
        /**toast for friend's selection */
        this._toast.open({
            text: `opening tasks for ${friendName}`,
            type: 'info',
        });
    }
    /**reload friendly updates */
    reloadFriendlyUpdates(value) {
        console.debug('reload listener::', value);
        this.getAllTaskList(value);
    }
    /**refresh page for showLoggedInUsersTask i.e.
     * switch from friend's view to seld
     *
     */
    showLoggedInUsersTask(userId) {
        console.debug('reload for self');
        this.getAllTaskList(userId);
        /**hide friend's banner */
        this.toggleBannerDisplay = true;
    }
    /**utitlity method for realtime update notification  */
    notifyFriends(notification) {
        console.debug('notify friends for updates');
        /**emit update notifiation to friends if any*/
        if (this.usersFriendList.length !== 0) {
            console.debug('updates string::', notification, this.usersFriendList);
            this.multiUserService.notifyFriendsForUpdates(notification, this.usersFriendList);
        }
    }
    /**notification for sub task deeltion */
    notifyFriendsSTaskDelete(value) {
        console.debug('notification for sub task deletion');
        let notification = `${this.username} deleted a SubTask`;
        this.notifyFriends(notification);
    }
    /**listener for friendly task updates */
    friendlyUpdatesListener() {
        let toastString;
        let friendList = [];
        console.debug('Friendly task updates');
        this.multiUserService.friendlyTaskUpdates().subscribe((updates) => {
            console.debug('updates listener::', updates);
            if (typeof updates === 'string') {
                toastString = updates;
                console.debug('toast string::', toastString);
            }
            else {
                friendList = updates;
                console.debug('friendlist::', updates);
            }
            console.debug('is friend::', friendList, this.userId);
            if (friendList.length !== 0) {
                friendList.map((fr) => {
                    if (fr !== null && fr === this.userId) {
                        console.debug('Found friend');
                        this._toast.open({ text: toastString, type: 'dark' });
                        //emit reload tasklist event
                        console.debug("reloading task for  ,since it's a friend");
                        this.getAllTaskList(this.userId);
                    }
                });
            }
        });
    }
    startUndoProcess() {
        console.debug('Start undo process::by the current user forthe current user');
        console.debug('loggedIn USER:', this.userId);
        console.debug('selected/friendID::', this.selectedUserId);
        /**read the latest  updates done for the selctedUser
         * which will be either current user or if he is viewing task for
         * a friend
         * -->call fetchhistoric data api
         * -->on success response reload the tasklist for the selected user
         */
        let userInfo = {
            userId: this.selectedUserId,
        };
        this.taskListService.revertLatestChange(userInfo).subscribe((response) => {
            console.debug('revert changes api response:', response);
            if (response.status === 200) {
                console.debug('Revert-Success::', response.message);
                console.debug('Reloading the current tasklist');
                /**timeout to fetch the updated db data */
                setTimeout(() => {
                    this.getAllTaskList(this.selectedUserId);
                    this._toast.open({ text: response.message, type: 'success' });
                }, 1000);
                /**notify friends about changes */
                let notification = `${this.username} Reverted a Change`;
                this.notifyFriends(notification);
            }
            else {
                this._toast.open({ text: response.message, type: 'danger' });
            }
        }, (error) => {
            console.debug('Revert Change API Error::', error.error);
            this._toast.open({ text: error.error.message, type: 'danger' });
        });
    }
    /**load more tasks */
    loadMoreTaskList() {
        console.debug('load more tasks');
        if (this.page === 0 || this.page < 0) {
            this.page = 3;
        }
        else {
            this.page = --this.page;
        }
        let currentTaskList = this.taskLists;
        console.debug('current task::', currentTaskList);
        console.debug('task lists length::', this.taskLists.length);
        let user = {
            userId: this.selectedUserId,
        };
        this.taskListService.getTaskLists(user, this.page).subscribe((response) => {
            console.debug('resposne laod more tasks::', response.data);
            let result = response.data;
            this.taskLists = response.data;
            console.debug('final tasks::', this.taskLists);
        }, (error) => {
            console.debug('error load::', error.error);
        });
    }
}
TasklistComponent.ɵfac = function TasklistComponent_Factory(t) { return new (t || TasklistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tasklist_service__WEBPACK_IMPORTED_MODULE_1__["TasklistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["Toaster"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_multiuser_multi_user_service__WEBPACK_IMPORTED_MODULE_6__["MultiUserService"])); };
TasklistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasklistComponent, selectors: [["app-tasklist"]], viewQuery: function TasklistComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollMe = _t.first);
    } }, hostBindings: function TasklistComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TasklistComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, outputs: { notifyNewTaskList: "notifyNewTaskList", notifyNewTask: "notifyNewTask", notifyNewSubTask: "notifyNewSubTask" }, decls: 40, vars: 14, consts: [[1, "container"], [3, "click"], ["src", "/assets/addListIcon.png", 1, "addList"], [1, "logout"], [1, "btn", "btn-outline-dark", 3, "click"], [1, "userinfo"], [1, "figure"], ["src", "/assets/loginUser.png", "alt", "...", 1, "figure-img", "img-fluid", "rounded", 2, "width", "30px", "height", "30px"], [1, "figure-caption", "badge", "badge-success", 2, "margin-left", "25px"], [1, "undo", 3, "click"], [3, "hidden"], [1, "displayBanner"], ["type", "button", 1, "btn", "btn-success", 2, "margin-top", "20px", 3, "click"], ["class", "badge badge-light", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", 2, "margin-top", "20px", "margin-left", "5px", 3, "click"], [3, "hidden", "userId", "username", "usersFriend", "onlineUsers"], [3, "hidden", "userId", "username", "friends", "selectedFriend", "reloadTaskList"], [1, "row"], ["class", "col-md-5 mt-4", 4, "ngFor", "ngForOf"], ["createModal", ""], ["editModal", ""], [1, "loadtasks", 3, "hidden"], [1, "badge", "badge-pill", "badge-danger", 3, "click"], [1, "badge", "badge-light"], [1, "col-md-5", "mt-4"], ["scrollBar", ""], [1, "card", 2, "width", "22rem"], [1, "card-header"], [1, "taskListHeader"], ["src", "/assets/addtaskicon.png", 1, "add", 3, "click"], ["src", "/assets/removetaskicon.png", 1, "add", 3, "click"], ["src", "/assets/edit.png", 1, "add", 3, "click"], [3, "taskListId", "userId", "loggedInUser", "flagOperationForFriend", "notify", "delete", "edit", "editSTask", "notifyForSTaskDelete"], [1, "modal-header"], ["id", "modal-create", 1, "modal-title"], [1, "modal-body"], [3, "operationName", "taskListId", "userId", "taskId", "loggedInUser", "username", "flagOperationForFriend", "usersFriend", "notifyNewTaskList", "notifyNewTask", "notifyNewSubTask", "closeModal"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["id", "modal-edit", 1, "modal-title"], [3, "operationName", "taskListId", "userId", "taskId", "subTaskId", "name", "status", "selectTasksList", "selectTasks", "loggedInUser", "username", "flagOperationForFriend", "usersFriend", "notifyEditTaskList", "notifyEditTask", "notifyEditSubTask", "closeModal"]], template: function TasklistComponent_Template(rf, ctx) { if (rf & 1) {
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasklistComponent_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34); return ctx.open(_r3, "New TaskList", ""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Task List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasklistComponent_Template_button_click_7_listener() { return ctx.userLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "figure", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "figcaption", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasklistComponent_Template_a_click_15_listener() { return ctx.startUndoProcess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Undo Last Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasklistComponent_Template_button_click_18_listener() { return ctx.showLoggedInUsersTask(ctx.userId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " My Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasklistComponent_Template_button_click_22_listener() { return ctx.showOnlineUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Online Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TasklistComponent_span_24_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasklistComponent_Template_button_click_25_listener() { return ctx.showFriendList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Friend List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TasklistComponent_span_27_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-online-users", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onlineUsers", function TasklistComponent_Template_app_online_users_onlineUsers_28_listener($event) { return ctx.setOnlineUsers($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-friend-list", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("friends", function TasklistComponent_Template_app_friend_list_friends_29_listener($event) { return ctx.setFriendList($event); })("selectedFriend", function TasklistComponent_Template_app_friend_list_selectedFriend_29_listener($event) { return ctx.getFriendsItems($event); })("reloadTaskList", function TasklistComponent_Template_app_friend_list_reloadTaskList_29_listener($event) { return ctx.reloadFriendlyUpdates($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, TasklistComponent_div_32_Template, 10, 5, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, TasklistComponent_ng_template_33_Template, 8, 8, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, TasklistComponent_ng_template_35_Template, 8, 13, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasklistComponent_Template_span_click_38_listener() { return ctx.loadMoreTaskList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "load more task lists...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.toggleBannerDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Currently showing Tasks for ", ctx.selectedFriendName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onlineUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.friendList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.toggleOnlineUser)("userId", ctx.userId)("username", ctx.username)("usersFriend", ctx.usersFriendList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.toggleFriendList)("userId", ctx.userId)("username", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.taskLists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.toggleLoadMoreTasks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _multiuser_online_users_online_users_component__WEBPACK_IMPORTED_MODULE_8__["OnlineUsersComponent"], _multiuser_friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_9__["FriendListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_10__["TasksComponent"], _shared_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_11__["CreateTaskComponent"], _shared_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_12__["EditTaskComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n}\n.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%] {\n  border-left: 5px solid green;\n}\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border-left: 5px solid red;\n}\n.add[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\nspan[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.addList[_ngcontent-%COMP%] {\n  margin-left: 14px;\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n}\nimg[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.createTask[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  box-sizing: border-box;\n  border-radius: 12px;\n  padding: 25px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);\n  width: 200px;\n  height: 200px;\n}\n.logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n.taskListHeader[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: flex-start;\n  justify-content: flex-end;\n  margin-top: -21px;\n}\n.displayBanner[_ngcontent-%COMP%] {\n  display: flex;\n  box-sizing: border-box;\n  justify-content: center;\n}\n.logout[_ngcontent-%COMP%] {\n  display: flex;\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n  justify-content: flex-end;\n}\n.undo[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-weight: bold;\n  font-size: small;\n}\n.undo[_ngcontent-%COMP%]:hover {\n  color: rgb(209, 0, 0);\n}\n.loadtasks[_ngcontent-%COMP%] {\n  display: flex;\n  box-sizing: border-box;\n  margin-top: 80px;\n  justify-content: center;\n  margin-right: 90px;\n  color: white;\n  width: auto;\n}\n.tasklist[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  position: relative;\n}\n@media only screen and (max-width: 725px) {\n  row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay90YXNrbGlzdC90YXNrbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7O0VBRUUsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0MsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdGFza2xpc3QvdGFza2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG4ubmctdmFsaWRbcmVxdWlyZWRdLFxuLm5nLXZhbGlkLnJlcXVpcmVkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmVlbjtcbn1cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuLmFkZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5zcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFkZExpc3Qge1xuICBtYXJnaW4tbGVmdDogMTRweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNyZWF0ZVRhc2sge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG4ubG9nb3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLnRhc2tMaXN0SGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogLTIxcHg7XG59XG4uZGlzcGxheUJhbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxvZ291dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4udW5kbyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG4udW5kbzpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMjA5LCAwLCAwKTtcbn1cbi5sb2FkdGFza3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA5MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiBhdXRvO1xufVxuLnRhc2tsaXN0IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzI1cHgpIHtcbiAgcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasklistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tasklist',
                templateUrl: './tasklist.component.html',
                styleUrls: ['./tasklist.component.css'],
            }]
    }], function () { return [{ type: _tasklist_service__WEBPACK_IMPORTED_MODULE_1__["TasklistService"] }, { type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["Toaster"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: _multiuser_multi_user_service__WEBPACK_IMPORTED_MODULE_6__["MultiUserService"] }]; }, { scrollMe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scrollBar', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], notifyNewTaskList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], notifyNewTask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], notifyNewSubTask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/task/tasks/tasks.component.ts":
/*!***********************************************!*\
  !*** ./src/app/task/tasks/tasks.component.ts ***!
  \***********************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _task_tasklist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../task/tasklist.service */ "./src/app/task/tasklist.service.ts");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toast-notifications */ "./node_modules/ngx-toast-notifications/__ivy_ngcc__/fesm2015/ngx-toast-notifications.js");
/* harmony import */ var _multiuser_multi_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../multiuser/multi-user.service */ "./src/app/multiuser/multi-user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _subtasks_subtasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../subtasks/subtasks.component */ "./src/app/task/subtasks/subtasks.component.ts");







function TasksComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksComponent_li_1_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const task_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.emitSubTaskCreation(task_r1.taskId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksComponent_li_1_Template_img_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const task_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.emitTaskDeletion(task_r1.taskId, task_r1.taskListId, task_r1.userId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksComponent_li_1_Template_img_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const task_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.emitEditTask(task_r1.taskId, task_r1.name, task_r1.taskListId, task_r1.status); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-subtasks", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("delete", function TasksComponent_li_1_Template_app_subtasks_delete_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.deleteSubTask($event); })("edit", function TasksComponent_li_1_Template_app_subtasks_edit_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const task_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.editSubTask($event, task_r1.taskListId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("taskId", task_r1.taskId)("userId", ctx_r0.userId);
} }
class TasksComponent {
    constructor(taskService, _toast, multiUserService) {
        this.taskService = taskService;
        this._toast = _toast;
        this.multiUserService = multiUserService;
        //component will emitt
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editSTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notifyForSTaskDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleCreateTaskForm = false;
    }
    ngOnInit() {
        this.getAllTask(this.taskListId, this.userId);
    }
    getAllTask(taskListId, userId) {
        let taskInfo = {
            taskListId: this.taskListId,
            userId: this.userId,
        };
        //console.debug('input:', taskInfo);
        this.taskService.getTasks(taskInfo).subscribe((response) => {
            console.debug('get all task res::', response.message);
            /**updated tasks */
            this.tasks = response.data;
            //console.debug('All tasks::', this.tasks);
        }, (error) => {
            console.warn('Error::', error.error);
        });
    }
    /**toggle create task pop up */
    openCreateTaskForm(taskListId) {
        this.toggleCreateTaskForm = !this.toggleCreateTaskForm;
        console.debug('Tasklist id after popup::', taskListId);
        this.taskListId = taskListId;
    }
    /**Reload tasklist post task new create */
    addNewTask(newTask) {
        console.debug('newtask in task component::', newTask);
        return this.tasks.push(newTask);
    }
    /**emitt subtask creation */
    emitSubTaskCreation(taskId) {
        console.debug('Emit creation');
        this.notify.emit(taskId);
    }
    /**emit subtask deletion */
    emitTaskDeletion(taskId, taskListId, userId) {
        console.debug('Emit deletetion', taskId, taskListId, userId);
        this.delete.emit(`${taskId}:${taskListId}:${userId}`);
    }
    /**emit edit subtask*/
    editSubTask(values, taskListId) {
        console.debug('Emit edit subtask:', values);
        this.editSTask.emit(`${values}:${taskListId}`);
    }
    /**emit edit task event */
    emitEditTask(taskId, name, taskListId, status) {
        console.debug('Emit edit task::', taskId, name, taskListId);
        this.edit.emit(`${taskId}:${name}:${taskListId}:${status}`);
    }
    /**delete sub task */
    deleteSubTask(values) {
        console.debug('Delete task listeners::', values, this.userId);
        /**call delete service */
        let [taskId, subTaskId] = values.split(':');
        console.debug(subTaskId, taskId);
        let taskInfo = {
            subTaskId: subTaskId,
            taskId: taskId,
            operation: 'delete',
            userId: this.userId,
        };
        this.taskService.updateSubTask(taskInfo).subscribe((response) => {
            console.debug('Delete api reponse::', response);
            /**success toast  */
            this._toast.open({ text: response.message, type: 'success' });
            /**refresh for specific user */
            let refreshUserId;
            if (this.flagOperationForFriend) {
                refreshUserId = this.userId;
            }
            else {
                refreshUserId = this.loggedInUser;
            }
            console.debug('refreshing for::', refreshUserId);
            this.getAllTask(refreshUserId, taskId);
            this.notifyForSTaskDelete.emit();
        }, (error) => {
            console.debug('Error Deleting Task::', error.error);
            this._toast.open({ text: error.error.message, type: 'danger' });
        });
    }
}
TasksComponent.ɵfac = function TasksComponent_Factory(t) { return new (t || TasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_tasklist_service__WEBPACK_IMPORTED_MODULE_1__["TasklistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["Toaster"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_multiuser_multi_user_service__WEBPACK_IMPORTED_MODULE_3__["MultiUserService"])); };
TasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasksComponent, selectors: [["app-tasks"]], inputs: { taskListId: "taskListId", userId: "userId", name: "name", loggedInUser: "loggedInUser", flagOperationForFriend: "flagOperationForFriend" }, outputs: { notify: "notify", delete: "delete", edit: "edit", editSTask: "editSTask", notifyForSTaskDelete: "notifyForSTaskDelete" }, decls: 2, vars: 1, consts: [[1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "task"], [1, "taskHeader"], ["src", "/assets/addtaskicon.png", 1, "add", 3, "click"], ["src", "/assets/removetaskicon.png", 1, "add", 3, "click"], ["src", "/assets/edit.png", 1, "add", 3, "click"], [3, "taskId", "userId", "delete", "edit"]], template: function TasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TasksComponent_li_1_Template, 8, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _subtasks_subtasks_component__WEBPACK_IMPORTED_MODULE_5__["SubtasksComponent"]], styles: [".add[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.remove[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.add[_ngcontent-%COMP%]::hover {\n  border-color: blueviolet;\n}\n.remove[_ngcontent-%COMP%]::hover {\n  border-color: blueviolet;\n}\n.task[_ngcontent-%COMP%] {\n  color: #b95143;\n}\n.subtask[_ngcontent-%COMP%] {\n  float: right;\n}\n.taskHeader[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: flex-start;\n  justify-content: flex-end;\n  margin-top: -21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay90YXNrcy90YXNrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdGFzay90YXNrcy90YXNrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmVtb3ZlIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hZGQ6OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiBibHVldmlvbGV0O1xufVxuLnJlbW92ZTo6aG92ZXIge1xuICBib3JkZXItY29sb3I6IGJsdWV2aW9sZXQ7XG59XG4udGFzayB7XG4gIGNvbG9yOiAjYjk1MTQzO1xufVxuLnN1YnRhc2sge1xuICBmbG9hdDogcmlnaHQ7XG59XG4udGFza0hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IC0yMXB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tasks',
                templateUrl: './tasks.component.html',
                styleUrls: ['./tasks.component.css'],
            }]
    }], function () { return [{ type: _task_tasklist_service__WEBPACK_IMPORTED_MODULE_1__["TasklistService"] }, { type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["Toaster"] }, { type: _multiuser_multi_user_service__WEBPACK_IMPORTED_MODULE_3__["MultiUserService"] }]; }, { taskListId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], userId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loggedInUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], flagOperationForFriend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], notify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], delete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], edit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], editSTask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], notifyForSTaskDelete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toast-notifications */ "./node_modules/ngx-toast-notifications/__ivy_ngcc__/fesm2015/ngx-toast-notifications.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/recoverPassword"]; };
class LoginComponent {
    constructor(userService, _router, toaster) {
        this.userService = userService;
        this._router = _router;
        this.toaster = toaster;
    }
    ngOnInit() { }
    //login
    loginUser() {
        let userData = {
            email: this.email,
            password: this.password,
        };
        this.userService.loginService(userData).subscribe(
        /**Handle sucess */
        (response) => {
            console.debug('Login service res', response);
            this.loginResponse = `${response.message} --Redirecting To Your Tasks`;
            /**get user info from response and store as cookie for auth*/
            const { firstName, lastName, email, userId, authToken } = response.data;
            ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('name', firstName + ' ' + lastName);
            ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('authToken', authToken);
            ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('email', email);
            ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('userId', userId);
            /**Set to localstorage */
            this.userService.setAuthenticatedUser(response.data);
            /**toast sucess */
            this.toaster.open({ text: response.message, type: 'success' });
            /**Redirect to TASK View */
            setTimeout(() => this._router.navigate(['/taskList']), 3000);
        }, 
        /**handle errors */
        (error) => {
            console.warn('Error Login', error);
            this.loginResponse = error.error.message;
            this.toaster.open({ text: 'Login error', type: 'danger' });
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__["Toaster"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 34, vars: 12, consts: [[1, "container"], [1, "loginbox"], ["src", "/assets/loginUser.png"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group"], ["for", "email"], ["type", "text", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_email", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "password"], ["name", "password", "type", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_pwd", "ngModel"], [1, "mt-2", 3, "disabled"], [1, "ml-2", 3, "routerLink"], [1, "recover"], [1, "mt-10", "alert-link", 2, "color", "#020302", 3, "routerLink"], [1, "blockquote", "text-right"], [1, "blockquote-footer"], [1, "mt-10", "alert-link", 2, "color", "#608b60", 3, "routerLink"], ["title", "Source Title"], [1, "loginMessage"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Email is Required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Password Is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "RecoverPassword ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "blockquote", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "footer", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Back To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "cite", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "router-outlet");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r2.valid || _r2.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loginResponse);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n}\n.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%] {\n  border-left: 5px solid green;\n}\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border-left: 5px solid red;\n}\n.loginbox[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  box-sizing: border-box;\n  border-radius: 20px;\n  padding: 25px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);\n  width: 300px;\n}\nlabel[_ngcontent-%COMP%] {\n  color: rgb(153, 149, 133);\n  font-weight: bold;\n}\n.message[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  color: gold;\n  font-weight: bolder;\n}\n.recover[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: black;\n}\na[_ngcontent-%COMP%] {\n  color: #c7c6bf;\n}\n@media only screen and (max-width: 725px) {\n  .loginbox[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7O0VBRUUsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0MsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG4ubmctdmFsaWRbcmVxdWlyZWRdLFxuLm5nLXZhbGlkLnJlcXVpcmVkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmVlbjtcbn1cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuLmxvZ2luYm94IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMjVweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgd2lkdGg6IDMwMHB4O1xufVxubGFiZWwge1xuICBjb2xvcjogcmdiKDE1MywgMTQ5LCAxMzMpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tZXNzYWdlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IGdvbGQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4ucmVjb3ZlciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbmEge1xuICBjb2xvcjogI2M3YzZiZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjVweCkge1xuICAubG9naW5ib3gge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css'],
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__["Toaster"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/recoverpassword/recoverpassword.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/recoverpassword/recoverpassword.component.ts ***!
  \*******************************************************************/
/*! exports provided: RecoverpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverpasswordComponent", function() { return RecoverpasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toast-notifications */ "./node_modules/ngx-toast-notifications/__ivy_ngcc__/fesm2015/ngx-toast-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






const _c0 = function () { return ["/home"]; };
class RecoverpasswordComponent {
    constructor(_userService, _toaster, _router) {
        this._userService = _userService;
        this._toaster = _toaster;
        this._router = _router;
        this.hideRecoveryDiv = false;
        this.equalPwd = false;
        this.acceptedPwd = false;
        this.loadSpinner = false;
    }
    ngOnInit() {
        /**Validate password */
    }
    /**compare password */
    comparePassword() {
        this.equalPwd = this.password === this.cfnpassword;
        return this.equalPwd;
    }
    validatePassword() {
        let pattern = new RegExp('^[A-Za-z0-9]\\w{8,64}$');
        if (this.password === undefined)
            return true;
        this.acceptedPwd = pattern.test(this.password.toString());
        return this.acceptedPwd;
    }
    /**send Recovery code */
    sendRecoveryCode() {
        let user = {
            email: this.email,
        };
        console.debug('Send recovery ccode-service call', user);
        /**Switch on loader */
        this.loadSpinner = true;
        this.loadMessage = 'Sending Email...';
        this._userService.recoverPassword(user).subscribe((response) => {
            console.debug('Recovery response', response);
            /**Toast */
            /**Switch off loader */
            this.loadSpinner = false;
            this._toaster.open({ text: response.message, type: 'success' });
            this.recoveryMessage = response.data.Operation;
            if (response.status === 200)
                this.showResetPassword = true;
        }, (error) => {
            console.warn('Error', error.error);
            this._toaster.open({ text: error.error.message, type: 'danger' });
        });
    }
    /**Reset Password */
    resetPassword() {
        console.debug('reset Password');
        let resetInfo = {
            email: this.email,
            recoveryCode: this.code,
            password: this.password,
        };
        /**Switch on loader */
        this.loadSpinner = true;
        this.loadMessage = 'Resetting Password....';
        this._userService.resetPassword(resetInfo).subscribe((response) => {
            console.debug('reset api res', response);
            /**Switch off loader */
            this.loadSpinner = false;
            /**Compose sucess message */
            this.resetResponse = `${response.message}-Redirecting to Login...`;
            /**Toast sucess */
            this._toaster.open({ text: response.message, type: 'success' });
            /**hide the recovery div */
            if (response.status === 200)
                this.hideRecoveryDiv = true;
            /**Rediret to login */
            setTimeout(() => this._router.navigate(['/login']), 3000);
        }, (error) => {
            console.warn('Error', error.error);
            this.resetResponse = error.error.message;
            this._toaster.open({ text: error.error.message, type: 'danger' });
        });
    }
}
RecoverpasswordComponent.ɵfac = function RecoverpasswordComponent_Factory(t) { return new (t || RecoverpasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["Toaster"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RecoverpasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecoverpasswordComponent, selectors: [["app-recoverpassword"]], decls: 49, vars: 19, consts: [[1, "container", "recovery"], [1, "loader", 3, "hidden"], [1, "recoveryForm", 3, "hidden"], [3, "ngSubmit"], ["recoveryform", "ngForm"], ["for", "recoveryEmail"], ["type", "email", "required", "", "placeholder", "email", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_email", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], [1, "mt-2", 3, "disabled"], [1, "ml-2", 3, "routerLink"], [3, "hidden"], ["resetform", "ngForm"], ["type", "text", "required", "", "name", "code", "placeholder", "recovery code", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_code", "ngModel"], ["type", "password", "required", "", "placeholder", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["_pwd", "ngModel"], ["type", "password", "placeholder", "confirm password", "required", "", "name", "cfnpassword", 1, "form-control", "mt-1", 3, "ngModel", "ngModelChange", "click"], ["_cpwd", "ngModel"]], template: function RecoverpasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recover Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Recovery Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " will be sent to your registered email. Use the code to reset your password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RecoverpasswordComponent_Template_form_ngSubmit_11_listener() { return ctx.sendRecoveryCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Recovery Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecoverpasswordComponent_Template_input_ngModelChange_15_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Email is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Send Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Enter Recovery Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "form", 3, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RecoverpasswordComponent_Template_form_ngSubmit_28_listener() { return ctx.resetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecoverpasswordComponent_Template_input_ngModelChange_30_listener($event) { return ctx.code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Code Is Required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecoverpasswordComponent_Template_input_ngModelChange_34_listener($event) { return ctx.password = $event; })("click", function RecoverpasswordComponent_Template_input_click_34_listener() { return ctx.validatePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Password Is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Password should be alphanumeric and of min length 8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecoverpasswordComponent_Template_input_ngModelChange_40_listener($event) { return ctx.cfnpassword = $event; })("click", function RecoverpasswordComponent_Template_input_click_40_listener() { return ctx.validatePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Password doesn't match ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Reset Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "router-outlet");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.loadSpinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loadMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showResetPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recoveryMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showResetPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r3.valid || _r3.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r4.valid || _r4.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.validatePassword());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cfnpassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.comparePassword());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r2.form.valid || !ctx.acceptedPwd || !ctx.equalPwd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.resetResponse);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n}\n.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%] {\n  border-left: 5px solid green;\n}\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border-left: 5px solid red;\n}\np[_ngcontent-%COMP%] {\n  color: #f75e5e;\n}\n.recovery[_ngcontent-%COMP%] {\n  margin-top: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZWNvdmVycGFzc3dvcmQvcmVjb3ZlcnBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTs7RUFFRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVjb3ZlcnBhc3N3b3JkL3JlY292ZXJwYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbn1cbi5uZy12YWxpZFtyZXF1aXJlZF0sXG4ubmctdmFsaWQucmVxdWlyZWQge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGdyZWVuO1xufVxuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG59XG5wIHtcbiAgY29sb3I6ICNmNzVlNWU7XG59XG4ucmVjb3Zlcnkge1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecoverpasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recoverpassword',
                templateUrl: './recoverpassword.component.html',
                styleUrls: ['./recoverpassword.component.css'],
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["Toaster"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var country_code_lookup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! country-code-lookup */ "./node_modules/country-code-lookup/index.js");
/* harmony import */ var country_code_lookup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(country_code_lookup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var country_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! country-js */ "./node_modules/country-js/index.js");
/* harmony import */ var country_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(country_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toast-notifications */ "./node_modules/ngx-toast-notifications/__ivy_ngcc__/fesm2015/ngx-toast-notifications.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function SignupComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cntry_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cntry_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cntry_r10);
} }
const _c0 = function () { return ["/home"]; };
class SignupComponent {
    constructor(userService, _router, _toaster) {
        this.userService = userService;
        this._router = _router;
        this._toaster = _toaster;
        this.equalPwd = false;
        this.acceptedPwd = false;
        this.countriesArray = [];
        this.countries = [];
        this.ctr = 'country';
        this.passwordError = `Password should have at least 1 Lowercase,Uppercase,Special
    Character & of min length 8 `;
    }
    ngOnInit() {
        /**Compute list of countries */
        Object.entries(country_code_lookup__WEBPACK_IMPORTED_MODULE_1___default.a.countries).map((entry) => this.countriesArray.push(entry[1]));
        this.countriesArray.map((ctr) => {
            this.countries.push(ctr.country);
        });
    }
    selectCountryCode(value) {
        //console.debug('select code:', `+${n.search(value)[0].phone}`);
        this.countrycode = `+${country_js__WEBPACK_IMPORTED_MODULE_2___default.a.search(value)[0].phone}`;
        //console.debug('cc::', this.countrycode);
        this.mobile = this.countrycode;
    }
    /**compare password */
    comparePassword() {
        this.equalPwd = this.password === this.cfnpassword;
        return this.equalPwd;
    }
    validatePassword() {
        let pattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
        if (this.password === undefined)
            return true;
        this.acceptedPwd = pattern.test(this.password.toString());
        return this.acceptedPwd;
    }
    /**Signup function */
    signUpUser() {
        console.debug('Signup user');
        let newuser = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            mobile: this.mobile,
            password: this.password,
        };
        this.userService.signUpService(newuser).subscribe((response) => {
            console.debug('Sign up response', response);
            if (response.status === 400 &&
                response.data[0] === 'Invalid Password') {
                this.signUpResponse = this.passwordError;
            }
            if (response.status === 200) {
                this.signUpResponse = `${response.message}, Redirecting to Login`;
                /**Toast sucess */
                this._toaster.open({ text: response.message, type: 'success' });
                /**Route to Login page */
                setTimeout(() => this._router.navigate(['/login']), 2000);
            }
        }, (error) => {
            console.warn('SignUpError', error.error);
            console.debug('error_msg', error.error.message);
            this.signUpResponse = error.error.message;
            this._toaster.open({ text: error.error.message, type: 'danger' });
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_5__["Toaster"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 43, vars: 21, consts: [[1, "container"], [1, "signupbox"], [3, "ngSubmit"], ["signUpForm", "ngForm"], ["type", "text", "name", "firstname", "placeholder", "Enter FirstName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_fname", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["type", "text", "name", "lastname", "placeholder", "Enter LastName", "required", "", 1, "form-control", "mt-1", 3, "ngModel", "ngModelChange"], ["_lname", "ngModel"], ["type", "email", "placeholder", "Enter Valid Email", "required", "", "name", "email", 1, "form-control", "mt-1", 3, "ngModel", "ngModelChange"], ["_email", "ngModel"], ["required", "", "name", "country", 1, "form-control", "mt-1", 3, "ngModel", "ngModelChange", "change"], ["ctry", "", "_country", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Mobile", "required", "", "name", "mobile", 1, "form-control", "mt-1", 3, "ngModel", "ngModelChange"], ["_mob", "ngModel"], ["type", "password", "placeholder", "password", "required", "", "name", "password", 1, "form-control", "mt-1", 3, "ngModel", "ngModelChange"], ["_pwd", "ngModel"], ["type", "password", "placeholder", "confirm password", "required", "", "name", "cfnpassword", 1, "form-control", "mt-1", 3, "ngModel", "ngModelChange"], ["_cpwd", "ngModel"], [1, "mt-2", 3, "disabled"], [1, "ml-2", 3, "routerLink"], ["role", "alert", 1, "alert", "alert-warning", "mt-2", 3, "hidden"], [3, "value"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_4_listener() { return ctx.signUpUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_6_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " FirstName is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_10_listener($event) { return ctx.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " LastName is Required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_14_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Email is required for login and password recovery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_select_ngModelChange_18_listener($event) { return ctx.country = $event; })("change", function SignupComponent_Template_select_change_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.selectCountryCode(_r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignupComponent_option_21_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_22_listener($event) { return ctx.mobile = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Mobile is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_26_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Password Is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_32_listener($event) { return ctx.cfnpassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Password doesn't match ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " SignUp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r2.valid || _r2.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r3.valid || _r3.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r7.valid || _r7.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r8.valid || _r8.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.validatePassword());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.passwordError, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cfnpassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.comparePassword());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid || !ctx.acceptedPwd || !ctx.equalPwd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.signUpResponse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.signUpResponse, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n}\n.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%] {\n  border-left: 5px solid green;\n}\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border-left: 5px solid red;\n}\n.signupbox[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  max-width: 420px;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\nh3[_ngcontent-%COMP%] {\n  color: #66655d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTs7RUFFRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuLm5nLXZhbGlkW3JlcXVpcmVkXSxcbi5uZy12YWxpZC5yZXF1aXJlZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JlZW47XG59XG4ubmctaW52YWxpZDpub3QoZm9ybSkge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbn1cbi5zaWdudXBib3gge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmgzIHtcbiAgY29sb3I6ICM2NjY1NWQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css'],
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_5__["Toaster"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _recoverpassword_recoverpassword_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recoverpassword/recoverpassword.component */ "./src/app/user/recoverpassword/recoverpassword.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _multiuser_multiuser_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../multiuser/multiuser.module */ "./src/app/multiuser/multiuser.module.ts");












class UserModule {
}
UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserModule_Factory(t) { return new (t || UserModule)(); }, providers: [_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _multiuser_multiuser_module__WEBPACK_IMPORTED_MODULE_9__["MultiuserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                {
                    path: 'recoverPassword',
                    component: _recoverpassword_recoverpassword_component__WEBPACK_IMPORTED_MODULE_7__["RecoverpasswordComponent"],
                    pathMatch: 'full',
                },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], _recoverpassword_recoverpassword_component__WEBPACK_IMPORTED_MODULE_7__["RecoverpasswordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _multiuser_multiuser_module__WEBPACK_IMPORTED_MODULE_9__["MultiuserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], _recoverpassword_recoverpassword_component__WEBPACK_IMPORTED_MODULE_7__["RecoverpasswordComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _multiuser_multiuser_module__WEBPACK_IMPORTED_MODULE_9__["MultiuserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                        {
                            path: 'recoverPassword',
                            component: _recoverpassword_recoverpassword_component__WEBPACK_IMPORTED_MODULE_7__["RecoverpasswordComponent"],
                            pathMatch: 'full',
                        },
                    ]),
                ],
                providers: [_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class UserService {
    constructor(_http) {
        this._http = _http;
        //initiliaze
        this.baseurl = 'http://api.kanbanboard.co.in/api/v1';
    }
    //handle exceptions
    handleError(error) {
        console.error('http Error', error.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error.message);
    }
    //signup
    signUpService(newUser) {
        //console.debug('Signup api call', newUser);
        let signUpRes = this._http.post(`${this.baseurl}/signup`, newUser);
        return signUpRes;
    }
    //login
    loginService(userData) {
        //console.debug('login api call', userData);
        let loginres = this._http.post(`${this.baseurl}/login`, userData);
        return loginres;
    }
    //store authenticated user info
    setAuthenticatedUser(data) {
        //console.debug('Set auth user info', data);
        localStorage.setItem('userInfo', JSON.stringify(data));
    }
    //get authenticated user info
    getAutheticatedUserInfo() {
        //console.debug('get autheticated user info');
        let lc = JSON.parse(localStorage.getItem('userInfo'));
        //console.debug('lc::', lc);
        return lc === null ? '' : lc;
    }
    //recover password
    recoverPassword(user) {
        //console.debug('Recover password for', user);
        let recoverPwdRes = this._http.post(`${this.baseurl}/recoverPassword`, user);
        return recoverPwdRes;
    }
    //reset Password
    resetPassword(user) {
        //console.debug('reset password', user);
        let resetPwdRes = this._http.post(`${this.baseurl}/resetPassword`, user);
        return resetPwdRes;
    }
    //get country
    getCountry() {
        //console.debug('get country');
        let countries = this._http.get('http://country.io/names.json');
        return countries;
    }
    //get country phone code
    getCode() {
        //console.debug('get code');
        let code = this._http.get('http://country.io/phone.json');
        return code;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/saurabh/Documents/Angular/kanbanBoard/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map