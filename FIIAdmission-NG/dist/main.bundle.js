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

/***/ "../../../../../src/app/_services/announcements.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementsService; });
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



var AnnouncementsService = (function () {
    function AnnouncementsService(http, config) {
        this.http = http;
        this.config = config;
    }
    AnnouncementsService.prototype.getAnnouncements = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.get(this.config.apiUrl + '/api/Announcement', { headers: headers });
    };
    AnnouncementsService.prototype.getAnnouncement = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.get(this.config.apiUrl + '/api/Announcement/' + id, { headers: headers });
    };
    AnnouncementsService.prototype.addAnnouncement = function (announcement) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.post(this.config.apiUrl + '/api/Announcement', announcement, { headers: headers });
    };
    AnnouncementsService.prototype.updateAnnouncement = function (announcement) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.put(this.config.apiUrl + 'api/Announcement/', announcement, { headers: headers });
    };
    AnnouncementsService.prototype.deleteAnnouncement = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.delete(this.config.apiUrl + '/api/Announcement/' + id, { headers: headers });
    };
    AnnouncementsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */]])
    ], AnnouncementsService);
    return AnnouncementsService;
}());



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
        var _this = this;
        var res = this.http.post(this.config.apiUrl + '/api/Auth/login', { userName: userName, password: password });
        res.subscribe(function (data) {
            localStorage.setItem('currentUser', JSON.stringify(data));
            localStorage.setItem('currUserMail', JSON.parse(JSON.parse(JSON.stringify(data))._body).email);
            localStorage.setItem('auth_token', JSON.parse(JSON.parse(JSON.parse(JSON.stringify(data))._body).token).auth_token);
            var r = _this.getDashmin();
            r.subscribe(
            // tslint:disable-next-line:no-shadowed-variable
            function (data) {
                localStorage.setItem('admin', JSON.stringify(data.status));
            }, 
            // tslint:disable-next-line:no-shadowed-variable
            function (error) {
                localStorage.setItem('admin', JSON.stringify(error.status));
            });
        });
        return res;
    };
    Authentication.prototype.getDashmin = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.get(this.config.apiUrl + '/api/Account/admin', { headers: headers });
    };
    Authentication.prototype.logout = function () {
        localStorage.removeItem('admin');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currUserMail');
        localStorage.removeItem('auth_token');
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
    UserService.prototype.resetPassword = function (currentPassword, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.put(this.config.apiUrl + '/api/Account/change_password/' + localStorage.getItem('currUserMail'), { currentPassword: currentPassword, password: password }, { headers: headers });
    };
    UserService.prototype.getClassrooms = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.get(this.config.apiUrl + '/api/Repartition/classrooms', { headers: headers });
    };
    UserService.prototype.create = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.config.apiUrl + '/api/account/create_account', user, options);
    };
    UserService.prototype.getCode = function (email) {
        return this.http.post(this.config.apiUrl + '/api/Account/password_recovery_s1', { email: email });
    };
    UserService.prototype.postRepartition = function (availableClassrooms, examTime) {
        console.log(availableClassrooms);
        console.log(examTime);
        var z = { availableClassrooms: availableClassrooms,
            examTime: examTime };
        console.log(z);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.post(this.config.apiUrl + '/api/Repartition', { availableClassrooms: availableClassrooms,
            examTime: examTime }, { headers: headers });
    };
    UserService.prototype.getClassroomRepartition = function (classRoom) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.get(this.config.apiUrl + '/api/Repartition/' + classRoom, { headers: headers });
    };
    UserService.prototype.retrievePassword = function (email, password, code) {
        return this.http.put(this.config.apiUrl + '/api/Account/password_recovery_s2', { email: email, password: password, code: code });
    };
    UserService.prototype.sendForm = function (email, form, completed, approved) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.post(this.config.apiUrl + '/api/Form', { email: email, completed: completed, approved: approved, blobObject: { form: form } }, { headers: headers });
    }; // private helper methods
    UserService.prototype.getCandidates = function (skip, take) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.get(this.config.apiUrl + '/api/Form/page/' + skip + '/' + take, { headers: headers });
    };
    UserService.prototype.getForm = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.get(this.config.apiUrl + '/api/Form/' + email, { headers: headers });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/admin-guard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = (function () {
    function AdminGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('admin') === '200') {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* Authentication */]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "../../../../../src/app/announcements-admin/announcements-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "dd{\r\n    padding-left: 30px;\r\n    padding-top: 20px;\r\n}\r\ndt{\r\n    padding-top: 20px;\r\n    font-size: 25px;\r\n}\r\n#ann{\r\n    margin-bottom: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/announcements-admin/announcements-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-tab-group class=\"col-md-12 col-md-offset-0 col-xs-offset-0 col-xs-12\">\n    <mat-tab label=\"All Announcements\">\n      <div id=\"ann\" *ngFor=\"let ann of announcements\">\n        <dt>{{ann.title}}</dt>\n        <dd>{{ann.body}}\n        </dd>\n        <dd>\n          <strong>ANNOUNCEMENT ID: {{ann.id}}</strong>\n        </dd>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Add Announcement\">\n      <form>\n        <h3 class=\"col-md-6 col-md-offset-5 col-xs-offset-4 col-xs-6\">Add</h3>\n        <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-2 col-xs-8\">\n          <input matInput placeholder=\"Title\" type=\"text\" name=\"announcementTitle\" [(ngModel)]=\"model.title\" #title=\"ngModel\" required>\n        </mat-form-field>\n        <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-2 col-xs-8\">\n          <textarea matInput placeholder=\"Body\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" type=\"text\" name=\"announcementBody\" [(ngModel)]=\"model.body\" #body=\"ngModel\" required></textarea>\n        </mat-form-field>\n        <div class=\"col-md-8 col-md-offset-4 col-xs-4 col-xs-offset-3\">\n          <button mat-button class=\"col-md-5  btn btn-primary\" (click)=\"addAnnouncement(model)\" style=\"margin-bottom: 40px;\">Add announcement</button>\n        </div>\n      </form>\n    </mat-tab>\n    <mat-tab label=\"Modify Announcement\">\n      <form>\n        <h3 class=\"col-md-6 col-md-offset-5 col-xs-offset-4 col-xs-6\">Modify</h3>\n        <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-2 col-xs-8\">\n          <input matInput placeholder=\"Id\" type=\"text\" name=\"announcementId\" [(ngModel)]=\"model2.id\" #annId=\"ngModel\" required>\n        </mat-form-field>\n        <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-2 col-xs-8\">\n          <input matInput placeholder=\"Title\" type=\"text\" name=\"announcementTitle\" [(ngModel)]=\"model2.title\" #title=\"ngModel\" required>\n        </mat-form-field>\n        <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-2 col-xs-8\">\n          <textarea matInput placeholder=\"Body\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" type=\"text\" name=\"announcementBody\" [(ngModel)]=\"model2.body\" #body=\"ngModel\" required></textarea>\n        </mat-form-field>\n        <div class=\"col-md-8 col-md-offset-4 col-xs-4 col-xs-offset-3\">\n          <button mat-button class=\"col-md-5  btn btn-primary\" (click)=\"updateAnnouncement(model2)\" style=\"margin-bottom: 40px;\">Modify announcement</button>\n        </div>\n      </form>\n    </mat-tab>\n    <mat-tab label=\"Delete Announcement\">\n      <form>\n        <h3 class=\"col-md-6 col-md-offset-5 col-xs-offset-4 col-xs-6\">Delete</h3>\n        <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-2 col-xs-8\">\n          <input matInput placeholder=\"Id\" type=\"text\" name=\"announcementId\" [(ngModel)]=\"announcementId3\" #annId=\"ngModel\" required>\n        </mat-form-field>\n        <div class=\"col-md-8 col-md-offset-4 col-xs-4 col-xs-offset-3\">\n          <button mat-button class=\"col-md-5  btn btn-primary\" (click)=\"deleteAnnouncement(announcementId3)\" style=\"margin-bottom: 40px;\">Delete announcement</button>\n        </div>\n      </form>\n    </mat-tab>\n  </mat-tab-group>\n</div>"

/***/ }),

/***/ "../../../../../src/app/announcements-admin/announcements-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementsAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_announcements_service__ = __webpack_require__("../../../../../src/app/_services/announcements.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnnouncementsAdminComponent = (function () {
    function AnnouncementsAdminComponent(router, announcementsService) {
        this.router = router;
        this.announcementsService = announcementsService;
        this.model = {};
        this.model2 = {};
        this.announcements = [];
    }
    AnnouncementsAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.announcementsService.getAnnouncements()
            .subscribe(function (data) {
            var x = JSON.parse(JSON.stringify(data));
            var y = JSON.parse(x['_body']);
            _this.announcements = y;
        }, function (error) {
            alert(error);
        });
    };
    AnnouncementsAdminComponent.prototype.getAnnouncement = function (id) {
        this.announcementsService.getAnnouncement(id)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            alert(error);
        });
    };
    AnnouncementsAdminComponent.prototype.addAnnouncement = function () {
        this.model.adminId = 'c4e3c477-eff5-45b5-a4c6-2d6d28eae60d';
        this.model.publishDate = new Date().toJSON();
        this.announcementsService.addAnnouncement(this.model)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    AnnouncementsAdminComponent.prototype.updateAnnouncement = function () {
        this.model2.adminId = 'c4e3c477-eff5-45b5-a4c6-2d6d28eae60d';
        this.model2.publishDate = new Date().toJSON();
        this.announcementsService.updateAnnouncement(this.model2)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    AnnouncementsAdminComponent.prototype.deleteAnnouncement = function (id) {
        this.announcementsService.deleteAnnouncement(id).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    AnnouncementsAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-announcements-admin',
            template: __webpack_require__("../../../../../src/app/announcements-admin/announcements-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/announcements-admin/announcements-admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_announcements_service__["a" /* AnnouncementsService */]])
    ], AnnouncementsAdminComponent);
    return AnnouncementsAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/announcements/announcements.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "dd{\r\n    padding-left: 30px;\r\n    padding-top: 20px;\r\n}\r\ndt{\r\n    padding-top: 20px;\r\n    font-size: 25px;\r\n}\r\n#ann{\r\n    margin-bottom: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/announcements/announcements.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div id=\"ann\" *ngFor=\"let ann of announcements\">\r\n      <dt>{{ann.title}}</dt>\r\n      <dd>{{ann.body}} - <strong>{{ann.publishDate}}</strong></dd>\r\n  </div>\r\n  \r\n"

/***/ }),

