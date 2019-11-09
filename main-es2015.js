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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"ready==false\">\n  <div class=\"spinner-grow text-primary\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n  <div class=\"spinner-grow text-secondary\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n  <div class=\"spinner-grow text-success\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n  <div class=\"spinner-grow text-danger\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n  <div class=\"spinner-grow text-warning\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n  <div class=\"spinner-grow text-info\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n  <div class=\"spinner-grow text-light\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n  <div class=\"spinner-grow text-dark\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n\n<div *ngIf=\"ready == true\" class=\"form-group\">\n  <label for=\"comment\">Fix Message:</label>\n  <textarea class=\"form-control\" rows=\"5\" id=\"comment\" name=\"text\" [(ngModel)]=\"fixMessageString\"></textarea>\n  <app-fix-message-container [dataDictionary]=\"dataDictionary\" [fixMessagesString]=\"fixMessageString\">\n  </app-fix-message-container>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/fix-message-accordion/fix-message-accordion.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/fix-message-accordion/fix-message-accordion.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <button style=\"margin-left:90%;\" type=\"button\" (click)=\"onClickRowCopy(fixMessage.messageString)\"\n        class=\"btn btn-light\">Copy</button>\n</div>\n<div [class]=\"selectMessageHeaderStyleClass()\">\n    <div>{{fixMessage.direction}}</div>\n    <div class=\"sessionInfo\">{{getSessionInfo()}}</div>\n</div>\n\n<mat-accordion [multi]=\"true\">\n    <mat-expansion-panel>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                {{getMessageName()}}\n            </mat-panel-title>\n            <mat-panel-description>\n                {{getMessageTagValue()}}\n            </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div style=\"font-size:13px;\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>Tag</th>\n                        <th>Field</th>\n                        <th>Value</th>\n                        <th>Description</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let fixField of fixMessage.fixFields\" [class]=\"selectRowStyleClass(fixField)\"\n                        (click)=\"onRowClick(fixField)\" style=\"cursor:pointer;\">\n                        <td>{{fixField.tag}}</td>\n                        <td>{{fixField.name}}</td>\n                        <td>{{fixField.value}}</td>\n                        <td>{{fixField.valueName}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </mat-expansion-panel>\n</mat-accordion>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/fix-message-container/fix-message-container.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/fix-message-container/fix-message-container.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"fixMessages != undefined && fixMessages.length > 0\" class=\"messageContainer\">\n    <div>\n        <button type=\"button\" (click)=\"onClickCopyAll()\" class=\"btn btn-primary\">Copy\n            All</button>\n\n        <button type=\"button\" (click)=\"onClickCollapseAll()\" class=\"btn btn-primary\">Collapse\n            All (+)</button>\n        <button type=\"button\" (click)=\"onClickExpandAll()\" class=\"btn btn-primary\">Expand\n            All (-)</button>\n    </div>\n    <div *ngFor=\"let fixMessage of fixMessages\" [class]=\"selectMessgeStyleClass(fixMessage)\">\n        <app-fix-message-accordion [fixMessage]=\"fixMessage\"></app-fix-message-accordion>\n    </div>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_fix_message_parser_data_dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/fix-message-parser/data-dictionary */ "./src/app/service/fix-message-parser/data-dictionary.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AppComponent = class AppComponent {
    constructor(httpclient) {
        this.httpclient = httpclient;
        this.title = 'fixed-angular';
        this.fixMessageString = "outgoing: 8=FIX.4.2|9=130|35=AE|49=LSEHub|56=LSETR|115=BROKERX|34=2287|43=N|52=20120330-12:14:09|370=20120330-12:14:09.816|571=00008661533TRLO1-1-1-0|150=H|10=074|";
        this.defaultFixVersion = _service_fix_message_parser_data_dictionary__WEBPACK_IMPORTED_MODULE_2__["FixVersion"].fix44;
        this.ready = false;
        this.init();
    }
    init() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.dataDictionary = new _service_fix_message_parser_data_dictionary__WEBPACK_IMPORTED_MODULE_2__["DataDictionary"](this.defaultFixVersion, this.httpclient);
            yield this.dataDictionary.init();
            this.ready = true;
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_fix_message_accordion_fix_message_accordion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/fix-message-accordion/fix-message-accordion.component */ "./src/app/components/fix-message-accordion/fix-message-accordion.component.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_fix_message_container_fix_message_container_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/fix-message-container/fix-message-container.component */ "./src/app/components/fix-message-container/fix-message-container.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");












































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_fix_message_accordion_fix_message_accordion_component__WEBPACK_IMPORTED_MODULE_5__["FixMessageAccordionComponent"],
            _components_fix_message_container_fix_message_container_component__WEBPACK_IMPORTED_MODULE_42__["FixMessageContainerComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__["MatTreeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_40__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_43__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/fix-message-accordion/fix-message-accordion.component.sass":
/*!***************************************************************************************!*\
  !*** ./src/app/components/fix-message-accordion/fix-message-accordion.component.sass ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixMessageHeader {\n  background-color: #e6e6e6;\n}\n\n.fixMessageTrailer {\n  background-color: #e0e0f1;\n}\n\n.outgoingHeaderLogDirection {\n  color: #fff;\n  background-color: #adaae0;\n  border-radius: 15px;\n}\n\n.incomingHeaderLogDirection {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-radius: 15px;\n}\n\n.sessionInfo {\n  background-color: #ffe1b6;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29udXIvUHJvamVjdHMvYW5ndWxhci9maXhlZC1hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9maXgtbWVzc2FnZS1hY2NvcmRpb24vZml4LW1lc3NhZ2UtYWNjb3JkaW9uLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZpeC1tZXNzYWdlLWFjY29yZGlvbi9maXgtbWVzc2FnZS1hY2NvcmRpb24uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEQUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0dGOztBRERBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpeC1tZXNzYWdlLWFjY29yZGlvbi9maXgtbWVzc2FnZS1hY2NvcmRpb24uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml4TWVzc2FnZUhlYWRlclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNlNmU2ZTZcblxuLmZpeE1lc3NhZ2VUcmFpbGVyXG4gIGJhY2tncm91bmQtY29sb3I6I2UwZTBmMVxuICAgICAgXG4ub3V0Z29pbmdIZWFkZXJMb2dEaXJlY3Rpb25cbiAgY29sb3I6I2ZmZlxuICBiYWNrZ3JvdW5kLWNvbG9yOiNhZGFhZTBcbiAgYm9yZGVyLXJhZGl1czogMTVweFxuICBcblxuLmluY29taW5nSGVhZGVyTG9nRGlyZWN0aW9uXG4gIGNvbG9yOiNmZmZcbiAgYmFja2dyb3VuZC1jb2xvcjojZjBhZDRlXG4gIGJvcmRlci1yYWRpdXM6IDE1cHhcblxuLnNlc3Npb25JbmZvXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZTFiNlxuICBjb2xvcjogYmxhY2tcbiIsIi5maXhNZXNzYWdlSGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmZpeE1lc3NhZ2VUcmFpbGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBmMTtcbn1cblxuLm91dGdvaW5nSGVhZGVyTG9nRGlyZWN0aW9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGFhZTA7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5pbmNvbWluZ0hlYWRlckxvZ0RpcmVjdGlvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uc2Vzc2lvbkluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMWI2O1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/fix-message-accordion/fix-message-accordion.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/fix-message-accordion/fix-message-accordion.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FixMessageAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixMessageAccordionComponent", function() { return FixMessageAccordionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");



let FixMessageAccordionComponent = class FixMessageAccordionComponent {
    constructor() {
        this.headerMessageTags = [8, 9, 35, 49, 56, 115, 128, 90, 91, 34, 50, 142, 57, 143, 116, 144, 129, 145, 43, 97, 52, 122, 212, 213, 347, 369, 627, 628, 629, 630];
        this.trailerMessageTags = [93, 89, 10];
        this.tagSenderCompId = 49;
        this.tagTargetCompId = 56;
        this.onixBaseUrl = "https://www.onixs.biz/fix-dictionary";
        this.onixRelativeUrlTpl = "/{fixVersion}/tagNum_{tag}.html";
    }
    ngOnInit() {
    }
    onRowClick(fixField) {
        let defaultFixVersion = this.getOnixFixVersion(null);
        let relativePath = this.onixRelativeUrlTpl.replace("{fixVersion}", defaultFixVersion).replace("{tag}", String(fixField.tag));
        let fullPath = this.onixBaseUrl + relativePath;
        window.open(fullPath, "_blank");
    }
    getOnixFixVersion(fixVersion) {
        if (fixVersion === "FIX.4.2") {
            return "4.2";
        }
        else if (fixVersion === "FIX.4.4") {
            return "4.4";
        }
        else {
            return "4.4";
        }
    }
    collapse() {
        this.accordions.forEach(a => {
            a.closeAll();
        });
    }
    expand() {
        this.accordions.forEach(a => {
            a.openAll();
        });
    }
    onClickRowCopy(rawMessage) {
        this.copytoClipboard(rawMessage);
    }
    selectRowStyleClass(fixField) {
        if (this.headerMessageTags.includes(fixField.tag)) {
            return "fixMessageHeader";
        }
        else if (this.trailerMessageTags.includes(fixField.tag)) {
            return "fixMessageTrailer";
        }
    }
    selectMessageHeaderStyleClass() {
        if (this.fixMessage.direction === "OUTGOING") {
            return "outgoingHeaderLogDirection";
        }
        else if (this.fixMessage.direction === "INCOMING") {
            return "incomingHeaderLogDirection";
        }
    }
    getSessionInfo() {
        let fixFieldSenderCompId = this.fixMessage.fixFields.filter(f => f.tag == this.tagSenderCompId)[0];
        let fixFieldTargetCompId = this.fixMessage.fixFields.filter(f => f.tag == this.tagTargetCompId)[0];
        return fixFieldSenderCompId.value + " -> " + fixFieldTargetCompId.value;
    }
    getMessageName() {
        let messageType = this.fixMessage.fixFields.filter(f => f.tag == 35)[0];
        return messageType.valueName;
    }
    getMessageTagValue() {
        let messageType = this.fixMessage.fixFields.filter(f => f.tag == 35)[0];
        return messageType.tag + "=" + messageType.value;
    }
    copytoClipboard(text) {
        let textarea = document.createElement("textarea");
        textarea.style.height = "0px";
        textarea.style.left = "-100px";
        textarea.style.opacity = "0";
        textarea.style.position = "fixed";
        textarea.style.top = "-100px";
        textarea.style.width = "0px";
        document.body.appendChild(textarea);
        textarea.value = text;
        textarea.select();
        document.execCommand("copy");
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FixMessageAccordionComponent.prototype, "fixMessage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"])
], FixMessageAccordionComponent.prototype, "accordions", void 0);
FixMessageAccordionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fix-message-accordion',
        template: __webpack_require__(/*! raw-loader!./fix-message-accordion.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/fix-message-accordion/fix-message-accordion.component.html"),
        styles: [__webpack_require__(/*! ./fix-message-accordion.component.sass */ "./src/app/components/fix-message-accordion/fix-message-accordion.component.sass")]
    })
], FixMessageAccordionComponent);



