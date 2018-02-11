webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_people_people__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.people = [];
        this.shouldReorder = false;
        this.service.getPeople()
            .subscribe((function (data) { console.log(data); }));
    }
    //doRefresh(e) {
    //  this.service.getPeople()
    //   .subscribe(
    //    data => this.people = data[0],
    //   Error => console.log(Error),
    //   () => e.complete()
    // )
    // }
    HomePage.prototype.toggleReorder = function () {
        this.shouldReorder = !this.shouldReorder;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Andrius\WebstormProjects\fail\myFail\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="toggleReorder()">\nEdit\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content>\n\n    </ion-refresher-content>\n  </ion-refresher>\n<ion-list [reorder]="shouldReorder" (ionItemReorder)="$event.applyTo(people)">\n\n<ion-item-sliding *ngFor="let person of people">\n\n  <ion-item >\n    <ion-avatar item-left>\n      <img src="http://moziru.com/images/portrait-clipart-avatar-14.png" alt="avatar">\n    </ion-avatar>\n    {{person.name.first}}\n    {{person.name.last}}\n    <ion-note item-right> {{person.phone}}</ion-note>\n  </ion-item>\n\n<ion-item-options side="right">\n<button ion-button>Call</button>\n</ion-item-options>\n  <ion-item-options side="left">\n    <button ion-button>Delete</button>\n  </ion-item-options>\n\n</ion-item-sliding>\n\n\n\n</ion-list>\n\n  <pre>{{person | json}}</pre>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Andrius\WebstormProjects\fail\myFail\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_people_people__["a" /* People */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_people_people__["a" /* People */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return People; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PeopleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var People = (function () {
    function People(http) {
        this.http = http;
        this.people = [
            {
                gender: "male",
                name: { title: "mr", first: "Andrius", last: "Lazauskas" },
                location: {
                    street: "S.Žukausko 34",
                    city: "Vilnius",
                    state: "Vilniaus aps.",
                    postcode: 87356
                },
                email: "andriusdeveloper@gmail.com",
                login: {
                    username: "devandrius",
                    password: "generolas50",
                    salt: "BclbhNDG",
                    md5: "f430331b5a0172280153c45e94d36782",
                    sha1: "d4e3d6f2fdb275e5df4c1c7abe821b1b03ee3fee",
                    sha256: "22d4d01aee50055c2e3acf5c5786c05b645f56680e84dcd5a20fc50c89d5f547"
                },
                dob: "1946-04-17 13:40:10",
                registered: "20018-01-14 21:32:15",
                phone: "+37062327098",
                cell: "0174-3893722",
                id: { name: "", value: null },
                picture: {
                    "avatar": "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                },
                nat: "LT"
            },
            {
                gender: "female",
                name: { title: "mrs", first: "Ilaine", last: "Fogaça" },
                location: {
                    street: "3406 rua josé bonifácio ",
                    city: "são mateus",
                    state: "tocantins",
                    postcode: 84890
                },
                email: "ilaine.fogaça@example.com",
                login: {
                    username: "organicrabbit558",
                    password: "cromwell",
                    salt: "NUykPRT7",
                    md5: "132e21636041c114be257cf04f92b449",
                    sha1: "2a5c32c27aeee1b69f5d5b6a790b9f0e9b06c2bc",
                    sha256: "71600c8f347e191d6197679add9398bc51fcf34cd625b230f8be8c70b2f49207"
                },
                dob: "1960-06-30 10:32:10",
                registered: "2014-08-20 04:07:13",
                phone: "(20) 7947-2468",
                cell: "(19) 8711-9665",
                id: { name: "", value: null },
                picture: {
                    "avatar": "http://graphic.club/wp-content/uploads/edd/2015/11/woman-avatar-4.png"
                },
                nat: "BR"
            },
            {
                gender: "female",
                name: { title: "ms", first: "florence", last: "clarke" },
                location: {
                    street: "2714 maunganui road",
                    city: "whanganui",
                    state: "bay of plenty",
                    postcode: 32413
                },
                email: "florence.clarke@example.com",
                login: {
                    username: "tinyostrich898",
                    password: "stokes",
                    salt: "gDj8C3ba",
                    md5: "70de1cde511885b92c68cda2fd6b25f7",
                    sha1: "16216ddb4ff0b8baa58bf941e600f161c50a151b",
                    sha256: "1a3a1c023739f29c54e6ccba58604cf85c1ebfe5d15962192628cf5482f35898"
                },
                dob: "1990-02-19 09:50:41",
                registered: "2004-04-07 05:24:08",
                phone: "(227)-014-4248",
                cell: "(332)-165-5972",
                id: { name: "", value: null },
                picture: {
                    "avatar": "https://www.wpclipart.com/people/female/women_6/woman_avatar.png"
                },
                nat: "NZ"
            }
        ];
        console.log('Http works');
    }
    People.prototype.getPeople = function () {
        return this.http.get("http://www.json-generator.com/api/json/get/cghlMAGJvm...");
    };
    People = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], People);
    return People;
    var _a;
}());

//# sourceMappingURL=people.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_people_people__ = __webpack_require__(195);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__providers_people_people__["a" /* People */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Andrius\WebstormProjects\fail\myFail\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Andrius\WebstormProjects\fail\myFail\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map