/***/ "../../../../../src/app/announcements/announcements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_announcements_service__ = __webpack_require__("../../../../../src/app/_services/announcements.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnnouncementsComponent = (function () {
    function AnnouncementsComponent(router, announcementsService) {
        this.router = router;
        this.announcementsService = announcementsService;
        this.model = {};
        this.model2 = {};
        this.announcements = [];
    }
    AnnouncementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.announcementsService.getAnnouncements()
            .subscribe(function (data) {
            var x = JSON.parse(JSON.stringify(data));
            var y = JSON.parse(x['_body']);
            _this.announcements = y;
        }, function (error) {
            alert(error);
        });
    };
    AnnouncementsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-announcements',
            template: __webpack_require__("../../../../../src/app/announcements/announcements.component.html"),
            styles: [__webpack_require__("../../../../../src/app/announcements/announcements.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_announcements_service__["a" /* AnnouncementsService */]])
    ], AnnouncementsComponent);
    return AnnouncementsComponent;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dash_admin_dash_admin_component__ = __webpack_require__("../../../../../src/app/dash-admin/dash-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_guard_guard__ = __webpack_require__("../../../../../src/app/admin-guard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__confirm_confirm_component__ = __webpack_require__("../../../../../src/app/confirm/confirm.component.ts");
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
    { path: 'confirm', component: __WEBPACK_IMPORTED_MODULE_11__confirm_confirm_component__["a" /* ConfirmComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__authentication_guard__["a" /* AuthenticationGuard */]] },
    { path: 'dashmin', component: __WEBPACK_IMPORTED_MODULE_9__dash_admin_dash_admin_component__["a" /* DashAdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__admin_guard_guard__["a" /* AdminGuard */]] },
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__reset_pass_reset_pass_component__ = __webpack_require__("../../../../../src/app/reset-pass/reset-pass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__recovery_recovery_component__ = __webpack_require__("../../../../../src/app/recovery/recovery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__announcements_announcements_component__ = __webpack_require__("../../../../../src/app/announcements/announcements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_announcements_service__ = __webpack_require__("../../../../../src/app/_services/announcements.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__dash_admin_dash_admin_component__ = __webpack_require__("../../../../../src/app/dash-admin/dash-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__sidenav_admin_sidenav_admin_component__ = __webpack_require__("../../../../../src/app/sidenav-admin/sidenav-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__announcements_admin_announcements_admin_component__ = __webpack_require__("../../../../../src/app/announcements-admin/announcements-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__admin_guard_guard__ = __webpack_require__("../../../../../src/app/admin-guard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__candidates_candidates_component__ = __webpack_require__("../../../../../src/app/candidates/candidates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__see_form_see_form_component__ = __webpack_require__("../../../../../src/app/see-form/see-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__confirm_confirm_component__ = __webpack_require__("../../../../../src/app/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__repartition_repartition_component__ = __webpack_require__("../../../../../src/app/repartition/repartition.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_19__reset_pass_reset_pass_component__["a" /* ResetPassComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* DialogOverviewExampleDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_29__see_form_see_form_component__["a" /* DialogReasonComponent */],
                __WEBPACK_IMPORTED_MODULE_20__recovery_recovery_component__["a" /* RecoveryComponent */],
                __WEBPACK_IMPORTED_MODULE_21__announcements_announcements_component__["a" /* AnnouncementsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__dash_admin_dash_admin_component__["a" /* DashAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_24__sidenav_admin_sidenav_admin_component__["a" /* SidenavAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_25__announcements_admin_announcements_admin_component__["a" /* AnnouncementsAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_28__candidates_candidates_component__["a" /* CandidatesComponent */],
                __WEBPACK_IMPORTED_MODULE_29__see_form_see_form_component__["b" /* SeeFormComponent */],
                __WEBPACK_IMPORTED_MODULE_30__confirm_confirm_component__["a" /* ConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_31__repartition_repartition_component__["a" /* RepartitionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__form_utilities_form_utilities_module__["a" /* FormUtilitiesModule */],
                __WEBPACK_IMPORTED_MODULE_16__material_utilities_material_utilities_module__["a" /* MaterialUtilitiesModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__app_config__["a" /* AppConfig */],
                __WEBPACK_IMPORTED_MODULE_13__authentication_guard__["a" /* AuthenticationGuard */],
                __WEBPACK_IMPORTED_MODULE_27__admin_guard_guard__["a" /* AdminGuard */],
                __WEBPACK_IMPORTED_MODULE_12__services_authentication_service__["a" /* Authentication */],
                __WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_22__services_announcements_service__["a" /* AnnouncementsService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* DialogOverviewExampleDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_29__see_form_see_form_component__["a" /* DialogReasonComponent */]
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

/***/ "../../../../../src/app/candidates/candidates.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    height: 100%;\r\n  }\r\n  .mat-cell{\r\n    padding: 10px;\r\n  }\r\n  .mat-header-cell{\r\n    padding-left: 10px;\r\n  }\r\n  .mat-header-cell.mat-sort-header-sorted {\r\n    color: black;\r\n   }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/candidates/candidates.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\" style=\"margin-bottom:30px;\">\n  <mat-table #table [dataSource]=\"dataSource\">\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"email\">\n      <mat-header-cell *matHeaderCellDef> Email </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.email}} </mat-cell>\n    </ng-container>\n\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"firstName\">\n      <mat-header-cell *matHeaderCellDef> First Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.firstName}} </mat-cell>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"lastName\">\n      <mat-header-cell *matHeaderCellDef> Last Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.lastName}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"subject\" style=\"display: none;\">\n      <mat-header-cell *matHeaderCellDef> Subject </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.subject}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"get\">\n        <mat-header-cell *matHeaderCellDef> See Form </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"><button (click)=\"getForm(element.email)\"> Get Form </button> </mat-cell>\n      </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n\n  <mat-paginator #paginator [length]=\"length\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20]\">\n  </mat-paginator>\n</div>\n\n<app-see-form *ngFor=\"let r of reset\" id=\"currForm\" [currentUserMail]=\"email\">\n</app-see-form>\n"

/***/ }),

/***/ "../../../../../src/app/candidates/candidates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidatesComponent; });
/* unused harmony export Candidate */
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




var CandidatesComponent = (function () {
    function CandidatesComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.candidates = [];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["H" /* MatTableDataSource */]();
        this.cand = [];
        this.reset = [{}];
    }
    // tslint:disable-next-line:use-life-cycle-interface
    CandidatesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.userService.getCandidates(0, 10)
            .subscribe(function (data) {
            _this.candidates = JSON.parse(JSON.parse(JSON.stringify(data))._body);
            console.log(_this.cand);
            for (var i = 0; i < _this.candidates.length; i++) {
                _this.cand[i] = new Candidate();
                _this.cand[i].email = _this.candidates[i].email;
                _this.cand[i].firstName = _this.candidates[i].firstName;
                _this.cand[i].lastName = _this.candidates[i].lastName;
                _this.cand[i].subject = _this.candidates[i].subject;
                _this.cand[i].get = _this.candidates[i].get;
            }
            _this.dataSource.data = _this.cand;
            _this.dataSource.paginator = _this.paginator;
            _this.length = _this.dataSource.data.length;
            var names = Object.getOwnPropertyNames(_this.dataSource.data[0]);
            _this.displayedColumns = names;
        }, function (error) {
            console.log(error);
        });
    };
    CandidatesComponent.prototype.ngOnInit = function () {
    };
    CandidatesComponent.prototype.getForm = function (email) {
        this.reset[0] = {};
        this.toggled = true;
        this.email = email;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatPaginator */])
    ], CandidatesComponent.prototype, "paginator", void 0);
    CandidatesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-candidates',
            template: __webpack_require__("../../../../../src/app/candidates/candidates.component.html"),
            styles: [__webpack_require__("../../../../../src/app/candidates/candidates.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], CandidatesComponent);
    return CandidatesComponent;
}());

var Candidate = (function () {
    function Candidate() {
    }
    return Candidate;
}());



/***/ }),