/***/ }),

/***/ "./src/app/components/fix-message-container/fix-message-container.component.sass":
/*!***************************************************************************************!*\
  !*** ./src/app/components/fix-message-container/fix-message-container.component.sass ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outgoingMessage {\n  font-size: 13px;\n  margin-right: 40%;\n}\n\n.incomingMessage {\n  font-size: 13px;\n  margin-left: 40%;\n}\n\n.messageContainer {\n  margin-left: 20%;\n  margin-right: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29udXIvUHJvamVjdHMvYW5ndWxhci9maXhlZC1hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9maXgtbWVzc2FnZS1jb250YWluZXIvZml4LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZpeC1tZXNzYWdlLWNvbnRhaW5lci9maXgtbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9maXgtbWVzc2FnZS1jb250YWluZXIvZml4LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGdvaW5nTWVzc2FnZVxuICBmb250LXNpemU6MTNweFxuICBtYXJnaW4tcmlnaHQ6NDAlXG5cbi5pbmNvbWluZ01lc3NhZ2VcbiAgZm9udC1zaXplOjEzcHhcbiAgbWFyZ2luLWxlZnQ6NDAlXG5cbi5tZXNzYWdlQ29udGFpbmVyXG4gIG1hcmdpbi1sZWZ0OiAyMCVcbiAgbWFyZ2luLXJpZ2h0OiAyMCUiLCIub3V0Z29pbmdNZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDQwJTtcbn1cblxuLmluY29taW5nTWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcbn1cblxuLm1lc3NhZ2VDb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBtYXJnaW4tcmlnaHQ6IDIwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/fix-message-container/fix-message-container.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/fix-message-container/fix-message-container.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FixMessageContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixMessageContainerComponent", function() { return FixMessageContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_fix_message_parser_fix_message_parser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/fix-message-parser/fix-message-parser.service */ "./src/app/service/fix-message-parser/fix-message-parser.service.ts");
