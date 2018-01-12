webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Authentication; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Authentication = (function () {
    function Authentication(http, config) {
        this.http = http;
        this.config = config;
    }
    Authentication.prototype.login = function (userName, password) {
        var res = this.http.post(this.config.apiUrl + '/api/Auth/login', { userName: userName, password: password });
        res.subscribe(function (data) {
            localStorage.setItem('currentUser', JSON.stringify(data));
        });
        return res;
    };
    Authentication.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    Authentication = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */]])
    ], Authentication);
    return Authentication;
}());



/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http, config) {
        this.http = http;
        this.config = config;
    }
    UserService.prototype.create = function (user) {
        return this.http.post(this.config.apiUrl + '/api/account/create_account', user, this.jwt());
    };
    UserService.prototype.getCode = function (email) {
        return this.http.post(this.config.apiUrl + '/api/Account/password_recovery_s1', { email: email });
    };
    UserService.prototype.retrievePassword = function (email, password, code) {
        return this.http.put(this.config.apiUrl + '/api/Account/password_recovery_s2', { email: email, password: password, code: code });
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/app-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = (function () {
    function AppConfig() {
        this.apiUrl = 'https://fiiadmission.azurewebsites.net';
    }
    return AppConfig;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentication_guard__ = __webpack_require__("../../../../../src/app/authentication.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recovery_recovery_component__ = __webpack_require__("../../../../../src/app/recovery/recovery.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["b" /* LoginComponent */] },
    { path: 'recovery', component: __WEBPACK_IMPORTED_MODULE_8__recovery_recovery_component__["a" /* RecoveryComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__authentication_guard__["a" /* AuthenticationGuard */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__form_utilities_form_utilities_module__ = __webpack_require__("../../../../../src/app/form-utilities/form-utilities.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__authentication_guard__ = __webpack_require__("../../../../../src/app/authentication.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_utilities_material_utilities_module__ = __webpack_require__("../../../../../src/app/material-utilities/material-utilities.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__reset_pass_reset_pass_component__ = __webpack_require__("../../../../../src/app/reset-pass/reset-pass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__documents_documents_component__ = __webpack_require__("../../../../../src/app/documents/documents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__recovery_recovery_component__ = __webpack_require__("../../../../../src/app/recovery/recovery.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["b" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_18__news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__notifications_notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__reset_pass_reset_pass_component__["a" /* ResetPassComponent */],
                __WEBPACK_IMPORTED_MODULE_21__documents_documents_component__["a" /* DocumentsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* DialogOverviewExampleDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_22__recovery_recovery_component__["a" /* RecoveryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__form_utilities_form_utilities_module__["a" /* FormUtilitiesModule */],
                __WEBPACK_IMPORTED_MODULE_16__material_utilities_material_utilities_module__["a" /* MaterialUtilitiesModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__app_config__["a" /* AppConfig */],
                __WEBPACK_IMPORTED_MODULE_13__authentication_guard__["a" /* AuthenticationGuard */],
                __WEBPACK_IMPORTED_MODULE_12__services_authentication_service__["a" /* Authentication */],
                __WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* DialogOverviewExampleDialogComponent */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/authentication.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationGuard = (function () {
    function AuthenticationGuard(router) {
        this.router = router;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthenticationGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#notifications{\r\n    display: none;\r\n}\r\n\r\n#form{\r\n    display: none;\r\n}\r\n#documents{\r\n    display: none;\r\n}\r\n#reset{\r\n    display: none;\r\n}\r\n#welcome-panel{\r\n    margin-top: 50px;    \r\n    background-color: rgba(255,255,255,0.9);\r\n    margin-bottom: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<body style=\"background:black\">\n  <dashboard-sidenav>\n    <div class=\"dash-container\">\n      <div id=\"news\">\n        <div class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" id=\"welcome-panel\">\n          <h2 class=\"col-md-4 col-md-offset-5 col-xs-offset-3 col-xs-7\" style=\"margin-bottom:20px;\">News</h2>\n          <app-news class=\"col-md-10 col-xs-10 col-md-offset-1\"></app-news>\n        </div>\n      </div>\n    </div>\n    <div class=\"dash-container\">\n      <div id=\"notifications\">\n        <div class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" id=\"welcome-panel\">\n          <h2 class=\"col-md-4 col-md-offset-5 col-xs-offset-2 col-xs-8\" style=\"margin-bottom:20px;\">Notifications</h2>\n          <app-notifications class=\"col-md-10 col-xs-10 col-md-offset-1\">\n          </app-notifications>\n        </div>\n      </div>\n    </div>\n    <div class=\"dash-container\" id=\"form\">\n      <div class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" id=\"welcome-panel\" style=\"word-wrap: break-word;\">\n        <h2 class=\"col-md-4 col-md-offset-5 col-xs-offset-1 col-xs-10\" style=\"margin-bottom:20px;\">Application Form</h2>\n        <app-fii-form class=\"col-md-8 col-md-offset-2\" [fields]=\"fields\">\n        </app-fii-form>\n      </div>\n    </div>\n    <div class=\"dash-container\" id=\"documents\">\n      <div class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" id=\"welcome-panel\">\n        <h2 class=\"col-md-4 col-md-offset-5 col-xs-offset-2 col-xs-8\" style=\"margin-bottom:20px;\">Documents</h2>\n        <app-documents class=\"col-md-8 col-md-offset-2\">\n        </app-documents>\n      </div>\n    </div>\n    <div class=\"dash-container\" id=\"reset\">\n      <div class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" id=\"welcome-panel\">\n        <h2 class=\"col-md-4 col-md-offset-5 col-xs-offset-1 col-xs-10\" style=\"margin-bottom:20px;\">Reset Password</h2>\n        <app-reset-pass class=\"col-md-8 col-md-offset-2\">\n        </app-reset-pass>\n      </div>\n    </div>\n  </dashboard-sidenav>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(userService, authenticationService, router) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.fields = [
            {
                name: 'last-name',
                placeholder: 'Your last name ( from birth certificate )',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'last-name',
                placeholder: 'Your last name ( from identity card )',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'first-name',
                placeholder: 'Your first name',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'full-name',
                placeholder: 'Your father\'s name',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'full-name',
                placeholder: 'Your mother\'s name',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'CNP',
                placeholder: 'Your personal identification number',
                type: 'number',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'gender-select',
                placeholder: 'Gender',
                type: 'select',
                checkChoices: [],
                selectOptions: ['Male', 'Female', 'Non-binary'],
                value: ''
            },
            {
                name: 'date-of-birth',
                placeholder: 'Date of birth',
                type: 'date',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'country',
                placeholder: 'Country',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'district',
                placeholder: 'District',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'city',
                placeholder: 'City',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'citizenship',
                placeholder: 'Citizenship',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'nationality',
                placeholder: 'Nationality',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'ethnicity',
                placeholder: 'Ethnicity',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'first-language',
                placeholder: 'First language',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'marital-status-select',
                placeholder: 'Marital status',
                type: 'select',
                checkChoices: [],
                selectOptions: ['Married', 'Not Married', 'Divorced', 'Widoe(er)', 'Undeclared'],
                value: ''
            },
            {
                name: 'identity-card-series',
                placeholder: 'Identity card series',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'identity-card-serial-number',
                placeholder: 'Identity card serial number',
                type: 'number',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'identity-card-released-by',
                placeholder: 'Identity card released by',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'date-of-release',
                placeholder: 'Date of release',
                type: 'date',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'date-of-expiration',
                placeholder: 'Date of expiration',
                type: 'date',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'permanent-address-select',
                placeholder: 'Permanent address',
                type: 'select',
                checkChoices: [],
                selectOptions: ['Urban', 'Countryside'],
                value: ''
            },
            {
                name: 'full-address',
                placeholder: 'Full address',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'phone-number',
                placeholder: 'Phone number',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'email',
                placeholder: 'E-mail address',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'survey-check-accommodation-1',
                placeholder: 'Do you request accommodation in the period of your studies ?',
                type: 'check',
                checkChoices: ['Yes', 'No'],
                selectOptions: [],
                value: ''
            },
            {
                name: 'survey-check-accommodation-2',
                placeholder: 'Do you request accommodation in the period of admission test?',
                type: 'check',
                checkChoices: ['Yes', 'No'],
                selectOptions: [],
                value: ''
            },
            {
                name: 'survey-check-social-state',
                placeholder: 'Special social state',
                type: 'check',
                checkChoices: ['Came from foster homes', 'Came from foster care', 'Came from single-parent households',
                    'Orphan of one parent', 'Orphan of both parents', 'Candidate falls within disabled people category'],
                selectOptions: [],
                value: ''
            },
            {
                name: 'institution',
                placeholder: 'Institution where the candidate graduated',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'country-of-institution',
                placeholder: 'Country',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'town-of-institution',
                placeholder: 'Town',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'district-of-institution',
                placeholder: 'District',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'domain',
                placeholder: 'Domain/profile',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'studies-duration',
                placeholder: 'Duration of studies',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'graduation-year',
                placeholder: 'Graduation year',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'form-of-education-select',
                placeholder: 'Form of education',
                type: 'select',
                checkChoices: [],
                selectOptions: ['Daily', 'Seral', 'FR', 'ID'],
                value: ''
            },
            {
                name: 'baccalaureate-diploma-series',
                placeholder: 'Baccalaureate diploma series',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'baccalaureate-diploma-number',
                placeholder: 'Baccalaureate diploma number',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'baccalaureate-diploma-released-by',
                placeholder: 'Baccalaureate diploma released by',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'baccalaureate-diploma-released-date',
                placeholder: 'Baccalaureate diploma released date',
                type: 'date',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'enrollment-sheet-number',
                placeholder: 'Enrollment sheet number :',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'studies-abroad-1',
                placeholder: 'Act of recognition/equivalence(released by DPIRV/CNRED) number ',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'studies-abroad-2',
                placeholder: 'Act of recognition/equivalence(released by DPIRV/CNRED) series ',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-check',
                placeholder: 'Student at other faculty/university',
                type: 'check',
                checkChoices: ['Yes', 'No'],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-country',
                placeholder: 'Country',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-town',
                placeholder: 'Town',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-district',
                placeholder: 'District',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-institution-name',
                placeholder: 'Name of the institution',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-faculty-name',
                placeholder: 'Name of the faculty',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'licence-area',
                placeholder: 'Licence area',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'study-program',
                placeholder: 'Study program/specialization',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-form-of-education-select',
                placeholder: 'Form of education',
                type: 'select',
                checkChoices: [],
                selectOptions: ['Daily', 'Seral', 'FR', 'ID'],
                value: ''
            },
            {
                name: 'another-studies-year',
                placeholder: 'Year',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-number-of-semesters-financed-by-the-budget',
                placeholder: 'Number of semesters financed by the state budget',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-number-of-semesters-with-scholarship',
                placeholder: 'Number of semesters you have benefited from the scholarship',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-graduation-year',
                placeholder: 'Year of graduation of the license studies',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-licence-diploma',
                placeholder: 'Do you have a licence diploma ?',
                type: 'check',
                checkChoices: ['Yes', 'No'],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-licence-country',
                placeholder: 'Country',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-licence-town',
                placeholder: 'Town',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-licence-district',
                placeholder: 'District',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-licence-name-of-the-institution',
                placeholder: 'Name of the institution',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-licence-name-of-the-faculty',
                placeholder: 'Faculty',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-licence-licence-area',
                placeholder: 'Licence area',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-licence-study-program',
                placeholder: 'Study program/ specialization',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-licence-title-obtained',
                placeholder: 'The title obtained',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-licence-form-of-education-select',
                placeholder: 'Form of education',
                type: 'select',
                checkChoices: [],
                selectOptions: ['Daily', 'Seral', 'FR', 'ID'],
                value: ''
            },
            {
                name: 'another-studies-licence-number-of-semesters-financed-by-the-budget',
                placeholder: 'Number of semesters financed by the state budget',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-licence-number-of-semesters-with-scholarship',
                placeholder: 'Number of semesters you have benefited from the scholarship',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-licence-duration',
                placeholder: 'Duration of studies (number of years)',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-licence-diploma-series',
                placeholder: 'Licence diploma series',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-licence-diploma-number',
                placeholder: 'Licence diploma number',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-licence-diploma-released-by',
                placeholder: 'Licence diploma released by',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-licence-diploma-released-date',
                placeholder: 'Licence diploma released date',
                type: 'date',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'another-studies-licence-diploma-number-of-enrollment-sheet',
                placeholder: 'The number of the supplementary / enrollment sheet accompanying the study act',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'studies-abroad-licence-1',
                placeholder: 'Act of recognition/equivalence(released by DPIRV/CNRED) number ',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'studies-abroad-licence-2',
                placeholder: 'Act of recognition/equivalence(released by DPIRV/CNRED) series ',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'baccalaureate-mean',
                placeholder: 'The average mean for the baccalaureate exam ',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'baccalaureate-max-grade',
                placeholder: 'The maximum grade obtained at mathematics baccalaureate exam or informatics baccalaureate ',
                type: 'text',
                checkChoices: [],
                selectOptions: [],
                value: ''
            },
            {
                name: 'exam-choice',
                placeholder: 'Your option for the writen test :',
                type: 'check',
                checkChoices: ['Mathematics', 'Informatics (Pascal)', 'informatics (C)'],
                selectOptions: [],
                value: ''
            },
            {
                name: 'olympiad',
                placeholder: 'Do you request equivalence with diploma from olympiad organized by MEN? ',
                type: 'check',
                checkChoices: ['Yes', 'No'],
                selectOptions: [],
                value: ''
            },
            {
                name: 'pre-admission-1',
                // tslint:disable-next-line:max-line-length
                placeholder: 'You participated in the pre-admission at the Faculty of Computer Science from Iasi and you want the grade to be taken into consideration in the current admission session? ',
                type: 'check',
                checkChoices: ['Yes', 'No'],
                selectOptions: [],
                value: ''
            },
            {
                name: 'pre-admission-2',
                // tslint:disable-next-line:max-line-length
                placeholder: 'If you answered \'Yes\' to the previous question, do you want to take again the test in the current admission session?(only the the highest grade will be considered)',
                type: 'check',
                checkChoices: ['Yes', 'No'],
                selectOptions: [],
                value: ''
            },
            {
                name: 'admission-choices',
                placeholder: ' Admission options in order of preference',
                type: 'check',
                checkChoices: ['Informatics (Romanian language), Informatics (English language) ',
                    ' Informatics (English language), Informatics (Romanian language)'],
                selectOptions: [],
                value: ''
            },
            {
                name: 'admission-tax',
                placeholder: 'Do you agree to be assigned to the taxed program if you did not enter the budget-funded one?',
                type: 'check',
                checkChoices: ['Yes ', 'No ', 'Only taxed'],
                selectOptions: [],
                value: ''
            },
            {
                name: 'survey-check',
                placeholder: 'From where did you find out about Admission to UAIC ?',
                type: 'check',
                checkChoices: ['Website dedicated to admission (admitere.uaic.ro) ', 'Faculty website ', 'brochure or admission booklet',
                    'University Facebook page', 'The week of open doors to the uaic',
                    'friends, acquaintances, relatives', 'I attended a high school presentation', 'High school teachers', 'Media'],
                selectOptions: [],
                value: ''
            },
        ];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* Authentication */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/documents/documents.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/documents/documents.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  documents works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/documents/documents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentsComponent = (function () {
    function DocumentsComponent() {
    }
    DocumentsComponent.prototype.ngOnInit = function () {
    };
    DocumentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-documents',
            template: __webpack_require__("../../../../../src/app/documents/documents.component.html"),
            styles: [__webpack_require__("../../../../../src/app/documents/documents.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DocumentsComponent);
    return DocumentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/form-utilities/fii-form/fii-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form-utilities/fii-form/fii-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='example-container' *ngFor=\"let field of fields\">\n  <form [ngSwitch]=\"field.type\">\n    <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" *ngSwitchCase=\"'text'\">\n      <input matInput placeholder={{field.placeholder}} type={{field.type}}>\n    </mat-form-field>\n    <mat-form-field *ngSwitchCase=\"'password'\">\n      <input matInput placeholder={{field.placeholder}} type={{field.type}}>\n    </mat-form-field>\n    <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" *ngSwitchCase=\"'select'\">\n      <mat-select placeholder={{field.placeholder}}>\n        <mat-option *ngFor=\"let option1 of field.selectOptions\" [value]=\"option1\">\n          {{option1}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" *ngSwitchCase=\"'date'\">\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n    <div class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" *ngSwitchCase=\"'check'\" >\n      <h3 style=\"margin-top:30px;margin-bottom:20px;\">{{field.placeholder}}</h3>\n      <div style=\"font-weight:bold\" *ngFor=\"let option2 of field.checkChoices\" style=\"margin-top:10px;\">\n        <mat-checkbox style=\"margin-right:5px;\">\n        </mat-checkbox>\n        {{option2}}\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"col-md-8 col-md-offset-4 col-xs-4 col-xs-offset-3\">\n    <button mat-button class=\"col-md-5  btn btn-primary\" id=\"registerSubmit\" style=\"font-size:30px;margin-bottom:30px;margin-top:40px;\" [disabled]=\"loading\">Submit</button>\n    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n    />\n  </div>"

/***/ }),

/***/ "../../../../../src/app/form-utilities/fii-form/fii-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiiFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FiiFormComponent = (function () {
    // @Output() event;
    function FiiFormComponent() {
    }
    FiiFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], FiiFormComponent.prototype, "fields", void 0);
    FiiFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fii-form',
            template: __webpack_require__("../../../../../src/app/form-utilities/fii-form/fii-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/form-utilities/fii-form/fii-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FiiFormComponent);
    return FiiFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/form-utilities/form-utilities.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormUtilitiesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fii_form_fii_form_component__ = __webpack_require__("../../../../../src/app/form-utilities/fii-form/fii-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_utilities_material_utilities_module__ = __webpack_require__("../../../../../src/app/material-utilities/material-utilities.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FormUtilitiesModule = (function () {
    function FormUtilitiesModule() {
    }
    FormUtilitiesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__material_utilities_material_utilities_module__["a" /* MaterialUtilitiesModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MatNativeDateModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__fii_form_fii_form_component__["a" /* FiiFormComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__fii_form_fii_form_component__["a" /* FiiFormComponent */]]
        })
    ], FormUtilitiesModule);
    return FormUtilitiesModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\r\n    /*color: rgba(62, 156, 242, 0.5);*/\r\n    color: #2f5e85;\r\n    font-weight: bold;\r\n    padding: 10px 20px;\r\n    margin: 20px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n}\r\nbutton:hover{\r\n\topacity: 0.6;\r\n}\r\n.navbar-buttons-hover:hover{\r\n\ttext-shadow: 1px 1px 2px black, 0 0 1em gray, 0 0 1em white;\r\n}\r\n.right {\r\n\tfloat: right;\r\n}\r\n#welcome-panel{\r\n\tbackground: rgba(39,39,39,0.7);\r\n}\r\nheader {\r\n\tmin-height:100vh;\r\n\tbackground: url('https://i.pinimg.com/originals/5b/bc/11/5bbc11d7852485126c992135005efd9d.png') no-repeat center center;\r\n\tbackground-size: cover;\r\n\tbackground-color: #EDEFF3;\r\n\tpadding-top: 20%;\r\n\t/*background: rgba(62, 156, 242, 0.1);*/\r\n}\r\nh1{\r\n\tcolor: white;\r\n\ttext-shadow: 1px 1px 2px black, 0 0 1em gray, 0 0 0.2em darkblue;\r\n}\r\nh2 {\r\n\tcolor: white;\r\n}\r\n\r\n.beneficii {\r\n\tpadding-top: 75px;\r\n\tbackground-color: #EDEFF3;\r\n\tmin-height: 640px;\r\n}\r\n\r\n.beneficii ul {\r\n\tcolor: #20547E;\r\n\tline-height: 1.7;\r\n\ttext-shadow: unset;\r\n\tfont-size: 2em;\r\n}\r\n\r\n.impresii {\r\n\tpadding-top: 75px;\r\n\tbackground-color: rgba(28, 50, 79,1);\r\n\tmin-height: 640px;\r\n}\r\n\r\n.contact {\r\n\tbackground-color: #EDEFF3;\r\n\tmin-height: 640px;\r\n}\r\n\r\n.padded {\r\n\tpadding: 10%;\r\n}\r\n\r\n.first {\r\n\tmargin-top: 5%;\r\n\tmargin-bottom: 7%;\r\n}\r\n\r\n.contactImg {\r\n\twidth: 100%;\r\n    \theight: auto;\r\n\tmin-height: 640px;\r\n\tfloat: left;\r\n}\r\n\r\n.detalii {\r\n\tcolor: black;\r\n\tfloat: left;\r\n\tpadding-top: 75px;\r\n\tpadding-left: 15px;\r\n}\r\n\r\nfooter {\r\n\tbackground-color: rgba(39, 39, 39,1);\r\n  color: white;\r\n }\r\n\r\n footer a {\r\n \tcolor: white;\r\n }\r\n\r\n .social img {\r\n \twidth: 50px;\r\n \tmargin-right: 20px;\r\n }\r\n\r\n .social {\r\n \tpadding: 20px 20px 20px 0; \r\n }\r\n #bs-example-navbar-collapse-1{\r\n\t float: right !important;\r\n }\r\n\r\n @media screen and (max-width: 770px) {\r\n    #bs-example-navbar-collapse-1{\r\n\t\tfloat: left !important;\r\n\t}\r\n\theader{\r\n\t\tpadding-top: 90%;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    #padded{\r\n\t\tdisplay: none;\r\n\t}\r\n\theader{\r\n\t\tpadding-top: 90%;\r\n\t}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n\n    <title>FII Admis</title>\n\n</head>\n\n<body id=\"top\">\n    <nav class=\"navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <div class=\"container\">\n            <div class=\"navbar-header\" >\n                <button type=\"button\" style=\"margin-right:10%;\"class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" tabindex=\"1\"\n                    accesskey=\"m\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\"  href=\"#\">\n                    <img style=\"height:inherit;\" src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/logo.png\"\n                        alt=\"FII Admis logo\">\n                </a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav\">\n                    <li>\n                        <a class=\"navbar-buttons-hover\" href=\"#beneficii\">\n                            <h2 >Benefits</h2>\n                        </a>\n                    </li>\n                    <li>\n                        <a class=\"navbar-buttons-hover\" href=\"#impresii\">\n                            <h2 >Impressions</h2>\n                        </a>\n                    </li>\n                    <li>\n                        <a class=\"navbar-buttons-hover\" href=\"#contact\">\n                            <h2 >Contact</h2>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n\n    <header>\n        <div class=\"container\" id=\"welcome-panel\" *ngIf=\"!isLogged()\">\n            <div class=\"col-md-8\">\n                <div class=\"intro\">\n                    <h1>Welcome to the <br> Faculty of Computer Science! </h1>\n                    <h2 style=\"text-shadow: unset;\">Join today! Start your journey with us by signing up down below, or login\n                        if you already are registered.\n                    </h2>\n                    <button tabindex=\"3\" accesskey=\"s\" [routerLink]=\"['/register']\">SIGN UP</button>\n                    <button [routerLink]=\"['/login']\" style=\"margin-left: 40px;\">LOGIN</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"container\" id=\"welcome-panel\" *ngIf=\"isLogged()\">\n                <div class=\"col-md-8\">\n                    <div class=\"intro\" >\n                        <h1>Welcome back, {{user}}! </h1>\n                        <h2 style=\"text-shadow: unset;\">Check your application progress here down below!</h2>\n                        <button tabindex=\"3\" accesskey=\"s\" [routerLink]=\"['/dashboard']\">DASHBOARD</button>\n                        <button [routerLink]=\"['/']\" style=\"margin-left: 40px;\" (click)=\"logout()\" >LOG OUT</button>\n                    </div>\n                </div>\n            </div>\n    </header>\n\n    <section id=\"beneficii\" class=\"beneficii\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-7\">\n                    <div class=\"header-content\">\n                        <div class=\"header-content-inner\">\n                            <h1 style=\"color: rgba(28, 50, 79,1); font-size: 3em; text-shadow: unset;\">What do we offer?</h1><br>\n                            <ul>\n                                <li>a stimulating academic enviroment</li>\n                                <li>flexibility when choosing your study program</li>\n                                <li>latest tehnologies</li>\n                                <li>labs adequately equipped</li>\n                                <li>free access to software documentations</li>\n                                <li>opportunities to study or/and internships abroad</li>\n                                <li>friendly and helpful professors</li>\n                                <li>a diploma </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-2\"></div>\n                <div class=\"col-md-3\">\n                    <div class=\"device-container\" id=\"padded\">\n                        <img src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/success.png\" alt=\"Success\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section id=\"impresii\" class=\"impresii\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"header-content\">\n                        <div class=\"header-content-inner\">\n                            <h1 style=\"color: white; font-size: 3em; text-shadow: unset; \">What do our graduates say?</h1>\n                            <blockquote class=\"first\">\n                                <h4 style=\"color: white; text-align: justify; font-style: italic;\">\n                                    I graduated the Faculty of Computer Science of the \"Alexandru\n                                    Ioan Cuza\" University in Ia&#351;i. I consider myself, from this point of view,\n                                    a privileged person because I had the honor of being educated by respected and open-minded professors while \n                                    also having part of colleagues from whom I had tons to learn.\n                                    <br><br> Through this institution I managed to fructify opportunities, opportunities which are needed and available to\n                                    all the community of students... so with the best intentions I invite you to discover them yourselves!</h4><br>\n                                <h4 class=\"right\" style=\"color: white;\">Alexandru Pruteanu (graduate FII 2001), Microsoft Rom&#226;nia</h4>\n                            </blockquote>\n                            <blockquote>\n                                <h4 style=\"color: white; text-align: justify; font-style: italic;\">Computer Science is not a field that cannot be merged\n                                    with others. On the contrary, there are a lot of ways to do that. You can combine it with biology (bio-informatics), art\n                                    (design, graphics), medicine (working with x-ray images), movie industry (special effects), economy (database, transaction\n                                    security), physics (quantic informatics), and so many more.. \n                                </h4><br>\n                                <h4 class=\"right\" style=\"color: white;\">Alexandrina Orzan (graduate FII 2003), team researcher at MAVERICK, INRIA,\n                                    Rh&ocirc;ne-Alpes</h4>\n                            </blockquote>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section id=\"contact\" class=\"contact\">\n        <div class=\"container\">\n            <div class=\"col-md-6\">\n                <img src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/fii.jpg\" class=\"contactImg\"\n                    alt=\"FII\">\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"detalii\">\n                    <h1 style=\"color: rgba(28, 50, 79,1); font-size: 3em; text-shadow: unset;\">How can you get to us?</h1>\n                    <h2 style=\"color: #000; font-size: 1.7em; text-shadow: unset;\">\n                        <strong>Address: </strong><br>\n                        <br> Facultatea de Informatic&#259;, Universitatea \"Al. I. Cuza\",\n                        <br> General Berthelot, 16,\n                        <br> IA&#350;I, 700483, ROM&#194;NIA\n                        <br>\n                    </h2>\n                    <h3>\n                        <strong>Phone: </strong>\n                        <a href=\"tel:+40232201090\">+40 232 201 090</a>\n                    </h3>\n                    <h3>\n                        <strong>Fax: </strong>+40 232 201 490</h3>\n                    <h3>\n                        <strong>E-mail: </strong>\n                        <a href=\"mailto:secretariat@info.uaic.ro\">secretariat@info.uaic.ro</a>\n                    </h3>\n                    <div class=\"social\">\n                        <a href=\"https://www.facebook.com/FacultateaDeInformaticaUAICIasi\">\n                            <img src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/facebook.png\"\n                                alt=\"Facebook\">\n                        </a>\n                        <a href=\"https://twitter.com/uaiciasi\">\n                            <img src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/twitter.png\"\n                                alt=\"Twitter\">\n                        </a>\n                        <a href=\"https://www.linkedin.com/grps/Facultatea-de-Informatica-Iasi-91904\">\n                            <img src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/linkedin.png\"\n                                alt=\"LinkedIn\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <footer >\n        <div class=\"container\">\n            <h4>&copy; 2017\n                <a href=\"https://www.info.uaic.ro\">Faculty of Computer Science Ia&#351;i</a>. All rights reserved.</h4>\n        </div>\n    </footer>\n</body>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(userService, authenticationService, router) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    };
    HomeComponent.prototype.isLogged = function () {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        return false;
    };
    Object.defineProperty(HomeComponent.prototype, "user", {
        get: function () {
            var x = JSON.parse(localStorage.getItem('currentUser'));
            var y = JSON.parse(x['_body']);
            var fName = JSON.stringify(y['object']['firstName']).replace('"', '').replace('"', '').toLowerCase();
            fName = fName.charAt(0).toUpperCase() + fName.slice(1);
            var lName = JSON.stringify(y['object']['lastName']).replace('"', '').replace('"', '').toLowerCase();
            lName = lName.charAt(0).toUpperCase() + lName.slice(1);
            return fName + ' ' + lName;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            selector: 'app-home',
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({}),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* Authentication */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/dialog-overview-example-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Hello there!</h1>\r\n<div mat-dialog-content>\r\n  <p>In order to retrieve your password, the e-mail with which you registered will be necessary:</p>\r\n  <mat-form-field class=\"col-md-12 col-xs-12\">\r\n    <input placeholder=\"Your e-mail\" matInput tabindex=\"-1\" [(ngModel)]=\"data.email\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions class=\"col-md-8 col-xs-10 col-md-offset-4 col-xs-offset-2\">\r\n  <button mat-button class=\"col-md-offset-0 col-xs-offset-0\" (click)=\"onNoClick()\">Close</button>\r\n  <button mat-button class=\"col-md-offset-4 col-xs-offset-4\" [mat-dialog-close]=\"data.email\" cdkFocusInitial>Retrieve</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#welcome-panel{\r\n    padding-top: 10px;\r\n    background-color: rgba(255,255,255,0.9);;\r\n}\r\nheader {\r\n    background-color: rgba(31,50,79,0.9);\r\n\tmin-height:96vh;\r\n    padding-top: 150px;\r\n    padding-bottom: 10px;\r\n\t/*background: rgba(62, 156, 242, 0.1);*/\r\n}\r\n\r\n.input{\r\n    border-radius: 0 !important;\r\n}\r\n.navbar-buttons-hover:hover{\r\n\ttext-shadow: 1px 1px 2px black, 0 0 1em gray, 0 0 1em white;\r\n}\r\nmat-spinner.small-spinner svg { width: 11px !important; height: 11spx !important; }\r\n::ng-deep snack-bar-container.custom-snack-bar-class {\r\n    background: rgb(221, 57, 65);\r\n  }\r\n  \r\n::ng-deep .custom-snack-bar-class .mat-simple-snackbar {\r\n    color: black;\r\n    font-weight: normal;\r\n}\r\n::ng-deep .custom-snack-bar-class .mat-simple-snackbar-action {\r\n    color: rgb(24, 29, 25);\r\n    font-weight: bold;\r\n}\r\nbutton {\r\n    /*color: rgba(62, 156, 242, 0.5);*/\r\n    font-weight: bold;\r\n    padding: 10px 40px;\r\n    margin: 20px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n}\r\n\r\n#registerSubmit{\r\n    margin-left:5px;\r\n    background: rgba(31,50,79,0.2);\r\n    font-size: 1.2em;\r\n}\r\n#registerSubmit:hover{\r\n    color: black;\r\n    background: rgba(31,50,79,0.3);\r\n}\r\n.first {\r\n\tmargin-top: 5%;\r\n\tmargin-bottom: 7%;\r\n}\r\nh1{\r\n\tcolor: black;\r\n}\r\nh2 {\r\n\tcolor: white;\r\n}\r\n\r\n\r\n.right {\r\n\tfloat: right;\r\n}\r\nfooter {\r\n  background-color: rgba(39, 39, 39,1);\r\n  color: white;\r\n }\r\n\r\n footer a {\r\n \tcolor: white;\r\n }\r\n\r\n .social img {\r\n \twidth: 50px;\r\n \tmargin-right: 20px;\r\n }\r\n\r\n .social {\r\n \tpadding: 20px 20px 20px 0; \r\n }\r\n\r\n #bs-example-navbar-collapse-1{\r\n\t float: right !important;\r\n }\r\n\r\n @media screen and (max-width: 770px) {\r\n    #bs-example-navbar-collapse-1{\r\n\t\tfloat: left !important;\r\n\t}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n\n    <title>FII Admis</title>\n\n</head>\n\n<body id=\"top\">\n    <nav class=\"navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" style=\"margin-right:10%;\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n                    tabindex=\"1\" accesskey=\"m\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"#\">\n                    <img style=\"height:inherit;\" src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/logo.png\"\n                        alt=\"FII Admis logo\">\n                </a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav\">\n                    <li>\n                        <a class=\"navbar-buttons-hover\" href=\"#beneficii\">\n                            <h2>Benefits</h2>\n                        </a>\n                    </li>\n                    <li>\n                        <a class=\"navbar-buttons-hover\" href=\"#impresii\">\n                            <h2>Impressions</h2>\n                        </a>\n                    </li>\n                    <li>\n                        <a class=\"navbar-buttons-hover\" href=\"#contact\">\n                            <h2>Contact</h2>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n\n    <header>\n        <div class=\"container\">\n            <div class=\"col-md-8 col-md-offset-2\" id=\"welcome-panel\">\n                <h3 class=\"col-md-2 col-md-offset-5 col-xs-offset-4\">Sign in</h3>\n                <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n                    <div class=\"form-group col-md-6 col-md-offset-3\" [ngClass]=\"{ 'has-error': f.submitted && !userName.valid }\">\n                        <label for=\"userName\">Username</label>\n                        <br>\n                        <input type=\"text\" class=\"form-control\" name=\"userName\" [(ngModel)]=\"model.userName\" #userName=\"ngModel\" required />\n                        <div *ngIf=\"f.submitted && !userName.valid\" class=\"help-block\">Username is required</div>\n                    </div>\n                    <div class=\"form-group col-md-6 col-md-offset-3\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                        <label for=\"password\">Password</label>\n                        <br>\n                        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n                    </div>\n                    <div class=\"col-md-10 col-md-offset-4  col-xs-offset-3\">\n                        <button class=\"col-md-4 \" id=\"registerSubmit\" [disabled]=\"loading\">Login</button>\n                        <mat-spinner  class=\"col-xs-offset-0 col-xs-4 col-md-1 col-md-offset-0\" style=\"margin-left:16px;margin-top:26.5px;margin-left:16px;\" *ngIf=\"loading\" [diameter]=\"30\"></mat-spinner>\n                    </div>\n                </form>\n                <div class=\"col-md-9 col-md-offset-4\" style=\"padding-bottom: 3px;\">\n                    <h4>\n                        Forgot password? Click\n                        <a style=\"cursor: pointer;\" (click)=\"openDialog()\">here</a>. Not registered yet? Click\n                        <a [routerLink]=\"['/register']\">here</a>.</h4>\n                </div>\n            </div>\n        </div>\n    </header>\n\n\n    <footer>\n        <div class=\"container\">\n            <h4>&copy; 2017\n                <a href=\"https://www.info.uaic.ro\">Faculty of Computer Science Ia&#351;i</a>. All rights reserved.</h4>\n        </div>\n    </footer>\n</body>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogOverviewExampleDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, snackBar, dialog, userService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.userService = userService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.openSnackBar = function (message, action) {
        var config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MatSnackBarConfig */]();
        config.extraClasses = ['custom-snack-bar-class'];
        config.duration = 5000;
        this.snackBar.open(message, action, config);
    };
    LoginComponent.prototype.ngOnInit = function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
            data: { email: this.email }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.email = result;
            _this.userService.getCode(_this.email)
                .subscribe(function (data) {
                _this.openSnackBar(JSON.parse(JSON.stringify(data))['_body'], 'Got it');
            }, function (error) {
                _this.openSnackBar('The e-mail provided is invalid.', 'Got it');
            });
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.userName, this.model.password)
            .subscribe(function (data) {
            _this.loading = true;
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            if (error.status === 400) {
                _this.openSnackBar('Invalid username or password.', 'Got it');
            }
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* Authentication */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["B" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());

var DialogOverviewExampleDialogComponent = (function () {
    function DialogOverviewExampleDialogComponent(dialogRef, dialModalRef, data) {
        this.dialogRef = dialogRef;
        this.dialModalRef = dialModalRef;
        this.data = data;
    }
    DialogOverviewExampleDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialogComponent.prototype.changePosition = function () {
        this.dialModalRef.updatePosition({ top: '250px', left: '250px' });
    };
    DialogOverviewExampleDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__("../../../../../src/app/login/dialog-overview-example-dialog.html"),
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object])
    ], DialogOverviewExampleDialogComponent);
    return DialogOverviewExampleDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material-utilities/material-utilities.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialUtilitiesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialUtilitiesModule = (function () {
    function MaterialUtilitiesModule() {
    }
    MaterialUtilitiesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableModule */]
            ]
        })
    ], MaterialUtilitiesModule);
    return MaterialUtilitiesModule;
}());



/***/ }),

/***/ "../../../../../src/app/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "dd{\r\n    padding-left: 30px;\r\n    padding-top: 20px;\r\n}\r\ndt{\r\n    padding-top: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "\n<dl>\n    <dt>Coffee</dt>\n    <dd>   Date: 29-12-2017 16:12:67: black hot drinkblack hot drinkblack hot drinkblack hot drinkblack hot drinkblack hot drinkblack hot drink</dd>\n    <dd>   Date: 29-12-2017 16:12:67: black hot drink</dd>\n    <dd>   Date: 29-12-2017 16:12:67: black hot drink</dd>\n    <dt>   Milk</dt>\n    <dd>   Date: 29-12-2017 16:12:67: white cold drink</dd>\n    <dd   >Date: 29-12-2017 16:12:67: white cold drink</dd>\n    <dt>Coffee</dt>\n    <dd>   Date: 29-12-2017 16:12:67: black hot drink</dd>\n    <dd>   Date: 29-12-2017 16:12:67: black hot drink</dd>\n    <dd>   Date: 29-12-2017 16:12:67: black hot drink</dd>\n    <dt>   Milk</dt>\n    <dd>   Date: 29-12-2017 16:12:67: white cold drink</dd>\n    <dd   >Date: 29-12-2017 16:12:67: white cold drink</dd>\n    <dt>Coffee</dt>\n    <dd>   Date: 29-12-2017 16:12:67: black hot drink</dd>\n    <dd>   Date: 29-12-2017 16:12:67: black hot drink</dd>\n    <dd>   Date: 29-12-2017 16:12:67: black hot drink</dd>\n    <dt>   Milk</dt>\n    <dd>   Date: 29-12-2017 16:12:67: white cold drink</dd>\n    <dd   >Date: 29-12-2017 16:12:67: white cold drink</dd>\n    <dt>Coffee</dt>\n    <dd>   Date: 29-12-2017 16:12:67: black hot drink</dd>\n    <dd>   Date: 29-12-2017 16:12:67: black hot drink</dd>\n    <dd>   Date: 29-12-2017 16:12:67: black hot drink</dd>\n    <dt>   Milk</dt>\n    <dd>   Date: 29-12-2017 16:12:67: white cold drink</dd>\n    <dd   >Date: 29-12-2017 16:12:67: white cold drink</dd>\n    <dt>Coffee</dt>\n    <dd>   Date: 29-12-2017 16:12:67: black hot drink</dd>\n    <dd>   Date: 29-12-2017 16:12:67: black hot drink</dd>\n    <dd>   Date: 29-12-2017 16:12:67: black hot drink</dd>\n    <dt>   Milk</dt>\n    <dd>   Date: 29-12-2017 16:12:67: white cold drink</dd>\n    <dd   >Date: 29-12-2017 16:12:67: white cold drink</dd>\n  </dl>"

/***/ }),

/***/ "../../../../../src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsComponent = (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news',
            template: __webpack_require__("../../../../../src/app/news/news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "dd{\r\n    padding-left: 30px;\r\n    padding-top: 20px;\r\n}\r\ndt{\r\n    padding-top: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<dl>\n    <dt>To re-check in form</dt>\n    <dd style=\"color: red;\">   Field Name is wrong: Your name smth</dd>\n    <dt> Checked: </dt>\n    <dd style=\"color: green;\">   Identity document checked all gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang</dd>\n  </dl>"

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsComponent = (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notifications',
            template: __webpack_require__("../../../../../src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/recovery/recovery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#welcome-panel{\r\n    padding-top: 10px;\r\n    background-color: rgba(255,255,255,0.9);;\r\n}\r\nheader {\r\n    background-color: rgba(31,50,79,0.9);\r\n\tmin-height:96vh;\r\n    padding-top: 150px;\r\n    padding-bottom: 10px;\r\n\t/*background: rgba(62, 156, 242, 0.1);*/\r\n}\r\n\r\n.input{\r\n    border-radius: 0 !important;\r\n}\r\n.navbar-buttons-hover:hover{\r\n\ttext-shadow: 1px 1px 2px black, 0 0 1em gray, 0 0 1em white;\r\n}\r\n::ng-deep snack-bar-container.custom-snack-bar-class {\r\n    background: rgb(221, 57, 65);\r\n  }\r\n  \r\n::ng-deep .custom-snack-bar-class .mat-simple-snackbar {\r\n    color: black;\r\n    font-weight: normal;\r\n}\r\n::ng-deep .custom-snack-bar-class .mat-simple-snackbar-action {\r\n    color: rgb(24, 29, 25);\r\n    font-weight: bold;\r\n}\r\nbutton {\r\n    /*color: rgba(62, 156, 242, 0.5);*/\r\n    font-weight: bold;\r\n    padding: 10px 40px;\r\n    margin: 20px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n}\r\n\r\n#registerSubmit{\r\n    margin-left:5px;\r\n    background: rgba(31,50,79,0.2);\r\n    font-size: 1.2em;\r\n}\r\n#registerSubmit:hover{\r\n    color: black;\r\n    background: rgba(31,50,79,0.3);\r\n}\r\n.first {\r\n\tmargin-top: 5%;\r\n\tmargin-bottom: 7%;\r\n}\r\nh1{\r\n\tcolor: black;\r\n}\r\nh2 {\r\n\tcolor: white;\r\n}\r\n\r\n\r\n.right {\r\n\tfloat: right;\r\n}\r\nfooter {\r\n  background-color: rgba(39, 39, 39,1);\r\n  color: white;\r\n }\r\n\r\n footer a {\r\n \tcolor: white;\r\n }\r\n\r\n .social img {\r\n \twidth: 50px;\r\n \tmargin-right: 20px;\r\n }\r\n\r\n .social {\r\n \tpadding: 20px 20px 20px 0; \r\n }\r\n\r\n #bs-example-navbar-collapse-1{\r\n\t float: right !important;\r\n }\r\n\r\n @media screen and (max-width: 770px) {\r\n    #bs-example-navbar-collapse-1{\r\n\t\tfloat: left !important;\r\n\t}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recovery/recovery.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <meta name=\"description\" content=\"\">\n  <meta name=\"author\" content=\"\">\n\n  <title>FII Admis</title>\n\n</head>\n\n<body id=\"top\">\n  <nav class=\"navbar-inverse navbar-fixed-top\" role=\"navigation\">\n      <div class=\"container\">\n          <div class=\"navbar-header\">\n              <button type=\"button\" style=\"margin-right:10%;\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n                  tabindex=\"1\" accesskey=\"m\">\n                  <span class=\"sr-only\">Toggle navigation</span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n              </button>\n              <a class=\"navbar-brand\" href=\"#\">\n                  <img style=\"height:inherit;\" src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/logo.png\"\n                      alt=\"FII Admis logo\">\n              </a>\n          </div>\n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n              <ul class=\"nav navbar-nav\">\n                  <li>\n                      <a class=\"navbar-buttons-hover\" href=\"#beneficii\">\n                          <h2>Benefits</h2>\n                      </a>\n                  </li>\n                  <li>\n                      <a class=\"navbar-buttons-hover\" href=\"#impresii\">\n                          <h2>Impressions</h2>\n                      </a>\n                  </li>\n                  <li>\n                      <a class=\"navbar-buttons-hover\" href=\"#contact\">\n                          <h2>Contact</h2>\n                      </a>\n                  </li>\n              </ul>\n          </div>\n      </div>\n  </nav>\n\n  <header>\n      <div class=\"container\">\n          <div class=\"col-md-8 col-md-offset-2\" id=\"welcome-panel\">\n              <h3 class=\"col-md-6 col-md-offset-4 col-xs-offset-2\" style=\"margin-bottom:30px;\">Submit New Passord</h3>\n              <form name=\"form\" (ngSubmit)=\"f.form.valid && recover()\" #f=\"ngForm\" novalidate>\n                  <div class=\"form-group col-md-6 col-md-offset-3\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                      <label for=\"password\">Password</label>\n                      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" (input)=\"checkConfirmPass()\" #password=\"ngModel\" required />\n                      <div *ngIf=\"f.submitted && !password.valid\" style=\"color:red;\">Password is required</div>\n                  </div>\n                  <div class=\"form-group col-md-6 col-md-offset-3\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                      <label>Confirm Password</label>\n\n                      <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" (input)=\"checkConfirmPass()\" required />\n                      <div id=\"confirmError\" style=\"color:red;display:none;\">Passwords don't match</div>\n                  </div>\n                  <div class=\"col-md-10 col-md-offset-4  col-xs-offset-3\">\n                      <button class=\"col-md-4 \" id=\"registerSubmit\" [disabled]=\"loading\">Submit</button>\n                      <mat-spinner  class=\"col-xs-offset-0 col-xs-4 col-md-1 col-md-offset-0\" style=\"margin-left:16px;margin-top:26.5px;margin-left:16px;\" *ngIf=\"loading\" [diameter]=\"30\"></mat-spinner>\n                  </div>\n              </form>\n          </div>\n      </div>\n  </header>\n\n\n  <footer>\n      <div class=\"container\">\n          <h4>&copy; 2017\n              <a href=\"https://www.info.uaic.ro\">Faculty of Computer Science Ia&#351;i</a>. All rights reserved.</h4>\n      </div>\n  </footer>\n</body>"

/***/ }),

/***/ "../../../../../src/app/recovery/recovery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoveryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecoveryComponent = (function () {
    function RecoveryComponent(route, router, userService, snackBar) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.snackBar = snackBar;
        this.model = {};
    }
    RecoveryComponent.prototype.ngOnInit = function () {
        this.userEmail = this.route.snapshot.queryParams['userEmail'];
        this.code = this.route.snapshot.queryParams['code'];
        if (!this.userEmail || !this.code) {
            this.router.navigate(['/']);
        }
    };
    RecoveryComponent.prototype.checkConfirmPass = function () {
        var pass = document.getElementsByName('password')[0].value;
        var confirmPass = document.getElementsByName('confirmPassword')[0].value;
        // tslint:disable-next-line:one-line
        if (pass !== confirmPass && confirmPass !== '') {
            document.getElementById('confirmError').style.display = 'block';
            return true;
        }
        else {
            document.getElementById('confirmError').style.display = 'none';
            return false;
        }
    };
    RecoveryComponent.prototype.openSnackBar = function (message, action) {
        var config = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSnackBarConfig */]();
        config.extraClasses = ['custom-snack-bar-class'];
        config.duration = 5000;
        this.snackBar.open(message, action, config);
    };
    RecoveryComponent.prototype.recover = function () {
        var _this = this;
        this.userService.retrievePassword(this.userEmail, this.model.password, this.code)
            .subscribe(function (data) {
            if (_this.checkConfirmPass()) {
                _this.openSnackBar(JSON.stringify(data), 'Got it');
            }
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.openSnackBar(JSON.stringify(error), 'Got it');
            if (_this.checkConfirmPass()) {
                _this.openSnackBar('Confirm password invalid.', 'Got it');
            }
            _this.loading = false;
        });
    };
    RecoveryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recovery',
            template: __webpack_require__("../../../../../src/app/recovery/recovery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/recovery/recovery.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSnackBar */]])
    ], RecoveryComponent);
    return RecoveryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#welcome-panel{\r\n    padding-top: 10px;\r\n    background-color: rgba(255,255,255,0.9);;\r\n}\r\nheader {\r\n    background-color: rgba(31,50,79,0.9);\r\n\tmin-height:96vh;\r\n    padding-top: 150px;\r\n    padding-bottom: 10px;\r\n\t/*background: rgba(62, 156, 242, 0.1);*/\r\n}\r\n\r\n.input{\r\n    border-radius: 0 !important;\r\n}\r\n.navbar-buttons-hover:hover{\r\n\ttext-shadow: 1px 1px 2px black, 0 0 1em gray, 0 0 1em white;\r\n}\r\n::ng-deep snack-bar-container.custom-snack-bar-class {\r\n    background: rgb(221, 57, 65);\r\n  }\r\n  \r\n::ng-deep .custom-snack-bar-class .mat-simple-snackbar {\r\n    color: black;\r\n    font-weight: normal;\r\n}\r\n::ng-deep .custom-snack-bar-class .mat-simple-snackbar-action {\r\n    color: rgb(24, 29, 25);\r\n    font-weight: bold;\r\n}\r\nbutton {\r\n    /*color: rgba(62, 156, 242, 0.5);*/\r\n    font-weight: bold;\r\n    padding: 10px 40px;\r\n    margin: 20px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n}\r\n\r\n#registerSubmit{\r\n    margin-left:5px;\r\n    background: rgba(31,50,79,0.2);\r\n    font-size: 1.2em;\r\n}\r\n#registerSubmit:hover{\r\n    color: black;\r\n    background: rgba(31,50,79,0.3);\r\n}\r\n.first {\r\n\tmargin-top: 5%;\r\n\tmargin-bottom: 7%;\r\n}\r\nh1{\r\n\tcolor: black;\r\n}\r\nh2 {\r\n\tcolor: white;\r\n}\r\n\r\n\r\n.right {\r\n\tfloat: right;\r\n}\r\nfooter {\r\n  background-color: rgba(39, 39, 39,1);\r\n  color: white;\r\n }\r\n\r\n footer a {\r\n \tcolor: white;\r\n }\r\n\r\n .social img {\r\n \twidth: 50px;\r\n \tmargin-right: 20px;\r\n }\r\n\r\n .social {\r\n \tpadding: 20px 20px 20px 0; \r\n }\r\n\r\n #bs-example-navbar-collapse-1{\r\n\t float: right !important;\r\n }\r\n\r\n @media screen and (max-width: 770px) {\r\n    #bs-example-navbar-collapse-1{\r\n\t\tfloat: left !important;\r\n\t}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n\n    <title>FII Admis</title>\n\n</head>\n\n<body id=\"top\">\n    <nav class=\"navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" style=\"margin-right:10%;\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n                    tabindex=\"1\" accesskey=\"m\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"#\">\n                    <img style=\"height:inherit;\" src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/logo.png\"\n                        alt=\"FII Admis logo\">\n                </a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav\">\n                    <li>\n                        <a class=\"navbar-buttons-hover\" href=\"#beneficii\">\n                            <h2>Benefits</h2>\n                        </a>\n                    </li>\n                    <li>\n                        <a class=\"navbar-buttons-hover\" href=\"#impresii\">\n                            <h2>Impressions</h2>\n                        </a>\n                    </li>\n                    <li>\n                        <a class=\"navbar-buttons-hover\" href=\"#contact\">\n                            <h2>Contact</h2>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n\n    <header>\n        <div class=\"container\">\n            <div class=\"col-md-8 col-md-offset-2\" id=\"welcome-panel\">\n                <h3 class=\"col-md-2 col-md-offset-5 col-xs-offset-4\">Sign up</h3>\n                <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n                    <div class=\"form-group col-md-6 col-md-offset-3\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n                        <label for=\"email\">Email</label>\n                        <br>\n                        <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\n                        <div *ngIf=\"f.submitted && !email.valid\" style=\"color:red;\">Email is required</div>\n                    </div>\n                    <div class=\"form-group col-md-6 col-md-offset-3\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                        <label for=\"password\">Password</label>\n\n                        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" (input)=\"checkConfirmPass()\" #password=\"ngModel\" required />\n                        <div *ngIf=\"f.submitted && !password.valid\" style=\"color:red;\">Password is required</div>\n                    </div>\n                    <div class=\"form-group col-md-6 col-md-offset-3\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                        <label>Confirm Password</label>\n\n                        <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" (input)=\"checkConfirmPass()\" required />\n                        <div id=\"confirmError\" style=\"color:red;display:none;\">Passwords don't match</div>\n                    </div>\n                    <div class=\"form-group col-md-6 col-md-offset-3\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n                        <label for=\"firstName\">First Name</label>\n\n                        <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\n                        <div *ngIf=\"f.submitted && !firstName.valid\" style=\"color:red;\">First Name is required</div>\n                    </div>\n                    <div class=\"form-group col-md-6 col-md-offset-3\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n                        <label for=\"lastName\">Last Name</label>\n                        <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n                        <div *ngIf=\"f.submitted && !lastName.valid\" style=\"color:red;\">Last Name is required</div>\n                    </div>\n                    <div class=\"col-md-10 col-md-offset-4  col-xs-offset-3\">\n                        <button class=\"col-md-4 \" id=\"registerSubmit\" [disabled]=\"loading\">Register</button>\n                        <mat-spinner  class=\"col-xs-offset-0 col-xs-4 col-md-1 col-md-offset-0\" style=\"margin-left:16px;margin-top:26.5px;margin-left:16px;\" *ngIf=\"loading\" [diameter]=\"30\"></mat-spinner>\n                    </div>\n                </form>\n                <div class=\"col-md-7 col-md-offset-6\" style=\"padding-bottom: 3px;\">\n                    <h4>\n                        Already registered here? Click\n                        <a [routerLink]=\"['/login']\">here</a> to login.</h4>\n                </div>\n            </div>\n        </div>\n    </header>\n\n\n    <footer>\n        <div class=\"container\">\n            <h4>&copy; 2017\n                <a href=\"https://www.info.uaic.ro\">Faculty of Computer Science Ia&#351;i</a>. All rights reserved.</h4>\n        </div>\n    </footer>\n</body>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, userService, snackBar) {
        this.router = router;
        this.userService = userService;
        this.snackBar = snackBar;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.openSnackBar = function (message, action) {
        var config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MatSnackBarConfig */]();
        config.extraClasses = ['custom-snack-bar-class'];
        config.duration = 5000;
        this.snackBar.open(message, action, config);
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (error) {
            var x = JSON.parse(JSON.stringify(error));
            var y = JSON.parse(x['_body']);
            if (error.status === 400) {
                if (JSON.parse(JSON.stringify(y))['Email']) {
                    _this.openSnackBar(JSON.parse(JSON.stringify(y))['Email'], 'Got it');
                }
                if (JSON.parse(JSON.stringify(y))['PasswordTooShort']) {
                    _this.openSnackBar(JSON.parse(JSON.stringify(y))['PasswordTooShort'], 'Got it');
                }
                if (JSON.parse(JSON.stringify(y))['DuplicateUserName']) {
                    _this.openSnackBar(JSON.parse(JSON.stringify(y))['DuplicateUserName'], 'Got it');
                }
                if (_this.checkConfirmPass()) {
                    _this.openSnackBar('Confirm password invalid.', 'Got it');
                }
            }
            _this.loading = false;
        });
    };
    RegisterComponent.prototype.checkConfirmPass = function () {
        var pass = document.getElementsByName('password')[0].value;
        var confirmPass = document.getElementsByName('confirmPassword')[0].value;
        // tslint:disable-next-line:one-line
        if (pass !== confirmPass && confirmPass !== '') {
            document.getElementById('confirmError').style.display = 'block';
            return true;
        }
        else {
            document.getElementById('confirmError').style.display = 'none';
            return false;
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["B" /* MatSnackBar */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reset-pass/reset-pass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reset-pass/reset-pass.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\nComming right at you after 3rd of January 2018 lmao hang on what's the hurry lil furry... wat\n  </p>\n"

/***/ }),

/***/ "../../../../../src/app/reset-pass/reset-pass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResetPassComponent = (function () {
    function ResetPassComponent() {
    }
    ResetPassComponent.prototype.ngOnInit = function () {
    };
    ResetPassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reset-pass',
            template: __webpack_require__("../../../../../src/app/reset-pass/reset-pass.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reset-pass/reset-pass.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResetPassComponent);
    return ResetPassComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  #main{\r\n    background-color: transparent;\r\n  }\r\n  .example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  #topbar{\r\n      height: 92.8px;\r\n      background: rgba(39,39,39,1);\r\n  }\r\n  #rightbar{\r\n    background: rgba(39,39,39,1);\r\n    width: 200px;\r\n  }\r\n  .sidenav-button{\r\n      color: white;\r\n      font-size: 20px;\r\n      margin-top:20px;\r\n  }\r\n  .sidenav-button:hover{\r\n      opacity: 0.1;\r\n  }\r\n  h1.example-app-name {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  .example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n  }\r\n  \r\n  .example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<body  >\n<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n  <mat-toolbar color=\"primary\" id=\"topbar\" class=\"example-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\">\n      <mat-icon style=\"font-size:40px;\">&#9776;</mat-icon>\n    </button>\n    <img style=\"margin-left:30px;width:165.137px;height:50px;\" src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/logo.png\"\n      alt=\"FII Admis logo\">\n  </mat-toolbar>\n\n  <mat-sidenav-container style=\"background:rgba(31,50,79,0.9)\" class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav id=\"rightbar\" #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n      <mat-nav-list>\n        <a class=\"sidenav-button\" mat-list-item (click)=\"news()\">News</a>\n        <a class=\"sidenav-button\" mat-list-item (click)=\"notifications()\">Notifications</a>\n        <a class=\"sidenav-button\" mat-list-item (click)=\"form()\">Application Form</a>\n        <a class=\"sidenav-button\" mat-list-item (click)=\"documents()\">Documents</a>\n        <a class=\"sidenav-button\" mat-list-item (click)=\"reset()\">Reset Password</a>\n        <a class=\"sidenav-button\" mat-list-item (click)=\"logout()\">Logout</a>\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content id=\"main\">\n      <ng-content></ng-content>\n    </mat-sidenav-content>\n\n  </mat-sidenav-container>\n</div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidenavComponent = (function () {
    function SidenavComponent(changeDetectorRef, media, authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.fillerNav = Array(1).fill(0).map(function (_, i) { return "Nav Item " + (i + 1); });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    // tslint:disable-next-line:use-life-cycle-interface
    SidenavComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    SidenavComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    };
    SidenavComponent.prototype.news = function () {
        this.toggle(1, 0, 0, 0, 0);
    };
    SidenavComponent.prototype.notifications = function () {
        this.toggle(0, 1, 0, 0, 0);
    };
    SidenavComponent.prototype.form = function () {
        this.toggle(0, 0, 1, 0, 0);
    };
    SidenavComponent.prototype.documents = function () {
        this.toggle(0, 0, 0, 1, 0);
    };
    SidenavComponent.prototype.reset = function () {
        this.toggle(0, 0, 0, 0, 1);
    };
    SidenavComponent.prototype.toggle = function (a, b, c, d, e) {
        if (a === 1) {
            document.getElementById('news').style.display = 'block';
        }
        else {
            document.getElementById('news').style.display = 'none';
        }
        if (b === 1) {
            document.getElementById('notifications').style.display = 'block';
        }
        else {
            document.getElementById('notifications').style.display = 'none';
        }
        if (c === 1) {
            document.getElementById('form').style.display = 'block';
        }
        else {
            document.getElementById('form').style.display = 'none';
        }
        if (d === 1) {
            document.getElementById('documents').style.display = 'block';
        }
        else {
            document.getElementById('documents').style.display = 'none';
        }
        if (e === 1) {
            document.getElementById('reset').style.display = 'block';
        }
        else {
            document.getElementById('reset').style.display = 'none';
        }
    };
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'dashboard-sidenav',
            template: __webpack_require__("../../../../../src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidenav/sidenav.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_0__angular_cdk_layout__["d" /* MediaMatcher */],
            __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* Authentication */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map