/***/ "../../../../../src/app/confirm/confirm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\r\n    /*color: rgba(62, 156, 242, 0.5);*/\r\n    color: #2f5e85;\r\n    font-weight: bold;\r\n    padding: 10px 20px;\r\n    margin: 20px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n}\r\nbutton:hover{\r\n\topacity: 0.6;\r\n}\r\n.navbar-buttons-hover:hover{\r\n\ttext-shadow: 1px 1px 2px black, 0 0 1em gray, 0 0 1em white;\r\n}\r\n.right {\r\n\tfloat: right;\r\n}\r\n#welcome-panel{\r\n\tbackground: rgba(39,39,39,1);\r\n}\r\nheader {\r\n\tmin-height:100vh;\r\n\tbackground: url('https://i.pinimg.com/originals/5b/bc/11/5bbc11d7852485126c992135005efd9d.png') no-repeat center center;\r\n\tbackground-size: cover;\r\n\tbackground-color: #EDEFF3;\r\n\tpadding-top: 20%;\r\n\t/*background: rgba(62, 156, 242, 0.1);*/\r\n}\r\nh1{\r\n\tcolor: white;\r\n\ttext-shadow: 1px 1px 2px black, 0 0 1em gray, 0 0 0.2em darkblue;\r\n}\r\nh2 {\r\n\tcolor: white;\r\n}\r\n\r\n.beneficii {\r\n\tpadding-top: 75px;\r\n\tbackground-color: #EDEFF3;\r\n\tmin-height: 640px;\r\n}\r\n\r\n.beneficii ul {\r\n\tcolor: #20547E;\r\n\tline-height: 1.7;\r\n\ttext-shadow: unset;\r\n\tfont-size: 2em;\r\n}\r\n\r\n.impresii {\r\n\tpadding-top: 75px;\r\n\tbackground-color: rgba(28, 50, 79,1);\r\n\tmin-height: 640px;\r\n}\r\n\r\n.contact {\r\n\tbackground-color: #EDEFF3;\r\n\tmin-height: 640px;\r\n}\r\n\r\n.padded {\r\n\tpadding: 10%;\r\n}\r\n\r\n.first {\r\n\tmargin-top: 5%;\r\n\tmargin-bottom: 7%;\r\n}\r\n\r\n.contactImg {\r\n\twidth: 100%;\r\n    \theight: auto;\r\n\tmin-height: 640px;\r\n\tfloat: left;\r\n}\r\n\r\n.detalii {\r\n\tcolor: black;\r\n\tfloat: left;\r\n\tpadding-top: 75px;\r\n\tpadding-left: 15px;\r\n}\r\n\r\nfooter {\r\n\tbackground-color: rgba(39, 39, 39,1);\r\n  color: white;\r\n }\r\n\r\n footer a {\r\n \tcolor: white;\r\n }\r\n\r\n .social img {\r\n \twidth: 50px;\r\n \tmargin-right: 20px;\r\n }\r\n\r\n .social {\r\n \tpadding: 20px 20px 20px 0; \r\n }\r\n #bs-example-navbar-collapse-1{\r\n\t float: right !important;\r\n }\r\n\r\n @media screen and (max-width: 770px) {\r\n    #bs-example-navbar-collapse-1{\r\n\t\tfloat: left !important;\r\n\t}\r\n\theader{\r\n\t\tpadding-top: 90%;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    #padded{\r\n\t\tdisplay: none;\r\n\t}\r\n\theader{\r\n\t\tpadding-top: 90%;\r\n\t}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/confirm/confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n\n    <title>FII Admis</title>\n\n</head>\n\n<body id=\"top\">\n    <nav class=\"navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <div class=\"container\">\n            <div class=\"navbar-header\" >\n                <button type=\"button\" style=\"margin-right:10%;\"class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" tabindex=\"1\"\n                    accesskey=\"m\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\"  href=\"#\">\n                    <img style=\"height:inherit;\" src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/logo.png\"\n                        alt=\"FII Admis logo\">\n                </a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav\">\n                    <li>\n                        <a class=\"navbar-buttons-hover\" href=\"#beneficii\">\n                            <h2 >Benefits</h2>\n                        </a>\n                    </li>\n                    <li>\n                        <a class=\"navbar-buttons-hover\" href=\"#impresii\">\n                            <h2 >Impressions</h2>\n                        </a>\n                    </li>\n                    <li>\n                        <a class=\"navbar-buttons-hover\" href=\"#contact\">\n                            <h2 >Contact</h2>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n\n    <header>\n        <div class=\"container\" id=\"welcome-panel\">\n            <div class=\"col-md-12\">\n                <div class=\"intro\">\n                    <h1 style=\"margin-bottom:22px;\">Thanks for confirming the mail! Click <a [routerLink]=\"['/login']\" >here</a> to login! </h1>\n                </div>\n            </div>\n        </div>\n    </header>\n\n    <section id=\"beneficii\" class=\"beneficii\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-7\">\n                    <div class=\"header-content\">\n                        <div class=\"header-content-inner\">\n                            <h1 style=\"color: rgba(28, 50, 79,1); font-size: 3em; text-shadow: unset;\">What do we offer?</h1><br>\n                            <ul>\n                                <li>a stimulating academic enviroment</li>\n                                <li>flexibility when choosing your study program</li>\n                                <li>latest tehnologies</li>\n                                <li>labs adequately equipped</li>\n                                <li>free access to software documentations</li>\n                                <li>opportunities to study or/and internships abroad</li>\n                                <li>friendly and helpful professors</li>\n                                <li>a diploma </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-2\"></div>\n                <div class=\"col-md-3\">\n                    <div class=\"device-container\" id=\"padded\">\n                        <img src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/success.png\" alt=\"Success\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section id=\"impresii\" class=\"impresii\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"header-content\">\n                        <div class=\"header-content-inner\">\n                            <h1 style=\"color: white; font-size: 3em; text-shadow: unset; \">What do our graduates say?</h1>\n                            <blockquote class=\"first\">\n                                <h4 style=\"color: white; text-align: justify; font-style: italic;\">\n                                    I graduated the Faculty of Computer Science of the \"Alexandru\n                                    Ioan Cuza\" University in Ia&#351;i. I consider myself, from this point of view,\n                                    a privileged person because I had the honor of being educated by respected and open-minded professors while \n                                    also having part of colleagues from whom I had tons to learn.\n                                    <br><br> Through this institution I managed to fructify opportunities, opportunities which are needed and available to\n                                    all the community of students... so with the best intentions I invite you to discover them yourselves!</h4><br>\n                                <h4 class=\"right\" style=\"color: white;\">Alexandru Pruteanu (graduate FII 2001), Microsoft Rom&#226;nia</h4>\n                            </blockquote>\n                            <blockquote>\n                                <h4 style=\"color: white; text-align: justify; font-style: italic;\">Computer Science is not a field that cannot be merged\n                                    with others. On the contrary, there are a lot of ways to do that. You can combine it with biology (bio-informatics), art\n                                    (design, graphics), medicine (working with x-ray images), movie industry (special effects), economy (database, transaction\n                                    security), physics (quantic informatics), and so many more.. \n                                </h4><br>\n                                <h4 class=\"right\" style=\"color: white;\">Alexandrina Orzan (graduate FII 2003), team researcher at MAVERICK, INRIA,\n                                    Rh&ocirc;ne-Alpes</h4>\n                            </blockquote>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section id=\"contact\" class=\"contact\">\n        <div class=\"container\">\n            <div class=\"col-md-6\">\n                <img src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/fii.jpg\" class=\"contactImg\"\n                    alt=\"FII\">\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"detalii\">\n                    <h1 style=\"color: rgba(28, 50, 79,1); font-size: 3em; text-shadow: unset;\">How can you get to us?</h1>\n                    <h2 style=\"color: #000; font-size: 1.7em; text-shadow: unset;\">\n                        <strong>Address: </strong><br>\n                        <br> Facultatea de Informatic&#259;, Universitatea \"Al. I. Cuza\",\n                        <br> General Berthelot, 16,\n                        <br> IA&#350;I, 700483, ROM&#194;NIA\n                        <br>\n                    </h2>\n                    <h3>\n                        <strong>Phone: </strong>\n                        <a href=\"tel:+40232201090\">+40 232 201 090</a>\n                    </h3>\n                    <h3>\n                        <strong>Fax: </strong>+40 232 201 490</h3>\n                    <h3>\n                        <strong>E-mail: </strong>\n                        <a href=\"mailto:secretariat@info.uaic.ro\">secretariat@info.uaic.ro</a>\n                    </h3>\n                    <div class=\"social\">\n                        <a href=\"https://www.facebook.com/FacultateaDeInformaticaUAICIasi\">\n                            <img src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/facebook.png\"\n                                alt=\"Facebook\">\n                        </a>\n                        <a href=\"https://twitter.com/uaiciasi\">\n                            <img src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/twitter.png\"\n                                alt=\"Twitter\">\n                        </a>\n                        <a href=\"https://www.linkedin.com/grps/Facultatea-de-Informatica-Iasi-91904\">\n                            <img src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/linkedin.png\"\n                                alt=\"LinkedIn\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <footer >\n        <div class=\"container\">\n            <h4>&copy; 2017\n                <a href=\"https://www.info.uaic.ro\">Faculty of Computer Science Ia&#351;i</a>. All rights reserved.</h4>\n        </div>\n    </footer>\n</body>"

/***/ }),

/***/ "../../../../../src/app/confirm/confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
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