/* harmony import */ var _fix_message_accordion_fix_message_accordion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fix-message-accordion/fix-message-accordion.component */ "./src/app/components/fix-message-accordion/fix-message-accordion.component.ts");




let FixMessageContainerComponent = class FixMessageContainerComponent {
    constructor(fixMessageParser) {
        this.fixMessageParser = fixMessageParser;
    }
    ngOnInit() {
    }
    selectMessgeStyleClass(fixMessage) {
        if (fixMessage.direction === "OUTGOING") {
            return "outgoingMessage";
        }
        else {
            return "incomingMessage";
        }
    }
    ngOnChanges(changes) {
        if (changes.fixMessagesString != undefined) {
            console.log("Fix messages have been updated");
            this.parseMessage();
        }
    }
    parseMessage() {
        this.fixMessages = this.fixMessageParser.parse(this.dataDictionary, this.fixMessagesString);
    }
    onClickCopyAll() {
        let rawMessageList = [];
        for (let fixMessage of this.fixMessages) {
            rawMessageList.push(fixMessage.messageString);
        }
        this.copytoClipboard(rawMessageList.join("\n"));
    }
    onClickCollapseAll() {
        this.accordions.forEach(a => {
            a.collapse();
        });
    }
    onClickExpandAll() {
        this.accordions.forEach(a => {
            a.expand();
        });
    }
    copytoClipboard(text) {
        let textarea = document.createElement("textarea");
        textarea.style.height = "0px";
        textarea.style.left = "-100px";
        textarea.style.opacity = "0";
        textarea.style.position = "fixed";
        textarea.style.top = "-100px";
        textarea.style.width = "0px";
        document.body.appendChild(textarea);
        textarea.value = text;
        textarea.select();
        document.execCommand("copy");
    }
};
FixMessageContainerComponent.ctorParameters = () => [
    { type: src_app_service_fix_message_parser_fix_message_parser_service__WEBPACK_IMPORTED_MODULE_2__["FixMessageParserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FixMessageContainerComponent.prototype, "fixMessagesString", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FixMessageContainerComponent.prototype, "dataDictionary", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_fix_message_accordion_fix_message_accordion_component__WEBPACK_IMPORTED_MODULE_3__["FixMessageAccordionComponent"])
], FixMessageContainerComponent.prototype, "accordions", void 0);
FixMessageContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fix-message-container',
        template: __webpack_require__(/*! raw-loader!./fix-message-container.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/fix-message-container/fix-message-container.component.html"),
        styles: [__webpack_require__(/*! ./fix-message-container.component.sass */ "./src/app/components/fix-message-container/fix-message-container.component.sass")]
    })
], FixMessageContainerComponent);



