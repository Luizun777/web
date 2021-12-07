(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/luizun/Documentos/git/web/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
    production: false,
    urlApi: 'https://still-eyrie-33337.herokuapp.com'
    // urlApi: 'http://localhost:5000'
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "fondo"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["html[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  background: #333;\n  margin: 0;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\n  box-sizing: inherit;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Gothic A1\", sans-serif;\n  margin: 0;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\nh1[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  font-size: 5rem;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\nh2[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  font-size: 4rem;\n  margin-bottom: 1rem;\n  margin-top: 0px;\n}\nh3[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\np[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  color: #ffffff;\n}\n.fondo[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: center;\n  background-image: url('code3.jpg');\n  background-repeat: no-repeat;\n  height: 100vh;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: left;\n}\n@media (min-width: 1200px) {\n  .fondo[_ngcontent-%COMP%] {\n    background-position: center center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvX21peGlucy5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBR0E7RUNrQkUsc0JEaEJvQjtFQUNwQixnQkVHSztFRkZMLFNBQUE7QUdGRjtBSEtBOzs7RUNXRSxtQkRSb0I7QUdGdEI7QUhLQTtFQUNFLG9DRWhCZ0I7RUZpQmhCLFNBQUE7QUdGRjtBSEtBO0VBQ0ksZUFBQTtBR0ZKO0FIS0E7RUFDRSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUdGRjtBSEtBO0VBQ0UseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUdGRjtBSEtBO0VBQ0UseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FHRkY7QUhLQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRXZDTztBQ3FDVDtBQTdDQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FBZ0RGO0FGM0NFO0VFYkY7SUFVSSxrQ0FBQTtFQWtERjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgJ2Fzc2V0cy9zY3NzL21haW4uc2Nzcyc7XG5cbmh0bWwge1xuICAvLyBib3JkZXItYm94ID0+IGV2aXRhIHF1ZSB1biBib3JkZXIgbyB1biBwYWRkaW5nIGNhbWJpZSBlbCB0YW1hw7FvIGRlIHVuIGVsZW1lbnRvXG4gIEBpbmNsdWRlIGJveC1zaXppbmcoYm9yZGVyLWJveCk7XG4gIGJhY2tncm91bmQ6ICRncmlzO1xuICBtYXJnaW46IDA7XG59XG5cbiosXG4qOmFmdGVyLFxuKjpiZWZvcmUge1xuICBAaW5jbHVkZSBib3gtc2l6aW5nKGluaGVyaXQpO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICRmdWVudGVQcmluY2lwYWw7XG4gIG1hcmdpbjogMDtcbn1cblxuaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmgxIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuaDIge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbmgzIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgY29sb3I6ICRibGFuY287XG59XG4iLCIvLyBNZWRpYSBRdWVyaWVzXG5cbkBtaXhpbiB0ZWxlZm9ubyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR0ZWxlZm9ub30pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0YSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR0YWJsZXRhfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3B9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGJveC1zaXppbmcoJGJveC1tb2RlbCkge1xuICBib3gtc2l6aW5nOiAkYm94LW1vZGVsO1xufSIsIi8vIEZ1ZW50ZXNcbiRmdWVudGVQcmluY2lwYWw6ICdHb3RoaWMgQTEnLCBzYW5zLXNlcmlmO1xuXG4vLyBNZWRpYSBRdWVyaWVzXG4kdGVsZWZvbm86IDQ4MHB4O1xuJHRhYmxldGE6IDc2OHB4O1xuJGRlc2t0b3A6IDEyMDBweDtcblxuLy8gQ29sb3Jlc1xuJGdyaXM6ICMzMzM7XG4kYmxhbmNvOiAjZmZmZmZmO1xuJG5lZ3JvOiAjMDAwMDAwO1xuIiwiQGltcG9ydCAnLi4vc3R5bGVzLnNjc3MnO1xuXG4uZm9uZG8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1nL2NvZGUzLmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _lobby_lobby_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lobby/lobby.component */ "h6Cj");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _lobby_lobby_component__WEBPACK_IMPORTED_MODULE_6__["LobbyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "h6Cj":
/*!******************************************!*\
  !*** ./src/app/lobby/lobby.component.ts ***!
  \******************************************/
/*! exports provided: LobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobbyComponent", function() { return LobbyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LobbyComponent {
    constructor() { }
    ngOnInit() {
    }
}
LobbyComponent.ɵfac = function LobbyComponent_Factory(t) { return new (t || LobbyComponent)(); };
LobbyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LobbyComponent, selectors: [["app-lobby"]], decls: 0, vars: 0, template: function LobbyComponent_Template(rf, ctx) { }, styles: ["@charset \"UTF-8\";\n\nhtml[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  background: #333;\n  margin: 0;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\n  box-sizing: inherit;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Gothic A1\", sans-serif;\n  margin: 0;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\nh1[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  font-size: 5rem;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\nh2[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  font-size: 4rem;\n  margin-bottom: 1rem;\n  margin-top: 0px;\n}\nh3[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\np[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  color: #ffffff;\n}\n.hero[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: center;\n  background-image: url('fondo1.png');\n  background-repeat: no-repeat;\n  height: 100vh;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: left;\n}\n@media (min-width: 1200px) {\n  .hero[_ngcontent-%COMP%] {\n    background-position: center center;\n  }\n}\n.hero[_ngcontent-%COMP%]   .contenedor[_ngcontent-%COMP%] {\n  background-color: rgba(51, 51, 51, 0.788);\n  width: 100%;\n  height: 100vh;\n}\n.contenedor-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 1rem;\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  padding: 3rem 0;\n}\n.footer.activo[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n.footer[_ngcontent-%COMP%]   .contenedor[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-gap: 1rem;\n}\n.footer[_ngcontent-%COMP%]   .nav-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.footer[_ngcontent-%COMP%]   .nav-footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.footer[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: block;\n  padding-top: 0.5rem;\n}\n\n.sociales[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  \n  \n  \n  \n  flex: 1 0 auto;\n  list-style: none;\n}\n.sociales[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 3rem;\n}\n@media (min-width: 768px) {\n  .sociales[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 2.5rem;\n  }\n}\n@media (min-width: 1200px) {\n  .sociales[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 2rem;\n  }\n}\n.sociales[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  margin-right: 0;\n}\n.sociales[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.sociales[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  font-family: \"Font Awesome 5 Brands\";\n  color: #ffffff;\n  font-size: 2.5rem;\n}\n.sociales[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[href*=facebook][_ngcontent-%COMP%]::before {\n  content: \"\uF39E\";\n}\n.sociales[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[href*=twitter][_ngcontent-%COMP%]::before {\n  content: \"\uF099\";\n}\n.sociales[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[href*=youtube][_ngcontent-%COMP%]::before {\n  content: \"\uF431\";\n}\n.sociales[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[href*=instagram][_ngcontent-%COMP%]::before {\n  content: \"\uF16D\";\n}\n.sociales[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[href*=pinterest][_ngcontent-%COMP%]::before {\n  content: \"\uF231\";\n}\n.sociales[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvYmJ5LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9fbWl4aW5zLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLDhFQUFBO0FBR0E7RUNrQkUsc0JEaEJvQjtFQUNwQixnQkVHSztFRkZMLFNBQUE7QURERjtBQ0lBOzs7RUNXRSxtQkRSb0I7QUREdEI7QUNJQTtFQUNFLG9DRWhCZ0I7RUZpQmhCLFNBQUE7QURERjtBQ0lBO0VBQ0ksZUFBQTtBRERKO0FDSUE7RUFDRSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QURERjtBQ0lBO0VBQ0UseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURERjtBQ0lBO0VBQ0UseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FEREY7QUNJQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRXZDTztBSHNDVDtBQS9DQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FBa0RGO0FFNUNFO0VGZEY7SUFXSSxrQ0FBQTtFQW1ERjtBQUNGO0FBakRFO0VBQ0UseUNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQW1ESjtBQS9DQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLGNBQUE7QUFrREY7QUEvQ0EsV0FBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBa0RGO0FBaERBO0VBQ0UsU0FBQTtBQW1ERjtBQWpEQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLGNBQUE7QUFvREY7QUFsREE7RUFDRSxhQUFBO0FBcURGO0FBbkRBO0VBQ0UsaUJBQUE7QUFzREY7QUFwREE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQXVERjtBQXBEQSxlQUFBO0FBQ0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBdURGO0FBckRBO0VBQ0Usa0JBQUE7QUF3REY7QUVuSEU7RUYwREY7SUFHSSxvQkFBQTtFQTBERjtBQUNGO0FFbEhFO0VGb0RGO0lBTUksa0JBQUE7RUE0REY7QUFDRjtBQTFEQTtFQUNFLGVBQUE7QUE2REY7QUEzREE7RUFDRSxxQkFBQTtBQThERjtBQTVEQTtFQUNFLG9DQUFBO0VBQ0EsY0cxRU87RUgyRVAsaUJBQUE7QUErREY7QUE3REE7RUFDRSxZQUFBO0FBZ0VGO0FBN0RBO0VBQ0UsWUFBQTtBQWdFRjtBQTlEQTtFQUNFLFlBQUE7QUFpRUY7QUEvREE7RUFDRSxZQUFBO0FBa0VGO0FBaEVBO0VBQ0UsWUFBQTtBQW1FRjtBQWpFQTtFQUNFLGFBQUE7QUFvRUYiLCJmaWxlIjoibG9iYnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zdHlsZXMuc2Nzcyc7XG4uaGVybyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvZm9uZG8xLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gIFxuICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB9XG5cbiAgLmNvbnRlbmVkb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgMC43ODgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbn1cblxuLmNvbnRlbmVkb3ItY2FyZHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDFyZW07XG59XG5cbi8qIEZvb3RlciAqL1xuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDNyZW0gMDtcbn1cbi5mb290ZXIuYWN0aXZvIHtcbiAgYm90dG9tOiAwO1xufVxuLmZvb3RlciAuY29udGVuZWRvciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikgKTtcbiAgZ3JpZC1nYXA6IDFyZW07XG59XG4uZm9vdGVyIC5uYXYtZm9vdGVyIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5mb290ZXIgLm5hdi1mb290ZXIgaDMge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5mb290ZXIgLm1lbnUgYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IC41cmVtO1xufVxuXG4vKiBSZWQgU29jaWFsICovXG4uc29jaWFsZXMgdWwge1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLyoganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgKi9cbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyAqL1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXG4gIGZsZXg6MSAwIGF1dG87XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uc29jaWFsZXMgdWwgbGkge1xuICBtYXJnaW4tcmlnaHQ6IDNyZW07XG4gIEBpbmNsdWRlIHRhYmxldGEge1xuICAgIG1hcmdpbi1yaWdodDogMi41cmVtO1xuICB9XG4gIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgfVxufVxuLnNvY2lhbGVzIHVsIGxpOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5zb2NpYWxlcyB1bCBsaSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnNvY2lhbGVzIHVsIGxpIGE6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgQnJhbmRzXCI7XG4gIGNvbG9yOiAkYmxhbmNvO1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cbi5zb2NpYWxlcyB1bCBsaSBhW2hyZWYqPSdmYWNlYm9vayddOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjM5ZVwiO1xufVxuXG4uc29jaWFsZXMgdWwgbGkgYVtocmVmKj0ndHdpdHRlciddOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA5OVwiO1xufVxuLnNvY2lhbGVzIHVsIGxpIGFbaHJlZio9J3lvdXR1YmUnXTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGY0MzFcIjtcbn1cbi5zb2NpYWxlcyB1bCBsaSBhW2hyZWYqPSdpbnN0YWdyYW0nXTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNmRcIjtcbn1cbi5zb2NpYWxlcyB1bCBsaSBhW2hyZWYqPSdwaW50ZXJlc3QnXTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMzEgXCI7XG59XG4uc29jaWFsZXMgdWwgbGkgc3BhbntcbiAgZGlzcGxheTogbm9uZTtcbn1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgJ2Fzc2V0cy9zY3NzL21haW4uc2Nzcyc7XG5cbmh0bWwge1xuICAvLyBib3JkZXItYm94ID0+IGV2aXRhIHF1ZSB1biBib3JkZXIgbyB1biBwYWRkaW5nIGNhbWJpZSBlbCB0YW1hw7FvIGRlIHVuIGVsZW1lbnRvXG4gIEBpbmNsdWRlIGJveC1zaXppbmcoYm9yZGVyLWJveCk7XG4gIGJhY2tncm91bmQ6ICRncmlzO1xuICBtYXJnaW46IDA7XG59XG5cbiosXG4qOmFmdGVyLFxuKjpiZWZvcmUge1xuICBAaW5jbHVkZSBib3gtc2l6aW5nKGluaGVyaXQpO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICRmdWVudGVQcmluY2lwYWw7XG4gIG1hcmdpbjogMDtcbn1cblxuaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmgxIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuaDIge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbmgzIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgY29sb3I6ICRibGFuY287XG59XG4iLCIvLyBNZWRpYSBRdWVyaWVzXG5cbkBtaXhpbiB0ZWxlZm9ubyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR0ZWxlZm9ub30pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0YSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR0YWJsZXRhfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3B9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGJveC1zaXppbmcoJGJveC1tb2RlbCkge1xuICBib3gtc2l6aW5nOiAkYm94LW1vZGVsO1xufSIsIi8vIEZ1ZW50ZXNcbiRmdWVudGVQcmluY2lwYWw6ICdHb3RoaWMgQTEnLCBzYW5zLXNlcmlmO1xuXG4vLyBNZWRpYSBRdWVyaWVzXG4kdGVsZWZvbm86IDQ4MHB4O1xuJHRhYmxldGE6IDc2OHB4O1xuJGRlc2t0b3A6IDEyMDBweDtcblxuLy8gQ29sb3Jlc1xuJGdyaXM6ICMzMzM7XG4kYmxhbmNvOiAjZmZmZmZmO1xuJG5lZ3JvOiAjMDAwMDAwO1xuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lobby_lobby_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lobby/lobby.component */ "h6Cj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: 'cv',
        loadChildren: () => __webpack_require__.e(/*! import() | cv-cv-module */ "cv-cv-module").then(__webpack_require__.bind(null, /*! ./cv/cv.module */ "E5Q8")).then((m) => m.CvModule)
    },
    {
        path: 'web',
        loadChildren: () => __webpack_require__.e(/*! import() | Page-page-module */ "Page-page-module").then(__webpack_require__.bind(null, /*! ./Page/page.module */ "Hyu+")).then((m) => m.PagesModule)
    },
    { path: 'lobby', component: _lobby_lobby_component__WEBPACK_IMPORTED_MODULE_1__["LobbyComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'cv/Inicio' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map