var ConfirmComponent = (function () {
    function ConfirmComponent(userService, authenticationService, router) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
    };
    ConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-confirm',
            template: __webpack_require__("../../../../../src/app/confirm/confirm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/confirm/confirm.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* Authentication */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dash-admin/dash-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#form{\r\n    display: none;\r\n}\r\n#repartition{\r\n    display: none;\r\n}\r\n#reset{\r\n    display: none;\r\n}\r\n#welcome-panel{\r\n    margin-top: 50px;    \r\n    background-color: rgba(255,255,255,0.9);\r\n    margin-bottom: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dash-admin/dash-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<body style=\"background:black\">\r\n    <app-sidenav-admin>\r\n        <div class=\"dash-container\">\r\n            <div id=\"announcements\">\r\n                <div class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" id=\"welcome-panel\">\r\n                    <h2 class=\"col-md-4 col-md-offset-5 col-xs-offset-3 col-xs-7\" style=\"margin-bottom:20px;\">Announcements</h2>\r\n                    <app-announcements-admin class=\"col-md-8 col-md-offset-2\">\r\n                    </app-announcements-admin>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"dash-container\" id=\"form\">\r\n            <div class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" id=\"welcome-panel\" style=\"word-wrap: break-word;\">\r\n                <h2 class=\"col-md-4 col-md-offset-5 col-xs-offset-1 col-xs-10\" style=\"margin-bottom:20px;\">Candidates</h2>\r\n                <app-candidates class=\"col-md-12 col-md-offset-0\">\r\n                </app-candidates>\r\n            </div>\r\n        </div>\r\n        <div class=\"dash-container\" id=\"repartition\">\r\n            <div class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" id=\"welcome-panel\" style=\"word-wrap: break-word;\">\r\n                <h2 class=\"col-md-4 col-md-offset-5 col-xs-offset-1 col-xs-10\" style=\"margin-bottom:20px;\">Repartition</h2>\r\n                <app-repartition class=\"col-md-12 col-md-offset-0\">\r\n                </app-repartition>\r\n            </div>\r\n        </div>\r\n    </app-sidenav-admin>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/dash-admin/dash-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashAdminComponent; });
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

var DashAdminComponent = (function () {
    function DashAdminComponent() {
    }
    DashAdminComponent.prototype.ngOnInit = function () {
    };
    DashAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dash-admin',
            template: __webpack_require__("../../../../../src/app/dash-admin/dash-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dash-admin/dash-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashAdminComponent);
    return DashAdminComponent;
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

module.exports = "<body style=\"background:black\">\r\n  <dashboard-sidenav>\r\n    <div class=\"dash-container\">\r\n      <div id=\"announcements\">\r\n        <div class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" id=\"welcome-panel\">\r\n          <h2 class=\"col-md-4 col-md-offset-5 col-xs-offset-3 col-xs-7\" style=\"margin-bottom:20px;\">Announcements</h2>\r\n          <app-announcements class=\"col-md-8 col-md-offset-2\">\r\n            </app-announcements>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"dash-container\" id=\"form\">\r\n      <div class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" id=\"welcome-panel\" style=\"word-wrap: break-word;\">\r\n        <h2 class=\"col-md-4 col-md-offset-5 col-xs-offset-1 col-xs-10\" style=\"margin-bottom:20px;\">Application Form</h2>\r\n        <app-fii-form class=\"col-md-8 col-md-offset-2\">\r\n        </app-fii-form>\r\n      </div>\r\n    </div>\r\n    <div class=\"dash-container\" id=\"reset\">\r\n      <div class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" id=\"welcome-panel\">\r\n        <h2 class=\"col-md-4 col-md-offset-5 col-xs-offset-1 col-xs-10\" style=\"margin-bottom:20px;\">Reset Password</h2>\r\n        <app-reset-pass class=\"col-md-8 col-md-offset-2\">\r\n        </app-reset-pass>\r\n      </div>\r\n    </div>\r\n  </dashboard-sidenav>\r\n</body>\r\n"

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

/***/ "../../../../../src/app/form-utilities/fii-form/fii-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* The Modal (background) */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    padding-top: 100px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content (image) */\r\n.modal-content {\r\n    margin: auto;\r\n    display: block;\r\n    width: 80%;\r\n    max-width: 700px;\r\n}\r\n\r\n/* Caption of Modal Image */\r\n#caption {\r\n    margin: auto;\r\n    display: block;\r\n    width: 80%;\r\n    max-width: 700px;\r\n    text-align: center;\r\n    color: #ccc;\r\n    padding: 10px 0;\r\n    height: 150px;\r\n}\r\n\r\n/* Add Animation */\r\n.modal-content, #caption {    \r\n    -webkit-animation-name: zoom;\r\n    -webkit-animation-duration: 0.6s;\r\n    animation-name: zoom;\r\n    animation-duration: 0.6s;\r\n}\r\n\r\n@-webkit-keyframes zoom {\r\n    from {-webkit-transform:scale(0)} \r\n    to {-webkit-transform:scale(1)}\r\n}\r\n\r\n@keyframes zoom {\r\n    from {-webkit-transform:scale(0);transform:scale(0)} \r\n    to {-webkit-transform:scale(1);transform:scale(1)}\r\n}\r\n\r\n/* The Close Button */\r\n.close {\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 35px;\r\n    color: #f1f1f1;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    transition: 0.3s;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: #bbb;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form-utilities/fii-form/fii-form.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"col-md-8 col-md-offset-2 col-xs-offset-2 col-xs-8\" id=\"congratulation\" style=\"display:none;color: green;\">\r\n  Congratulations your submission was approved! See you at the exam!</p>\r\n<mat-horizontal-stepper id=\"big-form\" class=\"col-md-12 col-md-offset-0 col-xs-offset-0 col-xs-12\" style=\"background: transparent;width:100%;\"\r\n  [linear]=true>\r\n  <div *ngFor=\"let j of [0,1,2,3,4,5,6]\">\r\n    <mat-step [stepControl]=\"'firstFormGroup'\">\r\n      <form *ngFor=\"let field of fields; let z = index\">\r\n        <div *ngIf=\"z<(fields.length)/7*(j+1) && z>=(fields.length)/7*j \" [ngSwitch]=\"field.type\">\r\n          <ng-template matStepLabel>Step {{j+1}}</ng-template>\r\n          <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" *ngSwitchCase=\"'text'\">\r\n            <input matInput placeholder={{field.placeholder}} disabled={{field.checked}} type={{field.type}} id={{field.name}} value={{field.value}}\r\n              (input)=\"inputElementListener(field.name)\" required>\r\n            <mat-hint>\r\n              <div style=\"color: green;\" *ngIf=\"field.checked\">\r\n                <i style=\"font-size:15px; color: green;\" class=\"material-icons\">done</i> Field checked by an admin.</div>\r\n              <div *ngIf=\"!field.checked && noReason(field.reason)\">{{field.hint}}</div>\r\n              <div *ngIf=\"!field.checked && !noReason(field.reason)\" style=\"color:red;font-weight:400;\">{{field.reason}}</div>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n          <div style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-0 col-xs-12\" *ngSwitchCase=\"'file'\">\r\n            <h3 style=\"margin-top:20px;margin-bottom:20px;\">{{field.placeholder}}</h3>\r\n            <input type={{field.type}} id={{field.name}} accept=\"image/*\" (change)=\"changeListener($event, z)\" >\r\n            <img *ngIf=\"fields[z].value.length > 1\" src={{fields[z].value}} style=\"height: 100%; width:100%; cursor: pointer;margin-bottom:15px;margin-top:15px;\" (click)=\"zoom(fields[z].value)\">\r\n            <button *ngIf=\"fields[z].value.length > 1\" (click)=\"saveFile(fields[z].value, fields[z].name)\"  style=\"margin-top:15px;margin-bottom:15px;\">Save file</button>\r\n            <mat-hint >\r\n              <div style=\"margin-top:15px;color: green;\" *ngIf=\"field.checked\" >\r\n                <i style=\"font-size:15px\" class=\"material-icons\">done</i> Field checked by an admin.</div>\r\n              <div style=\"margin-top:15px;\" *ngIf=\"!field.checked && noReason(field.reason)\">{{field.hint}}</div>\r\n              <div style=\"margin-top:15px;\"*ngIf=\"!field.checked && !noReason(field.reason)\" style=\"color:red;font-weight:400;\">Reason: {{field.reason}}</div>\r\n            </mat-hint>\r\n          </div>\r\n          <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" *ngSwitchCase=\"'number'\">\r\n            <input matInput placeholder={{field.placeholder}} disabled={{field.checked}} type={{field.type}} id={{field.name}} value={{field.value}}\r\n              (input)=\"inputElementListener(field.name)\" required>\r\n            <mat-hint>\r\n              <div style=\"color: green;\" *ngIf=\"field.checked\">\r\n                <i style=\"font-size:15px\" class=\"material-icons\">done</i> Field checked by an admin.</div>\r\n              <div *ngIf=\"!field.checked && noReason(field.reason)\">Hint: {{field.hint}}</div>\r\n              <div *ngIf=\"!field.checked && !noReason(field.reason)\" style=\"color:red;font-weight:400;\">Reason: {{field.reason}}</div>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n          <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" *ngSwitchCase=\"'select'\">\r\n            <mat-select placeholder={{field.placeholder}} disabled={{field.checked}} name={{field.name}} id={{field.name}} [(ngModel)]=\"fields[z].value\">\r\n              <mat-option *ngFor=\"let option1 of field.selectOptions\" [value]=\"option1\">\r\n                {{option1}}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-hint>\r\n              <div style=\"color: green;\" *ngIf=\"field.checked\">\r\n                <i style=\"font-size:15px\" class=\"material-icons\">done</i> Field checked by an admin.</div>\r\n              <div *ngIf=\"!field.checked && noReason(field.reason)\">{{field.hint}}</div>\r\n              <div *ngIf=\"!field.checked && !noReason(field.reason)\" style=\"color:red;font-weight:400;\">Reason: {{field.reason}}</div>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n          <div style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-0 col-xs-12\" *ngSwitchCase=\"'radio'\">\r\n            <h3 style=\"margin-top:20px;margin-bottom:20px;\">{{field.placeholder}}</h3>\r\n            <mat-radio-group disabled={{field.checked}} name={{field.name}} id={{field.name}} [(ngModel)]=\"fields[z].value\">\r\n              <mat-radio-button class=\"col-md-10 col-md-offset-0 col-xs-offset-0 col-xs-12\" style=\"margin-top:10px;\" *ngFor=\"let option3 of field.checkChoices\"\r\n                [value]=\"option3\">\r\n                <br> {{option3}}\r\n              </mat-radio-button>\r\n            </mat-radio-group>\r\n            <mat-hint style=\"margin-top:10px;\" class=\"col-md-8 col-md-offset-0 col-xs-offset-1 col-xs-10\">\r\n              <div style=\"color: green;\" *ngIf=\"field.checked\">\r\n                <i style=\"font-size:15px\" class=\"material-icons\">done</i> Field checked by an admin.</div>\r\n              <div *ngIf=\"!field.checked && noReason(field.reason)\">{{field.hint}}</div>\r\n              <div *ngIf=\"!field.checked && !noReason(field.reason)\" style=\"color:red;font-weight:400;\">Reason: {{field.reason}}</div>\r\n            </mat-hint>\r\n          </div>\r\n          <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" *ngSwitchCase=\"'date'\">\r\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" value={{field.value}} id={{field.name}} name={{field.name}}\r\n              (dateInput)=\"addEvent(field.name, $event)\">\r\n            <mat-hint>\r\n              <div style=\"color: green;\" *ngIf=\"field.checked\">\r\n                <i style=\"font-size:15px\" class=\"material-icons\">done</i> Field checked by an admin.</div>\r\n              <div *ngIf=\"!field.checked && noReason(field.reason)\">{{field.hint}}</div>\r\n              <div *ngIf=\"!field.checked && !noReason(field.reason)\" style=\"color:red;font-weight:400;\">Reason: {{field.reason}}</div>\r\n            </mat-hint>\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"col-md-8 col-md-offset-4 col-xs-4 col-xs-offset-3\" *ngSwitchCase=\"'submit'\">\r\n            <input (click)=\"onSubmit()\" type=\"submit\" mat-button class=\"col-md-5  btn btn-primary\" id=\"registerSubmit\" style=\"font-size:30px;margin-bottom:30px;margin-top:40px;\"\r\n              value=\"Submit\" [disabled]=\"loading\">\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"col-md-8 col-md-offset-4 col-xs-4 col-xs-offset-3\" *ngIf=\"j>0 && j<6\">\r\n        <button mat-button matStepperPrevious>Back</button>\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n      <div class=\"col-md-8 col-md-offset-5 col-xs-4 col-xs-offset-3\" *ngIf=\"j==0\">\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n    </mat-step>\r\n  </div>\r\n</mat-horizontal-stepper>\r\n<div id=\"myModal\" class=\"modal\">\r\n    <span (click)=\"closeModal()\" class=\"close\">&times;</span>\r\n    <img class=\"modal-content\" id=\"img01\">\r\n    <div id=\"caption\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/form-utilities/fii-form/fii-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiiFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// tslint:disable-next-line:import-blacklist

var FiiFormComponent = (function () {
    function FiiFormComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    FiiFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('currUserMail')) {
            this.currentUserMail = localStorage.getItem('currUserMail');
            this.userService.getForm(this.currentUserMail).subscribe(function (data) {
                _this.fields = JSON.parse(JSON.parse(JSON.stringify(data))._body).blobObject.form;
                if (JSON.parse(JSON.parse(JSON.stringify(data))._body).approved) {
                    document.getElementById('congratulation').style.display = 'block';
                }
            }, function (error) {
            });
        }
        else {
            this.fields = [
                {
                    name: 'last-name',
                    placeholder: 'Your last name ( from birth certificate )',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: 'Ex: Popescu'
                },
                {
                    name: 'last-name-id',
                    placeholder: 'Your last name ( from identity card )',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: 'Ex: Ionescu'
                },
                {
                    name: 'first-name',
                    placeholder: 'Your first name',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: 'Ex: Andreea-Diana'
                },
                {
                    name: 'father-name',
                    placeholder: 'Your father\'s name',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: 'Ex: James Johnson'
                },
                {
                    name: 'mother-name',
                    placeholder: 'Your mother\'s name',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: 'Ex: Wendy Johnson'
                },
                {
                    name: 'CNP',
                    placeholder: 'Your personal identification number',
                    type: 'number',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: 'Romania ex: 2441205021975'
                },
                {
                    name: 'gender-select',
                    placeholder: 'Gender',
                    type: 'select',
                    checkChoices: [],
                    selectOptions: ['Male', 'Female', 'Non-binary'],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'date-of-birth',
                    placeholder: 'Date of birth',
                    type: 'date',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: 'Choose a date clicking on the icon on the right!'
                },
                {
                    name: 'country',
                    placeholder: 'Country',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'district',
                    placeholder: 'District',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'city',
                    placeholder: 'City',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'citizenship',
                    placeholder: 'Citizenship',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'nationality',
                    placeholder: 'Nationality',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'ethnicity',
                    placeholder: 'Ethnicity',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'first-language',
                    placeholder: 'First language',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'marital-status-select',
                    placeholder: 'Marital status',
                    type: 'select',
                    checkChoices: [],
                    selectOptions: ['Married', 'Not Married', 'Divorced', 'Widoe(er)', 'Undeclared'],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'identity-card-series',
                    placeholder: 'Identity card series',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: 'Ex: MX123456'
                },
                {
                    name: 'identity-card-serial-number',
                    placeholder: 'Identity card serial number',
                    type: 'number',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'identity-card-released-by',
                    placeholder: 'Identity card released by',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'date-of-release',
                    placeholder: 'Date of release',
                    type: 'date',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'date-of-expiration',
                    placeholder: 'Date of expiration',
                    type: 'date',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'permanent-address-select',
                    placeholder: 'Permanent address',
                    type: 'select',
                    checkChoices: [],
                    selectOptions: ['Urban', 'Countryside'],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'full-address',
                    placeholder: 'Full address',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'phone-number',
                    placeholder: 'Phone number',
                    type: 'number',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'email',
                    placeholder: 'E-mail address',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'survey-check-accommodation-1',
                    placeholder: 'Do you request accommodation in the period of your studies ?',
                    type: 'radio',
                    checkChoices: ['Yes', 'No'],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'survey-check-accommodation-2',
                    placeholder: 'Do you request accommodation in the period of admission test?',
                    type: 'radio',
                    checkChoices: ['Yes', 'No'],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'survey-check-social-state',
                    placeholder: 'Special social state',
                    type: 'radio',
                    checkChoices: ['Came from foster homes', 'Came from foster care', 'Came from single-parent households',
                        'Orphan of one parent', 'Orphan of both parents', 'Candidate falls within disabled people category'],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'institution',
                    placeholder: 'Institution where the candidate graduated',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'country-of-institution',
                    placeholder: 'Country',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'town-of-institution',
                    placeholder: 'Town',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'district-of-institution',
                    placeholder: 'District',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'domain',
                    placeholder: 'Domain/profile',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'studies-duration',
                    placeholder: 'Duration of studies',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'graduation-year',
                    placeholder: 'Graduation year',
                    type: 'number',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'form-of-education-select',
                    placeholder: 'Form of education',
                    type: 'select',
                    checkChoices: [],
                    selectOptions: ['Daily', 'Seral', 'FR', 'ID'],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'baccalaureate-diploma-series',
                    placeholder: 'Baccalaureate diploma series',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'baccalaureate-diploma-number',
                    placeholder: 'Baccalaureate diploma number',
                    type: 'number',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'baccalaureate-diploma-released-by',
                    placeholder: 'Baccalaureate diploma released by',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'baccalaureate-diploma-released-date',
                    placeholder: 'Baccalaureate diploma released date',
                    type: 'date',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'enrollment-sheet-number',
                    placeholder: 'Enrollment sheet number :',
                    type: 'number',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'studies-abroad-1',
                    placeholder: 'Act of recognition/equivalence(released by DPIRV/CNRED) number ',
                    type: 'number',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'studies-abroad-2',
                    placeholder: 'Act of recognition/equivalence(released by DPIRV/CNRED) series ',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-check',
                    placeholder: 'Student at other faculty/university',
                    type: 'radio',
                    checkChoices: ['Yes', 'No'],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-country',
                    placeholder: 'Country',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-town',
                    placeholder: 'Town',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-district',
                    placeholder: 'District',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-institution-name',
                    placeholder: 'Name of the institution',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-faculty-name',
                    placeholder: 'Name of the faculty',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'licence-area',
                    placeholder: 'Licence area',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'study-program',
                    placeholder: 'Study program/specialization',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-form-of-education-select',
                    placeholder: 'Form of education',
                    type: 'select',
                    checkChoices: [],
                    selectOptions: ['Daily', 'Seral', 'FR', 'ID'],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-year',
                    placeholder: 'Year',
                    type: 'number',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-number-of-semesters-financed-by-the-budget',
                    placeholder: 'Number of semesters financed by the state budget',
                    type: 'number',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-number-of-semesters-with-scholarship',
                    placeholder: 'Number of semesters you have benefited from the scholarship',
                    type: 'number',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-graduation-year',
                    placeholder: 'Year of graduation of the license studies',
                    type: 'number',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-licence-diploma',
                    placeholder: 'Do you have a licence diploma ?',
                    type: 'radio',
                    checkChoices: ['Yes', 'No'],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-licence-country',
                    placeholder: 'Country',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-licence-town',
                    placeholder: 'Town',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-licence-district',
                    placeholder: 'District',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-licence-name-of-the-institution',
                    placeholder: 'Name of the institution',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-licence-name-of-the-faculty',
                    placeholder: 'Faculty',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-licence-licence-area',
                    placeholder: 'Licence area',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-licence-study-program',
                    placeholder: 'Study program/ specialization',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-licence-title-obtained',
                    placeholder: 'The title obtained',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-licence-form-of-education-select',
                    placeholder: 'Form of education',
                    type: 'select',
                    checkChoices: [],
                    selectOptions: ['Daily', 'Seral', 'FR', 'ID'],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-licence-number-of-semesters-financed-by-the-budget',
                    placeholder: 'Number of semesters financed by the state budget',
                    type: 'number',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-licence-number-of-semesters-with-scholarship',
                    placeholder: 'Number of semesters you have benefited from the scholarship',
                    type: 'number',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-licence-duration',
                    placeholder: 'Duration of studies (number of years)',
                    type: 'number',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-licence-diploma-series',
                    placeholder: 'Licence diploma series',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-licence-diploma-number',
                    placeholder: 'Licence diploma number',
                    type: 'number',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-licence-diploma-released-by',
                    placeholder: 'Licence diploma released by',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-licence-diploma-released-date',
                    placeholder: 'Licence diploma released date',
                    type: 'date',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'another-studies-licence-diploma-number-of-enrollment-sheet',
                    placeholder: 'The number of the supplementary / enrollment sheet accompanying the study act',
                    type: 'number',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'studies-abroad-licence-1',
                    placeholder: 'Act of recognition/equivalence(released by DPIRV/CNRED) number ',
                    type: 'number',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'studies-abroad-licence-2',
                    placeholder: 'Act of recognition/equivalence(released by DPIRV/CNRED) series ',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'baccalaureate-mean',
                    placeholder: 'The average mean for the baccalaureate exam ',
                    type: 'text',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'baccalaureate-max-grade',
                    placeholder: 'The maximum grade obtained at mathematics baccalaureate exam or informatics baccalaureate ',
                    type: 'number',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'registering-receipt-picture',
                    placeholder: 'Receipt of registering',
                    type: 'file',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: 'A clear picture of the receipt (300 RON)'
                },
                {
                    name: 'tuition-receipt-file',
                    placeholder: 'Receipt of the tuition',
                    type: 'file',
                    checkChoices: [],
                    selectOptions: [],
                    value: '-',
                    checked: false,
                    reason: '',
                    hint: '*If necessary'
                },
                {
                    name: 'identity-file',
                    placeholder: 'Identity card',
                    type: 'file',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: 'Clear picture'
                },
                {
                    name: 'medical-file',
                    placeholder: 'Medical certificate',
                    type: 'file',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: 'Clear picture'
                },
                {
                    name: 'identity-book-file',
                    placeholder: 'Identity book',
                    type: 'file',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: 'Certifies domicile in Romania'
                },
                {
                    name: 'exam-choice',
                    placeholder: 'Your option for the written test :',
                    type: 'radio',
                    checkChoices: ['Mathematics', 'Informatics (Pascal)', 'Informatics (C/C++)'],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'olympiad',
                    placeholder: 'Do you request equivalence with diploma from olympiad organized by MEN? ',
                    type: 'radio',
                    checkChoices: ['Yes', 'No'],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'pre-admission-1',
                    // tslint:disable-next-line:max-line-length
                    placeholder: 'You participated in the pre-admission at the Faculty of Computer Science from Iasi and you want the grade to be taken into consideration in the current admission session? ',
                    type: 'radio',
                    checkChoices: ['Yes', 'No'],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'pre-admission-2',
                    // tslint:disable-next-line:max-line-length
                    placeholder: 'If you answered \'Yes\' to the previous question, do you want to take again the test in the current admission session?(only the the highest grade will be considered)',
                    type: 'radio',
                    checkChoices: ['Yes', 'No'],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'admission-choices',
                    placeholder: ' Admission options in order of preference',
                    type: 'radio',
                    checkChoices: ['Informatics (Romanian language), Informatics (English language) ',
                        ' Informatics (English language), Informatics (Romanian language)'],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'admission-tax',
                    placeholder: 'Do you agree to be assigned to the taxed program if you did not enter the budget-funded one?',
                    type: 'radio',
                    checkChoices: ['Yes ', 'No ', 'Only taxed'],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'survey-check',
                    placeholder: 'From where did you find out about Admission to UAIC ?',
                    type: 'radio',
                    checkChoices: ['Website dedicated to admission (admitere.uaic.ro) ', 'Faculty website ', 'brochure or admission booklet',
                        'University Facebook page', 'The week of open doors to the uaic',
                        'friends, acquaintances, relatives', 'I attended a high school presentation', 'High school teachers', 'Media'],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
                {
                    name: 'submit-button',
                    placeholder: '',
                    type: 'submit',
                    checkChoices: [],
                    selectOptions: [],
                    value: '',
                    checked: false,
                    reason: '',
                    hint: ''
                },
            ];
        }
    };
    FiiFormComponent.prototype.inputElementListener = function (id) {
        var element = document.getElementById(id).value;
        for (var i = 0; i < this.fields.length; i++) {
            if (this.fields[i].name === id) {
                this.fields[i].value = element;
            }
        }
    };
    FiiFormComponent.prototype.addEvent = function (id, event) {
        for (var i = 0; i < this.fields.length; i++) {
            if (this.fields[i].name === id) {
                this.fields[i].value = event.value.toISOString();
            }
        }
    };
    FiiFormComponent.prototype.noReason = function (reason) {
        if (reason !== '') {
            return false;
        }
        return true;
    };
    FiiFormComponent.prototype.saveFile = function (src, filename) {
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.style.display = 'none';
        var blob = this.b64toBlob(src.split(',')[1], src.split(';')[0].split(':')[1]);
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
        window.open(url);
    };
    FiiFormComponent.prototype.b64toBlob = function (b64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    FiiFormComponent.prototype.changeListener = function ($event, index) {
        this.readThis($event.target, index);
    };
    FiiFormComponent.prototype.readThis = function (inputValue, index) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.image = myReader.result;
            _this.fields[index].value = _this.image;
        };
        myReader.readAsDataURL(file);
    };
    FiiFormComponent.prototype.closeModal = function () {
        var modal = document.getElementById('myModal');
        modal.style.display = 'none';
    };
    FiiFormComponent.prototype.zoom = function (src) {
        var modal = document.getElementById('myModal');
        var modalImg = document.getElementById('img01');
        modal.style.display = 'block';
        modalImg.src = src;
    };
    FiiFormComponent.prototype.onSubmit = function () {
        var email = localStorage.getItem('currUserMail');
        var status = true;
        for (var i = 0; i < this.fields.length - 1; i++) {
            this.fields[i].reason = '';
            if (this.fields[i].value === '') {
                alert(this.fields[i].name);
                status = false;
                break;
            }
        }
        this.userService.sendForm(email, this.fields, status, false)
            .subscribe(function (data) {
        }, function (error) {
            console.log(error);
        });
    };
    FiiFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fii-form',
            template: __webpack_require__("../../../../../src/app/form-utilities/fii-form/fii-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/form-utilities/fii-form/fii-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
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
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */]
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

module.exports = "<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n\n    <title>FII Admis</title>\n\n</head>\n\n<body id=\"top\">\n    <nav class=\"navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <div class=\"container\">\n            <div class=\"navbar-header\" >\n                <button type=\"button\" style=\"margin-right:10%;\"class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" tabindex=\"1\"\n                    accesskey=\"m\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\"  href=\"#\">\n                    <img style=\"height:inherit;\" src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/logo.png\"\n                        alt=\"FII Admis logo\">\n                </a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav\">\n                    <li>\n                        <a class=\"navbar-buttons-hover\" href=\"#beneficii\">\n                            <h2 >Benefits</h2>\n                        </a>\n                    </li>\n                    <li>\n                        <a class=\"navbar-buttons-hover\" href=\"#impresii\">\n                            <h2 >Impressions</h2>\n                        </a>\n                    </li>\n                    <li>\n                        <a class=\"navbar-buttons-hover\" href=\"#contact\">\n                            <h2 >Contact</h2>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n\n    <header>\n        <div class=\"container\" id=\"welcome-panel\" *ngIf=\"!isLogged()\">\n            <div class=\"col-md-8\">\n                <div class=\"intro\">\n                    <h1>Welcome to the <br> Faculty of Computer Science! </h1>\n                    <h2 style=\"text-shadow: unset;\">Join today! Start your journey with us by signing up down below, or login\n                        if you already are registered.\n                    </h2>\n                    <button tabindex=\"3\" accesskey=\"s\" [routerLink]=\"['/register']\">SIGN UP</button>\n                    <button [routerLink]=\"['/login']\" style=\"margin-left: 40px;\">LOGIN</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"container\" id=\"welcome-panel\" *ngIf=\"isLogged()\">\n                <div class=\"col-md-8\">\n                    <div class=\"intro\" >\n                        <h1>Welcome back, {{user}}! </h1>\n                        <h2 style=\"text-shadow: unset;\">Check your application progress here down below!</h2>\n                        <button tabindex=\"3\" accesskey=\"s\" [routerLink]=\"['/dashboard']\" (click)=\"d()\">DASHBOARD</button>\n                        <button [routerLink]=\"['/']\" style=\"margin-left: 40px;\" (click)=\"logout()\" >LOG OUT</button>\n                    </div>\n                </div>\n            </div>\n    </header>\n\n    <section id=\"beneficii\" class=\"beneficii\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-7\">\n                    <div class=\"header-content\">\n                        <div class=\"header-content-inner\">\n                            <h1 style=\"color: rgba(28, 50, 79,1); font-size: 3em; text-shadow: unset;\">What do we offer?</h1><br>\n                            <ul>\n                                <li>a stimulating academic enviroment</li>\n                                <li>flexibility when choosing your study program</li>\n                                <li>latest tehnologies</li>\n                                <li>labs adequately equipped</li>\n                                <li>free access to software documentations</li>\n                                <li>opportunities to study or/and internships abroad</li>\n                                <li>friendly and helpful professors</li>\n                                <li>a diploma </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-2\"></div>\n                <div class=\"col-md-3\">\n                    <div class=\"device-container\" id=\"padded\">\n                        <img src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/success.png\" alt=\"Success\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section id=\"impresii\" class=\"impresii\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"header-content\">\n                        <div class=\"header-content-inner\">\n                            <h1 style=\"color: white; font-size: 3em; text-shadow: unset; \">What do our graduates say?</h1>\n                            <blockquote class=\"first\">\n                                <h4 style=\"color: white; text-align: justify; font-style: italic;\">\n                                    I graduated the Faculty of Computer Science of the \"Alexandru\n                                    Ioan Cuza\" University in Ia&#351;i. I consider myself, from this point of view,\n                                    a privileged person because I had the honor of being educated by respected and open-minded professors while \n                                    also having part of colleagues from whom I had tons to learn.\n                                    <br><br> Through this institution I managed to fructify opportunities, opportunities which are needed and available to\n                                    all the community of students... so with the best intentions I invite you to discover them yourselves!</h4><br>\n                                <h4 class=\"right\" style=\"color: white;\">Alexandru Pruteanu (graduate FII 2001), Microsoft Rom&#226;nia</h4>\n                            </blockquote>\n                            <blockquote>\n                                <h4 style=\"color: white; text-align: justify; font-style: italic;\">Computer Science is not a field that cannot be merged\n                                    with others. On the contrary, there are a lot of ways to do that. You can combine it with biology (bio-informatics), art\n                                    (design, graphics), medicine (working with x-ray images), movie industry (special effects), economy (database, transaction\n                                    security), physics (quantic informatics), and so many more.. \n                                </h4><br>\n                                <h4 class=\"right\" style=\"color: white;\">Alexandrina Orzan (graduate FII 2003), team researcher at MAVERICK, INRIA,\n                                    Rh&ocirc;ne-Alpes</h4>\n                            </blockquote>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section id=\"contact\" class=\"contact\">\n        <div class=\"container\">\n            <div class=\"col-md-6\">\n                <img src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/fii.jpg\" class=\"contactImg\"\n                    alt=\"FII\">\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"detalii\">\n                    <h1 style=\"color: rgba(28, 50, 79,1); font-size: 3em; text-shadow: unset;\">How can you get to us?</h1>\n                    <h2 style=\"color: #000; font-size: 1.7em; text-shadow: unset;\">\n                        <strong>Address: </strong><br>\n                        <br> Facultatea de Informatic&#259;, Universitatea \"Al. I. Cuza\",\n                        <br> General Berthelot, 16,\n                        <br> IA&#350;I, 700483, ROM&#194;NIA\n                        <br>\n                    </h2>\n                    <h3>\n                        <strong>Phone: </strong>\n                        <a href=\"tel:+40232201090\">+40 232 201 090</a>\n                    </h3>\n                    <h3>\n                        <strong>Fax: </strong>+40 232 201 490</h3>\n                    <h3>\n                        <strong>E-mail: </strong>\n                        <a href=\"mailto:secretariat@info.uaic.ro\">secretariat@info.uaic.ro</a>\n                    </h3>\n                    <div class=\"social\">\n                        <a href=\"https://www.facebook.com/FacultateaDeInformaticaUAICIasi\">\n                            <img src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/facebook.png\"\n                                alt=\"Facebook\">\n                        </a>\n                        <a href=\"https://twitter.com/uaiciasi\">\n                            <img src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/twitter.png\"\n                                alt=\"Twitter\">\n                        </a>\n                        <a href=\"https://www.linkedin.com/grps/Facultatea-de-Informatica-Iasi-91904\">\n                            <img src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/linkedin.png\"\n                                alt=\"LinkedIn\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <footer >\n        <div class=\"container\">\n            <h4>&copy; 2017\n                <a href=\"https://www.info.uaic.ro\">Faculty of Computer Science Ia&#351;i</a>. All rights reserved.</h4>\n        </div>\n    </footer>\n</body>"

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
            var fName = y.firstName;
            var lName = y.lastName;
            return fName + ' ' + lName;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    };
    HomeComponent.prototype.d = function () {
        if (localStorage.getItem('admin') === '200') {
            this.router.navigate(['/dashmin']);
        }
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
        var config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSnackBarConfig */]();
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
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MatSnackBar */],
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
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["K" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["L" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatTableModule */]
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
        var config = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSnackBarConfig */]();
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
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSnackBar */]])
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
        var config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSnackBarConfig */]();
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
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MatSnackBar */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/repartition/repartition.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/repartition/repartition.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"example-container col-md-8 col-md-offset-2 mat-elevation-z8\" >\n    <mat-table *ngFor=\"let r of reset\" #table [dataSource]=\"dataSource\" style=\"margin-top:15px;\">\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef> Classroom </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"capacity\">\n        <mat-header-cell *matHeaderCellDef> Capacity </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.capacity}} </mat-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"length\" [pageSize]=\"10\" [pageSizeOptions]=\"[10]\">\n    </mat-paginator>\n  </div>\n  <div>\n    <form>\n      <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\">\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Exam date\" [(ngModel)]=\"examDate\" name=\"exam-date\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n      <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-4 col-md-offset-2 col-xs-offset-1 col-xs-10\">\n        <input matInput placeholder=\"Classroom Name\" type=\"text\" name=\"name\" [(ngModel)]=\"classroomName\" required>\n      </mat-form-field>\n      <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-4 col-md-offset-0 col-xs-offset-1 col-xs-10\">\n        <input matInput placeholder=\"Capacity\" type=\"number\" name=\"capacity\" [(ngModel)]=\"classroomCapacity\" required>\n      </mat-form-field>\n      <div style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8  col-md-offset-2 col-xs-offset-1 col-xs-10\">\n        <input type=\"submit\" mat-button style=\"margin-top:14px; \" (click)=\"addClassroom()\" class=\"col-md-12 col-md-offset-0 col-xs-offset-0 col-xs-12\" value=\"Add Classroom\">\n      </div>\n    </form>\n  </div>\n\n  <input type=\"submit\" (click)=\"generate()\" mat-button class=\"col-md-4 col-md-offset-4 col-xs-12 col-xs-offset-0  btn btn-primary\" id=\"addRepartition\"\n    style=\"font-size:2em;margin-bottom:30px;margin-top:20px;\" value=\"Generate\" [disabled]=\"loading\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/repartition/repartition.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepartitionComponent; });
/* unused harmony export Classroom */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RepartitionComponent = (function () {
    function RepartitionComponent(userService) {
        this.userService = userService;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatTableDataSource */]();
        this.reset = [{}];
    }
    // tslint:disable-next-line:use-life-cycle-interface
    RepartitionComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.userService.getClassrooms()
            .subscribe(function (data) {
            _this.dataSource.data = JSON.parse(JSON.parse(JSON.stringify(data))._body);
            var x = JSON.parse(JSON.parse(JSON.stringify(data))._body);
            _this.length = _this.dataSource.data.length;
            for (var i = void 0; i < _this.length; i++) {
                _this.userService.getClassroomRepartition(x[i].name)
                    .subscribe(
                // tslint:disable-next-line:no-shadowed-variable
                function (data) {
                    console.log(data);
                }, function (error) {
                    console.log(error);
                });
            }
            var names = Object.getOwnPropertyNames(_this.dataSource.data[0]);
            _this.displayedColumns = names;
        }, function (error) {
            console.log(error);
        });
    };
    RepartitionComponent.prototype.generate = function () {
        var date = this.examDate.toJSON();
        this.userService.postRepartition(this.dataSource.data, date)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    RepartitionComponent.prototype.addClassroom = function () {
        var x = {};
        this.length++;
        x.name = this.classroomName;
        x.capacity = this.classroomCapacity;
        this.dataSource.data[this.dataSource.data.length] = x;
        this.reset[0] = {};
    };
    RepartitionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginator */])
    ], RepartitionComponent.prototype, "paginator", void 0);
    RepartitionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-repartition',
            template: __webpack_require__("../../../../../src/app/repartition/repartition.component.html"),
            styles: [__webpack_require__("../../../../../src/app/repartition/repartition.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], RepartitionComponent);
    return RepartitionComponent;
}());