/***/ }),

/***/ "./src/app/service/fix-message-parser/data-dictionary.ts":
/*!***************************************************************!*\
  !*** ./src/app/service/fix-message-parser/data-dictionary.ts ***!
  \***************************************************************/
/*! exports provided: DataDictionary, FixVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDictionary", function() { return DataDictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixVersion", function() { return FixVersion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



class DataDictionary {
    constructor(fixversion, httpclient) {
        this.fixversion = fixversion;
        this.httpclient = httpclient;
        this.urlBaseFixDictionary = "assets/fix/dictionary/";
    }
    init() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let dictonaryXml = yield this.getDictionaryXml();
            console.log(dictonaryXml);
            this.parse(dictonaryXml);
            this.dictionaryLoaded = true;
        });
    }
    getFieldName(tag) {
        if (this.fields != null) {
            let filtered = this.fields.filter(f => f.tag == tag);
            if (filtered != null) {
                if (filtered[0] != null) {
                    return filtered[0].name;
                }
            }
        }
    }
    getValueName(tag, value) {
        if (this.fields != null) {
            let filtered = this.fields.filter(f => f.tag == tag);
            if (filtered != null) {
                if (filtered[0] != null) {
                    if (filtered[0].values.length > 0) {
                        let filteredValue = filtered[0].values.filter(f => f.key == value);
                        if (filteredValue != null) {
                            return filteredValue[0].value;
                        }
                    }
                }
            }
        }
    }
    getDictionaryXml() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let fullpath = this.getFullPathOfDictionary();
            let result = yield this.httpclient.get(fullpath, { responseType: 'text' }).toPromise();
            return result;
        });
    }
    parse(dictionaryXml) {
        let parser = new xml2js__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        parser.parseString(dictionaryXml, (err, result) => {
            this.fields = this.parseFields(result.fix.fields);
        });
    }
    parseFields(fields) {
        let returnResult = [];
        let fixFields = fields[0].field;
        for (const fixField of fixFields) {
            let keyValues = [];
            if (fixField.hasOwnProperty("value")) {
                keyValues = this.parseValues(fixField.value);
            }
            returnResult.push({
                name: fixField.$.name,
                tag: fixField.$.number,
                type: fixField.$.type,
                values: keyValues
            });
        }
        return returnResult;
    }
    parseValues(values) {
        let keyValues = [];
        for (const value of values) {
            let keyValue = {
                key: value.$.enum,
                value: value.$.description
            };
            keyValues.push(keyValue);
        }
        return keyValues;
    }
    getFullPathOfDictionary() {
        return this.urlBaseFixDictionary + FixVersion[this.fixversion] + ".xml";
    }
}
DataDictionary.ctorParameters = () => [
    { type: undefined },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
var FixVersion;
(function (FixVersion) {
    FixVersion[FixVersion["fix42"] = 0] = "fix42";
    FixVersion[FixVersion["fix44"] = 1] = "fix44";
})(FixVersion || (FixVersion = {}));


/***/ }),