var Classroom = (function () {
    function Classroom() {
    }
    return Classroom;
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

module.exports = "<div class=\"col-md-8 col-md-offset-0\" id=\"welcome-panel\">\r\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && reset()\" #f=\"ngForm\" novalidate>\r\n    <div class=\"form-group col-md-9 col-md-offset-5\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"oldpassword\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !password.valid\" style=\"color:red;\">Password is required</div>\r\n    </div>\r\n    <div class=\"form-group col-md-9 col-md-offset-5\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <label>New Password</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" (input)=\"checkConfirmPass()\" [(ngModel)]=\"model.confirmPassword\" required />\r\n      <div id=\"confirmError\" style=\"color:red;display:none;\">Passwords don't match</div>\r\n    </div>\r\n    <div class=\"form-group col-md-9 col-md-offset-5\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n        <label>Confirm New Password</label>\r\n        <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" (input)=\"checkConfirmPass()\" required />\r\n        <div id=\"confirmError\" style=\"color:red;display:none;\">Passwords don't match</div>\r\n      </div>\r\n    <div style=\"margin-bottom:30px;\" class=\"col-md-10 col-md-offset-6 col-xs-offset-0\">\r\n      <input type=\"submit\" mat-button class=\"col-md-7 col-md col-xs-12 col-xs-offset-0  btn btn-primary\"\r\n        id=\"registerSubmit\" style=\"font-size:2em;margin-bottom:30px;margin-top:20px;\" value=\"Submit\" [disabled]=\"loading\">\r\n      <mat-spinner class=\"col-xs-offset-0 col-xs-4 col-md-1 col-md-offset-0\" style=\"margin-left:16px;margin-top:26.5px;margin-left:16px;\"\r\n        *ngIf=\"loading\" [diameter]=\"30\"></mat-spinner>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/reset-pass/reset-pass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function ResetPassComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.model = {};
    }
    ResetPassComponent.prototype.ngOnInit = function () {
    };
    ResetPassComponent.prototype.reset = function () {
        this.userService.resetPassword(this.model.password, this.model.confirmPassword)
            .subscribe(function (data) {
            alert(data);
        }, function (error) {
            alert(error);
        });
    };
    ResetPassComponent.prototype.checkConfirmPass = function () {
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
    ResetPassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reset-pass',
            template: __webpack_require__("../../../../../src/app/reset-pass/reset-pass.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reset-pass/reset-pass.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], ResetPassComponent);
    return ResetPassComponent;
}());



/***/ }),

/***/ "../../../../../src/app/see-form/dialog-reason.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Dialog</h1>\r\n<div mat-dialog-content>\r\n    <p>Write the reason for which the input is invalid:</p>\r\n    <mat-form-field class=\"col-md-12 col-xs-12\">\r\n        <input placeholder=\"Reason\" matInput tabindex=\"-1\" [(ngModel)]=\"data.reason\">\r\n    </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions class=\"col-md-8 col-xs-10 col-md-offset-2 col-xs-offset-2\">\r\n    <button mat-button class=\"col-md-4  col-xs-offset-4\" [mat-dialog-close]=\"data.reason\" cdkFocusInitial>Add reason</button>\r\n    <button mat-button class=\"col-md-4  col-xs-offset-0\" (click)=\"onNoClick()\">Close</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/see-form/see-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* The Modal (background) */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    padding-top: 100px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content (image) */\r\n.modal-content {\r\n    margin: auto;\r\n    display: block;\r\n    width: 80%;\r\n    max-width: 700px;\r\n}\r\n\r\n/* Caption of Modal Image */\r\n#caption {\r\n    margin: auto;\r\n    display: block;\r\n    width: 80%;\r\n    max-width: 700px;\r\n    text-align: center;\r\n    color: #ccc;\r\n    padding: 10px 0;\r\n    height: 150px;\r\n}\r\n\r\n/* Add Animation */\r\n.modal-content, #caption {    \r\n    -webkit-animation-name: zoom;\r\n    -webkit-animation-duration: 0.6s;\r\n    animation-name: zoom;\r\n    animation-duration: 0.6s;\r\n}\r\n\r\n@-webkit-keyframes zoom {\r\n    from {-webkit-transform:scale(0)} \r\n    to {-webkit-transform:scale(1)}\r\n}\r\n\r\n@keyframes zoom {\r\n    from {-webkit-transform:scale(0);transform:scale(0)} \r\n    to {-webkit-transform:scale(1);transform:scale(1)}\r\n}\r\n\r\n/* The Close Button */\r\n.close {\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 35px;\r\n    color: #f1f1f1;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    transition: 0.3s;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: #bbb;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/see-form/see-form.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-horizontal-stepper *ngIf=\"!loading\" class=\"col-md-12 col-md-offset-0 col-xs-offset-0 col-xs-12\" style=\"background: transparent;width:100%;\"\n  [linear]=false>\n  <div *ngFor=\"let j of [0,1,2,3,4,5,6]\">\n    <mat-step [stepControl]=\"'firstFormGroup'\">\n      <form *ngFor=\"let field of fields; let z = index\">\n        <div *ngIf=\"z<(fields.length)/7*(j+1) && z>=(fields.length)/7*j \" [ngSwitch]=\"field.type\">\n          <ng-template matStepLabel>Step {{j+1}}</ng-template>\n          <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" *ngSwitchCase=\"'text'\">\n            <input matInput placeholder={{field.placeholder}} type={{field.type}} id={{field.name}} value={{field.value}} (input)=\"inputElementListener(field.name)\"\n              required>\n            <mat-hint>\n              <mat-checkbox [(ngModel)]=\"fields[z].checked\" name=\"{{fields[z].name + '-check'}}\" id=\"{{fields[z].name + '-check'}}\">Mark as valid!</mat-checkbox>\n              <button *ngIf=\"!fields[z].checked\" (click)=\"openDialog(z)\" mat-button style=\"color: red;font-size:15px;\"> Add reason </button>\n            </mat-hint>\n          </mat-form-field>\n          <div style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-0 col-xs-12\" *ngSwitchCase=\"'file'\">\n            <h3 style=\"margin-top:20px;margin-bottom:20px;\">{{field.placeholder}}</h3>\n            <input type={{field.type}} id={{field.name}} accept=\"image/*\" (change)=\"changeListener($event, z)\">\n            <img *ngIf=\"fields[z].value.length > 1\" src={{fields[z].value}} style=\"height: 50%; width:50%; cursor: pointer;margin-bottom:15px;margin-top:15px;\"\n              (click)=\"zoom(fields[z].value)\"><br>\n            <button *ngIf=\"fields[z].value.length > 1\" (click)=\"saveFile(fields[z].value, fields[z].name)\" style=\"margin-top:15px;margin-bottom:15px;\">Save file</button>\n            <br>\n            <mat-hint >\n              <mat-checkbox [(ngModel)]=\"fields[z].checked\" name=\"{{fields[z].name + '-check'}}\" id=\"{{fields[z].name + '-check'}}\">Mark as valid!</mat-checkbox>\n              <button *ngIf=\"!fields[z].checked\" (click)=\"openDialog(z)\" mat-button style=\"color: red;font-size:15px;\"> Add reason</button>\n            </mat-hint>\n          </div>\n          <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" *ngSwitchCase=\"'number'\">\n            <input matInput placeholder={{field.placeholder}} type={{field.type}} id={{field.name}} value={{field.value}} (input)=\"inputElementListener(field.name)\"\n              required>\n            <mat-hint >\n              <mat-checkbox [(ngModel)]=\"fields[z].checked\" name=\"{{fields[z].name + '-check'}}\" id=\"{{fields[z].name + '-check'}}\">Mark as valid!</mat-checkbox>\n              <button *ngIf=\"!fields[z].checked\" (click)=\"openDialog(z)\" mat-button style=\"color: red;font-size:15px;\"> Add reason</button>\n            </mat-hint>\n          </mat-form-field>\n          <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" *ngSwitchCase=\"'select'\">\n            <mat-select placeholder={{field.placeholder}} name={{field.name}} id={{field.name}} [(ngModel)]=\"fields[z].value\">\n              <mat-option *ngFor=\"let option1 of field.selectOptions\" [value]=\"option1\">\n                {{option1}}\n              </mat-option>\n            </mat-select>\n            <mat-hint >\n              <mat-checkbox [(ngModel)]=\"fields[z].checked\" name=\"{{fields[z].name + '-check'}}\" id=\"{{fields[z].name + '-check'}}\">Mark as valid!</mat-checkbox>\n              <button *ngIf=\"!fields[z].checked\" (click)=\"openDialog(z)\" mat-button style=\"color: red;font-size:15px;\"> Add reason</button>\n            </mat-hint>\n          </mat-form-field>\n          <div style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-0 col-xs-12\" *ngSwitchCase=\"'radio'\">\n            <h3 style=\"margin-top:20px;margin-bottom:20px;\">{{field.placeholder}}</h3>\n            <mat-radio-group disabled={{field.checked}} name={{field.name}} id={{field.name}} [(ngModel)]=\"fields[z].value\">\n              <mat-radio-button class=\"col-md-10 col-md-offset-0 col-xs-offset-0 col-xs-12\" style=\"margin-top:10px;\" *ngFor=\"let option3 of field.checkChoices\"\n                [value]=\"option3\">\n                <br> {{option3}}\n              </mat-radio-button>\n            </mat-radio-group>\n            <mat-hint style=\"margin-top:10px;\" class=\"col-md-8 col-md-offset-0 col-xs-offset-1 col-xs-10\">\n              <mat-checkbox [(ngModel)]=\"fields[z].checked\" name=\"{{fields[z].name + '-check'}}\" id=\"{{fields[z].name + '-check'}}\">Mark as valid!</mat-checkbox>\n              <button *ngIf=\"!fields[z].checked\" (click)=\"openDialog(z)\" mat-button style=\"color: red;font-size:15px;\"> Add reason</button>\n            </mat-hint>\n          </div>\n          <mat-form-field style=\"margin-top:30px;margin-bottom:20px;\" class=\"col-md-8 col-md-offset-2 col-xs-offset-1 col-xs-10\" *ngSwitchCase=\"'date'\">\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" value={{field.value}} id={{field.name}} name={{field.name}}\n              (dateInput)=\"addEvent(field.name, $event)\">\n            <mat-hint >\n              <mat-checkbox [(ngModel)]=\"fields[z].checked\" name={{field.name}}>Mark as valid!</mat-checkbox>\n              <button *ngIf=\"!fields[z].checked\" (click)=\"openDialog(z)\" mat-button style=\"color: red;font-size:15px;\"> Add reason</button>\n            </mat-hint>\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n          <div class=\"col-md-12 col-md-offset-0 col-xs-12 col-xs-offset-0\" *ngSwitchCase=\"'submit'\">\n            <input (click)=\"onSubmit()\" type=\"submit\" mat-button class=\"col-md-4 col-md-offset-1 col-xs-12 col-xs-offset-0 btn btn-primary\" id=\"registerSubmit\" style=\"font-size:2em;margin-bottom:30px;margin-top:20px;\"\n              value=\"Send Feedback\" [disabled]=\"loading\">\n              <input (click)=\"onApprove()\" type=\"submit\" mat-button class=\"col-md-4 col-md-offset-2 col-xs-12 col-xs-offset-0  btn btn-primary\" id=\"registerSubmit\" style=\"font-size:2em;margin-bottom:30px;margin-top:20px;\"\n              value=\"Approve\" [disabled]=\"loading\">\n            <mat-spinner class=\"col-xs-offset-0 col-xs-4 col-md-1 col-md-offset-0\" style=\"margin-left:16px;margin-top:26.5px;margin-left:16px;\"\n              *ngIf=\"loading\" [diameter]=\"30\"></mat-spinner>\n          </div>\n        </div>\n      </form>\n      \n      <div class=\"col-md-8 col-md-offset-4 col-xs-4 col-xs-offset-3\" *ngIf=\"j>0 && j<6\">\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n      <div class=\"col-md-8 col-md-offset-5 col-xs-4 col-xs-offset-3\" *ngIf=\"j==0\">\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </mat-step>\n  </div>\n</mat-horizontal-stepper>\n<div id=\"myModal\" class=\"modal\">\n  <span (click)=\"closeModal()\" class=\"close\">&times;</span>\n  <img class=\"modal-content\" id=\"img01\">\n  <div id=\"caption\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/see-form/see-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SeeFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogReasonComponent; });
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SeeFormComponent = (function () {
    function SeeFormComponent(router, userService, dialog) {
        this.router = router;
        this.userService = userService;
        this.dialog = dialog;
    }
    SeeFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentUserMail) {
            this.loading = true;
            this.userService.getForm(this.currentUserMail).subscribe(function (data) {
                _this.fields = JSON.parse(JSON.parse(JSON.stringify(data))._body).blobObject.form;
            }, function (error) {
            });
            this.loading = false;
        }
    };
    SeeFormComponent.prototype.saveFile = function (src, filename) {
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.style.display = 'none';
        var blob = this.b64toBlob(src.split(',')[1], src.split(';')[0].split(':')[1]);
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
        window.open(url);
    };
    SeeFormComponent.prototype.noReason = function (reason) {
        if (reason !== '') {
            return false;
        }
        return true;
    };
    SeeFormComponent.prototype.b64toBlob = function (b64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    SeeFormComponent.prototype.openDialog = function (i) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogReasonComponent, {
            data: { reason: this.reason }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.reason = result;
            _this.fields[i].reason = _this.reason;
            _this.fields[i].checked = false;
        });
    };
    SeeFormComponent.prototype.closeModal = function () {
        var modal = document.getElementById('myModal');
        modal.style.display = 'none';
    };
    SeeFormComponent.prototype.zoom = function (src) {
        var modal = document.getElementById('myModal');
        var modalImg = document.getElementById('img01');
        modal.style.display = 'block';
        modalImg.src = src;
    };
    SeeFormComponent.prototype.onSubmit = function () {
        for (var i = 0; i < this.fields.length; i++) {
            if (this.fields[i].reason !== '') {
                this.fields[i].value = '';
            }
        }
        this.userService.sendForm(this.currentUserMail, this.fields, false, false)
            .subscribe(function (data) {
            alert(data);
        }, function (error) {
            alert(error);
        });
    };
    SeeFormComponent.prototype.onApprove = function () {
        for (var i = 0; i < this.fields.length; i++) {
            this.fields[i].checked = true;
        }
        this.userService.sendForm(this.currentUserMail, this.fields, true, true)
            .subscribe(function (data) {
            alert(data);
        }, function (error) {
            alert(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], SeeFormComponent.prototype, "currentUserMail", void 0);
    SeeFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-see-form',
            template: __webpack_require__("../../../../../src/app/see-form/see-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/see-form/see-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */]])
    ], SeeFormComponent);
    return SeeFormComponent;
}());