/***/ "./src/app/service/fix-message-parser/fix-message-parser.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/service/fix-message-parser/fix-message-parser.service.ts ***!
  \**************************************************************************/
/*! exports provided: FixMessageParserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixMessageParserService", function() { return FixMessageParserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _data_dictionary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-dictionary */ "./src/app/service/fix-message-parser/data-dictionary.ts");




let FixMessageParserService = class FixMessageParserService {
    constructor(httpclient) {
        this.httpclient = httpclient;
        this.FIX_TAG_BODY_LENTH = 9;
        this.KEY_VALUE_DELIMETER = "=";
    }
    parse(dataDictionary, messages) {
        if (!this.isValid(messages)) {
            return null;
        }
        if (dataDictionary == null) {
            dataDictionary = this.getDefaultDictionary();
        }
        let fixMessages = [];
        let messagesSplit = messages.split("\n");
        for (let message of messagesSplit) {
            let delimeter = this.getDelimeter(message);
            let fixFields = this.getFixFields(message, delimeter, dataDictionary);
            let direction = this.findDirection(message);
            let fixMessage = {
                direction: direction,
                fixFields: fixFields,
                messageString: message
            };
            fixMessages.push(fixMessage);
        }
        return fixMessages;
    }
    findDirection(rawMessage) {
        if (rawMessage.includes("incom")) {
            return "INCOMING";
        }
        else if (rawMessage.includes("outgo")) {
            return "OUTGOING";
        }
    }
    isValid(messages) {
        if (messages != undefined && messages != null && messages.includes(this.KEY_VALUE_DELIMETER)) {
            return true;
        }
        return false;
    }
    getDefaultDictionary() {
        return new _data_dictionary__WEBPACK_IMPORTED_MODULE_3__["DataDictionary"](_data_dictionary__WEBPACK_IMPORTED_MODULE_3__["FixVersion"].fix44, this.httpclient);
    }
    getDelimeter(rawMessage) {
        let withEqual = this.FIX_TAG_BODY_LENTH + this.KEY_VALUE_DELIMETER;
        let endIndex = rawMessage.indexOf(withEqual);
        let ch = rawMessage.substring(endIndex - 1, endIndex);
        if (ch == "A") {
            let ch2 = rawMessage.substring(endIndex - 2, endIndex - 1);
            if (ch2 == "^")
                return ch2 + ch;
        }
        else {
            return rawMessage.substring(endIndex - 1, endIndex);
        }
    }
    getFixFields(rawMessage, delimter, dataDictionary) {
        let beginningIndex = rawMessage.indexOf("8=");
        rawMessage = rawMessage.substring(beginningIndex);
        let fixFieldsTagValue = rawMessage.split(delimter);
        let fixFields = [];
        for (const fixFieldTagValue of fixFieldsTagValue) {
            if (fixFieldTagValue == "") {
                continue;
            }
            let keyValue = fixFieldTagValue.split(this.KEY_VALUE_DELIMETER);
            let tag = Number(keyValue[0]);
            let value = keyValue[1];
            let fieldName = dataDictionary.getFieldName(tag);
            let valueName = dataDictionary.getValueName(tag, value);
            let fixField = {
                tag: tag,
                value: value,
                name: fieldName,
                required: false,
                valueName: valueName
            };
            fixFields.push(fixField);
        }
        return fixFields;
    }
};
FixMessageParserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FixMessageParserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FixMessageParserService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/onur/Projects/angular/fixed-angular/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map