var DialogReasonComponent = (function () {
    function DialogReasonComponent(dialogRef, dialModalRef, data) {
        this.dialogRef = dialogRef;
        this.dialModalRef = dialModalRef;
        this.data = data;
    }
    DialogReasonComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogReasonComponent.prototype.changePosition = function () {
        this.dialModalRef.updatePosition({ top: '250px', left: '250px' });
    };
    DialogReasonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'dialog-reason-dialog',
            template: __webpack_require__("../../../../../src/app/see-form/dialog-reason.html"),
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object])
    ], DialogReasonComponent);
    return DialogReasonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidenav-admin/sidenav-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  #main{\r\n    background-color: transparent;\r\n  }\r\n  .example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  #topbar{\r\n      height: 92.8px;\r\n      background: rgba(39,39,39,1);\r\n  }\r\n  #rightbar{\r\n    background: rgba(39,39,39,1);\r\n    width: 200px;\r\n  }\r\n  .sidenav-button{\r\n      color: white;\r\n      font-size: 20px;\r\n      margin-top:20px;\r\n  }\r\n  .sidenav-button:hover{\r\n      opacity: 0.1;\r\n  }\r\n  h1.example-app-name {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  .example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n  }\r\n  \r\n  .example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidenav-admin/sidenav-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<body  >\n  <div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n    <mat-toolbar color=\"primary\" id=\"topbar\" class=\"example-toolbar\">\n      <button mat-icon-button (click)=\"snav.toggle()\">\n        <mat-icon style=\"font-size:40px;\">&#9776;</mat-icon>\n      </button>\n      <img style=\"margin-left:30px;width:165.137px;height:50px;\" src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/logo.png\"\n        alt=\"FII Admis logo\">\n    </mat-toolbar>\n  \n    <mat-sidenav-container style=\"background:rgba(31,50,79,0.9)\" class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n      <mat-sidenav id=\"rightbar\" #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n        <mat-nav-list>\n          <a class=\"sidenav-button\" mat-list-item (click)=\"announcements()\">Announcements</a>\n          <a class=\"sidenav-button\" mat-list-item (click)=\"form()\">Candidates</a>\n          <a class=\"sidenav-button\" mat-list-item (click)=\"repartition()\">Repartition</a>\n          <a class=\"sidenav-button\" mat-list-item (click)=\"logout()\">Logout</a>\n        </mat-nav-list>\n      </mat-sidenav>\n  \n      <mat-sidenav-content id=\"main\">\n        <ng-content></ng-content>\n      </mat-sidenav-content>\n  \n    </mat-sidenav-container>\n  </div>\n  </body>"

/***/ }),

/***/ "../../../../../src/app/sidenav-admin/sidenav-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
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





var SidenavAdminComponent = (function () {
    function SidenavAdminComponent(changeDetectorRef, media, authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.fillerNav = Array(1).fill(0).map(function (_, i) { return "Nav Item " + (i + 1); });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    SidenavAdminComponent.prototype.ngOnInit = function () {
    };
    // tslint:disable-next-line:use-life-cycle-interface
    SidenavAdminComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    SidenavAdminComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    };
    SidenavAdminComponent.prototype.announcements = function () {
        this.toggle(1, 0, 0);
    };
    SidenavAdminComponent.prototype.form = function () {
        this.toggle(0, 1, 0);
    };
    SidenavAdminComponent.prototype.repartition = function () {
        this.toggle(0, 0, 1);
    };
    SidenavAdminComponent.prototype.toggle = function (a, b, c) {
        if (a === 1) {
            document.getElementById('announcements').style.display = 'block';
        }
        else {
            document.getElementById('announcements').style.display = 'none';
        }
        if (b === 1) {
            document.getElementById('form').style.display = 'block';
        }
        else {
            document.getElementById('form').style.display = 'none';
        }
        if (c === 1) {
            document.getElementById('repartition').style.display = 'block';
        }
        else {
            document.getElementById('repartition').style.display = 'none';
        }
    };
    SidenavAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidenav-admin',
            template: __webpack_require__("../../../../../src/app/sidenav-admin/sidenav-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidenav-admin/sidenav-admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["d" /* MediaMatcher */],
            __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* Authentication */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SidenavAdminComponent);
    return SidenavAdminComponent;
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

module.exports = "<body  >\r\n<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\r\n  <mat-toolbar color=\"primary\" id=\"topbar\" class=\"example-toolbar\">\r\n    <button mat-icon-button (click)=\"snav.toggle()\">\r\n      <mat-icon style=\"font-size:40px;\">&#9776;</mat-icon>\r\n    </button>\r\n    <img style=\"margin-left:30px;width:165.137px;height:50px;\" src=\"https://raw.githubusercontent.com/ip-b1-2017/fii-admission/master/FrontEnd/static/images/logo.png\"\r\n      alt=\"FII Admis logo\">\r\n  </mat-toolbar>\r\n\r\n  <mat-sidenav-container style=\"background:rgba(31,50,79,0.9)\" class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\r\n    <mat-sidenav id=\"rightbar\" #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\r\n      <mat-nav-list>\r\n        <a class=\"sidenav-button\" mat-list-item (click)=\"announcements()\">Announcements</a>\r\n        <a class=\"sidenav-button\" mat-list-item (click)=\"form()\">Application Form</a>\r\n        <a class=\"sidenav-button\" mat-list-item (click)=\"reset()\">Reset Password</a>\r\n        <a class=\"sidenav-button\" mat-list-item (click)=\"logout()\">Logout</a>\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content id=\"main\">\r\n      <ng-content></ng-content>\r\n    </mat-sidenav-content>\r\n\r\n  </mat-sidenav-container>\r\n</div>\r\n</body>"

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
    SidenavComponent.prototype.announcements = function () {
        this.toggle(1, 0, 0);
    };
    SidenavComponent.prototype.form = function () {
        this.toggle(0, 1, 0);
    };
    SidenavComponent.prototype.reset = function () {
        this.toggle(0, 0, 1);
    };
    SidenavComponent.prototype.toggle = function (a, b, c) {
        if (a === 1) {
            document.getElementById('announcements').style.display = 'block';
        }
        else {
            document.getElementById('announcements').style.display = 'none';
        }
        if (b === 1) {
            document.getElementById('form').style.display = 'block';
        }
        else {
            document.getElementById('form').style.display = 'none';
        }
        if (c === 1) {
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