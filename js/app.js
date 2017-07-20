webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_loading_actions__ = __webpack_require__(207);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__loading_loading_actions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_actions__ = __webpack_require__(206);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__header_header_actions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search_actions__ = __webpack_require__(209);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__search_search_actions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_state_app_state_actions__ = __webpack_require__(130);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__app_state_app_state_actions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__root_root_actions__ = __webpack_require__(208);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__root_root_actions__["a"]; });








/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);


var StoreSelector = (function () {
    function StoreSelector(selectors, transformer) {
        var _this = this;
        this.selectors = selectors;
        this.transformer = transformer;
        if (!__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"].instance)
            throw "ngRedux cannot be null or undefined.";
        if (!selectors || selectors.length === 0)
            throw "selectors cannot be null or empty.";
        if (!transformer)
            throw "transformer cannot be null or undefined.";
        var stateSliceObservables = selectors.map(function (s) { return __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"].instance.select(s); });
        this._observable = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].combineLatest.apply(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"], stateSliceObservables).map(function (v) {
            return _this.onSliceObservableFired(v);
        })
            .publishReplay(1).refCount();
    }
    Object.defineProperty(StoreSelector.prototype, "observable", {
        get: function () {
            return this._observable;
        },
        enumerable: true,
        configurable: true
    });
    StoreSelector.prototype.onSliceObservableFired = function (values) {
        return this.transformer(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"].instance.getState());
    };
    return StoreSelector;
}());



/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JsonService = (function () {
    function JsonService(ngRedux, appStateActions, http) {
        this.ngRedux = ngRedux;
        this.appStateActions = appStateActions;
        this.http = http;
        this.requestOptions = {};
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        this.headers.set("Content-Type", "application/json");
        this.requestOptions.headers = this.headers;
    }
    JsonService.prototype.getPartners = function () {
        return this.http.get("data/partners.json", this.requestOptions).map(function (res) { return res.json(); });
    };
    JsonService.prototype.getTags = function () {
        return this.http.get("data/tags.json", this.requestOptions).map(function (res) { return res.json(); });
    };
    return JsonService;
}());
JsonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"],
        __WEBPACK_IMPORTED_MODULE_1__actions__["d" /* AppStateActions */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], JsonService);



/***/ }),
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStateActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppStateActions = AppStateActions_1 = (function () {
    function AppStateActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    AppStateActions.prototype.initAppState = function (appState) {
        this.ngRedux.dispatch({
            type: AppStateActions_1.INIT_STATE,
            data: appState
        });
    };
    return AppStateActions;
}());
AppStateActions.INIT_STATE = 'init_app_state';
AppStateActions = AppStateActions_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["NgRedux"]])
], AppStateActions);

var AppStateActions_1;


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__(212);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_viewmodel__ = __webpack_require__(213);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__header_viewmodel__["a"]; });




/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partner_panel_component__ = __webpack_require__(216);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__partner_panel_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partner_panel_viewmodel__ = __webpack_require__(217);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__partner_panel_viewmodel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partner_panel_item__ = __webpack_require__(214);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__partner_panel_item__["a"]; });





/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project_component__ = __webpack_require__(220);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__project_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_viewmodel__ = __webpack_require__(221);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__project_viewmodel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_item__ = __webpack_require__(218);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__project_item__["a"]; });





/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_component__ = __webpack_require__(226);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__search_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_viewmodel__ = __webpack_require__(227);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__search_viewmodel__["a"]; });




/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag_component__ = __webpack_require__(230);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tag_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tag_viewmodel__ = __webpack_require__(231);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__tag_viewmodel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tag_item__ = __webpack_require__(228);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__tag_item__["a"]; });





/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap_guard__ = __webpack_require__(232);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__bootstrap_guard__["a"]; });



/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GitHubApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GitHubApiService = (function () {
    function GitHubApiService(ngRedux, appStateActions, http) {
        this.ngRedux = ngRedux;
        this.appStateActions = appStateActions;
        this.http = http;
        this.requestOptions = {};
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        this.githubApiUrl = 'https://api.github.com/';
        this.headers.set("Content-Type", "application/json");
        this.requestOptions.headers = this.headers;
    }
    GitHubApiService.prototype.getRepositories = function () {
        var jsonResponse = this.http.get(this.githubApiUrl + 'orgs/relativity-dev-org/repos', this.requestOptions).map(function (res) { return res.json(); });
        return jsonResponse;
    };
    return GitHubApiService;
}());
GitHubApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"],
        __WEBPACK_IMPORTED_MODULE_1__actions__["d" /* AppStateActions */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], GitHubApiService);



/***/ }),
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/entypo.eot";

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/arrow.svg";

/***/ }),
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(4);
var forkJoin_1 = __webpack_require__(180);
Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
//# sourceMappingURL=forkJoin.js.map

/***/ }),
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_redux_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_l10n__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_json_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_github_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_tag__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_header__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_search__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_partner_panel__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_project__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routing_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__store__ = __webpack_require__(234);
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
    function AppModule(ngRedux, devTools) {
        var middleware = [];
        var enhancers = [];
        if (true) {
            if (devTools.isEnabled()) {
                enhancers.push(devTools.enhancer());
            }
        }
        ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_18__store__["a" /* rootReducer */], {}, middleware, enhancers);
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_17__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_redux_store__["NgReduxModule"],
            __WEBPACK_IMPORTED_MODULE_6_angular_l10n__["a" /* LocalizationModule */].forRoot()],
        declarations: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_header__["a" /* Header */],
            __WEBPACK_IMPORTED_MODULE_14__components_search__["a" /* Search */],
            __WEBPACK_IMPORTED_MODULE_12__components_tag__["a" /* Tag */],
            __WEBPACK_IMPORTED_MODULE_12__components_tag__["b" /* TagItem */],
            __WEBPACK_IMPORTED_MODULE_15__components_partner_panel__["a" /* PartnerPanel */],
            __WEBPACK_IMPORTED_MODULE_15__components_partner_panel__["b" /* PartnerPanelItem */],
            __WEBPACK_IMPORTED_MODULE_16__components_project__["a" /* Project */],
            __WEBPACK_IMPORTED_MODULE_16__components_project__["b" /* ProjectItem */],
            __WEBPACK_IMPORTED_MODULE_17__app_routing_module__["b" /* routedComponents */]],
        providers: [__WEBPACK_IMPORTED_MODULE_8__actions__["a" /* LoadingActions */],
            __WEBPACK_IMPORTED_MODULE_8__actions__["b" /* HeaderActions */],
            __WEBPACK_IMPORTED_MODULE_8__actions__["c" /* SearchActions */],
            __WEBPACK_IMPORTED_MODULE_8__actions__["d" /* AppStateActions */],
            __WEBPACK_IMPORTED_MODULE_8__actions__["e" /* RootActions */],
            __WEBPACK_IMPORTED_MODULE_7__guards__["a" /* BootstrapGuard */],
            __WEBPACK_IMPORTED_MODULE_9__services_json_service__["a" /* JsonService */],
            __WEBPACK_IMPORTED_MODULE_10__services_github_service__["a" /* GitHubApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_redux_store__["NgRedux"], __WEBPACK_IMPORTED_MODULE_5__angular_redux_store__["DevToolsExtension"]])
], AppModule);



/***/ }),
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AnimationDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationEngine; });
/* unused harmony export ɵAnimation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AnimationStyleNormalizer; });
/* unused harmony export ɵNoopAnimationStyleNormalizer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return WebAnimationsStyleNormalizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return NoopAnimationDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DomAnimationEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return NoopAnimationEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return WebAnimationsDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return supportsWebAnimations; });
/* unused harmony export ɵWebAnimationsPlayer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(84);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @license Angular v4.1.1
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @experimental
 */
var NoopAnimationDriver = (function () {
    function NoopAnimationDriver() {
    }
    NoopAnimationDriver.prototype.animate = function (element, keyframes, duration, delay, easing, previousPlayers) {
        if (previousPlayers === void 0) { previousPlayers = []; }
        return new __WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* NoopAnimationPlayer */]();
    };
    return NoopAnimationDriver;
}());
/**
 * @experimental
 */
var AnimationDriver = (function () {
    function AnimationDriver() {
    }
    return AnimationDriver;
}());
AnimationDriver.NOOP = new NoopAnimationDriver();
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @abstract
 */
var AnimationEngine = (function () {
    function AnimationEngine() {
    }
    /**
     * @abstract
     * @param {?} trigger
     * @param {?=} name
     * @return {?}
     */
    AnimationEngine.prototype.registerTrigger = function (trigger, name) { };
    /**
     * @abstract
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
    AnimationEngine.prototype.onInsert = function (element, domFn) { };
    /**
     * @abstract
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
    AnimationEngine.prototype.onRemove = function (element, domFn) { };
    /**
     * @abstract
     * @param {?} element
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    AnimationEngine.prototype.setProperty = function (element, property, value) { };
    /**
     * @abstract
     * @param {?} element
     * @param {?} eventName
     * @param {?} eventPhase
     * @param {?} callback
     * @return {?}
     */
    AnimationEngine.prototype.listen = function (element, eventName, eventPhase, callback) { };
    /**
     * @abstract
     * @return {?}
     */
    AnimationEngine.prototype.flush = function () { };
    Object.defineProperty(AnimationEngine.prototype, "activePlayers", {
        /**
         * @return {?}
         */
        get: function () { throw new Error('...'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnimationEngine.prototype, "queuedPlayers", {
        /**
         * @return {?}
         */
        get: function () { throw new Error('...'); },
        enumerable: true,
        configurable: true
    });
    return AnimationEngine;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ONE_SECOND = 1000;
/**
 * @param {?} exp
 * @param {?} errors
 * @return {?}
 */
function parseTimeExpression(exp, errors) {
    var /** @type {?} */ regex = /^([\.\d]+)(m?s)(?:\s+([\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
    var /** @type {?} */ duration;
    var /** @type {?} */ delay = 0;
    var /** @type {?} */ easing = null;
    if (typeof exp === 'string') {
        var /** @type {?} */ matches = exp.match(regex);
        if (matches === null) {
            errors.push("The provided timing value \"" + exp + "\" is invalid.");
            return { duration: 0, delay: 0, easing: null };
        }
        var /** @type {?} */ durationMatch = parseFloat(matches[1]);
        var /** @type {?} */ durationUnit = matches[2];
        if (durationUnit == 's') {
            durationMatch *= ONE_SECOND;
        }
        duration = Math.floor(durationMatch);
        var /** @type {?} */ delayMatch = matches[3];
        var /** @type {?} */ delayUnit = matches[4];
        if (delayMatch != null) {
            var /** @type {?} */ delayVal = parseFloat(delayMatch);
            if (delayUnit != null && delayUnit == 's') {
                delayVal *= ONE_SECOND;
            }
            delay = Math.floor(delayVal);
        }
        var /** @type {?} */ easingVal = matches[5];
        if (easingVal) {
            easing = easingVal;
        }
    }
    else {
        duration = (exp);
    }
    return { duration: duration, delay: delay, easing: easing };
}
/**
 * @param {?} styles
 * @return {?}
 */
function normalizeStyles(styles) {
    var /** @type {?} */ normalizedStyles = {};
    if (Array.isArray(styles)) {
        styles.forEach(function (data) { return copyStyles(data, false, normalizedStyles); });
    }
    else {
        copyStyles(styles, false, normalizedStyles);
    }
    return normalizedStyles;
}
/**
 * @param {?} styles
 * @param {?} readPrototype
 * @param {?=} destination
 * @return {?}
 */
function copyStyles(styles, readPrototype, destination) {
    if (destination === void 0) { destination = {}; }
    if (readPrototype) {
        // we make use of a for-in loop so that the
        // prototypically inherited properties are
        // revealed from the backFill map
        for (var /** @type {?} */ prop in styles) {
            destination[prop] = styles[prop];
        }
    }
    else {
        Object.keys(styles).forEach(function (prop) { return destination[prop] = styles[prop]; });
    }
    return destination;
}
/**
 * @param {?} element
 * @param {?} styles
 * @return {?}
 */
function setStyles(element, styles) {
    if (element['style']) {
        Object.keys(styles).forEach(function (prop) { return element.style[prop] = styles[prop]; });
    }
}
/**
 * @param {?} element
 * @param {?} styles
 * @return {?}
 */
function eraseStyles(element, styles) {
    if (element['style']) {
        Object.keys(styles).forEach(function (prop) {
            // IE requires '' instead of null
            // see https://github.com/angular/angular/issues/7916
            element.style[prop] = '';
        });
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} visitor
 * @param {?} node
 * @param {?} context
 * @return {?}
 */
function visitAnimationNode(visitor, node, context) {
    switch (node.type) {
        case 0 /* State */:
            return visitor.visitState(/** @type {?} */ (node), context);
        case 1 /* Transition */:
            return visitor.visitTransition(/** @type {?} */ (node), context);
        case 2 /* Sequence */:
            return visitor.visitSequence(/** @type {?} */ (node), context);
        case 3 /* Group */:
            return visitor.visitGroup(/** @type {?} */ (node), context);
        case 4 /* Animate */:
            return visitor.visitAnimate(/** @type {?} */ (node), context);
        case 5 /* KeyframeSequence */:
            return visitor.visitKeyframeSequence(/** @type {?} */ (node), context);
        case 6 /* Style */:
            return visitor.visitStyle(/** @type {?} */ (node), context);
        default:
            throw new Error("Unable to resolve animation metadata node #" + node.type);
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ANY_STATE = '*';
/**
 * @param {?} transitionValue
 * @param {?} errors
 * @return {?}
 */
function parseTransitionExpr(transitionValue, errors) {
    var /** @type {?} */ expressions = [];
    if (typeof transitionValue == 'string') {
        ((transitionValue))
            .split(/\s*,\s*/)
            .forEach(function (str) { return parseInnerTransitionStr(str, expressions, errors); });
    }
    else {
        expressions.push(/** @type {?} */ (transitionValue));
    }
    return expressions;
}
/**
 * @param {?} eventStr
 * @param {?} expressions
 * @param {?} errors
 * @return {?}
 */
function parseInnerTransitionStr(eventStr, expressions, errors) {
    if (eventStr[0] == ':') {
        eventStr = parseAnimationAlias(eventStr, errors);
    }
    var /** @type {?} */ match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
    if (match == null || match.length < 4) {
        errors.push("The provided transition expression \"" + eventStr + "\" is not supported");
        return expressions;
    }
    var /** @type {?} */ fromState = match[1];
    var /** @type {?} */ separator = match[2];
    var /** @type {?} */ toState = match[3];
    expressions.push(makeLambdaFromStates(fromState, toState));
    var /** @type {?} */ isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
    if (separator[0] == '<' && !isFullAnyStateExpr) {
        expressions.push(makeLambdaFromStates(toState, fromState));
    }
}
/**
 * @param {?} alias
 * @param {?} errors
 * @return {?}
 */
function parseAnimationAlias(alias, errors) {
    switch (alias) {
        case ':enter':
            return 'void => *';
        case ':leave':
            return '* => void';
        default:
            errors.push("The transition alias value \"" + alias + "\" is not supported");
            return '* => *';
    }
}
/**
 * @param {?} lhs
 * @param {?} rhs
 * @return {?}
 */
function makeLambdaFromStates(lhs, rhs) {
    return function (fromState, toState) {
        var /** @type {?} */ lhsMatch = lhs == ANY_STATE || lhs == fromState;
        var /** @type {?} */ rhsMatch = rhs == ANY_STATE || rhs == toState;
        return lhsMatch && rhsMatch;
    };
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} keyframes
 * @param {?} duration
 * @param {?} delay
 * @param {?} easing
 * @return {?}
 */
function createTimelineInstruction(keyframes, duration, delay, easing) {
    return {
        type: 1 /* TimelineAnimation */,
        keyframes: keyframes,
        duration: duration,
        delay: delay,
        totalTime: duration + delay, easing: easing
    };
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} ast
 * @param {?=} startingStyles
 * @param {?=} finalStyles
 * @return {?}
 */
function buildAnimationKeyframes(ast, startingStyles, finalStyles) {
    if (startingStyles === void 0) { startingStyles = {}; }
    if (finalStyles === void 0) { finalStyles = {}; }
    var /** @type {?} */ normalizedAst = Array.isArray(ast) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* sequence */])(/** @type {?} */ (ast)) : (ast);
    return new AnimationTimelineVisitor().buildKeyframes(normalizedAst, startingStyles, finalStyles);
}
var AnimationTimelineContext = (function () {
    /**
     * @param {?} errors
     * @param {?} timelines
     * @param {?=} initialTimeline
     */
    function AnimationTimelineContext(errors, timelines, initialTimeline) {
        this.errors = errors;
        this.timelines = timelines;
        this.previousNode = ({});
        this.subContextCount = 0;
        this.currentTimeline = initialTimeline || new TimelineBuilder(0);
        timelines.push(this.currentTimeline);
    }
    /**
     * @return {?}
     */
    AnimationTimelineContext.prototype.createSubContext = function () {
        var /** @type {?} */ context = new AnimationTimelineContext(this.errors, this.timelines, this.currentTimeline.fork());
        context.previousNode = this.previousNode;
        context.currentAnimateTimings = this.currentAnimateTimings;
        this.subContextCount++;
        return context;
    };
    /**
     * @param {?=} newTime
     * @return {?}
     */
    AnimationTimelineContext.prototype.transformIntoNewTimeline = function (newTime) {
        if (newTime === void 0) { newTime = 0; }
        this.currentTimeline = this.currentTimeline.fork(newTime);
        this.timelines.push(this.currentTimeline);
        return this.currentTimeline;
    };
    /**
     * @param {?} time
     * @return {?}
     */
    AnimationTimelineContext.prototype.incrementTime = function (time) {
        this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
    };
    return AnimationTimelineContext;
}());
var AnimationTimelineVisitor = (function () {
    function AnimationTimelineVisitor() {
    }
    /**
     * @param {?} ast
     * @param {?} startingStyles
     * @param {?} finalStyles
     * @return {?}
     */
    AnimationTimelineVisitor.prototype.buildKeyframes = function (ast, startingStyles, finalStyles) {
        var /** @type {?} */ context = new AnimationTimelineContext([], []);
        context.currentTimeline.setStyles(startingStyles);
        visitAnimationNode(this, ast, context);
        // this checks to see if an actual animation happened
        var /** @type {?} */ timelines = context.timelines.filter(function (timeline) { return timeline.hasStyling(); });
        if (timelines.length && Object.keys(finalStyles).length) {
            var /** @type {?} */ tl = timelines[timelines.length - 1];
            if (!tl.allowOnlyTimelineStyles()) {
                tl.setStyles(finalStyles);
            }
        }
        return timelines.length ? timelines.map(function (timeline) { return timeline.buildKeyframes(); }) :
            [createTimelineInstruction([], 0, 0, '')];
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineVisitor.prototype.visitState = function (ast, context) {
        // these values are not visited in this AST
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineVisitor.prototype.visitTransition = function (ast, context) {
        // these values are not visited in this AST
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineVisitor.prototype.visitSequence = function (ast, context) {
        var _this = this;
        var /** @type {?} */ subContextCount = context.subContextCount;
        if (context.previousNode.type == 6 /* Style */) {
            context.currentTimeline.forwardFrame();
            context.currentTimeline.snapshotCurrentStyles();
        }
        ast.steps.forEach(function (s) { return visitAnimationNode(_this, s, context); });
        // this means that some animation function within the sequence
        // ended up creating a sub timeline (which means the current
        // timeline cannot overlap with the contents of the sequence)
        if (context.subContextCount > subContextCount) {
            context.transformIntoNewTimeline();
        }
        context.previousNode = ast;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineVisitor.prototype.visitGroup = function (ast, context) {
        var _this = this;
        var /** @type {?} */ innerTimelines = [];
        var /** @type {?} */ furthestTime = context.currentTimeline.currentTime;
        ast.steps.forEach(function (s) {
            var /** @type {?} */ innerContext = context.createSubContext();
            visitAnimationNode(_this, s, innerContext);
            furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
            innerTimelines.push(innerContext.currentTimeline);
        });
        // this operation is run after the AST loop because otherwise
        // if the parent timeline's collected styles were updated then
        // it would pass in invalid data into the new-to-be forked items
        innerTimelines.forEach(function (timeline) { return context.currentTimeline.mergeTimelineCollectedStyles(timeline); });
        context.transformIntoNewTimeline(furthestTime);
        context.previousNode = ast;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineVisitor.prototype.visitAnimate = function (ast, context) {
        var /** @type {?} */ timings = ast.timings.hasOwnProperty('duration') ? (ast.timings) :
            parseTimeExpression(/** @type {?} */ (ast.timings), context.errors);
        context.currentAnimateTimings = timings;
        if (timings.delay) {
            context.incrementTime(timings.delay);
            context.currentTimeline.snapshotCurrentStyles();
        }
        var /** @type {?} */ astType = ast.styles ? ast.styles.type : -1;
        if (astType == 5 /* KeyframeSequence */) {
            this.visitKeyframeSequence(/** @type {?} */ (ast.styles), context);
        }
        else {
            var /** @type {?} */ styleAst = (ast.styles);
            if (!styleAst) {
                var /** @type {?} */ newStyleData = {};
                if (timings.easing) {
                    newStyleData['easing'] = timings.easing;
                }
                styleAst = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])(newStyleData);
                ((styleAst))['treatAsEmptyStep'] = true;
            }
            context.incrementTime(timings.duration);
            if (styleAst) {
                this.visitStyle(styleAst, context);
            }
        }
        context.currentAnimateTimings = null;
        context.previousNode = ast;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineVisitor.prototype.visitStyle = function (ast, context) {
        // this is a special case when a style() call is issued directly after
        // a call to animate(). If the clock is not forwarded by one frame then
        // the style() calls will be merged into the previous animate() call
        // which is incorrect.
        if (!context.currentAnimateTimings &&
            context.previousNode.type == 4 /* Animate */) {
            context.currentTimeline.forwardFrame();
        }
        var /** @type {?} */ normalizedStyles = normalizeStyles(ast.styles);
        var /** @type {?} */ easing = context.currentAnimateTimings && context.currentAnimateTimings.easing;
        this._applyStyles(normalizedStyles, easing, ((ast))['treatAsEmptyStep'] ? true : false, context);
        context.previousNode = ast;
    };
    /**
     * @param {?} styles
     * @param {?} easing
     * @param {?} treatAsEmptyStep
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineVisitor.prototype._applyStyles = function (styles, easing, treatAsEmptyStep, context) {
        if (styles.hasOwnProperty('easing')) {
            easing = easing || (styles['easing']);
            delete styles['easing'];
        }
        context.currentTimeline.setStyles(styles, easing, treatAsEmptyStep);
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineVisitor.prototype.visitKeyframeSequence = function (ast, context) {
        var _this = this;
        var /** @type {?} */ MAX_KEYFRAME_OFFSET = 1;
        var /** @type {?} */ limit = ast.steps.length - 1;
        var /** @type {?} */ firstKeyframe = ast.steps[0];
        var /** @type {?} */ offsetGap = 0;
        var /** @type {?} */ containsOffsets = getOffset(firstKeyframe) != null;
        if (!containsOffsets) {
            offsetGap = MAX_KEYFRAME_OFFSET / limit;
        }
        var /** @type {?} */ startTime = context.currentTimeline.duration;
        var /** @type {?} */ duration = ((context.currentAnimateTimings)).duration;
        var /** @type {?} */ innerContext = context.createSubContext();
        var /** @type {?} */ innerTimeline = innerContext.currentTimeline;
        innerTimeline.easing = ((context.currentAnimateTimings)).easing;
        ast.steps.forEach(function (step, i) {
            var /** @type {?} */ normalizedStyles = normalizeStyles(step.styles);
            var /** @type {?} */ offset = containsOffsets ?
                (step.offset != null ? step.offset : parseFloat(/** @type {?} */ (normalizedStyles['offset']))) :
                (i == limit ? MAX_KEYFRAME_OFFSET : i * offsetGap);
            innerTimeline.forwardTime(offset * duration);
            _this._applyStyles(normalizedStyles, null, false, innerContext);
        });
        // this will ensure that the parent timeline gets all the styles from
        // the child even if the new timeline below is not used
        context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
        // we do this because the window between this timeline and the sub timeline
        // should ensure that the styles within are exactly the same as they were before
        context.transformIntoNewTimeline(startTime + duration);
        context.previousNode = ast;
    };
    return AnimationTimelineVisitor;
}());
var TimelineBuilder = (function () {
    /**
     * @param {?} startTime
     * @param {?=} globalTimelineStyles
     */
    function TimelineBuilder(startTime, globalTimelineStyles) {
        this.startTime = startTime;
        this.duration = 0;
        this.easing = '';
        this._previousKeyframe = {};
        this._keyframes = new Map();
        this._styleSummary = {};
        this._backFill = {};
        this._currentEmptyStepKeyframe = null;
        this._localTimelineStyles = Object.create(this._backFill, {});
        this._globalTimelineStyles =
            globalTimelineStyles ? globalTimelineStyles : this._localTimelineStyles;
        this._loadKeyframe();
    }
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.hasStyling = function () { return this._keyframes.size > 1; };
    Object.defineProperty(TimelineBuilder.prototype, "currentTime", {
        /**
         * @return {?}
         */
        get: function () { return this.startTime + this.duration; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} currentTime
     * @return {?}
     */
    TimelineBuilder.prototype.fork = function (currentTime) {
        if (currentTime === void 0) { currentTime = 0; }
        return new TimelineBuilder(currentTime || this.currentTime, this._globalTimelineStyles);
    };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype._loadKeyframe = function () {
        if (this._currentKeyframe) {
            this._previousKeyframe = this._currentKeyframe;
        }
        this._currentKeyframe = ((this._keyframes.get(this.duration)));
        if (!this._currentKeyframe) {
            this._currentKeyframe = Object.create(this._backFill, {});
            this._keyframes.set(this.duration, this._currentKeyframe);
        }
    };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.forwardFrame = function () {
        this.duration++;
        this._loadKeyframe();
    };
    /**
     * @param {?} time
     * @return {?}
     */
    TimelineBuilder.prototype.forwardTime = function (time) {
        this.duration = time;
        this._loadKeyframe();
    };
    /**
     * @param {?} prop
     * @param {?} value
     * @return {?}
     */
    TimelineBuilder.prototype._updateStyle = function (prop, value) {
        this._localTimelineStyles[prop] = value; /** @type {?} */
        ((this._globalTimelineStyles))[prop] = value;
        this._styleSummary[prop] = { time: this.currentTime, value: value };
    };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.allowOnlyTimelineStyles = function () { return this._currentEmptyStepKeyframe !== this._currentKeyframe; };
    /**
     * @param {?} styles
     * @param {?=} easing
     * @param {?=} treatAsEmptyStep
     * @return {?}
     */
    TimelineBuilder.prototype.setStyles = function (styles, easing, treatAsEmptyStep) {
        var _this = this;
        if (easing === void 0) { easing = null; }
        if (treatAsEmptyStep === void 0) { treatAsEmptyStep = false; }
        if (easing) {
            ((this._previousKeyframe))['easing'] = easing;
        }
        if (treatAsEmptyStep) {
            // special case for animate(duration):
            // all missing styles are filled with a `*` value then
            // if any destination styles are filled in later on the same
            // keyframe then they will override the overridden styles
            // We use `_globalTimelineStyles` here because there may be
            // styles in previous keyframes that are not present in this timeline
            Object.keys(this._globalTimelineStyles).forEach(function (prop) {
                _this._backFill[prop] = _this._globalTimelineStyles[prop] || __WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* AUTO_STYLE */];
                _this._currentKeyframe[prop] = __WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* AUTO_STYLE */];
            });
            this._currentEmptyStepKeyframe = this._currentKeyframe;
        }
        else {
            Object.keys(styles).forEach(function (prop) {
                if (prop !== 'offset') {
                    var /** @type {?} */ val = styles[prop];
                    _this._currentKeyframe[prop] = val;
                    if (!_this._localTimelineStyles[prop]) {
                        _this._backFill[prop] = _this._globalTimelineStyles[prop] || __WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* AUTO_STYLE */];
                    }
                    _this._updateStyle(prop, val);
                }
            });
            Object.keys(this._localTimelineStyles).forEach(function (prop) {
                if (!_this._currentKeyframe.hasOwnProperty(prop)) {
                    _this._currentKeyframe[prop] = _this._localTimelineStyles[prop];
                }
            });
        }
    };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.snapshotCurrentStyles = function () { copyStyles(this._localTimelineStyles, false, this._currentKeyframe); };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.getFinalKeyframe = function () { return ((this._keyframes.get(this.duration))); };
    Object.defineProperty(TimelineBuilder.prototype, "properties", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ properties = [];
            for (var /** @type {?} */ prop in this._currentKeyframe) {
                properties.push(prop);
            }
            return properties;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} timeline
     * @return {?}
     */
    TimelineBuilder.prototype.mergeTimelineCollectedStyles = function (timeline) {
        var _this = this;
        Object.keys(timeline._styleSummary).forEach(function (prop) {
            var /** @type {?} */ details0 = _this._styleSummary[prop];
            var /** @type {?} */ details1 = timeline._styleSummary[prop];
            if (!details0 || details1.time > details0.time) {
                _this._updateStyle(prop, details1.value);
            }
        });
    };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.buildKeyframes = function () {
        var _this = this;
        var /** @type {?} */ finalKeyframes = [];
        // special case for when there are only start/destination
        // styles but no actual animation animate steps...
        if (this.duration == 0) {
            var /** @type {?} */ targetKeyframe = this.getFinalKeyframe();
            var /** @type {?} */ firstKeyframe = copyStyles(targetKeyframe, true);
            firstKeyframe['offset'] = 0;
            finalKeyframes.push(firstKeyframe);
            var /** @type {?} */ lastKeyframe = copyStyles(targetKeyframe, true);
            lastKeyframe['offset'] = 1;
            finalKeyframes.push(lastKeyframe);
        }
        else {
            this._keyframes.forEach(function (keyframe, time) {
                var /** @type {?} */ finalKeyframe = copyStyles(keyframe, true);
                finalKeyframe['offset'] = time / _this.duration;
                finalKeyframes.push(finalKeyframe);
            });
        }
        return createTimelineInstruction(finalKeyframes, this.duration, this.startTime, this.easing);
    };
    return TimelineBuilder;
}());
/**
 * @param {?} ast
 * @return {?}
 */
function getOffset(ast) {
    var /** @type {?} */ offset = ast.offset;
    if (offset == null) {
        var /** @type {?} */ styles = ast.styles;
        if (Array.isArray(styles)) {
            for (var /** @type {?} */ i = 0; i < styles.length; i++) {
                var /** @type {?} */ o = (styles[i]['offset']);
                if (o != null) {
                    offset = o;
                    break;
                }
            }
        }
        else {
            offset = (styles['offset']);
        }
    }
    return ((offset));
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} triggerName
 * @param {?} fromState
 * @param {?} toState
 * @param {?} isRemovalTransition
 * @param {?} fromStyles
 * @param {?} toStyles
 * @param {?} timelines
 * @return {?}
 */
function createTransitionInstruction(triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines) {
    return {
        type: 0 /* TransitionAnimation */,
        triggerName: triggerName,
        isRemovalTransition: isRemovalTransition,
        fromState: fromState,
        fromStyles: fromStyles,
        toState: toState,
        toStyles: toStyles,
        timelines: timelines
    };
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var AnimationTransitionFactory = (function () {
    /**
     * @param {?} _triggerName
     * @param {?} ast
     * @param {?} matchFns
     * @param {?} _stateStyles
     */
    function AnimationTransitionFactory(_triggerName, ast, matchFns, _stateStyles) {
        this._triggerName = _triggerName;
        this.matchFns = matchFns;
        this._stateStyles = _stateStyles;
        var normalizedAst = Array.isArray(ast.animation) ?
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* sequence */])(ast.animation) :
            ast.animation;
        this._animationAst = normalizedAst;
    }
    /**
     * @param {?} currentState
     * @param {?} nextState
     * @return {?}
     */
    AnimationTransitionFactory.prototype.match = function (currentState, nextState) {
        if (!oneOrMoreTransitionsMatch(this.matchFns, currentState, nextState))
            return;
        var /** @type {?} */ backupStateStyles = this._stateStyles['*'] || {};
        var /** @type {?} */ currentStateStyles = this._stateStyles[currentState] || backupStateStyles;
        var /** @type {?} */ nextStateStyles = this._stateStyles[nextState] || backupStateStyles;
        var /** @type {?} */ timelines = buildAnimationKeyframes(this._animationAst, currentStateStyles, nextStateStyles);
        return createTransitionInstruction(this._triggerName, currentState, nextState, nextState === 'void', currentStateStyles, nextStateStyles, timelines);
    };
    return AnimationTransitionFactory;
}());
/**
 * @param {?} matchFns
 * @param {?} currentState
 * @param {?} nextState
 * @return {?}
 */
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState) {
    return matchFns.some(function (fn) { return fn(currentState, nextState); });
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} ast
 * @return {?}
 */
function validateAnimationSequence(ast) {
    var /** @type {?} */ normalizedAst = Array.isArray(ast) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* sequence */])(/** @type {?} */ (ast)) : (ast);
    return new AnimationValidatorVisitor().validate(normalizedAst);
}
var AnimationValidatorVisitor = (function () {
    function AnimationValidatorVisitor() {
    }
    /**
     * @param {?} ast
     * @return {?}
     */
    AnimationValidatorVisitor.prototype.validate = function (ast) {
        var /** @type {?} */ context = new AnimationValidatorContext();
        visitAnimationNode(this, ast, context);
        return context.errors;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationValidatorVisitor.prototype.visitState = function (ast, context) {
        // these values are not visited in this AST
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationValidatorVisitor.prototype.visitTransition = function (ast, context) {
        // these values are not visited in this AST
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationValidatorVisitor.prototype.visitSequence = function (ast, context) {
        var _this = this;
        ast.steps.forEach(function (step) { return visitAnimationNode(_this, step, context); });
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationValidatorVisitor.prototype.visitGroup = function (ast, context) {
        var _this = this;
        var /** @type {?} */ currentTime = context.currentTime;
        var /** @type {?} */ furthestTime = 0;
        ast.steps.forEach(function (step) {
            context.currentTime = currentTime;
            visitAnimationNode(_this, step, context);
            furthestTime = Math.max(furthestTime, context.currentTime);
        });
        context.currentTime = furthestTime;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationValidatorVisitor.prototype.visitAnimate = function (ast, context) {
        // we reassign the timings here so that they are not reparsed each
        // time an animation occurs
        context.currentAnimateTimings = ast.timings =
            parseTimeExpression(/** @type {?} */ (ast.timings), context.errors);
        var /** @type {?} */ astType = ast.styles && ast.styles.type;
        if (astType == 5 /* KeyframeSequence */) {
            this.visitKeyframeSequence(/** @type {?} */ (ast.styles), context);
        }
        else {
            context.currentTime +=
                context.currentAnimateTimings.duration + context.currentAnimateTimings.delay;
            if (astType == 6 /* Style */) {
                this.visitStyle(/** @type {?} */ (ast.styles), context);
            }
        }
        context.currentAnimateTimings = null;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationValidatorVisitor.prototype.visitStyle = function (ast, context) {
        var /** @type {?} */ styleData = normalizeStyles(ast.styles);
        var /** @type {?} */ timings = context.currentAnimateTimings;
        var /** @type {?} */ endTime = context.currentTime;
        var /** @type {?} */ startTime = context.currentTime;
        if (timings && startTime > 0) {
            startTime -= timings.duration + timings.delay;
        }
        Object.keys(styleData).forEach(function (prop) {
            var /** @type {?} */ collectedEntry = context.collectedStyles[prop];
            var /** @type {?} */ updateCollectedStyle = true;
            if (collectedEntry) {
                if (startTime != endTime && startTime >= collectedEntry.startTime &&
                    endTime <= collectedEntry.endTime) {
                    context.errors.push("The CSS property \"" + prop + "\" that exists between the times of \"" + collectedEntry.startTime + "ms\" and \"" + collectedEntry.endTime + "ms\" is also being animated in a parallel animation between the times of \"" + startTime + "ms\" and \"" + endTime + "ms\"");
                    updateCollectedStyle = false;
                }
                // we always choose the smaller start time value since we
                // want to have a record of the entire animation window where
                // the style property is being animated in between
                startTime = collectedEntry.startTime;
            }
            if (updateCollectedStyle) {
                context.collectedStyles[prop] = { startTime: startTime, endTime: endTime };
            }
        });
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationValidatorVisitor.prototype.visitKeyframeSequence = function (ast, context) {
        var _this = this;
        var /** @type {?} */ totalKeyframesWithOffsets = 0;
        var /** @type {?} */ offsets = [];
        var /** @type {?} */ offsetsOutOfOrder = false;
        var /** @type {?} */ keyframesOutOfRange = false;
        var /** @type {?} */ previousOffset = 0;
        ast.steps.forEach(function (step) {
            var /** @type {?} */ styleData = normalizeStyles(step.styles);
            var /** @type {?} */ offset = 0;
            if (styleData.hasOwnProperty('offset')) {
                totalKeyframesWithOffsets++;
                offset = (styleData['offset']);
            }
            keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
            offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
            previousOffset = offset;
            offsets.push(offset);
        });
        if (keyframesOutOfRange) {
            context.errors.push("Please ensure that all keyframe offsets are between 0 and 1");
        }
        if (offsetsOutOfOrder) {
            context.errors.push("Please ensure that all keyframe offsets are in order");
        }
        var /** @type {?} */ length = ast.steps.length;
        var /** @type {?} */ generatedOffset = 0;
        if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
            context.errors.push("Not all style() steps within the declared keyframes() contain offsets");
        }
        else if (totalKeyframesWithOffsets == 0) {
            generatedOffset = 1 / length;
        }
        var /** @type {?} */ limit = length - 1;
        var /** @type {?} */ currentTime = context.currentTime;
        var /** @type {?} */ animateDuration = ((context.currentAnimateTimings)).duration;
        ast.steps.forEach(function (step, i) {
            var /** @type {?} */ offset = generatedOffset > 0 ? (i == limit ? 1 : (generatedOffset * i)) : offsets[i];
            var /** @type {?} */ durationUpToThisFrame = offset * animateDuration;
            context.currentTime =
                currentTime + ((context.currentAnimateTimings)).delay + durationUpToThisFrame; /** @type {?} */
            ((context.currentAnimateTimings)).duration = durationUpToThisFrame;
            _this.visitStyle(step, context);
        });
    };
    return AnimationValidatorVisitor;
}());
var AnimationValidatorContext = (function () {
    function AnimationValidatorContext() {
        this.errors = [];
        this.currentTime = 0;
        this.collectedStyles = {};
    }
    return AnimationValidatorContext;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@experimental Animation support is experimental.
 * @param {?} name
 * @param {?} definitions
 * @return {?}
 */
function buildTrigger(name, definitions) {
    return new AnimationTriggerVisitor().buildTrigger(name, definitions);
}
/**
 * \@experimental Animation support is experimental.
 */
var AnimationTrigger = (function () {
    /**
     * @param {?} name
     * @param {?} states
     * @param {?} _transitionAsts
     */
    function AnimationTrigger(name, states, _transitionAsts) {
        var _this = this;
        this.name = name;
        this._transitionAsts = _transitionAsts;
        this.transitionFactories = [];
        this.states = {};
        Object.keys(states).forEach(function (stateName) { _this.states[stateName] = copyStyles(states[stateName], false); });
        var errors = [];
        _transitionAsts.forEach(function (ast) {
            var exprs = parseTransitionExpr(ast.expr, errors);
            var sequenceErrors = validateAnimationSequence(ast);
            if (sequenceErrors.length) {
                errors.push.apply(errors, sequenceErrors);
            }
            else {
                _this.transitionFactories.push(new AnimationTransitionFactory(_this.name, ast, exprs, states));
            }
        });
        if (errors.length) {
            var LINE_START = '\n - ';
            throw new Error("Animation parsing for the " + name + " trigger have failed:" + LINE_START + errors.join(LINE_START));
        }
    }
    /**
     * @param {?} currentState
     * @param {?} nextState
     * @return {?}
     */
    AnimationTrigger.prototype.createFallbackInstruction = function (currentState, nextState) {
        var /** @type {?} */ backupStateStyles = this.states['*'] || {};
        var /** @type {?} */ currentStateStyles = this.states[currentState] || backupStateStyles;
        var /** @type {?} */ nextStateStyles = this.states[nextState] || backupStateStyles;
        return createTransitionInstruction(this.name, currentState, nextState, nextState == 'void', currentStateStyles, nextStateStyles, []);
    };
    /**
     * @param {?} currentState
     * @param {?} nextState
     * @return {?}
     */
    AnimationTrigger.prototype.matchTransition = function (currentState, nextState) {
        for (var /** @type {?} */ i = 0; i < this.transitionFactories.length; i++) {
            var /** @type {?} */ result = this.transitionFactories[i].match(currentState, nextState);
            if (result)
                return result;
        }
        return null;
    };
    return AnimationTrigger;
}());
var AnimationTriggerContext = (function () {
    function AnimationTriggerContext() {
        this.errors = [];
        this.states = {};
        this.transitions = [];
    }
    return AnimationTriggerContext;
}());
var AnimationTriggerVisitor = (function () {
    function AnimationTriggerVisitor() {
    }
    /**
     * @param {?} name
     * @param {?} definitions
     * @return {?}
     */
    AnimationTriggerVisitor.prototype.buildTrigger = function (name, definitions) {
        var _this = this;
        var /** @type {?} */ context = new AnimationTriggerContext();
        definitions.forEach(function (def) { return visitAnimationNode(_this, def, context); });
        return new AnimationTrigger(name, context.states, context.transitions);
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTriggerVisitor.prototype.visitState = function (ast, context) {
        var /** @type {?} */ styles = normalizeStyles(ast.styles.styles);
        ast.name.split(/\s*,\s*/).forEach(function (name) { context.states[name] = styles; });
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTriggerVisitor.prototype.visitTransition = function (ast, context) {
        context.transitions.push(ast);
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTriggerVisitor.prototype.visitSequence = function (ast, context) {
        // these values are not visited in this AST
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTriggerVisitor.prototype.visitGroup = function (ast, context) {
        // these values are not visited in this AST
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTriggerVisitor.prototype.visitAnimate = function (ast, context) {
        // these values are not visited in this AST
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTriggerVisitor.prototype.visitStyle = function (ast, context) {
        // these values are not visited in this AST
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTriggerVisitor.prototype.visitKeyframeSequence = function (ast, context) {
        // these values are not visited in this AST
    };
    return AnimationTriggerVisitor;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var MARKED_FOR_ANIMATION_CLASSNAME = 'ng-animating';
var MARKED_FOR_ANIMATION_SELECTOR = '.ng-animating';
var MARKED_FOR_REMOVAL = '$$ngRemove';
var VOID_STATE = 'void';
var DomAnimationEngine = (function () {
    /**
     * @param {?} _driver
     * @param {?} _normalizer
     */
    function DomAnimationEngine(_driver, _normalizer) {
        this._driver = _driver;
        this._normalizer = _normalizer;
        this._flaggedInserts = new Set();
        this._queuedRemovals = new Map();
        this._queuedTransitionAnimations = [];
        this._activeTransitionAnimations = new Map();
        this._activeElementAnimations = new Map();
        this._elementTriggerStates = new Map();
        this._triggers = Object.create(null);
        this._triggerListeners = new Map();
        this._pendingListenerRemovals = new Map();
    }
    Object.defineProperty(DomAnimationEngine.prototype, "queuedPlayers", {
        /**
         * @return {?}
         */
        get: function () {
            return this._queuedTransitionAnimations.map(function (q) { return q.player; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomAnimationEngine.prototype, "activePlayers", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ players = [];
            this._activeElementAnimations.forEach(function (activePlayers) { return players.push.apply(players, activePlayers); });
            return players;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} trigger
     * @param {?=} name
     * @return {?}
     */
    DomAnimationEngine.prototype.registerTrigger = function (trigger, name) {
        name = name || trigger.name;
        if (this._triggers[name]) {
            return;
        }
        this._triggers[name] = buildTrigger(name, trigger.definitions);
    };
    /**
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
    DomAnimationEngine.prototype.onInsert = function (element, domFn) {
        if (element['nodeType'] == 1) {
            this._flaggedInserts.add(element);
        }
        domFn();
    };
    /**
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
    DomAnimationEngine.prototype.onRemove = function (element, domFn) {
        var _this = this;
        if (element['nodeType'] != 1) {
            domFn();
            return;
        }
        var /** @type {?} */ lookupRef = this._elementTriggerStates.get(element);
        if (lookupRef) {
            var /** @type {?} */ possibleTriggers = Object.keys(lookupRef);
            var /** @type {?} */ hasRemoval = possibleTriggers.some(function (triggerName) {
                var /** @type {?} */ oldValue = ((lookupRef))[triggerName];
                var /** @type {?} */ instruction = _this._triggers[triggerName].matchTransition(oldValue, VOID_STATE);
                return !!instruction;
            });
            if (hasRemoval) {
                element[MARKED_FOR_REMOVAL] = true;
                this._queuedRemovals.set(element, domFn);
                return;
            }
        }
        // this means that there are no animations to take on this
        // leave operation therefore we should fire the done|start callbacks
        if (this._triggerListeners.has(element)) {
            element[MARKED_FOR_REMOVAL] = true;
            this._queuedRemovals.set(element, function () { });
        }
        this._onRemovalTransition(element).forEach(function (player) { return player.destroy(); });
        domFn();
    };
    /**
     * @param {?} element
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    DomAnimationEngine.prototype.setProperty = function (element, property, value) {
        var /** @type {?} */ trigger = this._triggers[property];
        if (!trigger) {
            throw new Error("The provided animation trigger \"" + property + "\" has not been registered!");
        }
        var /** @type {?} */ lookupRef = this._elementTriggerStates.get(element);
        if (!lookupRef) {
            this._elementTriggerStates.set(element, lookupRef = {});
        }
        var /** @type {?} */ oldValue = lookupRef.hasOwnProperty(property) ? lookupRef[property] : VOID_STATE;
        if (oldValue !== value) {
            value = normalizeTriggerValue(value);
            var /** @type {?} */ instruction = trigger.matchTransition(oldValue, value);
            if (!instruction) {
                // we do this to make sure we always have an animation player so
                // that callback operations are properly called
                instruction = trigger.createFallbackInstruction(oldValue, value);
            }
            this.animateTransition(element, instruction);
            lookupRef[property] = value;
        }
    };
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} eventPhase
     * @param {?} callback
     * @return {?}
     */
    DomAnimationEngine.prototype.listen = function (element, eventName, eventPhase, callback) {
        var _this = this;
        if (!eventPhase) {
            throw new Error("Unable to listen on the animation trigger \"" + eventName + "\" because the provided event is undefined!");
        }
        if (!this._triggers[eventName]) {
            throw new Error("Unable to listen on the animation trigger event \"" + eventPhase + "\" because the animation trigger \"" + eventName + "\" doesn't exist!");
        }
        var /** @type {?} */ elementListeners = this._triggerListeners.get(element);
        if (!elementListeners) {
            this._triggerListeners.set(element, elementListeners = []);
        }
        validatePlayerEvent(eventName, eventPhase);
        var /** @type {?} */ tuple = ({ triggerName: eventName, phase: eventPhase, callback: callback });
        elementListeners.push(tuple);
        return function () {
            // this is queued up in the event that a removal animation is set
            // to fire on the element (the listeners need to be set during flush)
            getOrSetAsInMap(_this._pendingListenerRemovals, element, []).push(tuple);
        };
    };
    /**
     * @return {?}
     */
    DomAnimationEngine.prototype._clearPendingListenerRemovals = function () {
        var _this = this;
        this._pendingListenerRemovals.forEach(function (tuples, element) {
            var /** @type {?} */ elementListeners = _this._triggerListeners.get(element);
            if (elementListeners) {
                tuples.forEach(function (tuple) {
                    var /** @type {?} */ index = elementListeners.indexOf(tuple);
                    if (index >= 0) {
                        elementListeners.splice(index, 1);
                    }
                });
            }
        });
        this._pendingListenerRemovals.clear();
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DomAnimationEngine.prototype._onRemovalTransition = function (element) {
        // when a parent animation is set to trigger a removal we want to
        // find all of the children that are currently animating and clear
        // them out by destroying each of them.
        var /** @type {?} */ elms = element.querySelectorAll(MARKED_FOR_ANIMATION_SELECTOR);
        var _loop_1 = function (i) {
            var /** @type {?} */ elm = elms[i];
            var /** @type {?} */ activePlayers = this_1._activeElementAnimations.get(elm);
            if (activePlayers) {
                activePlayers.forEach(function (player) { return player.destroy(); });
            }
            var /** @type {?} */ activeTransitions = this_1._activeTransitionAnimations.get(elm);
            if (activeTransitions) {
                Object.keys(activeTransitions).forEach(function (triggerName) {
                    var /** @type {?} */ player = activeTransitions[triggerName];
                    if (player) {
                        player.destroy();
                    }
                });
            }
        };
        var this_1 = this;
        for (var /** @type {?} */ i = 0; i < elms.length; i++) {
            _loop_1(/** @type {?} */ i);
        }
        // we make a copy of the array because the actual source array is modified
        // each time a player is finished/destroyed (the forEach loop would fail otherwise)
        return copyArray(/** @type {?} */ ((this._activeElementAnimations.get(element))));
    };
    /**
     * @param {?} element
     * @param {?} instruction
     * @return {?}
     */
    DomAnimationEngine.prototype.animateTransition = function (element, instruction) {
        var _this = this;
        var /** @type {?} */ triggerName = instruction.triggerName;
        var /** @type {?} */ previousPlayers;
        if (instruction.isRemovalTransition) {
            previousPlayers = this._onRemovalTransition(element);
        }
        else {
            previousPlayers = [];
            var /** @type {?} */ existingTransitions = this._activeTransitionAnimations.get(element);
            var /** @type {?} */ existingPlayer = existingTransitions ? existingTransitions[triggerName] : null;
            if (existingPlayer) {
                previousPlayers.push(existingPlayer);
            }
        }
        // it's important to do this step before destroying the players
        // so that the onDone callback below won't fire before this
        eraseStyles(element, instruction.fromStyles);
        // we first run this so that the previous animation player
        // data can be passed into the successive animation players
        var /** @type {?} */ totalTime = 0;
        var /** @type {?} */ players = instruction.timelines.map(function (timelineInstruction, i) {
            totalTime = Math.max(totalTime, timelineInstruction.totalTime);
            return _this._buildPlayer(element, timelineInstruction, previousPlayers, i);
        });
        previousPlayers.forEach(function (previousPlayer) { return previousPlayer.destroy(); });
        var /** @type {?} */ player = optimizeGroupPlayer(players);
        player.onDone(function () {
            player.destroy();
            var /** @type {?} */ elmTransitionMap = _this._activeTransitionAnimations.get(element);
            if (elmTransitionMap) {
                delete elmTransitionMap[triggerName];
                if (Object.keys(elmTransitionMap).length == 0) {
                    _this._activeTransitionAnimations.delete(element);
                }
            }
            deleteFromArrayMap(_this._activeElementAnimations, element, player);
            setStyles(element, instruction.toStyles);
        });
        var /** @type {?} */ elmTransitionMap = getOrSetAsInMap(this._activeTransitionAnimations, element, {});
        elmTransitionMap[triggerName] = player;
        this._queuePlayer(element, triggerName, player, makeAnimationEvent(element, triggerName, instruction.fromState, instruction.toState, null, // this will be filled in during event creation
        totalTime));
        return player;
    };
    /**
     * @param {?} element
     * @param {?} instructions
     * @param {?=} previousPlayers
     * @return {?}
     */
    DomAnimationEngine.prototype.animateTimeline = function (element, instructions, previousPlayers) {
        var _this = this;
        if (previousPlayers === void 0) { previousPlayers = []; }
        var /** @type {?} */ players = instructions.map(function (instruction, i) {
            var /** @type {?} */ player = _this._buildPlayer(element, instruction, previousPlayers, i);
            player.onDestroy(function () { deleteFromArrayMap(_this._activeElementAnimations, element, player); });
            _this._markPlayerAsActive(element, player);
            return player;
        });
        return optimizeGroupPlayer(players);
    };
    /**
     * @param {?} element
     * @param {?} instruction
     * @param {?} previousPlayers
     * @param {?=} index
     * @return {?}
     */
    DomAnimationEngine.prototype._buildPlayer = function (element, instruction, previousPlayers, index) {
        if (index === void 0) { index = 0; }
        // only the very first animation can absorb the previous styles. This
        // is here to prevent the an overlap situation where a group animation
        // absorbs previous styles multiple times for the same element.
        if (index && previousPlayers.length) {
            previousPlayers = [];
        }
        return this._driver.animate(element, this._normalizeKeyframes(instruction.keyframes), instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    };
    /**
     * @param {?} keyframes
     * @return {?}
     */
    DomAnimationEngine.prototype._normalizeKeyframes = function (keyframes) {
        var _this = this;
        var /** @type {?} */ errors = [];
        var /** @type {?} */ normalizedKeyframes = [];
        keyframes.forEach(function (kf) {
            var /** @type {?} */ normalizedKeyframe = {};
            Object.keys(kf).forEach(function (prop) {
                var /** @type {?} */ normalizedProp = prop;
                var /** @type {?} */ normalizedValue = kf[prop];
                if (prop != 'offset') {
                    normalizedProp = _this._normalizer.normalizePropertyName(prop, errors);
                    normalizedValue =
                        _this._normalizer.normalizeStyleValue(prop, normalizedProp, kf[prop], errors);
                }
                normalizedKeyframe[normalizedProp] = normalizedValue;
            });
            normalizedKeyframes.push(normalizedKeyframe);
        });
        if (errors.length) {
            var /** @type {?} */ LINE_START = '\n - ';
            throw new Error("Unable to animate due to the following errors:" + LINE_START + errors.join(LINE_START));
        }
        return normalizedKeyframes;
    };
    /**
     * @param {?} element
     * @param {?} player
     * @return {?}
     */
    DomAnimationEngine.prototype._markPlayerAsActive = function (element, player) {
        var /** @type {?} */ elementAnimations = getOrSetAsInMap(this._activeElementAnimations, element, []);
        elementAnimations.push(player);
    };
    /**
     * @param {?} element
     * @param {?} triggerName
     * @param {?} player
     * @param {?} event
     * @return {?}
     */
    DomAnimationEngine.prototype._queuePlayer = function (element, triggerName, player, event) {
        var /** @type {?} */ tuple = ({ element: element, player: player, triggerName: triggerName, event: event });
        this._queuedTransitionAnimations.push(tuple);
        player.init();
        element.classList.add(MARKED_FOR_ANIMATION_CLASSNAME);
        player.onDone(function () { element.classList.remove(MARKED_FOR_ANIMATION_CLASSNAME); });
    };
    /**
     * @return {?}
     */
    DomAnimationEngine.prototype._flushQueuedAnimations = function () {
        var _loop_2 = function () {
            var _a = ((this_2._queuedTransitionAnimations.shift())), player = _a.player, element = _a.element, triggerName = _a.triggerName, event = _a.event;
            var /** @type {?} */ parent = element;
            while (parent = parent.parentNode) {
                // this means that a parent element will or will not
                // have its own animation operation which in this case
                // there's no point in even trying to do an animation
                if (parent[MARKED_FOR_REMOVAL])
                    return "continue-parentLoop";
            }
            var /** @type {?} */ listeners = this_2._triggerListeners.get(element);
            if (listeners) {
                listeners.forEach(function (tuple) {
                    if (tuple.triggerName == triggerName) {
                        listenOnPlayer(player, tuple.phase, event, tuple.callback);
                    }
                });
            }
            // if a removal exists for the given element then we need cancel
            // all the queued players so that a proper removal animation can go
            if (this_2._queuedRemovals.has(element)) {
                player.destroy();
                return "continue";
            }
            this_2._markPlayerAsActive(element, player);
            // in the event that an animation throws an error then we do
            // not want to re-run animations on any previous animations
            // if they have already been kicked off beforehand
            player.init();
            if (!player.hasStarted()) {
                player.play();
            }
        };
        var this_2 = this;
        parentLoop: while (this._queuedTransitionAnimations.length) {
            var state_1 = _loop_2();
            switch (state_1) {
                case "continue-parentLoop": continue parentLoop;
            }
        }
    };
    /**
     * @return {?}
     */
    DomAnimationEngine.prototype.flush = function () {
        var _this = this;
        var /** @type {?} */ leaveListeners = new Map();
        this._queuedRemovals.forEach(function (callback, element) {
            var /** @type {?} */ tuple = _this._pendingListenerRemovals.get(element);
            if (tuple) {
                leaveListeners.set(element, tuple);
                _this._pendingListenerRemovals.delete(element);
            }
        });
        this._clearPendingListenerRemovals();
        this._pendingListenerRemovals = leaveListeners;
        this._flushQueuedAnimations();
        var /** @type {?} */ flushAgain = false;
        this._queuedRemovals.forEach(function (callback, element) {
            // an item that was inserted/removed in the same flush means
            // that an animation should not happen anyway
            if (_this._flaggedInserts.has(element))
                return;
            var /** @type {?} */ parent = element;
            var /** @type {?} */ players = [];
            while (parent = parent.parentNode) {
                // there is no reason to even try to
                if (parent[MARKED_FOR_REMOVAL]) {
                    callback();
                    return;
                }
                var /** @type {?} */ match = _this._activeElementAnimations.get(parent);
                if (match) {
                    players.push.apply(players, match);
                    break;
                }
            }
            // the loop was unable to find an parent that is animating even
            // though this element has set to be removed, so the algorithm
            // should check to see if there are any triggers on the element
            // that are present to handle a leave animation and then setup
            // those players to facilitate the callback after done
            if (players.length == 0) {
                // this means that the element has valid state triggers
                var /** @type {?} */ stateDetails_1 = _this._elementTriggerStates.get(element);
                if (stateDetails_1) {
                    Object.keys(stateDetails_1).forEach(function (triggerName) {
                        flushAgain = true;
                        var /** @type {?} */ oldValue = stateDetails_1[triggerName];
                        var /** @type {?} */ instruction = _this._triggers[triggerName].matchTransition(oldValue, VOID_STATE);
                        if (instruction) {
                            players.push(_this.animateTransition(element, instruction));
                        }
                        else {
                            var /** @type {?} */ event = makeAnimationEvent(element, triggerName, oldValue, VOID_STATE, '', 0);
                            var /** @type {?} */ player = new __WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* NoopAnimationPlayer */]();
                            _this._queuePlayer(element, triggerName, player, event);
                        }
                    });
                }
            }
            if (players.length) {
                optimizeGroupPlayer(players).onDone(callback);
            }
            else {
                callback();
            }
        });
        this._queuedRemovals.clear();
        this._flaggedInserts.clear();
        // this means that one or more leave animations were detected
        if (flushAgain) {
            this._flushQueuedAnimations();
            this._clearPendingListenerRemovals();
        }
    };
    return DomAnimationEngine;
}());
/**
 * @param {?} map
 * @param {?} key
 * @param {?} defaultValue
 * @return {?}
 */
function getOrSetAsInMap(map, key, defaultValue) {
    var /** @type {?} */ value = map.get(key);
    if (!value) {
        map.set(key, value = defaultValue);
    }
    return value;
}
/**
 * @param {?} map
 * @param {?} key
 * @param {?} value
 * @return {?}
 */
function deleteFromArrayMap(map, key, value) {
    var /** @type {?} */ arr = map.get(key);
    if (arr) {
        var /** @type {?} */ index = arr.indexOf(value);
        if (index >= 0) {
            arr.splice(index, 1);
            if (arr.length == 0) {
                map.delete(key);
            }
        }
    }
}
/**
 * @param {?} players
 * @return {?}
 */
function optimizeGroupPlayer(players) {
    switch (players.length) {
        case 0:
            return new __WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* NoopAnimationPlayer */]();
        case 1:
            return players[0];
        default:
            return new __WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* ɵAnimationGroupPlayer */](players);
    }
}
/**
 * @param {?} source
 * @return {?}
 */
function copyArray(source) {
    return source ? source.splice(0) : [];
}
/**
 * @param {?} triggerName
 * @param {?} eventName
 * @return {?}
 */
function validatePlayerEvent(triggerName, eventName) {
    switch (eventName) {
        case 'start':
        case 'done':
            return;
        default:
            throw new Error("The provided animation trigger event \"" + eventName + "\" for the animation trigger \"" + triggerName + "\" is not supported!");
    }
}
/**
 * @param {?} player
 * @param {?} eventName
 * @param {?} baseEvent
 * @param {?} callback
 * @return {?}
 */
function listenOnPlayer(player, eventName, baseEvent, callback) {
    switch (eventName) {
        case 'start':
            player.onStart(function () {
                var /** @type {?} */ event = copyAnimationEvent(baseEvent);
                event.phaseName = 'start';
                callback(event);
            });
            break;
        case 'done':
            player.onDone(function () {
                var /** @type {?} */ event = copyAnimationEvent(baseEvent);
                event.phaseName = 'done';
                callback(event);
            });
            break;
    }
}
/**
 * @param {?} e
 * @return {?}
 */
function copyAnimationEvent(e) {
    return makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, e.phaseName, e.totalTime);
}
/**
 * @param {?} element
 * @param {?} triggerName
 * @param {?} fromState
 * @param {?} toState
 * @param {?} phaseName
 * @param {?} totalTime
 * @return {?}
 */
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName, totalTime) {
    return ({ element: element, triggerName: triggerName, fromState: fromState, toState: toState, phaseName: phaseName, totalTime: totalTime });
}
/**
 * @param {?} value
 * @return {?}
 */
function normalizeTriggerValue(value) {
    switch (typeof value) {
        case 'boolean':
            return value ? '1' : '0';
        default:
            return value ? value.toString() : null;
    }
}
/**
 * \@experimental Animation support is experimental.
 * @abstract
 */
var AnimationStyleNormalizer = (function () {
    function AnimationStyleNormalizer() {
    }
    /**
     * @abstract
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    AnimationStyleNormalizer.prototype.normalizePropertyName = function (propertyName, errors) { };
    /**
     * @abstract
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    AnimationStyleNormalizer.prototype.normalizeStyleValue = function (userProvidedProperty, normalizedProperty, value, errors) { };
    return AnimationStyleNormalizer;
}());
/**
 * \@experimental Animation support is experimental.
 */
var NoopAnimationStyleNormalizer = (function () {
    function NoopAnimationStyleNormalizer() {
    }
    /**
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    NoopAnimationStyleNormalizer.prototype.normalizePropertyName = function (propertyName, errors) { return propertyName; };
    /**
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    NoopAnimationStyleNormalizer.prototype.normalizeStyleValue = function (userProvidedProperty, normalizedProperty, value, errors) {
        return (value);
    };
    return NoopAnimationStyleNormalizer;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Animation = (function () {
    /**
     * @param {?} input
     */
    function Animation(input) {
        var ast = Array.isArray(input) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* sequence */])(input) : input;
        var errors = validateAnimationSequence(ast);
        if (errors.length) {
            var errorMessage = "animation validation failed:\n" + errors.join("\n");
            throw new Error(errorMessage);
        }
        this._animationAst = ast;
    }
    /**
     * @param {?} startingStyles
     * @param {?} destinationStyles
     * @return {?}
     */
    Animation.prototype.buildTimelines = function (startingStyles, destinationStyles) {
        var /** @type {?} */ start = Array.isArray(startingStyles) ? normalizeStyles(startingStyles) : (startingStyles);
        var /** @type {?} */ dest = Array.isArray(destinationStyles) ? normalizeStyles(destinationStyles) : (destinationStyles);
        return buildAnimationKeyframes(this._animationAst, start, dest);
    };
    /**
     * @param {?} injector
     * @param {?} element
     * @param {?=} startingStyles
     * @param {?=} destinationStyles
     * @return {?}
     */
    Animation.prototype.create = function (injector, element, startingStyles, destinationStyles) {
        if (startingStyles === void 0) { startingStyles = {}; }
        if (destinationStyles === void 0) { destinationStyles = {}; }
        var /** @type {?} */ instructions = this.buildTimelines(startingStyles, destinationStyles);
        // note the code below is only here to make the tests happy (once the new renderer is
        // within core then the code below will interact with Renderer.transition(...))
        var /** @type {?} */ driver = injector.get(AnimationDriver);
        var /** @type {?} */ normalizer = injector.get(AnimationStyleNormalizer);
        var /** @type {?} */ engine = new DomAnimationEngine(driver, normalizer);
        return engine.animateTimeline(element, instructions);
    };
    return Animation;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var WebAnimationsStyleNormalizer = (function (_super) {
    __extends(WebAnimationsStyleNormalizer, _super);
    function WebAnimationsStyleNormalizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    WebAnimationsStyleNormalizer.prototype.normalizePropertyName = function (propertyName, errors) {
        return dashCaseToCamelCase(propertyName);
    };
    /**
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    WebAnimationsStyleNormalizer.prototype.normalizeStyleValue = function (userProvidedProperty, normalizedProperty, value, errors) {
        var /** @type {?} */ unit = '';
        var /** @type {?} */ strVal = value.toString().trim();
        if (DIMENSIONAL_PROP_MAP[normalizedProperty] && value !== 0 && value !== '0') {
            if (typeof value === 'number') {
                unit = 'px';
            }
            else {
                var /** @type {?} */ valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
                if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
                    errors.push("Please provide a CSS unit value for " + userProvidedProperty + ":" + value);
                }
            }
        }
        return strVal + unit;
    };
    return WebAnimationsStyleNormalizer;
}(AnimationStyleNormalizer));
var DIMENSIONAL_PROP_MAP = makeBooleanMap('width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent'
    .split(','));
/**
 * @param {?} keys
 * @return {?}
 */
function makeBooleanMap(keys) {
    var /** @type {?} */ map = {};
    keys.forEach(function (key) { return map[key] = true; });
    return map;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
/**
 * @param {?} input
 * @return {?}
 */
function dashCaseToCamelCase(input) {
    return input.replace(DASH_CASE_REGEXP, function () {
        var m = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            m[_i] = arguments[_i];
        }
        return m[1].toUpperCase();
    });
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var DEFAULT_STATE_VALUE = 'void';
var DEFAULT_STATE_STYLES = '*';
var NoopAnimationEngine = (function (_super) {
    __extends(NoopAnimationEngine, _super);
    function NoopAnimationEngine() {
        var _this = _super.apply(this, arguments) || this;
        _this._listeners = new Map();
        _this._changes = [];
        _this._flaggedRemovals = new Set();
        _this._onDoneFns = [];
        _this._triggerStyles = Object.create(null);
        return _this;
    }
    /**
     * @param {?} trigger
     * @param {?=} name
     * @return {?}
     */
    NoopAnimationEngine.prototype.registerTrigger = function (trigger, name) {
        name = name || trigger.name;
        if (this._triggerStyles[name]) {
            return;
        }
        var /** @type {?} */ stateMap = {};
        trigger.definitions.forEach(function (def) {
            if (def.type === 0 /* State */) {
                var /** @type {?} */ stateDef = (def);
                stateMap[stateDef.name] = normalizeStyles(stateDef.styles.styles);
            }
        });
        this._triggerStyles[name] = stateMap;
    };
    /**
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
    NoopAnimationEngine.prototype.onInsert = function (element, domFn) { domFn(); };
    /**
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
    NoopAnimationEngine.prototype.onRemove = function (element, domFn) {
        domFn();
        if (element['nodeType'] == 1) {
            this._flaggedRemovals.add(element);
        }
    };
    /**
     * @param {?} element
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    NoopAnimationEngine.prototype.setProperty = function (element, property, value) {
        var /** @type {?} */ storageProp = makeStorageProp(property);
        var /** @type {?} */ oldValue = element[storageProp] || DEFAULT_STATE_VALUE;
        this._changes.push(/** @type {?} */ ({ element: element, oldValue: oldValue, newValue: value, triggerName: property }));
        var /** @type {?} */ triggerStateStyles = this._triggerStyles[property] || {};
        var /** @type {?} */ fromStateStyles = triggerStateStyles[oldValue] || triggerStateStyles[DEFAULT_STATE_STYLES];
        if (fromStateStyles) {
            eraseStyles(element, fromStateStyles);
        }
        element[storageProp] = value;
        this._onDoneFns.push(function () {
            var /** @type {?} */ toStateStyles = triggerStateStyles[value] || triggerStateStyles[DEFAULT_STATE_STYLES];
            if (toStateStyles) {
                setStyles(element, toStateStyles);
            }
        });
    };
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} eventPhase
     * @param {?} callback
     * @return {?}
     */
    NoopAnimationEngine.prototype.listen = function (element, eventName, eventPhase, callback) {
        var /** @type {?} */ listeners = this._listeners.get(element);
        if (!listeners) {
            this._listeners.set(element, listeners = []);
        }
        var /** @type {?} */ tuple = ({ triggerName: eventName, eventPhase: eventPhase, callback: callback });
        listeners.push(tuple);
        return function () { return tuple.doRemove = true; };
    };
    /**
     * @return {?}
     */
    NoopAnimationEngine.prototype.flush = function () {
        var _this = this;
        var /** @type {?} */ onStartCallbacks = [];
        var /** @type {?} */ onDoneCallbacks = [];
        /**
         * @param {?} listener
         * @param {?} data
         * @return {?}
         */
        function handleListener(listener, data) {
            var /** @type {?} */ phase = listener.eventPhase;
            var /** @type {?} */ event = makeAnimationEvent$1(data.element, data.triggerName, data.oldValue, data.newValue, phase, 0);
            if (phase == 'start') {
                onStartCallbacks.push(function () { return listener.callback(event); });
            }
            else if (phase == 'done') {
                onDoneCallbacks.push(function () { return listener.callback(event); });
            }
        }
        this._changes.forEach(function (change) {
            var /** @type {?} */ element = change.element;
            var /** @type {?} */ listeners = _this._listeners.get(element);
            if (listeners) {
                listeners.forEach(function (listener) {
                    if (listener.triggerName == change.triggerName) {
                        handleListener(listener, change);
                    }
                });
            }
        });
        // upon removal ALL the animation triggers need to get fired
        this._flaggedRemovals.forEach(function (element) {
            var /** @type {?} */ listeners = _this._listeners.get(element);
            if (listeners) {
                listeners.forEach(function (listener) {
                    var /** @type {?} */ triggerName = listener.triggerName;
                    var /** @type {?} */ storageProp = makeStorageProp(triggerName);
                    handleListener(listener, /** @type {?} */ ({
                        element: element,
                        triggerName: triggerName,
                        oldValue: element[storageProp] || DEFAULT_STATE_VALUE,
                        newValue: DEFAULT_STATE_VALUE
                    }));
                });
            }
        });
        // remove all the listeners after everything is complete
        Array.from(this._listeners.keys()).forEach(function (element) {
            var /** @type {?} */ listenersToKeep = ((_this._listeners.get(element))).filter(function (l) { return !l.doRemove; });
            if (listenersToKeep.length) {
                _this._listeners.set(element, listenersToKeep);
            }
            else {
                _this._listeners.delete(element);
            }
        });
        onStartCallbacks.forEach(function (fn) { return fn(); });
        onDoneCallbacks.forEach(function (fn) { return fn(); });
        this._flaggedRemovals.clear();
        this._changes = [];
        this._onDoneFns.forEach(function (doneFn) { return doneFn(); });
        this._onDoneFns = [];
    };
    Object.defineProperty(NoopAnimationEngine.prototype, "activePlayers", {
        /**
         * @return {?}
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NoopAnimationEngine.prototype, "queuedPlayers", {
        /**
         * @return {?}
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    return NoopAnimationEngine;
}(AnimationEngine));
/**
 * @param {?} element
 * @param {?} triggerName
 * @param {?} fromState
 * @param {?} toState
 * @param {?} phaseName
 * @param {?} totalTime
 * @return {?}
 */
function makeAnimationEvent$1(element, triggerName, fromState, toState, phaseName, totalTime) {
    return ({ element: element, triggerName: triggerName, fromState: fromState, toState: toState, phaseName: phaseName, totalTime: totalTime });
}
/**
 * @param {?} property
 * @return {?}
 */
function makeStorageProp(property) {
    return '_@_' + property;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var WebAnimationsPlayer = (function () {
    /**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} options
     * @param {?=} previousPlayers
     */
    function WebAnimationsPlayer(element, keyframes, options, previousPlayers) {
        if (previousPlayers === void 0) { previousPlayers = []; }
        var _this = this;
        this.element = element;
        this.keyframes = keyframes;
        this.options = options;
        this._onDoneFns = [];
        this._onStartFns = [];
        this._onDestroyFns = [];
        this._initialized = false;
        this._finished = false;
        this._started = false;
        this._destroyed = false;
        this.time = 0;
        this.parentPlayer = null;
        this._duration = options['duration'];
        this._delay = options['delay'] || 0;
        this.time = this._duration + this._delay;
        this.previousStyles = {};
        previousPlayers.forEach(function (player) {
            var styles = player._captureStyles();
            Object.keys(styles).forEach(function (prop) { return _this.previousStyles[prop] = styles[prop]; });
        });
    }
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype._onFinish = function () {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach(function (fn) { return fn(); });
            this._onDoneFns = [];
        }
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.init = function () {
        var _this = this;
        if (this._initialized)
            return;
        this._initialized = true;
        var /** @type {?} */ keyframes = this.keyframes.map(function (styles) {
            var /** @type {?} */ formattedKeyframe = {};
            Object.keys(styles).forEach(function (prop, index) {
                var /** @type {?} */ value = styles[prop];
                if (value == __WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* AUTO_STYLE */]) {
                    value = _computeStyle(_this.element, prop);
                }
                if (value != undefined) {
                    formattedKeyframe[prop] = value;
                }
            });
            return formattedKeyframe;
        });
        var /** @type {?} */ previousStyleProps = Object.keys(this.previousStyles);
        if (previousStyleProps.length) {
            var /** @type {?} */ startingKeyframe_1 = keyframes[0];
            var /** @type {?} */ missingStyleProps_1 = [];
            previousStyleProps.forEach(function (prop) {
                if (!startingKeyframe_1.hasOwnProperty(prop)) {
                    missingStyleProps_1.push(prop);
                }
                startingKeyframe_1[prop] = _this.previousStyles[prop];
            });
            if (missingStyleProps_1.length) {
                var /** @type {?} */ self_1 = this;
                var _loop_3 = function () {
                    var /** @type {?} */ kf = keyframes[i];
                    missingStyleProps_1.forEach(function (prop) {
                        kf[prop] = _computeStyle(self_1.element, prop);
                    });
                };
                // tslint:disable-next-line
                for (var /** @type {?} */ i = 1; i < keyframes.length; i++) {
                    _loop_3();
                }
            }
        }
        this._player = this._triggerWebAnimation(this.element, keyframes, this.options);
        this._finalKeyframe =
            keyframes.length ? _copyKeyframeStyles(keyframes[keyframes.length - 1]) : {};
        // this is required so that the player doesn't start to animate right away
        this._resetDomPlayerState();
        this._player.addEventListener('finish', function () { return _this._onFinish(); });
    };
    /**
     * \@internal
     * @param {?} element
     * @param {?} keyframes
     * @param {?} options
     * @return {?}
     */
    WebAnimationsPlayer.prototype._triggerWebAnimation = function (element, keyframes, options) {
        // jscompiler doesn't seem to know animate is a native property because it's not fully
        // supported yet across common browsers (we polyfill it for Edge/Safari) [CL #143630929]
        return (element['animate'](keyframes, options));
    };
    Object.defineProperty(WebAnimationsPlayer.prototype, "domPlayer", {
        /**
         * @return {?}
         */
        get: function () { return this._player; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} fn
     * @return {?}
     */
    WebAnimationsPlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
    /**
     * @param {?} fn
     * @return {?}
     */
    WebAnimationsPlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
    /**
     * @param {?} fn
     * @return {?}
     */
    WebAnimationsPlayer.prototype.onDestroy = function (fn) { this._onDestroyFns.push(fn); };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.play = function () {
        this.init();
        if (!this.hasStarted()) {
            this._onStartFns.forEach(function (fn) { return fn(); });
            this._onStartFns = [];
            this._started = true;
        }
        this._player.play();
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.pause = function () {
        this.init();
        this._player.pause();
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.finish = function () {
        this.init();
        this._onFinish();
        this._player.finish();
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.reset = function () {
        this._resetDomPlayerState();
        this._destroyed = false;
        this._finished = false;
        this._started = false;
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype._resetDomPlayerState = function () {
        if (this._player) {
            this._player.cancel();
        }
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.restart = function () {
        this.reset();
        this.play();
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.hasStarted = function () { return this._started; };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.destroy = function () {
        if (!this._destroyed) {
            this._resetDomPlayerState();
            this._onFinish();
            this._destroyed = true;
            this._onDestroyFns.forEach(function (fn) { return fn(); });
            this._onDestroyFns = [];
        }
    };
    /**
     * @param {?} p
     * @return {?}
     */
    WebAnimationsPlayer.prototype.setPosition = function (p) { this._player.currentTime = p * this.time; };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.getPosition = function () { return this._player.currentTime / this.time; };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype._captureStyles = function () {
        var _this = this;
        var /** @type {?} */ styles = {};
        if (this.hasStarted()) {
            Object.keys(this._finalKeyframe).forEach(function (prop) {
                if (prop != 'offset') {
                    styles[prop] =
                        _this._finished ? _this._finalKeyframe[prop] : _computeStyle(_this.element, prop);
                }
            });
        }
        return styles;
    };
    return WebAnimationsPlayer;
}());
/**
 * @param {?} element
 * @param {?} prop
 * @return {?}
 */
function _computeStyle(element, prop) {
    return ((window.getComputedStyle(element)))[prop];
}
/**
 * @param {?} styles
 * @return {?}
 */
function _copyKeyframeStyles(styles) {
    var /** @type {?} */ newStyles = {};
    Object.keys(styles).forEach(function (prop) {
        if (prop != 'offset') {
            newStyles[prop] = styles[prop];
        }
    });
    return newStyles;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var WebAnimationsDriver = (function () {
    function WebAnimationsDriver() {
    }
    /**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} duration
     * @param {?} delay
     * @param {?} easing
     * @param {?=} previousPlayers
     * @return {?}
     */
    WebAnimationsDriver.prototype.animate = function (element, keyframes, duration, delay, easing, previousPlayers) {
        if (previousPlayers === void 0) { previousPlayers = []; }
        var /** @type {?} */ playerOptions = { 'duration': duration, 'delay': delay, 'fill': 'forwards' };
        // we check for this to avoid having a null|undefined value be present
        // for the easing (which results in an error for certain browsers #9752)
        if (easing) {
            playerOptions['easing'] = easing;
        }
        var /** @type {?} */ previousWebAnimationPlayers = (previousPlayers.filter(function (player) { return player instanceof WebAnimationsPlayer; }));
        return new WebAnimationsPlayer(element, keyframes, playerOptions, previousWebAnimationPlayers);
    };
    return WebAnimationsDriver;
}());
/**
 * @return {?}
 */
function supportsWebAnimations() {
    return typeof Element !== 'undefined' && typeof ((Element)).prototype['animate'] === 'function';
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all animation APIs of the animation browser package.
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the animation package.
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=browser.es5.js.map


/***/ }),
/* 204 */,
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserAnimationsModule; });
/* unused harmony export NoopAnimationsModule */
/* unused harmony export ɵAnimationRenderer */
/* unused harmony export ɵAnimationRendererFactory */
/* unused harmony export ɵe */
/* unused harmony export ɵf */
/* unused harmony export ɵa */
/* unused harmony export ɵc */
/* unused harmony export ɵd */
/* unused harmony export ɵb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations_browser__ = __webpack_require__(203);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @license Angular v4.1.1
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */



/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var AnimationRendererFactory = (function () {
    /**
     * @param {?} delegate
     * @param {?} _engine
     * @param {?} _zone
     */
    function AnimationRendererFactory(delegate, _engine, _zone) {
        this.delegate = delegate;
        this._engine = _engine;
        this._zone = _zone;
    }
    /**
     * @param {?} hostElement
     * @param {?} type
     * @return {?}
     */
    AnimationRendererFactory.prototype.createRenderer = function (hostElement, type) {
        var _this = this;
        var /** @type {?} */ delegate = this.delegate.createRenderer(hostElement, type);
        if (!hostElement || !type || !type.data || !type.data['animation'])
            return delegate;
        var /** @type {?} */ namespaceId = type.id;
        var /** @type {?} */ animationTriggers = (type.data['animation']);
        animationTriggers.forEach(function (trigger) { return _this._engine.registerTrigger(trigger, namespaceify(namespaceId, trigger.name)); });
        return new AnimationRenderer(delegate, this._engine, this._zone, namespaceId);
    };
    return AnimationRendererFactory;
}());
AnimationRendererFactory.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
AnimationRendererFactory.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["RendererFactory2"], },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_animations_browser__["a" /* ɵAnimationEngine */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
var AnimationRenderer = (function () {
    /**
     * @param {?} delegate
     * @param {?} _engine
     * @param {?} _zone
     * @param {?} _namespaceId
     */
    function AnimationRenderer(delegate, _engine, _zone, _namespaceId) {
        this.delegate = delegate;
        this._engine = _engine;
        this._zone = _zone;
        this._namespaceId = _namespaceId;
        this.destroyNode = null;
        this._flushPromise = null;
        this.destroyNode = this.delegate.destroyNode ? function (n) { return delegate.destroyNode(n); } : null;
    }
    Object.defineProperty(AnimationRenderer.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () { return this.delegate.data; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AnimationRenderer.prototype.destroy = function () { this.delegate.destroy(); };
    /**
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    AnimationRenderer.prototype.createElement = function (name, namespace) {
        return this.delegate.createElement(name, namespace);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AnimationRenderer.prototype.createComment = function (value) { return this.delegate.createComment(value); };
    /**
     * @param {?} value
     * @return {?}
     */
    AnimationRenderer.prototype.createText = function (value) { return this.delegate.createText(value); };
    /**
     * @param {?} selectorOrNode
     * @return {?}
     */
    AnimationRenderer.prototype.selectRootElement = function (selectorOrNode) {
        return this.delegate.selectRootElement(selectorOrNode);
    };
    /**
     * @param {?} node
     * @return {?}
     */
    AnimationRenderer.prototype.parentNode = function (node) { return this.delegate.parentNode(node); };
    /**
     * @param {?} node
     * @return {?}
     */
    AnimationRenderer.prototype.nextSibling = function (node) { return this.delegate.nextSibling(node); };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @param {?=} namespace
     * @return {?}
     */
    AnimationRenderer.prototype.setAttribute = function (el, name, value, namespace) {
        this.delegate.setAttribute(el, name, value, namespace);
    };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    AnimationRenderer.prototype.removeAttribute = function (el, name, namespace) {
        this.delegate.removeAttribute(el, name, namespace);
    };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    AnimationRenderer.prototype.addClass = function (el, name) { this.delegate.addClass(el, name); };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    AnimationRenderer.prototype.removeClass = function (el, name) { this.delegate.removeClass(el, name); };
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} value
     * @param {?} flags
     * @return {?}
     */
    AnimationRenderer.prototype.setStyle = function (el, style, value, flags) {
        this.delegate.setStyle(el, style, value, flags);
    };
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} flags
     * @return {?}
     */
    AnimationRenderer.prototype.removeStyle = function (el, style, flags) {
        this.delegate.removeStyle(el, style, flags);
    };
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    AnimationRenderer.prototype.setValue = function (node, value) { this.delegate.setValue(node, value); };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    AnimationRenderer.prototype.appendChild = function (parent, newChild) {
        var _this = this;
        this._engine.onInsert(newChild, function () { return _this.delegate.appendChild(parent, newChild); });
        this._queueFlush();
    };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    AnimationRenderer.prototype.insertBefore = function (parent, newChild, refChild) {
        var _this = this;
        this._engine.onInsert(newChild, function () { return _this.delegate.insertBefore(parent, newChild, refChild); });
        this._queueFlush();
    };
    /**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
    AnimationRenderer.prototype.removeChild = function (parent, oldChild) {
        var _this = this;
        this._engine.onRemove(oldChild, function () {
            // Note: if an component element has a leave animation, and the component
            // a host leave animation, the view engine will call `removeChild` for the parent
            // component renderer as well as for the child component renderer.
            // Therefore, we need to check if we already removed the element.
            if (_this.delegate.parentNode(oldChild)) {
                _this.delegate.removeChild(parent, oldChild);
            }
        });
        this._queueFlush();
    };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    AnimationRenderer.prototype.setProperty = function (el, name, value) {
        if (name.charAt(0) == '@') {
            this._engine.setProperty(el, namespaceify(this._namespaceId, name.substr(1)), value);
            this._queueFlush();
        }
        else {
            this.delegate.setProperty(el, name, value);
        }
    };
    /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    AnimationRenderer.prototype.listen = function (target, eventName, callback) {
        var _this = this;
        if (eventName.charAt(0) == '@') {
            var /** @type {?} */ element = resolveElementFromTarget(target);
            var _a = parseTriggerCallbackName(eventName.substr(1)), name = _a[0], phase = _a[1];
            return this._engine.listen(element, namespaceify(this._namespaceId, name), phase, function (event) {
                var /** @type {?} */ e = (event);
                if (e.triggerName) {
                    e.triggerName = deNamespaceify(_this._namespaceId, e.triggerName);
                }
                _this._zone.run(function () { return callback(event); });
            });
        }
        return this.delegate.listen(target, eventName, callback);
    };
    /**
     * @return {?}
     */
    AnimationRenderer.prototype._queueFlush = function () {
        var _this = this;
        if (!this._flushPromise) {
            this._zone.runOutsideAngular(function () {
                _this._flushPromise = Promise.resolve(null).then(function () {
                    _this._flushPromise = ((null));
                    _this._engine.flush();
                });
            });
        }
    };
    return AnimationRenderer;
}());
/**
 * @param {?} target
 * @return {?}
 */
function resolveElementFromTarget(target) {
    switch (target) {
        case 'body':
            return document.body;
        case 'document':
            return document;
        case 'window':
            return window;
        default:
            return target;
    }
}
/**
 * @param {?} triggerName
 * @return {?}
 */
function parseTriggerCallbackName(triggerName) {
    var /** @type {?} */ dotIndex = triggerName.indexOf('.');
    var /** @type {?} */ trigger = triggerName.substring(0, dotIndex);
    var /** @type {?} */ phase = triggerName.substr(dotIndex + 1);
    return [trigger, phase];
}
/**
 * @param {?} namespaceId
 * @param {?} value
 * @return {?}
 */
function namespaceify(namespaceId, value) {
    return namespaceId + "#" + value;
}
/**
 * @param {?} namespaceId
 * @param {?} value
 * @return {?}
 */
function deNamespaceify(namespaceId, value) {
    return value.replace(namespaceId + '#', '');
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var InjectableAnimationEngine = (function (_super) {
    __extends(InjectableAnimationEngine, _super);
    /**
     * @param {?} driver
     * @param {?} normalizer
     */
    function InjectableAnimationEngine(driver, normalizer) {
        return _super.call(this, driver, normalizer) || this;
    }
    return InjectableAnimationEngine;
}(__WEBPACK_IMPORTED_MODULE_2__angular_animations_browser__["b" /* ɵDomAnimationEngine */]));
InjectableAnimationEngine.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
InjectableAnimationEngine.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_animations_browser__["c" /* AnimationDriver */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_animations_browser__["d" /* ɵAnimationStyleNormalizer */], },
]; };
/**
 * @return {?}
 */
function instantiateSupportedAnimationDriver() {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations_browser__["e" /* ɵsupportsWebAnimations */])()) {
        return new __WEBPACK_IMPORTED_MODULE_2__angular_animations_browser__["f" /* ɵWebAnimationsDriver */]();
    }
    return new __WEBPACK_IMPORTED_MODULE_2__angular_animations_browser__["g" /* ɵNoopAnimationDriver */]();
}
/**
 * @return {?}
 */
function instantiateDefaultStyleNormalizer() {
    return new __WEBPACK_IMPORTED_MODULE_2__angular_animations_browser__["h" /* ɵWebAnimationsStyleNormalizer */]();
}
/**
 * @param {?} renderer
 * @param {?} engine
 * @param {?} zone
 * @return {?}
 */
function instantiateRendererFactory(renderer, engine, zone) {
    return new AnimationRendererFactory(renderer, engine, zone);
}
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserModule.
 */
var BROWSER_ANIMATIONS_PROVIDERS = [
    { provide: __WEBPACK_IMPORTED_MODULE_2__angular_animations_browser__["c" /* AnimationDriver */], useFactory: instantiateSupportedAnimationDriver },
    { provide: __WEBPACK_IMPORTED_MODULE_2__angular_animations_browser__["d" /* ɵAnimationStyleNormalizer */], useFactory: instantiateDefaultStyleNormalizer },
    { provide: __WEBPACK_IMPORTED_MODULE_2__angular_animations_browser__["a" /* ɵAnimationEngine */], useClass: InjectableAnimationEngine }, {
        provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["RendererFactory2"],
        useFactory: instantiateRendererFactory,
        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* ɵDomRendererFactory2 */], __WEBPACK_IMPORTED_MODULE_2__angular_animations_browser__["a" /* ɵAnimationEngine */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]
    }
];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserTestingModule.
 */
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [
    { provide: __WEBPACK_IMPORTED_MODULE_2__angular_animations_browser__["a" /* ɵAnimationEngine */], useClass: __WEBPACK_IMPORTED_MODULE_2__angular_animations_browser__["i" /* ɵNoopAnimationEngine */] }, {
        provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["RendererFactory2"],
        useFactory: instantiateRendererFactory,
        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* ɵDomRendererFactory2 */], __WEBPACK_IMPORTED_MODULE_2__angular_animations_browser__["a" /* ɵAnimationEngine */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]
    }
];
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@experimental Animation support is experimental.
 */
var BrowserAnimationsModule = (function () {
    function BrowserAnimationsModule() {
    }
    return BrowserAnimationsModule;
}());
BrowserAnimationsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* BrowserModule */]],
                providers: BROWSER_ANIMATIONS_PROVIDERS,
            },] },
];
/**
 * @nocollapse
 */
BrowserAnimationsModule.ctorParameters = function () { return []; };
/**
 * \@experimental Animation support is experimental.
 */
var NoopAnimationsModule = (function () {
    function NoopAnimationsModule() {
    }
    return NoopAnimationsModule;
}());
NoopAnimationsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* BrowserModule */]],
                providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
            },] },
];
/**
 * @nocollapse
 */
NoopAnimationsModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all animation APIs of the animation browser package.
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the animation package.
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=animations.es5.js.map


/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderActions = HeaderActions_1 = (function () {
    function HeaderActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    HeaderActions.prototype.toggleSearch = function () {
        this.ngRedux.dispatch({
            type: HeaderActions_1.TOGGLE_SEARCH
        });
    };
    return HeaderActions;
}());
HeaderActions.TOGGLE_SEARCH = 'toggle_search';
HeaderActions = HeaderActions_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["NgRedux"]])
], HeaderActions);

var HeaderActions_1;


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingActions = LoadingActions_1 = (function () {
    function LoadingActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    LoadingActions.prototype.finishLoading = function () {
        this.ngRedux.dispatch({
            type: LoadingActions_1.FINISH
        });
    };
    return LoadingActions;
}());
LoadingActions.FINISH = 'finish_loading';
LoadingActions = LoadingActions_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["NgRedux"]])
], LoadingActions);

var LoadingActions_1;


/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RootActions = RootActions_1 = (function () {
    function RootActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    RootActions.prototype.toggleSearch = function () {
        this.ngRedux.dispatch({
            type: RootActions_1.TOGGLE_SEARCH
        });
    };
    return RootActions;
}());
RootActions.TOGGLE_SEARCH = 'toggle_search';
RootActions = RootActions_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["NgRedux"]])
], RootActions);

var RootActions_1;


/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchActions = SearchActions_1 = (function () {
    function SearchActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    SearchActions.prototype.closeSearch = function () {
        this.ngRedux.dispatch({
            type: SearchActions_1.CLOSE_SEARCH
        });
    };
    SearchActions.prototype.executeSearch = function (searchState) {
        this.ngRedux.dispatch({
            type: SearchActions_1.EXECUTE_SEARCH,
            data: searchState
        });
    };
    return SearchActions;
}());
SearchActions.CLOSE_SEARCH = 'close_search';
SearchActions.EXECUTE_SEARCH = 'execute_search';
SearchActions = SearchActions_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["NgRedux"]])
], SearchActions);

var SearchActions_1;


/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_root__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_root__["a" /* Root */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards__["a" /* BootstrapGuard */]],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'home' }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__components_root__["a" /* Root */]];


/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_github_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_json_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_app_state_app_state_actions__ = __webpack_require__(130);
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
    function AppComponent(githubApiService, jsonService, appStateActions) {
        this.githubApiService = githubApiService;
        this.jsonService = jsonService;
        this.appStateActions = appStateActions;
        this.repos = [];
        this.partners = [];
        this.tagItems = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(this.jsonService.getPartners(), this.jsonService.getTags()).subscribe(function (data) {
            _this.partners = data[0];
            _this.tagItems = data[1];
            var appData = {
                partners: _this.partners,
                tagItems: _this.tagItems
            };
            _this.appStateActions.initAppState(appData);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: '<router-outlet></router-outlet>',
        styles: [__webpack_require__(452), __webpack_require__(451)],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_github_service__["a" /* GitHubApiService */],
        __WEBPACK_IMPORTED_MODULE_2__services_json_service__["a" /* JsonService */],
        __WEBPACK_IMPORTED_MODULE_5__actions_app_state_app_state_actions__["a" /* AppStateActions */]])
], AppComponent);



/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_l10n__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(14);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Header = (function (_super) {
    __extends(Header, _super);
    function Header(locale, translation, router, headerActions, rootActions) {
        var _this = _super.call(this, locale, translation) || this;
        _this.locale = locale;
        _this.translation = translation;
        _this.router = router;
        _this.headerActions = headerActions;
        _this.rootActions = rootActions;
        return _this;
    }
    Header.prototype.onSearchClicked = function () {
        this.rootActions.toggleSearch();
    };
    return Header;
}(__WEBPACK_IMPORTED_MODULE_2_angular_l10n__["d" /* Localization */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Header.prototype, "viewModel", void 0);
Header = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'header',
        template: __webpack_require__(484),
        styles: [__webpack_require__(442)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular_l10n__["b" /* LocaleService */],
        __WEBPACK_IMPORTED_MODULE_2_angular_l10n__["c" /* TranslationService */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
        __WEBPACK_IMPORTED_MODULE_3__actions__["b" /* HeaderActions */],
        __WEBPACK_IMPORTED_MODULE_3__actions__["e" /* RootActions */]])
], Header);



/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderViewModelSelector; });
/* unused harmony export getHeaderViewModelFromAppState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store_selector__ = __webpack_require__(54);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var HeaderViewModelSelector = (function (_super) {
    __extends(HeaderViewModelSelector, _super);
    function HeaderViewModelSelector() {
        return _super.call(this, ['header',
        ], getHeaderViewModelFromAppState) || this;
    }
    return HeaderViewModelSelector;
}(__WEBPACK_IMPORTED_MODULE_0__store_store_selector__["a" /* StoreSelector */]));

function getHeaderViewModelFromAppState(state) {
    if (state == null)
        return { isHidden: true };
    return { isHidden: state.header.isHidden };
}


/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partner_panel_item_component__ = __webpack_require__(215);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__partner_panel_item_component__["a"]; });



/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerPanelItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartnerPanelItem = (function () {
    function PartnerPanelItem() {
    }
    PartnerPanelItem.prototype.displayMorePartners = function () {
        if (this.index == this.morePartnersIndex)
            return true;
        return false;
    };
    return PartnerPanelItem;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PartnerPanelItem.prototype, "viewModel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PartnerPanelItem.prototype, "index", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PartnerPanelItem.prototype, "morePartnersIndex", void 0);
PartnerPanelItem = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'partner-panel-item',
        template: __webpack_require__(485),
        styles: [__webpack_require__(443)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    })
], PartnerPanelItem);



/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerPanel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_l10n__ = __webpack_require__(32);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PartnerPanel = (function (_super) {
    __extends(PartnerPanel, _super);
    function PartnerPanel(locale, translation, router) {
        var _this = _super.call(this, locale, translation) || this;
        _this.locale = locale;
        _this.translation = translation;
        _this.router = router;
        return _this;
    }
    return PartnerPanel;
}(__WEBPACK_IMPORTED_MODULE_2_angular_l10n__["d" /* Localization */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PartnerPanel.prototype, "viewModel", void 0);
PartnerPanel = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'partner-panel',
        template: __webpack_require__(486),
        styles: [__webpack_require__(444)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular_l10n__["b" /* LocaleService */],
        __WEBPACK_IMPORTED_MODULE_2_angular_l10n__["c" /* TranslationService */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
], PartnerPanel);



/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerPanelViewModelSelector; });
/* unused harmony export getPartnerPanelViewModelFromAppState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store_selector__ = __webpack_require__(54);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PartnerPanelViewModelSelector = (function (_super) {
    __extends(PartnerPanelViewModelSelector, _super);
    function PartnerPanelViewModelSelector() {
        return _super.call(this, ['partnerPanelItems',
        ], getPartnerPanelViewModelFromAppState) || this;
    }
    return PartnerPanelViewModelSelector;
}(__WEBPACK_IMPORTED_MODULE_0__store_store_selector__["a" /* StoreSelector */]));

function getPartnerPanelViewModelFromAppState(state) {
    return { partnerPanelItems: state.partners, panelItemCount: state.partners.length - 1 };
}


/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project_item_component__ = __webpack_require__(219);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__project_item_component__["a"]; });



/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectItem = (function () {
    function ProjectItem() {
    }
    ProjectItem.prototype.authorTypeToClass = function () {
        switch (this.viewModel.authorType) {
            case 'open source community':
                return 'open-source';
            case 'development partners':
                return 'partner';
            case 'kcura':
            default:
                return 'kcura';
        }
    };
    ProjectItem.prototype.projectTypeToClass = function () {
        switch (this.viewModel.projectType) {
            case 'script':
                return 'script';
            case 'tool':
                return 'tool';
            case 'app':
            default:
                return 'app';
        }
    };
    return ProjectItem;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProjectItem.prototype, "viewModel", void 0);
ProjectItem = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'project-item',
        template: __webpack_require__(487),
        styles: [__webpack_require__(445)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    })
], ProjectItem);



/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_l10n__ = __webpack_require__(32);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Project = (function (_super) {
    __extends(Project, _super);
    function Project(locale, translation, router) {
        var _this = _super.call(this, locale, translation) || this;
        _this.locale = locale;
        _this.translation = translation;
        _this.router = router;
        return _this;
    }
    return Project;
}(__WEBPACK_IMPORTED_MODULE_2_angular_l10n__["d" /* Localization */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Project.prototype, "viewModel", void 0);
Project = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'project',
        template: __webpack_require__(488),
        styles: [__webpack_require__(446)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular_l10n__["b" /* LocaleService */],
        __WEBPACK_IMPORTED_MODULE_2_angular_l10n__["c" /* TranslationService */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
], Project);



/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectViewModelSelector; });
/* unused harmony export getProjectViewModelFromAppState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store_selector__ = __webpack_require__(54);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ProjectViewModelSelector = (function (_super) {
    __extends(ProjectViewModelSelector, _super);
    function ProjectViewModelSelector() {
        return _super.call(this, ['projects'], getProjectViewModelFromAppState) || this;
    }
    return ProjectViewModelSelector;
}(__WEBPACK_IMPORTED_MODULE_0__store_store_selector__["a" /* StoreSelector */]));

function getProjectViewModelFromAppState(state) {
    var featuredItems = [
        {
            name: "file-validation-agent",
            partner: "NSERIO",
            version: "9.5",
            description: "This solution validates that document files such as natives, images, production images, extracted text, and transcript files exist on the server. It identifies any files which are missing so that they can be restored.",
            forkCount: 5,
            starCount: 8,
            authorType: "development partners",
            projectType: "script"
        },
        {
            name: "relativity-test-helpers",
            partner: "NSERIO",
            version: "9.5",
            description: "Integration testing is a software testing methodology used to test individual software components or units of code to verify their interaction. These components are tested as a single group or organized in an iterative manner.",
            forkCount: 5,
            starCount: 8,
            authorType: "development partners",
            projectType: "app"
        }
    ];
    var projectItems = [
        {
            name: "truncate-logs",
            partner: "KCURA",
            version: "9.5",
            description: "Before running this script, please make sure you are familiar with proper management of SQL Server transaction log files - kCura publishes a document on this subject called Managing Relativity SQL Log Files.",
            forkCount: 5,
            starCount: 8,
            authorType: "kcura",
            projectType: "script"
        },
        {
            name: "ps-rest-module",
            partner: "OPEN SOURCE COMMUNITY",
            version: "9.5",
            description: "This solution validates that document files such as natives, images, production images, extracted text, and transcript files exist on the server. It identifies any files which are missing so that they can be restored.",
            forkCount: 5,
            starCount: 8,
            authorType: "open source community",
            projectType: "tool"
        }
    ];
    return { featuredItems: featuredItems, projectItems: projectItems };
}


/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_component__ = __webpack_require__(224);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__root_component__["a"]; });



/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pinRoot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(84);

var pinRoot = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('pinRoot', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(330px)', width: 'calc(100% - 330px)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(0)', width: '*' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0s')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('* => *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.6s cubic-bezier(0.19, 1, 0.22, 1)'))
]);


/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Root; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__root_animations__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__root_viewmodel__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tag__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__partner_panel__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__project__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Root = (function () {
    function Root() {
        this.root = new __WEBPACK_IMPORTED_MODULE_4__root_viewmodel__["a" /* RootViewModelSelector */]();
        this.header = new __WEBPACK_IMPORTED_MODULE_5__header__["b" /* HeaderViewModelSelector */]();
        this.search = new __WEBPACK_IMPORTED_MODULE_6__search__["b" /* SearchViewModelSelector */]();
        this.tag = new __WEBPACK_IMPORTED_MODULE_7__tag__["c" /* TagViewModelSelector */]();
        this.partnerPanel = new __WEBPACK_IMPORTED_MODULE_8__partner_panel__["c" /* PartnerPanelViewModelSelector */]();
        this.project = new __WEBPACK_IMPORTED_MODULE_9__project__["c" /* ProjectViewModelSelector */]();
    }
    return Root;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(['sidebar', 'isPinned']),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], Root.prototype, "isPinned", void 0);
Root = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'root',
        template: __webpack_require__(489),
        styles: [__webpack_require__(447)],
        animations: [
            __WEBPACK_IMPORTED_MODULE_3__root_animations__["a" /* pinRoot */]
        ],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    })
], Root);



/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootViewModelSelector; });
/* unused harmony export getRootViewModelFromAppState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store_selector__ = __webpack_require__(54);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RootViewModelSelector = (function (_super) {
    __extends(RootViewModelSelector, _super);
    function RootViewModelSelector() {
        return _super.call(this, ['header', 'search'], getRootViewModelFromAppState) || this;
    }
    return RootViewModelSelector;
}(__WEBPACK_IMPORTED_MODULE_0__store_store_selector__["a" /* StoreSelector */]));

function getRootViewModelFromAppState(state) {
    return { isSearchVisible: state.search.isVisible };
}


/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_l10n__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(14);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Search = (function (_super) {
    __extends(Search, _super);
    function Search(locale, translation, router, searchActions, rootActions) {
        var _this = _super.call(this, locale, translation) || this;
        _this.locale = locale;
        _this.translation = translation;
        _this.router = router;
        _this.searchActions = searchActions;
        _this.rootActions = rootActions;
        return _this;
    }
    Search.prototype.onSearchClosed = function () {
        this.rootActions.toggleSearch();
    };
    Search.prototype.onSearchTextChanged = function (value) {
        this.viewModel.searchText = value;
        var searchTextLength = value.length;
        this.viewModel.showResults = searchTextLength > 2;
        this.searchActions.executeSearch(this.viewModel);
    };
    return Search;
}(__WEBPACK_IMPORTED_MODULE_2_angular_l10n__["d" /* Localization */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Search.prototype, "viewModel", void 0);
Search = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'search',
        template: __webpack_require__(490),
        styles: [__webpack_require__(448)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular_l10n__["b" /* LocaleService */],
        __WEBPACK_IMPORTED_MODULE_2_angular_l10n__["c" /* TranslationService */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
        __WEBPACK_IMPORTED_MODULE_3__actions__["c" /* SearchActions */],
        __WEBPACK_IMPORTED_MODULE_3__actions__["e" /* RootActions */]])
], Search);



/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchViewModelSelector; });
/* unused harmony export getSearchViewModelFromAppState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store_selector__ = __webpack_require__(54);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SearchViewModelSelector = (function (_super) {
    __extends(SearchViewModelSelector, _super);
    function SearchViewModelSelector() {
        return _super.call(this, ['search',
        ], getSearchViewModelFromAppState) || this;
    }
    return SearchViewModelSelector;
}(__WEBPACK_IMPORTED_MODULE_0__store_store_selector__["a" /* StoreSelector */]));

function getSearchViewModelFromAppState(state) {
    if (state == null)
        return { isVisible: false, searchText: '', tag: { tagItems: [] }, showResults: false };
    return { isVisible: state.header.isHidden, searchText: state.search.searchText, tag: { tagItems: state.tagItems }, showResults: state.search.showResults };
}


/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag_item_component__ = __webpack_require__(229);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tag_item_component__["a"]; });



/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_l10n__ = __webpack_require__(32);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TagItem = (function (_super) {
    __extends(TagItem, _super);
    function TagItem(locale, translation, router) {
        var _this = _super.call(this, locale, translation) || this;
        _this.locale = locale;
        _this.translation = translation;
        _this.router = router;
        return _this;
    }
    return TagItem;
}(__WEBPACK_IMPORTED_MODULE_2_angular_l10n__["d" /* Localization */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagItem.prototype, "viewModel", void 0);
TagItem = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tag-item',
        template: __webpack_require__(491),
        styles: [__webpack_require__(449)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular_l10n__["b" /* LocaleService */],
        __WEBPACK_IMPORTED_MODULE_2_angular_l10n__["c" /* TranslationService */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
], TagItem);



/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tag; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_l10n__ = __webpack_require__(32);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Tag = (function (_super) {
    __extends(Tag, _super);
    function Tag(locale, translation, router) {
        var _this = _super.call(this, locale, translation) || this;
        _this.locale = locale;
        _this.translation = translation;
        _this.router = router;
        return _this;
    }
    return Tag;
}(__WEBPACK_IMPORTED_MODULE_2_angular_l10n__["d" /* Localization */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Tag.prototype, "viewModel", void 0);
Tag = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tag',
        template: __webpack_require__(492),
        styles: [__webpack_require__(450)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular_l10n__["b" /* LocaleService */],
        __WEBPACK_IMPORTED_MODULE_2_angular_l10n__["c" /* TranslationService */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
], Tag);



/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagViewModelSelector; });
/* unused harmony export getTagSelectorViewModelFromAppState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store_selector__ = __webpack_require__(54);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TagViewModelSelector = (function (_super) {
    __extends(TagViewModelSelector, _super);
    function TagViewModelSelector() {
        return _super.call(this, ['tagItems'], getTagSelectorViewModelFromAppState) || this;
    }
    return TagViewModelSelector;
}(__WEBPACK_IMPORTED_MODULE_0__store_store_selector__["a" /* StoreSelector */]));

function getTagSelectorViewModelFromAppState(state) {
    return { tagItems: state.tagItems };
}


/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_l10n__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_json_service__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BootstrapGuard = (function () {
    function BootstrapGuard(locale, translation, actions, jsonService) {
        this.locale = locale;
        this.translation = translation;
        this.actions = actions;
        this.jsonService = jsonService;
    }
    BootstrapGuard.prototype.canActivate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var startupTasks = [
                _this.loadMinTime(),
                _this.loadLocalization(),
            ];
            Promise.all(startupTasks).then(function () {
                resolve(true);
                _this.actions.finishLoading();
            }, function () {
                resolve(false);
            });
        });
    };
    BootstrapGuard.prototype.loadMinTime = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 2000);
        });
    };
    BootstrapGuard.prototype.loadLocalization = function () {
        var _this = this;
        this.locale.addConfiguration()
            .addLanguages(['en', 'es'])
            .defineLanguage('en');
        this.locale.init();
        this.translation.addConfiguration()
            .addProvider('./languages/locale-');
        this.translation.init();
        var promise = new Promise(function (resolve) {
            _this.translation.translationChanged.subscribe(function () {
                resolve(true);
            }, function () {
                resolve(false);
            });
        });
        this.translation.init();
        return promise;
    };
    return BootstrapGuard;
}());
BootstrapGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular_l10n__["b" /* LocaleService */], __WEBPACK_IMPORTED_MODULE_2_angular_l10n__["c" /* TranslationService */], __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* LoadingActions */], __WEBPACK_IMPORTED_MODULE_3__services_json_service__["a" /* JsonService */]])
], BootstrapGuard);



/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = headerReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(14);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var INIT_STATE = {
    isHidden: false
};
function headerReducer(state, action) {
    if (state === void 0) { state = INIT_STATE; }
    var newState = state;
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* HeaderActions */].TOGGLE_SEARCH:
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* SearchActions */].CLOSE_SEARCH:
            newState = __assign({}, state, { isHidden: !state.isHidden });
            break;
    }
    return newState;
}


/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(239);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__store__["a"]; });




/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = partnersReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(14);

function partnersReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* AppStateActions */].INIT_STATE:
            var app = action.data;
            return app.partners && app.partners.slice() || [];
        default:
            return state;
    }
}


/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = projectsReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(14);

function projectsReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* AppStateActions */].INIT_STATE:
            var app = action.data;
            return app.projects && app.projects.slice() || [];
        default:
            return state;
    }
}


/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rootReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(14);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var INIT_STATE = {
    isSearchVisible: false
};
function rootReducer(state, action) {
    if (state === void 0) { state = INIT_STATE; }
    var newState = state;
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["e" /* RootActions */].TOGGLE_SEARCH:
            newState = __assign({}, state, { isSearchVisible: !state.isSearchVisible });
            break;
    }
    return newState;
}


/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = searchReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(14);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var INIT_STATE = {
    isVisible: false,
    searchText: '',
    showResults: false
};
function searchReducer(state, action) {
    if (state === void 0) { state = INIT_STATE; }
    var newState = state;
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* SearchActions */].CLOSE_SEARCH:
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* HeaderActions */].TOGGLE_SEARCH:
            newState = __assign({}, state, { isVisible: !state.isVisible });
            break;
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* SearchActions */].EXECUTE_SEARCH:
            var app = action.data;
            newState = __assign({}, state, { searchText: app.searchText, showResults: app.showResults });
            break;
    }
    return newState;
}


/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_reducer__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search_reducer__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tagItems_tagItems_reducer__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__root_root_reducer__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__partners_partners_reducer__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projects_projects_reducer__ = __webpack_require__(236);







var rootReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    root: __WEBPACK_IMPORTED_MODULE_4__root_root_reducer__["a" /* rootReducer */],
    header: __WEBPACK_IMPORTED_MODULE_1__header_header_reducer__["a" /* headerReducer */],
    search: __WEBPACK_IMPORTED_MODULE_2__search_search_reducer__["a" /* searchReducer */],
    tagItems: __WEBPACK_IMPORTED_MODULE_3__tagItems_tagItems_reducer__["a" /* tagItemsReducer */],
    partners: __WEBPACK_IMPORTED_MODULE_5__partners_partners_reducer__["a" /* partnersReducer */],
    projects: __WEBPACK_IMPORTED_MODULE_6__projects_projects_reducer__["a" /* projectsReducer */]
});


/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = tagItemsReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(14);

function tagItemsReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* AppStateActions */].INIT_STATE:
            var app = action.data;
            return app.tagItems && app.tagItems.slice() || [];
        default:
            return state;
    }
}


/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(192);



if (false) {
    enableProdMode();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(undefined);
// imports


// module
exports.push([module.i, ":host {\n  background: linear-gradient(0deg, #FF7F2F 0%, #F68A1F 100%);\n  color: #F7F6F1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 0 0 auto;\n  width: 100%;\n  height: 326px;\n  font-family: 'Cartograph Sans CF';\n  position: absolute;\n  transition: all 300ms cubic-bezier(0.25, 0.1, 0.25, 1);\n  top: 0; }\n\n.content-header {\n  width: 668px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: center; }\n  .content-header.open {\n    visibility: hidden; }\n  .content-header .title-row {\n    display: flex;\n    align-items: center;\n    /*margin-bottom: 30px;*/\n    margin-bottom: 8px; }\n  .content-header .logo {\n    width: 25px;\n    height: 24px;\n    background-image: url(" + __webpack_require__(477) + ");\n    background-color: linear-gradient(0deg, #FF7F2F 0%, #F68A1F 100%);\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n    flex: 0 0 auto;\n    margin-right: 10px; }\n  .content-header .logo-relativity {\n    height: 60px;\n    width: 182px;\n    background-image: url(" + __webpack_require__(478) + ");\n    background-color: linear-gradient(0deg, #FF7F2F 0%, #F68A1F 100%);\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n    flex: 0 0 auto;\n    fill: #FFFFFF;\n    margin-left: -14px; }\n    .content-header .logo-relativity .logo-relativity > path {\n      fill: #FFFFFF; }\n  .content-header .relativity-font {\n    height: 24px;\n    font-size: 20px;\n    font-weight: 900;\n    line-height: 1;\n    margin-right: 10px; }\n  .content-header .title-text {\n    height: 24px;\n    font-size: 20px;\n    font-weight: 500;\n    line-height: 1; }\n  .content-header .header-text {\n    height: 120px;\n    width: 100%;\n    font-size: 24px;\n    font-weight: 500;\n    line-height: 40px;\n    margin-bottom: 30px; }\n  .content-header .search-row {\n    display: flex;\n    cursor: pointer;\n    transition: all 300ms cubic-bezier(0.25, 0.1, 0.25, 1);\n    transform-origin: 0 0; }\n    .content-header .search-row:hover {\n      transform: scale(1.05); }\n  .content-header .icon-search {\n    margin-right: 8px;\n    border: none;\n    color: #FFFFFF;\n    font-size: 20px; }\n  .content-header .search-text {\n    height: 20px;\n    width: 74px;\n    color: #FFFFFF;\n    font-size: 20px;\n    font-weight: 900;\n    line-height: 20px;\n    background-color: linear-gradient(0deg, #FF7F2F 0%, #F68A1F 100%);\n    letter-spacing: 0.5px; }\n", ""]);

// exports


/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(undefined);
// imports


// module
exports.push([module.i, ":host {\n  font-family: \"Cartograph Sans CF\";\n  position: relative;\n  margin: 2px; }\n\n.panel-item {\n  background-color: #FCFCFA;\n  height: 60px;\n  width: 163px;\n  justify-content: center;\n  align-items: center;\n  display: flex; }\n  .panel-item .panel-item-text {\n    height: 11px;\n    width: 49px;\n    color: #A073DE;\n    font-size: 11px;\n    font-weight: 500;\n    line-height: 11px; }\n  .panel-item.hidden {\n    display: none; }\n\n.panel-item-link {\n  height: 11px;\n  color: #9E9D98;\n  font-size: 11px;\n  font-weight: 500;\n  line-height: 11px;\n  text-align: center; }\n\n.more-partners {\n  background-color: #F7F6F1;\n  height: 60px;\n  width: 163px;\n  justify-content: center;\n  align-items: center;\n  display: none; }\n  .more-partners.visible {\n    display: flex; }\n", ""]);

// exports


/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(undefined);
// imports


// module
exports.push([module.i, ":host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 0 0 auto;\n  font-family: 'Cartograph Sans CF'; }\n\n.panel-container {\n  margin-top: 70px;\n  width: 668px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: center;\n  margin-bottom: 70px; }\n\n.panel-header {\n  height: 24px;\n  width: 100%;\n  color: #FF7F2F;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 24px;\n  margin-bottom: 12px; }\n\n.panel-row {\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 29px; }\n\n.panel-text {\n  height: 20px;\n  color: #666562;\n  line-height: 20px;\n  font-size: 13px;\n  font-weight: 500; }\n\n.link-text {\n  height: 13px;\n  color: #9E9D98;\n  line-height: 13px;\n  font-size: 13px;\n  font-weight: 500; }\n\n.arrow {\n  color: #9E9D98;\n  margin-left: 4px;\n  height: 7px;\n  width: 12px;\n  background-image: url(" + __webpack_require__(168) + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  flex: 0 0 auto; }\n\n.tile-container {\n  width: 100%;\n  height: 125px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: flex-start; }\n", ""]);

// exports


/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(undefined);
// imports


// module
exports.push([module.i, ":host {\n  /*background-color: #FCFCFA;*/\n  font-family: \"Cartograph Sans CF\"; }\n\n.container {\n  height: 222px;\n  width: 668px;\n  margin-bottom: 10px;\n  background-color: #FCFCFA;\n  flex-direction: row;\n  display: flex; }\n  .container .author-type-column {\n    width: 10px;\n    height: 100%; }\n    .container .author-type-column.kcura {\n      background-color: #F8981D; }\n    .container .author-type-column.partner {\n      background-color: #919BEA; }\n    .container .author-type-column.open-source {\n      background-color: #3AC0A7; }\n  .container .icon-column {\n    /*margin-left: 10px;*/\n    width: 68px;\n    height: 100%; }\n    .container .icon-column .project-type-icon {\n      height: 16px;\n      width: 16px;\n      margin-top: 62px;\n      margin-left: 26px;\n      background-repeat: no-repeat;\n      background-size: contain;\n      background-position: center; }\n      .container .icon-column .project-type-icon.app {\n        background-image: url(" + __webpack_require__(473) + "); }\n      .container .icon-column .project-type-icon.script {\n        background-image: url(" + __webpack_require__(479) + "); }\n      .container .icon-column .project-type-icon.tool {\n        background-image: url(" + __webpack_require__(483) + "); }\n  .container .content-column {\n    font-size: 11px;\n    font-weight: 500;\n    width: 494px;\n    line-height: 18px;\n    flex-direction: column;\n    margin-top: 30px; }\n    .container .content-column .partner-text.kcura {\n      color: #F8981D; }\n    .container .content-column .partner-text.open-source {\n      color: #3AC0A7; }\n    .container .content-column .partner-text.partner {\n      color: #919BEA; }\n    .container .content-column .project-row {\n      flex-direction: row;\n      display: flex;\n      align-items: center; }\n    .container .content-column .project-name {\n      margin-top: 8px;\n      color: #2E2E2E;\n      font-size: 20px;\n      font-weight: 900;\n      line-height: 24px; }\n    .container .content-column .version {\n      color: #CCCBC4;\n      font-size: 11px;\n      font-weight: 500;\n      line-height: 18px;\n      margin-left: 8px;\n      margin-top: 16px; }\n    .container .content-column .description {\n      /*height: 80px;*/\n      color: #666562;\n      font-size: 13px;\n      font-weight: 500;\n      line-height: 20px;\n      margin-top: 12px; }\n  .container .data-column .data-row {\n    margin-top: 30px;\n    width: 100%;\n    display: flex;\n    align-items: center; }\n    .container .data-column .data-row.kcura {\n      color: #F8981D; }\n    .container .data-column .data-row.open-source {\n      color: #3AC0A7; }\n    .container .data-column .data-row.partner {\n      color: #919BEA; }\n  .container .data-column .data-text {\n    font-size: 11px;\n    font-weight: 500;\n    line-height: 18px;\n    margin-left: 4px; }\n  .container .data-column .star-logo {\n    height: 13.87px;\n    width: 14.93px;\n    opacity: 0.5;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n    margin-left: 4px; }\n    .container .data-column .star-logo.kcura {\n      background-image: url(" + __webpack_require__(481) + "); }\n    .container .data-column .star-logo.open-source {\n      background-image: url(" + __webpack_require__(480) + "); }\n    .container .data-column .star-logo.partner {\n      background-image: url(" + __webpack_require__(482) + "); }\n  .container .data-column .fork-logo {\n    height: 14.93px;\n    width: 10.67px;\n    opacity: 0.5;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n    margin-left: 11px; }\n    .container .data-column .fork-logo.kcura {\n      background-image: url(" + __webpack_require__(475) + "); }\n    .container .data-column .fork-logo.open-source {\n      background-image: url(" + __webpack_require__(474) + "); }\n    .container .data-column .fork-logo.partner {\n      background-image: url(" + __webpack_require__(476) + "); }\n", ""]);

// exports


/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(undefined);
// imports


// module
exports.push([module.i, ":host {\n  font-family: \"Cartograph Sans CF\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 0 0 auto; }\n\n.container {\n  width: 668px;\n  margin-bottom: 150px; }\n  .container .header {\n    height: 24px;\n    width: 100%;\n    color: #FF7F2F;\n    font-size: 20px;\n    font-weight: 500;\n    line-height: 24px;\n    margin-bottom: 20px; }\n  .container .all-items {\n    margin-top: 70px; }\n", ""]);

// exports


/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(undefined);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%;\n  height: 100%;\n  display: flex block;\n  flex-direction: column;\n  background-color: #F2F1E9; }\n\n.main-content {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow-y: scroll; }\n\n.top-row {\n  width: 100%;\n  height: 326px;\n  display: flex;\n  flex: 0 0 auto;\n  position: relative;\n  top: 0; }\n\n.selector-container {\n  position: relative;\n  width: 100%;\n  flex: 0 0 auto; }\n\n.inner-root {\n  /*position: relative;*/\n  width: 100%;\n  flex: 1 1 auto;\n  flex-direction: column; }\n\n.header-hidden {\n  top: -351px; }\n\n.hidden {\n  display: none; }\n\n.bottom-row {\n  background-color: rgba(222, 221, 214, 0.1);\n  justify-content: center;\n  width: 100%;\n  height: 312px;\n  display: flex;\n  flex: 0 0 auto;\n  position: relative; }\n\n.footer-container {\n  margin-top: 50px;\n  width: 668px;\n  display: flex;\n  position: center;\n  flex-direction: column; }\n\n.footer-title {\n  color: #FF7F2F;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 24px;\n  opacity: 100%;\n  margin-bottom: 12px; }\n\n.footer-text {\n  height: 20px;\n  color: #666562;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 20px;\n  margin-bottom: 20px; }\n\n.footer-link {\n  height: 13px;\n  color: #9E9D98;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 13px; }\n\n.community-row {\n  flex-direction: column;\n  margin-bottom: 100px; }\n\n.footer-row {\n  flex-direction: row;\n  display: flex; }\n\n.footer-row-text {\n  color: #9E9D98;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 13px; }\n\n.large-margin {\n  margin-left: 250px; }\n\n.small-margin {\n  margin-left: 24px; }\n\n.arrow {\n  height: 7px;\n  width: 12px;\n  background-image: url(" + __webpack_require__(168) + "); }\n", ""]);

// exports


/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(undefined);
// imports


// module
exports.push([module.i, ":host {\n  background-color: #FFFFFF;\n  color: linear-gradient(0deg, #FF7F2F 0%, #F68A1F 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 0 0 auto;\n  width: 100%;\n  height: 326px;\n  font-family: 'Cartograph Sans CF';\n  position: absolute; }\n\n.search-header {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  position: center;\n  /*hack, not sure why first or last child selectors are selecting both*/ }\n  .search-header.visible {\n    visibility: visible; }\n  .search-header .search-columns {\n    flex-direction: row; }\n  .search-header .vertical-text {\n    margin-top: 150px;\n    height: 110px;\n    width: 20px;\n    opacity: 0.25;\n    transform: rotate(270deg);\n    color: #CCCBC4;\n    font-size: 20px;\n    font-weight: 900;\n    position: absolute; }\n  .search-header .vertical-text-topics {\n    margin-top: 132px; }\n  .search-header .content-column {\n    width: 230px; }\n  .search-header .search-row {\n    display: flex;\n    align-items: center;\n    margin-bottom: 35px;\n    margin-top: 63px; }\n  .search-header .icon-search {\n    color: #FF7F2F;\n    font-size: 20px;\n    margin-right: 12px; }\n  .search-header .search-box {\n    height: 28px;\n    width: 400px;\n    color: #FF7F2F;\n    letter-spacing: 2px;\n    font-size: 28px;\n    font-weight: 500;\n    line-height: 28px;\n    border: none; }\n    .search-header .search-box::placeholder {\n      opacity: 0.25;\n      color: #FF7F2F; }\n  .search-header .topics-column {\n    width: 475px; }\n    .search-header .topics-column .topics-array {\n      margin-top: 120px;\n      color: #FF7F2F;\n      font-weight: 500;\n      font-size: 11px;\n      text-transform: uppercase;\n      line-height: 27px;\n      width: 200px;\n      height: 150px; }\n      .search-header .topics-column .topics-array .topics-container {\n        list-style: none;\n        max-height: 150px;\n        column-count: 1; }\n        .search-header .topics-column .topics-array .topics-container .topic {\n          cursor: pointer; }\n          .search-header .topics-column .topics-array .topics-container .topic:hover {\n            text-decoration: underline; }\n      .search-header .topics-column .topics-array .see-all-topics {\n        color: #cccbc4;\n        font-size: 10px;\n        width: 81px;\n        text-transform: none;\n        height: 25px;\n        border-bottom: #cccbc4 1px solid;\n        cursor: pointer;\n        margin-left: 41px;\n        margin-top: -25px; }\n  .search-header .close-column {\n    position: absolute;\n    right: 30px;\n    top: 5px; }\n  .search-header .icon-close {\n    font-size: 21px;\n    padding: 30px;\n    color: rgba(0, 0, 0, 0.75);\n    margin-top: 40px;\n    color: rgba(0, 0, 0, 0.75);\n    cursor: pointer;\n    transition: all 300ms cubic-bezier(0.25, 0.1, 0.25, 1); }\n    .search-header .icon-close:hover {\n      transform: scale(1.2); }\n  .search-header .search-content-row {\n    display: flex;\n    height: 187px; }\n  .search-header .authors-column {\n    width: 184px; }\n  .search-header .author {\n    margin-bottom: 11px;\n    display: table; }\n  .search-header .rectangle {\n    display: inline-block;\n    height: 10px;\n    width: 8px;\n    background-color: linear-gradient(0deg, #FF7F2F 0%, #F68A1F 100%);\n    vertical-align: top; }\n    .search-header .rectangle.purple {\n      background-color: #A073DE; }\n    .search-header .rectangle.green {\n      background-color: #73DEA5; }\n    .search-header .rectangle.orange {\n      background-color: #FF7F2F; }\n  .search-header .search-text {\n    display: inline-block;\n    height: 18px;\n    width: 120px;\n    margin-left: 15px;\n    color: linear-gradient(0deg, #FF7F2F 0%, #F68A1F 100%);\n    font-size: 11px;\n    font-weight: 500;\n    letter-spacing: 2px;\n    opacity: 0.8;\n    line-height: 15px; }\n    .search-header .search-text.orange {\n      color: #FF7F2F; }\n    .search-header .search-text.purple {\n      color: #A073DE; }\n    .search-header .search-text.green {\n      color: #73DEA5; }\n", ""]);

// exports


/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(undefined);
// imports


// module
exports.push([module.i, ":host {\n  color: linear-gradient(0deg, #FF7F2F 0%, #F68A1F 100%); }\n\n.tag-item {\n  height: 18px;\n  width: 99px;\n  font-size: 11px;\n  font-weight: 500;\n  line-height: 18px; }\n", ""]);

// exports


/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*\r\nFont: \t\tCartograph sans CF\r\nStyle: \t\tExtra Bold Italic\r\nURL: \t\thttps://www.youworkforthem.com/font/T6736/cartograph-cf\r\nFoundry: \tConnary Fagen\r\nFoundry: \thttps://www.youworkforthem.com/designer/479/connary-fagen\r\nCopyright:\t© 2016 Connary Fagen\r\nVersion: \t17\r\nCreated:\tSeptember 25, 2016\r\nLicense: \thttps://www.youworkforthem.com/font-license \r\nLicense: \tThe WebFont(s) listed in this document must follow the YouWorkForThem\r\n\t\t\tWebFont license rules. All other parties are strictly restricted \r\n\t\t\tfrom using the WebFonts(s) listed without a purchased license. \r\n\t\t\tAll details above must always remain unaltered and visible in your CSS.\r\n*/\n@font-face {\n  font-family: 'Cartograph Sans CF';\n  src: url(" + __webpack_require__(467) + ") format(\"woff2\");\n  font-weight: 100;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Cartograph Sans CF';\n  src: url(" + __webpack_require__(466) + ") format(\"woff2\");\n  font-weight: 100;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Cartograph Sans CF';\n  src: url(" + __webpack_require__(463) + ") format(\"woff2\");\n  font-weight: 300;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Cartograph Sans CF';\n  src: url(" + __webpack_require__(462) + ") format(\"woff2\");\n  font-weight: 300;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Cartograph Sans CF';\n  src: url(" + __webpack_require__(468) + ") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Cartograph Sans CF';\n  src: url(" + __webpack_require__(461) + ") format(\"woff2\");\n  font-weight: normal;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Cartograph Sans CF';\n  src: url(" + __webpack_require__(465) + ") format(\"woff2\");\n  font-weight: 500;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Cartograph Sans CF';\n  src: url(" + __webpack_require__(464) + ") format(\"woff2\");\n  font-weight: 500;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Cartograph Sans CF';\n  src: url(" + __webpack_require__(456) + ") format(\"woff2\");\n  font-weight: 600;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Cartograph Sans CF';\n  src: url(" + __webpack_require__(455) + ") format(\"woff2\");\n  font-weight: 600;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Cartograph Sans CF';\n  src: url(" + __webpack_require__(454) + ") format(\"woff2\");\n  font-weight: 700;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Cartograph Sans CF';\n  src: url(" + __webpack_require__(453) + ") format(\"woff2\");\n  font-weight: 700;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Cartograph Sans CF';\n  src: url(" + __webpack_require__(458) + ") format(\"woff2\");\n  font-weight: 800;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Cartograph Sans CF';\n  src: url(" + __webpack_require__(457) + ") format(\"woff2\");\n  font-weight: 800;\n  font-style: italic; }\n\n@font-face {\n  font-family: 'Cartograph Sans CF';\n  src: url(" + __webpack_require__(460) + ") format(\"woff2\");\n  font-weight: 900;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Cartograph Sans CF';\n  src: url(" + __webpack_require__(459) + ") format(\"woff2\");\n  font-weight: 900;\n  font-style: italic; }\n\n/*Application Glyphs*/\n@font-face {\n  font-family: 'relativity-glyphs';\n  src: url(" + __webpack_require__(472) + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'relativity-glyphs' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.icon-app:before {\n  content: \"\\E900\"; }\n\n.icon-arrow-small:before {\n  content: \"\\E901\"; }\n\n.icon-arrow-short:before {\n  content: \"\\E902\"; }\n\n.icon-close:before {\n  content: \"\\E903\"; }\n\n.icon-dropdown-arrow:before {\n  content: \"\\E904\"; }\n\n.icon-fork:before {\n  content: \"\\E905\"; }\n\n.icon-logo-relativity:before {\n  content: \"\\E906\"; }\n\n.icon-script:before {\n  content: \"\\E907\"; }\n\n.icon-search:before {\n  content: \"\\E908\"; }\n\n.icon-star:before {\n  content: \"\\E909\"; }\n\n.icon-tool:before {\n  content: \"\\E90A\"; }\n", ""]);

// exports


/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(undefined);
// imports


// module
exports.push([module.i, "*,\n*:before,\n*:after {\n  box-sizing: border-box; }\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  margin: 0px;\n  padding: 0px; }\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  color: rgba(0, 0, 0, 0.75);\n  font-family: 'Cartograph Sans CF';\n  font-size: 13px;\n  user-select: none;\n  -ms-touch-action: none;\n  -webkit-touch-callout: none;\n  -ms-content-zooming: none;\n  background-color: #F2F1E9; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 0 0 20px;\n  font-weight: 700; }\n\nh1, .h1 {\n  font-size: 55px;\n  line-height: 82.5px; }\n\nh2, .h2 {\n  font-size: 34px;\n  line-height: 51px; }\n\nh3, .h3 {\n  font-size: 26px;\n  line-height: 39px; }\n\nh4, .h4 {\n  font-size: 21px;\n  line-height: 31.5px;\n  font-weight: 400; }\n\nh5, .h5 {\n  font-size: 16px;\n  line-height: 24px; }\n\nh6, .h6 {\n  font-size: 16px;\n  line-height: 25px;\n  font-weight: 400;\n  letter-spacing: 0.15em; }\n\n.emphasis {\n  font-weight: 900; }\n\np {\n  font-weight: 400;\n  line-height: 1.5em; }\n\ninput:focus {\n  outline: none !important;\n  border: 0 solid transparent;\n  box-shadow: 0 0 0 transparent; }\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n\n@keyframes reverse-rotate {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(-360deg); } }\n\n.rotate {\n  animation: rotate 1s linear infinite; }\n\n.reverse-rotate {\n  animation: reverse-rotate 1s linear infinite; }\n\n@font-face {\n  font-family: 'entypo';\n  font-style: normal;\n  font-weight: normal;\n  src: url(" + __webpack_require__(167) + ");\n  src: url(" + __webpack_require__(167) + "?#iefix) format(\"eot\"), url(" + __webpack_require__(471) + ") format(\"woff\"), url(" + __webpack_require__(470) + ") format(\"truetype\"), url(" + __webpack_require__(469) + "#entypo) format(\"svg\"); }\n\n.entypo-note:before {\n  content: \"\\266A\"; }\n\n.entypo-note-beamed:before {\n  content: \"\\266B\"; }\n\n.entypo-music:before {\n  content: \"\\1F3B5\"; }\n\n.entypo-search:before {\n  content: \"\\1F50D\"; }\n\n.entypo-flashlight:before {\n  content: \"\\1F526\"; }\n\n.entypo-mail:before {\n  content: \"\\2709\"; }\n\n.entypo-heart:before {\n  content: \"\\2665\"; }\n\n.entypo-heart-empty:before {\n  content: \"\\2661\"; }\n\n.entypo-star:before {\n  content: \"\\2605\"; }\n\n.entypo-star-empty:before {\n  content: \"\\2606\"; }\n\n.entypo-user:before {\n  content: \"\\1F464\"; }\n\n.entypo-users:before {\n  content: \"\\1F465\"; }\n\n.entypo-user-add:before {\n  content: \"\\E700\"; }\n\n.entypo-video:before {\n  content: \"\\1F3AC\"; }\n\n.entypo-picture:before {\n  content: \"\\1F304\"; }\n\n.entypo-camera:before {\n  content: \"\\1F4F7\"; }\n\n.entypo-layout:before {\n  content: \"\\268F\"; }\n\n.entypo-menu:before {\n  content: \"\\2630\"; }\n\n.entypo-check:before {\n  content: \"\\2713\"; }\n\n.entypo-cancel:before {\n  content: \"\\2715\"; }\n\n.entypo-cancel-circled:before {\n  content: \"\\2716\"; }\n\n.entypo-cancel-squared:before {\n  content: \"\\274E\"; }\n\n.entypo-plus:before {\n  content: \"+\"; }\n\n.entypo-plus-circled:before {\n  content: \"\\2795\"; }\n\n.entypo-plus-squared:before {\n  content: \"\\229E\"; }\n\n.entypo-minus:before {\n  content: \"-\"; }\n\n.entypo-minus-circled:before {\n  content: \"\\2796\"; }\n\n.entypo-minus-squared:before {\n  content: \"\\229F\"; }\n\n.entypo-help:before {\n  content: \"\\2753\"; }\n\n.entypo-help-circled:before {\n  content: \"\\E704\"; }\n\n.entypo-info:before {\n  content: \"\\2139\"; }\n\n.entypo-info-circled:before {\n  content: \"\\E705\"; }\n\n.entypo-back:before {\n  content: \"\\1F519\"; }\n\n.entypo-home:before {\n  content: \"\\2302\"; }\n\n.entypo-link:before {\n  content: \"\\1F517\"; }\n\n.entypo-attach:before {\n  content: \"\\1F4CE\"; }\n\n.entypo-lock:before {\n  content: \"\\1F512\"; }\n\n.entypo-lock-open:before {\n  content: \"\\1F513\"; }\n\n.entypo-eye:before {\n  content: \"\\E70A\"; }\n\n.entypo-tag:before {\n  content: \"\\E70C\"; }\n\n.entypo-bookmark:before {\n  content: \"\\1F516\"; }\n\n.entypo-bookmarks:before {\n  content: \"\\1F4D1\"; }\n\n.entypo-flag:before {\n  content: \"\\2691\"; }\n\n.entypo-thumbs-up:before {\n  content: \"\\1F44D\"; }\n\n.entypo-thumbs-down:before {\n  content: \"\\1F44E\"; }\n\n.entypo-download:before {\n  content: \"\\1F4E5\"; }\n\n.entypo-upload:before {\n  content: \"\\1F4E4\"; }\n\n.entypo-upload-cloud:before {\n  content: \"\\E711\"; }\n\n.entypo-reply:before {\n  content: \"\\E712\"; }\n\n.entypo-reply-all:before {\n  content: \"\\E713\"; }\n\n.entypo-forward:before {\n  content: \"\\27A6\"; }\n\n.entypo-quote:before {\n  content: \"\\275E\"; }\n\n.entypo-code:before {\n  content: \"\\E714\"; }\n\n.entypo-export:before {\n  content: \"\\E715\"; }\n\n.entypo-pencil:before {\n  content: \"\\270E\"; }\n\n.entypo-feather:before {\n  content: \"\\2712\"; }\n\n.entypo-print:before {\n  content: \"\\E716\"; }\n\n.entypo-retweet:before {\n  content: \"\\E717\"; }\n\n.entypo-keyboard:before {\n  content: \"\\2328\"; }\n\n.entypo-comment:before {\n  content: \"\\E718\"; }\n\n.entypo-chat:before {\n  content: \"\\E720\"; }\n\n.entypo-bell:before {\n  content: \"\\1F514\"; }\n\n.entypo-attention:before {\n  content: \"\\26A0\"; }\n\n.entypo-alert:before {\n  content: \"\\1F4A5'\"; }\n\n.entypo-vcard:before {\n  content: \"\\E722\"; }\n\n.entypo-address:before {\n  content: \"\\E723\"; }\n\n.entypo-location:before {\n  content: \"\\E724\"; }\n\n.entypo-map:before {\n  content: \"\\E727\"; }\n\n.entypo-direction:before {\n  content: \"\\27A2\"; }\n\n.entypo-compass:before {\n  content: \"\\E728\"; }\n\n.entypo-cup:before {\n  content: \"\\2615\"; }\n\n.entypo-trash:before {\n  content: \"\\E729\"; }\n\n.entypo-doc:before {\n  content: \"\\E730\"; }\n\n.entypo-docs:before {\n  content: \"\\E736\"; }\n\n.entypo-doc-landscape:before {\n  content: \"\\E737\"; }\n\n.entypo-doc-text:before {\n  content: \"\\1F4C4\"; }\n\n.entypo-doc-text-inv:before {\n  content: \"\\E731\"; }\n\n.entypo-newspaper:before {\n  content: \"\\1F4F0\"; }\n\n.entypo-book-open:before {\n  content: \"\\1F4D6\"; }\n\n.entypo-book:before {\n  content: \"\\1F4D5\"; }\n\n.entypo-folder:before {\n  content: \"\\1F4C1\"; }\n\n.entypo-archive:before {\n  content: \"\\E738\"; }\n\n.entypo-box:before {\n  content: \"\\1F4E6\"; }\n\n.entypo-rss:before {\n  content: \"\\E73A\"; }\n\n.entypo-phone:before {\n  content: \"\\1F4DE\"; }\n\n.entypo-cog:before {\n  content: \"\\2699\"; }\n\n.entypo-tools:before {\n  content: \"\\2692\"; }\n\n.entypo-share:before {\n  content: \"\\E73C\"; }\n\n.entypo-shareable:before {\n  content: \"\\E73E\"; }\n\n.entypo-basket:before {\n  content: \"\\E73D\"; }\n\n.entypo-bag:before {\n  content: \"\\1F45C'\"; }\n\n.entypo-calendar:before {\n  content: \"\\1F4C5\"; }\n\n.entypo-login:before {\n  content: \"\\E740\"; }\n\n.entypo-logout:before {\n  content: \"\\E741\"; }\n\n.entypo-mic:before {\n  content: \"\\1F3A4\"; }\n\n.entypo-mute:before {\n  content: \"\\1F507\"; }\n\n.entypo-sound:before {\n  content: \"\\1F50A\"; }\n\n.entypo-volume:before {\n  content: \"\\E742\"; }\n\n.entypo-clock:before {\n  content: \"\\1F554\"; }\n\n.entypo-hourglass:before {\n  content: \"\\23F3\"; }\n\n.entypo-lamp:before {\n  content: \"\\1F4A1\"; }\n\n.entypo-light-down:before {\n  content: \"\\1F505\"; }\n\n.entypo-light-up:before {\n  content: \"\\1F506\"; }\n\n.entypo-adjust:before {\n  content: \"\\25D1\"; }\n\n.entypo-block:before {\n  content: \"\\1F6AB\"; }\n\n.entypo-resize-full:before {\n  content: \"\\E744\"; }\n\n.entypo-resize-small:before {\n  content: \"\\E746\"; }\n\n.entypo-popup:before {\n  content: \"\\E74C\"; }\n\n.entypo-publish:before {\n  content: \"\\E74D\"; }\n\n.entypo-window:before {\n  content: \"\\E74E\"; }\n\n.entypo-arrow-combo:before {\n  content: \"\\E74F\"; }\n\n.entypo-down-circled:before {\n  content: \"\\E758\"; }\n\n.entypo-left-circled:before {\n  content: \"\\E759\"; }\n\n.entypo-right-circled:before {\n  content: \"\\E75A\"; }\n\n.entypo-up-circled:before {\n  content: \"\\E75B\"; }\n\n.entypo-down-open:before {\n  content: \"\\E75C\"; }\n\n.entypo-left-open:before {\n  content: \"\\E75D\"; }\n\n.entypo-right-open:before {\n  content: \"\\E75E\"; }\n\n.entypo-up-open:before {\n  content: \"\\E75F\"; }\n\n.entypo-down-open-mini:before {\n  content: \"\\E760\"; }\n\n.entypo-left-open-mini:before {\n  content: \"\\E761\"; }\n\n.entypo-right-open-mini:before {\n  content: \"\\E762\"; }\n\n.entypo-up-open-mini:before {\n  content: \"\\E763\"; }\n\n.entypo-down-open-big:before {\n  content: \"\\E764\"; }\n\n.entypo-left-open-big:before {\n  content: \"\\E765\"; }\n\n.entypo-right-open-big:before {\n  content: \"\\E766\"; }\n\n.entypo-up-open-big:before {\n  content: \"\\E767\"; }\n\n.entypo-down:before {\n  content: \"\\2B07\"; }\n\n.entypo-left:before {\n  content: \"\\2B05\"; }\n\n.entypo-right:before {\n  content: \"\\27A1\"; }\n\n.entypo-up:before {\n  content: \"\\2B06\"; }\n\n.entypo-down-dir:before {\n  content: \"\\25BE\"; }\n\n.entypo-left-dir:before {\n  content: \"\\25C2\"; }\n\n.entypo-right-dir:before {\n  content: \"\\25B8\"; }\n\n.entypo-up-dir:before {\n  content: \"\\25B4\"; }\n\n.entypo-down-bold:before {\n  content: \"\\E4B0\"; }\n\n.entypo-left-bold:before {\n  content: \"\\E4AD\"; }\n\n.entypo-right-bold:before {\n  content: \"\\E4AE\"; }\n\n.entypo-up-bold:before {\n  content: \"\\E4AF\"; }\n\n.entypo-down-thin:before {\n  content: \"\\2193\"; }\n\n.entypo-left-thin:before {\n  content: \"\\2190\"; }\n\n.entypo-right-thin:before {\n  content: \"\\2192\"; }\n\n.entypo-up-thin:before {\n  content: \"\\2191\"; }\n\n.entypo-ccw:before {\n  content: \"\\27F2\"; }\n\n.entypo-cw:before {\n  content: \"\\27F3\"; }\n\n.entypo-arrows-ccw:before {\n  content: \"\\1F504\"; }\n\n.entypo-level-down:before {\n  content: \"\\21B3\"; }\n\n.entypo-level-up:before {\n  content: \"\\21B0\"; }\n\n.entypo-shuffle:before {\n  content: \"\\1F500\"; }\n\n.entypo-loop:before {\n  content: \"\\1F501\"; }\n\n.entypo-switch:before {\n  content: \"\\21C6\"; }\n\n.entypo-play:before {\n  content: \"\\25B6\"; }\n\n.entypo-stop:before {\n  content: \"\\25A0\"; }\n\n.entypo-pause:before {\n  content: \"\\2389\"; }\n\n.entypo-record:before {\n  content: \"\\26AB\"; }\n\n.entypo-to-end:before {\n  content: \"\\23ED\"; }\n\n.entypo-to-start:before {\n  content: \"\\23EE\"; }\n\n.entypo-fast-forward:before {\n  content: \"\\23E9\"; }\n\n.entypo-fast-backward:before {\n  content: \"\\23EA\"; }\n\n.entypo-progress-0:before {\n  content: \"\\E768\"; }\n\n.entypo-progress-1:before {\n  content: \"\\E769\"; }\n\n.entypo-progress-2:before {\n  content: \"\\E76A\"; }\n\n.entypo-progress-3:before {\n  content: \"\\E76B\"; }\n\n.entypo-target:before {\n  content: \"\\1F3AF\"; }\n\n.entypo-palette:before {\n  content: \"\\1F3A8\"; }\n\n.entypo-list:before {\n  content: \"\\E005\"; }\n\n.entypo-list-add:before {\n  content: \"\\E003\"; }\n\n.entypo-signal:before {\n  content: \"\\1F4F6\"; }\n\n.entypo-trophy:before {\n  content: \"\\1F3C6\"; }\n\n.entypo-battery:before {\n  content: \"\\1F50B\"; }\n\n.entypo-back-in-time:before {\n  content: \"\\E771\"; }\n\n.entypo-monitor:before {\n  content: \"\\1F4BB\"; }\n\n.entypo-mobile:before {\n  content: \"\\1F4F1\"; }\n\n.entypo-network:before {\n  content: \"\\E776\"; }\n\n.entypo-cd:before {\n  content: \"\\1F4BF\"; }\n\n.entypo-inbox:before {\n  content: \"\\E777\"; }\n\n.entypo-install:before {\n  content: \"\\E778\"; }\n\n.entypo-globe:before {\n  content: \"\\1F30E\"; }\n\n.entypo-cloud:before {\n  content: \"\\2601\"; }\n\n.entypo-cloud-thunder:before {\n  content: \"\\26C8\"; }\n\n.entypo-flash:before {\n  content: \"\\26A1\"; }\n\n.entypo-moon:before {\n  content: \"\\263D\"; }\n\n.entypo-flight:before {\n  content: \"\\2708\"; }\n\n.entypo-paper-plane:before {\n  content: \"\\E79B\"; }\n\n.entypo-leaf:before {\n  content: \"\\1F342\"; }\n\n.entypo-lifebuoy:before {\n  content: \"\\E788\"; }\n\n.entypo-mouse:before {\n  content: \"\\E789\"; }\n\n.entypo-briefcase:before {\n  content: \"\\1F4BC\"; }\n\n.entypo-suitcase:before {\n  content: \"\\E78E\"; }\n\n.entypo-dot:before {\n  content: \"\\E78B\"; }\n\n.entypo-dot-2:before {\n  content: \"\\E78C\"; }\n\n.entypo-dot-3:before {\n  content: \"\\E78D\"; }\n\n.entypo-brush:before {\n  content: \"\\E79A\"; }\n\n.entypo-magnet:before {\n  content: \"\\E7A1\"; }\n\n.entypo-infinity:before {\n  content: \"\\221E\"; }\n\n.entypo-erase:before {\n  content: \"\\232B\"; }\n\n.entypo-chart-pie:before {\n  content: \"\\E751\"; }\n\n.entypo-chart-line:before {\n  content: \"\\1F4C8\"; }\n\n.entypo-chart-bar:before {\n  content: \"\\1F4CA\"; }\n\n.entypo-chart-area:before {\n  content: \"\\1F53E\"; }\n\n.entypo-tape:before {\n  content: \"\\2707\"; }\n\n.entypo-graduation-cap:before {\n  content: \"\\1F393\"; }\n\n.entypo-language:before {\n  content: \"\\E752\"; }\n\n.entypo-ticket:before {\n  content: \"\\1F3AB\"; }\n\n.entypo-water:before {\n  content: \"\\1F4A6\"; }\n\n.entypo-droplet:before {\n  content: \"\\1F4A7\"; }\n\n.entypo-air:before {\n  content: \"\\E753\"; }\n\n.entypo-credit-card:before {\n  content: \"\\1F4B3\"; }\n\n.entypo-floppy:before {\n  content: \"\\1F4BE\"; }\n\n.entypo-clipboard:before {\n  content: \"\\1F4CB\"; }\n\n.entypo-megaphone:before {\n  content: \"\\1F4E3\"; }\n\n.entypo-database:before {\n  content: \"\\E754\"; }\n\n.entypo-drive:before {\n  content: \"\\E755\"; }\n\n.entypo-bucket:before {\n  content: \"\\E756\"; }\n\n.entypo-thermometer:before {\n  content: \"\\E757\"; }\n\n.entypo-key:before {\n  content: \"\\1F511\"; }\n\n.entypo-flow-cascade:before {\n  content: \"\\E790\"; }\n\n.entypo-flow-branch:before {\n  content: \"\\E791\"; }\n\n.entypo-flow-tree:before {\n  content: \"\\E792\"; }\n\n.entypo-flow-line:before {\n  content: \"\\E793\"; }\n\n.entypo-flow-parallel:before {\n  content: \"\\E794\"; }\n\n.entypo-rocket:before {\n  content: \"\\1F680\"; }\n\n.entypo-gauge:before {\n  content: \"\\E7A2\"; }\n\n.entypo-traffic-cone:before {\n  content: \"\\E7A3\"; }\n\n.entypo-cc:before {\n  content: \"\\E7A5\"; }\n\n.entypo-cc-by:before {\n  content: \"\\E7A6\"; }\n\n.entypo-cc-nc:before {\n  content: \"\\E7A7\"; }\n\n.entypo-cc-nc-eu:before {\n  content: \"\\E7A8\"; }\n\n.entypo-cc-nc-jp:before {\n  content: \"\\E7A9\"; }\n\n.entypo-cc-sa:before {\n  content: \"\\E7AA\"; }\n\n.entypo-cc-nd:before {\n  content: \"\\E7AB\"; }\n\n.entypo-cc-pd:before {\n  content: \"\\E7AC\"; }\n\n.entypo-cc-zero:before {\n  content: \"\\E7AD\"; }\n\n.entypo-cc-share:before {\n  content: \"\\E7AE\"; }\n\n.entypo-cc-remix:before {\n  content: \"\\E7AF\"; }\n\n.entypo-github:before {\n  content: \"\\F300\"; }\n\n.entypo-github-circled:before {\n  content: \"\\F301\"; }\n\n.entypo-flickr:before {\n  content: \"\\F303\"; }\n\n.entypo-flickr-circled:before {\n  content: \"\\F304\"; }\n\n.entypo-vimeo:before {\n  content: \"\\F306\"; }\n\n.entypo-vimeo-circled:before {\n  content: \"\\F307\"; }\n\n.entypo-twitter:before {\n  content: \"\\F309\"; }\n\n.entypo-twitter-circled:before {\n  content: \"\\F30A\"; }\n\n.entypo-facebook:before {\n  content: \"\\F30C\"; }\n\n.entypo-facebook-circled:before {\n  content: \"\\F30D\"; }\n\n.entypo-facebook-squared:before {\n  content: \"\\F30E\"; }\n\n.entypo-gplus:before {\n  content: \"\\F30F\"; }\n\n.entypo-gplus-circled:before {\n  content: \"\\F310\"; }\n\n.entypo-pinterest:before {\n  content: \"\\F312\"; }\n\n.entypo-pinterest-circled:before {\n  content: \"\\F313\"; }\n\n.entypo-tumblr:before {\n  content: \"\\F315\"; }\n\n.entypo-tumblr-circled:before {\n  content: \"\\F316\"; }\n\n.entypo-linkedin:before {\n  content: \"\\F318\"; }\n\n.entypo-linkedin-circled:before {\n  content: \"\\F319\"; }\n\n.entypo-dribbble:before {\n  content: \"\\F31B\"; }\n\n.entypo-dribbble-circled:before {\n  content: \"\\F31C\"; }\n\n.entypo-stumbleupon:before {\n  content: \"\\F31E\"; }\n\n.entypo-stumbleupon-circled:before {\n  content: \"\\F31F\"; }\n\n.entypo-lastfm:before {\n  content: \"\\F321\"; }\n\n.entypo-lastfm-circled:before {\n  content: \"\\F322\"; }\n\n.entypo-rdio:before {\n  content: \"\\F324\"; }\n\n.entypo-rdio-circled:before {\n  content: \"\\F325\"; }\n\n.entypo-spotify:before {\n  content: \"\\F327\"; }\n\n.entypo-spotify-circled:before {\n  content: \"\\F328\"; }\n\n.entypo-qq:before {\n  content: \"\\F32A\"; }\n\n.entypo-instagrem:before {\n  content: \"\\F32D\"; }\n\n.entypo-dropbox:before {\n  content: \"\\F330\"; }\n\n.entypo-evernote:before {\n  content: \"\\F333\"; }\n\n.entypo-flattr:before {\n  content: \"\\F336\"; }\n\n.entypo-skype:before {\n  content: \"\\F339\"; }\n\n.entypo-skype-circled:before {\n  content: \"\\F33A\"; }\n\n.entypo-renren:before {\n  content: \"\\F33C\"; }\n\n.entypo-sina-weibo:before {\n  content: \"\\F33F\"; }\n\n.entypo-paypal:before {\n  content: \"\\F342\"; }\n\n.entypo-picasa:before {\n  content: \"\\F345\"; }\n\n.entypo-soundcloud:before {\n  content: \"\\F348\"; }\n\n.entypo-mixi:before {\n  content: \"\\F34B\"; }\n\n.entypo-behance:before {\n  content: \"\\F34E\"; }\n\n.entypo-google-circles:before {\n  content: \"\\F351\"; }\n\n.entypo-vkontakte:before {\n  content: \"\\F354\"; }\n\n.entypo-smashing:before {\n  content: \"\\F357\"; }\n\n.entypo-sweden:before {\n  content: \"\\F601\"; }\n\n.entypo-db-shape:before {\n  content: \"\\F600\"; }\n\n.entypo-logo-db:before {\n  content: \"\\F603\"; }\n\n[class*=\"entypo-\"]:before {\n  font-family: 'entypo', sans-serif; }\n", ""]);

// exports


/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(431);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(432);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(433);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(434);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(435);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(436);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(437);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(438);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(439);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(440);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(441);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/cartograph-sans-cf-bold-italic.woff2";

/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/cartograph-sans-cf-bold.woff2";

/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/cartograph-sans-cf-demi-bold-italic.woff2";

/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/cartograph-sans-cf-demi-bold.woff2";

/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/cartograph-sans-cf-extra-bold-italic.woff2";

/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/cartograph-sans-cf-extra-bold.woff2";

/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/cartograph-sans-cf-heavy-italic.woff2";

/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/cartograph-sans-cf-heavy.woff2";

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/cartograph-sans-cf-italic.woff2";

/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/cartograph-sans-cf-light-italic.woff2";

/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/cartograph-sans-cf-light.woff2";

/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/cartograph-sans-cf-medium-italic.woff2";

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/cartograph-sans-cf-medium.woff2";

/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/cartograph-sans-cf-thin-italic.woff2";

/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/cartograph-sans-cf-thin.woff2";

/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/cartograph-sans-cf.woff2";

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/entypo.svg";

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/entypo.ttf";

/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/entypo.woff";

/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/relativity-glyphs.woff";

/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/app.svg";

/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/fork-green.svg";

/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/fork-orange.svg";

/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/fork-purple.svg";

/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/icon-logo.svg";

/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/logo-relativity.svg";

/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/script.svg";

/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/star-green.svg";

/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/star-orange.svg";

/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/star-purple.svg";

/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/tool.svg";

/***/ }),
/* 484 */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"content-header\" [ngClass]=\"{ 'open' : viewModel.isHidden }\">-->\r\n<div class=\"content-header\">\r\n    <div class=\"title-row\">\r\n        <!--<div class=\"logo\"></div>\r\n        <div class=\"relativity-font\">Relativity</div><div class=\"title-text\">Dev Projects</div>-->\r\n        <div class=\"logo-relativity\"></div>\r\n    </div>\r\n    <div class=\"header-text\">A directory of open source projects built and maintained by the Relativity team and our custom development partners.</div>\r\n    <div class=\"search-row\">\r\n        <div class=\"icon-search\" (click)=\"onSearchClicked()\" ></div>\r\n        <div class=\"search-text\"(click)=\"onSearchClicked()\">Search</div>\r\n    </div>\r\n</div>";

/***/ }),
/* 485 */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-item\" [ngClass]=\"{ 'hidden': displayMorePartners() }\">\r\n    <div class=\"panel-item-text\">\r\n        {{viewModel.name}}\r\n    </div>\r\n</div>\r\n<div class=\"more-partners\" [ngClass]=\"{ 'visible': displayMorePartners() }\">\r\n    <a href=\"#\" class=\"panel-item-link\">Show all partners</a>\r\n</div>";

/***/ }),
/* 486 */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-container\">\r\n    <div class=\"panel-header\">Development Partners</div>\r\n    <div class=\"panel-row\">\r\n        <div class=\"panel-text\">Interested in creating or contributing to a project? <a class=\"link-text\" href=\"#\">Let us know</a><div class=\"arrow\"></div></div>\r\n    </div>\r\n    <div class=\"tile-container\">\r\n        <partner-panel-item *ngFor=\"let p of viewModel.partnerPanelItems\" \r\n                            [viewModel]=\"p\"\r\n                            [index]=\"p.index\"\r\n                            [morePartnersIndex]=\"viewModel.panelItemCount\"></partner-panel-item>\r\n    </div>\r\n</div>";

/***/ }),
/* 487 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"author-type-column\" [ngClass]=\"authorTypeToClass()\"></div>\r\n    <div class=\"icon-column\">\r\n        <div class=\"project-type-icon\" [ngClass]=\"projectTypeToClass()\"></div>\r\n    </div>\r\n    <div class=\"content-column\">\r\n        <div class=\"partner-text\" [ngClass]=\"authorTypeToClass()\">{{viewModel.partner}}</div>\r\n        <div class=\"project-row\">\r\n            <div class=\"project-name\">{{viewModel.name}}</div><div class=\"version\">{{viewModel.version}}</div>\r\n        </div>\r\n        <div class=\"description\">{{viewModel.description}}</div>\r\n    </div>\r\n    <div class=\"data-column\">\r\n        <div class=\"data-row\" [ngClass]=\"authorTypeToClass()\">\r\n            <div class=\"star-logo\" [ngClass]=\"authorTypeToClass()\"></div>\r\n            <div class=\"data-text\">{{viewModel.starCount}}</div>\r\n            <div class=\"fork-logo\" [ngClass]=\"authorTypeToClass()\"></div>\r\n            <div class=\"data-text\">{{viewModel.forkCount}}</div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),
/* 488 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"header\">Projects</div>\r\n    <project-item *ngFor=\"let f of viewModel.featuredItems\"\r\n                   [viewModel]=\"f\"></project-item>\r\n\r\n    <div class=\"all-items\">\r\n        <project-item *ngFor=\"let f of viewModel.projectItems\"\r\n                      [viewModel]=\"f\"></project-item>\r\n    </div>\r\n</div>";

/***/ }),
/* 489 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"top-row\"><!--needs to be position relattive-->   \r\n        <search [viewModel]=\"(search.observable | async)\"></search><!--absolute-->     \r\n        <header [ngClass]=\"{'header-hidden' : (root.observable | async).isSearchVisible}\" [viewModel]=\"(header.observable | async)\"></header><!--absolute-->        \r\n    </div>\r\n    <div class=\"inner-root\">\r\n            <partner-panel [viewModel]=\"(partnerPanel.observable | async)\"></partner-panel>\r\n            <project [viewModel]=\"(project.observable | async)\"></project>\r\n            <router-outlet></router-outlet>\r\n    </div>\r\n    <div class=\"bottom-row\">\r\n        <div class=\"footer-container\">\r\n            <div class=\"footer-title\">\r\n                Interested in learning more about Relativity development?\r\n            </div>\r\n            <div class=\"footer-text\">Get started with the help of the Relativity DevHelp Community.</div>\r\n            <div class=\"community-row\">\r\n                <a href=\"https://platform.kcura.com/9.5/Content/Site_Resources/Get_started_with_DevHelp.htm?Highlight=devhelp\" target=\"_blank\" class=\"footer-link\">Get Started</a><a href=\"#\" class=\"arrow\"></a>\r\n            </div>\r\n            <div class=\"footer-row\">\r\n                <div class=\"footer-row-text copyright\">© 2017 kCura LLC</div>\r\n                <a href=\"https://community.relativity.com/s/group/0F9500000008vXyCAI\" target=\"_blank\" class=\"footer-link large-margin\">Follow us</a>\r\n                <a href=\"https://www.kcura.com/join-the-team/available-positions/\" target=\"_blank\" class=\"footer-link small-margin\">Join our team</a>\r\n                <a href=\"https://www.kcura.com/Relativity\" target=\"_blank\" class=\"footer-link small-margin \">Learn more</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";

/***/ }),
/* 490 */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"search-header\" [ngClass]=\"{ 'visible' : viewModel.isVisible }\">-->\r\n<div class=\"search-header\">\r\n        <div class=\"authors-label-column\">\r\n            <div class=\"vertical-text\">Authors</div>\r\n        </div>\r\n        <div class=\"content-column\">\r\n            <div class=\"search-row\">\r\n                <div class=\"icon-search\"></div>\r\n                <input #searchBox type=\"text\" class=\"search-box\" placeholder=\"Search\" (keyup)=\"onSearchTextChanged(searchBox.value)\" />\r\n            </div>\r\n            <div class=\"search-content-row\">\r\n                <div class=\"authors-column\">\r\n                    <div class=\"author\"><div class=\"rectangle orange\"></div><div class=\"search-text orange\">KCURA</div></div>\r\n                    <div class=\"author\"><div class=\"rectangle purple\"></div><div class=\"search-text purple\">DEVELOPMENT PARTNERS</div></div>\r\n                    <div class=\"author\"><div class=\"rectangle green\"></div><div class=\"search-text green\">OPEN SOURCE COMMUNITY</div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"topics-column\">\r\n            <div class=\"vertical-text vertical-text-topics\">Topics</div>\r\n\r\n            <div class=\"topics-array\">\r\n                <ul class=\"topics-container\" >\r\n                    <li class=\"topic\" \r\n                        *ngFor=\"let topic of viewModel.tag.tagItems\">\r\n                        {{topic.name}}\r\n                    </li>\r\n                </ul>\r\n                <div class=\"see-all-topics\">See all topics</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"close-column\">\r\n            <div class=\"icon-close\" (click)=\"onSearchClosed()\"></div>\r\n        </div>\r\n</div>";

/***/ }),
/* 491 */
/***/ (function(module, exports) {

module.exports = "<div class=\"tag-item\">\r\n    <a href=\"#\">{{viewModel.Name}}</a>\r\n</div>";

/***/ }),
/* 492 */
/***/ (function(module, exports) {

module.exports = "<div class=\"tag\">\r\n    <tag-item *ngFor=\"let i of viewModel.tagItems;\"\r\n              [viewModel]=\"i\"></tag-item>\r\n</div>";

/***/ })
],[241]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3N0b3JlLXNlbGVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmljZXMvanNvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYWN0aW9ucy9hcHAtc3RhdGUvYXBwLXN0YXRlLmFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvcGFydG5lci1wYW5lbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy90YWcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ndWFyZHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy9naXRodWIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9mb250cy9lbnR5cG8uZW90Iiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2ltZy9hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL2FkZC9vYnNlcnZhYmxlL2ZvcmtKb2luLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9+L0Bhbmd1bGFyL2FuaW1hdGlvbnMvQGFuZ3VsYXIvYW5pbWF0aW9ucy9icm93c2VyLmVzNS5qcyIsIndlYnBhY2s6Ly8vLi9+L0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zLmVzNS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FjdGlvbnMvaGVhZGVyL2hlYWRlci5hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYWN0aW9ucy9sb2FkaW5nL2xvYWRpbmcuYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FjdGlvbnMvcm9vdC9yb290LmFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hY3Rpb25zL3NlYXJjaC9zZWFyY2guYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnZpZXdtb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvcGFydG5lci1wYW5lbC9wYXJ0bmVyLXBhbmVsLWl0ZW0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3BhcnRuZXItcGFuZWwvcGFydG5lci1wYW5lbC1pdGVtL3BhcnRuZXItcGFuZWwtaXRlbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3BhcnRuZXItcGFuZWwvcGFydG5lci1wYW5lbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3BhcnRuZXItcGFuZWwvcGFydG5lci1wYW5lbC52aWV3bW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3QvcHJvamVjdC1pdGVtL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Byb2plY3QtaXRlbS9wcm9qZWN0LWl0ZW0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Byb2plY3Qudmlld21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9yb290L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9yb290L3Jvb3QuYW5pbWF0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvcm9vdC9yb290LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvcm9vdC9yb290LnZpZXdtb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gudmlld21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy90YWcvdGFnLWl0ZW0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3RhZy90YWctaXRlbS90YWctaXRlbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3RhZy90YWcuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy90YWcvdGFnLnZpZXdtb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2d1YXJkcy9ib290c3RyYXAuZ3VhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9oZWFkZXIvaGVhZGVyLnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3BhcnRuZXJzL3BhcnRuZXJzLnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9wcm9qZWN0cy9wcm9qZWN0cy5yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvcm9vdC9yb290LnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zZWFyY2gvc2VhcmNoLnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3RhZ0l0ZW1zL3RhZ0l0ZW1zLnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3BhcnRuZXItcGFuZWwvcGFydG5lci1wYW5lbC1pdGVtL3BhcnRuZXItcGFuZWwtaXRlbS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvcGFydG5lci1wYW5lbC9wYXJ0bmVyLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Byb2plY3QtaXRlbS9wcm9qZWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvcm9vdC9yb290LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy90YWcvdGFnLWl0ZW0vdGFnLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3RhZy90YWcuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9mb250cy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzP2VkZTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3BhcnRuZXItcGFuZWwvcGFydG5lci1wYW5lbC1pdGVtL3BhcnRuZXItcGFuZWwtaXRlbS5jb21wb25lbnQuc2Nzcz82ZThmIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0bmVyLXBhbmVsL3BhcnRuZXItcGFuZWwuY29tcG9uZW50LnNjc3M/NGY3OCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9wcm9qZWN0LWl0ZW0vcHJvamVjdC1pdGVtLmNvbXBvbmVudC5zY3NzP2JjODIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2Nzcz9iODFkIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9yb290L3Jvb3QuY29tcG9uZW50LnNjc3M/NmZjNCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2Nzcz8xZjExIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy90YWcvdGFnLWl0ZW0vdGFnLWl0ZW0uY29tcG9uZW50LnNjc3M/MTIwNiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvdGFnL3RhZy5jb21wb25lbnQuc2Nzcz9kMTI1Iiwid2VicGFjazovLy8uL3NyYy9hcHAvZm9udHMuc2Nzcz8zNGQ4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFpbi5zY3NzPzRjYzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi1ib2xkLWl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9mb250cy9jYXJ0b2dyYXBoLXNhbnMtY2YvY2FydG9ncmFwaC1zYW5zLWNmLWJvbGQud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi1kZW1pLWJvbGQtaXRhbGljLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi9jYXJ0b2dyYXBoLXNhbnMtY2YtZGVtaS1ib2xkLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi9jYXJ0b2dyYXBoLXNhbnMtY2YtZXh0cmEtYm9sZC1pdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi1leHRyYS1ib2xkLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi9jYXJ0b2dyYXBoLXNhbnMtY2YtaGVhdnktaXRhbGljLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi9jYXJ0b2dyYXBoLXNhbnMtY2YtaGVhdnkud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi1pdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi1saWdodC1pdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi1saWdodC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9mb250cy9jYXJ0b2dyYXBoLXNhbnMtY2YvY2FydG9ncmFwaC1zYW5zLWNmLW1lZGl1bS1pdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi1tZWRpdW0ud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi10aGluLWl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9mb250cy9jYXJ0b2dyYXBoLXNhbnMtY2YvY2FydG9ncmFwaC1zYW5zLWNmLXRoaW4ud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9mb250cy9lbnR5cG8uc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2ZvbnRzL2VudHlwby50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvZm9udHMvZW50eXBvLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvZm9udHMvcmVsYXRpdml0eS1nbHlwaHMud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9pbWcvYXBwLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9pbWcvZm9yay1ncmVlbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvaW1nL2Zvcmstb3JhbmdlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9pbWcvZm9yay1wdXJwbGUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2ltZy9pY29uLWxvZ28uc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2ltZy9sb2dvLXJlbGF0aXZpdHkuc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2ltZy9zY3JpcHQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2ltZy9zdGFyLWdyZWVuLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9pbWcvc3Rhci1vcmFuZ2Uuc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2ltZy9zdGFyLXB1cnBsZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvaW1nL3Rvb2wuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0bmVyLXBhbmVsL3BhcnRuZXItcGFuZWwtaXRlbS9wYXJ0bmVyLXBhbmVsLWl0ZW0uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3BhcnRuZXItcGFuZWwvcGFydG5lci1wYW5lbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9wcm9qZWN0LWl0ZW0vcHJvamVjdC1pdGVtLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3Jvb3Qvcm9vdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvdGFnL3RhZy1pdGVtL3RhZy1pdGVtLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy90YWcvdGFnLmNvbXBvbmVudC5o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QUUsd0JBQXdCLHdCQUF3QixFQUFFLHdCQUF3Qix3QkFBd0IsRUFBRSw2QkFBNkIseUJBQXlCLEVBQUUsOEJBQThCLHlCQUF5QixFQUFFLHlCQUF5Qix3QkFBd0IsRUFBRSw4QkFBOEIseUJBQXlCLEVBQUUsZ0NBQWdDLHlCQUF5QixFQUFFLDZCQUE2Qix5QkFBeUIsRUFBRSwyQkFBMkIseUJBQXlCLEVBQUUsaUNBQWlDLHdCQUF3QixFQUFFLDBCQUEwQix3QkFBd0IsRUFBRSw4QkFBOEIsd0JBQXdCLEVBQUUsNEJBQTRCLHdCQUF3QixFQUFFLDBCQUEwQix3QkFBd0IsRUFBRSx5QkFBeUIsd0JBQXdCLEVBQUUsMkJBQTJCLHdCQUF3QixFQUFFLDJCQUEyQix3QkFBd0IsRUFBRSw0QkFBNEIsd0JBQXdCLEVBQUUsMEJBQTBCLHdCQUF3QixFQUFFLDRCQUE0Qix3QkFBd0IsRUFBRSw2QkFBNkIsd0JBQXdCLEVBQUUsNEJBQTRCLHdCQUF3QixFQUFFLHlCQUF5Qix3QkFBd0IsRUFBRSx5QkFBeUIseUJBQXlCLEVBQUUsOEJBQThCLHdCQUF3QixFQUFFLDBCQUEwQiwwQkFBMEIsRUFBRSwwQkFBMEIsd0JBQXdCLEVBQUUsNEJBQTRCLHdCQUF3QixFQUFFLDZCQUE2Qix3QkFBd0IsRUFBRSx3QkFBd0Isd0JBQXdCLEVBQUUsOEJBQThCLHdCQUF3QixFQUFFLDRCQUE0Qix3QkFBd0IsRUFBRSx3QkFBd0Isd0JBQXdCLEVBQUUsMEJBQTBCLHdCQUF3QixFQUFFLHdCQUF3Qix3QkFBd0IsRUFBRSx5QkFBeUIsd0JBQXdCLEVBQUUsa0NBQWtDLHdCQUF3QixFQUFFLDZCQUE2Qix5QkFBeUIsRUFBRSxpQ0FBaUMsd0JBQXdCLEVBQUUsOEJBQThCLHlCQUF5QixFQUFFLDhCQUE4Qix5QkFBeUIsRUFBRSx5QkFBeUIseUJBQXlCLEVBQUUsMkJBQTJCLHlCQUF5QixFQUFFLDRCQUE0Qix3QkFBd0IsRUFBRSx3QkFBd0IseUJBQXlCLEVBQUUsd0JBQXdCLHdCQUF3QixFQUFFLDBCQUEwQix5QkFBeUIsRUFBRSx3QkFB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Q0E7QUFDQSxDOzs7Ozs7QUNYQSx3Rjs7Ozs7O0FDQUEsaUY7Ozs7OztBQ0FBLDZGOzs7Ozs7QUNBQSxzRjs7Ozs7O0FDQUEsOEY7Ozs7OztBQ0FBLHVGOzs7Ozs7QUNBQSx5Rjs7Ozs7O0FDQUEsa0Y7Ozs7OztBQ0FBLG1GOzs7Ozs7QUNBQSx5Rjs7Ozs7O0FDQUEsa0Y7Ozs7OztBQ0FBLDBGOzs7Ozs7QUNBQSxtRjs7Ozs7O0FDQUEsd0Y7Ozs7OztBQ0FBLGlGOzs7Ozs7QUNBQSw0RTs7Ozs7O0FDQUEsOEQ7Ozs7OztBQ0FBLDhEOzs7Ozs7QUNBQSwrRDs7Ozs7O0FDQUEsMEU7Ozs7OztBQ0FBLHlEOzs7Ozs7QUNBQSxnRTs7Ozs7O0FDQUEsaUU7Ozs7OztBQ0FBLGlFOzs7Ozs7QUNBQSwrRDs7Ozs7O0FDQUEscUU7Ozs7OztBQ0FBLDREOzs7Ozs7QUNBQSxnRTs7Ozs7O0FDQUEsaUU7Ozs7OztBQ0FBLGlFOzs7Ozs7QUNBQSwwRDs7Ozs7O0FDQUEsaUVBQWlFLDhCQUE4QixpcEI7Ozs7OztBQ0EvRix5REFBeUQsa0NBQWtDLHdEQUF3RCxnQkFBZ0Isc0VBQXNFLG1DQUFtQyxvRjs7Ozs7O0FDQTVRLHFxQjs7Ozs7O0FDQUEsc1hBQXNYLG1CQUFtQiwyRkFBMkYsZ0JBQWdCLCtCQUErQixtQkFBbUIsaUVBQWlFLHVCQUF1Qix5UEFBeVAscUJBQXFCLGtJQUFrSSxxQkFBcUIsa0Q7Ozs7OztBQ0FuaUMsOFk7Ozs7OztBQ0FBLG1QQUFtUCw0REFBNEQsbW1EOzs7Ozs7QUNBL1MsZ0VBQWdFLGtDQUFrQyw2NUNBQTY1QyxZQUFZLHVUOzs7Ozs7QUNBM2dELGtFQUFrRSxnQkFBZ0IsZ0I7Ozs7OztBQ0FsRiw0RkFBNEYsNkQiLCJmaWxlIjoianMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9hZGluZ0FjdGlvbnMgfSBmcm9tICcuL2xvYWRpbmcvbG9hZGluZy5hY3Rpb25zJztcclxuXHJcbmV4cG9ydCB7IExvYWRpbmdBY3Rpb25zIH07XHJcbmV4cG9ydCAqIGZyb20gJy4vaGVhZGVyL2hlYWRlci5hY3Rpb25zJztcclxuZXhwb3J0ICogZnJvbSAnLi9zZWFyY2gvc2VhcmNoLmFjdGlvbnMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2FwcC1zdGF0ZS9hcHAtc3RhdGUuYWN0aW9ucyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcm9vdC9yb290LmFjdGlvbnMnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9hY3Rpb25zL2luZGV4LnRzIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgSUFwcFN0YXRlIH0gZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7IE5nUmVkdXggfSBmcm9tICdAYW5ndWxhci1yZWR1eC9zdG9yZSc7XHJcblxyXG4vLyBUaGlzIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBvYnNlcnZpbmcgYSBzcGVjaWZpZWQgbnVtYmVyIG9mIHNsaWNlcyBvZiBvdXIgUmVkdXggc3RvcmUgYW5kIE9OTFlcclxuLy8gZmlyaW5nIHRoZSBjYWxsYmFjayB3aGVuIHRob3NlIHBpZWNlcyBjaGFuZ2UuIEZ1cnRoZXJtb3JlLCB0aGUgY2FsbGJhY2sgd2lsbCBub3QgYmUgZmlyZWQgdW50aWxcclxuLy8gZXZlcnkgb2JzZXJ2YWJsZSByZXBvcnRzIGJhY2sgYXQgbGVhc3Qgb25jZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSBmaXJpbmdzIHdoZW4gZmlyc3QgaG9va2luZyB1cCB0byB0aGUgc3RvcmUuXHJcbmV4cG9ydCBjbGFzcyBTdG9yZVNlbGVjdG9yPFQ+IHtcclxuXHJcbiAgICBwcml2YXRlIF9vYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFQ+O1xyXG5cclxuICAgIGdldCBvYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vYnNlcnZhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgc2VsZWN0b3JzOiBzdHJpbmdbXSxcclxuICAgICAgICBwcml2YXRlIHRyYW5zZm9ybWVyOiAoc3RhdGU6IElBcHBTdGF0ZSkgPT4gVCkge1xyXG5cclxuICAgICAgICBpZiAoIU5nUmVkdXguaW5zdGFuY2UpXHJcbiAgICAgICAgICAgIHRocm93IFwibmdSZWR1eCBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQuXCI7XHJcblxyXG4gICAgICAgIGlmICghc2VsZWN0b3JzIHx8IHNlbGVjdG9ycy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHRocm93IFwic2VsZWN0b3JzIGNhbm5vdCBiZSBudWxsIG9yIGVtcHR5LlwiO1xyXG5cclxuICAgICAgICBpZiAoIXRyYW5zZm9ybWVyKVxyXG4gICAgICAgICAgICB0aHJvdyBcInRyYW5zZm9ybWVyIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZC5cIjtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlU2xpY2VPYnNlcnZhYmxlczogT2JzZXJ2YWJsZTxhbnk+W10gPSBzZWxlY3RvcnMubWFwKHMgPT4gTmdSZWR1eC5pbnN0YW5jZS5zZWxlY3QocykpO1xyXG5cclxuICAgICAgICB0aGlzLl9vYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jb21iaW5lTGF0ZXN0KC4uLnN0YXRlU2xpY2VPYnNlcnZhYmxlcylcclxuICAgICAgICAgICAgLm1hcCh2ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9uU2xpY2VPYnNlcnZhYmxlRmlyZWQodilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gVGhpcyBtYWtlcyB0aGUgb2JzZXJ2YWJsZSBcImhvdFwiIGFuZCByZXR1cm5zIHRoZSBsYXN0IHB1Ymxpc2hlZCB2YWx1ZSB0byBhIG5ldyBzdWJzY3JpYmVyLlxyXG4gICAgICAgICAgICAucHVibGlzaFJlcGxheSgxKS5yZWZDb3VudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TbGljZU9ic2VydmFibGVGaXJlZCh2YWx1ZXM6IGFueVtdKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtZXIoTmdSZWR1eC5pbnN0YW5jZS5nZXRTdGF0ZSgpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9zdG9yZS9zdG9yZS1zZWxlY3Rvci50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXBwU3RhdGVBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IE5nUmVkdXggfSBmcm9tICdAYW5ndWxhci1yZWR1eC9zdG9yZSc7XHJcbmltcG9ydCB7IElBcHBTdGF0ZSB9IGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zQXJncywgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2ZvcmtKb2luJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgeyBQYXJ0bmVyIH0gZnJvbSAnLi4vbW9kZWxzL3BhcnRuZXInO1xyXG5pbXBvcnQgeyBUYWcgfSBmcm9tICcuLi9tb2RlbHMvdGFnJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEpzb25TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdSZWR1eDogTmdSZWR1eDxJQXBwU3RhdGU+LFxyXG4gICAgICAgIHByaXZhdGUgYXBwU3RhdGVBY3Rpb25zOiBBcHBTdGF0ZUFjdGlvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHRoaXMuaGVhZGVycztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlcXVlc3RPcHRpb25zOiBSZXF1ZXN0T3B0aW9uc0FyZ3MgPSB7fTtcclxuICAgIHByaXZhdGUgaGVhZGVyczogSGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBwcml2YXRlIHBhcnRuZXJzOiBzdHJpbmc7XHJcblxyXG4gICAgZ2V0UGFydG5lcnMoKTogT2JzZXJ2YWJsZTxQYXJ0bmVyW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcImRhdGEvcGFydG5lcnMuanNvblwiLCB0aGlzLnJlcXVlc3RPcHRpb25zKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkgYXMgUGFydG5lcltdKTtcclxuICAgIH1cclxuICAgIGdldFRhZ3MoKTogT2JzZXJ2YWJsZTxUYWdbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiZGF0YS90YWdzLmpzb25cIiwgdGhpcy5yZXF1ZXN0T3B0aW9ucykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpIGFzIFRhZ1tdKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL3NlcnZpY2VzL2pzb24uc2VydmljZS50cyIsImltcG9ydCB7IE5nUmVkdXggfSBmcm9tICdAYW5ndWxhci1yZWR1eC9zdG9yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUFwcFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXBwU3RhdGVBY3Rpb25zIHtcclxuICAgIHN0YXRpYyBJTklUX1NUQVRFID0gJ2luaXRfYXBwX3N0YXRlJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nUmVkdXg6IE5nUmVkdXg8SUFwcFN0YXRlPikgeyB9XHJcblxyXG4gICAgaW5pdEFwcFN0YXRlKGFwcFN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5uZ1JlZHV4LmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQXBwU3RhdGVBY3Rpb25zLklOSVRfU1RBVEUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFwcFN0YXRlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvYWN0aW9ucy9hcHAtc3RhdGUvYXBwLXN0YXRlLmFjdGlvbnMudHMiLCJleHBvcnQgKiBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnXHJcbmV4cG9ydCAqIGZyb20gJy4vaGVhZGVyLnZpZXdtb2RlbCdcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaW5kZXgudHMiLCJleHBvcnQgKiBmcm9tICcuL3BhcnRuZXItcGFuZWwuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9wYXJ0bmVyLXBhbmVsLnZpZXdtb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGFydG5lci1wYW5lbC1pdGVtJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0bmVyLXBhbmVsL2luZGV4LnRzIiwiZXhwb3J0ICogZnJvbSAnLi9wcm9qZWN0LmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcHJvamVjdC52aWV3bW9kZWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL3Byb2plY3QtaXRlbSc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9pbmRleC50cyIsImV4cG9ydCAqIGZyb20gJy4vc2VhcmNoLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2VhcmNoLnZpZXdtb2RlbCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL2luZGV4LnRzIiwiZXhwb3J0ICogZnJvbSAnLi90YWcuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi90YWcudmlld21vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi90YWctaXRlbSc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvdGFnL2luZGV4LnRzIiwiZXhwb3J0ICogZnJvbSAnLi9ib290c3RyYXAuZ3VhcmQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9ndWFyZHMvaW5kZXgudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFwcFN0YXRlQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBOZ1JlZHV4IH0gZnJvbSAnQGFuZ3VsYXItcmVkdXgvc3RvcmUnO1xyXG5pbXBvcnQgeyBJQXBwU3RhdGUgfSBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9uc0FyZ3MsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0IHsgUmVwbyB9IGZyb20gJy4uL21vZGVscy9yZXBvJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuXHJcbmV4cG9ydCBjbGFzcyBHaXRIdWJBcGlTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdSZWR1eDogTmdSZWR1eDxJQXBwU3RhdGU+LFxyXG4gICAgICAgIHByaXZhdGUgYXBwU3RhdGVBY3Rpb25zOiBBcHBTdGF0ZUFjdGlvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHRoaXMuaGVhZGVycztcclxuXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlcXVlc3RPcHRpb25zOiBSZXF1ZXN0T3B0aW9uc0FyZ3MgPSB7fTtcclxuICAgIHByaXZhdGUgaGVhZGVyczogSGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBwcml2YXRlIGdpdGh1YkFwaVVybCA9ICdodHRwczovL2FwaS5naXRodWIuY29tLyc7XHJcblxyXG4gICAgZ2V0UmVwb3NpdG9yaWVzKCkgOiBPYnNlcnZhYmxlPFJlcG9bXT4ge1xyXG5cclxuICAgICAgICB2YXIganNvblJlc3BvbnNlID0gdGhpcy5odHRwLmdldCh0aGlzLmdpdGh1YkFwaVVybCArICdvcmdzL3JlbGF0aXZpdHktZGV2LW9yZy9yZXBvcycsIHRoaXMucmVxdWVzdE9wdGlvbnMpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSBhcyBSZXBvW10pO1xyXG4gICAgICAgIHJldHVybiBqc29uUmVzcG9uc2U7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL3NlcnZpY2VzL2dpdGh1Yi5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9mb250cy9lbnR5cG8uZW90XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udGVudC9mb250cy9lbnR5cG8uZW90XG4vLyBtb2R1bGUgaWQgPSAxNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvYXJyb3cuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udGVudC9pbWcvYXJyb3cuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vLi4vT2JzZXJ2YWJsZScpO1xudmFyIGZvcmtKb2luXzEgPSByZXF1aXJlKCcuLi8uLi9vYnNlcnZhYmxlL2ZvcmtKb2luJyk7XG5PYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5mb3JrSm9pbiA9IGZvcmtKb2luXzEuZm9ya0pvaW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JrSm9pbi5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9hZGQvb2JzZXJ2YWJsZS9mb3JrSm9pbi5qc1xuLy8gbW9kdWxlIGlkID0gMTc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBOZ1JlZHV4TW9kdWxlLCBOZ1JlZHV4LCBEZXZUb29sc0V4dGVuc2lvbiB9IGZyb20gJ0Bhbmd1bGFyLXJlZHV4L3N0b3JlJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1sMTBuJztcclxuXHJcbi8vIFByb3ZpZGVyc1xyXG5pbXBvcnQgeyBCb290c3RyYXBHdWFyZCB9IGZyb20gJy4vZ3VhcmRzJztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBKc29uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvanNvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR2l0SHViQXBpU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZ2l0aHViLnNlcnZpY2UnO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWcsIFRhZ0l0ZW0gfSBmcm9tICcuL2NvbXBvbmVudHMvdGFnJztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gJy4vY29tcG9uZW50cy9zZWFyY2gnO1xyXG5pbXBvcnQgeyBQYXJ0bmVyUGFuZWwsIFBhcnRuZXJQYW5lbEl0ZW0gfSBmcm9tICcuL2NvbXBvbmVudHMvcGFydG5lci1wYW5lbCc7XHJcbmltcG9ydCB7IFByb2plY3QsIFByb2plY3RJdGVtIH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2plY3QnO1xyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlLCByb3V0ZWRDb21wb25lbnRzIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xyXG5cclxuLy8gUmVkdXggc2V0dXBcclxuaW1wb3J0IHsgSUFwcFN0YXRlLCByb290UmVkdWNlciB9IGZyb20gJy4vc3RvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLFxyXG4gICAgICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEh0dHBNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgICAgICBOZ1JlZHV4TW9kdWxlLFxyXG4gICAgICAgIExvY2FsaXphdGlvbk1vZHVsZS5mb3JSb290KCldLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIEhlYWRlcixcclxuICAgICAgICBTZWFyY2gsXHJcbiAgICAgICAgVGFnLFxyXG4gICAgICAgIFRhZ0l0ZW0sXHJcbiAgICAgICAgUGFydG5lclBhbmVsLFxyXG4gICAgICAgIFBhcnRuZXJQYW5lbEl0ZW0sXHJcbiAgICAgICAgUHJvamVjdCxcclxuICAgICAgICBQcm9qZWN0SXRlbSxcclxuICAgICAgICByb3V0ZWRDb21wb25lbnRzXSxcclxuICAgIHByb3ZpZGVyczogW2FjdGlvbnMuTG9hZGluZ0FjdGlvbnMsXHJcbiAgICAgICAgYWN0aW9ucy5IZWFkZXJBY3Rpb25zLFxyXG4gICAgICAgIGFjdGlvbnMuU2VhcmNoQWN0aW9ucyxcclxuICAgICAgICBhY3Rpb25zLkFwcFN0YXRlQWN0aW9ucyxcclxuICAgICAgICBhY3Rpb25zLlJvb3RBY3Rpb25zLFxyXG4gICAgICAgIEJvb3RzdHJhcEd1YXJkLFxyXG4gICAgICAgIEpzb25TZXJ2aWNlLFxyXG4gICAgICAgIEdpdEh1YkFwaVNlcnZpY2VdLFxyXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKG5nUmVkdXg6IE5nUmVkdXg8SUFwcFN0YXRlPiwgZGV2VG9vbHM6IERldlRvb2xzRXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgbGV0IG1pZGRsZXdhcmU6IE1pZGRsZXdhcmVbXSA9IFtdO1xyXG4gICAgICAgIGxldCBlbmhhbmNlcnMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gY29tcGlsZS10aW1lIGNvbnN0YW50IGNyZWF0ZWQgYnkgRGVmaW5lUGx1Z2luXHJcbiAgICAgICAgaWYgKCFJU19QUk9EVUNUSU9OKSB7XHJcbiAgICAgICAgICAgIGlmIChkZXZUb29scy5pc0VuYWJsZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgZW5oYW5jZXJzLnB1c2goZGV2VG9vbHMuZW5oYW5jZXIoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5nUmVkdXguY29uZmlndXJlU3RvcmUocm9vdFJlZHVjZXIsIHt9LCBtaWRkbGV3YXJlLCBlbmhhbmNlcnMpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhciB2NC4xLjFcbiAqIChjKSAyMDEwLTIwMTcgR29vZ2xlLCBJbmMuIGh0dHBzOi8vYW5ndWxhci5pby9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG5pbXBvcnQgeyBBVVRPX1NUWUxFLCBOb29wQW5pbWF0aW9uUGxheWVyLCBzZXF1ZW5jZSwgc3R5bGUsIMm1QW5pbWF0aW9uR3JvdXBQbGF5ZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG52YXIgTm9vcEFuaW1hdGlvbkRyaXZlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm9vcEFuaW1hdGlvbkRyaXZlcigpIHtcbiAgICB9XG4gICAgTm9vcEFuaW1hdGlvbkRyaXZlci5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBrZXlmcmFtZXMsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBwcmV2aW91c1BsYXllcnMpIHtcbiAgICAgICAgaWYgKHByZXZpb3VzUGxheWVycyA9PT0gdm9pZCAwKSB7IHByZXZpb3VzUGxheWVycyA9IFtdOyB9XG4gICAgICAgIHJldHVybiBuZXcgTm9vcEFuaW1hdGlvblBsYXllcigpO1xuICAgIH07XG4gICAgcmV0dXJuIE5vb3BBbmltYXRpb25Ecml2ZXI7XG59KCkpO1xuLyoqXG4gKiBAZXhwZXJpbWVudGFsXG4gKi9cbnZhciBBbmltYXRpb25Ecml2ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFuaW1hdGlvbkRyaXZlcigpIHtcbiAgICB9XG4gICAgcmV0dXJuIEFuaW1hdGlvbkRyaXZlcjtcbn0oKSk7XG5BbmltYXRpb25Ecml2ZXIuTk9PUCA9IG5ldyBOb29wQW5pbWF0aW9uRHJpdmVyKCk7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBhYnN0cmFjdFxuICovXG52YXIgQW5pbWF0aW9uRW5naW5lID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbmltYXRpb25FbmdpbmUoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEBwYXJhbSB7P30gdHJpZ2dlclxuICAgICAqIEBwYXJhbSB7Pz19IG5hbWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFuaW1hdGlvbkVuZ2luZS5wcm90b3R5cGUucmVnaXN0ZXJUcmlnZ2VyID0gZnVuY3Rpb24gKHRyaWdnZXIsIG5hbWUpIHsgfTtcbiAgICAvKipcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAcGFyYW0gez99IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gez99IGRvbUZuXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25FbmdpbmUucHJvdG90eXBlLm9uSW5zZXJ0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGRvbUZuKSB7IH07XG4gICAgLyoqXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHBhcmFtIHs/fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHs/fSBkb21GblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uRW5naW5lLnByb3RvdHlwZS5vblJlbW92ZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBkb21GbikgeyB9O1xuICAgIC8qKlxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEBwYXJhbSB7P30gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7P30gcHJvcGVydHlcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25FbmdpbmUucHJvdG90eXBlLnNldFByb3BlcnR5ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BlcnR5LCB2YWx1ZSkgeyB9O1xuICAgIC8qKlxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEBwYXJhbSB7P30gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7P30gZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHs/fSBldmVudFBoYXNlXG4gICAgICogQHBhcmFtIHs/fSBjYWxsYmFja1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uRW5naW5lLnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnROYW1lLCBldmVudFBoYXNlLCBjYWxsYmFjaykgeyB9O1xuICAgIC8qKlxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uRW5naW5lLnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQW5pbWF0aW9uRW5naW5lLnByb3RvdHlwZSwgXCJhY3RpdmVQbGF5ZXJzXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IEVycm9yKCcuLi4nKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFuaW1hdGlvbkVuZ2luZS5wcm90b3R5cGUsIFwicXVldWVkUGxheWVyc1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHRocm93IG5ldyBFcnJvcignLi4uJyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBBbmltYXRpb25FbmdpbmU7XG59KCkpO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIE9ORV9TRUNPTkQgPSAxMDAwO1xuLyoqXG4gKiBAcGFyYW0gez99IGV4cFxuICogQHBhcmFtIHs/fSBlcnJvcnNcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIHBhcnNlVGltZUV4cHJlc3Npb24oZXhwLCBlcnJvcnMpIHtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyByZWdleCA9IC9eKFtcXC5cXGRdKykobT9zKSg/OlxccysoW1xcLlxcZF0rKShtP3MpKT8oPzpcXHMrKFstYS16XSsoPzpcXCguKz9cXCkpPykpPyQvaTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBkdXJhdGlvbjtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBkZWxheSA9IDA7XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZWFzaW5nID0gbnVsbDtcbiAgICBpZiAodHlwZW9mIGV4cCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbWF0Y2hlcyA9IGV4cC5tYXRjaChyZWdleCk7XG4gICAgICAgIGlmIChtYXRjaGVzID09PSBudWxsKSB7XG4gICAgICAgICAgICBlcnJvcnMucHVzaChcIlRoZSBwcm92aWRlZCB0aW1pbmcgdmFsdWUgXFxcIlwiICsgZXhwICsgXCJcXFwiIGlzIGludmFsaWQuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHsgZHVyYXRpb246IDAsIGRlbGF5OiAwLCBlYXNpbmc6IG51bGwgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBkdXJhdGlvbk1hdGNoID0gcGFyc2VGbG9hdChtYXRjaGVzWzFdKTtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZHVyYXRpb25Vbml0ID0gbWF0Y2hlc1syXTtcbiAgICAgICAgaWYgKGR1cmF0aW9uVW5pdCA9PSAncycpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uTWF0Y2ggKj0gT05FX1NFQ09ORDtcbiAgICAgICAgfVxuICAgICAgICBkdXJhdGlvbiA9IE1hdGguZmxvb3IoZHVyYXRpb25NYXRjaCk7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGRlbGF5TWF0Y2ggPSBtYXRjaGVzWzNdO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBkZWxheVVuaXQgPSBtYXRjaGVzWzRdO1xuICAgICAgICBpZiAoZGVsYXlNYXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBkZWxheVZhbCA9IHBhcnNlRmxvYXQoZGVsYXlNYXRjaCk7XG4gICAgICAgICAgICBpZiAoZGVsYXlVbml0ICE9IG51bGwgJiYgZGVsYXlVbml0ID09ICdzJykge1xuICAgICAgICAgICAgICAgIGRlbGF5VmFsICo9IE9ORV9TRUNPTkQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxheSA9IE1hdGguZmxvb3IoZGVsYXlWYWwpO1xuICAgICAgICB9XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGVhc2luZ1ZhbCA9IG1hdGNoZXNbNV07XG4gICAgICAgIGlmIChlYXNpbmdWYWwpIHtcbiAgICAgICAgICAgIGVhc2luZyA9IGVhc2luZ1ZhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZHVyYXRpb24gPSAoZXhwKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZHVyYXRpb246IGR1cmF0aW9uLCBkZWxheTogZGVsYXksIGVhc2luZzogZWFzaW5nIH07XG59XG4vKipcbiAqIEBwYXJhbSB7P30gc3R5bGVzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVTdHlsZXMoc3R5bGVzKSB7XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbm9ybWFsaXplZFN0eWxlcyA9IHt9O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN0eWxlcykpIHtcbiAgICAgICAgc3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGNvcHlTdHlsZXMoZGF0YSwgZmFsc2UsIG5vcm1hbGl6ZWRTdHlsZXMpOyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvcHlTdHlsZXMoc3R5bGVzLCBmYWxzZSwgbm9ybWFsaXplZFN0eWxlcyk7XG4gICAgfVxuICAgIHJldHVybiBub3JtYWxpemVkU3R5bGVzO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IHN0eWxlc1xuICogQHBhcmFtIHs/fSByZWFkUHJvdG90eXBlXG4gKiBAcGFyYW0gez89fSBkZXN0aW5hdGlvblxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gY29weVN0eWxlcyhzdHlsZXMsIHJlYWRQcm90b3R5cGUsIGRlc3RpbmF0aW9uKSB7XG4gICAgaWYgKGRlc3RpbmF0aW9uID09PSB2b2lkIDApIHsgZGVzdGluYXRpb24gPSB7fTsgfVxuICAgIGlmIChyZWFkUHJvdG90eXBlKSB7XG4gICAgICAgIC8vIHdlIG1ha2UgdXNlIG9mIGEgZm9yLWluIGxvb3Agc28gdGhhdCB0aGVcbiAgICAgICAgLy8gcHJvdG90eXBpY2FsbHkgaW5oZXJpdGVkIHByb3BlcnRpZXMgYXJlXG4gICAgICAgIC8vIHJldmVhbGVkIGZyb20gdGhlIGJhY2tGaWxsIG1hcFxuICAgICAgICBmb3IgKHZhciAvKiogQHR5cGUgez99ICovIHByb3AgaW4gc3R5bGVzKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wXSA9IHN0eWxlc1twcm9wXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7IHJldHVybiBkZXN0aW5hdGlvbltwcm9wXSA9IHN0eWxlc1twcm9wXTsgfSk7XG4gICAgfVxuICAgIHJldHVybiBkZXN0aW5hdGlvbjtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBlbGVtZW50XG4gKiBAcGFyYW0gez99IHN0eWxlc1xuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gc2V0U3R5bGVzKGVsZW1lbnQsIHN0eWxlcykge1xuICAgIGlmIChlbGVtZW50WydzdHlsZSddKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gZWxlbWVudC5zdHlsZVtwcm9wXSA9IHN0eWxlc1twcm9wXTsgfSk7XG4gICAgfVxufVxuLyoqXG4gKiBAcGFyYW0gez99IGVsZW1lbnRcbiAqIEBwYXJhbSB7P30gc3R5bGVzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBlcmFzZVN0eWxlcyhlbGVtZW50LCBzdHlsZXMpIHtcbiAgICBpZiAoZWxlbWVudFsnc3R5bGUnXSkge1xuICAgICAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgIC8vIElFIHJlcXVpcmVzICcnIGluc3RlYWQgb2YgbnVsbFxuICAgICAgICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzc5MTZcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSAnJztcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBAcGFyYW0gez99IHZpc2l0b3JcbiAqIEBwYXJhbSB7P30gbm9kZVxuICogQHBhcmFtIHs/fSBjb250ZXh0XG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiB2aXNpdEFuaW1hdGlvbk5vZGUodmlzaXRvciwgbm9kZSwgY29udGV4dCkge1xuICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgIGNhc2UgMCAvKiBTdGF0ZSAqLzpcbiAgICAgICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0U3RhdGUoLyoqIEB0eXBlIHs/fSAqLyAobm9kZSksIGNvbnRleHQpO1xuICAgICAgICBjYXNlIDEgLyogVHJhbnNpdGlvbiAqLzpcbiAgICAgICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VHJhbnNpdGlvbigvKiogQHR5cGUgez99ICovIChub2RlKSwgY29udGV4dCk7XG4gICAgICAgIGNhc2UgMiAvKiBTZXF1ZW5jZSAqLzpcbiAgICAgICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0U2VxdWVuY2UoLyoqIEB0eXBlIHs/fSAqLyAobm9kZSksIGNvbnRleHQpO1xuICAgICAgICBjYXNlIDMgLyogR3JvdXAgKi86XG4gICAgICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEdyb3VwKC8qKiBAdHlwZSB7P30gKi8gKG5vZGUpLCBjb250ZXh0KTtcbiAgICAgICAgY2FzZSA0IC8qIEFuaW1hdGUgKi86XG4gICAgICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEFuaW1hdGUoLyoqIEB0eXBlIHs/fSAqLyAobm9kZSksIGNvbnRleHQpO1xuICAgICAgICBjYXNlIDUgLyogS2V5ZnJhbWVTZXF1ZW5jZSAqLzpcbiAgICAgICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0S2V5ZnJhbWVTZXF1ZW5jZSgvKiogQHR5cGUgez99ICovIChub2RlKSwgY29udGV4dCk7XG4gICAgICAgIGNhc2UgNiAvKiBTdHlsZSAqLzpcbiAgICAgICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0U3R5bGUoLyoqIEB0eXBlIHs/fSAqLyAobm9kZSksIGNvbnRleHQpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHJlc29sdmUgYW5pbWF0aW9uIG1ldGFkYXRhIG5vZGUgI1wiICsgbm9kZS50eXBlKTtcbiAgICB9XG59XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG52YXIgQU5ZX1NUQVRFID0gJyonO1xuLyoqXG4gKiBAcGFyYW0gez99IHRyYW5zaXRpb25WYWx1ZVxuICogQHBhcmFtIHs/fSBlcnJvcnNcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIHBhcnNlVHJhbnNpdGlvbkV4cHIodHJhbnNpdGlvblZhbHVlLCBlcnJvcnMpIHtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBleHByZXNzaW9ucyA9IFtdO1xuICAgIGlmICh0eXBlb2YgdHJhbnNpdGlvblZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgICAgICgodHJhbnNpdGlvblZhbHVlKSlcbiAgICAgICAgICAgIC5zcGxpdCgvXFxzKixcXHMqLylcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHBhcnNlSW5uZXJUcmFuc2l0aW9uU3RyKHN0ciwgZXhwcmVzc2lvbnMsIGVycm9ycyk7IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZXhwcmVzc2lvbnMucHVzaCgvKiogQHR5cGUgez99ICovICh0cmFuc2l0aW9uVmFsdWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIGV4cHJlc3Npb25zO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IGV2ZW50U3RyXG4gKiBAcGFyYW0gez99IGV4cHJlc3Npb25zXG4gKiBAcGFyYW0gez99IGVycm9yc1xuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gcGFyc2VJbm5lclRyYW5zaXRpb25TdHIoZXZlbnRTdHIsIGV4cHJlc3Npb25zLCBlcnJvcnMpIHtcbiAgICBpZiAoZXZlbnRTdHJbMF0gPT0gJzonKSB7XG4gICAgICAgIGV2ZW50U3RyID0gcGFyc2VBbmltYXRpb25BbGlhcyhldmVudFN0ciwgZXJyb3JzKTtcbiAgICB9XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbWF0Y2ggPSBldmVudFN0ci5tYXRjaCgvXihcXCp8Wy1cXHddKylcXHMqKDw/Wz0tXT4pXFxzKihcXCp8Wy1cXHddKykkLyk7XG4gICAgaWYgKG1hdGNoID09IG51bGwgfHwgbWF0Y2gubGVuZ3RoIDwgNCkge1xuICAgICAgICBlcnJvcnMucHVzaChcIlRoZSBwcm92aWRlZCB0cmFuc2l0aW9uIGV4cHJlc3Npb24gXFxcIlwiICsgZXZlbnRTdHIgKyBcIlxcXCIgaXMgbm90IHN1cHBvcnRlZFwiKTtcbiAgICAgICAgcmV0dXJuIGV4cHJlc3Npb25zO1xuICAgIH1cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBmcm9tU3RhdGUgPSBtYXRjaFsxXTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBzZXBhcmF0b3IgPSBtYXRjaFsyXTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB0b1N0YXRlID0gbWF0Y2hbM107XG4gICAgZXhwcmVzc2lvbnMucHVzaChtYWtlTGFtYmRhRnJvbVN0YXRlcyhmcm9tU3RhdGUsIHRvU3RhdGUpKTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpc0Z1bGxBbnlTdGF0ZUV4cHIgPSBmcm9tU3RhdGUgPT0gQU5ZX1NUQVRFICYmIHRvU3RhdGUgPT0gQU5ZX1NUQVRFO1xuICAgIGlmIChzZXBhcmF0b3JbMF0gPT0gJzwnICYmICFpc0Z1bGxBbnlTdGF0ZUV4cHIpIHtcbiAgICAgICAgZXhwcmVzc2lvbnMucHVzaChtYWtlTGFtYmRhRnJvbVN0YXRlcyh0b1N0YXRlLCBmcm9tU3RhdGUpKTtcbiAgICB9XG59XG4vKipcbiAqIEBwYXJhbSB7P30gYWxpYXNcbiAqIEBwYXJhbSB7P30gZXJyb3JzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBwYXJzZUFuaW1hdGlvbkFsaWFzKGFsaWFzLCBlcnJvcnMpIHtcbiAgICBzd2l0Y2ggKGFsaWFzKSB7XG4gICAgICAgIGNhc2UgJzplbnRlcic6XG4gICAgICAgICAgICByZXR1cm4gJ3ZvaWQgPT4gKic7XG4gICAgICAgIGNhc2UgJzpsZWF2ZSc6XG4gICAgICAgICAgICByZXR1cm4gJyogPT4gdm9pZCc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBlcnJvcnMucHVzaChcIlRoZSB0cmFuc2l0aW9uIGFsaWFzIHZhbHVlIFxcXCJcIiArIGFsaWFzICsgXCJcXFwiIGlzIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gJyogPT4gKic7XG4gICAgfVxufVxuLyoqXG4gKiBAcGFyYW0gez99IGxoc1xuICogQHBhcmFtIHs/fSByaHNcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIG1ha2VMYW1iZGFGcm9tU3RhdGVzKGxocywgcmhzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChmcm9tU3RhdGUsIHRvU3RhdGUpIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbGhzTWF0Y2ggPSBsaHMgPT0gQU5ZX1NUQVRFIHx8IGxocyA9PSBmcm9tU3RhdGU7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHJoc01hdGNoID0gcmhzID09IEFOWV9TVEFURSB8fCByaHMgPT0gdG9TdGF0ZTtcbiAgICAgICAgcmV0dXJuIGxoc01hdGNoICYmIHJoc01hdGNoO1xuICAgIH07XG59XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBwYXJhbSB7P30ga2V5ZnJhbWVzXG4gKiBAcGFyYW0gez99IGR1cmF0aW9uXG4gKiBAcGFyYW0gez99IGRlbGF5XG4gKiBAcGFyYW0gez99IGVhc2luZ1xuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gY3JlYXRlVGltZWxpbmVJbnN0cnVjdGlvbihrZXlmcmFtZXMsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogMSAvKiBUaW1lbGluZUFuaW1hdGlvbiAqLyxcbiAgICAgICAga2V5ZnJhbWVzOiBrZXlmcmFtZXMsXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgZGVsYXk6IGRlbGF5LFxuICAgICAgICB0b3RhbFRpbWU6IGR1cmF0aW9uICsgZGVsYXksIGVhc2luZzogZWFzaW5nXG4gICAgfTtcbn1cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQHBhcmFtIHs/fSBhc3RcbiAqIEBwYXJhbSB7Pz19IHN0YXJ0aW5nU3R5bGVzXG4gKiBAcGFyYW0gez89fSBmaW5hbFN0eWxlc1xuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gYnVpbGRBbmltYXRpb25LZXlmcmFtZXMoYXN0LCBzdGFydGluZ1N0eWxlcywgZmluYWxTdHlsZXMpIHtcbiAgICBpZiAoc3RhcnRpbmdTdHlsZXMgPT09IHZvaWQgMCkgeyBzdGFydGluZ1N0eWxlcyA9IHt9OyB9XG4gICAgaWYgKGZpbmFsU3R5bGVzID09PSB2b2lkIDApIHsgZmluYWxTdHlsZXMgPSB7fTsgfVxuICAgIHZhciAvKiogQHR5cGUgez99ICovIG5vcm1hbGl6ZWRBc3QgPSBBcnJheS5pc0FycmF5KGFzdCkgPyBzZXF1ZW5jZSgvKiogQHR5cGUgez99ICovIChhc3QpKSA6IChhc3QpO1xuICAgIHJldHVybiBuZXcgQW5pbWF0aW9uVGltZWxpbmVWaXNpdG9yKCkuYnVpbGRLZXlmcmFtZXMobm9ybWFsaXplZEFzdCwgc3RhcnRpbmdTdHlsZXMsIGZpbmFsU3R5bGVzKTtcbn1cbnZhciBBbmltYXRpb25UaW1lbGluZUNvbnRleHQgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZXJyb3JzXG4gICAgICogQHBhcmFtIHs/fSB0aW1lbGluZXNcbiAgICAgKiBAcGFyYW0gez89fSBpbml0aWFsVGltZWxpbmVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBBbmltYXRpb25UaW1lbGluZUNvbnRleHQoZXJyb3JzLCB0aW1lbGluZXMsIGluaXRpYWxUaW1lbGluZSkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICAgICAgdGhpcy50aW1lbGluZXMgPSB0aW1lbGluZXM7XG4gICAgICAgIHRoaXMucHJldmlvdXNOb2RlID0gKHt9KTtcbiAgICAgICAgdGhpcy5zdWJDb250ZXh0Q291bnQgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lbGluZSA9IGluaXRpYWxUaW1lbGluZSB8fCBuZXcgVGltZWxpbmVCdWlsZGVyKDApO1xuICAgICAgICB0aW1lbGluZXMucHVzaCh0aGlzLmN1cnJlbnRUaW1lbGluZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uVGltZWxpbmVDb250ZXh0LnByb3RvdHlwZS5jcmVhdGVTdWJDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb250ZXh0ID0gbmV3IEFuaW1hdGlvblRpbWVsaW5lQ29udGV4dCh0aGlzLmVycm9ycywgdGhpcy50aW1lbGluZXMsIHRoaXMuY3VycmVudFRpbWVsaW5lLmZvcmsoKSk7XG4gICAgICAgIGNvbnRleHQucHJldmlvdXNOb2RlID0gdGhpcy5wcmV2aW91c05vZGU7XG4gICAgICAgIGNvbnRleHQuY3VycmVudEFuaW1hdGVUaW1pbmdzID0gdGhpcy5jdXJyZW50QW5pbWF0ZVRpbWluZ3M7XG4gICAgICAgIHRoaXMuc3ViQ29udGV4dENvdW50Kys7XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/PX0gbmV3VGltZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uVGltZWxpbmVDb250ZXh0LnByb3RvdHlwZS50cmFuc2Zvcm1JbnRvTmV3VGltZWxpbmUgPSBmdW5jdGlvbiAobmV3VGltZSkge1xuICAgICAgICBpZiAobmV3VGltZSA9PT0gdm9pZCAwKSB7IG5ld1RpbWUgPSAwOyB9XG4gICAgICAgIHRoaXMuY3VycmVudFRpbWVsaW5lID0gdGhpcy5jdXJyZW50VGltZWxpbmUuZm9yayhuZXdUaW1lKTtcbiAgICAgICAgdGhpcy50aW1lbGluZXMucHVzaCh0aGlzLmN1cnJlbnRUaW1lbGluZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUaW1lbGluZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdGltZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uVGltZWxpbmVDb250ZXh0LnByb3RvdHlwZS5pbmNyZW1lbnRUaW1lID0gZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZWxpbmUuZm9yd2FyZFRpbWUodGhpcy5jdXJyZW50VGltZWxpbmUuZHVyYXRpb24gKyB0aW1lKTtcbiAgICB9O1xuICAgIHJldHVybiBBbmltYXRpb25UaW1lbGluZUNvbnRleHQ7XG59KCkpO1xudmFyIEFuaW1hdGlvblRpbWVsaW5lVmlzaXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uVGltZWxpbmVWaXNpdG9yKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGFzdFxuICAgICAqIEBwYXJhbSB7P30gc3RhcnRpbmdTdHlsZXNcbiAgICAgKiBAcGFyYW0gez99IGZpbmFsU3R5bGVzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25UaW1lbGluZVZpc2l0b3IucHJvdG90eXBlLmJ1aWxkS2V5ZnJhbWVzID0gZnVuY3Rpb24gKGFzdCwgc3RhcnRpbmdTdHlsZXMsIGZpbmFsU3R5bGVzKSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGNvbnRleHQgPSBuZXcgQW5pbWF0aW9uVGltZWxpbmVDb250ZXh0KFtdLCBbXSk7XG4gICAgICAgIGNvbnRleHQuY3VycmVudFRpbWVsaW5lLnNldFN0eWxlcyhzdGFydGluZ1N0eWxlcyk7XG4gICAgICAgIHZpc2l0QW5pbWF0aW9uTm9kZSh0aGlzLCBhc3QsIGNvbnRleHQpO1xuICAgICAgICAvLyB0aGlzIGNoZWNrcyB0byBzZWUgaWYgYW4gYWN0dWFsIGFuaW1hdGlvbiBoYXBwZW5lZFxuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB0aW1lbGluZXMgPSBjb250ZXh0LnRpbWVsaW5lcy5maWx0ZXIoZnVuY3Rpb24gKHRpbWVsaW5lKSB7IHJldHVybiB0aW1lbGluZS5oYXNTdHlsaW5nKCk7IH0pO1xuICAgICAgICBpZiAodGltZWxpbmVzLmxlbmd0aCAmJiBPYmplY3Qua2V5cyhmaW5hbFN0eWxlcykubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB0bCA9IHRpbWVsaW5lc1t0aW1lbGluZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAoIXRsLmFsbG93T25seVRpbWVsaW5lU3R5bGVzKCkpIHtcbiAgICAgICAgICAgICAgICB0bC5zZXRTdHlsZXMoZmluYWxTdHlsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aW1lbGluZXMubGVuZ3RoID8gdGltZWxpbmVzLm1hcChmdW5jdGlvbiAodGltZWxpbmUpIHsgcmV0dXJuIHRpbWVsaW5lLmJ1aWxkS2V5ZnJhbWVzKCk7IH0pIDpcbiAgICAgICAgICAgIFtjcmVhdGVUaW1lbGluZUluc3RydWN0aW9uKFtdLCAwLCAwLCAnJyldO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBhc3RcbiAgICAgKiBAcGFyYW0gez99IGNvbnRleHRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFuaW1hdGlvblRpbWVsaW5lVmlzaXRvci5wcm90b3R5cGUudmlzaXRTdGF0ZSA9IGZ1bmN0aW9uIChhc3QsIGNvbnRleHQpIHtcbiAgICAgICAgLy8gdGhlc2UgdmFsdWVzIGFyZSBub3QgdmlzaXRlZCBpbiB0aGlzIEFTVFxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBhc3RcbiAgICAgKiBAcGFyYW0gez99IGNvbnRleHRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFuaW1hdGlvblRpbWVsaW5lVmlzaXRvci5wcm90b3R5cGUudmlzaXRUcmFuc2l0aW9uID0gZnVuY3Rpb24gKGFzdCwgY29udGV4dCkge1xuICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgYXJlIG5vdCB2aXNpdGVkIGluIHRoaXMgQVNUXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGFzdFxuICAgICAqIEBwYXJhbSB7P30gY29udGV4dFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uVGltZWxpbmVWaXNpdG9yLnByb3RvdHlwZS52aXNpdFNlcXVlbmNlID0gZnVuY3Rpb24gKGFzdCwgY29udGV4dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBzdWJDb250ZXh0Q291bnQgPSBjb250ZXh0LnN1YkNvbnRleHRDb3VudDtcbiAgICAgICAgaWYgKGNvbnRleHQucHJldmlvdXNOb2RlLnR5cGUgPT0gNiAvKiBTdHlsZSAqLykge1xuICAgICAgICAgICAgY29udGV4dC5jdXJyZW50VGltZWxpbmUuZm9yd2FyZEZyYW1lKCk7XG4gICAgICAgICAgICBjb250ZXh0LmN1cnJlbnRUaW1lbGluZS5zbmFwc2hvdEN1cnJlbnRTdHlsZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBhc3Quc3RlcHMuZm9yRWFjaChmdW5jdGlvbiAocykgeyByZXR1cm4gdmlzaXRBbmltYXRpb25Ob2RlKF90aGlzLCBzLCBjb250ZXh0KTsgfSk7XG4gICAgICAgIC8vIHRoaXMgbWVhbnMgdGhhdCBzb21lIGFuaW1hdGlvbiBmdW5jdGlvbiB3aXRoaW4gdGhlIHNlcXVlbmNlXG4gICAgICAgIC8vIGVuZGVkIHVwIGNyZWF0aW5nIGEgc3ViIHRpbWVsaW5lICh3aGljaCBtZWFucyB0aGUgY3VycmVudFxuICAgICAgICAvLyB0aW1lbGluZSBjYW5ub3Qgb3ZlcmxhcCB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgc2VxdWVuY2UpXG4gICAgICAgIGlmIChjb250ZXh0LnN1YkNvbnRleHRDb3VudCA+IHN1YkNvbnRleHRDb3VudCkge1xuICAgICAgICAgICAgY29udGV4dC50cmFuc2Zvcm1JbnRvTmV3VGltZWxpbmUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LnByZXZpb3VzTm9kZSA9IGFzdDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gYXN0XG4gICAgICogQHBhcmFtIHs/fSBjb250ZXh0XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25UaW1lbGluZVZpc2l0b3IucHJvdG90eXBlLnZpc2l0R3JvdXAgPSBmdW5jdGlvbiAoYXN0LCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGlubmVyVGltZWxpbmVzID0gW107XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGZ1cnRoZXN0VGltZSA9IGNvbnRleHQuY3VycmVudFRpbWVsaW5lLmN1cnJlbnRUaW1lO1xuICAgICAgICBhc3Quc3RlcHMuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gaW5uZXJDb250ZXh0ID0gY29udGV4dC5jcmVhdGVTdWJDb250ZXh0KCk7XG4gICAgICAgICAgICB2aXNpdEFuaW1hdGlvbk5vZGUoX3RoaXMsIHMsIGlubmVyQ29udGV4dCk7XG4gICAgICAgICAgICBmdXJ0aGVzdFRpbWUgPSBNYXRoLm1heChmdXJ0aGVzdFRpbWUsIGlubmVyQ29udGV4dC5jdXJyZW50VGltZWxpbmUuY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgaW5uZXJUaW1lbGluZXMucHVzaChpbm5lckNvbnRleHQuY3VycmVudFRpbWVsaW5lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRoaXMgb3BlcmF0aW9uIGlzIHJ1biBhZnRlciB0aGUgQVNUIGxvb3AgYmVjYXVzZSBvdGhlcndpc2VcbiAgICAgICAgLy8gaWYgdGhlIHBhcmVudCB0aW1lbGluZSdzIGNvbGxlY3RlZCBzdHlsZXMgd2VyZSB1cGRhdGVkIHRoZW5cbiAgICAgICAgLy8gaXQgd291bGQgcGFzcyBpbiBpbnZhbGlkIGRhdGEgaW50byB0aGUgbmV3LXRvLWJlIGZvcmtlZCBpdGVtc1xuICAgICAgICBpbm5lclRpbWVsaW5lcy5mb3JFYWNoKGZ1bmN0aW9uICh0aW1lbGluZSkgeyByZXR1cm4gY29udGV4dC5jdXJyZW50VGltZWxpbmUubWVyZ2VUaW1lbGluZUNvbGxlY3RlZFN0eWxlcyh0aW1lbGluZSk7IH0pO1xuICAgICAgICBjb250ZXh0LnRyYW5zZm9ybUludG9OZXdUaW1lbGluZShmdXJ0aGVzdFRpbWUpO1xuICAgICAgICBjb250ZXh0LnByZXZpb3VzTm9kZSA9IGFzdDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gYXN0XG4gICAgICogQHBhcmFtIHs/fSBjb250ZXh0XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25UaW1lbGluZVZpc2l0b3IucHJvdG90eXBlLnZpc2l0QW5pbWF0ZSA9IGZ1bmN0aW9uIChhc3QsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdGltaW5ncyA9IGFzdC50aW1pbmdzLmhhc093blByb3BlcnR5KCdkdXJhdGlvbicpID8gKGFzdC50aW1pbmdzKSA6XG4gICAgICAgICAgICBwYXJzZVRpbWVFeHByZXNzaW9uKC8qKiBAdHlwZSB7P30gKi8gKGFzdC50aW1pbmdzKSwgY29udGV4dC5lcnJvcnMpO1xuICAgICAgICBjb250ZXh0LmN1cnJlbnRBbmltYXRlVGltaW5ncyA9IHRpbWluZ3M7XG4gICAgICAgIGlmICh0aW1pbmdzLmRlbGF5KSB7XG4gICAgICAgICAgICBjb250ZXh0LmluY3JlbWVudFRpbWUodGltaW5ncy5kZWxheSk7XG4gICAgICAgICAgICBjb250ZXh0LmN1cnJlbnRUaW1lbGluZS5zbmFwc2hvdEN1cnJlbnRTdHlsZXMoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBhc3RUeXBlID0gYXN0LnN0eWxlcyA/IGFzdC5zdHlsZXMudHlwZSA6IC0xO1xuICAgICAgICBpZiAoYXN0VHlwZSA9PSA1IC8qIEtleWZyYW1lU2VxdWVuY2UgKi8pIHtcbiAgICAgICAgICAgIHRoaXMudmlzaXRLZXlmcmFtZVNlcXVlbmNlKC8qKiBAdHlwZSB7P30gKi8gKGFzdC5zdHlsZXMpLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHN0eWxlQXN0ID0gKGFzdC5zdHlsZXMpO1xuICAgICAgICAgICAgaWYgKCFzdHlsZUFzdCkge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG5ld1N0eWxlRGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgIGlmICh0aW1pbmdzLmVhc2luZykge1xuICAgICAgICAgICAgICAgICAgICBuZXdTdHlsZURhdGFbJ2Vhc2luZyddID0gdGltaW5ncy5lYXNpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0eWxlQXN0ID0gc3R5bGUobmV3U3R5bGVEYXRhKTtcbiAgICAgICAgICAgICAgICAoKHN0eWxlQXN0KSlbJ3RyZWF0QXNFbXB0eVN0ZXAnXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LmluY3JlbWVudFRpbWUodGltaW5ncy5kdXJhdGlvbik7XG4gICAgICAgICAgICBpZiAoc3R5bGVBc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2l0U3R5bGUoc3R5bGVBc3QsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuY3VycmVudEFuaW1hdGVUaW1pbmdzID0gbnVsbDtcbiAgICAgICAgY29udGV4dC5wcmV2aW91c05vZGUgPSBhc3Q7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGFzdFxuICAgICAqIEBwYXJhbSB7P30gY29udGV4dFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uVGltZWxpbmVWaXNpdG9yLnByb3RvdHlwZS52aXNpdFN0eWxlID0gZnVuY3Rpb24gKGFzdCwgY29udGV4dCkge1xuICAgICAgICAvLyB0aGlzIGlzIGEgc3BlY2lhbCBjYXNlIHdoZW4gYSBzdHlsZSgpIGNhbGwgaXMgaXNzdWVkIGRpcmVjdGx5IGFmdGVyXG4gICAgICAgIC8vIGEgY2FsbCB0byBhbmltYXRlKCkuIElmIHRoZSBjbG9jayBpcyBub3QgZm9yd2FyZGVkIGJ5IG9uZSBmcmFtZSB0aGVuXG4gICAgICAgIC8vIHRoZSBzdHlsZSgpIGNhbGxzIHdpbGwgYmUgbWVyZ2VkIGludG8gdGhlIHByZXZpb3VzIGFuaW1hdGUoKSBjYWxsXG4gICAgICAgIC8vIHdoaWNoIGlzIGluY29ycmVjdC5cbiAgICAgICAgaWYgKCFjb250ZXh0LmN1cnJlbnRBbmltYXRlVGltaW5ncyAmJlxuICAgICAgICAgICAgY29udGV4dC5wcmV2aW91c05vZGUudHlwZSA9PSA0IC8qIEFuaW1hdGUgKi8pIHtcbiAgICAgICAgICAgIGNvbnRleHQuY3VycmVudFRpbWVsaW5lLmZvcndhcmRGcmFtZSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG5vcm1hbGl6ZWRTdHlsZXMgPSBub3JtYWxpemVTdHlsZXMoYXN0LnN0eWxlcyk7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGVhc2luZyA9IGNvbnRleHQuY3VycmVudEFuaW1hdGVUaW1pbmdzICYmIGNvbnRleHQuY3VycmVudEFuaW1hdGVUaW1pbmdzLmVhc2luZztcbiAgICAgICAgdGhpcy5fYXBwbHlTdHlsZXMobm9ybWFsaXplZFN0eWxlcywgZWFzaW5nLCAoKGFzdCkpWyd0cmVhdEFzRW1wdHlTdGVwJ10gPyB0cnVlIDogZmFsc2UsIGNvbnRleHQpO1xuICAgICAgICBjb250ZXh0LnByZXZpb3VzTm9kZSA9IGFzdDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gc3R5bGVzXG4gICAgICogQHBhcmFtIHs/fSBlYXNpbmdcbiAgICAgKiBAcGFyYW0gez99IHRyZWF0QXNFbXB0eVN0ZXBcbiAgICAgKiBAcGFyYW0gez99IGNvbnRleHRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFuaW1hdGlvblRpbWVsaW5lVmlzaXRvci5wcm90b3R5cGUuX2FwcGx5U3R5bGVzID0gZnVuY3Rpb24gKHN0eWxlcywgZWFzaW5nLCB0cmVhdEFzRW1wdHlTdGVwLCBjb250ZXh0KSB7XG4gICAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoJ2Vhc2luZycpKSB7XG4gICAgICAgICAgICBlYXNpbmcgPSBlYXNpbmcgfHwgKHN0eWxlc1snZWFzaW5nJ10pO1xuICAgICAgICAgICAgZGVsZXRlIHN0eWxlc1snZWFzaW5nJ107XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5jdXJyZW50VGltZWxpbmUuc2V0U3R5bGVzKHN0eWxlcywgZWFzaW5nLCB0cmVhdEFzRW1wdHlTdGVwKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gYXN0XG4gICAgICogQHBhcmFtIHs/fSBjb250ZXh0XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25UaW1lbGluZVZpc2l0b3IucHJvdG90eXBlLnZpc2l0S2V5ZnJhbWVTZXF1ZW5jZSA9IGZ1bmN0aW9uIChhc3QsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gTUFYX0tFWUZSQU1FX09GRlNFVCA9IDE7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGxpbWl0ID0gYXN0LnN0ZXBzLmxlbmd0aCAtIDE7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGZpcnN0S2V5ZnJhbWUgPSBhc3Quc3RlcHNbMF07XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG9mZnNldEdhcCA9IDA7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGNvbnRhaW5zT2Zmc2V0cyA9IGdldE9mZnNldChmaXJzdEtleWZyYW1lKSAhPSBudWxsO1xuICAgICAgICBpZiAoIWNvbnRhaW5zT2Zmc2V0cykge1xuICAgICAgICAgICAgb2Zmc2V0R2FwID0gTUFYX0tFWUZSQU1FX09GRlNFVCAvIGxpbWl0O1xuICAgICAgICB9XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHN0YXJ0VGltZSA9IGNvbnRleHQuY3VycmVudFRpbWVsaW5lLmR1cmF0aW9uO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBkdXJhdGlvbiA9ICgoY29udGV4dC5jdXJyZW50QW5pbWF0ZVRpbWluZ3MpKS5kdXJhdGlvbjtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gaW5uZXJDb250ZXh0ID0gY29udGV4dC5jcmVhdGVTdWJDb250ZXh0KCk7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGlubmVyVGltZWxpbmUgPSBpbm5lckNvbnRleHQuY3VycmVudFRpbWVsaW5lO1xuICAgICAgICBpbm5lclRpbWVsaW5lLmVhc2luZyA9ICgoY29udGV4dC5jdXJyZW50QW5pbWF0ZVRpbWluZ3MpKS5lYXNpbmc7XG4gICAgICAgIGFzdC5zdGVwcy5mb3JFYWNoKGZ1bmN0aW9uIChzdGVwLCBpKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBub3JtYWxpemVkU3R5bGVzID0gbm9ybWFsaXplU3R5bGVzKHN0ZXAuc3R5bGVzKTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG9mZnNldCA9IGNvbnRhaW5zT2Zmc2V0cyA/XG4gICAgICAgICAgICAgICAgKHN0ZXAub2Zmc2V0ICE9IG51bGwgPyBzdGVwLm9mZnNldCA6IHBhcnNlRmxvYXQoLyoqIEB0eXBlIHs/fSAqLyAobm9ybWFsaXplZFN0eWxlc1snb2Zmc2V0J10pKSkgOlxuICAgICAgICAgICAgICAgIChpID09IGxpbWl0ID8gTUFYX0tFWUZSQU1FX09GRlNFVCA6IGkgKiBvZmZzZXRHYXApO1xuICAgICAgICAgICAgaW5uZXJUaW1lbGluZS5mb3J3YXJkVGltZShvZmZzZXQgKiBkdXJhdGlvbik7XG4gICAgICAgICAgICBfdGhpcy5fYXBwbHlTdHlsZXMobm9ybWFsaXplZFN0eWxlcywgbnVsbCwgZmFsc2UsIGlubmVyQ29udGV4dCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlzIHdpbGwgZW5zdXJlIHRoYXQgdGhlIHBhcmVudCB0aW1lbGluZSBnZXRzIGFsbCB0aGUgc3R5bGVzIGZyb21cbiAgICAgICAgLy8gdGhlIGNoaWxkIGV2ZW4gaWYgdGhlIG5ldyB0aW1lbGluZSBiZWxvdyBpcyBub3QgdXNlZFxuICAgICAgICBjb250ZXh0LmN1cnJlbnRUaW1lbGluZS5tZXJnZVRpbWVsaW5lQ29sbGVjdGVkU3R5bGVzKGlubmVyVGltZWxpbmUpO1xuICAgICAgICAvLyB3ZSBkbyB0aGlzIGJlY2F1c2UgdGhlIHdpbmRvdyBiZXR3ZWVuIHRoaXMgdGltZWxpbmUgYW5kIHRoZSBzdWIgdGltZWxpbmVcbiAgICAgICAgLy8gc2hvdWxkIGVuc3VyZSB0aGF0IHRoZSBzdHlsZXMgd2l0aGluIGFyZSBleGFjdGx5IHRoZSBzYW1lIGFzIHRoZXkgd2VyZSBiZWZvcmVcbiAgICAgICAgY29udGV4dC50cmFuc2Zvcm1JbnRvTmV3VGltZWxpbmUoc3RhcnRUaW1lICsgZHVyYXRpb24pO1xuICAgICAgICBjb250ZXh0LnByZXZpb3VzTm9kZSA9IGFzdDtcbiAgICB9O1xuICAgIHJldHVybiBBbmltYXRpb25UaW1lbGluZVZpc2l0b3I7XG59KCkpO1xudmFyIFRpbWVsaW5lQnVpbGRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBzdGFydFRpbWVcbiAgICAgKiBAcGFyYW0gez89fSBnbG9iYWxUaW1lbGluZVN0eWxlc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIFRpbWVsaW5lQnVpbGRlcihzdGFydFRpbWUsIGdsb2JhbFRpbWVsaW5lU3R5bGVzKSB7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgICAgICAgdGhpcy5lYXNpbmcgPSAnJztcbiAgICAgICAgdGhpcy5fcHJldmlvdXNLZXlmcmFtZSA9IHt9O1xuICAgICAgICB0aGlzLl9rZXlmcmFtZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX3N0eWxlU3VtbWFyeSA9IHt9O1xuICAgICAgICB0aGlzLl9iYWNrRmlsbCA9IHt9O1xuICAgICAgICB0aGlzLl9jdXJyZW50RW1wdHlTdGVwS2V5ZnJhbWUgPSBudWxsO1xuICAgICAgICB0aGlzLl9sb2NhbFRpbWVsaW5lU3R5bGVzID0gT2JqZWN0LmNyZWF0ZSh0aGlzLl9iYWNrRmlsbCwge30pO1xuICAgICAgICB0aGlzLl9nbG9iYWxUaW1lbGluZVN0eWxlcyA9XG4gICAgICAgICAgICBnbG9iYWxUaW1lbGluZVN0eWxlcyA/IGdsb2JhbFRpbWVsaW5lU3R5bGVzIDogdGhpcy5fbG9jYWxUaW1lbGluZVN0eWxlcztcbiAgICAgICAgdGhpcy5fbG9hZEtleWZyYW1lKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVGltZWxpbmVCdWlsZGVyLnByb3RvdHlwZS5oYXNTdHlsaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fa2V5ZnJhbWVzLnNpemUgPiAxOyB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUaW1lbGluZUJ1aWxkZXIucHJvdG90eXBlLCBcImN1cnJlbnRUaW1lXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuc3RhcnRUaW1lICsgdGhpcy5kdXJhdGlvbjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/PX0gY3VycmVudFRpbWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFRpbWVsaW5lQnVpbGRlci5wcm90b3R5cGUuZm9yayA9IGZ1bmN0aW9uIChjdXJyZW50VGltZSkge1xuICAgICAgICBpZiAoY3VycmVudFRpbWUgPT09IHZvaWQgMCkgeyBjdXJyZW50VGltZSA9IDA7IH1cbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lbGluZUJ1aWxkZXIoY3VycmVudFRpbWUgfHwgdGhpcy5jdXJyZW50VGltZSwgdGhpcy5fZ2xvYmFsVGltZWxpbmVTdHlsZXMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUaW1lbGluZUJ1aWxkZXIucHJvdG90eXBlLl9sb2FkS2V5ZnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50S2V5ZnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzS2V5ZnJhbWUgPSB0aGlzLl9jdXJyZW50S2V5ZnJhbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY3VycmVudEtleWZyYW1lID0gKCh0aGlzLl9rZXlmcmFtZXMuZ2V0KHRoaXMuZHVyYXRpb24pKSk7XG4gICAgICAgIGlmICghdGhpcy5fY3VycmVudEtleWZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50S2V5ZnJhbWUgPSBPYmplY3QuY3JlYXRlKHRoaXMuX2JhY2tGaWxsLCB7fSk7XG4gICAgICAgICAgICB0aGlzLl9rZXlmcmFtZXMuc2V0KHRoaXMuZHVyYXRpb24sIHRoaXMuX2N1cnJlbnRLZXlmcmFtZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVGltZWxpbmVCdWlsZGVyLnByb3RvdHlwZS5mb3J3YXJkRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZHVyYXRpb24rKztcbiAgICAgICAgdGhpcy5fbG9hZEtleWZyYW1lKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHRpbWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFRpbWVsaW5lQnVpbGRlci5wcm90b3R5cGUuZm9yd2FyZFRpbWUgPSBmdW5jdGlvbiAodGltZSkge1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gdGltZTtcbiAgICAgICAgdGhpcy5fbG9hZEtleWZyYW1lKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHByb3BcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUaW1lbGluZUJ1aWxkZXIucHJvdG90eXBlLl91cGRhdGVTdHlsZSA9IGZ1bmN0aW9uIChwcm9wLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9sb2NhbFRpbWVsaW5lU3R5bGVzW3Byb3BdID0gdmFsdWU7IC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgKCh0aGlzLl9nbG9iYWxUaW1lbGluZVN0eWxlcykpW3Byb3BdID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3N0eWxlU3VtbWFyeVtwcm9wXSA9IHsgdGltZTogdGhpcy5jdXJyZW50VGltZSwgdmFsdWU6IHZhbHVlIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFRpbWVsaW5lQnVpbGRlci5wcm90b3R5cGUuYWxsb3dPbmx5VGltZWxpbmVTdHlsZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jdXJyZW50RW1wdHlTdGVwS2V5ZnJhbWUgIT09IHRoaXMuX2N1cnJlbnRLZXlmcmFtZTsgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHN0eWxlc1xuICAgICAqIEBwYXJhbSB7Pz19IGVhc2luZ1xuICAgICAqIEBwYXJhbSB7Pz19IHRyZWF0QXNFbXB0eVN0ZXBcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFRpbWVsaW5lQnVpbGRlci5wcm90b3R5cGUuc2V0U3R5bGVzID0gZnVuY3Rpb24gKHN0eWxlcywgZWFzaW5nLCB0cmVhdEFzRW1wdHlTdGVwKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChlYXNpbmcgPT09IHZvaWQgMCkgeyBlYXNpbmcgPSBudWxsOyB9XG4gICAgICAgIGlmICh0cmVhdEFzRW1wdHlTdGVwID09PSB2b2lkIDApIHsgdHJlYXRBc0VtcHR5U3RlcCA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChlYXNpbmcpIHtcbiAgICAgICAgICAgICgodGhpcy5fcHJldmlvdXNLZXlmcmFtZSkpWydlYXNpbmcnXSA9IGVhc2luZztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJlYXRBc0VtcHR5U3RlcCkge1xuICAgICAgICAgICAgLy8gc3BlY2lhbCBjYXNlIGZvciBhbmltYXRlKGR1cmF0aW9uKTpcbiAgICAgICAgICAgIC8vIGFsbCBtaXNzaW5nIHN0eWxlcyBhcmUgZmlsbGVkIHdpdGggYSBgKmAgdmFsdWUgdGhlblxuICAgICAgICAgICAgLy8gaWYgYW55IGRlc3RpbmF0aW9uIHN0eWxlcyBhcmUgZmlsbGVkIGluIGxhdGVyIG9uIHRoZSBzYW1lXG4gICAgICAgICAgICAvLyBrZXlmcmFtZSB0aGVuIHRoZXkgd2lsbCBvdmVycmlkZSB0aGUgb3ZlcnJpZGRlbiBzdHlsZXNcbiAgICAgICAgICAgIC8vIFdlIHVzZSBgX2dsb2JhbFRpbWVsaW5lU3R5bGVzYCBoZXJlIGJlY2F1c2UgdGhlcmUgbWF5IGJlXG4gICAgICAgICAgICAvLyBzdHlsZXMgaW4gcHJldmlvdXMga2V5ZnJhbWVzIHRoYXQgYXJlIG5vdCBwcmVzZW50IGluIHRoaXMgdGltZWxpbmVcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuX2dsb2JhbFRpbWVsaW5lU3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2JhY2tGaWxsW3Byb3BdID0gX3RoaXMuX2dsb2JhbFRpbWVsaW5lU3R5bGVzW3Byb3BdIHx8IEFVVE9fU1RZTEU7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2N1cnJlbnRLZXlmcmFtZVtwcm9wXSA9IEFVVE9fU1RZTEU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRFbXB0eVN0ZXBLZXlmcmFtZSA9IHRoaXMuX2N1cnJlbnRLZXlmcmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wICE9PSAnb2Zmc2V0Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWwgPSBzdHlsZXNbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9jdXJyZW50S2V5ZnJhbWVbcHJvcF0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuX2xvY2FsVGltZWxpbmVTdHlsZXNbcHJvcF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9iYWNrRmlsbFtwcm9wXSA9IF90aGlzLl9nbG9iYWxUaW1lbGluZVN0eWxlc1twcm9wXSB8fCBBVVRPX1NUWUxFO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl91cGRhdGVTdHlsZShwcm9wLCB2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5fbG9jYWxUaW1lbGluZVN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuX2N1cnJlbnRLZXlmcmFtZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fY3VycmVudEtleWZyYW1lW3Byb3BdID0gX3RoaXMuX2xvY2FsVGltZWxpbmVTdHlsZXNbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVGltZWxpbmVCdWlsZGVyLnByb3RvdHlwZS5zbmFwc2hvdEN1cnJlbnRTdHlsZXMgPSBmdW5jdGlvbiAoKSB7IGNvcHlTdHlsZXModGhpcy5fbG9jYWxUaW1lbGluZVN0eWxlcywgZmFsc2UsIHRoaXMuX2N1cnJlbnRLZXlmcmFtZSk7IH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBUaW1lbGluZUJ1aWxkZXIucHJvdG90eXBlLmdldEZpbmFsS2V5ZnJhbWUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoKHRoaXMuX2tleWZyYW1lcy5nZXQodGhpcy5kdXJhdGlvbikpKTsgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGltZWxpbmVCdWlsZGVyLnByb3RvdHlwZSwgXCJwcm9wZXJ0aWVzXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHByb3BlcnRpZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIC8qKiBAdHlwZSB7P30gKi8gcHJvcCBpbiB0aGlzLl9jdXJyZW50S2V5ZnJhbWUpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSB0aW1lbGluZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVGltZWxpbmVCdWlsZGVyLnByb3RvdHlwZS5tZXJnZVRpbWVsaW5lQ29sbGVjdGVkU3R5bGVzID0gZnVuY3Rpb24gKHRpbWVsaW5lKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIE9iamVjdC5rZXlzKHRpbWVsaW5lLl9zdHlsZVN1bW1hcnkpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGRldGFpbHMwID0gX3RoaXMuX3N0eWxlU3VtbWFyeVtwcm9wXTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGRldGFpbHMxID0gdGltZWxpbmUuX3N0eWxlU3VtbWFyeVtwcm9wXTtcbiAgICAgICAgICAgIGlmICghZGV0YWlsczAgfHwgZGV0YWlsczEudGltZSA+IGRldGFpbHMwLnRpbWUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fdXBkYXRlU3R5bGUocHJvcCwgZGV0YWlsczEudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVGltZWxpbmVCdWlsZGVyLnByb3RvdHlwZS5idWlsZEtleWZyYW1lcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZmluYWxLZXlmcmFtZXMgPSBbXTtcbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlIGZvciB3aGVuIHRoZXJlIGFyZSBvbmx5IHN0YXJ0L2Rlc3RpbmF0aW9uXG4gICAgICAgIC8vIHN0eWxlcyBidXQgbm8gYWN0dWFsIGFuaW1hdGlvbiBhbmltYXRlIHN0ZXBzLi4uXG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uID09IDApIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHRhcmdldEtleWZyYW1lID0gdGhpcy5nZXRGaW5hbEtleWZyYW1lKCk7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBmaXJzdEtleWZyYW1lID0gY29weVN0eWxlcyh0YXJnZXRLZXlmcmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICBmaXJzdEtleWZyYW1lWydvZmZzZXQnXSA9IDA7XG4gICAgICAgICAgICBmaW5hbEtleWZyYW1lcy5wdXNoKGZpcnN0S2V5ZnJhbWUpO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbGFzdEtleWZyYW1lID0gY29weVN0eWxlcyh0YXJnZXRLZXlmcmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICBsYXN0S2V5ZnJhbWVbJ29mZnNldCddID0gMTtcbiAgICAgICAgICAgIGZpbmFsS2V5ZnJhbWVzLnB1c2gobGFzdEtleWZyYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2tleWZyYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXlmcmFtZSwgdGltZSkge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGZpbmFsS2V5ZnJhbWUgPSBjb3B5U3R5bGVzKGtleWZyYW1lLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBmaW5hbEtleWZyYW1lWydvZmZzZXQnXSA9IHRpbWUgLyBfdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBmaW5hbEtleWZyYW1lcy5wdXNoKGZpbmFsS2V5ZnJhbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNyZWF0ZVRpbWVsaW5lSW5zdHJ1Y3Rpb24oZmluYWxLZXlmcmFtZXMsIHRoaXMuZHVyYXRpb24sIHRoaXMuc3RhcnRUaW1lLCB0aGlzLmVhc2luZyk7XG4gICAgfTtcbiAgICByZXR1cm4gVGltZWxpbmVCdWlsZGVyO1xufSgpKTtcbi8qKlxuICogQHBhcmFtIHs/fSBhc3RcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIGdldE9mZnNldChhc3QpIHtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBvZmZzZXQgPSBhc3Qub2Zmc2V0O1xuICAgIGlmIChvZmZzZXQgPT0gbnVsbCkge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBzdHlsZXMgPSBhc3Quc3R5bGVzO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZXMpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciAvKiogQHR5cGUgez99ICovIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbyA9IChzdHlsZXNbaV1bJ29mZnNldCddKTtcbiAgICAgICAgICAgICAgICBpZiAobyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IG87XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9mZnNldCA9IChzdHlsZXNbJ29mZnNldCddKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKChvZmZzZXQpKTtcbn1cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQHBhcmFtIHs/fSB0cmlnZ2VyTmFtZVxuICogQHBhcmFtIHs/fSBmcm9tU3RhdGVcbiAqIEBwYXJhbSB7P30gdG9TdGF0ZVxuICogQHBhcmFtIHs/fSBpc1JlbW92YWxUcmFuc2l0aW9uXG4gKiBAcGFyYW0gez99IGZyb21TdHlsZXNcbiAqIEBwYXJhbSB7P30gdG9TdHlsZXNcbiAqIEBwYXJhbSB7P30gdGltZWxpbmVzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBjcmVhdGVUcmFuc2l0aW9uSW5zdHJ1Y3Rpb24odHJpZ2dlck5hbWUsIGZyb21TdGF0ZSwgdG9TdGF0ZSwgaXNSZW1vdmFsVHJhbnNpdGlvbiwgZnJvbVN0eWxlcywgdG9TdHlsZXMsIHRpbWVsaW5lcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IDAgLyogVHJhbnNpdGlvbkFuaW1hdGlvbiAqLyxcbiAgICAgICAgdHJpZ2dlck5hbWU6IHRyaWdnZXJOYW1lLFxuICAgICAgICBpc1JlbW92YWxUcmFuc2l0aW9uOiBpc1JlbW92YWxUcmFuc2l0aW9uLFxuICAgICAgICBmcm9tU3RhdGU6IGZyb21TdGF0ZSxcbiAgICAgICAgZnJvbVN0eWxlczogZnJvbVN0eWxlcyxcbiAgICAgICAgdG9TdGF0ZTogdG9TdGF0ZSxcbiAgICAgICAgdG9TdHlsZXM6IHRvU3R5bGVzLFxuICAgICAgICB0aW1lbGluZXM6IHRpbWVsaW5lc1xuICAgIH07XG59XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG52YXIgQW5pbWF0aW9uVHJhbnNpdGlvbkZhY3RvcnkgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gX3RyaWdnZXJOYW1lXG4gICAgICogQHBhcmFtIHs/fSBhc3RcbiAgICAgKiBAcGFyYW0gez99IG1hdGNoRm5zXG4gICAgICogQHBhcmFtIHs/fSBfc3RhdGVTdHlsZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBBbmltYXRpb25UcmFuc2l0aW9uRmFjdG9yeShfdHJpZ2dlck5hbWUsIGFzdCwgbWF0Y2hGbnMsIF9zdGF0ZVN0eWxlcykge1xuICAgICAgICB0aGlzLl90cmlnZ2VyTmFtZSA9IF90cmlnZ2VyTmFtZTtcbiAgICAgICAgdGhpcy5tYXRjaEZucyA9IG1hdGNoRm5zO1xuICAgICAgICB0aGlzLl9zdGF0ZVN0eWxlcyA9IF9zdGF0ZVN0eWxlcztcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRBc3QgPSBBcnJheS5pc0FycmF5KGFzdC5hbmltYXRpb24pID9cbiAgICAgICAgICAgIHNlcXVlbmNlKGFzdC5hbmltYXRpb24pIDpcbiAgICAgICAgICAgIGFzdC5hbmltYXRpb247XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkFzdCA9IG5vcm1hbGl6ZWRBc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY3VycmVudFN0YXRlXG4gICAgICogQHBhcmFtIHs/fSBuZXh0U3RhdGVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFuaW1hdGlvblRyYW5zaXRpb25GYWN0b3J5LnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uIChjdXJyZW50U3RhdGUsIG5leHRTdGF0ZSkge1xuICAgICAgICBpZiAoIW9uZU9yTW9yZVRyYW5zaXRpb25zTWF0Y2godGhpcy5tYXRjaEZucywgY3VycmVudFN0YXRlLCBuZXh0U3RhdGUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBiYWNrdXBTdGF0ZVN0eWxlcyA9IHRoaXMuX3N0YXRlU3R5bGVzWycqJ10gfHwge307XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGN1cnJlbnRTdGF0ZVN0eWxlcyA9IHRoaXMuX3N0YXRlU3R5bGVzW2N1cnJlbnRTdGF0ZV0gfHwgYmFja3VwU3RhdGVTdHlsZXM7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG5leHRTdGF0ZVN0eWxlcyA9IHRoaXMuX3N0YXRlU3R5bGVzW25leHRTdGF0ZV0gfHwgYmFja3VwU3RhdGVTdHlsZXM7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHRpbWVsaW5lcyA9IGJ1aWxkQW5pbWF0aW9uS2V5ZnJhbWVzKHRoaXMuX2FuaW1hdGlvbkFzdCwgY3VycmVudFN0YXRlU3R5bGVzLCBuZXh0U3RhdGVTdHlsZXMpO1xuICAgICAgICByZXR1cm4gY3JlYXRlVHJhbnNpdGlvbkluc3RydWN0aW9uKHRoaXMuX3RyaWdnZXJOYW1lLCBjdXJyZW50U3RhdGUsIG5leHRTdGF0ZSwgbmV4dFN0YXRlID09PSAndm9pZCcsIGN1cnJlbnRTdGF0ZVN0eWxlcywgbmV4dFN0YXRlU3R5bGVzLCB0aW1lbGluZXMpO1xuICAgIH07XG4gICAgcmV0dXJuIEFuaW1hdGlvblRyYW5zaXRpb25GYWN0b3J5O1xufSgpKTtcbi8qKlxuICogQHBhcmFtIHs/fSBtYXRjaEZuc1xuICogQHBhcmFtIHs/fSBjdXJyZW50U3RhdGVcbiAqIEBwYXJhbSB7P30gbmV4dFN0YXRlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBvbmVPck1vcmVUcmFuc2l0aW9uc01hdGNoKG1hdGNoRm5zLCBjdXJyZW50U3RhdGUsIG5leHRTdGF0ZSkge1xuICAgIHJldHVybiBtYXRjaEZucy5zb21lKGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZm4oY3VycmVudFN0YXRlLCBuZXh0U3RhdGUpOyB9KTtcbn1cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQHBhcmFtIHs/fSBhc3RcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlQW5pbWF0aW9uU2VxdWVuY2UoYXN0KSB7XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbm9ybWFsaXplZEFzdCA9IEFycmF5LmlzQXJyYXkoYXN0KSA/IHNlcXVlbmNlKC8qKiBAdHlwZSB7P30gKi8gKGFzdCkpIDogKGFzdCk7XG4gICAgcmV0dXJuIG5ldyBBbmltYXRpb25WYWxpZGF0b3JWaXNpdG9yKCkudmFsaWRhdGUobm9ybWFsaXplZEFzdCk7XG59XG52YXIgQW5pbWF0aW9uVmFsaWRhdG9yVmlzaXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uVmFsaWRhdG9yVmlzaXRvcigpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBhc3RcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFuaW1hdGlvblZhbGlkYXRvclZpc2l0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKGFzdCkge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb250ZXh0ID0gbmV3IEFuaW1hdGlvblZhbGlkYXRvckNvbnRleHQoKTtcbiAgICAgICAgdmlzaXRBbmltYXRpb25Ob2RlKHRoaXMsIGFzdCwgY29udGV4dCk7XG4gICAgICAgIHJldHVybiBjb250ZXh0LmVycm9ycztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gYXN0XG4gICAgICogQHBhcmFtIHs/fSBjb250ZXh0XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25WYWxpZGF0b3JWaXNpdG9yLnByb3RvdHlwZS52aXNpdFN0YXRlID0gZnVuY3Rpb24gKGFzdCwgY29udGV4dCkge1xuICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgYXJlIG5vdCB2aXNpdGVkIGluIHRoaXMgQVNUXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGFzdFxuICAgICAqIEBwYXJhbSB7P30gY29udGV4dFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uVmFsaWRhdG9yVmlzaXRvci5wcm90b3R5cGUudmlzaXRUcmFuc2l0aW9uID0gZnVuY3Rpb24gKGFzdCwgY29udGV4dCkge1xuICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgYXJlIG5vdCB2aXNpdGVkIGluIHRoaXMgQVNUXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGFzdFxuICAgICAqIEBwYXJhbSB7P30gY29udGV4dFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uVmFsaWRhdG9yVmlzaXRvci5wcm90b3R5cGUudmlzaXRTZXF1ZW5jZSA9IGZ1bmN0aW9uIChhc3QsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgYXN0LnN0ZXBzLmZvckVhY2goZnVuY3Rpb24gKHN0ZXApIHsgcmV0dXJuIHZpc2l0QW5pbWF0aW9uTm9kZShfdGhpcywgc3RlcCwgY29udGV4dCk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBhc3RcbiAgICAgKiBAcGFyYW0gez99IGNvbnRleHRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFuaW1hdGlvblZhbGlkYXRvclZpc2l0b3IucHJvdG90eXBlLnZpc2l0R3JvdXAgPSBmdW5jdGlvbiAoYXN0LCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGN1cnJlbnRUaW1lID0gY29udGV4dC5jdXJyZW50VGltZTtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZnVydGhlc3RUaW1lID0gMDtcbiAgICAgICAgYXN0LnN0ZXBzLmZvckVhY2goZnVuY3Rpb24gKHN0ZXApIHtcbiAgICAgICAgICAgIGNvbnRleHQuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgICAgIHZpc2l0QW5pbWF0aW9uTm9kZShfdGhpcywgc3RlcCwgY29udGV4dCk7XG4gICAgICAgICAgICBmdXJ0aGVzdFRpbWUgPSBNYXRoLm1heChmdXJ0aGVzdFRpbWUsIGNvbnRleHQuY3VycmVudFRpbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29udGV4dC5jdXJyZW50VGltZSA9IGZ1cnRoZXN0VGltZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gYXN0XG4gICAgICogQHBhcmFtIHs/fSBjb250ZXh0XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25WYWxpZGF0b3JWaXNpdG9yLnByb3RvdHlwZS52aXNpdEFuaW1hdGUgPSBmdW5jdGlvbiAoYXN0LCBjb250ZXh0KSB7XG4gICAgICAgIC8vIHdlIHJlYXNzaWduIHRoZSB0aW1pbmdzIGhlcmUgc28gdGhhdCB0aGV5IGFyZSBub3QgcmVwYXJzZWQgZWFjaFxuICAgICAgICAvLyB0aW1lIGFuIGFuaW1hdGlvbiBvY2N1cnNcbiAgICAgICAgY29udGV4dC5jdXJyZW50QW5pbWF0ZVRpbWluZ3MgPSBhc3QudGltaW5ncyA9XG4gICAgICAgICAgICBwYXJzZVRpbWVFeHByZXNzaW9uKC8qKiBAdHlwZSB7P30gKi8gKGFzdC50aW1pbmdzKSwgY29udGV4dC5lcnJvcnMpO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBhc3RUeXBlID0gYXN0LnN0eWxlcyAmJiBhc3Quc3R5bGVzLnR5cGU7XG4gICAgICAgIGlmIChhc3RUeXBlID09IDUgLyogS2V5ZnJhbWVTZXF1ZW5jZSAqLykge1xuICAgICAgICAgICAgdGhpcy52aXNpdEtleWZyYW1lU2VxdWVuY2UoLyoqIEB0eXBlIHs/fSAqLyAoYXN0LnN0eWxlcyksIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dC5jdXJyZW50VGltZSArPVxuICAgICAgICAgICAgICAgIGNvbnRleHQuY3VycmVudEFuaW1hdGVUaW1pbmdzLmR1cmF0aW9uICsgY29udGV4dC5jdXJyZW50QW5pbWF0ZVRpbWluZ3MuZGVsYXk7XG4gICAgICAgICAgICBpZiAoYXN0VHlwZSA9PSA2IC8qIFN0eWxlICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpdFN0eWxlKC8qKiBAdHlwZSB7P30gKi8gKGFzdC5zdHlsZXMpLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LmN1cnJlbnRBbmltYXRlVGltaW5ncyA9IG51bGw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGFzdFxuICAgICAqIEBwYXJhbSB7P30gY29udGV4dFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uVmFsaWRhdG9yVmlzaXRvci5wcm90b3R5cGUudmlzaXRTdHlsZSA9IGZ1bmN0aW9uIChhc3QsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gc3R5bGVEYXRhID0gbm9ybWFsaXplU3R5bGVzKGFzdC5zdHlsZXMpO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB0aW1pbmdzID0gY29udGV4dC5jdXJyZW50QW5pbWF0ZVRpbWluZ3M7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGVuZFRpbWUgPSBjb250ZXh0LmN1cnJlbnRUaW1lO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBzdGFydFRpbWUgPSBjb250ZXh0LmN1cnJlbnRUaW1lO1xuICAgICAgICBpZiAodGltaW5ncyAmJiBzdGFydFRpbWUgPiAwKSB7XG4gICAgICAgICAgICBzdGFydFRpbWUgLT0gdGltaW5ncy5kdXJhdGlvbiArIHRpbWluZ3MuZGVsYXk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVEYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb2xsZWN0ZWRFbnRyeSA9IGNvbnRleHQuY29sbGVjdGVkU3R5bGVzW3Byb3BdO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdXBkYXRlQ29sbGVjdGVkU3R5bGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGNvbGxlY3RlZEVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0VGltZSAhPSBlbmRUaW1lICYmIHN0YXJ0VGltZSA+PSBjb2xsZWN0ZWRFbnRyeS5zdGFydFRpbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgZW5kVGltZSA8PSBjb2xsZWN0ZWRFbnRyeS5lbmRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZXJyb3JzLnB1c2goXCJUaGUgQ1NTIHByb3BlcnR5IFxcXCJcIiArIHByb3AgKyBcIlxcXCIgdGhhdCBleGlzdHMgYmV0d2VlbiB0aGUgdGltZXMgb2YgXFxcIlwiICsgY29sbGVjdGVkRW50cnkuc3RhcnRUaW1lICsgXCJtc1xcXCIgYW5kIFxcXCJcIiArIGNvbGxlY3RlZEVudHJ5LmVuZFRpbWUgKyBcIm1zXFxcIiBpcyBhbHNvIGJlaW5nIGFuaW1hdGVkIGluIGEgcGFyYWxsZWwgYW5pbWF0aW9uIGJldHdlZW4gdGhlIHRpbWVzIG9mIFxcXCJcIiArIHN0YXJ0VGltZSArIFwibXNcXFwiIGFuZCBcXFwiXCIgKyBlbmRUaW1lICsgXCJtc1xcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNvbGxlY3RlZFN0eWxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHdlIGFsd2F5cyBjaG9vc2UgdGhlIHNtYWxsZXIgc3RhcnQgdGltZSB2YWx1ZSBzaW5jZSB3ZVxuICAgICAgICAgICAgICAgIC8vIHdhbnQgdG8gaGF2ZSBhIHJlY29yZCBvZiB0aGUgZW50aXJlIGFuaW1hdGlvbiB3aW5kb3cgd2hlcmVcbiAgICAgICAgICAgICAgICAvLyB0aGUgc3R5bGUgcHJvcGVydHkgaXMgYmVpbmcgYW5pbWF0ZWQgaW4gYmV0d2VlblxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZSA9IGNvbGxlY3RlZEVudHJ5LnN0YXJ0VGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1cGRhdGVDb2xsZWN0ZWRTdHlsZSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuY29sbGVjdGVkU3R5bGVzW3Byb3BdID0geyBzdGFydFRpbWU6IHN0YXJ0VGltZSwgZW5kVGltZTogZW5kVGltZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gYXN0XG4gICAgICogQHBhcmFtIHs/fSBjb250ZXh0XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25WYWxpZGF0b3JWaXNpdG9yLnByb3RvdHlwZS52aXNpdEtleWZyYW1lU2VxdWVuY2UgPSBmdW5jdGlvbiAoYXN0LCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHRvdGFsS2V5ZnJhbWVzV2l0aE9mZnNldHMgPSAwO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBvZmZzZXRzID0gW107XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG9mZnNldHNPdXRPZk9yZGVyID0gZmFsc2U7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGtleWZyYW1lc091dE9mUmFuZ2UgPSBmYWxzZTtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcHJldmlvdXNPZmZzZXQgPSAwO1xuICAgICAgICBhc3Quc3RlcHMuZm9yRWFjaChmdW5jdGlvbiAoc3RlcCkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gc3R5bGVEYXRhID0gbm9ybWFsaXplU3R5bGVzKHN0ZXAuc3R5bGVzKTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG9mZnNldCA9IDA7XG4gICAgICAgICAgICBpZiAoc3R5bGVEYXRhLmhhc093blByb3BlcnR5KCdvZmZzZXQnKSkge1xuICAgICAgICAgICAgICAgIHRvdGFsS2V5ZnJhbWVzV2l0aE9mZnNldHMrKztcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSAoc3R5bGVEYXRhWydvZmZzZXQnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlmcmFtZXNPdXRPZlJhbmdlID0ga2V5ZnJhbWVzT3V0T2ZSYW5nZSB8fCBvZmZzZXQgPCAwIHx8IG9mZnNldCA+IDE7XG4gICAgICAgICAgICBvZmZzZXRzT3V0T2ZPcmRlciA9IG9mZnNldHNPdXRPZk9yZGVyIHx8IG9mZnNldCA8IHByZXZpb3VzT2Zmc2V0O1xuICAgICAgICAgICAgcHJldmlvdXNPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICBvZmZzZXRzLnB1c2gob2Zmc2V0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChrZXlmcmFtZXNPdXRPZlJhbmdlKSB7XG4gICAgICAgICAgICBjb250ZXh0LmVycm9ycy5wdXNoKFwiUGxlYXNlIGVuc3VyZSB0aGF0IGFsbCBrZXlmcmFtZSBvZmZzZXRzIGFyZSBiZXR3ZWVuIDAgYW5kIDFcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9mZnNldHNPdXRPZk9yZGVyKSB7XG4gICAgICAgICAgICBjb250ZXh0LmVycm9ycy5wdXNoKFwiUGxlYXNlIGVuc3VyZSB0aGF0IGFsbCBrZXlmcmFtZSBvZmZzZXRzIGFyZSBpbiBvcmRlclwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBsZW5ndGggPSBhc3Quc3RlcHMubGVuZ3RoO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBnZW5lcmF0ZWRPZmZzZXQgPSAwO1xuICAgICAgICBpZiAodG90YWxLZXlmcmFtZXNXaXRoT2Zmc2V0cyA+IDAgJiYgdG90YWxLZXlmcmFtZXNXaXRoT2Zmc2V0cyA8IGxlbmd0aCkge1xuICAgICAgICAgICAgY29udGV4dC5lcnJvcnMucHVzaChcIk5vdCBhbGwgc3R5bGUoKSBzdGVwcyB3aXRoaW4gdGhlIGRlY2xhcmVkIGtleWZyYW1lcygpIGNvbnRhaW4gb2Zmc2V0c1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b3RhbEtleWZyYW1lc1dpdGhPZmZzZXRzID09IDApIHtcbiAgICAgICAgICAgIGdlbmVyYXRlZE9mZnNldCA9IDEgLyBsZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbGltaXQgPSBsZW5ndGggLSAxO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjdXJyZW50VGltZSA9IGNvbnRleHQuY3VycmVudFRpbWU7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGFuaW1hdGVEdXJhdGlvbiA9ICgoY29udGV4dC5jdXJyZW50QW5pbWF0ZVRpbWluZ3MpKS5kdXJhdGlvbjtcbiAgICAgICAgYXN0LnN0ZXBzLmZvckVhY2goZnVuY3Rpb24gKHN0ZXAsIGkpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG9mZnNldCA9IGdlbmVyYXRlZE9mZnNldCA+IDAgPyAoaSA9PSBsaW1pdCA/IDEgOiAoZ2VuZXJhdGVkT2Zmc2V0ICogaSkpIDogb2Zmc2V0c1tpXTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGR1cmF0aW9uVXBUb1RoaXNGcmFtZSA9IG9mZnNldCAqIGFuaW1hdGVEdXJhdGlvbjtcbiAgICAgICAgICAgIGNvbnRleHQuY3VycmVudFRpbWUgPVxuICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lICsgKChjb250ZXh0LmN1cnJlbnRBbmltYXRlVGltaW5ncykpLmRlbGF5ICsgZHVyYXRpb25VcFRvVGhpc0ZyYW1lOyAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICAoKGNvbnRleHQuY3VycmVudEFuaW1hdGVUaW1pbmdzKSkuZHVyYXRpb24gPSBkdXJhdGlvblVwVG9UaGlzRnJhbWU7XG4gICAgICAgICAgICBfdGhpcy52aXNpdFN0eWxlKHN0ZXAsIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBBbmltYXRpb25WYWxpZGF0b3JWaXNpdG9yO1xufSgpKTtcbnZhciBBbmltYXRpb25WYWxpZGF0b3JDb250ZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbmltYXRpb25WYWxpZGF0b3JDb250ZXh0KCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5jb2xsZWN0ZWRTdHlsZXMgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIEFuaW1hdGlvblZhbGlkYXRvckNvbnRleHQ7XG59KCkpO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBcXEBleHBlcmltZW50YWwgQW5pbWF0aW9uIHN1cHBvcnQgaXMgZXhwZXJpbWVudGFsLlxuICogQHBhcmFtIHs/fSBuYW1lXG4gKiBAcGFyYW0gez99IGRlZmluaXRpb25zXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBidWlsZFRyaWdnZXIobmFtZSwgZGVmaW5pdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IEFuaW1hdGlvblRyaWdnZXJWaXNpdG9yKCkuYnVpbGRUcmlnZ2VyKG5hbWUsIGRlZmluaXRpb25zKTtcbn1cbi8qKlxuICogXFxAZXhwZXJpbWVudGFsIEFuaW1hdGlvbiBzdXBwb3J0IGlzIGV4cGVyaW1lbnRhbC5cbiAqL1xudmFyIEFuaW1hdGlvblRyaWdnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEBwYXJhbSB7P30gc3RhdGVzXG4gICAgICogQHBhcmFtIHs/fSBfdHJhbnNpdGlvbkFzdHNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBBbmltYXRpb25UcmlnZ2VyKG5hbWUsIHN0YXRlcywgX3RyYW5zaXRpb25Bc3RzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25Bc3RzID0gX3RyYW5zaXRpb25Bc3RzO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25GYWN0b3JpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3RhdGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChzdGF0ZU5hbWUpIHsgX3RoaXMuc3RhdGVzW3N0YXRlTmFtZV0gPSBjb3B5U3R5bGVzKHN0YXRlc1tzdGF0ZU5hbWVdLCBmYWxzZSk7IH0pO1xuICAgICAgICB2YXIgZXJyb3JzID0gW107XG4gICAgICAgIF90cmFuc2l0aW9uQXN0cy5mb3JFYWNoKGZ1bmN0aW9uIChhc3QpIHtcbiAgICAgICAgICAgIHZhciBleHBycyA9IHBhcnNlVHJhbnNpdGlvbkV4cHIoYXN0LmV4cHIsIGVycm9ycyk7XG4gICAgICAgICAgICB2YXIgc2VxdWVuY2VFcnJvcnMgPSB2YWxpZGF0ZUFuaW1hdGlvblNlcXVlbmNlKGFzdCk7XG4gICAgICAgICAgICBpZiAoc2VxdWVuY2VFcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzLnB1c2guYXBwbHkoZXJyb3JzLCBzZXF1ZW5jZUVycm9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50cmFuc2l0aW9uRmFjdG9yaWVzLnB1c2gobmV3IEFuaW1hdGlvblRyYW5zaXRpb25GYWN0b3J5KF90aGlzLm5hbWUsIGFzdCwgZXhwcnMsIHN0YXRlcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBMSU5FX1NUQVJUID0gJ1xcbiAtICc7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbmltYXRpb24gcGFyc2luZyBmb3IgdGhlIFwiICsgbmFtZSArIFwiIHRyaWdnZXIgaGF2ZSBmYWlsZWQ6XCIgKyBMSU5FX1NUQVJUICsgZXJyb3JzLmpvaW4oTElORV9TVEFSVCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY3VycmVudFN0YXRlXG4gICAgICogQHBhcmFtIHs/fSBuZXh0U3RhdGVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFuaW1hdGlvblRyaWdnZXIucHJvdG90eXBlLmNyZWF0ZUZhbGxiYWNrSW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbiAoY3VycmVudFN0YXRlLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gYmFja3VwU3RhdGVTdHlsZXMgPSB0aGlzLnN0YXRlc1snKiddIHx8IHt9O1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjdXJyZW50U3RhdGVTdHlsZXMgPSB0aGlzLnN0YXRlc1tjdXJyZW50U3RhdGVdIHx8IGJhY2t1cFN0YXRlU3R5bGVzO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBuZXh0U3RhdGVTdHlsZXMgPSB0aGlzLnN0YXRlc1tuZXh0U3RhdGVdIHx8IGJhY2t1cFN0YXRlU3R5bGVzO1xuICAgICAgICByZXR1cm4gY3JlYXRlVHJhbnNpdGlvbkluc3RydWN0aW9uKHRoaXMubmFtZSwgY3VycmVudFN0YXRlLCBuZXh0U3RhdGUsIG5leHRTdGF0ZSA9PSAndm9pZCcsIGN1cnJlbnRTdGF0ZVN0eWxlcywgbmV4dFN0YXRlU3R5bGVzLCBbXSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGN1cnJlbnRTdGF0ZVxuICAgICAqIEBwYXJhbSB7P30gbmV4dFN0YXRlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25UcmlnZ2VyLnByb3RvdHlwZS5tYXRjaFRyYW5zaXRpb24gPSBmdW5jdGlvbiAoY3VycmVudFN0YXRlLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgZm9yICh2YXIgLyoqIEB0eXBlIHs/fSAqLyBpID0gMDsgaSA8IHRoaXMudHJhbnNpdGlvbkZhY3Rvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcmVzdWx0ID0gdGhpcy50cmFuc2l0aW9uRmFjdG9yaWVzW2ldLm1hdGNoKGN1cnJlbnRTdGF0ZSwgbmV4dFN0YXRlKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBBbmltYXRpb25UcmlnZ2VyO1xufSgpKTtcbnZhciBBbmltYXRpb25UcmlnZ2VyQ29udGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uVHJpZ2dlckNvbnRleHQoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICAgIHRoaXMuc3RhdGVzID0ge307XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbnMgPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIEFuaW1hdGlvblRyaWdnZXJDb250ZXh0O1xufSgpKTtcbnZhciBBbmltYXRpb25UcmlnZ2VyVmlzaXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uVHJpZ2dlclZpc2l0b3IoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEBwYXJhbSB7P30gZGVmaW5pdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFuaW1hdGlvblRyaWdnZXJWaXNpdG9yLnByb3RvdHlwZS5idWlsZFRyaWdnZXIgPSBmdW5jdGlvbiAobmFtZSwgZGVmaW5pdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udGV4dCA9IG5ldyBBbmltYXRpb25UcmlnZ2VyQ29udGV4dCgpO1xuICAgICAgICBkZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChkZWYpIHsgcmV0dXJuIHZpc2l0QW5pbWF0aW9uTm9kZShfdGhpcywgZGVmLCBjb250ZXh0KTsgfSk7XG4gICAgICAgIHJldHVybiBuZXcgQW5pbWF0aW9uVHJpZ2dlcihuYW1lLCBjb250ZXh0LnN0YXRlcywgY29udGV4dC50cmFuc2l0aW9ucyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGFzdFxuICAgICAqIEBwYXJhbSB7P30gY29udGV4dFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uVHJpZ2dlclZpc2l0b3IucHJvdG90eXBlLnZpc2l0U3RhdGUgPSBmdW5jdGlvbiAoYXN0LCBjb250ZXh0KSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHN0eWxlcyA9IG5vcm1hbGl6ZVN0eWxlcyhhc3Quc3R5bGVzLnN0eWxlcyk7XG4gICAgICAgIGFzdC5uYW1lLnNwbGl0KC9cXHMqLFxccyovKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7IGNvbnRleHQuc3RhdGVzW25hbWVdID0gc3R5bGVzOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gYXN0XG4gICAgICogQHBhcmFtIHs/fSBjb250ZXh0XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25UcmlnZ2VyVmlzaXRvci5wcm90b3R5cGUudmlzaXRUcmFuc2l0aW9uID0gZnVuY3Rpb24gKGFzdCwgY29udGV4dCkge1xuICAgICAgICBjb250ZXh0LnRyYW5zaXRpb25zLnB1c2goYXN0KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gYXN0XG4gICAgICogQHBhcmFtIHs/fSBjb250ZXh0XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25UcmlnZ2VyVmlzaXRvci5wcm90b3R5cGUudmlzaXRTZXF1ZW5jZSA9IGZ1bmN0aW9uIChhc3QsIGNvbnRleHQpIHtcbiAgICAgICAgLy8gdGhlc2UgdmFsdWVzIGFyZSBub3QgdmlzaXRlZCBpbiB0aGlzIEFTVFxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBhc3RcbiAgICAgKiBAcGFyYW0gez99IGNvbnRleHRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFuaW1hdGlvblRyaWdnZXJWaXNpdG9yLnByb3RvdHlwZS52aXNpdEdyb3VwID0gZnVuY3Rpb24gKGFzdCwgY29udGV4dCkge1xuICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgYXJlIG5vdCB2aXNpdGVkIGluIHRoaXMgQVNUXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGFzdFxuICAgICAqIEBwYXJhbSB7P30gY29udGV4dFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uVHJpZ2dlclZpc2l0b3IucHJvdG90eXBlLnZpc2l0QW5pbWF0ZSA9IGZ1bmN0aW9uIChhc3QsIGNvbnRleHQpIHtcbiAgICAgICAgLy8gdGhlc2UgdmFsdWVzIGFyZSBub3QgdmlzaXRlZCBpbiB0aGlzIEFTVFxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBhc3RcbiAgICAgKiBAcGFyYW0gez99IGNvbnRleHRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFuaW1hdGlvblRyaWdnZXJWaXNpdG9yLnByb3RvdHlwZS52aXNpdFN0eWxlID0gZnVuY3Rpb24gKGFzdCwgY29udGV4dCkge1xuICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgYXJlIG5vdCB2aXNpdGVkIGluIHRoaXMgQVNUXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGFzdFxuICAgICAqIEBwYXJhbSB7P30gY29udGV4dFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uVHJpZ2dlclZpc2l0b3IucHJvdG90eXBlLnZpc2l0S2V5ZnJhbWVTZXF1ZW5jZSA9IGZ1bmN0aW9uIChhc3QsIGNvbnRleHQpIHtcbiAgICAgICAgLy8gdGhlc2UgdmFsdWVzIGFyZSBub3QgdmlzaXRlZCBpbiB0aGlzIEFTVFxuICAgIH07XG4gICAgcmV0dXJuIEFuaW1hdGlvblRyaWdnZXJWaXNpdG9yO1xufSgpKTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBNQVJLRURfRk9SX0FOSU1BVElPTl9DTEFTU05BTUUgPSAnbmctYW5pbWF0aW5nJztcbnZhciBNQVJLRURfRk9SX0FOSU1BVElPTl9TRUxFQ1RPUiA9ICcubmctYW5pbWF0aW5nJztcbnZhciBNQVJLRURfRk9SX1JFTU9WQUwgPSAnJCRuZ1JlbW92ZSc7XG52YXIgVk9JRF9TVEFURSA9ICd2b2lkJztcbnZhciBEb21BbmltYXRpb25FbmdpbmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gX2RyaXZlclxuICAgICAqIEBwYXJhbSB7P30gX25vcm1hbGl6ZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBEb21BbmltYXRpb25FbmdpbmUoX2RyaXZlciwgX25vcm1hbGl6ZXIpIHtcbiAgICAgICAgdGhpcy5fZHJpdmVyID0gX2RyaXZlcjtcbiAgICAgICAgdGhpcy5fbm9ybWFsaXplciA9IF9ub3JtYWxpemVyO1xuICAgICAgICB0aGlzLl9mbGFnZ2VkSW5zZXJ0cyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5fcXVldWVkUmVtb3ZhbHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX3F1ZXVlZFRyYW5zaXRpb25BbmltYXRpb25zID0gW107XG4gICAgICAgIHRoaXMuX2FjdGl2ZVRyYW5zaXRpb25BbmltYXRpb25zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50QW5pbWF0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudFRyaWdnZXJTdGF0ZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fdHJpZ2dlckxpc3RlbmVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fcGVuZGluZ0xpc3RlbmVyUmVtb3ZhbHMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShEb21BbmltYXRpb25FbmdpbmUucHJvdG90eXBlLCBcInF1ZXVlZFBsYXllcnNcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXVlZFRyYW5zaXRpb25BbmltYXRpb25zLm1hcChmdW5jdGlvbiAocSkgeyByZXR1cm4gcS5wbGF5ZXI7IH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRG9tQW5pbWF0aW9uRW5naW5lLnByb3RvdHlwZSwgXCJhY3RpdmVQbGF5ZXJzXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHBsYXllcnMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRBbmltYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGl2ZVBsYXllcnMpIHsgcmV0dXJuIHBsYXllcnMucHVzaC5hcHBseShwbGF5ZXJzLCBhY3RpdmVQbGF5ZXJzKTsgfSk7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSB0cmlnZ2VyXG4gICAgICogQHBhcmFtIHs/PX0gbmFtZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRG9tQW5pbWF0aW9uRW5naW5lLnByb3RvdHlwZS5yZWdpc3RlclRyaWdnZXIgPSBmdW5jdGlvbiAodHJpZ2dlciwgbmFtZSkge1xuICAgICAgICBuYW1lID0gbmFtZSB8fCB0cmlnZ2VyLm5hbWU7XG4gICAgICAgIGlmICh0aGlzLl90cmlnZ2Vyc1tuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RyaWdnZXJzW25hbWVdID0gYnVpbGRUcmlnZ2VyKG5hbWUsIHRyaWdnZXIuZGVmaW5pdGlvbnMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHs/fSBkb21GblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRG9tQW5pbWF0aW9uRW5naW5lLnByb3RvdHlwZS5vbkluc2VydCA9IGZ1bmN0aW9uIChlbGVtZW50LCBkb21Gbikge1xuICAgICAgICBpZiAoZWxlbWVudFsnbm9kZVR5cGUnXSA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9mbGFnZ2VkSW5zZXJ0cy5hZGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9tRm4oKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7P30gZG9tRm5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIERvbUFuaW1hdGlvbkVuZ2luZS5wcm90b3R5cGUub25SZW1vdmUgPSBmdW5jdGlvbiAoZWxlbWVudCwgZG9tRm4pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGVsZW1lbnRbJ25vZGVUeXBlJ10gIT0gMSkge1xuICAgICAgICAgICAgZG9tRm4oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBsb29rdXBSZWYgPSB0aGlzLl9lbGVtZW50VHJpZ2dlclN0YXRlcy5nZXQoZWxlbWVudCk7XG4gICAgICAgIGlmIChsb29rdXBSZWYpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHBvc3NpYmxlVHJpZ2dlcnMgPSBPYmplY3Qua2V5cyhsb29rdXBSZWYpO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gaGFzUmVtb3ZhbCA9IHBvc3NpYmxlVHJpZ2dlcnMuc29tZShmdW5jdGlvbiAodHJpZ2dlck5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBvbGRWYWx1ZSA9ICgobG9va3VwUmVmKSlbdHJpZ2dlck5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGluc3RydWN0aW9uID0gX3RoaXMuX3RyaWdnZXJzW3RyaWdnZXJOYW1lXS5tYXRjaFRyYW5zaXRpb24ob2xkVmFsdWUsIFZPSURfU1RBVEUpO1xuICAgICAgICAgICAgICAgIHJldHVybiAhIWluc3RydWN0aW9uO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaGFzUmVtb3ZhbCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbTUFSS0VEX0ZPUl9SRU1PVkFMXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcXVldWVkUmVtb3ZhbHMuc2V0KGVsZW1lbnQsIGRvbUZuKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcyBtZWFucyB0aGF0IHRoZXJlIGFyZSBubyBhbmltYXRpb25zIHRvIHRha2Ugb24gdGhpc1xuICAgICAgICAvLyBsZWF2ZSBvcGVyYXRpb24gdGhlcmVmb3JlIHdlIHNob3VsZCBmaXJlIHRoZSBkb25lfHN0YXJ0IGNhbGxiYWNrc1xuICAgICAgICBpZiAodGhpcy5fdHJpZ2dlckxpc3RlbmVycy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGVsZW1lbnRbTUFSS0VEX0ZPUl9SRU1PVkFMXSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZWRSZW1vdmFscy5zZXQoZWxlbWVudCwgZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vblJlbW92YWxUcmFuc2l0aW9uKGVsZW1lbnQpLmZvckVhY2goZnVuY3Rpb24gKHBsYXllcikgeyByZXR1cm4gcGxheWVyLmRlc3Ryb3koKTsgfSk7XG4gICAgICAgIGRvbUZuKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gez99IHByb3BlcnR5XG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRG9tQW5pbWF0aW9uRW5naW5lLnByb3RvdHlwZS5zZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdHJpZ2dlciA9IHRoaXMuX3RyaWdnZXJzW3Byb3BlcnR5XTtcbiAgICAgICAgaWYgKCF0cmlnZ2VyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcHJvdmlkZWQgYW5pbWF0aW9uIHRyaWdnZXIgXFxcIlwiICsgcHJvcGVydHkgKyBcIlxcXCIgaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQhXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGxvb2t1cFJlZiA9IHRoaXMuX2VsZW1lbnRUcmlnZ2VyU3RhdGVzLmdldChlbGVtZW50KTtcbiAgICAgICAgaWYgKCFsb29rdXBSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRUcmlnZ2VyU3RhdGVzLnNldChlbGVtZW50LCBsb29rdXBSZWYgPSB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gb2xkVmFsdWUgPSBsb29rdXBSZWYuaGFzT3duUHJvcGVydHkocHJvcGVydHkpID8gbG9va3VwUmVmW3Byb3BlcnR5XSA6IFZPSURfU1RBVEU7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbm9ybWFsaXplVHJpZ2dlclZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGluc3RydWN0aW9uID0gdHJpZ2dlci5tYXRjaFRyYW5zaXRpb24ob2xkVmFsdWUsIHZhbHVlKTtcbiAgICAgICAgICAgIGlmICghaW5zdHJ1Y3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSBkbyB0aGlzIHRvIG1ha2Ugc3VyZSB3ZSBhbHdheXMgaGF2ZSBhbiBhbmltYXRpb24gcGxheWVyIHNvXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBjYWxsYmFjayBvcGVyYXRpb25zIGFyZSBwcm9wZXJseSBjYWxsZWRcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbiA9IHRyaWdnZXIuY3JlYXRlRmFsbGJhY2tJbnN0cnVjdGlvbihvbGRWYWx1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hbmltYXRlVHJhbnNpdGlvbihlbGVtZW50LCBpbnN0cnVjdGlvbik7XG4gICAgICAgICAgICBsb29rdXBSZWZbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7P30gZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHs/fSBldmVudFBoYXNlXG4gICAgICogQHBhcmFtIHs/fSBjYWxsYmFja1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRG9tQW5pbWF0aW9uRW5naW5lLnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnROYW1lLCBldmVudFBoYXNlLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIWV2ZW50UGhhc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBsaXN0ZW4gb24gdGhlIGFuaW1hdGlvbiB0cmlnZ2VyIFxcXCJcIiArIGV2ZW50TmFtZSArIFwiXFxcIiBiZWNhdXNlIHRoZSBwcm92aWRlZCBldmVudCBpcyB1bmRlZmluZWQhXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fdHJpZ2dlcnNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGxpc3RlbiBvbiB0aGUgYW5pbWF0aW9uIHRyaWdnZXIgZXZlbnQgXFxcIlwiICsgZXZlbnRQaGFzZSArIFwiXFxcIiBiZWNhdXNlIHRoZSBhbmltYXRpb24gdHJpZ2dlciBcXFwiXCIgKyBldmVudE5hbWUgKyBcIlxcXCIgZG9lc24ndCBleGlzdCFcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZWxlbWVudExpc3RlbmVycyA9IHRoaXMuX3RyaWdnZXJMaXN0ZW5lcnMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICBpZiAoIWVsZW1lbnRMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyaWdnZXJMaXN0ZW5lcnMuc2V0KGVsZW1lbnQsIGVsZW1lbnRMaXN0ZW5lcnMgPSBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsaWRhdGVQbGF5ZXJFdmVudChldmVudE5hbWUsIGV2ZW50UGhhc2UpO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB0dXBsZSA9ICh7IHRyaWdnZXJOYW1lOiBldmVudE5hbWUsIHBoYXNlOiBldmVudFBoYXNlLCBjYWxsYmFjazogY2FsbGJhY2sgfSk7XG4gICAgICAgIGVsZW1lbnRMaXN0ZW5lcnMucHVzaCh0dXBsZSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0aGlzIGlzIHF1ZXVlZCB1cCBpbiB0aGUgZXZlbnQgdGhhdCBhIHJlbW92YWwgYW5pbWF0aW9uIGlzIHNldFxuICAgICAgICAgICAgLy8gdG8gZmlyZSBvbiB0aGUgZWxlbWVudCAodGhlIGxpc3RlbmVycyBuZWVkIHRvIGJlIHNldCBkdXJpbmcgZmx1c2gpXG4gICAgICAgICAgICBnZXRPclNldEFzSW5NYXAoX3RoaXMuX3BlbmRpbmdMaXN0ZW5lclJlbW92YWxzLCBlbGVtZW50LCBbXSkucHVzaCh0dXBsZSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIERvbUFuaW1hdGlvbkVuZ2luZS5wcm90b3R5cGUuX2NsZWFyUGVuZGluZ0xpc3RlbmVyUmVtb3ZhbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdMaXN0ZW5lclJlbW92YWxzLmZvckVhY2goZnVuY3Rpb24gKHR1cGxlcywgZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZWxlbWVudExpc3RlbmVycyA9IF90aGlzLl90cmlnZ2VyTGlzdGVuZXJzLmdldChlbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgdHVwbGVzLmZvckVhY2goZnVuY3Rpb24gKHR1cGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGluZGV4ID0gZWxlbWVudExpc3RlbmVycy5pbmRleE9mKHR1cGxlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcGVuZGluZ0xpc3RlbmVyUmVtb3ZhbHMuY2xlYXIoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZWxlbWVudFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRG9tQW5pbWF0aW9uRW5naW5lLnByb3RvdHlwZS5fb25SZW1vdmFsVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIC8vIHdoZW4gYSBwYXJlbnQgYW5pbWF0aW9uIGlzIHNldCB0byB0cmlnZ2VyIGEgcmVtb3ZhbCB3ZSB3YW50IHRvXG4gICAgICAgIC8vIGZpbmQgYWxsIG9mIHRoZSBjaGlsZHJlbiB0aGF0IGFyZSBjdXJyZW50bHkgYW5pbWF0aW5nIGFuZCBjbGVhclxuICAgICAgICAvLyB0aGVtIG91dCBieSBkZXN0cm95aW5nIGVhY2ggb2YgdGhlbS5cbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZWxtcyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChNQVJLRURfRk9SX0FOSU1BVElPTl9TRUxFQ1RPUik7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGVsbSA9IGVsbXNbaV07XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBhY3RpdmVQbGF5ZXJzID0gdGhpc18xLl9hY3RpdmVFbGVtZW50QW5pbWF0aW9ucy5nZXQoZWxtKTtcbiAgICAgICAgICAgIGlmIChhY3RpdmVQbGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlUGxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChwbGF5ZXIpIHsgcmV0dXJuIHBsYXllci5kZXN0cm95KCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gYWN0aXZlVHJhbnNpdGlvbnMgPSB0aGlzXzEuX2FjdGl2ZVRyYW5zaXRpb25BbmltYXRpb25zLmdldChlbG0pO1xuICAgICAgICAgICAgaWYgKGFjdGl2ZVRyYW5zaXRpb25zKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYWN0aXZlVHJhbnNpdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHBsYXllciA9IGFjdGl2ZVRyYW5zaXRpb25zW3RyaWdnZXJOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgdGhpc18xID0gdGhpcztcbiAgICAgICAgZm9yICh2YXIgLyoqIEB0eXBlIHs/fSAqLyBpID0gMDsgaSA8IGVsbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoLyoqIEB0eXBlIHs/fSAqLyBpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBtYWtlIGEgY29weSBvZiB0aGUgYXJyYXkgYmVjYXVzZSB0aGUgYWN0dWFsIHNvdXJjZSBhcnJheSBpcyBtb2RpZmllZFxuICAgICAgICAvLyBlYWNoIHRpbWUgYSBwbGF5ZXIgaXMgZmluaXNoZWQvZGVzdHJveWVkICh0aGUgZm9yRWFjaCBsb29wIHdvdWxkIGZhaWwgb3RoZXJ3aXNlKVxuICAgICAgICByZXR1cm4gY29weUFycmF5KC8qKiBAdHlwZSB7P30gKi8gKCh0aGlzLl9hY3RpdmVFbGVtZW50QW5pbWF0aW9ucy5nZXQoZWxlbWVudCkpKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gez99IGluc3RydWN0aW9uXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBEb21BbmltYXRpb25FbmdpbmUucHJvdG90eXBlLmFuaW1hdGVUcmFuc2l0aW9uID0gZnVuY3Rpb24gKGVsZW1lbnQsIGluc3RydWN0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHRyaWdnZXJOYW1lID0gaW5zdHJ1Y3Rpb24udHJpZ2dlck5hbWU7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHByZXZpb3VzUGxheWVycztcbiAgICAgICAgaWYgKGluc3RydWN0aW9uLmlzUmVtb3ZhbFRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIHByZXZpb3VzUGxheWVycyA9IHRoaXMuX29uUmVtb3ZhbFRyYW5zaXRpb24oZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcmV2aW91c1BsYXllcnMgPSBbXTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGV4aXN0aW5nVHJhbnNpdGlvbnMgPSB0aGlzLl9hY3RpdmVUcmFuc2l0aW9uQW5pbWF0aW9ucy5nZXQoZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBleGlzdGluZ1BsYXllciA9IGV4aXN0aW5nVHJhbnNpdGlvbnMgPyBleGlzdGluZ1RyYW5zaXRpb25zW3RyaWdnZXJOYW1lXSA6IG51bGw7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdQbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BsYXllcnMucHVzaChleGlzdGluZ1BsYXllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaXQncyBpbXBvcnRhbnQgdG8gZG8gdGhpcyBzdGVwIGJlZm9yZSBkZXN0cm95aW5nIHRoZSBwbGF5ZXJzXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIG9uRG9uZSBjYWxsYmFjayBiZWxvdyB3b24ndCBmaXJlIGJlZm9yZSB0aGlzXG4gICAgICAgIGVyYXNlU3R5bGVzKGVsZW1lbnQsIGluc3RydWN0aW9uLmZyb21TdHlsZXMpO1xuICAgICAgICAvLyB3ZSBmaXJzdCBydW4gdGhpcyBzbyB0aGF0IHRoZSBwcmV2aW91cyBhbmltYXRpb24gcGxheWVyXG4gICAgICAgIC8vIGRhdGEgY2FuIGJlIHBhc3NlZCBpbnRvIHRoZSBzdWNjZXNzaXZlIGFuaW1hdGlvbiBwbGF5ZXJzXG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHRvdGFsVGltZSA9IDA7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHBsYXllcnMgPSBpbnN0cnVjdGlvbi50aW1lbGluZXMubWFwKGZ1bmN0aW9uICh0aW1lbGluZUluc3RydWN0aW9uLCBpKSB7XG4gICAgICAgICAgICB0b3RhbFRpbWUgPSBNYXRoLm1heCh0b3RhbFRpbWUsIHRpbWVsaW5lSW5zdHJ1Y3Rpb24udG90YWxUaW1lKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fYnVpbGRQbGF5ZXIoZWxlbWVudCwgdGltZWxpbmVJbnN0cnVjdGlvbiwgcHJldmlvdXNQbGF5ZXJzLCBpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByZXZpb3VzUGxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChwcmV2aW91c1BsYXllcikgeyByZXR1cm4gcHJldmlvdXNQbGF5ZXIuZGVzdHJveSgpOyB9KTtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcGxheWVyID0gb3B0aW1pemVHcm91cFBsYXllcihwbGF5ZXJzKTtcbiAgICAgICAgcGxheWVyLm9uRG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwbGF5ZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZWxtVHJhbnNpdGlvbk1hcCA9IF90aGlzLl9hY3RpdmVUcmFuc2l0aW9uQW5pbWF0aW9ucy5nZXQoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoZWxtVHJhbnNpdGlvbk1hcCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBlbG1UcmFuc2l0aW9uTWFwW3RyaWdnZXJOYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZWxtVHJhbnNpdGlvbk1hcCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2FjdGl2ZVRyYW5zaXRpb25BbmltYXRpb25zLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGVGcm9tQXJyYXlNYXAoX3RoaXMuX2FjdGl2ZUVsZW1lbnRBbmltYXRpb25zLCBlbGVtZW50LCBwbGF5ZXIpO1xuICAgICAgICAgICAgc2V0U3R5bGVzKGVsZW1lbnQsIGluc3RydWN0aW9uLnRvU3R5bGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGVsbVRyYW5zaXRpb25NYXAgPSBnZXRPclNldEFzSW5NYXAodGhpcy5fYWN0aXZlVHJhbnNpdGlvbkFuaW1hdGlvbnMsIGVsZW1lbnQsIHt9KTtcbiAgICAgICAgZWxtVHJhbnNpdGlvbk1hcFt0cmlnZ2VyTmFtZV0gPSBwbGF5ZXI7XG4gICAgICAgIHRoaXMuX3F1ZXVlUGxheWVyKGVsZW1lbnQsIHRyaWdnZXJOYW1lLCBwbGF5ZXIsIG1ha2VBbmltYXRpb25FdmVudChlbGVtZW50LCB0cmlnZ2VyTmFtZSwgaW5zdHJ1Y3Rpb24uZnJvbVN0YXRlLCBpbnN0cnVjdGlvbi50b1N0YXRlLCBudWxsLCAvLyB0aGlzIHdpbGwgYmUgZmlsbGVkIGluIGR1cmluZyBldmVudCBjcmVhdGlvblxuICAgICAgICB0b3RhbFRpbWUpKTtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7P30gaW5zdHJ1Y3Rpb25zXG4gICAgICogQHBhcmFtIHs/PX0gcHJldmlvdXNQbGF5ZXJzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBEb21BbmltYXRpb25FbmdpbmUucHJvdG90eXBlLmFuaW1hdGVUaW1lbGluZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBpbnN0cnVjdGlvbnMsIHByZXZpb3VzUGxheWVycykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAocHJldmlvdXNQbGF5ZXJzID09PSB2b2lkIDApIHsgcHJldmlvdXNQbGF5ZXJzID0gW107IH1cbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcGxheWVycyA9IGluc3RydWN0aW9ucy5tYXAoZnVuY3Rpb24gKGluc3RydWN0aW9uLCBpKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBwbGF5ZXIgPSBfdGhpcy5fYnVpbGRQbGF5ZXIoZWxlbWVudCwgaW5zdHJ1Y3Rpb24sIHByZXZpb3VzUGxheWVycywgaSk7XG4gICAgICAgICAgICBwbGF5ZXIub25EZXN0cm95KGZ1bmN0aW9uICgpIHsgZGVsZXRlRnJvbUFycmF5TWFwKF90aGlzLl9hY3RpdmVFbGVtZW50QW5pbWF0aW9ucywgZWxlbWVudCwgcGxheWVyKTsgfSk7XG4gICAgICAgICAgICBfdGhpcy5fbWFya1BsYXllckFzQWN0aXZlKGVsZW1lbnQsIHBsYXllcik7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9wdGltaXplR3JvdXBQbGF5ZXIocGxheWVycyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gez99IGluc3RydWN0aW9uXG4gICAgICogQHBhcmFtIHs/fSBwcmV2aW91c1BsYXllcnNcbiAgICAgKiBAcGFyYW0gez89fSBpbmRleFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRG9tQW5pbWF0aW9uRW5naW5lLnByb3RvdHlwZS5fYnVpbGRQbGF5ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgaW5zdHJ1Y3Rpb24sIHByZXZpb3VzUGxheWVycywgaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSB2b2lkIDApIHsgaW5kZXggPSAwOyB9XG4gICAgICAgIC8vIG9ubHkgdGhlIHZlcnkgZmlyc3QgYW5pbWF0aW9uIGNhbiBhYnNvcmIgdGhlIHByZXZpb3VzIHN0eWxlcy4gVGhpc1xuICAgICAgICAvLyBpcyBoZXJlIHRvIHByZXZlbnQgdGhlIGFuIG92ZXJsYXAgc2l0dWF0aW9uIHdoZXJlIGEgZ3JvdXAgYW5pbWF0aW9uXG4gICAgICAgIC8vIGFic29yYnMgcHJldmlvdXMgc3R5bGVzIG11bHRpcGxlIHRpbWVzIGZvciB0aGUgc2FtZSBlbGVtZW50LlxuICAgICAgICBpZiAoaW5kZXggJiYgcHJldmlvdXNQbGF5ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgcHJldmlvdXNQbGF5ZXJzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyaXZlci5hbmltYXRlKGVsZW1lbnQsIHRoaXMuX25vcm1hbGl6ZUtleWZyYW1lcyhpbnN0cnVjdGlvbi5rZXlmcmFtZXMpLCBpbnN0cnVjdGlvbi5kdXJhdGlvbiwgaW5zdHJ1Y3Rpb24uZGVsYXksIGluc3RydWN0aW9uLmVhc2luZywgcHJldmlvdXNQbGF5ZXJzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30ga2V5ZnJhbWVzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBEb21BbmltYXRpb25FbmdpbmUucHJvdG90eXBlLl9ub3JtYWxpemVLZXlmcmFtZXMgPSBmdW5jdGlvbiAoa2V5ZnJhbWVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGVycm9ycyA9IFtdO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBub3JtYWxpemVkS2V5ZnJhbWVzID0gW107XG4gICAgICAgIGtleWZyYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChrZikge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbm9ybWFsaXplZEtleWZyYW1lID0ge307XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhrZikuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG5vcm1hbGl6ZWRQcm9wID0gcHJvcDtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBub3JtYWxpemVkVmFsdWUgPSBrZltwcm9wXTtcbiAgICAgICAgICAgICAgICBpZiAocHJvcCAhPSAnb2Zmc2V0Jykge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkUHJvcCA9IF90aGlzLl9ub3JtYWxpemVyLm5vcm1hbGl6ZVByb3BlcnR5TmFtZShwcm9wLCBlcnJvcnMpO1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkVmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX25vcm1hbGl6ZXIubm9ybWFsaXplU3R5bGVWYWx1ZShwcm9wLCBub3JtYWxpemVkUHJvcCwga2ZbcHJvcF0sIGVycm9ycyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRLZXlmcmFtZVtub3JtYWxpemVkUHJvcF0gPSBub3JtYWxpemVkVmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRLZXlmcmFtZXMucHVzaChub3JtYWxpemVkS2V5ZnJhbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIExJTkVfU1RBUlQgPSAnXFxuIC0gJztcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBhbmltYXRlIGR1ZSB0byB0aGUgZm9sbG93aW5nIGVycm9yczpcIiArIExJTkVfU1RBUlQgKyBlcnJvcnMuam9pbihMSU5FX1NUQVJUKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZWRLZXlmcmFtZXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gez99IHBsYXllclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRG9tQW5pbWF0aW9uRW5naW5lLnByb3RvdHlwZS5fbWFya1BsYXllckFzQWN0aXZlID0gZnVuY3Rpb24gKGVsZW1lbnQsIHBsYXllcikge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBlbGVtZW50QW5pbWF0aW9ucyA9IGdldE9yU2V0QXNJbk1hcCh0aGlzLl9hY3RpdmVFbGVtZW50QW5pbWF0aW9ucywgZWxlbWVudCwgW10pO1xuICAgICAgICBlbGVtZW50QW5pbWF0aW9ucy5wdXNoKHBsYXllcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gez99IHRyaWdnZXJOYW1lXG4gICAgICogQHBhcmFtIHs/fSBwbGF5ZXJcbiAgICAgKiBAcGFyYW0gez99IGV2ZW50XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBEb21BbmltYXRpb25FbmdpbmUucHJvdG90eXBlLl9xdWV1ZVBsYXllciA9IGZ1bmN0aW9uIChlbGVtZW50LCB0cmlnZ2VyTmFtZSwgcGxheWVyLCBldmVudCkge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB0dXBsZSA9ICh7IGVsZW1lbnQ6IGVsZW1lbnQsIHBsYXllcjogcGxheWVyLCB0cmlnZ2VyTmFtZTogdHJpZ2dlck5hbWUsIGV2ZW50OiBldmVudCB9KTtcbiAgICAgICAgdGhpcy5fcXVldWVkVHJhbnNpdGlvbkFuaW1hdGlvbnMucHVzaCh0dXBsZSk7XG4gICAgICAgIHBsYXllci5pbml0KCk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChNQVJLRURfRk9SX0FOSU1BVElPTl9DTEFTU05BTUUpO1xuICAgICAgICBwbGF5ZXIub25Eb25lKGZ1bmN0aW9uICgpIHsgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKE1BUktFRF9GT1JfQU5JTUFUSU9OX0NMQVNTTkFNRSk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBEb21BbmltYXRpb25FbmdpbmUucHJvdG90eXBlLl9mbHVzaFF1ZXVlZEFuaW1hdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfbG9vcF8yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gKCh0aGlzXzIuX3F1ZXVlZFRyYW5zaXRpb25BbmltYXRpb25zLnNoaWZ0KCkpKSwgcGxheWVyID0gX2EucGxheWVyLCBlbGVtZW50ID0gX2EuZWxlbWVudCwgdHJpZ2dlck5hbWUgPSBfYS50cmlnZ2VyTmFtZSwgZXZlbnQgPSBfYS5ldmVudDtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHBhcmVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB3aGlsZSAocGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIG1lYW5zIHRoYXQgYSBwYXJlbnQgZWxlbWVudCB3aWxsIG9yIHdpbGwgbm90XG4gICAgICAgICAgICAgICAgLy8gaGF2ZSBpdHMgb3duIGFuaW1hdGlvbiBvcGVyYXRpb24gd2hpY2ggaW4gdGhpcyBjYXNlXG4gICAgICAgICAgICAgICAgLy8gdGhlcmUncyBubyBwb2ludCBpbiBldmVuIHRyeWluZyB0byBkbyBhbiBhbmltYXRpb25cbiAgICAgICAgICAgICAgICBpZiAocGFyZW50W01BUktFRF9GT1JfUkVNT1ZBTF0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlLXBhcmVudExvb3BcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGxpc3RlbmVycyA9IHRoaXNfMi5fdHJpZ2dlckxpc3RlbmVycy5nZXQoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKHR1cGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0dXBsZS50cmlnZ2VyTmFtZSA9PSB0cmlnZ2VyTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuT25QbGF5ZXIocGxheWVyLCB0dXBsZS5waGFzZSwgZXZlbnQsIHR1cGxlLmNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgYSByZW1vdmFsIGV4aXN0cyBmb3IgdGhlIGdpdmVuIGVsZW1lbnQgdGhlbiB3ZSBuZWVkIGNhbmNlbFxuICAgICAgICAgICAgLy8gYWxsIHRoZSBxdWV1ZWQgcGxheWVycyBzbyB0aGF0IGEgcHJvcGVyIHJlbW92YWwgYW5pbWF0aW9uIGNhbiBnb1xuICAgICAgICAgICAgaWYgKHRoaXNfMi5fcXVldWVkUmVtb3ZhbHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc18yLl9tYXJrUGxheWVyQXNBY3RpdmUoZWxlbWVudCwgcGxheWVyKTtcbiAgICAgICAgICAgIC8vIGluIHRoZSBldmVudCB0aGF0IGFuIGFuaW1hdGlvbiB0aHJvd3MgYW4gZXJyb3IgdGhlbiB3ZSBkb1xuICAgICAgICAgICAgLy8gbm90IHdhbnQgdG8gcmUtcnVuIGFuaW1hdGlvbnMgb24gYW55IHByZXZpb3VzIGFuaW1hdGlvbnNcbiAgICAgICAgICAgIC8vIGlmIHRoZXkgaGF2ZSBhbHJlYWR5IGJlZW4ga2lja2VkIG9mZiBiZWZvcmVoYW5kXG4gICAgICAgICAgICBwbGF5ZXIuaW5pdCgpO1xuICAgICAgICAgICAgaWYgKCFwbGF5ZXIuaGFzU3RhcnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHRoaXNfMiA9IHRoaXM7XG4gICAgICAgIHBhcmVudExvb3A6IHdoaWxlICh0aGlzLl9xdWV1ZWRUcmFuc2l0aW9uQW5pbWF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZV8xID0gX2xvb3BfMigpO1xuICAgICAgICAgICAgc3dpdGNoIChzdGF0ZV8xKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNvbnRpbnVlLXBhcmVudExvb3BcIjogY29udGludWUgcGFyZW50TG9vcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBEb21BbmltYXRpb25FbmdpbmUucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBsZWF2ZUxpc3RlbmVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fcXVldWVkUmVtb3ZhbHMuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHR1cGxlID0gX3RoaXMuX3BlbmRpbmdMaXN0ZW5lclJlbW92YWxzLmdldChlbGVtZW50KTtcbiAgICAgICAgICAgIGlmICh0dXBsZSkge1xuICAgICAgICAgICAgICAgIGxlYXZlTGlzdGVuZXJzLnNldChlbGVtZW50LCB0dXBsZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3BlbmRpbmdMaXN0ZW5lclJlbW92YWxzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2NsZWFyUGVuZGluZ0xpc3RlbmVyUmVtb3ZhbHMoKTtcbiAgICAgICAgdGhpcy5fcGVuZGluZ0xpc3RlbmVyUmVtb3ZhbHMgPSBsZWF2ZUxpc3RlbmVycztcbiAgICAgICAgdGhpcy5fZmx1c2hRdWV1ZWRBbmltYXRpb25zKCk7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGZsdXNoQWdhaW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcXVldWVkUmVtb3ZhbHMuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIGFuIGl0ZW0gdGhhdCB3YXMgaW5zZXJ0ZWQvcmVtb3ZlZCBpbiB0aGUgc2FtZSBmbHVzaCBtZWFuc1xuICAgICAgICAgICAgLy8gdGhhdCBhbiBhbmltYXRpb24gc2hvdWxkIG5vdCBoYXBwZW4gYW55d2F5XG4gICAgICAgICAgICBpZiAoX3RoaXMuX2ZsYWdnZWRJbnNlcnRzLmhhcyhlbGVtZW50KSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBwYXJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcGxheWVycyA9IFtdO1xuICAgICAgICAgICAgd2hpbGUgKHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlcmUgaXMgbm8gcmVhc29uIHRvIGV2ZW4gdHJ5IHRvXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudFtNQVJLRURfRk9SX1JFTU9WQUxdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbWF0Y2ggPSBfdGhpcy5fYWN0aXZlRWxlbWVudEFuaW1hdGlvbnMuZ2V0KHBhcmVudCk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcnMucHVzaC5hcHBseShwbGF5ZXJzLCBtYXRjaCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoZSBsb29wIHdhcyB1bmFibGUgdG8gZmluZCBhbiBwYXJlbnQgdGhhdCBpcyBhbmltYXRpbmcgZXZlblxuICAgICAgICAgICAgLy8gdGhvdWdoIHRoaXMgZWxlbWVudCBoYXMgc2V0IHRvIGJlIHJlbW92ZWQsIHNvIHRoZSBhbGdvcml0aG1cbiAgICAgICAgICAgIC8vIHNob3VsZCBjaGVjayB0byBzZWUgaWYgdGhlcmUgYXJlIGFueSB0cmlnZ2VycyBvbiB0aGUgZWxlbWVudFxuICAgICAgICAgICAgLy8gdGhhdCBhcmUgcHJlc2VudCB0byBoYW5kbGUgYSBsZWF2ZSBhbmltYXRpb24gYW5kIHRoZW4gc2V0dXBcbiAgICAgICAgICAgIC8vIHRob3NlIHBsYXllcnMgdG8gZmFjaWxpdGF0ZSB0aGUgY2FsbGJhY2sgYWZ0ZXIgZG9uZVxuICAgICAgICAgICAgaWYgKHBsYXllcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIG1lYW5zIHRoYXQgdGhlIGVsZW1lbnQgaGFzIHZhbGlkIHN0YXRlIHRyaWdnZXJzXG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gc3RhdGVEZXRhaWxzXzEgPSBfdGhpcy5fZWxlbWVudFRyaWdnZXJTdGF0ZXMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZURldGFpbHNfMSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZURldGFpbHNfMSkuZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlck5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsdXNoQWdhaW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gb2xkVmFsdWUgPSBzdGF0ZURldGFpbHNfMVt0cmlnZ2VyTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpbnN0cnVjdGlvbiA9IF90aGlzLl90cmlnZ2Vyc1t0cmlnZ2VyTmFtZV0ubWF0Y2hUcmFuc2l0aW9uKG9sZFZhbHVlLCBWT0lEX1NUQVRFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0cnVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcnMucHVzaChfdGhpcy5hbmltYXRlVHJhbnNpdGlvbihlbGVtZW50LCBpbnN0cnVjdGlvbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZXZlbnQgPSBtYWtlQW5pbWF0aW9uRXZlbnQoZWxlbWVudCwgdHJpZ2dlck5hbWUsIG9sZFZhbHVlLCBWT0lEX1NUQVRFLCAnJywgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcGxheWVyID0gbmV3IE5vb3BBbmltYXRpb25QbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fcXVldWVQbGF5ZXIoZWxlbWVudCwgdHJpZ2dlck5hbWUsIHBsYXllciwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxheWVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBvcHRpbWl6ZUdyb3VwUGxheWVyKHBsYXllcnMpLm9uRG9uZShjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcXVldWVkUmVtb3ZhbHMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fZmxhZ2dlZEluc2VydHMuY2xlYXIoKTtcbiAgICAgICAgLy8gdGhpcyBtZWFucyB0aGF0IG9uZSBvciBtb3JlIGxlYXZlIGFuaW1hdGlvbnMgd2VyZSBkZXRlY3RlZFxuICAgICAgICBpZiAoZmx1c2hBZ2Fpbikge1xuICAgICAgICAgICAgdGhpcy5fZmx1c2hRdWV1ZWRBbmltYXRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLl9jbGVhclBlbmRpbmdMaXN0ZW5lclJlbW92YWxzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBEb21BbmltYXRpb25FbmdpbmU7XG59KCkpO1xuLyoqXG4gKiBAcGFyYW0gez99IG1hcFxuICogQHBhcmFtIHs/fSBrZXlcbiAqIEBwYXJhbSB7P30gZGVmYXVsdFZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBnZXRPclNldEFzSW5NYXAobWFwLCBrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIHZhbHVlID0gbWFwLmdldChrZXkpO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgbWFwLnNldChrZXksIHZhbHVlID0gZGVmYXVsdFZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IG1hcFxuICogQHBhcmFtIHs/fSBrZXlcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIGRlbGV0ZUZyb21BcnJheU1hcChtYXAsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBhcnIgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGFycikge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpbmRleCA9IGFyci5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIG1hcC5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogQHBhcmFtIHs/fSBwbGF5ZXJzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBvcHRpbWl6ZUdyb3VwUGxheWVyKHBsYXllcnMpIHtcbiAgICBzd2l0Y2ggKHBsYXllcnMubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9vcEFuaW1hdGlvblBsYXllcigpO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyc1swXTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgybVBbmltYXRpb25Hcm91cFBsYXllcihwbGF5ZXJzKTtcbiAgICB9XG59XG4vKipcbiAqIEBwYXJhbSB7P30gc291cmNlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlKSB7XG4gICAgcmV0dXJuIHNvdXJjZSA/IHNvdXJjZS5zcGxpY2UoMCkgOiBbXTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSB0cmlnZ2VyTmFtZVxuICogQHBhcmFtIHs/fSBldmVudE5hbWVcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlUGxheWVyRXZlbnQodHJpZ2dlck5hbWUsIGV2ZW50TmFtZSkge1xuICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XG4gICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgY2FzZSAnZG9uZSc6XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcHJvdmlkZWQgYW5pbWF0aW9uIHRyaWdnZXIgZXZlbnQgXFxcIlwiICsgZXZlbnROYW1lICsgXCJcXFwiIGZvciB0aGUgYW5pbWF0aW9uIHRyaWdnZXIgXFxcIlwiICsgdHJpZ2dlck5hbWUgKyBcIlxcXCIgaXMgbm90IHN1cHBvcnRlZCFcIik7XG4gICAgfVxufVxuLyoqXG4gKiBAcGFyYW0gez99IHBsYXllclxuICogQHBhcmFtIHs/fSBldmVudE5hbWVcbiAqIEBwYXJhbSB7P30gYmFzZUV2ZW50XG4gKiBAcGFyYW0gez99IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBsaXN0ZW5PblBsYXllcihwbGF5ZXIsIGV2ZW50TmFtZSwgYmFzZUV2ZW50LCBjYWxsYmFjaykge1xuICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XG4gICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgIHBsYXllci5vblN0YXJ0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBldmVudCA9IGNvcHlBbmltYXRpb25FdmVudChiYXNlRXZlbnQpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnBoYXNlTmFtZSA9ICdzdGFydCc7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZG9uZSc6XG4gICAgICAgICAgICBwbGF5ZXIub25Eb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBldmVudCA9IGNvcHlBbmltYXRpb25FdmVudChiYXNlRXZlbnQpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnBoYXNlTmFtZSA9ICdkb25lJztcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbi8qKlxuICogQHBhcmFtIHs/fSBlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBjb3B5QW5pbWF0aW9uRXZlbnQoZSkge1xuICAgIHJldHVybiBtYWtlQW5pbWF0aW9uRXZlbnQoZS5lbGVtZW50LCBlLnRyaWdnZXJOYW1lLCBlLmZyb21TdGF0ZSwgZS50b1N0YXRlLCBlLnBoYXNlTmFtZSwgZS50b3RhbFRpbWUpO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IGVsZW1lbnRcbiAqIEBwYXJhbSB7P30gdHJpZ2dlck5hbWVcbiAqIEBwYXJhbSB7P30gZnJvbVN0YXRlXG4gKiBAcGFyYW0gez99IHRvU3RhdGVcbiAqIEBwYXJhbSB7P30gcGhhc2VOYW1lXG4gKiBAcGFyYW0gez99IHRvdGFsVGltZVxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gbWFrZUFuaW1hdGlvbkV2ZW50KGVsZW1lbnQsIHRyaWdnZXJOYW1lLCBmcm9tU3RhdGUsIHRvU3RhdGUsIHBoYXNlTmFtZSwgdG90YWxUaW1lKSB7XG4gICAgcmV0dXJuICh7IGVsZW1lbnQ6IGVsZW1lbnQsIHRyaWdnZXJOYW1lOiB0cmlnZ2VyTmFtZSwgZnJvbVN0YXRlOiBmcm9tU3RhdGUsIHRvU3RhdGU6IHRvU3RhdGUsIHBoYXNlTmFtZTogcGhhc2VOYW1lLCB0b3RhbFRpbWU6IHRvdGFsVGltZSB9KTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVHJpZ2dlclZhbHVlKHZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPyAnMScgOiAnMCc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPyB2YWx1ZS50b1N0cmluZygpIDogbnVsbDtcbiAgICB9XG59XG4vKipcbiAqIFxcQGV4cGVyaW1lbnRhbCBBbmltYXRpb24gc3VwcG9ydCBpcyBleHBlcmltZW50YWwuXG4gKiBAYWJzdHJhY3RcbiAqL1xudmFyIEFuaW1hdGlvblN0eWxlTm9ybWFsaXplciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAcGFyYW0gez99IHByb3BlcnR5TmFtZVxuICAgICAqIEBwYXJhbSB7P30gZXJyb3JzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIucHJvdG90eXBlLm5vcm1hbGl6ZVByb3BlcnR5TmFtZSA9IGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUsIGVycm9ycykgeyB9O1xuICAgIC8qKlxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEBwYXJhbSB7P30gdXNlclByb3ZpZGVkUHJvcGVydHlcbiAgICAgKiBAcGFyYW0gez99IG5vcm1hbGl6ZWRQcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcGFyYW0gez99IGVycm9yc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyLnByb3RvdHlwZS5ub3JtYWxpemVTdHlsZVZhbHVlID0gZnVuY3Rpb24gKHVzZXJQcm92aWRlZFByb3BlcnR5LCBub3JtYWxpemVkUHJvcGVydHksIHZhbHVlLCBlcnJvcnMpIHsgfTtcbiAgICByZXR1cm4gQW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyO1xufSgpKTtcbi8qKlxuICogXFxAZXhwZXJpbWVudGFsIEFuaW1hdGlvbiBzdXBwb3J0IGlzIGV4cGVyaW1lbnRhbC5cbiAqL1xudmFyIE5vb3BBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vb3BBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gcHJvcGVydHlOYW1lXG4gICAgICogQHBhcmFtIHs/fSBlcnJvcnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIE5vb3BBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIucHJvdG90eXBlLm5vcm1hbGl6ZVByb3BlcnR5TmFtZSA9IGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUsIGVycm9ycykgeyByZXR1cm4gcHJvcGVydHlOYW1lOyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdXNlclByb3ZpZGVkUHJvcGVydHlcbiAgICAgKiBAcGFyYW0gez99IG5vcm1hbGl6ZWRQcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcGFyYW0gez99IGVycm9yc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTm9vcEFuaW1hdGlvblN0eWxlTm9ybWFsaXplci5wcm90b3R5cGUubm9ybWFsaXplU3R5bGVWYWx1ZSA9IGZ1bmN0aW9uICh1c2VyUHJvdmlkZWRQcm9wZXJ0eSwgbm9ybWFsaXplZFByb3BlcnR5LCB2YWx1ZSwgZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIE5vb3BBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXI7XG59KCkpO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIEFuaW1hdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBpbnB1dFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEFuaW1hdGlvbihpbnB1dCkge1xuICAgICAgICB2YXIgYXN0ID0gQXJyYXkuaXNBcnJheShpbnB1dCkgPyBzZXF1ZW5jZShpbnB1dCkgOiBpbnB1dDtcbiAgICAgICAgdmFyIGVycm9ycyA9IHZhbGlkYXRlQW5pbWF0aW9uU2VxdWVuY2UoYXN0KTtcbiAgICAgICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImFuaW1hdGlvbiB2YWxpZGF0aW9uIGZhaWxlZDpcXG5cIiArIGVycm9ycy5qb2luKFwiXFxuXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uQXN0ID0gYXN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHN0YXJ0aW5nU3R5bGVzXG4gICAgICogQHBhcmFtIHs/fSBkZXN0aW5hdGlvblN0eWxlc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uLnByb3RvdHlwZS5idWlsZFRpbWVsaW5lcyA9IGZ1bmN0aW9uIChzdGFydGluZ1N0eWxlcywgZGVzdGluYXRpb25TdHlsZXMpIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gc3RhcnQgPSBBcnJheS5pc0FycmF5KHN0YXJ0aW5nU3R5bGVzKSA/IG5vcm1hbGl6ZVN0eWxlcyhzdGFydGluZ1N0eWxlcykgOiAoc3RhcnRpbmdTdHlsZXMpO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBkZXN0ID0gQXJyYXkuaXNBcnJheShkZXN0aW5hdGlvblN0eWxlcykgPyBub3JtYWxpemVTdHlsZXMoZGVzdGluYXRpb25TdHlsZXMpIDogKGRlc3RpbmF0aW9uU3R5bGVzKTtcbiAgICAgICAgcmV0dXJuIGJ1aWxkQW5pbWF0aW9uS2V5ZnJhbWVzKHRoaXMuX2FuaW1hdGlvbkFzdCwgc3RhcnQsIGRlc3QpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBpbmplY3RvclxuICAgICAqIEBwYXJhbSB7P30gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7Pz19IHN0YXJ0aW5nU3R5bGVzXG4gICAgICogQHBhcmFtIHs/PX0gZGVzdGluYXRpb25TdHlsZXNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFuaW1hdGlvbi5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKGluamVjdG9yLCBlbGVtZW50LCBzdGFydGluZ1N0eWxlcywgZGVzdGluYXRpb25TdHlsZXMpIHtcbiAgICAgICAgaWYgKHN0YXJ0aW5nU3R5bGVzID09PSB2b2lkIDApIHsgc3RhcnRpbmdTdHlsZXMgPSB7fTsgfVxuICAgICAgICBpZiAoZGVzdGluYXRpb25TdHlsZXMgPT09IHZvaWQgMCkgeyBkZXN0aW5hdGlvblN0eWxlcyA9IHt9OyB9XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGluc3RydWN0aW9ucyA9IHRoaXMuYnVpbGRUaW1lbGluZXMoc3RhcnRpbmdTdHlsZXMsIGRlc3RpbmF0aW9uU3R5bGVzKTtcbiAgICAgICAgLy8gbm90ZSB0aGUgY29kZSBiZWxvdyBpcyBvbmx5IGhlcmUgdG8gbWFrZSB0aGUgdGVzdHMgaGFwcHkgKG9uY2UgdGhlIG5ldyByZW5kZXJlciBpc1xuICAgICAgICAvLyB3aXRoaW4gY29yZSB0aGVuIHRoZSBjb2RlIGJlbG93IHdpbGwgaW50ZXJhY3Qgd2l0aCBSZW5kZXJlci50cmFuc2l0aW9uKC4uLikpXG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGRyaXZlciA9IGluamVjdG9yLmdldChBbmltYXRpb25Ecml2ZXIpO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBub3JtYWxpemVyID0gaW5qZWN0b3IuZ2V0KEFuaW1hdGlvblN0eWxlTm9ybWFsaXplcik7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGVuZ2luZSA9IG5ldyBEb21BbmltYXRpb25FbmdpbmUoZHJpdmVyLCBub3JtYWxpemVyKTtcbiAgICAgICAgcmV0dXJuIGVuZ2luZS5hbmltYXRlVGltZWxpbmUoZWxlbWVudCwgaW5zdHJ1Y3Rpb25zKTtcbiAgICB9O1xuICAgIHJldHVybiBBbmltYXRpb247XG59KCkpO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIFdlYkFuaW1hdGlvbnNTdHlsZU5vcm1hbGl6ZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhXZWJBbmltYXRpb25zU3R5bGVOb3JtYWxpemVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFdlYkFuaW1hdGlvbnNTdHlsZU5vcm1hbGl6ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBwcm9wZXJ0eU5hbWVcbiAgICAgKiBAcGFyYW0gez99IGVycm9yc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgV2ViQW5pbWF0aW9uc1N0eWxlTm9ybWFsaXplci5wcm90b3R5cGUubm9ybWFsaXplUHJvcGVydHlOYW1lID0gZnVuY3Rpb24gKHByb3BlcnR5TmFtZSwgZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiBkYXNoQ2FzZVRvQ2FtZWxDYXNlKHByb3BlcnR5TmFtZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHVzZXJQcm92aWRlZFByb3BlcnR5XG4gICAgICogQHBhcmFtIHs/fSBub3JtYWxpemVkUHJvcGVydHlcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICogQHBhcmFtIHs/fSBlcnJvcnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFdlYkFuaW1hdGlvbnNTdHlsZU5vcm1hbGl6ZXIucHJvdG90eXBlLm5vcm1hbGl6ZVN0eWxlVmFsdWUgPSBmdW5jdGlvbiAodXNlclByb3ZpZGVkUHJvcGVydHksIG5vcm1hbGl6ZWRQcm9wZXJ0eSwgdmFsdWUsIGVycm9ycykge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB1bml0ID0gJyc7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHN0clZhbCA9IHZhbHVlLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgICAgICBpZiAoRElNRU5TSU9OQUxfUFJPUF9NQVBbbm9ybWFsaXplZFByb3BlcnR5XSAmJiB2YWx1ZSAhPT0gMCAmJiB2YWx1ZSAhPT0gJzAnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHVuaXQgPSAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdmFsQW5kU3VmZml4TWF0Y2ggPSB2YWx1ZS5tYXRjaCgvXlsrLV0/W1xcZFxcLl0rKFthLXpdKikkLyk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbEFuZFN1ZmZpeE1hdGNoICYmIHZhbEFuZFN1ZmZpeE1hdGNoWzFdLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKFwiUGxlYXNlIHByb3ZpZGUgYSBDU1MgdW5pdCB2YWx1ZSBmb3IgXCIgKyB1c2VyUHJvdmlkZWRQcm9wZXJ0eSArIFwiOlwiICsgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyVmFsICsgdW5pdDtcbiAgICB9O1xuICAgIHJldHVybiBXZWJBbmltYXRpb25zU3R5bGVOb3JtYWxpemVyO1xufShBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIpKTtcbnZhciBESU1FTlNJT05BTF9QUk9QX01BUCA9IG1ha2VCb29sZWFuTWFwKCd3aWR0aCxoZWlnaHQsbWluV2lkdGgsbWluSGVpZ2h0LG1heFdpZHRoLG1heEhlaWdodCxsZWZ0LHRvcCxib3R0b20scmlnaHQsZm9udFNpemUsb3V0bGluZVdpZHRoLG91dGxpbmVPZmZzZXQscGFkZGluZ1RvcCxwYWRkaW5nTGVmdCxwYWRkaW5nQm90dG9tLHBhZGRpbmdSaWdodCxtYXJnaW5Ub3AsbWFyZ2luTGVmdCxtYXJnaW5Cb3R0b20sbWFyZ2luUmlnaHQsYm9yZGVyUmFkaXVzLGJvcmRlcldpZHRoLGJvcmRlclRvcFdpZHRoLGJvcmRlckxlZnRXaWR0aCxib3JkZXJSaWdodFdpZHRoLGJvcmRlckJvdHRvbVdpZHRoLHRleHRJbmRlbnQnXG4gICAgLnNwbGl0KCcsJykpO1xuLyoqXG4gKiBAcGFyYW0gez99IGtleXNcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIG1ha2VCb29sZWFuTWFwKGtleXMpIHtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBtYXAgPSB7fTtcbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gbWFwW2tleV0gPSB0cnVlOyB9KTtcbiAgICByZXR1cm4gbWFwO1xufVxudmFyIERBU0hfQ0FTRV9SRUdFWFAgPSAvLSsoW2EtejAtOV0pL2c7XG4vKipcbiAqIEBwYXJhbSB7P30gaW5wdXRcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIGRhc2hDYXNlVG9DYW1lbENhc2UoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZShEQVNIX0NBU0VfUkVHRVhQLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBtW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1bMV0udG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbn1cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBERUZBVUxUX1NUQVRFX1ZBTFVFID0gJ3ZvaWQnO1xudmFyIERFRkFVTFRfU1RBVEVfU1RZTEVTID0gJyonO1xudmFyIE5vb3BBbmltYXRpb25FbmdpbmUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOb29wQW5pbWF0aW9uRW5naW5lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5vb3BBbmltYXRpb25FbmdpbmUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9saXN0ZW5lcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIF90aGlzLl9jaGFuZ2VzID0gW107XG4gICAgICAgIF90aGlzLl9mbGFnZ2VkUmVtb3ZhbHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIF90aGlzLl9vbkRvbmVGbnMgPSBbXTtcbiAgICAgICAgX3RoaXMuX3RyaWdnZXJTdHlsZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdHJpZ2dlclxuICAgICAqIEBwYXJhbSB7Pz19IG5hbWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIE5vb3BBbmltYXRpb25FbmdpbmUucHJvdG90eXBlLnJlZ2lzdGVyVHJpZ2dlciA9IGZ1bmN0aW9uICh0cmlnZ2VyLCBuYW1lKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lIHx8IHRyaWdnZXIubmFtZTtcbiAgICAgICAgaWYgKHRoaXMuX3RyaWdnZXJTdHlsZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBzdGF0ZU1hcCA9IHt9O1xuICAgICAgICB0cmlnZ2VyLmRlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGRlZikge1xuICAgICAgICAgICAgaWYgKGRlZi50eXBlID09PSAwIC8qIFN0YXRlICovKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gc3RhdGVEZWYgPSAoZGVmKTtcbiAgICAgICAgICAgICAgICBzdGF0ZU1hcFtzdGF0ZURlZi5uYW1lXSA9IG5vcm1hbGl6ZVN0eWxlcyhzdGF0ZURlZi5zdHlsZXMuc3R5bGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJTdHlsZXNbbmFtZV0gPSBzdGF0ZU1hcDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7P30gZG9tRm5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIE5vb3BBbmltYXRpb25FbmdpbmUucHJvdG90eXBlLm9uSW5zZXJ0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGRvbUZuKSB7IGRvbUZuKCk7IH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHs/fSBkb21GblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTm9vcEFuaW1hdGlvbkVuZ2luZS5wcm90b3R5cGUub25SZW1vdmUgPSBmdW5jdGlvbiAoZWxlbWVudCwgZG9tRm4pIHtcbiAgICAgICAgZG9tRm4oKTtcbiAgICAgICAgaWYgKGVsZW1lbnRbJ25vZGVUeXBlJ10gPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fZmxhZ2dlZFJlbW92YWxzLmFkZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHs/fSBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIE5vb3BBbmltYXRpb25FbmdpbmUucHJvdG90eXBlLnNldFByb3BlcnR5ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBzdG9yYWdlUHJvcCA9IG1ha2VTdG9yYWdlUHJvcChwcm9wZXJ0eSk7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG9sZFZhbHVlID0gZWxlbWVudFtzdG9yYWdlUHJvcF0gfHwgREVGQVVMVF9TVEFURV9WQUxVRTtcbiAgICAgICAgdGhpcy5fY2hhbmdlcy5wdXNoKC8qKiBAdHlwZSB7P30gKi8gKHsgZWxlbWVudDogZWxlbWVudCwgb2xkVmFsdWU6IG9sZFZhbHVlLCBuZXdWYWx1ZTogdmFsdWUsIHRyaWdnZXJOYW1lOiBwcm9wZXJ0eSB9KSk7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHRyaWdnZXJTdGF0ZVN0eWxlcyA9IHRoaXMuX3RyaWdnZXJTdHlsZXNbcHJvcGVydHldIHx8IHt9O1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBmcm9tU3RhdGVTdHlsZXMgPSB0cmlnZ2VyU3RhdGVTdHlsZXNbb2xkVmFsdWVdIHx8IHRyaWdnZXJTdGF0ZVN0eWxlc1tERUZBVUxUX1NUQVRFX1NUWUxFU107XG4gICAgICAgIGlmIChmcm9tU3RhdGVTdHlsZXMpIHtcbiAgICAgICAgICAgIGVyYXNlU3R5bGVzKGVsZW1lbnQsIGZyb21TdGF0ZVN0eWxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudFtzdG9yYWdlUHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fb25Eb25lRm5zLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdG9TdGF0ZVN0eWxlcyA9IHRyaWdnZXJTdGF0ZVN0eWxlc1t2YWx1ZV0gfHwgdHJpZ2dlclN0YXRlU3R5bGVzW0RFRkFVTFRfU1RBVEVfU1RZTEVTXTtcbiAgICAgICAgICAgIGlmICh0b1N0YXRlU3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgc2V0U3R5bGVzKGVsZW1lbnQsIHRvU3RhdGVTdHlsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7P30gZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHs/fSBldmVudFBoYXNlXG4gICAgICogQHBhcmFtIHs/fSBjYWxsYmFja1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgTm9vcEFuaW1hdGlvbkVuZ2luZS5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50TmFtZSwgZXZlbnRQaGFzZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzLmdldChlbGVtZW50KTtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVycy5zZXQoZWxlbWVudCwgbGlzdGVuZXJzID0gW10pO1xuICAgICAgICB9XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHR1cGxlID0gKHsgdHJpZ2dlck5hbWU6IGV2ZW50TmFtZSwgZXZlbnRQaGFzZTogZXZlbnRQaGFzZSwgY2FsbGJhY2s6IGNhbGxiYWNrIH0pO1xuICAgICAgICBsaXN0ZW5lcnMucHVzaCh0dXBsZSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiB0dXBsZS5kb1JlbW92ZSA9IHRydWU7IH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIE5vb3BBbmltYXRpb25FbmdpbmUucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBvblN0YXJ0Q2FsbGJhY2tzID0gW107XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG9uRG9uZUNhbGxiYWNrcyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBsaXN0ZW5lclxuICAgICAgICAgKiBAcGFyYW0gez99IGRhdGFcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUxpc3RlbmVyKGxpc3RlbmVyLCBkYXRhKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBwaGFzZSA9IGxpc3RlbmVyLmV2ZW50UGhhc2U7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBldmVudCA9IG1ha2VBbmltYXRpb25FdmVudCQxKGRhdGEuZWxlbWVudCwgZGF0YS50cmlnZ2VyTmFtZSwgZGF0YS5vbGRWYWx1ZSwgZGF0YS5uZXdWYWx1ZSwgcGhhc2UsIDApO1xuICAgICAgICAgICAgaWYgKHBoYXNlID09ICdzdGFydCcpIHtcbiAgICAgICAgICAgICAgICBvblN0YXJ0Q2FsbGJhY2tzLnB1c2goZnVuY3Rpb24gKCkgeyByZXR1cm4gbGlzdGVuZXIuY2FsbGJhY2soZXZlbnQpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBoYXNlID09ICdkb25lJykge1xuICAgICAgICAgICAgICAgIG9uRG9uZUNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGxpc3RlbmVyLmNhbGxiYWNrKGV2ZW50KTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2hhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGVsZW1lbnQgPSBjaGFuZ2UuZWxlbWVudDtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGxpc3RlbmVycyA9IF90aGlzLl9saXN0ZW5lcnMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIudHJpZ2dlck5hbWUgPT0gY2hhbmdlLnRyaWdnZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVMaXN0ZW5lcihsaXN0ZW5lciwgY2hhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gdXBvbiByZW1vdmFsIEFMTCB0aGUgYW5pbWF0aW9uIHRyaWdnZXJzIG5lZWQgdG8gZ2V0IGZpcmVkXG4gICAgICAgIHRoaXMuX2ZsYWdnZWRSZW1vdmFscy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBsaXN0ZW5lcnMgPSBfdGhpcy5fbGlzdGVuZXJzLmdldChlbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdHJpZ2dlck5hbWUgPSBsaXN0ZW5lci50cmlnZ2VyTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gc3RvcmFnZVByb3AgPSBtYWtlU3RvcmFnZVByb3AodHJpZ2dlck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVMaXN0ZW5lcihsaXN0ZW5lciwgLyoqIEB0eXBlIHs/fSAqLyAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJOYW1lOiB0cmlnZ2VyTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBlbGVtZW50W3N0b3JhZ2VQcm9wXSB8fCBERUZBVUxUX1NUQVRFX1ZBTFVFLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IERFRkFVTFRfU1RBVEVfVkFMVUVcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gcmVtb3ZlIGFsbCB0aGUgbGlzdGVuZXJzIGFmdGVyIGV2ZXJ5dGhpbmcgaXMgY29tcGxldGVcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLl9saXN0ZW5lcnMua2V5cygpKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBsaXN0ZW5lcnNUb0tlZXAgPSAoKF90aGlzLl9saXN0ZW5lcnMuZ2V0KGVsZW1lbnQpKSkuZmlsdGVyKGZ1bmN0aW9uIChsKSB7IHJldHVybiAhbC5kb1JlbW92ZTsgfSk7XG4gICAgICAgICAgICBpZiAobGlzdGVuZXJzVG9LZWVwLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9saXN0ZW5lcnMuc2V0KGVsZW1lbnQsIGxpc3RlbmVyc1RvS2VlcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fbGlzdGVuZXJzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG9uU3RhcnRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHsgcmV0dXJuIGZuKCk7IH0pO1xuICAgICAgICBvbkRvbmVDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHsgcmV0dXJuIGZuKCk7IH0pO1xuICAgICAgICB0aGlzLl9mbGFnZ2VkUmVtb3ZhbHMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlcyA9IFtdO1xuICAgICAgICB0aGlzLl9vbkRvbmVGbnMuZm9yRWFjaChmdW5jdGlvbiAoZG9uZUZuKSB7IHJldHVybiBkb25lRm4oKTsgfSk7XG4gICAgICAgIHRoaXMuX29uRG9uZUZucyA9IFtdO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vb3BBbmltYXRpb25FbmdpbmUucHJvdG90eXBlLCBcImFjdGl2ZVBsYXllcnNcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb29wQW5pbWF0aW9uRW5naW5lLnByb3RvdHlwZSwgXCJxdWV1ZWRQbGF5ZXJzXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gTm9vcEFuaW1hdGlvbkVuZ2luZTtcbn0oQW5pbWF0aW9uRW5naW5lKSk7XG4vKipcbiAqIEBwYXJhbSB7P30gZWxlbWVudFxuICogQHBhcmFtIHs/fSB0cmlnZ2VyTmFtZVxuICogQHBhcmFtIHs/fSBmcm9tU3RhdGVcbiAqIEBwYXJhbSB7P30gdG9TdGF0ZVxuICogQHBhcmFtIHs/fSBwaGFzZU5hbWVcbiAqIEBwYXJhbSB7P30gdG90YWxUaW1lXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBtYWtlQW5pbWF0aW9uRXZlbnQkMShlbGVtZW50LCB0cmlnZ2VyTmFtZSwgZnJvbVN0YXRlLCB0b1N0YXRlLCBwaGFzZU5hbWUsIHRvdGFsVGltZSkge1xuICAgIHJldHVybiAoeyBlbGVtZW50OiBlbGVtZW50LCB0cmlnZ2VyTmFtZTogdHJpZ2dlck5hbWUsIGZyb21TdGF0ZTogZnJvbVN0YXRlLCB0b1N0YXRlOiB0b1N0YXRlLCBwaGFzZU5hbWU6IHBoYXNlTmFtZSwgdG90YWxUaW1lOiB0b3RhbFRpbWUgfSk7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gcHJvcGVydHlcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIG1ha2VTdG9yYWdlUHJvcChwcm9wZXJ0eSkge1xuICAgIHJldHVybiAnX0BfJyArIHByb3BlcnR5O1xufVxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIFdlYkFuaW1hdGlvbnNQbGF5ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7P30ga2V5ZnJhbWVzXG4gICAgICogQHBhcmFtIHs/fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHs/PX0gcHJldmlvdXNQbGF5ZXJzXG4gICAgICovXG4gICAgZnVuY3Rpb24gV2ViQW5pbWF0aW9uc1BsYXllcihlbGVtZW50LCBrZXlmcmFtZXMsIG9wdGlvbnMsIHByZXZpb3VzUGxheWVycykge1xuICAgICAgICBpZiAocHJldmlvdXNQbGF5ZXJzID09PSB2b2lkIDApIHsgcHJldmlvdXNQbGF5ZXJzID0gW107IH1cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5rZXlmcmFtZXMgPSBrZXlmcmFtZXM7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuX29uRG9uZUZucyA9IFtdO1xuICAgICAgICB0aGlzLl9vblN0YXJ0Rm5zID0gW107XG4gICAgICAgIHRoaXMuX29uRGVzdHJveUZucyA9IFtdO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9maW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICB0aGlzLnBhcmVudFBsYXllciA9IG51bGw7XG4gICAgICAgIHRoaXMuX2R1cmF0aW9uID0gb3B0aW9uc1snZHVyYXRpb24nXTtcbiAgICAgICAgdGhpcy5fZGVsYXkgPSBvcHRpb25zWydkZWxheSddIHx8IDA7XG4gICAgICAgIHRoaXMudGltZSA9IHRoaXMuX2R1cmF0aW9uICsgdGhpcy5fZGVsYXk7XG4gICAgICAgIHRoaXMucHJldmlvdXNTdHlsZXMgPSB7fTtcbiAgICAgICAgcHJldmlvdXNQbGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgICAgICAgdmFyIHN0eWxlcyA9IHBsYXllci5fY2FwdHVyZVN0eWxlcygpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7IHJldHVybiBfdGhpcy5wcmV2aW91c1N0eWxlc1twcm9wXSA9IHN0eWxlc1twcm9wXTsgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFdlYkFuaW1hdGlvbnNQbGF5ZXIucHJvdG90eXBlLl9vbkZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9maW5pc2hlZCkge1xuICAgICAgICAgICAgdGhpcy5fZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fb25Eb25lRm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbigpOyB9KTtcbiAgICAgICAgICAgIHRoaXMuX29uRG9uZUZucyA9IFtdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFdlYkFuaW1hdGlvbnNQbGF5ZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLl9pbml0aWFsaXplZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBrZXlmcmFtZXMgPSB0aGlzLmtleWZyYW1lcy5tYXAoZnVuY3Rpb24gKHN0eWxlcykge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZm9ybWF0dGVkS2V5ZnJhbWUgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWx1ZSA9IHN0eWxlc1twcm9wXTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gQVVUT19TVFlMRSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IF9jb21wdXRlU3R5bGUoX3RoaXMuZWxlbWVudCwgcHJvcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkS2V5ZnJhbWVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXR0ZWRLZXlmcmFtZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHByZXZpb3VzU3R5bGVQcm9wcyA9IE9iamVjdC5rZXlzKHRoaXMucHJldmlvdXNTdHlsZXMpO1xuICAgICAgICBpZiAocHJldmlvdXNTdHlsZVByb3BzLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gc3RhcnRpbmdLZXlmcmFtZV8xID0ga2V5ZnJhbWVzWzBdO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbWlzc2luZ1N0eWxlUHJvcHNfMSA9IFtdO1xuICAgICAgICAgICAgcHJldmlvdXNTdHlsZVByb3BzLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXJ0aW5nS2V5ZnJhbWVfMS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nU3R5bGVQcm9wc18xLnB1c2gocHJvcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0YXJ0aW5nS2V5ZnJhbWVfMVtwcm9wXSA9IF90aGlzLnByZXZpb3VzU3R5bGVzW3Byb3BdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobWlzc2luZ1N0eWxlUHJvcHNfMS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBzZWxmXzEgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciBfbG9vcF8zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBrZiA9IGtleWZyYW1lc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ1N0eWxlUHJvcHNfMS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZltwcm9wXSA9IF9jb21wdXRlU3R5bGUoc2VsZl8xLmVsZW1lbnQsIHByb3ApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGZvciAodmFyIC8qKiBAdHlwZSB7P30gKi8gaSA9IDE7IGkgPCBrZXlmcmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgX2xvb3BfMygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wbGF5ZXIgPSB0aGlzLl90cmlnZ2VyV2ViQW5pbWF0aW9uKHRoaXMuZWxlbWVudCwga2V5ZnJhbWVzLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9maW5hbEtleWZyYW1lID1cbiAgICAgICAgICAgIGtleWZyYW1lcy5sZW5ndGggPyBfY29weUtleWZyYW1lU3R5bGVzKGtleWZyYW1lc1trZXlmcmFtZXMubGVuZ3RoIC0gMV0pIDoge307XG4gICAgICAgIC8vIHRoaXMgaXMgcmVxdWlyZWQgc28gdGhhdCB0aGUgcGxheWVyIGRvZXNuJ3Qgc3RhcnQgdG8gYW5pbWF0ZSByaWdodCBhd2F5XG4gICAgICAgIHRoaXMuX3Jlc2V0RG9tUGxheWVyU3RhdGUoKTtcbiAgICAgICAgdGhpcy5fcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2ZpbmlzaCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9vbkZpbmlzaCgpOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFxcQGludGVybmFsXG4gICAgICogQHBhcmFtIHs/fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHs/fSBrZXlmcmFtZXNcbiAgICAgKiBAcGFyYW0gez99IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFdlYkFuaW1hdGlvbnNQbGF5ZXIucHJvdG90eXBlLl90cmlnZ2VyV2ViQW5pbWF0aW9uID0gZnVuY3Rpb24gKGVsZW1lbnQsIGtleWZyYW1lcywgb3B0aW9ucykge1xuICAgICAgICAvLyBqc2NvbXBpbGVyIGRvZXNuJ3Qgc2VlbSB0byBrbm93IGFuaW1hdGUgaXMgYSBuYXRpdmUgcHJvcGVydHkgYmVjYXVzZSBpdCdzIG5vdCBmdWxseVxuICAgICAgICAvLyBzdXBwb3J0ZWQgeWV0IGFjcm9zcyBjb21tb24gYnJvd3NlcnMgKHdlIHBvbHlmaWxsIGl0IGZvciBFZGdlL1NhZmFyaSkgW0NMICMxNDM2MzA5MjldXG4gICAgICAgIHJldHVybiAoZWxlbWVudFsnYW5pbWF0ZSddKGtleWZyYW1lcywgb3B0aW9ucykpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkFuaW1hdGlvbnNQbGF5ZXIucHJvdG90eXBlLCBcImRvbVBsYXllclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wbGF5ZXI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFdlYkFuaW1hdGlvbnNQbGF5ZXIucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5fb25TdGFydEZucy5wdXNoKGZuKTsgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBXZWJBbmltYXRpb25zUGxheWVyLnByb3RvdHlwZS5vbkRvbmUgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5fb25Eb25lRm5zLnB1c2goZm4pOyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFdlYkFuaW1hdGlvbnNQbGF5ZXIucHJvdG90eXBlLm9uRGVzdHJveSA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLl9vbkRlc3Ryb3lGbnMucHVzaChmbik7IH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBXZWJBbmltYXRpb25zUGxheWVyLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1N0YXJ0ZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5fb25TdGFydEZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZm4oKTsgfSk7XG4gICAgICAgICAgICB0aGlzLl9vblN0YXJ0Rm5zID0gW107XG4gICAgICAgICAgICB0aGlzLl9zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wbGF5ZXIucGxheSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBXZWJBbmltYXRpb25zUGxheWVyLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuX3BsYXllci5wYXVzZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBXZWJBbmltYXRpb25zUGxheWVyLnByb3RvdHlwZS5maW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLl9vbkZpbmlzaCgpO1xuICAgICAgICB0aGlzLl9wbGF5ZXIuZmluaXNoKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFdlYkFuaW1hdGlvbnNQbGF5ZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9yZXNldERvbVBsYXllclN0YXRlKCk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9maW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zdGFydGVkID0gZmFsc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFdlYkFuaW1hdGlvbnNQbGF5ZXIucHJvdG90eXBlLl9yZXNldERvbVBsYXllclN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fcGxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXIuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgV2ViQW5pbWF0aW9uc1BsYXllci5wcm90b3R5cGUucmVzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgV2ViQW5pbWF0aW9uc1BsYXllci5wcm90b3R5cGUuaGFzU3RhcnRlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N0YXJ0ZWQ7IH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBXZWJBbmltYXRpb25zUGxheWVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVzZXREb21QbGF5ZXJTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5fb25GaW5pc2goKTtcbiAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9vbkRlc3Ryb3lGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHsgcmV0dXJuIGZuKCk7IH0pO1xuICAgICAgICAgICAgdGhpcy5fb25EZXN0cm95Rm5zID0gW107XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gcFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgV2ViQW5pbWF0aW9uc1BsYXllci5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAocCkgeyB0aGlzLl9wbGF5ZXIuY3VycmVudFRpbWUgPSBwICogdGhpcy50aW1lOyB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgV2ViQW5pbWF0aW9uc1BsYXllci5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wbGF5ZXIuY3VycmVudFRpbWUgLyB0aGlzLnRpbWU7IH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBXZWJBbmltYXRpb25zUGxheWVyLnByb3RvdHlwZS5fY2FwdHVyZVN0eWxlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gc3R5bGVzID0ge307XG4gICAgICAgIGlmICh0aGlzLmhhc1N0YXJ0ZWQoKSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5fZmluYWxLZXlmcmFtZSkuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wICE9ICdvZmZzZXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1twcm9wXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fZmluaXNoZWQgPyBfdGhpcy5fZmluYWxLZXlmcmFtZVtwcm9wXSA6IF9jb21wdXRlU3R5bGUoX3RoaXMuZWxlbWVudCwgcHJvcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICB9O1xuICAgIHJldHVybiBXZWJBbmltYXRpb25zUGxheWVyO1xufSgpKTtcbi8qKlxuICogQHBhcmFtIHs/fSBlbGVtZW50XG4gKiBAcGFyYW0gez99IHByb3BcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIF9jb21wdXRlU3R5bGUoZWxlbWVudCwgcHJvcCkge1xuICAgIHJldHVybiAoKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpKSlbcHJvcF07XG59XG4vKipcbiAqIEBwYXJhbSB7P30gc3R5bGVzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBfY29weUtleWZyYW1lU3R5bGVzKHN0eWxlcykge1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIG5ld1N0eWxlcyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICBpZiAocHJvcCAhPSAnb2Zmc2V0Jykge1xuICAgICAgICAgICAgbmV3U3R5bGVzW3Byb3BdID0gc3R5bGVzW3Byb3BdO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld1N0eWxlcztcbn1cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBXZWJBbmltYXRpb25zRHJpdmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXZWJBbmltYXRpb25zRHJpdmVyKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gez99IGtleWZyYW1lc1xuICAgICAqIEBwYXJhbSB7P30gZHVyYXRpb25cbiAgICAgKiBAcGFyYW0gez99IGRlbGF5XG4gICAgICogQHBhcmFtIHs/fSBlYXNpbmdcbiAgICAgKiBAcGFyYW0gez89fSBwcmV2aW91c1BsYXllcnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFdlYkFuaW1hdGlvbnNEcml2ZXIucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbiAoZWxlbWVudCwga2V5ZnJhbWVzLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgcHJldmlvdXNQbGF5ZXJzKSB7XG4gICAgICAgIGlmIChwcmV2aW91c1BsYXllcnMgPT09IHZvaWQgMCkgeyBwcmV2aW91c1BsYXllcnMgPSBbXTsgfVxuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBwbGF5ZXJPcHRpb25zID0geyAnZHVyYXRpb24nOiBkdXJhdGlvbiwgJ2RlbGF5JzogZGVsYXksICdmaWxsJzogJ2ZvcndhcmRzJyB9O1xuICAgICAgICAvLyB3ZSBjaGVjayBmb3IgdGhpcyB0byBhdm9pZCBoYXZpbmcgYSBudWxsfHVuZGVmaW5lZCB2YWx1ZSBiZSBwcmVzZW50XG4gICAgICAgIC8vIGZvciB0aGUgZWFzaW5nICh3aGljaCByZXN1bHRzIGluIGFuIGVycm9yIGZvciBjZXJ0YWluIGJyb3dzZXJzICM5NzUyKVxuICAgICAgICBpZiAoZWFzaW5nKSB7XG4gICAgICAgICAgICBwbGF5ZXJPcHRpb25zWydlYXNpbmcnXSA9IGVhc2luZztcbiAgICAgICAgfVxuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBwcmV2aW91c1dlYkFuaW1hdGlvblBsYXllcnMgPSAocHJldmlvdXNQbGF5ZXJzLmZpbHRlcihmdW5jdGlvbiAocGxheWVyKSB7IHJldHVybiBwbGF5ZXIgaW5zdGFuY2VvZiBXZWJBbmltYXRpb25zUGxheWVyOyB9KSk7XG4gICAgICAgIHJldHVybiBuZXcgV2ViQW5pbWF0aW9uc1BsYXllcihlbGVtZW50LCBrZXlmcmFtZXMsIHBsYXllck9wdGlvbnMsIHByZXZpb3VzV2ViQW5pbWF0aW9uUGxheWVycyk7XG4gICAgfTtcbiAgICByZXR1cm4gV2ViQW5pbWF0aW9uc0RyaXZlcjtcbn0oKSk7XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIHN1cHBvcnRzV2ViQW5pbWF0aW9ucygpIHtcbiAgICByZXR1cm4gdHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiAoKEVsZW1lbnQpKS5wcm90b3R5cGVbJ2FuaW1hdGUnXSA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBFbnRyeSBwb2ludCBmb3IgYWxsIGFuaW1hdGlvbiBBUElzIG9mIHRoZSBhbmltYXRpb24gYnJvd3NlciBwYWNrYWdlLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBtb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICogRW50cnkgcG9pbnQgZm9yIGFsbCBwdWJsaWMgQVBJcyBvZiB0aGUgYW5pbWF0aW9uIHBhY2thZ2UuXG4gKi9cbi8qKlxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXG4gKi9cbmV4cG9ydCB7IEFuaW1hdGlvbkRyaXZlciwgQW5pbWF0aW9uRW5naW5lIGFzIMm1QW5pbWF0aW9uRW5naW5lLCBBbmltYXRpb24gYXMgybVBbmltYXRpb24sIEFuaW1hdGlvblN0eWxlTm9ybWFsaXplciBhcyDJtUFuaW1hdGlvblN0eWxlTm9ybWFsaXplciwgTm9vcEFuaW1hdGlvblN0eWxlTm9ybWFsaXplciBhcyDJtU5vb3BBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIsIFdlYkFuaW1hdGlvbnNTdHlsZU5vcm1hbGl6ZXIgYXMgybVXZWJBbmltYXRpb25zU3R5bGVOb3JtYWxpemVyLCBOb29wQW5pbWF0aW9uRHJpdmVyIGFzIMm1Tm9vcEFuaW1hdGlvbkRyaXZlciwgRG9tQW5pbWF0aW9uRW5naW5lIGFzIMm1RG9tQW5pbWF0aW9uRW5naW5lLCBOb29wQW5pbWF0aW9uRW5naW5lIGFzIMm1Tm9vcEFuaW1hdGlvbkVuZ2luZSwgV2ViQW5pbWF0aW9uc0RyaXZlciBhcyDJtVdlYkFuaW1hdGlvbnNEcml2ZXIsIHN1cHBvcnRzV2ViQW5pbWF0aW9ucyBhcyDJtXN1cHBvcnRzV2ViQW5pbWF0aW9ucywgV2ViQW5pbWF0aW9uc1BsYXllciBhcyDJtVdlYkFuaW1hdGlvbnNQbGF5ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXIuZXM1LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L0Bhbmd1bGFyL2FuaW1hdGlvbnMvQGFuZ3VsYXIvYW5pbWF0aW9ucy9icm93c2VyLmVzNS5qc1xuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xuLyoqXG4gKiBAbGljZW5zZSBBbmd1bGFyIHY0LjEuMVxuICogKGMpIDIwMTAtMjAxNyBHb29nbGUsIEluYy4gaHR0cHM6Ly9hbmd1bGFyLmlvL1xuICogTGljZW5zZTogTUlUXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUsIE5nTW9kdWxlLCBOZ1pvbmUsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUsIMm1RG9tUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQW5pbWF0aW9uRHJpdmVyLCDJtUFuaW1hdGlvbkVuZ2luZSwgybVBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIsIMm1RG9tQW5pbWF0aW9uRW5naW5lLCDJtU5vb3BBbmltYXRpb25Ecml2ZXIsIMm1Tm9vcEFuaW1hdGlvbkVuZ2luZSwgybVXZWJBbmltYXRpb25zRHJpdmVyLCDJtVdlYkFuaW1hdGlvbnNTdHlsZU5vcm1hbGl6ZXIsIMm1c3VwcG9ydHNXZWJBbmltYXRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucy9icm93c2VyJztcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBBbmltYXRpb25SZW5kZXJlckZhY3RvcnkgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZGVsZWdhdGVcbiAgICAgKiBAcGFyYW0gez99IF9lbmdpbmVcbiAgICAgKiBAcGFyYW0gez99IF96b25lXG4gICAgICovXG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uUmVuZGVyZXJGYWN0b3J5KGRlbGVnYXRlLCBfZW5naW5lLCBfem9uZSkge1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIHRoaXMuX2VuZ2luZSA9IF9lbmdpbmU7XG4gICAgICAgIHRoaXMuX3pvbmUgPSBfem9uZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBob3N0RWxlbWVudFxuICAgICAqIEBwYXJhbSB7P30gdHlwZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uUmVuZGVyZXJGYWN0b3J5LnByb3RvdHlwZS5jcmVhdGVSZW5kZXJlciA9IGZ1bmN0aW9uIChob3N0RWxlbWVudCwgdHlwZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBkZWxlZ2F0ZSA9IHRoaXMuZGVsZWdhdGUuY3JlYXRlUmVuZGVyZXIoaG9zdEVsZW1lbnQsIHR5cGUpO1xuICAgICAgICBpZiAoIWhvc3RFbGVtZW50IHx8ICF0eXBlIHx8ICF0eXBlLmRhdGEgfHwgIXR5cGUuZGF0YVsnYW5pbWF0aW9uJ10pXG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGU7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG5hbWVzcGFjZUlkID0gdHlwZS5pZDtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gYW5pbWF0aW9uVHJpZ2dlcnMgPSAodHlwZS5kYXRhWydhbmltYXRpb24nXSk7XG4gICAgICAgIGFuaW1hdGlvblRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHsgcmV0dXJuIF90aGlzLl9lbmdpbmUucmVnaXN0ZXJUcmlnZ2VyKHRyaWdnZXIsIG5hbWVzcGFjZWlmeShuYW1lc3BhY2VJZCwgdHJpZ2dlci5uYW1lKSk7IH0pO1xuICAgICAgICByZXR1cm4gbmV3IEFuaW1hdGlvblJlbmRlcmVyKGRlbGVnYXRlLCB0aGlzLl9lbmdpbmUsIHRoaXMuX3pvbmUsIG5hbWVzcGFjZUlkKTtcbiAgICB9O1xuICAgIHJldHVybiBBbmltYXRpb25SZW5kZXJlckZhY3Rvcnk7XG59KCkpO1xuQW5pbWF0aW9uUmVuZGVyZXJGYWN0b3J5LmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5BbmltYXRpb25SZW5kZXJlckZhY3RvcnkuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBSZW5kZXJlckZhY3RvcnkyLCB9LFxuICAgIHsgdHlwZTogybVBbmltYXRpb25FbmdpbmUsIH0sXG4gICAgeyB0eXBlOiBOZ1pvbmUsIH0sXG5dOyB9O1xudmFyIEFuaW1hdGlvblJlbmRlcmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGRlbGVnYXRlXG4gICAgICogQHBhcmFtIHs/fSBfZW5naW5lXG4gICAgICogQHBhcmFtIHs/fSBfem9uZVxuICAgICAqIEBwYXJhbSB7P30gX25hbWVzcGFjZUlkXG4gICAgICovXG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uUmVuZGVyZXIoZGVsZWdhdGUsIF9lbmdpbmUsIF96b25lLCBfbmFtZXNwYWNlSWQpIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICB0aGlzLl9lbmdpbmUgPSBfZW5naW5lO1xuICAgICAgICB0aGlzLl96b25lID0gX3pvbmU7XG4gICAgICAgIHRoaXMuX25hbWVzcGFjZUlkID0gX25hbWVzcGFjZUlkO1xuICAgICAgICB0aGlzLmRlc3Ryb3lOb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZmx1c2hQcm9taXNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZXN0cm95Tm9kZSA9IHRoaXMuZGVsZWdhdGUuZGVzdHJveU5vZGUgPyBmdW5jdGlvbiAobikgeyByZXR1cm4gZGVsZWdhdGUuZGVzdHJveU5vZGUobik7IH0gOiBudWxsO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQW5pbWF0aW9uUmVuZGVyZXIucHJvdG90eXBlLCBcImRhdGFcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5kYXRhOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFuaW1hdGlvblJlbmRlcmVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkgeyB0aGlzLmRlbGVnYXRlLmRlc3Ryb3koKTsgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IG5hbWVcbiAgICAgKiBAcGFyYW0gez89fSBuYW1lc3BhY2VcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFuaW1hdGlvblJlbmRlcmVyLnByb3RvdHlwZS5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKG5hbWUsIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5jcmVhdGVFbGVtZW50KG5hbWUsIG5hbWVzcGFjZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25SZW5kZXJlci5wcm90b3R5cGUuY3JlYXRlQ29tbWVudCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5jcmVhdGVDb21tZW50KHZhbHVlKTsgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25SZW5kZXJlci5wcm90b3R5cGUuY3JlYXRlVGV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5jcmVhdGVUZXh0KHZhbHVlKTsgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHNlbGVjdG9yT3JOb2RlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25SZW5kZXJlci5wcm90b3R5cGUuc2VsZWN0Um9vdEVsZW1lbnQgPSBmdW5jdGlvbiAoc2VsZWN0b3JPck5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuc2VsZWN0Um9vdEVsZW1lbnQoc2VsZWN0b3JPck5vZGUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBub2RlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25SZW5kZXJlci5wcm90b3R5cGUucGFyZW50Tm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiB0aGlzLmRlbGVnYXRlLnBhcmVudE5vZGUobm9kZSk7IH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBub2RlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25SZW5kZXJlci5wcm90b3R5cGUubmV4dFNpYmxpbmcgPSBmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5uZXh0U2libGluZyhub2RlKTsgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGVsXG4gICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Pz19IG5hbWVzcGFjZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uUmVuZGVyZXIucHJvdG90eXBlLnNldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChlbCwgbmFtZSwgdmFsdWUsIG5hbWVzcGFjZSkge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLnNldEF0dHJpYnV0ZShlbCwgbmFtZSwgdmFsdWUsIG5hbWVzcGFjZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGVsXG4gICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICogQHBhcmFtIHs/PX0gbmFtZXNwYWNlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25SZW5kZXJlci5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlID0gZnVuY3Rpb24gKGVsLCBuYW1lLCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5yZW1vdmVBdHRyaWJ1dGUoZWwsIG5hbWUsIG5hbWVzcGFjZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGVsXG4gICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25SZW5kZXJlci5wcm90b3R5cGUuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIG5hbWUpIHsgdGhpcy5kZWxlZ2F0ZS5hZGRDbGFzcyhlbCwgbmFtZSk7IH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBlbFxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uUmVuZGVyZXIucHJvdG90eXBlLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGVsLCBuYW1lKSB7IHRoaXMuZGVsZWdhdGUucmVtb3ZlQ2xhc3MoZWwsIG5hbWUpOyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZWxcbiAgICAgKiBAcGFyYW0gez99IHN0eWxlXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7P30gZmxhZ3NcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFuaW1hdGlvblJlbmRlcmVyLnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIChlbCwgc3R5bGUsIHZhbHVlLCBmbGFncykge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLnNldFN0eWxlKGVsLCBzdHlsZSwgdmFsdWUsIGZsYWdzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZWxcbiAgICAgKiBAcGFyYW0gez99IHN0eWxlXG4gICAgICogQHBhcmFtIHs/fSBmbGFnc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uUmVuZGVyZXIucHJvdG90eXBlLnJlbW92ZVN0eWxlID0gZnVuY3Rpb24gKGVsLCBzdHlsZSwgZmxhZ3MpIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5yZW1vdmVTdHlsZShlbCwgc3R5bGUsIGZsYWdzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gbm9kZVxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFuaW1hdGlvblJlbmRlcmVyLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uIChub2RlLCB2YWx1ZSkgeyB0aGlzLmRlbGVnYXRlLnNldFZhbHVlKG5vZGUsIHZhbHVlKTsgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHBhcmVudFxuICAgICAqIEBwYXJhbSB7P30gbmV3Q2hpbGRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFuaW1hdGlvblJlbmRlcmVyLnByb3RvdHlwZS5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIChwYXJlbnQsIG5ld0NoaWxkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2VuZ2luZS5vbkluc2VydChuZXdDaGlsZCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZGVsZWdhdGUuYXBwZW5kQ2hpbGQocGFyZW50LCBuZXdDaGlsZCk7IH0pO1xuICAgICAgICB0aGlzLl9xdWV1ZUZsdXNoKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHBhcmVudFxuICAgICAqIEBwYXJhbSB7P30gbmV3Q2hpbGRcbiAgICAgKiBAcGFyYW0gez99IHJlZkNoaWxkXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBBbmltYXRpb25SZW5kZXJlci5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlID0gZnVuY3Rpb24gKHBhcmVudCwgbmV3Q2hpbGQsIHJlZkNoaWxkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2VuZ2luZS5vbkluc2VydChuZXdDaGlsZCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZGVsZWdhdGUuaW5zZXJ0QmVmb3JlKHBhcmVudCwgbmV3Q2hpbGQsIHJlZkNoaWxkKTsgfSk7XG4gICAgICAgIHRoaXMuX3F1ZXVlRmx1c2goKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gcGFyZW50XG4gICAgICogQHBhcmFtIHs/fSBvbGRDaGlsZFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uUmVuZGVyZXIucHJvdG90eXBlLnJlbW92ZUNoaWxkID0gZnVuY3Rpb24gKHBhcmVudCwgb2xkQ2hpbGQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5fZW5naW5lLm9uUmVtb3ZlKG9sZENoaWxkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBOb3RlOiBpZiBhbiBjb21wb25lbnQgZWxlbWVudCBoYXMgYSBsZWF2ZSBhbmltYXRpb24sIGFuZCB0aGUgY29tcG9uZW50XG4gICAgICAgICAgICAvLyBhIGhvc3QgbGVhdmUgYW5pbWF0aW9uLCB0aGUgdmlldyBlbmdpbmUgd2lsbCBjYWxsIGByZW1vdmVDaGlsZGAgZm9yIHRoZSBwYXJlbnRcbiAgICAgICAgICAgIC8vIGNvbXBvbmVudCByZW5kZXJlciBhcyB3ZWxsIGFzIGZvciB0aGUgY2hpbGQgY29tcG9uZW50IHJlbmRlcmVyLlxuICAgICAgICAgICAgLy8gVGhlcmVmb3JlLCB3ZSBuZWVkIHRvIGNoZWNrIGlmIHdlIGFscmVhZHkgcmVtb3ZlZCB0aGUgZWxlbWVudC5cbiAgICAgICAgICAgIGlmIChfdGhpcy5kZWxlZ2F0ZS5wYXJlbnROb2RlKG9sZENoaWxkKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmRlbGVnYXRlLnJlbW92ZUNoaWxkKHBhcmVudCwgb2xkQ2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcXVldWVGbHVzaCgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBlbFxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEFuaW1hdGlvblJlbmRlcmVyLnByb3RvdHlwZS5zZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIChlbCwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09ICdAJykge1xuICAgICAgICAgICAgdGhpcy5fZW5naW5lLnNldFByb3BlcnR5KGVsLCBuYW1lc3BhY2VpZnkodGhpcy5fbmFtZXNwYWNlSWQsIG5hbWUuc3Vic3RyKDEpKSwgdmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5fcXVldWVGbHVzaCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5zZXRQcm9wZXJ0eShlbCwgbmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHRhcmdldFxuICAgICAqIEBwYXJhbSB7P30gZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHs/fSBjYWxsYmFja1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uUmVuZGVyZXIucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uICh0YXJnZXQsIGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGV2ZW50TmFtZS5jaGFyQXQoMCkgPT0gJ0AnKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBlbGVtZW50ID0gcmVzb2x2ZUVsZW1lbnRGcm9tVGFyZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICB2YXIgX2EgPSBwYXJzZVRyaWdnZXJDYWxsYmFja05hbWUoZXZlbnROYW1lLnN1YnN0cigxKSksIG5hbWUgPSBfYVswXSwgcGhhc2UgPSBfYVsxXTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lbmdpbmUubGlzdGVuKGVsZW1lbnQsIG5hbWVzcGFjZWlmeSh0aGlzLl9uYW1lc3BhY2VJZCwgbmFtZSksIHBoYXNlLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBlID0gKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoZS50cmlnZ2VyTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnRyaWdnZXJOYW1lID0gZGVOYW1lc3BhY2VpZnkoX3RoaXMuX25hbWVzcGFjZUlkLCBlLnRyaWdnZXJOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMuX3pvbmUucnVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrKGV2ZW50KTsgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5saXN0ZW4odGFyZ2V0LCBldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQW5pbWF0aW9uUmVuZGVyZXIucHJvdG90eXBlLl9xdWV1ZUZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuX2ZsdXNoUHJvbWlzZSkge1xuICAgICAgICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2ZsdXNoUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2ZsdXNoUHJvbWlzZSA9ICgobnVsbCkpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fZW5naW5lLmZsdXNoKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFuaW1hdGlvblJlbmRlcmVyO1xufSgpKTtcbi8qKlxuICogQHBhcmFtIHs/fSB0YXJnZXRcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVFbGVtZW50RnJvbVRhcmdldCh0YXJnZXQpIHtcbiAgICBzd2l0Y2ggKHRhcmdldCkge1xuICAgICAgICBjYXNlICdib2R5JzpcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICAgICAgICBjYXNlICdkb2N1bWVudCc6XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgICAgIGNhc2UgJ3dpbmRvdyc6XG4gICAgICAgICAgICByZXR1cm4gd2luZG93O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG59XG4vKipcbiAqIEBwYXJhbSB7P30gdHJpZ2dlck5hbWVcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIHBhcnNlVHJpZ2dlckNhbGxiYWNrTmFtZSh0cmlnZ2VyTmFtZSkge1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIGRvdEluZGV4ID0gdHJpZ2dlck5hbWUuaW5kZXhPZignLicpO1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIHRyaWdnZXIgPSB0cmlnZ2VyTmFtZS5zdWJzdHJpbmcoMCwgZG90SW5kZXgpO1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIHBoYXNlID0gdHJpZ2dlck5hbWUuc3Vic3RyKGRvdEluZGV4ICsgMSk7XG4gICAgcmV0dXJuIFt0cmlnZ2VyLCBwaGFzZV07XG59XG4vKipcbiAqIEBwYXJhbSB7P30gbmFtZXNwYWNlSWRcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIG5hbWVzcGFjZWlmeShuYW1lc3BhY2VJZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gbmFtZXNwYWNlSWQgKyBcIiNcIiArIHZhbHVlO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IG5hbWVzcGFjZUlkXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBkZU5hbWVzcGFjZWlmeShuYW1lc3BhY2VJZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZShuYW1lc3BhY2VJZCArICcjJywgJycpO1xufVxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIEluamVjdGFibGVBbmltYXRpb25FbmdpbmUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJbmplY3RhYmxlQW5pbWF0aW9uRW5naW5lLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZHJpdmVyXG4gICAgICogQHBhcmFtIHs/fSBub3JtYWxpemVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gSW5qZWN0YWJsZUFuaW1hdGlvbkVuZ2luZShkcml2ZXIsIG5vcm1hbGl6ZXIpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIGRyaXZlciwgbm9ybWFsaXplcikgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEluamVjdGFibGVBbmltYXRpb25FbmdpbmU7XG59KMm1RG9tQW5pbWF0aW9uRW5naW5lKSk7XG5JbmplY3RhYmxlQW5pbWF0aW9uRW5naW5lLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5JbmplY3RhYmxlQW5pbWF0aW9uRW5naW5lLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgIHsgdHlwZTogQW5pbWF0aW9uRHJpdmVyLCB9LFxuICAgIHsgdHlwZTogybVBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIsIH0sXG5dOyB9O1xuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBpbnN0YW50aWF0ZVN1cHBvcnRlZEFuaW1hdGlvbkRyaXZlcigpIHtcbiAgICBpZiAoybVzdXBwb3J0c1dlYkFuaW1hdGlvbnMoKSkge1xuICAgICAgICByZXR1cm4gbmV3IMm1V2ViQW5pbWF0aW9uc0RyaXZlcigpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IMm1Tm9vcEFuaW1hdGlvbkRyaXZlcigpO1xufVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBpbnN0YW50aWF0ZURlZmF1bHRTdHlsZU5vcm1hbGl6ZXIoKSB7XG4gICAgcmV0dXJuIG5ldyDJtVdlYkFuaW1hdGlvbnNTdHlsZU5vcm1hbGl6ZXIoKTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSByZW5kZXJlclxuICogQHBhcmFtIHs/fSBlbmdpbmVcbiAqIEBwYXJhbSB7P30gem9uZVxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gaW5zdGFudGlhdGVSZW5kZXJlckZhY3RvcnkocmVuZGVyZXIsIGVuZ2luZSwgem9uZSkge1xuICAgIHJldHVybiBuZXcgQW5pbWF0aW9uUmVuZGVyZXJGYWN0b3J5KHJlbmRlcmVyLCBlbmdpbmUsIHpvbmUpO1xufVxuLyoqXG4gKiBTZXBhcmF0ZSBwcm92aWRlcnMgZnJvbSB0aGUgYWN0dWFsIG1vZHVsZSBzbyB0aGF0IHdlIGNhbiBkbyBhIGxvY2FsIG1vZGlmaWNhdGlvbiBpbiBHb29nbGUzIHRvXG4gKiBpbmNsdWRlIHRoZW0gaW4gdGhlIEJyb3dzZXJNb2R1bGUuXG4gKi9cbnZhciBCUk9XU0VSX0FOSU1BVElPTlNfUFJPVklERVJTID0gW1xuICAgIHsgcHJvdmlkZTogQW5pbWF0aW9uRHJpdmVyLCB1c2VGYWN0b3J5OiBpbnN0YW50aWF0ZVN1cHBvcnRlZEFuaW1hdGlvbkRyaXZlciB9LFxuICAgIHsgcHJvdmlkZTogybVBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIsIHVzZUZhY3Rvcnk6IGluc3RhbnRpYXRlRGVmYXVsdFN0eWxlTm9ybWFsaXplciB9LFxuICAgIHsgcHJvdmlkZTogybVBbmltYXRpb25FbmdpbmUsIHVzZUNsYXNzOiBJbmplY3RhYmxlQW5pbWF0aW9uRW5naW5lIH0sIHtcbiAgICAgICAgcHJvdmlkZTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICAgICAgdXNlRmFjdG9yeTogaW5zdGFudGlhdGVSZW5kZXJlckZhY3RvcnksXG4gICAgICAgIGRlcHM6IFvJtURvbVJlbmRlcmVyRmFjdG9yeTIsIMm1QW5pbWF0aW9uRW5naW5lLCBOZ1pvbmVdXG4gICAgfVxuXTtcbi8qKlxuICogU2VwYXJhdGUgcHJvdmlkZXJzIGZyb20gdGhlIGFjdHVhbCBtb2R1bGUgc28gdGhhdCB3ZSBjYW4gZG8gYSBsb2NhbCBtb2RpZmljYXRpb24gaW4gR29vZ2xlMyB0b1xuICogaW5jbHVkZSB0aGVtIGluIHRoZSBCcm93c2VyVGVzdGluZ01vZHVsZS5cbiAqL1xudmFyIEJST1dTRVJfTk9PUF9BTklNQVRJT05TX1BST1ZJREVSUyA9IFtcbiAgICB7IHByb3ZpZGU6IMm1QW5pbWF0aW9uRW5naW5lLCB1c2VDbGFzczogybVOb29wQW5pbWF0aW9uRW5naW5lIH0sIHtcbiAgICAgICAgcHJvdmlkZTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICAgICAgdXNlRmFjdG9yeTogaW5zdGFudGlhdGVSZW5kZXJlckZhY3RvcnksXG4gICAgICAgIGRlcHM6IFvJtURvbVJlbmRlcmVyRmFjdG9yeTIsIMm1QW5pbWF0aW9uRW5naW5lLCBOZ1pvbmVdXG4gICAgfVxuXTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogXFxAZXhwZXJpbWVudGFsIEFuaW1hdGlvbiBzdXBwb3J0IGlzIGV4cGVyaW1lbnRhbC5cbiAqL1xudmFyIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSgpIHtcbiAgICB9XG4gICAgcmV0dXJuIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlO1xufSgpKTtcbkJyb3dzZXJBbmltYXRpb25zTW9kdWxlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZV0sXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBCUk9XU0VSX0FOSU1BVElPTlNfUFJPVklERVJTLFxuICAgICAgICAgICAgfSxdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5Ccm93c2VyQW5pbWF0aW9uc01vZHVsZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuLyoqXG4gKiBcXEBleHBlcmltZW50YWwgQW5pbWF0aW9uIHN1cHBvcnQgaXMgZXhwZXJpbWVudGFsLlxuICovXG52YXIgTm9vcEFuaW1hdGlvbnNNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vb3BBbmltYXRpb25zTW9kdWxlKCkge1xuICAgIH1cbiAgICByZXR1cm4gTm9vcEFuaW1hdGlvbnNNb2R1bGU7XG59KCkpO1xuTm9vcEFuaW1hdGlvbnNNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlXSxcbiAgICAgICAgICAgICAgICBwcm92aWRlcnM6IEJST1dTRVJfTk9PUF9BTklNQVRJT05TX1BST1ZJREVSUyxcbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuTm9vcEFuaW1hdGlvbnNNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBFbnRyeSBwb2ludCBmb3IgYWxsIGFuaW1hdGlvbiBBUElzIG9mIHRoZSBhbmltYXRpb24gYnJvd3NlciBwYWNrYWdlLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBtb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICogRW50cnkgcG9pbnQgZm9yIGFsbCBwdWJsaWMgQVBJcyBvZiB0aGUgYW5pbWF0aW9uIHBhY2thZ2UuXG4gKi9cbi8qKlxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXG4gKi9cbmV4cG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLCBOb29wQW5pbWF0aW9uc01vZHVsZSwgQW5pbWF0aW9uUmVuZGVyZXIgYXMgybVBbmltYXRpb25SZW5kZXJlciwgQW5pbWF0aW9uUmVuZGVyZXJGYWN0b3J5IGFzIMm1QW5pbWF0aW9uUmVuZGVyZXJGYWN0b3J5LCBCUk9XU0VSX0FOSU1BVElPTlNfUFJPVklERVJTIGFzIMm1ZSwgQlJPV1NFUl9OT09QX0FOSU1BVElPTlNfUFJPVklERVJTIGFzIMm1ZiwgSW5qZWN0YWJsZUFuaW1hdGlvbkVuZ2luZSBhcyDJtWEsIGluc3RhbnRpYXRlRGVmYXVsdFN0eWxlTm9ybWFsaXplciBhcyDJtWMsIGluc3RhbnRpYXRlUmVuZGVyZXJGYWN0b3J5IGFzIMm1ZCwgaW5zdGFudGlhdGVTdXBwb3J0ZWRBbmltYXRpb25Ecml2ZXIgYXMgybViIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmltYXRpb25zLmVzNS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucy5lczUuanNcbi8vIG1vZHVsZSBpZCA9IDIwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBOZ1JlZHV4IH0gZnJvbSAnQGFuZ3VsYXItcmVkdXgvc3RvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElBcHBTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhlYWRlckFjdGlvbnMge1xyXG4gICAgc3RhdGljIFRPR0dMRV9TRUFSQ0ggPSAndG9nZ2xlX3NlYXJjaCc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1JlZHV4OiBOZ1JlZHV4PElBcHBTdGF0ZT4pIHsgfVxyXG5cclxuICAgIHRvZ2dsZVNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLm5nUmVkdXguZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBIZWFkZXJBY3Rpb25zLlRPR0dMRV9TRUFSQ0hcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9hY3Rpb25zL2hlYWRlci9oZWFkZXIuYWN0aW9ucy50cyIsImltcG9ydCB7IE5nUmVkdXggfSBmcm9tICdAYW5ndWxhci1yZWR1eC9zdG9yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUFwcFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUnO1xyXG5cclxuXHJcbi8vIENsYXNzIHRoYXQgaG9sZHMgbWV0aG9kcyB0byBkaXNwYXRjaCB0byBzdG9yZS4gTmdSZWR1eCBpbmplY3RlZCBieSBBbmd1bGFyXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdBY3Rpb25zIHtcclxuXHJcbiAgICBzdGF0aWMgRklOSVNIID0gJ2ZpbmlzaF9sb2FkaW5nJztcclxuXHJcbiAgICAvLyBjb25zdHJ1Y3RvciB0aGF0IGltcGxpY2l0bHkgZGVjbGFyZXMgYSBwcml2YXRlIHZhcmlhYmxlIFwibmdSZWR1eFwiXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nUmVkdXg6IE5nUmVkdXg8SUFwcFN0YXRlPikgeyB9XHJcblxyXG4gICAgLy8gcHVibGljIGZ1bmN0aW9ucyB0aGF0IGNhbGwgZGlzcGF0Y2hcclxuICAgIGZpbmlzaExvYWRpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5uZ1JlZHV4LmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTG9hZGluZ0FjdGlvbnMuRklOSVNIXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvYWN0aW9ucy9sb2FkaW5nL2xvYWRpbmcuYWN0aW9ucy50cyIsImltcG9ydCB7IE5nUmVkdXggfSBmcm9tICdAYW5ndWxhci1yZWR1eC9zdG9yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUFwcFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUm9vdEFjdGlvbnMge1xyXG4gICAgc3RhdGljIFRPR0dMRV9TRUFSQ0ggPSAndG9nZ2xlX3NlYXJjaCc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1JlZHV4OiBOZ1JlZHV4PElBcHBTdGF0ZT4pIHsgfVxyXG5cclxuICAgIHRvZ2dsZVNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLm5nUmVkdXguZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBSb290QWN0aW9ucy5UT0dHTEVfU0VBUkNIXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvYWN0aW9ucy9yb290L3Jvb3QuYWN0aW9ucy50cyIsImltcG9ydCB7IE5nUmVkdXggfSBmcm9tICdAYW5ndWxhci1yZWR1eC9zdG9yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUFwcFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQge0lTZWFyY2hTdGF0ZX0gZnJvbSAnLi4vLi4vc3RvcmUvc2VhcmNoL3NlYXJjaC5yZWR1Y2VyJ1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQWN0aW9ucyB7XHJcbiAgICBzdGF0aWMgQ0xPU0VfU0VBUkNIID0gJ2Nsb3NlX3NlYXJjaCc7XHJcbiAgICBzdGF0aWMgRVhFQ1VURV9TRUFSQ0ggPSAnZXhlY3V0ZV9zZWFyY2gnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdSZWR1eDogTmdSZWR1eDxJQXBwU3RhdGU+KSB7IH1cclxuXHJcbiAgICBjbG9zZVNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLm5nUmVkdXguZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBTZWFyY2hBY3Rpb25zLkNMT1NFX1NFQVJDSFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGVTZWFyY2goc2VhcmNoU3RhdGU6IElTZWFyY2hTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMubmdSZWR1eC5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlYXJjaEFjdGlvbnMuRVhFQ1VURV9TRUFSQ0gsXHJcbiAgICAgICAgICAgIGRhdGE6IHNlYXJjaFN0YXRlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvYWN0aW9ucy9zZWFyY2gvc2VhcmNoLmFjdGlvbnMudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJvb3QgfSBmcm9tICcuL2NvbXBvbmVudHMvcm9vdCc7XHJcblxyXG5pbXBvcnQgeyBCb290c3RyYXBHdWFyZCB9IGZyb20gJy4vZ3VhcmRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICBjb21wb25lbnQ6IFJvb3QsXHJcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtCb290c3RyYXBHdWFyZF0sXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgeyBwYXRoOiAnJywgcGF0aE1hdGNoOiAnZnVsbCcsIHJlZGlyZWN0VG86ICdob21lJyB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlZENvbXBvbmVudHMgPSBbIFJvb3QgXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXBvIH0gZnJvbSBcIi4vbW9kZWxzL3JlcG9cIjtcclxuaW1wb3J0IHsgUGFydG5lciB9IGZyb20gXCIuL21vZGVscy9wYXJ0bmVyXCJcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSBcIi4vbW9kZWxzL3RhZ1wiXHJcbmltcG9ydCB7IEdpdEh1YkFwaVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9naXRodWIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBKc29uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvanNvbi5zZXJ2aWNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2ZvcmtKb2luJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEFwcFN0YXRlQWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucy9hcHAtc3RhdGUvYXBwLXN0YXRlLmFjdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgdGVtcGxhdGU6ICc8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+JyxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbWFpbi5zY3NzJyksIHJlcXVpcmUoJy4vZm9udHMuc2NzcycpXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICByZXBvczogUmVwb1tdID0gW107XHJcbiAgICBwYXJ0bmVyczogUGFydG5lcltdID0gW107XHJcbiAgICB0YWdJdGVtczogVGFnW10gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2l0aHViQXBpU2VydmljZTogR2l0SHViQXBpU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGpzb25TZXJ2aWNlOiBKc29uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGFwcFN0YXRlQWN0aW9uczogQXBwU3RhdGVBY3Rpb25zKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIE9ic2VydmFibGUuZm9ya0pvaW4odGhpcy5qc29uU2VydmljZS5nZXRQYXJ0bmVycygpLCB0aGlzLmpzb25TZXJ2aWNlLmdldFRhZ3MoKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRuZXJzID0gZGF0YVswXTtcclxuICAgICAgICAgICAgdGhpcy50YWdJdGVtcyA9IGRhdGFbMV07XHJcbiAgICAgICAgICAgIHZhciBhcHBEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgcGFydG5lcnM6IHRoaXMucGFydG5lcnMsXHJcbiAgICAgICAgICAgICAgICB0YWdJdGVtczogdGhpcy50YWdJdGVtc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmFwcFN0YXRlQWN0aW9ucy5pbml0QXBwU3RhdGUoYXBwRGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5naXRodWJBcGlTZXJ2aWNlLmdldFJlcG9zaXRvcmllcygpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgIC8vICAgIHRoaXMucmVwb3MgPSByZXM7XHJcbiAgICAgICAgICAgIC8vcHVzaCB0byByZWR1eCBzdG9yZVxyXG4gICAgICAgIC8vfSk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvbiwgTG9jYWxlU2VydmljZSwgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1sMTBuJztcclxuaW1wb3J0IHsgSUhlYWRlclZpZXdNb2RlbCB9IGZyb20gJy4vaGVhZGVyLnZpZXdtb2RlbCc7XHJcbmltcG9ydCB7IEhlYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgUm9vdEFjdGlvbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hlYWRlcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vaGVhZGVyLmNvbXBvbmVudC5zY3NzJyldLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICAvL2hvc3Q6IHtcclxuICAgIC8vICAgICdbQHNob3dTZWFyY2hdJzogXCJ2aWV3TW9kZWwuaXNTZWFyY2hcIlxyXG4gICAgLy99XHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgTG9jYWxpemF0aW9uIHtcclxuICAgIEBJbnB1dCgpIHZpZXdNb2RlbDogSUhlYWRlclZpZXdNb2RlbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbG9jYWxlOiBMb2NhbGVTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBoZWFkZXJBY3Rpb25zOiBIZWFkZXJBY3Rpb25zLFxyXG4gICAgICAgIHByaXZhdGUgcm9vdEFjdGlvbnM6IFJvb3RBY3Rpb25zKSB7XHJcbiAgICAgICAgc3VwZXIobG9jYWxlLCB0cmFuc2xhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWFyY2hDbGlja2VkKCkge1xyXG4gICAgICAgIC8vdGhpcy5oZWFkZXJBY3Rpb25zLnRvZ2dsZVNlYXJjaCgpO1xyXG4gICAgICAgIHRoaXMucm9vdEFjdGlvbnMudG9nZ2xlU2VhcmNoKCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IElBcHBTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZVNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3N0b3JlLXNlbGVjdG9yXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElIZWFkZXJWaWV3TW9kZWwge1xyXG4gICAgaXNIaWRkZW46IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlclZpZXdNb2RlbFNlbGVjdG9yIGV4dGVuZHMgU3RvcmVTZWxlY3RvcjxJSGVhZGVyVmlld01vZGVsPiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihbJ2hlYWRlcicsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGdldEhlYWRlclZpZXdNb2RlbEZyb21BcHBTdGF0ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRIZWFkZXJWaWV3TW9kZWxGcm9tQXBwU3RhdGUoc3RhdGU6IElBcHBTdGF0ZSk6IElIZWFkZXJWaWV3TW9kZWwge1xyXG4gICAgaWYgKHN0YXRlID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIHsgaXNIaWRkZW46IHRydWUgfTtcclxuICAgIHJldHVybiB7IGlzSGlkZGVuOiBzdGF0ZS5oZWFkZXIuaXNIaWRkZW4gfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudmlld21vZGVsLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9wYXJ0bmVyLXBhbmVsLWl0ZW0uY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9wYXJ0bmVyLXBhbmVsLWl0ZW0udmlld21vZGVsJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0bmVyLXBhbmVsL3BhcnRuZXItcGFuZWwtaXRlbS9pbmRleC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uLCBMb2NhbGVTZXJ2aWNlLCBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLWwxMG4nO1xyXG5pbXBvcnQgeyBJUGFydG5lclBhbmVsSXRlbVZpZXdNb2RlbCB9IGZyb20gJy4vcGFydG5lci1wYW5lbC1pdGVtLnZpZXdtb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGFydG5lci1wYW5lbC1pdGVtJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3BhcnRuZXItcGFuZWwtaXRlbS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9wYXJ0bmVyLXBhbmVsLWl0ZW0uY29tcG9uZW50LnNjc3MnKV0sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRuZXJQYW5lbEl0ZW0ge1xyXG4gICAgQElucHV0KCkgdmlld01vZGVsOiBJUGFydG5lclBhbmVsSXRlbVZpZXdNb2RlbDtcclxuXHJcbiAgICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgpIG1vcmVQYXJ0bmVyc0luZGV4OiBudW1iZXI7XHJcblxyXG4gICAgZGlzcGxheU1vcmVQYXJ0bmVycygpIHtcclxuICAgICAgICBpZiAodGhpcy5pbmRleCA9PSB0aGlzLm1vcmVQYXJ0bmVyc0luZGV4KVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvcGFydG5lci1wYW5lbC9wYXJ0bmVyLXBhbmVsLWl0ZW0vcGFydG5lci1wYW5lbC1pdGVtLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uLCBMb2NhbGVTZXJ2aWNlLCBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLWwxMG4nO1xyXG5pbXBvcnQgeyBJUGFydG5lclBhbmVsVmlld01vZGVsIH0gZnJvbSAnLi9wYXJ0bmVyLXBhbmVsLnZpZXdtb2RlbCc7XHJcbmltcG9ydCB7IElQYXJ0bmVyUGFuZWxJdGVtVmlld01vZGVsIH0gZnJvbSAnLi9wYXJ0bmVyLXBhbmVsLWl0ZW0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BhcnRuZXItcGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcGFydG5lci1wYW5lbC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9wYXJ0bmVyLXBhbmVsLmNvbXBvbmVudC5zY3NzJyldLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJ0bmVyUGFuZWwgZXh0ZW5kcyBMb2NhbGl6YXRpb24ge1xyXG4gICAgQElucHV0KCkgdmlld01vZGVsOiBJUGFydG5lclBhbmVsVmlld01vZGVsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2NhbGU6IExvY2FsZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHN1cGVyKGxvY2FsZSwgdHJhbnNsYXRpb24pO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL3BhcnRuZXItcGFuZWwvcGFydG5lci1wYW5lbC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJQXBwU3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVTZWxlY3RvciB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdG9yZS1zZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBJUGFydG5lclBhbmVsSXRlbVZpZXdNb2RlbCB9IGZyb20gJy4vcGFydG5lci1wYW5lbC1pdGVtJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnRuZXJQYW5lbFZpZXdNb2RlbHtcclxuICAgIHBhcnRuZXJQYW5lbEl0ZW1zOiBJUGFydG5lclBhbmVsSXRlbVZpZXdNb2RlbFtdO1xyXG4gICAgcGFuZWxJdGVtQ291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRuZXJQYW5lbFZpZXdNb2RlbFNlbGVjdG9yIGV4dGVuZHMgU3RvcmVTZWxlY3RvcjxJUGFydG5lclBhbmVsVmlld01vZGVsPiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihbJ3BhcnRuZXJQYW5lbEl0ZW1zJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgICAgICBnZXRQYXJ0bmVyUGFuZWxWaWV3TW9kZWxGcm9tQXBwU3RhdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFydG5lclBhbmVsVmlld01vZGVsRnJvbUFwcFN0YXRlKHN0YXRlOiBJQXBwU3RhdGUpOiBJUGFydG5lclBhbmVsVmlld01vZGVse1xyXG4gICBcclxuICAgIHJldHVybiB7IHBhcnRuZXJQYW5lbEl0ZW1zOiBzdGF0ZS5wYXJ0bmVycywgcGFuZWxJdGVtQ291bnQ6IHN0YXRlLnBhcnRuZXJzLmxlbmd0aC0xIH07ICAgIFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvcGFydG5lci1wYW5lbC9wYXJ0bmVyLXBhbmVsLnZpZXdtb2RlbC50cyIsImV4cG9ydCAqIGZyb20gJy4vcHJvamVjdC1pdGVtLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcHJvamVjdC1pdGVtLnZpZXdtb2RlbCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9wcm9qZWN0LWl0ZW0vaW5kZXgudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvbiwgTG9jYWxlU2VydmljZSwgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1sMTBuJztcclxuaW1wb3J0IHsgSVByb2plY3RJdGVtVmlld01vZGVsIH0gZnJvbSAnLi9wcm9qZWN0LWl0ZW0udmlld21vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwcm9qZWN0LWl0ZW0nLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcHJvamVjdC1pdGVtLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3Byb2plY3QtaXRlbS5jb21wb25lbnQuc2NzcycpXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdEl0ZW0ge1xyXG4gICAgQElucHV0KCkgdmlld01vZGVsOiBJUHJvamVjdEl0ZW1WaWV3TW9kZWw7XHJcblxyXG4gICAgYXV0aG9yVHlwZVRvQ2xhc3MoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnZpZXdNb2RlbC5hdXRob3JUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ29wZW4gc291cmNlIGNvbW11bml0eSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ29wZW4tc291cmNlJztcclxuICAgICAgICAgICAgY2FzZSAnZGV2ZWxvcG1lbnQgcGFydG5lcnMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdwYXJ0bmVyJztcclxuICAgICAgICAgICAgY2FzZSAna2N1cmEnOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdrY3VyYSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvamVjdFR5cGVUb0NsYXNzKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy52aWV3TW9kZWwucHJvamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnc2NyaXB0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnc2NyaXB0JztcclxuICAgICAgICAgICAgY2FzZSAndG9vbCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3Rvb2wnO1xyXG4gICAgICAgICAgICBjYXNlICdhcHAnOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdhcHAnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3QvcHJvamVjdC1pdGVtL3Byb2plY3QtaXRlbS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvbiwgTG9jYWxlU2VydmljZSwgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1sMTBuJztcclxuaW1wb3J0IHsgSVByb2plY3RWaWV3TW9kZWwgfSBmcm9tICcuL3Byb2plY3Qudmlld21vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwcm9qZWN0JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3Byb2plY3QuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vcHJvamVjdC5jb21wb25lbnQuc2NzcycpXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCBleHRlbmRzIExvY2FsaXphdGlvbiB7XHJcbiAgICBASW5wdXQoKSB2aWV3TW9kZWw6IElQcm9qZWN0Vmlld01vZGVsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2NhbGU6IExvY2FsZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHN1cGVyKGxvY2FsZSwgdHJhbnNsYXRpb24pO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJQXBwU3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVTZWxlY3RvciB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdG9yZS1zZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBJUHJvamVjdEl0ZW1WaWV3TW9kZWwgfSBmcm9tICcuL3Byb2plY3QtaXRlbSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQcm9qZWN0Vmlld01vZGVsIHtcclxuICAgIGZlYXR1cmVkSXRlbXM6IElQcm9qZWN0SXRlbVZpZXdNb2RlbFtdO1xyXG4gICAgcHJvamVjdEl0ZW1zOiBJUHJvamVjdEl0ZW1WaWV3TW9kZWxbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RWaWV3TW9kZWxTZWxlY3RvciBleHRlbmRzIFN0b3JlU2VsZWN0b3I8SVByb2plY3RWaWV3TW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFsncHJvamVjdHMnXSxcclxuICAgICAgICAgICAgZ2V0UHJvamVjdFZpZXdNb2RlbEZyb21BcHBTdGF0ZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RWaWV3TW9kZWxGcm9tQXBwU3RhdGUoc3RhdGU6IElBcHBTdGF0ZSk6IElQcm9qZWN0Vmlld01vZGVsIHtcclxuICAgIHZhciBmZWF0dXJlZEl0ZW1zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJmaWxlLXZhbGlkYXRpb24tYWdlbnRcIixcclxuICAgICAgICAgICAgcGFydG5lcjogXCJOU0VSSU9cIixcclxuICAgICAgICAgICAgdmVyc2lvbjogXCI5LjVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBzb2x1dGlvbiB2YWxpZGF0ZXMgdGhhdCBkb2N1bWVudCBmaWxlcyBzdWNoIGFzIG5hdGl2ZXMsIGltYWdlcywgcHJvZHVjdGlvbiBpbWFnZXMsIGV4dHJhY3RlZCB0ZXh0LCBhbmQgdHJhbnNjcmlwdCBmaWxlcyBleGlzdCBvbiB0aGUgc2VydmVyLiBJdCBpZGVudGlmaWVzIGFueSBmaWxlcyB3aGljaCBhcmUgbWlzc2luZyBzbyB0aGF0IHRoZXkgY2FuIGJlIHJlc3RvcmVkLlwiLFxyXG4gICAgICAgICAgICBmb3JrQ291bnQ6IDUsXHJcbiAgICAgICAgICAgIHN0YXJDb3VudDogOCxcclxuICAgICAgICAgICAgYXV0aG9yVHlwZTogXCJkZXZlbG9wbWVudCBwYXJ0bmVyc1wiLFxyXG4gICAgICAgICAgICBwcm9qZWN0VHlwZTogXCJzY3JpcHRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInJlbGF0aXZpdHktdGVzdC1oZWxwZXJzXCIsXHJcbiAgICAgICAgICAgIHBhcnRuZXI6IFwiTlNFUklPXCIsXHJcbiAgICAgICAgICAgIHZlcnNpb246IFwiOS41XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkludGVncmF0aW9uIHRlc3RpbmcgaXMgYSBzb2Z0d2FyZSB0ZXN0aW5nIG1ldGhvZG9sb2d5IHVzZWQgdG8gdGVzdCBpbmRpdmlkdWFsIHNvZnR3YXJlIGNvbXBvbmVudHMgb3IgdW5pdHMgb2YgY29kZSB0byB2ZXJpZnkgdGhlaXIgaW50ZXJhY3Rpb24uIFRoZXNlIGNvbXBvbmVudHMgYXJlIHRlc3RlZCBhcyBhIHNpbmdsZSBncm91cCBvciBvcmdhbml6ZWQgaW4gYW4gaXRlcmF0aXZlIG1hbm5lci5cIixcclxuICAgICAgICAgICAgZm9ya0NvdW50OiA1LFxyXG4gICAgICAgICAgICBzdGFyQ291bnQ6IDgsXHJcbiAgICAgICAgICAgIGF1dGhvclR5cGU6IFwiZGV2ZWxvcG1lbnQgcGFydG5lcnNcIixcclxuICAgICAgICAgICAgcHJvamVjdFR5cGU6IFwiYXBwXCJcclxuICAgICAgICB9XTtcclxuXHJcbiAgICB2YXIgcHJvamVjdEl0ZW1zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJ0cnVuY2F0ZS1sb2dzXCIsXHJcbiAgICAgICAgICAgIHBhcnRuZXI6IFwiS0NVUkFcIixcclxuICAgICAgICAgICAgdmVyc2lvbjogXCI5LjVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQmVmb3JlIHJ1bm5pbmcgdGhpcyBzY3JpcHQsIHBsZWFzZSBtYWtlIHN1cmUgeW91IGFyZSBmYW1pbGlhciB3aXRoIHByb3BlciBtYW5hZ2VtZW50IG9mIFNRTCBTZXJ2ZXIgdHJhbnNhY3Rpb24gbG9nIGZpbGVzIC0ga0N1cmEgcHVibGlzaGVzIGEgZG9jdW1lbnQgb24gdGhpcyBzdWJqZWN0IGNhbGxlZCBNYW5hZ2luZyBSZWxhdGl2aXR5IFNRTCBMb2cgRmlsZXMuXCIsXHJcbiAgICAgICAgICAgIGZvcmtDb3VudDogNSxcclxuICAgICAgICAgICAgc3RhckNvdW50OiA4LFxyXG4gICAgICAgICAgICBhdXRob3JUeXBlOiBcImtjdXJhXCIsXHJcbiAgICAgICAgICAgIHByb2plY3RUeXBlOiBcInNjcmlwdFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicHMtcmVzdC1tb2R1bGVcIixcclxuICAgICAgICAgICAgcGFydG5lcjogXCJPUEVOIFNPVVJDRSBDT01NVU5JVFlcIixcclxuICAgICAgICAgICAgdmVyc2lvbjogXCI5LjVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBzb2x1dGlvbiB2YWxpZGF0ZXMgdGhhdCBkb2N1bWVudCBmaWxlcyBzdWNoIGFzIG5hdGl2ZXMsIGltYWdlcywgcHJvZHVjdGlvbiBpbWFnZXMsIGV4dHJhY3RlZCB0ZXh0LCBhbmQgdHJhbnNjcmlwdCBmaWxlcyBleGlzdCBvbiB0aGUgc2VydmVyLiBJdCBpZGVudGlmaWVzIGFueSBmaWxlcyB3aGljaCBhcmUgbWlzc2luZyBzbyB0aGF0IHRoZXkgY2FuIGJlIHJlc3RvcmVkLlwiLFxyXG4gICAgICAgICAgICBmb3JrQ291bnQ6IDUsXHJcbiAgICAgICAgICAgIHN0YXJDb3VudDogOCxcclxuICAgICAgICAgICAgYXV0aG9yVHlwZTogXCJvcGVuIHNvdXJjZSBjb21tdW5pdHlcIixcclxuICAgICAgICAgICAgcHJvamVjdFR5cGU6IFwidG9vbFwiXHJcbiAgICAgICAgfV07XHJcbiAgICByZXR1cm4geyBmZWF0dXJlZEl0ZW1zOiBmZWF0dXJlZEl0ZW1zLCBwcm9qZWN0SXRlbXM6IHByb2plY3RJdGVtcyB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9wcm9qZWN0LnZpZXdtb2RlbC50cyIsImV4cG9ydCAqIGZyb20gJy4vcm9vdC5jb21wb25lbnQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL3Jvb3QvaW5kZXgudHMiLCJpbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiwgc3R5bGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBwaW5Sb290ID0gdHJpZ2dlcigncGluUm9vdCcsIFtcclxuICAgIHN0YXRlKCcxJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDMzMHB4KScsIHdpZHRoOiAnY2FsYygxMDAlIC0gMzMwcHgpJyB9KSksXHJcbiAgICBzdGF0ZSgnMCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsIHdpZHRoOiAnKicgfSkpLFxyXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgYW5pbWF0ZSgnMHMnKSksXHJcbiAgICB0cmFuc2l0aW9uKCcqID0+IConLCBhbmltYXRlKCcuNnMgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpJykpXHJcbl0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL3Jvb3Qvcm9vdC5hbmltYXRpb25zLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tICdAYW5ndWxhci1yZWR1eC9zdG9yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBwaW5Sb290IH0gZnJvbSAnLi9yb290LmFuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBSb290Vmlld01vZGVsU2VsZWN0b3IsIElSb290Vmlld01vZGVsIH0gZnJvbSAnLi9yb290LnZpZXdtb2RlbCc7XHJcbmltcG9ydCB7IEhlYWRlclZpZXdNb2RlbFNlbGVjdG9yIH0gZnJvbSAnLi4vaGVhZGVyJztcclxuaW1wb3J0IHsgU2VhcmNoVmlld01vZGVsU2VsZWN0b3IgfSBmcm9tICcuLi9zZWFyY2gnO1xyXG4vL2ltcG9ydCB7IFRhZ0l0ZW1WaWV3TW9kZWxTZWxlY3RvciB9IGZyb20gJy4uL3RhZy90YWctaXRlbSc7XHJcbmltcG9ydCB7IFRhZ1ZpZXdNb2RlbFNlbGVjdG9yIH0gZnJvbSAnLi4vdGFnJztcclxuaW1wb3J0IHsgUGFydG5lclBhbmVsVmlld01vZGVsU2VsZWN0b3IgfSBmcm9tICcuLi9wYXJ0bmVyLXBhbmVsJztcclxuaW1wb3J0IHsgUHJvamVjdFZpZXdNb2RlbFNlbGVjdG9yIH0gZnJvbSAnLi4vcHJvamVjdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncm9vdCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9yb290LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3Jvb3QuY29tcG9uZW50LnNjc3MnKV0sXHJcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgcGluUm9vdFxyXG4gICAgXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290IHtcclxuXHJcbiAgICBAc2VsZWN0KFsnc2lkZWJhcicsICdpc1Bpbm5lZCddKSBpc1Bpbm5lZDogT2JzZXJ2YWJsZTxib29sZWFuPlxyXG4gICAgcHJpdmF0ZSByb290OiBSb290Vmlld01vZGVsU2VsZWN0b3IgPSBuZXcgUm9vdFZpZXdNb2RlbFNlbGVjdG9yKCk7XHJcbiAgICBwcml2YXRlIGhlYWRlcjogSGVhZGVyVmlld01vZGVsU2VsZWN0b3IgPSBuZXcgSGVhZGVyVmlld01vZGVsU2VsZWN0b3IoKTtcclxuICAgIHByaXZhdGUgc2VhcmNoOiBTZWFyY2hWaWV3TW9kZWxTZWxlY3RvciA9IG5ldyBTZWFyY2hWaWV3TW9kZWxTZWxlY3RvcigpO1xyXG4gICAgcHJpdmF0ZSB0YWc6IFRhZ1ZpZXdNb2RlbFNlbGVjdG9yID0gbmV3IFRhZ1ZpZXdNb2RlbFNlbGVjdG9yKCk7XHJcbiAgICBwcml2YXRlIHBhcnRuZXJQYW5lbDogUGFydG5lclBhbmVsVmlld01vZGVsU2VsZWN0b3IgPSBuZXcgUGFydG5lclBhbmVsVmlld01vZGVsU2VsZWN0b3IoKTtcclxuICAgIHByaXZhdGUgcHJvamVjdDogUHJvamVjdFZpZXdNb2RlbFNlbGVjdG9yID0gbmV3IFByb2plY3RWaWV3TW9kZWxTZWxlY3RvcigpO1xyXG4gICAgLy9wcml2YXRlIHRhZ0l0ZW1zOiBUYWdJdGVtVmlld01vZGVsU2VsZWN0b3IgPSBuZXcgVGFnSXRlbVZpZXdNb2RlbFNlbGVjdG9yKCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9yb290L3Jvb3QuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSUFwcFN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RvcmUtc2VsZWN0b3JcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJvb3RWaWV3TW9kZWwge1xyXG4gICAgaXNTZWFyY2hWaXNpYmxlOiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb290Vmlld01vZGVsU2VsZWN0b3IgZXh0ZW5kcyBTdG9yZVNlbGVjdG9yPElSb290Vmlld01vZGVsPiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihbJ2hlYWRlcicsICdzZWFyY2gnXSwgZ2V0Um9vdFZpZXdNb2RlbEZyb21BcHBTdGF0ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290Vmlld01vZGVsRnJvbUFwcFN0YXRlKHN0YXRlOiBJQXBwU3RhdGUpOiBJUm9vdFZpZXdNb2RlbHtcclxuICAgIHJldHVybiB7IGlzU2VhcmNoVmlzaWJsZTogc3RhdGUuc2VhcmNoLmlzVmlzaWJsZSB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvcm9vdC9yb290LnZpZXdtb2RlbC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uLCBMb2NhbGVTZXJ2aWNlLCBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLWwxMG4nO1xyXG5pbXBvcnQgeyBJU2VhcmNoVmlld01vZGVsIH0gZnJvbSAnLi9zZWFyY2gudmlld21vZGVsJztcclxuaW1wb3J0IHsgU2VhcmNoQWN0aW9ucyB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBSb290QWN0aW9ucyB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NlYXJjaCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zZWFyY2guY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vc2VhcmNoLmNvbXBvbmVudC5zY3NzJyldLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBMb2NhbGl6YXRpb24ge1xyXG4gICAgQElucHV0KCkgdmlld01vZGVsOiBJU2VhcmNoVmlld01vZGVsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2NhbGU6IExvY2FsZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHNlYXJjaEFjdGlvbnM6IFNlYXJjaEFjdGlvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSByb290QWN0aW9uczogUm9vdEFjdGlvbnNcclxuICAgICAgICApIHtcclxuICAgICAgICBzdXBlcihsb2NhbGUsIHRyYW5zbGF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaENsb3NlZCgpIHtcclxuICAgICAgICB0aGlzLnJvb3RBY3Rpb25zLnRvZ2dsZVNlYXJjaCgpO1xyXG4gICAgfVxyXG4gICAgb25TZWFyY2hUZXh0Q2hhbmdlZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy52aWV3TW9kZWwuc2VhcmNoVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgIHZhciBzZWFyY2hUZXh0TGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMudmlld01vZGVsLnNob3dSZXN1bHRzID0gc2VhcmNoVGV4dExlbmd0aCA+IDI7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hBY3Rpb25zLmV4ZWN1dGVTZWFyY2godGhpcy52aWV3TW9kZWwpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJQXBwU3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVTZWxlY3RvciB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdG9yZS1zZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBJVGFnVmlld01vZGVsIH0gZnJvbSAnLi4vdGFnJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlYXJjaFZpZXdNb2RlbCB7XHJcbiAgICBpc1Zpc2libGU6IGJvb2xlYW4sXHJcbiAgICBzZWFyY2hUZXh0OiBzdHJpbmcsXHJcbiAgICB0YWc6IElUYWdWaWV3TW9kZWwsXHJcbiAgICBzaG93UmVzdWx0czogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoVmlld01vZGVsU2VsZWN0b3IgZXh0ZW5kcyBTdG9yZVNlbGVjdG9yPElTZWFyY2hWaWV3TW9kZWw+IHsgXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoWydzZWFyY2gnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgICAgIGdldFNlYXJjaFZpZXdNb2RlbEZyb21BcHBTdGF0ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWFyY2hWaWV3TW9kZWxGcm9tQXBwU3RhdGUoc3RhdGU6IElBcHBTdGF0ZSk6IElTZWFyY2hWaWV3TW9kZWwge1xyXG4gICAgaWYgKHN0YXRlID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIHsgaXNWaXNpYmxlOiBmYWxzZSwgc2VhcmNoVGV4dDogJycsIHRhZzogeyB0YWdJdGVtczogW10gfSwgc2hvd1Jlc3VsdHM6IGZhbHNlIH07XHJcblxyXG4gICAgcmV0dXJuIHsgaXNWaXNpYmxlOiBzdGF0ZS5oZWFkZXIuaXNIaWRkZW4sIHNlYXJjaFRleHQ6IHN0YXRlLnNlYXJjaC5zZWFyY2hUZXh0LCB0YWc6IHsgdGFnSXRlbXM6IHN0YXRlLnRhZ0l0ZW1zfSwgc2hvd1Jlc3VsdHM6IHN0YXRlLnNlYXJjaC5zaG93UmVzdWx0cyB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC52aWV3bW9kZWwudHMiLCJleHBvcnQgKiBmcm9tICcuL3RhZy1pdGVtLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdGFnLWl0ZW0udmlld21vZGVsJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy90YWcvdGFnLWl0ZW0vaW5kZXgudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvbiwgTG9jYWxlU2VydmljZSwgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1sMTBuJztcclxuaW1wb3J0IHsgSVRhZ0l0ZW1WaWV3TW9kZWwgfSBmcm9tIFwiLi90YWctaXRlbS52aWV3bW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0YWctaXRlbScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90YWctaXRlbS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi90YWctaXRlbS5jb21wb25lbnQuc2NzcycpXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFnSXRlbSBleHRlbmRzIExvY2FsaXphdGlvbiB7XHJcbiAgICBASW5wdXQoKSB2aWV3TW9kZWw6IElUYWdJdGVtVmlld01vZGVsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2NhbGU6IExvY2FsZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHN1cGVyKGxvY2FsZSwgdHJhbnNsYXRpb24pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL3RhZy90YWctaXRlbS90YWctaXRlbS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvbiwgTG9jYWxlU2VydmljZSwgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1sMTBuJztcclxuaW1wb3J0IHsgSVRhZ0l0ZW1WaWV3TW9kZWwgfSBmcm9tICcuL3RhZy1pdGVtJztcclxuaW1wb3J0IHsgSVRhZ1ZpZXdNb2RlbCB9IGZyb20gJy4vdGFnLnZpZXdtb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGFnJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RhZy5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi90YWcuY29tcG9uZW50LnNjc3MnKV0sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWcgZXh0ZW5kcyBMb2NhbGl6YXRpb24ge1xyXG4gICAgQElucHV0KCkgdmlld01vZGVsOiBJVGFnVmlld01vZGVsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2NhbGU6IExvY2FsZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHN1cGVyKGxvY2FsZSwgdHJhbnNsYXRpb24pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvdGFnL3RhZy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJQXBwU3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVTZWxlY3RvciB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdG9yZS1zZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBJVGFnSXRlbVZpZXdNb2RlbCB9IGZyb20gXCIuL3RhZy1pdGVtXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUYWdWaWV3TW9kZWwge1xyXG4gICAgdGFnSXRlbXM6IElUYWdJdGVtVmlld01vZGVsW11cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhZ1ZpZXdNb2RlbFNlbGVjdG9yIGV4dGVuZHMgU3RvcmVTZWxlY3RvcjxJVGFnVmlld01vZGVsPntcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFsndGFnSXRlbXMnXVxyXG4gICAgICAgICAgICAsIGdldFRhZ1NlbGVjdG9yVmlld01vZGVsRnJvbUFwcFN0YXRlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhZ1NlbGVjdG9yVmlld01vZGVsRnJvbUFwcFN0YXRlKHN0YXRlOiBJQXBwU3RhdGUpOiBJVGFnVmlld01vZGVsIHtcclxuICAgIHJldHVybiB7IHRhZ0l0ZW1zOiAgc3RhdGUudGFnSXRlbXMgfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL3RhZy90YWcudmlld21vZGVsLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvYWRpbmdBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvbiwgTG9jYWxlU2VydmljZSwgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1sMTBuJztcclxuaW1wb3J0IHtKc29uU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvanNvbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYWxlOiBMb2NhbGVTZXJ2aWNlLCBwcml2YXRlIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsIHByaXZhdGUgYWN0aW9uczogTG9hZGluZ0FjdGlvbnMsIHByaXZhdGUganNvblNlcnZpY2U6IEpzb25TZXJ2aWNlKSB7IH1cclxuXHJcbiAgICAvLyBGb3Igc29tZSByZWFzb24sIFZTIEludGVsbGlzZW5zZSBkb2VzIG5vdCBhY2NlcHQgdGhhdCBQcm9taXNlIGhhcyBiZWVuIGRlZmluZWQgaW4gcG9seWZpbGxzLnRzLFxyXG4gICAgLy8gc28gZXJyb3JzIHNob3cgaGVyZSBidXQgZXZlcnl0aGluZyBjb21waWxlcyBmaW5lLlxyXG4gICAgY2FuQWN0aXZhdGUoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy8gUmVzb2x2ZSB0aGUgcHJvbWlzZSB3aGVuIHlvdSB3YW50IHRoZSBuYXZpZ2F0aW9uIHRvIGdvIHRocm91Z2guXHJcbiAgICAgICAgICAgIC8vIENhbGwgdGhlIEZpbmlzaCBhY3Rpb24gb24gdGhlIGxvYWRpbmcgc3RhdGUgd2hlbiB5b3Ugd2FudCB0aGUgbG9hZCBzY3JlZW4gdG8gZGlzYXBwZWFyLlxyXG5cclxuICAgICAgICAgICAgbGV0IHN0YXJ0dXBUYXNrcyA9IFtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZE1pblRpbWUoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZExvY2FsaXphdGlvbigpLFxyXG4gICAgICAgICAgICAgICAgLy90aGlzLmpzb25TZXJ2aWNlLmdldFRhZ3MoKVxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoc3RhcnR1cFRhc2tzKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmZpbmlzaExvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBtYWtlIGxvYWQgc2NyZWVuIHZpc2libGUgZm9yIGF0IGxlYXN0IDIgc2Vjb25kcyBmb3IgZGVtbyBwdXJwb3NlcyBvbmx5XHJcbiAgICBsb2FkTWluVGltZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTG9jYWxpemF0aW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgdGhpcy5sb2NhbGUuYWRkQ29uZmlndXJhdGlvbigpXHJcbiAgICAgICAgICAgIC5hZGRMYW5ndWFnZXMoWydlbicsICdlcyddKVxyXG4gICAgICAgICAgICAuZGVmaW5lTGFuZ3VhZ2UoJ2VuJyk7XHJcbiAgICAgICAgdGhpcy5sb2NhbGUuaW5pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uLmFkZENvbmZpZ3VyYXRpb24oKVxyXG4gICAgICAgICAgICAuYWRkUHJvdmlkZXIoJy4vbGFuZ3VhZ2VzL2xvY2FsZS0nKTtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uLmluaXQoKTtcclxuXHJcbiAgICAgICAgbGV0IHByb21pc2U6IFByb21pc2U8YW55PiA9IG5ldyBQcm9taXNlKChyZXNvbHZlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGlvbkNoYW5nZWQuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24uaW5pdCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9ndWFyZHMvYm9vdHN0cmFwLmd1YXJkLnRzIiwiaW1wb3J0IHsgSUFwcFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IHJlZmVyZW5jZVJlZHVjZXJGYWN0b3J5LCBjb2xsZWN0aW9uUmVkdWNlckZhY3RvcnksIElSZWZlcmVuY2UsIElBY3Rpb24gfSBmcm9tIFwiLi4vY29tbW9uXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElIZWFkZXJTdGF0ZSB7XHJcbiAgICBpc0hpZGRlbjogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBJTklUX1NUQVRFOiBJSGVhZGVyU3RhdGUgPSB7XHJcbiAgICBpc0hpZGRlbjogZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhlYWRlclJlZHVjZXIoc3RhdGUgPSBJTklUX1NUQVRFLCBhY3Rpb246IElBY3Rpb24pOiBJSGVhZGVyU3RhdGUge1xyXG4gICAgbGV0IG5ld1N0YXRlOiBJSGVhZGVyU3RhdGUgPSBzdGF0ZTtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25zLkhlYWRlckFjdGlvbnMuVE9HR0xFX1NFQVJDSDpcclxuICAgICAgICBjYXNlIGFjdGlvbnMuU2VhcmNoQWN0aW9ucy5DTE9TRV9TRUFSQ0g6XHJcbiAgICAgICAgICAgIG5ld1N0YXRlID0geyAuLi5zdGF0ZSwgaXNIaWRkZW46ICFzdGF0ZS5pc0hpZGRlbiB9O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdTdGF0ZTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9zdG9yZS9oZWFkZXIvaGVhZGVyLnJlZHVjZXIudHMiLCJpbXBvcnQgeyBJQXBwU3RhdGUsIHJvb3RSZWR1Y2VyIH0gZnJvbSAnLi9zdG9yZSc7XHJcblxyXG5leHBvcnQgeyBJQXBwU3RhdGUsIHJvb3RSZWR1Y2VyIH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL3N0b3JlL2luZGV4LnRzIiwiaW1wb3J0IHsgSUFwcFN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IElBY3Rpb24gfSBmcm9tICcuLi9jb21tb24nO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGFydG5lciB7XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICByZXBvc2l0b3J5TGluazogc3RyaW5nXHJcbiAgICBpbmRleDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJ0bmVyc1JlZHVjZXIoc3RhdGU6IElQYXJ0bmVyW10gPSBbXSwgYWN0aW9uOiBJQWN0aW9uKTogSVBhcnRuZXJbXSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25zLkFwcFN0YXRlQWN0aW9ucy5JTklUX1NUQVRFOlxyXG4gICAgICAgICAgICBsZXQgYXBwID0gYWN0aW9uLmRhdGEgYXMgSUFwcFN0YXRlO1xyXG4gICAgICAgICAgICByZXR1cm4gYXBwLnBhcnRuZXJzICYmIFsuLi5hcHAucGFydG5lcnNdIHx8IFtdO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9zdG9yZS9wYXJ0bmVycy9wYXJ0bmVycy5yZWR1Y2VyLnRzIiwiaW1wb3J0IHsgSUFwcFN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IElBY3Rpb24gfSBmcm9tICcuLi9jb21tb24nO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvamVjdEl0ZW0ge1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgcmVwb3NpdG9yeUxpbms6IHN0cmluZ1xyXG4gICAgaW5kZXg6IG51bWJlclxyXG4gICAgcGFydG5lcjogc3RyaW5nXHJcbiAgICBkZXNjcmlwdGlvbjpzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RzUmVkdWNlcihzdGF0ZTogSVByb2plY3RJdGVtW10gPSBbXSwgYWN0aW9uOiBJQWN0aW9uKTogSVByb2plY3RJdGVtW10ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9ucy5BcHBTdGF0ZUFjdGlvbnMuSU5JVF9TVEFURTpcclxuICAgICAgICAgICAgbGV0IGFwcCA9IGFjdGlvbi5kYXRhIGFzIElBcHBTdGF0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGFwcC5wcm9qZWN0cyAmJiBbLi4uYXBwLnByb2plY3RzXSB8fCBbXTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvc3RvcmUvcHJvamVjdHMvcHJvamVjdHMucmVkdWNlci50cyIsImltcG9ydCB7IElBcHBTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyByZWZlcmVuY2VSZWR1Y2VyRmFjdG9yeSwgY29sbGVjdGlvblJlZHVjZXJGYWN0b3J5LCBJUmVmZXJlbmNlLCBJQWN0aW9uIH0gZnJvbSBcIi4uL2NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUm9vdFN0YXRlIHtcclxuICAgIGlzU2VhcmNoVmlzaWJsZTogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBJTklUX1NUQVRFOiBJUm9vdFN0YXRlID0ge1xyXG4gICAgaXNTZWFyY2hWaXNpYmxlOiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm9vdFJlZHVjZXIoc3RhdGUgPSBJTklUX1NUQVRFLCBhY3Rpb246IElBY3Rpb24pOiBJUm9vdFN0YXRlIHtcclxuICAgIGxldCBuZXdTdGF0ZTogSVJvb3RTdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIGFjdGlvbnMuUm9vdEFjdGlvbnMuVE9HR0xFX1NFQVJDSDpcclxuICAgICAgICAgICAgbmV3U3RhdGUgPSB7IC4uLnN0YXRlLCBpc1NlYXJjaFZpc2libGU6ICFzdGF0ZS5pc1NlYXJjaFZpc2libGUgfTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvc3RvcmUvcm9vdC9yb290LnJlZHVjZXIudHMiLCJpbXBvcnQgeyBJQXBwU3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgSVJlZmVyZW5jZSwgSUFjdGlvbiB9IGZyb20gJy4uL2NvbW1vbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTZWFyY2hTdGF0ZSB7XHJcbiAgICBpc1Zpc2libGU6IGJvb2xlYW4sXHJcbiAgICBzZWFyY2hUZXh0OiBzdHJpbmcsXHJcbiAgICBzaG93UmVzdWx0czogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBJTklUX1NUQVRFOiBJU2VhcmNoU3RhdGUgPSB7XHJcbiAgICBpc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgc2VhcmNoVGV4dDogJycsXHJcbiAgICBzaG93UmVzdWx0czogZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFJlZHVjZXIoc3RhdGUgPSBJTklUX1NUQVRFLCBhY3Rpb246IElBY3Rpb24pOiBJU2VhcmNoU3RhdGUge1xyXG4gICAgbGV0IG5ld1N0YXRlOiBJU2VhcmNoU3RhdGUgPSBzdGF0ZTtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIGFjdGlvbnMuU2VhcmNoQWN0aW9ucy5DTE9TRV9TRUFSQ0g6XHJcbiAgICAgICAgY2FzZSBhY3Rpb25zLkhlYWRlckFjdGlvbnMuVE9HR0xFX1NFQVJDSDpcclxuICAgICAgICAgICAgbmV3U3RhdGUgPSB7IC4uLnN0YXRlLCBpc1Zpc2libGU6ICFzdGF0ZS5pc1Zpc2libGUgfTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25zLlNlYXJjaEFjdGlvbnMuRVhFQ1VURV9TRUFSQ0g6XHJcbiAgICAgICAgICAgIGxldCBhcHAgPSBhY3Rpb24uZGF0YSBhcyBJU2VhcmNoU3RhdGU7XHJcbiAgICAgICAgICAgIG5ld1N0YXRlID0geyAuLi5zdGF0ZSwgc2VhcmNoVGV4dDogYXBwLnNlYXJjaFRleHQsIHNob3dSZXN1bHRzOiBhcHAuc2hvd1Jlc3VsdHN9O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdTdGF0ZTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9zdG9yZS9zZWFyY2gvc2VhcmNoLnJlZHVjZXIudHMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCAqIGFzIGhlYWRlciBmcm9tIFwiLi9oZWFkZXIvaGVhZGVyLnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgc2VhcmNoIGZyb20gXCIuL3NlYXJjaC9zZWFyY2gucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyB0YWdJdGVtcyBmcm9tIFwiLi90YWdJdGVtcy90YWdJdGVtcy5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIHJvb3QgZnJvbSBcIi4vcm9vdC9yb290LnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgcGFydG5lcnMgZnJvbSAnLi9wYXJ0bmVycy9wYXJ0bmVycy5yZWR1Y2VyJztcclxuaW1wb3J0ICogYXMgcHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0cy9wcm9qZWN0cy5yZWR1Y2VyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFwcFN0YXRlIHtcclxuICAgIHJvb3Q/OiByb290LklSb290U3RhdGUsXHJcbiAgICBoZWFkZXI/OiBoZWFkZXIuSUhlYWRlclN0YXRlLFxyXG4gICAgc2VhcmNoPzogc2VhcmNoLklTZWFyY2hTdGF0ZSxcclxuICAgIHRhZ0l0ZW1zPzogdGFnSXRlbXMuSVRhZ0l0ZW1bXSxcclxuICAgIHBhcnRuZXJzPzogcGFydG5lcnMuSVBhcnRuZXJbXSxcclxuICAgIHByb2plY3RzPzogcHJvamVjdHMuSVByb2plY3RJdGVtW11cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzPElBcHBTdGF0ZT4oe1xyXG4gICAgcm9vdDogcm9vdC5yb290UmVkdWNlcixcclxuICAgIGhlYWRlcjogaGVhZGVyLmhlYWRlclJlZHVjZXIsXHJcbiAgICBzZWFyY2g6IHNlYXJjaC5zZWFyY2hSZWR1Y2VyLFxyXG4gICAgdGFnSXRlbXM6IHRhZ0l0ZW1zLnRhZ0l0ZW1zUmVkdWNlcixcclxuICAgIHBhcnRuZXJzOiBwYXJ0bmVycy5wYXJ0bmVyc1JlZHVjZXIsXHJcbiAgICBwcm9qZWN0czogcHJvamVjdHMucHJvamVjdHNSZWR1Y2VyXHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvc3RvcmUvc3RvcmUudHMiLCJpbXBvcnQgeyBJQXBwU3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgSUFjdGlvbiB9IGZyb20gXCIuLi9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRhZ0l0ZW0ge1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0YWdJdGVtc1JlZHVjZXIoc3RhdGU6IElUYWdJdGVtW10gPSBbXSwgYWN0aW9uOiBJQWN0aW9uKTogSVRhZ0l0ZW1bXSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25zLkFwcFN0YXRlQWN0aW9ucy5JTklUX1NUQVRFOlxyXG4gICAgICAgICAgICBsZXQgYXBwID0gYWN0aW9uLmRhdGEgYXMgSUFwcFN0YXRlO1xyXG4gICAgICAgICAgICByZXR1cm4gYXBwLnRhZ0l0ZW1zICYmIFsuLi5hcHAudGFnSXRlbXNdIHx8IFtdO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9zdG9yZS90YWdJdGVtcy90YWdJdGVtcy5yZWR1Y2VyLnRzIiwiaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xyXG5cclxuaWYgKElTX1BST0RVQ1RJT04pIHtcclxuICAgIGVuYWJsZVByb2RNb2RlKCk7XHJcbn1cclxuXHJcbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9tYWluLnRzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOmhvc3Qge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNGRjdGMkYgMCUsICNGNjhBMUYgMTAwJSk7XFxuICBjb2xvcjogI0Y3RjZGMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMjZweDtcXG4gIGZvbnQtZmFtaWx5OiAnQ2FydG9ncmFwaCBTYW5zIENGJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG4gIHRvcDogMDsgfVxcblxcbi5jb250ZW50LWhlYWRlciB7XFxuICB3aWR0aDogNjY4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGNlbnRlcjsgfVxcbiAgLmNvbnRlbnQtaGVhZGVyLm9wZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cXG4gIC5jb250ZW50LWhlYWRlciAudGl0bGUtcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyptYXJnaW4tYm90dG9tOiAzMHB4OyovXFxuICAgIG1hcmdpbi1ib3R0b206IDhweDsgfVxcbiAgLmNvbnRlbnQtaGVhZGVyIC5sb2dvIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uLy4uL2NvbnRlbnQvaW1nL2ljb24tbG9nby5zdmdcIikgKyBcIik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjRkY3RjJGIDAlLCAjRjY4QTFGIDEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxcbiAgLmNvbnRlbnQtaGVhZGVyIC5sb2dvLXJlbGF0aXZpdHkge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiAxODJweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uLy4uL2NvbnRlbnQvaW1nL2xvZ28tcmVsYXRpdml0eS5zdmdcIikgKyBcIik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjRkY3RjJGIDAlLCAjRjY4QTFGIDEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIGZpbGw6ICNGRkZGRkY7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTRweDsgfVxcbiAgICAuY29udGVudC1oZWFkZXIgLmxvZ28tcmVsYXRpdml0eSAubG9nby1yZWxhdGl2aXR5ID4gcGF0aCB7XFxuICAgICAgZmlsbDogI0ZGRkZGRjsgfVxcbiAgLmNvbnRlbnQtaGVhZGVyIC5yZWxhdGl2aXR5LWZvbnQge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxcbiAgLmNvbnRlbnQtaGVhZGVyIC50aXRsZS10ZXh0IHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxOyB9XFxuICAuY29udGVudC1oZWFkZXIgLmhlYWRlci10ZXh0IHtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cXG4gIC5jb250ZW50LWhlYWRlciAuc2VhcmNoLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7IH1cXG4gICAgLmNvbnRlbnQtaGVhZGVyIC5zZWFyY2gtcm93OmhvdmVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyB9XFxuICAuY29udGVudC1oZWFkZXIgLmljb24tc2VhcmNoIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDsgfVxcbiAgLmNvbnRlbnQtaGVhZGVyIC5zZWFyY2gtdGV4dCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDc0cHg7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI0ZGN0YyRiAwJSwgI0Y2OEExRiAxMDAlKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/e1wibWluaW1pemVcIjpmYWxzZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpob3N0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2FydG9ncmFwaCBTYW5zIENGXFxcIjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMnB4OyB9XFxuXFxuLnBhbmVsLWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRkNGQTtcXG4gIGhlaWdodDogNjBweDtcXG4gIHdpZHRoOiAxNjNweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG4gIC5wYW5lbC1pdGVtIC5wYW5lbC1pdGVtLXRleHQge1xcbiAgICBoZWlnaHQ6IDExcHg7XFxuICAgIHdpZHRoOiA0OXB4O1xcbiAgICBjb2xvcjogI0EwNzNERTtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBsaW5lLWhlaWdodDogMTFweDsgfVxcbiAgLnBhbmVsLWl0ZW0uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5wYW5lbC1pdGVtLWxpbmsge1xcbiAgaGVpZ2h0OiAxMXB4O1xcbiAgY29sb3I6ICM5RTlEOTg7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDExcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubW9yZS1wYXJ0bmVycyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGNkYxO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IDE2M3B4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogbm9uZTsgfVxcbiAgLm1vcmUtcGFydG5lcnMudmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj97XCJtaW5pbWl6ZVwiOmZhbHNlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0bmVyLXBhbmVsL3BhcnRuZXItcGFuZWwtaXRlbS9wYXJ0bmVyLXBhbmVsLWl0ZW0uY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6aG9zdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBmb250LWZhbWlseTogJ0NhcnRvZ3JhcGggU2FucyBDRic7IH1cXG5cXG4ucGFuZWwtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDcwcHg7XFxuICB3aWR0aDogNjY4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDcwcHg7IH1cXG5cXG4ucGFuZWwtaGVhZGVyIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICNGRjdGMkY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XFxuXFxuLnBhbmVsLXJvdyB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAyOXB4OyB9XFxuXFxuLnBhbmVsLXRleHQge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgY29sb3I6ICM2NjY1NjI7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG5cXG4ubGluay10ZXh0IHtcXG4gIGhlaWdodDogMTNweDtcXG4gIGNvbG9yOiAjOUU5RDk4O1xcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNTAwOyB9XFxuXFxuLmFycm93IHtcXG4gIGNvbG9yOiAjOUU5RDk4O1xcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gIGhlaWdodDogN3B4O1xcbiAgd2lkdGg6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vY29udGVudC9pbWcvYXJyb3cuc3ZnXCIpICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGZsZXg6IDAgMCBhdXRvOyB9XFxuXFxuLnRpbGUtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMjVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/e1wibWluaW1pemVcIjpmYWxzZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvYXBwL2NvbXBvbmVudHMvcGFydG5lci1wYW5lbC9wYXJ0bmVyLXBhbmVsLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0MzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOmhvc3Qge1xcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGQ0ZBOyovXFxuICBmb250LWZhbWlseTogXFxcIkNhcnRvZ3JhcGggU2FucyBDRlxcXCI7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMjIycHg7XFxuICB3aWR0aDogNjY4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRkNGQTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuICAuY29udGFpbmVyIC5hdXRob3ItdHlwZS1jb2x1bW4ge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAgIC5jb250YWluZXIgLmF1dGhvci10eXBlLWNvbHVtbi5rY3VyYSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4OTgxRDsgfVxcbiAgICAuY29udGFpbmVyIC5hdXRob3ItdHlwZS1jb2x1bW4ucGFydG5lciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkxOUJFQTsgfVxcbiAgICAuY29udGFpbmVyIC5hdXRob3ItdHlwZS1jb2x1bW4ub3Blbi1zb3VyY2Uge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzQUMwQTc7IH1cXG4gIC5jb250YWluZXIgLmljb24tY29sdW1uIHtcXG4gICAgLyptYXJnaW4tbGVmdDogMTBweDsqL1xcbiAgICB3aWR0aDogNjhweDtcXG4gICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAgIC5jb250YWluZXIgLmljb24tY29sdW1uIC5wcm9qZWN0LXR5cGUtaWNvbiB7XFxuICAgICAgaGVpZ2h0OiAxNnB4O1xcbiAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgIG1hcmdpbi10b3A6IDYycHg7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDI2cHg7XFxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XFxuICAgICAgLmNvbnRhaW5lciAuaWNvbi1jb2x1bW4gLnByb2plY3QtdHlwZS1pY29uLmFwcCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vLi4vY29udGVudC9pbWcvYXBwLnN2Z1wiKSArIFwiKTsgfVxcbiAgICAgIC5jb250YWluZXIgLmljb24tY29sdW1uIC5wcm9qZWN0LXR5cGUtaWNvbi5zY3JpcHQge1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uLy4uLy4uL2NvbnRlbnQvaW1nL3NjcmlwdC5zdmdcIikgKyBcIik7IH1cXG4gICAgICAuY29udGFpbmVyIC5pY29uLWNvbHVtbiAucHJvamVjdC10eXBlLWljb24udG9vbCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vLi4vY29udGVudC9pbWcvdG9vbC5zdmdcIikgKyBcIik7IH1cXG4gIC5jb250YWluZXIgLmNvbnRlbnQtY29sdW1uIHtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB3aWR0aDogNDk0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4OyB9XFxuICAgIC5jb250YWluZXIgLmNvbnRlbnQtY29sdW1uIC5wYXJ0bmVyLXRleHQua2N1cmEge1xcbiAgICAgIGNvbG9yOiAjRjg5ODFEOyB9XFxuICAgIC5jb250YWluZXIgLmNvbnRlbnQtY29sdW1uIC5wYXJ0bmVyLXRleHQub3Blbi1zb3VyY2Uge1xcbiAgICAgIGNvbG9yOiAjM0FDMEE3OyB9XFxuICAgIC5jb250YWluZXIgLmNvbnRlbnQtY29sdW1uIC5wYXJ0bmVyLXRleHQucGFydG5lciB7XFxuICAgICAgY29sb3I6ICM5MTlCRUE7IH1cXG4gICAgLmNvbnRhaW5lciAuY29udGVudC1jb2x1bW4gLnByb2plY3Qtcm93IHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAuY29udGFpbmVyIC5jb250ZW50LWNvbHVtbiAucHJvamVjdC1uYW1lIHtcXG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgICAgY29sb3I6ICMyRTJFMkU7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7IH1cXG4gICAgLmNvbnRhaW5lciAuY29udGVudC1jb2x1bW4gLnZlcnNpb24ge1xcbiAgICAgIGNvbG9yOiAjQ0NDQkM0O1xcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICAgICAgbWFyZ2luLXRvcDogMTZweDsgfVxcbiAgICAuY29udGFpbmVyIC5jb250ZW50LWNvbHVtbiAuZGVzY3JpcHRpb24ge1xcbiAgICAgIC8qaGVpZ2h0OiA4MHB4OyovXFxuICAgICAgY29sb3I6ICM2NjY1NjI7XFxuICAgICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgbWFyZ2luLXRvcDogMTJweDsgfVxcbiAgLmNvbnRhaW5lciAuZGF0YS1jb2x1bW4gLmRhdGEtcm93IHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgLmNvbnRhaW5lciAuZGF0YS1jb2x1bW4gLmRhdGEtcm93LmtjdXJhIHtcXG4gICAgICBjb2xvcjogI0Y4OTgxRDsgfVxcbiAgICAuY29udGFpbmVyIC5kYXRhLWNvbHVtbiAuZGF0YS1yb3cub3Blbi1zb3VyY2Uge1xcbiAgICAgIGNvbG9yOiAjM0FDMEE3OyB9XFxuICAgIC5jb250YWluZXIgLmRhdGEtY29sdW1uIC5kYXRhLXJvdy5wYXJ0bmVyIHtcXG4gICAgICBjb2xvcjogIzkxOUJFQTsgfVxcbiAgLmNvbnRhaW5lciAuZGF0YS1jb2x1bW4gLmRhdGEtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7IH1cXG4gIC5jb250YWluZXIgLmRhdGEtY29sdW1uIC5zdGFyLWxvZ28ge1xcbiAgICBoZWlnaHQ6IDEzLjg3cHg7XFxuICAgIHdpZHRoOiAxNC45M3B4O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogNHB4OyB9XFxuICAgIC5jb250YWluZXIgLmRhdGEtY29sdW1uIC5zdGFyLWxvZ28ua2N1cmEge1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9jb250ZW50L2ltZy9zdGFyLW9yYW5nZS5zdmdcIikgKyBcIik7IH1cXG4gICAgLmNvbnRhaW5lciAuZGF0YS1jb2x1bW4gLnN0YXItbG9nby5vcGVuLXNvdXJjZSB7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uLy4uLy4uL2NvbnRlbnQvaW1nL3N0YXItZ3JlZW4uc3ZnXCIpICsgXCIpOyB9XFxuICAgIC5jb250YWluZXIgLmRhdGEtY29sdW1uIC5zdGFyLWxvZ28ucGFydG5lciB7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uLy4uLy4uL2NvbnRlbnQvaW1nL3N0YXItcHVycGxlLnN2Z1wiKSArIFwiKTsgfVxcbiAgLmNvbnRhaW5lciAuZGF0YS1jb2x1bW4gLmZvcmstbG9nbyB7XFxuICAgIGhlaWdodDogMTQuOTNweDtcXG4gICAgd2lkdGg6IDEwLjY3cHg7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMXB4OyB9XFxuICAgIC5jb250YWluZXIgLmRhdGEtY29sdW1uIC5mb3JrLWxvZ28ua2N1cmEge1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9jb250ZW50L2ltZy9mb3JrLW9yYW5nZS5zdmdcIikgKyBcIik7IH1cXG4gICAgLmNvbnRhaW5lciAuZGF0YS1jb2x1bW4gLmZvcmstbG9nby5vcGVuLXNvdXJjZSB7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uLy4uLy4uL2NvbnRlbnQvaW1nL2ZvcmstZ3JlZW4uc3ZnXCIpICsgXCIpOyB9XFxuICAgIC5jb250YWluZXIgLmRhdGEtY29sdW1uIC5mb3JrLWxvZ28ucGFydG5lciB7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uLy4uLy4uL2NvbnRlbnQvaW1nL2ZvcmstcHVycGxlLnN2Z1wiKSArIFwiKTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3tcIm1pbmltaXplXCI6ZmFsc2V9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3QvcHJvamVjdC1pdGVtL3Byb2plY3QtaXRlbS5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpob3N0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2FydG9ncmFwaCBTYW5zIENGXFxcIjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4OiAwIDAgYXV0bzsgfVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDY2OHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTUwcHg7IH1cXG4gIC5jb250YWluZXIgLmhlYWRlciB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiAjRkY3RjJGO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XFxuICAuY29udGFpbmVyIC5hbGwtaXRlbXMge1xcbiAgICBtYXJnaW4tdG9wOiA3MHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/e1wibWluaW1pemVcIjpmYWxzZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0MzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOmhvc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4IGJsb2NrO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYxRTk7IH1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7IH1cXG5cXG4udG9wLXJvdyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzI2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDA7IH1cXG5cXG4uc2VsZWN0b3ItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleDogMCAwIGF1dG87IH1cXG5cXG4uaW5uZXItcm9vdCB7XFxuICAvKnBvc2l0aW9uOiByZWxhdGl2ZTsqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uaGVhZGVyLWhpZGRlbiB7XFxuICB0b3A6IC0zNTFweDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5ib3R0b20tcm93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLCAyMjEsIDIxNCwgMC4xKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMxMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmZvb3Rlci1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIHdpZHRoOiA2NjhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5mb290ZXItdGl0bGUge1xcbiAgY29sb3I6ICNGRjdGMkY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBvcGFjaXR5OiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDsgfVxcblxcbi5mb290ZXItdGV4dCB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBjb2xvcjogIzY2NjU2MjtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cXG5cXG4uZm9vdGVyLWxpbmsge1xcbiAgaGVpZ2h0OiAxM3B4O1xcbiAgY29sb3I6ICM5RTlEOTg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEzcHg7IH1cXG5cXG4uY29tbXVuaXR5LXJvdyB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7IH1cXG5cXG4uZm9vdGVyLXJvdyB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5mb290ZXItcm93LXRleHQge1xcbiAgY29sb3I6ICM5RTlEOTg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEzcHg7IH1cXG5cXG4ubGFyZ2UtbWFyZ2luIHtcXG4gIG1hcmdpbi1sZWZ0OiAyNTBweDsgfVxcblxcbi5zbWFsbC1tYXJnaW4ge1xcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7IH1cXG5cXG4uYXJyb3cge1xcbiAgaGVpZ2h0OiA3cHg7XFxuICB3aWR0aDogMTJweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi9jb250ZW50L2ltZy9hcnJvdy5zdmdcIikgKyBcIik7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj97XCJtaW5pbWl6ZVwiOmZhbHNlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9hcHAvY29tcG9uZW50cy9yb290L3Jvb3QuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6aG9zdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgY29sb3I6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjRkY3RjJGIDAlLCAjRjY4QTFGIDEwMCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMyNnB4O1xcbiAgZm9udC1mYW1pbHk6ICdDYXJ0b2dyYXBoIFNhbnMgQ0YnO1xcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuXFxuLnNlYXJjaC1oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGNlbnRlcjtcXG4gIC8qaGFjaywgbm90IHN1cmUgd2h5IGZpcnN0IG9yIGxhc3QgY2hpbGQgc2VsZWN0b3JzIGFyZSBzZWxlY3RpbmcgYm90aCovIH1cXG4gIC5zZWFyY2gtaGVhZGVyLnZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuICAuc2VhcmNoLWhlYWRlciAuc2VhcmNoLWNvbHVtbnMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuICAuc2VhcmNoLWhlYWRlciAudmVydGljYWwtdGV4dCB7XFxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDExMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgb3BhY2l0eTogMC4yNTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gICAgY29sb3I6ICNDQ0NCQzQ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuICAuc2VhcmNoLWhlYWRlciAudmVydGljYWwtdGV4dC10b3BpY3Mge1xcbiAgICBtYXJnaW4tdG9wOiAxMzJweDsgfVxcbiAgLnNlYXJjaC1oZWFkZXIgLmNvbnRlbnQtY29sdW1uIHtcXG4gICAgd2lkdGg6IDIzMHB4OyB9XFxuICAuc2VhcmNoLWhlYWRlciAuc2VhcmNoLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XFxuICAgIG1hcmdpbi10b3A6IDYzcHg7IH1cXG4gIC5zZWFyY2gtaGVhZGVyIC5pY29uLXNlYXJjaCB7XFxuICAgIGNvbG9yOiAjRkY3RjJGO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTJweDsgfVxcbiAgLnNlYXJjaC1oZWFkZXIgLnNlYXJjaC1ib3gge1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgY29sb3I6ICNGRjdGMkY7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICAgIGJvcmRlcjogbm9uZTsgfVxcbiAgICAuc2VhcmNoLWhlYWRlciAuc2VhcmNoLWJveDo6cGxhY2Vob2xkZXIge1xcbiAgICAgIG9wYWNpdHk6IDAuMjU7XFxuICAgICAgY29sb3I6ICNGRjdGMkY7IH1cXG4gIC5zZWFyY2gtaGVhZGVyIC50b3BpY3MtY29sdW1uIHtcXG4gICAgd2lkdGg6IDQ3NXB4OyB9XFxuICAgIC5zZWFyY2gtaGVhZGVyIC50b3BpY3MtY29sdW1uIC50b3BpY3MtYXJyYXkge1xcbiAgICAgIG1hcmdpbi10b3A6IDEyMHB4O1xcbiAgICAgIGNvbG9yOiAjRkY3RjJGO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XFxuICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgIGhlaWdodDogMTUwcHg7IH1cXG4gICAgICAuc2VhcmNoLWhlYWRlciAudG9waWNzLWNvbHVtbiAudG9waWNzLWFycmF5IC50b3BpY3MtY29udGFpbmVyIHtcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgIGNvbHVtbi1jb3VudDogMTsgfVxcbiAgICAgICAgLnNlYXJjaC1oZWFkZXIgLnRvcGljcy1jb2x1bW4gLnRvcGljcy1hcnJheSAudG9waWNzLWNvbnRhaW5lciAudG9waWMge1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAgICAgLnNlYXJjaC1oZWFkZXIgLnRvcGljcy1jb2x1bW4gLnRvcGljcy1hcnJheSAudG9waWNzLWNvbnRhaW5lciAudG9waWM6aG92ZXIge1xcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuICAgICAgLnNlYXJjaC1oZWFkZXIgLnRvcGljcy1jb2x1bW4gLnRvcGljcy1hcnJheSAuc2VlLWFsbC10b3BpY3Mge1xcbiAgICAgICAgY29sb3I6ICNjY2NiYzQ7XFxuICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgICAgICB3aWR0aDogODFweDtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogI2NjY2JjNCAxcHggc29saWQ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNDFweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IC0yNXB4OyB9XFxuICAuc2VhcmNoLWhlYWRlciAuY2xvc2UtY29sdW1uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMzBweDtcXG4gICAgdG9wOiA1cHg7IH1cXG4gIC5zZWFyY2gtaGVhZGVyIC5pY29uLWNsb3NlIHtcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpOyB9XFxuICAgIC5zZWFyY2gtaGVhZGVyIC5pY29uLWNsb3NlOmhvdmVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IH1cXG4gIC5zZWFyY2gtaGVhZGVyIC5zZWFyY2gtY29udGVudC1yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDE4N3B4OyB9XFxuICAuc2VhcmNoLWhlYWRlciAuYXV0aG9ycy1jb2x1bW4ge1xcbiAgICB3aWR0aDogMTg0cHg7IH1cXG4gIC5zZWFyY2gtaGVhZGVyIC5hdXRob3Ige1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgfVxcbiAgLnNlYXJjaC1oZWFkZXIgLnJlY3RhbmdsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI0ZGN0YyRiAwJSwgI0Y2OEExRiAxMDAlKTtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDsgfVxcbiAgICAuc2VhcmNoLWhlYWRlciAucmVjdGFuZ2xlLnB1cnBsZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0EwNzNERTsgfVxcbiAgICAuc2VhcmNoLWhlYWRlciAucmVjdGFuZ2xlLmdyZWVuIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNERUE1OyB9XFxuICAgIC5zZWFyY2gtaGVhZGVyIC5yZWN0YW5nbGUub3JhbmdlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3RjJGOyB9XFxuICAuc2VhcmNoLWhlYWRlciAuc2VhcmNoLXRleHQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgY29sb3I6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjRkY3RjJGIDAlLCAjRjY4QTFGIDEwMCUpO1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7IH1cXG4gICAgLnNlYXJjaC1oZWFkZXIgLnNlYXJjaC10ZXh0Lm9yYW5nZSB7XFxuICAgICAgY29sb3I6ICNGRjdGMkY7IH1cXG4gICAgLnNlYXJjaC1oZWFkZXIgLnNlYXJjaC10ZXh0LnB1cnBsZSB7XFxuICAgICAgY29sb3I6ICNBMDczREU7IH1cXG4gICAgLnNlYXJjaC1oZWFkZXIgLnNlYXJjaC10ZXh0LmdyZWVuIHtcXG4gICAgICBjb2xvcjogIzczREVBNTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3tcIm1pbmltaXplXCI6ZmFsc2V9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6aG9zdCB7XFxuICBjb2xvcjogbGluZWFyLWdyYWRpZW50KDBkZWcsICNGRjdGMkYgMCUsICNGNjhBMUYgMTAwJSk7IH1cXG5cXG4udGFnLWl0ZW0ge1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgd2lkdGg6IDk5cHg7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj97XCJtaW5pbWl6ZVwiOmZhbHNlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9hcHAvY29tcG9uZW50cy90YWcvdGFnLWl0ZW0vdGFnLWl0ZW0uY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj97XCJtaW5pbWl6ZVwiOmZhbHNlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9hcHAvY29tcG9uZW50cy90YWcvdGFnLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0Mzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKlxcclxcbkZvbnQ6IFxcdFxcdENhcnRvZ3JhcGggc2FucyBDRlxcclxcblN0eWxlOiBcXHRcXHRFeHRyYSBCb2xkIEl0YWxpY1xcclxcblVSTDogXFx0XFx0aHR0cHM6Ly93d3cueW91d29ya2ZvcnRoZW0uY29tL2ZvbnQvVDY3MzYvY2FydG9ncmFwaC1jZlxcclxcbkZvdW5kcnk6IFxcdENvbm5hcnkgRmFnZW5cXHJcXG5Gb3VuZHJ5OiBcXHRodHRwczovL3d3dy55b3V3b3JrZm9ydGhlbS5jb20vZGVzaWduZXIvNDc5L2Nvbm5hcnktZmFnZW5cXHJcXG5Db3B5cmlnaHQ6XFx0wqkgMjAxNiBDb25uYXJ5IEZhZ2VuXFxyXFxuVmVyc2lvbjogXFx0MTdcXHJcXG5DcmVhdGVkOlxcdFNlcHRlbWJlciAyNSwgMjAxNlxcclxcbkxpY2Vuc2U6IFxcdGh0dHBzOi8vd3d3LnlvdXdvcmtmb3J0aGVtLmNvbS9mb250LWxpY2Vuc2UgXFxyXFxuTGljZW5zZTogXFx0VGhlIFdlYkZvbnQocykgbGlzdGVkIGluIHRoaXMgZG9jdW1lbnQgbXVzdCBmb2xsb3cgdGhlIFlvdVdvcmtGb3JUaGVtXFxyXFxuXFx0XFx0XFx0V2ViRm9udCBsaWNlbnNlIHJ1bGVzLiBBbGwgb3RoZXIgcGFydGllcyBhcmUgc3RyaWN0bHkgcmVzdHJpY3RlZCBcXHJcXG5cXHRcXHRcXHRmcm9tIHVzaW5nIHRoZSBXZWJGb250cyhzKSBsaXN0ZWQgd2l0aG91dCBhIHB1cmNoYXNlZCBsaWNlbnNlLiBcXHJcXG5cXHRcXHRcXHRBbGwgZGV0YWlscyBhYm92ZSBtdXN0IGFsd2F5cyByZW1haW4gdW5hbHRlcmVkIGFuZCB2aXNpYmxlIGluIHlvdXIgQ1NTLlxcclxcbiovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NhcnRvZ3JhcGggU2FucyBDRic7XFxuICBzcmM6IHVybChcIiArIHJlcXVpcmUoXCIuLi9jb250ZW50L2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi9jYXJ0b2dyYXBoLXNhbnMtY2YtdGhpbi53b2ZmMlwiKSArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NhcnRvZ3JhcGggU2FucyBDRic7XFxuICBzcmM6IHVybChcIiArIHJlcXVpcmUoXCIuLi9jb250ZW50L2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi9jYXJ0b2dyYXBoLXNhbnMtY2YtdGhpbi1pdGFsaWMud29mZjJcIikgKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDYXJ0b2dyYXBoIFNhbnMgQ0YnO1xcbiAgc3JjOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vY29udGVudC9mb250cy9jYXJ0b2dyYXBoLXNhbnMtY2YvY2FydG9ncmFwaC1zYW5zLWNmLWxpZ2h0LndvZmYyXCIpICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ2FydG9ncmFwaCBTYW5zIENGJztcXG4gIHNyYzogdXJsKFwiICsgcmVxdWlyZShcIi4uL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi1saWdodC1pdGFsaWMud29mZjJcIikgKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDYXJ0b2dyYXBoIFNhbnMgQ0YnO1xcbiAgc3JjOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vY29udGVudC9mb250cy9jYXJ0b2dyYXBoLXNhbnMtY2YvY2FydG9ncmFwaC1zYW5zLWNmLndvZmYyXCIpICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ2FydG9ncmFwaCBTYW5zIENGJztcXG4gIHNyYzogdXJsKFwiICsgcmVxdWlyZShcIi4uL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi1pdGFsaWMud29mZjJcIikgKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDYXJ0b2dyYXBoIFNhbnMgQ0YnO1xcbiAgc3JjOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vY29udGVudC9mb250cy9jYXJ0b2dyYXBoLXNhbnMtY2YvY2FydG9ncmFwaC1zYW5zLWNmLW1lZGl1bS53b2ZmMlwiKSArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NhcnRvZ3JhcGggU2FucyBDRic7XFxuICBzcmM6IHVybChcIiArIHJlcXVpcmUoXCIuLi9jb250ZW50L2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi9jYXJ0b2dyYXBoLXNhbnMtY2YtbWVkaXVtLWl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NhcnRvZ3JhcGggU2FucyBDRic7XFxuICBzcmM6IHVybChcIiArIHJlcXVpcmUoXCIuLi9jb250ZW50L2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi9jYXJ0b2dyYXBoLXNhbnMtY2YtZGVtaS1ib2xkLndvZmYyXCIpICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ2FydG9ncmFwaCBTYW5zIENGJztcXG4gIHNyYzogdXJsKFwiICsgcmVxdWlyZShcIi4uL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi1kZW1pLWJvbGQtaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ2FydG9ncmFwaCBTYW5zIENGJztcXG4gIHNyYzogdXJsKFwiICsgcmVxdWlyZShcIi4uL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi1ib2xkLndvZmYyXCIpICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ2FydG9ncmFwaCBTYW5zIENGJztcXG4gIHNyYzogdXJsKFwiICsgcmVxdWlyZShcIi4uL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi1ib2xkLWl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NhcnRvZ3JhcGggU2FucyBDRic7XFxuICBzcmM6IHVybChcIiArIHJlcXVpcmUoXCIuLi9jb250ZW50L2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi9jYXJ0b2dyYXBoLXNhbnMtY2YtZXh0cmEtYm9sZC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NhcnRvZ3JhcGggU2FucyBDRic7XFxuICBzcmM6IHVybChcIiArIHJlcXVpcmUoXCIuLi9jb250ZW50L2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi9jYXJ0b2dyYXBoLXNhbnMtY2YtZXh0cmEtYm9sZC1pdGFsaWMud29mZjJcIikgKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDYXJ0b2dyYXBoIFNhbnMgQ0YnO1xcbiAgc3JjOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vY29udGVudC9mb250cy9jYXJ0b2dyYXBoLXNhbnMtY2YvY2FydG9ncmFwaC1zYW5zLWNmLWhlYXZ5LndvZmYyXCIpICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ2FydG9ncmFwaCBTYW5zIENGJztcXG4gIHNyYzogdXJsKFwiICsgcmVxdWlyZShcIi4uL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi1oZWF2eS1pdGFsaWMud29mZjJcIikgKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbi8qQXBwbGljYXRpb24gR2x5cGhzKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAncmVsYXRpdml0eS1nbHlwaHMnO1xcbiAgc3JjOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vY29udGVudC9mb250cy9yZWxhdGl2aXR5LWdseXBocy53b2ZmXCIpICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbltjbGFzc149XFxcImljb24tXFxcIl0sIFtjbGFzcyo9XFxcIiBpY29uLVxcXCJdIHtcXG4gIC8qIHVzZSAhaW1wb3J0YW50IHRvIHByZXZlbnQgaXNzdWVzIHdpdGggYnJvd3NlciBleHRlbnNpb25zIHRoYXQgY2hhbmdlIGZvbnRzICovXFxuICBmb250LWZhbWlseTogJ3JlbGF0aXZpdHktZ2x5cGhzJyAhaW1wb3J0YW50O1xcbiAgc3BlYWs6IG5vbmU7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nID09PT09PT09PT09ICovXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7IH1cXG5cXG4uaWNvbi1hcHA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkwMFxcXCI7IH1cXG5cXG4uaWNvbi1hcnJvdy1zbWFsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFOTAxXFxcIjsgfVxcblxcbi5pY29uLWFycm93LXNob3J0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU5MDJcXFwiOyB9XFxuXFxuLmljb24tY2xvc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkwM1xcXCI7IH1cXG5cXG4uaWNvbi1kcm9wZG93bi1hcnJvdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFOTA0XFxcIjsgfVxcblxcbi5pY29uLWZvcms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkwNVxcXCI7IH1cXG5cXG4uaWNvbi1sb2dvLXJlbGF0aXZpdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkwNlxcXCI7IH1cXG5cXG4uaWNvbi1zY3JpcHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkwN1xcXCI7IH1cXG5cXG4uaWNvbi1zZWFyY2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkwOFxcXCI7IH1cXG5cXG4uaWNvbi1zdGFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU5MDlcXFwiOyB9XFxuXFxuLmljb24tdG9vbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFOTBBXFxcIjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3tcIm1pbmltaXplXCI6ZmFsc2V9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL2FwcC9mb250cy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0NDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7IH1cXG5cXG5ib2R5IHtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICBmb250LWZhbWlseTogJ0NhcnRvZ3JhcGggU2FucyBDRic7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAtbXMtY29udGVudC16b29taW5nOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjFFOTsgfVxcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgbWFyZ2luOiAwIDAgMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG5cXG5oMSwgLmgxIHtcXG4gIGZvbnQtc2l6ZTogNTVweDtcXG4gIGxpbmUtaGVpZ2h0OiA4Mi41cHg7IH1cXG5cXG5oMiwgLmgyIHtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG4gIGxpbmUtaGVpZ2h0OiA1MXB4OyB9XFxuXFxuaDMsIC5oMyB7XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBsaW5lLWhlaWdodDogMzlweDsgfVxcblxcbmg0LCAuaDQge1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgbGluZS1oZWlnaHQ6IDMxLjVweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG5cXG5oNSwgLmg1IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4OyB9XFxuXFxuaDYsIC5oNiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xNWVtOyB9XFxuXFxuLmVtcGhhc2lzIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7IH1cXG5cXG5wIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMS41ZW07IH1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiAwIDAgMCB0cmFuc3BhcmVudDsgfVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHJldmVyc2Utcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTsgfSB9XFxuXFxuLnJvdGF0ZSB7XFxuICBhbmltYXRpb246IHJvdGF0ZSAxcyBsaW5lYXIgaW5maW5pdGU7IH1cXG5cXG4ucmV2ZXJzZS1yb3RhdGUge1xcbiAgYW5pbWF0aW9uOiByZXZlcnNlLXJvdGF0ZSAxcyBsaW5lYXIgaW5maW5pdGU7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnZW50eXBvJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBzcmM6IHVybChcIiArIHJlcXVpcmUoXCIuLi9jb250ZW50L2ZvbnRzL2VudHlwby5lb3RcIikgKyBcIik7XFxuICBzcmM6IHVybChcIiArIHJlcXVpcmUoXCIuLi9jb250ZW50L2ZvbnRzL2VudHlwby5lb3RcIikgKyBcIj8jaWVmaXgpIGZvcm1hdChcXFwiZW90XFxcIiksIHVybChcIiArIHJlcXVpcmUoXCIuLi9jb250ZW50L2ZvbnRzL2VudHlwby53b2ZmXCIpICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vY29udGVudC9mb250cy9lbnR5cG8udHRmXCIpICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2NvbnRlbnQvZm9udHMvZW50eXBvLnN2Z1wiKSArIFwiI2VudHlwbykgZm9ybWF0KFxcXCJzdmdcXFwiKTsgfVxcblxcbi5lbnR5cG8tbm90ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyNjZBXFxcIjsgfVxcblxcbi5lbnR5cG8tbm90ZS1iZWFtZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjY2QlxcXCI7IH1cXG5cXG4uZW50eXBvLW11c2ljOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGM0I1XFxcIjsgfVxcblxcbi5lbnR5cG8tc2VhcmNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGNTBEXFxcIjsgfVxcblxcbi5lbnR5cG8tZmxhc2hsaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwxRjUyNlxcXCI7IH1cXG5cXG4uZW50eXBvLW1haWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjcwOVxcXCI7IH1cXG5cXG4uZW50eXBvLWhlYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDI2NjVcXFwiOyB9XFxuXFxuLmVudHlwby1oZWFydC1lbXB0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyNjYxXFxcIjsgfVxcblxcbi5lbnR5cG8tc3RhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyNjA1XFxcIjsgfVxcblxcbi5lbnR5cG8tc3Rhci1lbXB0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyNjA2XFxcIjsgfVxcblxcbi5lbnR5cG8tdXNlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwxRjQ2NFxcXCI7IH1cXG5cXG4uZW50eXBvLXVzZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGNDY1XFxcIjsgfVxcblxcbi5lbnR5cG8tdXNlci1hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTcwMFxcXCI7IH1cXG5cXG4uZW50eXBvLXZpZGVvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGM0FDXFxcIjsgfVxcblxcbi5lbnR5cG8tcGljdHVyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwxRjMwNFxcXCI7IH1cXG5cXG4uZW50eXBvLWNhbWVyYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwxRjRGN1xcXCI7IH1cXG5cXG4uZW50eXBvLWxheW91dDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyNjhGXFxcIjsgfVxcblxcbi5lbnR5cG8tbWVudTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyNjMwXFxcIjsgfVxcblxcbi5lbnR5cG8tY2hlY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjcxM1xcXCI7IH1cXG5cXG4uZW50eXBvLWNhbmNlbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyNzE1XFxcIjsgfVxcblxcbi5lbnR5cG8tY2FuY2VsLWNpcmNsZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjcxNlxcXCI7IH1cXG5cXG4uZW50eXBvLWNhbmNlbC1zcXVhcmVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDI3NEVcXFwiOyB9XFxuXFxuLmVudHlwby1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiK1xcXCI7IH1cXG5cXG4uZW50eXBvLXBsdXMtY2lyY2xlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyNzk1XFxcIjsgfVxcblxcbi5lbnR5cG8tcGx1cy1zcXVhcmVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDIyOUVcXFwiOyB9XFxuXFxuLmVudHlwby1taW51czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIi1cXFwiOyB9XFxuXFxuLmVudHlwby1taW51cy1jaXJjbGVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDI3OTZcXFwiOyB9XFxuXFxuLmVudHlwby1taW51cy1zcXVhcmVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDIyOUZcXFwiOyB9XFxuXFxuLmVudHlwby1oZWxwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDI3NTNcXFwiOyB9XFxuXFxuLmVudHlwby1oZWxwLWNpcmNsZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTcwNFxcXCI7IH1cXG5cXG4uZW50eXBvLWluZm86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjEzOVxcXCI7IH1cXG5cXG4uZW50eXBvLWluZm8tY2lyY2xlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzA1XFxcIjsgfVxcblxcbi5lbnR5cG8tYmFjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwxRjUxOVxcXCI7IH1cXG5cXG4uZW50eXBvLWhvbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjMwMlxcXCI7IH1cXG5cXG4uZW50eXBvLWxpbms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUY1MTdcXFwiOyB9XFxuXFxuLmVudHlwby1hdHRhY2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUY0Q0VcXFwiOyB9XFxuXFxuLmVudHlwby1sb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGNTEyXFxcIjsgfVxcblxcbi5lbnR5cG8tbG9jay1vcGVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGNTEzXFxcIjsgfVxcblxcbi5lbnR5cG8tZXllOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3MEFcXFwiOyB9XFxuXFxuLmVudHlwby10YWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTcwQ1xcXCI7IH1cXG5cXG4uZW50eXBvLWJvb2ttYXJrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGNTE2XFxcIjsgfVxcblxcbi5lbnR5cG8tYm9va21hcmtzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGNEQxXFxcIjsgfVxcblxcbi5lbnR5cG8tZmxhZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyNjkxXFxcIjsgfVxcblxcbi5lbnR5cG8tdGh1bWJzLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGNDREXFxcIjsgfVxcblxcbi5lbnR5cG8tdGh1bWJzLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUY0NEVcXFwiOyB9XFxuXFxuLmVudHlwby1kb3dubG9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwxRjRFNVxcXCI7IH1cXG5cXG4uZW50eXBvLXVwbG9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwxRjRFNFxcXCI7IH1cXG5cXG4uZW50eXBvLXVwbG9hZC1jbG91ZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzExXFxcIjsgfVxcblxcbi5lbnR5cG8tcmVwbHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTcxMlxcXCI7IH1cXG5cXG4uZW50eXBvLXJlcGx5LWFsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzEzXFxcIjsgfVxcblxcbi5lbnR5cG8tZm9yd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyN0E2XFxcIjsgfVxcblxcbi5lbnR5cG8tcXVvdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjc1RVxcXCI7IH1cXG5cXG4uZW50eXBvLWNvZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTcxNFxcXCI7IH1cXG5cXG4uZW50eXBvLWV4cG9ydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzE1XFxcIjsgfVxcblxcbi5lbnR5cG8tcGVuY2lsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDI3MEVcXFwiOyB9XFxuXFxuLmVudHlwby1mZWF0aGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDI3MTJcXFwiOyB9XFxuXFxuLmVudHlwby1wcmludDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzE2XFxcIjsgfVxcblxcbi5lbnR5cG8tcmV0d2VldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzE3XFxcIjsgfVxcblxcbi5lbnR5cG8ta2V5Ym9hcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjMyOFxcXCI7IH1cXG5cXG4uZW50eXBvLWNvbW1lbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTcxOFxcXCI7IH1cXG5cXG4uZW50eXBvLWNoYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTcyMFxcXCI7IH1cXG5cXG4uZW50eXBvLWJlbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUY1MTRcXFwiOyB9XFxuXFxuLmVudHlwby1hdHRlbnRpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjZBMFxcXCI7IH1cXG5cXG4uZW50eXBvLWFsZXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGNEE1J1xcXCI7IH1cXG5cXG4uZW50eXBvLXZjYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3MjJcXFwiOyB9XFxuXFxuLmVudHlwby1hZGRyZXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3MjNcXFwiOyB9XFxuXFxuLmVudHlwby1sb2NhdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzI0XFxcIjsgfVxcblxcbi5lbnR5cG8tbWFwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3MjdcXFwiOyB9XFxuXFxuLmVudHlwby1kaXJlY3Rpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjdBMlxcXCI7IH1cXG5cXG4uZW50eXBvLWNvbXBhc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTcyOFxcXCI7IH1cXG5cXG4uZW50eXBvLWN1cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyNjE1XFxcIjsgfVxcblxcbi5lbnR5cG8tdHJhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTcyOVxcXCI7IH1cXG5cXG4uZW50eXBvLWRvYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzMwXFxcIjsgfVxcblxcbi5lbnR5cG8tZG9jczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzM2XFxcIjsgfVxcblxcbi5lbnR5cG8tZG9jLWxhbmRzY2FwZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzM3XFxcIjsgfVxcblxcbi5lbnR5cG8tZG9jLXRleHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUY0QzRcXFwiOyB9XFxuXFxuLmVudHlwby1kb2MtdGV4dC1pbnY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTczMVxcXCI7IH1cXG5cXG4uZW50eXBvLW5ld3NwYXBlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwxRjRGMFxcXCI7IH1cXG5cXG4uZW50eXBvLWJvb2stb3BlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwxRjRENlxcXCI7IH1cXG5cXG4uZW50eXBvLWJvb2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUY0RDVcXFwiOyB9XFxuXFxuLmVudHlwby1mb2xkZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUY0QzFcXFwiOyB9XFxuXFxuLmVudHlwby1hcmNoaXZlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3MzhcXFwiOyB9XFxuXFxuLmVudHlwby1ib3g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUY0RTZcXFwiOyB9XFxuXFxuLmVudHlwby1yc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTczQVxcXCI7IH1cXG5cXG4uZW50eXBvLXBob25lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGNERFXFxcIjsgfVxcblxcbi5lbnR5cG8tY29nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDI2OTlcXFwiOyB9XFxuXFxuLmVudHlwby10b29sczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyNjkyXFxcIjsgfVxcblxcbi5lbnR5cG8tc2hhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTczQ1xcXCI7IH1cXG5cXG4uZW50eXBvLXNoYXJlYWJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzNFXFxcIjsgfVxcblxcbi5lbnR5cG8tYmFza2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3M0RcXFwiOyB9XFxuXFxuLmVudHlwby1iYWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUY0NUMnXFxcIjsgfVxcblxcbi5lbnR5cG8tY2FsZW5kYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUY0QzVcXFwiOyB9XFxuXFxuLmVudHlwby1sb2dpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzQwXFxcIjsgfVxcblxcbi5lbnR5cG8tbG9nb3V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3NDFcXFwiOyB9XFxuXFxuLmVudHlwby1taWM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUYzQTRcXFwiOyB9XFxuXFxuLmVudHlwby1tdXRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGNTA3XFxcIjsgfVxcblxcbi5lbnR5cG8tc291bmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUY1MEFcXFwiOyB9XFxuXFxuLmVudHlwby12b2x1bWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTc0MlxcXCI7IH1cXG5cXG4uZW50eXBvLWNsb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGNTU0XFxcIjsgfVxcblxcbi5lbnR5cG8taG91cmdsYXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDIzRjNcXFwiOyB9XFxuXFxuLmVudHlwby1sYW1wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGNEExXFxcIjsgfVxcblxcbi5lbnR5cG8tbGlnaHQtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwxRjUwNVxcXCI7IH1cXG5cXG4uZW50eXBvLWxpZ2h0LXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGNTA2XFxcIjsgfVxcblxcbi5lbnR5cG8tYWRqdXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDI1RDFcXFwiOyB9XFxuXFxuLmVudHlwby1ibG9jazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwxRjZBQlxcXCI7IH1cXG5cXG4uZW50eXBvLXJlc2l6ZS1mdWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3NDRcXFwiOyB9XFxuXFxuLmVudHlwby1yZXNpemUtc21hbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTc0NlxcXCI7IH1cXG5cXG4uZW50eXBvLXBvcHVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3NENcXFwiOyB9XFxuXFxuLmVudHlwby1wdWJsaXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3NERcXFwiOyB9XFxuXFxuLmVudHlwby13aW5kb3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTc0RVxcXCI7IH1cXG5cXG4uZW50eXBvLWFycm93LWNvbWJvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3NEZcXFwiOyB9XFxuXFxuLmVudHlwby1kb3duLWNpcmNsZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTc1OFxcXCI7IH1cXG5cXG4uZW50eXBvLWxlZnQtY2lyY2xlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzU5XFxcIjsgfVxcblxcbi5lbnR5cG8tcmlnaHQtY2lyY2xlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzVBXFxcIjsgfVxcblxcbi5lbnR5cG8tdXAtY2lyY2xlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzVCXFxcIjsgfVxcblxcbi5lbnR5cG8tZG93bi1vcGVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3NUNcXFwiOyB9XFxuXFxuLmVudHlwby1sZWZ0LW9wZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTc1RFxcXCI7IH1cXG5cXG4uZW50eXBvLXJpZ2h0LW9wZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTc1RVxcXCI7IH1cXG5cXG4uZW50eXBvLXVwLW9wZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTc1RlxcXCI7IH1cXG5cXG4uZW50eXBvLWRvd24tb3Blbi1taW5pOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3NjBcXFwiOyB9XFxuXFxuLmVudHlwby1sZWZ0LW9wZW4tbWluaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzYxXFxcIjsgfVxcblxcbi5lbnR5cG8tcmlnaHQtb3Blbi1taW5pOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3NjJcXFwiOyB9XFxuXFxuLmVudHlwby11cC1vcGVuLW1pbmk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTc2M1xcXCI7IH1cXG5cXG4uZW50eXBvLWRvd24tb3Blbi1iaWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTc2NFxcXCI7IH1cXG5cXG4uZW50eXBvLWxlZnQtb3Blbi1iaWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTc2NVxcXCI7IH1cXG5cXG4uZW50eXBvLXJpZ2h0LW9wZW4tYmlnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3NjZcXFwiOyB9XFxuXFxuLmVudHlwby11cC1vcGVuLWJpZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzY3XFxcIjsgfVxcblxcbi5lbnR5cG8tZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyQjA3XFxcIjsgfVxcblxcbi5lbnR5cG8tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyQjA1XFxcIjsgfVxcblxcbi5lbnR5cG8tcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjdBMVxcXCI7IH1cXG5cXG4uZW50eXBvLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDJCMDZcXFwiOyB9XFxuXFxuLmVudHlwby1kb3duLWRpcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyNUJFXFxcIjsgfVxcblxcbi5lbnR5cG8tbGVmdC1kaXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjVDMlxcXCI7IH1cXG5cXG4uZW50eXBvLXJpZ2h0LWRpcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyNUI4XFxcIjsgfVxcblxcbi5lbnR5cG8tdXAtZGlyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDI1QjRcXFwiOyB9XFxuXFxuLmVudHlwby1kb3duLWJvbGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTRCMFxcXCI7IH1cXG5cXG4uZW50eXBvLWxlZnQtYm9sZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNEFEXFxcIjsgfVxcblxcbi5lbnR5cG8tcmlnaHQtYm9sZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNEFFXFxcIjsgfVxcblxcbi5lbnR5cG8tdXAtYm9sZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNEFGXFxcIjsgfVxcblxcbi5lbnR5cG8tZG93bi10aGluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDIxOTNcXFwiOyB9XFxuXFxuLmVudHlwby1sZWZ0LXRoaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjE5MFxcXCI7IH1cXG5cXG4uZW50eXBvLXJpZ2h0LXRoaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjE5MlxcXCI7IH1cXG5cXG4uZW50eXBvLXVwLXRoaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjE5MVxcXCI7IH1cXG5cXG4uZW50eXBvLWNjdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyN0YyXFxcIjsgfVxcblxcbi5lbnR5cG8tY3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjdGM1xcXCI7IH1cXG5cXG4uZW50eXBvLWFycm93cy1jY3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUY1MDRcXFwiOyB9XFxuXFxuLmVudHlwby1sZXZlbC1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDIxQjNcXFwiOyB9XFxuXFxuLmVudHlwby1sZXZlbC11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyMUIwXFxcIjsgfVxcblxcbi5lbnR5cG8tc2h1ZmZsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwxRjUwMFxcXCI7IH1cXG5cXG4uZW50eXBvLWxvb3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUY1MDFcXFwiOyB9XFxuXFxuLmVudHlwby1zd2l0Y2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjFDNlxcXCI7IH1cXG5cXG4uZW50eXBvLXBsYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjVCNlxcXCI7IH1cXG5cXG4uZW50eXBvLXN0b3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjVBMFxcXCI7IH1cXG5cXG4uZW50eXBvLXBhdXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDIzODlcXFwiOyB9XFxuXFxuLmVudHlwby1yZWNvcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjZBQlxcXCI7IH1cXG5cXG4uZW50eXBvLXRvLWVuZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyM0VEXFxcIjsgfVxcblxcbi5lbnR5cG8tdG8tc3RhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjNFRVxcXCI7IH1cXG5cXG4uZW50eXBvLWZhc3QtZm9yd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyM0U5XFxcIjsgfVxcblxcbi5lbnR5cG8tZmFzdC1iYWNrd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyM0VBXFxcIjsgfVxcblxcbi5lbnR5cG8tcHJvZ3Jlc3MtMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzY4XFxcIjsgfVxcblxcbi5lbnR5cG8tcHJvZ3Jlc3MtMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzY5XFxcIjsgfVxcblxcbi5lbnR5cG8tcHJvZ3Jlc3MtMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzZBXFxcIjsgfVxcblxcbi5lbnR5cG8tcHJvZ3Jlc3MtMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzZCXFxcIjsgfVxcblxcbi5lbnR5cG8tdGFyZ2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGM0FGXFxcIjsgfVxcblxcbi5lbnR5cG8tcGFsZXR0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwxRjNBOFxcXCI7IH1cXG5cXG4uZW50eXBvLWxpc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTAwNVxcXCI7IH1cXG5cXG4uZW50eXBvLWxpc3QtYWRkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEUwMDNcXFwiOyB9XFxuXFxuLmVudHlwby1zaWduYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUY0RjZcXFwiOyB9XFxuXFxuLmVudHlwby10cm9waHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUYzQzZcXFwiOyB9XFxuXFxuLmVudHlwby1iYXR0ZXJ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGNTBCXFxcIjsgfVxcblxcbi5lbnR5cG8tYmFjay1pbi10aW1lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3NzFcXFwiOyB9XFxuXFxuLmVudHlwby1tb25pdG9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGNEJCXFxcIjsgfVxcblxcbi5lbnR5cG8tbW9iaWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGNEYxXFxcIjsgfVxcblxcbi5lbnR5cG8tbmV0d29yazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzc2XFxcIjsgfVxcblxcbi5lbnR5cG8tY2Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUY0QkZcXFwiOyB9XFxuXFxuLmVudHlwby1pbmJveDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzc3XFxcIjsgfVxcblxcbi5lbnR5cG8taW5zdGFsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzc4XFxcIjsgfVxcblxcbi5lbnR5cG8tZ2xvYmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUYzMEVcXFwiOyB9XFxuXFxuLmVudHlwby1jbG91ZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyNjAxXFxcIjsgfVxcblxcbi5lbnR5cG8tY2xvdWQtdGh1bmRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyNkM4XFxcIjsgfVxcblxcbi5lbnR5cG8tZmxhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjZBMVxcXCI7IH1cXG5cXG4uZW50eXBvLW1vb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjYzRFxcXCI7IH1cXG5cXG4uZW50eXBvLWZsaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyNzA4XFxcIjsgfVxcblxcbi5lbnR5cG8tcGFwZXItcGxhbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTc5QlxcXCI7IH1cXG5cXG4uZW50eXBvLWxlYWY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUYzNDJcXFwiOyB9XFxuXFxuLmVudHlwby1saWZlYnVveTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzg4XFxcIjsgfVxcblxcbi5lbnR5cG8tbW91c2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTc4OVxcXCI7IH1cXG5cXG4uZW50eXBvLWJyaWVmY2FzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwxRjRCQ1xcXCI7IH1cXG5cXG4uZW50eXBvLXN1aXRjYXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3OEVcXFwiOyB9XFxuXFxuLmVudHlwby1kb3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTc4QlxcXCI7IH1cXG5cXG4uZW50eXBvLWRvdC0yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3OENcXFwiOyB9XFxuXFxuLmVudHlwby1kb3QtMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzhEXFxcIjsgfVxcblxcbi5lbnR5cG8tYnJ1c2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTc5QVxcXCI7IH1cXG5cXG4uZW50eXBvLW1hZ25ldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFN0ExXFxcIjsgfVxcblxcbi5lbnR5cG8taW5maW5pdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjIxRVxcXCI7IH1cXG5cXG4uZW50eXBvLWVyYXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDIzMkJcXFwiOyB9XFxuXFxuLmVudHlwby1jaGFydC1waWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTc1MVxcXCI7IH1cXG5cXG4uZW50eXBvLWNoYXJ0LWxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUY0QzhcXFwiOyB9XFxuXFxuLmVudHlwby1jaGFydC1iYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUY0Q0FcXFwiOyB9XFxuXFxuLmVudHlwby1jaGFydC1hcmVhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGNTNFXFxcIjsgfVxcblxcbi5lbnR5cG8tdGFwZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyNzA3XFxcIjsgfVxcblxcbi5lbnR5cG8tZ3JhZHVhdGlvbi1jYXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUYzOTNcXFwiOyB9XFxuXFxuLmVudHlwby1sYW5ndWFnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzUyXFxcIjsgfVxcblxcbi5lbnR5cG8tdGlja2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGM0FCXFxcIjsgfVxcblxcbi5lbnR5cG8td2F0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUY0QTZcXFwiOyB9XFxuXFxuLmVudHlwby1kcm9wbGV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGNEE3XFxcIjsgfVxcblxcbi5lbnR5cG8tYWlyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3NTNcXFwiOyB9XFxuXFxuLmVudHlwby1jcmVkaXQtY2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwxRjRCM1xcXCI7IH1cXG5cXG4uZW50eXBvLWZsb3BweTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwxRjRCRVxcXCI7IH1cXG5cXG4uZW50eXBvLWNsaXBib2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwxRjRDQlxcXCI7IH1cXG5cXG4uZW50eXBvLW1lZ2FwaG9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwxRjRFM1xcXCI7IH1cXG5cXG4uZW50eXBvLWRhdGFiYXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3NTRcXFwiOyB9XFxuXFxuLmVudHlwby1kcml2ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzU1XFxcIjsgfVxcblxcbi5lbnR5cG8tYnVja2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3NTZcXFwiOyB9XFxuXFxuLmVudHlwby10aGVybW9tZXRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzU3XFxcIjsgfVxcblxcbi5lbnR5cG8ta2V5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDFGNTExXFxcIjsgfVxcblxcbi5lbnR5cG8tZmxvdy1jYXNjYWRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3OTBcXFwiOyB9XFxuXFxuLmVudHlwby1mbG93LWJyYW5jaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNzkxXFxcIjsgfVxcblxcbi5lbnR5cG8tZmxvdy10cmVlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3OTJcXFwiOyB9XFxuXFxuLmVudHlwby1mbG93LWxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTc5M1xcXCI7IH1cXG5cXG4uZW50eXBvLWZsb3ctcGFyYWxsZWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTc5NFxcXCI7IH1cXG5cXG4uZW50eXBvLXJvY2tldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwxRjY4MFxcXCI7IH1cXG5cXG4uZW50eXBvLWdhdWdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3QTJcXFwiOyB9XFxuXFxuLmVudHlwby10cmFmZmljLWNvbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTdBM1xcXCI7IH1cXG5cXG4uZW50eXBvLWNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3QTVcXFwiOyB9XFxuXFxuLmVudHlwby1jYy1ieTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFN0E2XFxcIjsgfVxcblxcbi5lbnR5cG8tY2MtbmM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTdBN1xcXCI7IH1cXG5cXG4uZW50eXBvLWNjLW5jLWV1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3QThcXFwiOyB9XFxuXFxuLmVudHlwby1jYy1uYy1qcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFN0E5XFxcIjsgfVxcblxcbi5lbnR5cG8tY2Mtc2E6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTdBQVxcXCI7IH1cXG5cXG4uZW50eXBvLWNjLW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3QUJcXFwiOyB9XFxuXFxuLmVudHlwby1jYy1wZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFN0FDXFxcIjsgfVxcblxcbi5lbnR5cG8tY2MtemVybzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFN0FEXFxcIjsgfVxcblxcbi5lbnR5cG8tY2Mtc2hhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTdBRVxcXCI7IH1cXG5cXG4uZW50eXBvLWNjLXJlbWl4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU3QUZcXFwiOyB9XFxuXFxuLmVudHlwby1naXRodWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMwMFxcXCI7IH1cXG5cXG4uZW50eXBvLWdpdGh1Yi1jaXJjbGVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzMDFcXFwiOyB9XFxuXFxuLmVudHlwby1mbGlja3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMwM1xcXCI7IH1cXG5cXG4uZW50eXBvLWZsaWNrci1jaXJjbGVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzMDRcXFwiOyB9XFxuXFxuLmVudHlwby12aW1lbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzA2XFxcIjsgfVxcblxcbi5lbnR5cG8tdmltZW8tY2lyY2xlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzA3XFxcIjsgfVxcblxcbi5lbnR5cG8tdHdpdHRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzA5XFxcIjsgfVxcblxcbi5lbnR5cG8tdHdpdHRlci1jaXJjbGVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzMEFcXFwiOyB9XFxuXFxuLmVudHlwby1mYWNlYm9vazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzBDXFxcIjsgfVxcblxcbi5lbnR5cG8tZmFjZWJvb2stY2lyY2xlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzBEXFxcIjsgfVxcblxcbi5lbnR5cG8tZmFjZWJvb2stc3F1YXJlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzBFXFxcIjsgfVxcblxcbi5lbnR5cG8tZ3BsdXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMwRlxcXCI7IH1cXG5cXG4uZW50eXBvLWdwbHVzLWNpcmNsZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMxMFxcXCI7IH1cXG5cXG4uZW50eXBvLXBpbnRlcmVzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzEyXFxcIjsgfVxcblxcbi5lbnR5cG8tcGludGVyZXN0LWNpcmNsZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMxM1xcXCI7IH1cXG5cXG4uZW50eXBvLXR1bWJscjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzE1XFxcIjsgfVxcblxcbi5lbnR5cG8tdHVtYmxyLWNpcmNsZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMxNlxcXCI7IH1cXG5cXG4uZW50eXBvLWxpbmtlZGluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzMThcXFwiOyB9XFxuXFxuLmVudHlwby1saW5rZWRpbi1jaXJjbGVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzMTlcXFwiOyB9XFxuXFxuLmVudHlwby1kcmliYmJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzFCXFxcIjsgfVxcblxcbi5lbnR5cG8tZHJpYmJibGUtY2lyY2xlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzFDXFxcIjsgfVxcblxcbi5lbnR5cG8tc3R1bWJsZXVwb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMxRVxcXCI7IH1cXG5cXG4uZW50eXBvLXN0dW1ibGV1cG9uLWNpcmNsZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMxRlxcXCI7IH1cXG5cXG4uZW50eXBvLWxhc3RmbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzIxXFxcIjsgfVxcblxcbi5lbnR5cG8tbGFzdGZtLWNpcmNsZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMyMlxcXCI7IH1cXG5cXG4uZW50eXBvLXJkaW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMyNFxcXCI7IH1cXG5cXG4uZW50eXBvLXJkaW8tY2lyY2xlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzI1XFxcIjsgfVxcblxcbi5lbnR5cG8tc3BvdGlmeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzI3XFxcIjsgfVxcblxcbi5lbnR5cG8tc3BvdGlmeS1jaXJjbGVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzMjhcXFwiOyB9XFxuXFxuLmVudHlwby1xcTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzJBXFxcIjsgfVxcblxcbi5lbnR5cG8taW5zdGFncmVtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzMkRcXFwiOyB9XFxuXFxuLmVudHlwby1kcm9wYm94OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzMzBcXFwiOyB9XFxuXFxuLmVudHlwby1ldmVybm90ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzMzXFxcIjsgfVxcblxcbi5lbnR5cG8tZmxhdHRyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzMzZcXFwiOyB9XFxuXFxuLmVudHlwby1za3lwZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzM5XFxcIjsgfVxcblxcbi5lbnR5cG8tc2t5cGUtY2lyY2xlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzNBXFxcIjsgfVxcblxcbi5lbnR5cG8tcmVucmVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzM0NcXFwiOyB9XFxuXFxuLmVudHlwby1zaW5hLXdlaWJvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzM0ZcXFwiOyB9XFxuXFxuLmVudHlwby1wYXlwYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM0MlxcXCI7IH1cXG5cXG4uZW50eXBvLXBpY2FzYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzQ1XFxcIjsgfVxcblxcbi5lbnR5cG8tc291bmRjbG91ZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzQ4XFxcIjsgfVxcblxcbi5lbnR5cG8tbWl4aTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzRCXFxcIjsgfVxcblxcbi5lbnR5cG8tYmVoYW5jZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzRFXFxcIjsgfVxcblxcbi5lbnR5cG8tZ29vZ2xlLWNpcmNsZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM1MVxcXCI7IH1cXG5cXG4uZW50eXBvLXZrb250YWt0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzU0XFxcIjsgfVxcblxcbi5lbnR5cG8tc21hc2hpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM1N1xcXCI7IH1cXG5cXG4uZW50eXBvLXN3ZWRlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNjAxXFxcIjsgfVxcblxcbi5lbnR5cG8tZGItc2hhcGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjYwMFxcXCI7IH1cXG5cXG4uZW50eXBvLWxvZ28tZGI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjYwM1xcXCI7IH1cXG5cXG5bY2xhc3MqPVxcXCJlbnR5cG8tXFxcIl06YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiAnZW50eXBvJywgc2Fucy1zZXJpZjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3tcIm1pbmltaXplXCI6ZmFsc2V9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL2FwcC9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQ0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBjc3MtdG8tc3RyaW5nLWxvYWRlcjogdHJhbnNmb3JtcyBzdHlsZXMgZnJvbSBjc3MtbG9hZGVyIHRvIGEgc3RyaW5nIG91dHB1dFxuXG4vLyBHZXQgdGhlIHN0eWxlc1xudmFyIHN0eWxlcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2hlYWRlci5jb21wb25lbnQuc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gIC8vIFJldHVybiBhbiBleGlzdGluZyBzdHJpbmdcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXM7XG59IGVsc2Uge1xuICAvLyBDYWxsIHRoZSBjdXN0b20gdG9TdHJpbmcgbWV0aG9kIGZyb20gY3NzLWxvYWRlciBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXMudG9TdHJpbmcoKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0NDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gY3NzLXRvLXN0cmluZy1sb2FkZXI6IHRyYW5zZm9ybXMgc3R5bGVzIGZyb20gY3NzLWxvYWRlciB0byBhIHN0cmluZyBvdXRwdXRcblxuLy8gR2V0IHRoZSBzdHlsZXNcbnZhciBzdHlsZXMgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9wYXJ0bmVyLXBhbmVsLWl0ZW0uY29tcG9uZW50LnNjc3NcIik7XG5cbmlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAvLyBSZXR1cm4gYW4gZXhpc3Rpbmcgc3RyaW5nXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzO1xufSBlbHNlIHtcbiAgLy8gQ2FsbCB0aGUgY3VzdG9tIHRvU3RyaW5nIG1ldGhvZCBmcm9tIGNzcy1sb2FkZXIgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzLnRvU3RyaW5nKCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvcGFydG5lci1wYW5lbC9wYXJ0bmVyLXBhbmVsLWl0ZW0vcGFydG5lci1wYW5lbC1pdGVtLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0NDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gY3NzLXRvLXN0cmluZy1sb2FkZXI6IHRyYW5zZm9ybXMgc3R5bGVzIGZyb20gY3NzLWxvYWRlciB0byBhIHN0cmluZyBvdXRwdXRcblxuLy8gR2V0IHRoZSBzdHlsZXNcbnZhciBzdHlsZXMgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9wYXJ0bmVyLXBhbmVsLmNvbXBvbmVudC5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgLy8gUmV0dXJuIGFuIGV4aXN0aW5nIHN0cmluZ1xuICBtb2R1bGUuZXhwb3J0cyA9IHN0eWxlcztcbn0gZWxzZSB7XG4gIC8vIENhbGwgdGhlIGN1c3RvbSB0b1N0cmluZyBtZXRob2QgZnJvbSBjc3MtbG9hZGVyIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IHN0eWxlcy50b1N0cmluZygpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3BhcnRuZXItcGFuZWwvcGFydG5lci1wYW5lbC5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIGNzcy10by1zdHJpbmctbG9hZGVyOiB0cmFuc2Zvcm1zIHN0eWxlcyBmcm9tIGNzcy1sb2FkZXIgdG8gYSBzdHJpbmcgb3V0cHV0XG5cbi8vIEdldCB0aGUgc3R5bGVzXG52YXIgc3R5bGVzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcHJvamVjdC1pdGVtLmNvbXBvbmVudC5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgLy8gUmV0dXJuIGFuIGV4aXN0aW5nIHN0cmluZ1xuICBtb2R1bGUuZXhwb3J0cyA9IHN0eWxlcztcbn0gZWxzZSB7XG4gIC8vIENhbGwgdGhlIGN1c3RvbSB0b1N0cmluZyBtZXRob2QgZnJvbSBjc3MtbG9hZGVyIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IHN0eWxlcy50b1N0cmluZygpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3QvcHJvamVjdC1pdGVtL3Byb2plY3QtaXRlbS5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIGNzcy10by1zdHJpbmctbG9hZGVyOiB0cmFuc2Zvcm1zIHN0eWxlcyBmcm9tIGNzcy1sb2FkZXIgdG8gYSBzdHJpbmcgb3V0cHV0XG5cbi8vIEdldCB0aGUgc3R5bGVzXG52YXIgc3R5bGVzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcHJvamVjdC5jb21wb25lbnQuc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gIC8vIFJldHVybiBhbiBleGlzdGluZyBzdHJpbmdcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXM7XG59IGVsc2Uge1xuICAvLyBDYWxsIHRoZSBjdXN0b20gdG9TdHJpbmcgbWV0aG9kIGZyb20gY3NzLWxvYWRlciBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXMudG9TdHJpbmcoKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQ0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBjc3MtdG8tc3RyaW5nLWxvYWRlcjogdHJhbnNmb3JtcyBzdHlsZXMgZnJvbSBjc3MtbG9hZGVyIHRvIGEgc3RyaW5nIG91dHB1dFxuXG4vLyBHZXQgdGhlIHN0eWxlc1xudmFyIHN0eWxlcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3Jvb3QuY29tcG9uZW50LnNjc3NcIik7XG5cbmlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAvLyBSZXR1cm4gYW4gZXhpc3Rpbmcgc3RyaW5nXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzO1xufSBlbHNlIHtcbiAgLy8gQ2FsbCB0aGUgY3VzdG9tIHRvU3RyaW5nIG1ldGhvZCBmcm9tIGNzcy1sb2FkZXIgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzLnRvU3RyaW5nKCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvcm9vdC9yb290LmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0NDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gY3NzLXRvLXN0cmluZy1sb2FkZXI6IHRyYW5zZm9ybXMgc3R5bGVzIGZyb20gY3NzLWxvYWRlciB0byBhIHN0cmluZyBvdXRwdXRcblxuLy8gR2V0IHRoZSBzdHlsZXNcbnZhciBzdHlsZXMgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zZWFyY2guY29tcG9uZW50LnNjc3NcIik7XG5cbmlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAvLyBSZXR1cm4gYW4gZXhpc3Rpbmcgc3RyaW5nXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzO1xufSBlbHNlIHtcbiAgLy8gQ2FsbCB0aGUgY3VzdG9tIHRvU3RyaW5nIG1ldGhvZCBmcm9tIGNzcy1sb2FkZXIgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzLnRvU3RyaW5nKCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIGNzcy10by1zdHJpbmctbG9hZGVyOiB0cmFuc2Zvcm1zIHN0eWxlcyBmcm9tIGNzcy1sb2FkZXIgdG8gYSBzdHJpbmcgb3V0cHV0XG5cbi8vIEdldCB0aGUgc3R5bGVzXG52YXIgc3R5bGVzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vdGFnLWl0ZW0uY29tcG9uZW50LnNjc3NcIik7XG5cbmlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAvLyBSZXR1cm4gYW4gZXhpc3Rpbmcgc3RyaW5nXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzO1xufSBlbHNlIHtcbiAgLy8gQ2FsbCB0aGUgY3VzdG9tIHRvU3RyaW5nIG1ldGhvZCBmcm9tIGNzcy1sb2FkZXIgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzLnRvU3RyaW5nKCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvdGFnL3RhZy1pdGVtL3RhZy1pdGVtLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0NDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gY3NzLXRvLXN0cmluZy1sb2FkZXI6IHRyYW5zZm9ybXMgc3R5bGVzIGZyb20gY3NzLWxvYWRlciB0byBhIHN0cmluZyBvdXRwdXRcblxuLy8gR2V0IHRoZSBzdHlsZXNcbnZhciBzdHlsZXMgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi90YWcuY29tcG9uZW50LnNjc3NcIik7XG5cbmlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAvLyBSZXR1cm4gYW4gZXhpc3Rpbmcgc3RyaW5nXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzO1xufSBlbHNlIHtcbiAgLy8gQ2FsbCB0aGUgY3VzdG9tIHRvU3RyaW5nIG1ldGhvZCBmcm9tIGNzcy1sb2FkZXIgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzLnRvU3RyaW5nKCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvdGFnL3RhZy5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIGNzcy10by1zdHJpbmctbG9hZGVyOiB0cmFuc2Zvcm1zIHN0eWxlcyBmcm9tIGNzcy1sb2FkZXIgdG8gYSBzdHJpbmcgb3V0cHV0XG5cbi8vIEdldCB0aGUgc3R5bGVzXG52YXIgc3R5bGVzID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZm9udHMuc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gIC8vIFJldHVybiBhbiBleGlzdGluZyBzdHJpbmdcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXM7XG59IGVsc2Uge1xuICAvLyBDYWxsIHRoZSBjdXN0b20gdG9TdHJpbmcgbWV0aG9kIGZyb20gY3NzLWxvYWRlciBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHlsZXMudG9TdHJpbmcoKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZm9udHMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIGNzcy10by1zdHJpbmctbG9hZGVyOiB0cmFuc2Zvcm1zIHN0eWxlcyBmcm9tIGNzcy1sb2FkZXIgdG8gYSBzdHJpbmcgb3V0cHV0XG5cbi8vIEdldCB0aGUgc3R5bGVzXG52YXIgc3R5bGVzID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgLy8gUmV0dXJuIGFuIGV4aXN0aW5nIHN0cmluZ1xuICBtb2R1bGUuZXhwb3J0cyA9IHN0eWxlcztcbn0gZWxzZSB7XG4gIC8vIENhbGwgdGhlIGN1c3RvbSB0b1N0cmluZyBtZXRob2QgZnJvbSBjc3MtbG9hZGVyIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IHN0eWxlcy50b1N0cmluZygpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQ1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi1ib2xkLWl0YWxpYy53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi1ib2xkLWl0YWxpYy53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmLWJvbGQud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250ZW50L2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi9jYXJ0b2dyYXBoLXNhbnMtY2YtYm9sZC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmLWRlbWktYm9sZC1pdGFsaWMud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250ZW50L2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi9jYXJ0b2dyYXBoLXNhbnMtY2YtZGVtaS1ib2xkLWl0YWxpYy53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmLWRlbWktYm9sZC53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi1kZW1pLWJvbGQud29mZjJcbi8vIG1vZHVsZSBpZCA9IDQ1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi1leHRyYS1ib2xkLWl0YWxpYy53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi1leHRyYS1ib2xkLWl0YWxpYy53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmLWV4dHJhLWJvbGQud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250ZW50L2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi9jYXJ0b2dyYXBoLXNhbnMtY2YtZXh0cmEtYm9sZC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmLWhlYXZ5LWl0YWxpYy53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi1oZWF2eS1pdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDQ1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi1oZWF2eS53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi1oZWF2eS53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmLWl0YWxpYy53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi1pdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDQ2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi1saWdodC1pdGFsaWMud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250ZW50L2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi9jYXJ0b2dyYXBoLXNhbnMtY2YtbGlnaHQtaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA0NjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9mb250cy9jYXJ0b2dyYXBoLXNhbnMtY2YtbGlnaHQud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250ZW50L2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi9jYXJ0b2dyYXBoLXNhbnMtY2YtbGlnaHQud29mZjJcbi8vIG1vZHVsZSBpZCA9IDQ2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi1tZWRpdW0taXRhbGljLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udGVudC9mb250cy9jYXJ0b2dyYXBoLXNhbnMtY2YvY2FydG9ncmFwaC1zYW5zLWNmLW1lZGl1bS1pdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDQ2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi1tZWRpdW0ud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250ZW50L2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi9jYXJ0b2dyYXBoLXNhbnMtY2YtbWVkaXVtLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA0NjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9mb250cy9jYXJ0b2dyYXBoLXNhbnMtY2YtdGhpbi1pdGFsaWMud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250ZW50L2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi9jYXJ0b2dyYXBoLXNhbnMtY2YtdGhpbi1pdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDQ2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi10aGluLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udGVudC9mb250cy9jYXJ0b2dyYXBoLXNhbnMtY2YvY2FydG9ncmFwaC1zYW5zLWNmLXRoaW4ud29mZjJcbi8vIG1vZHVsZSBpZCA9IDQ2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ZvbnRzL2NhcnRvZ3JhcGgtc2Fucy1jZi53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRlbnQvZm9udHMvY2FydG9ncmFwaC1zYW5zLWNmL2NhcnRvZ3JhcGgtc2Fucy1jZi53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vZm9udHMvZW50eXBvLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRlbnQvZm9udHMvZW50eXBvLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vZm9udHMvZW50eXBvLnR0ZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRlbnQvZm9udHMvZW50eXBvLnR0ZlxuLy8gbW9kdWxlIGlkID0gNDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vZm9udHMvZW50eXBvLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250ZW50L2ZvbnRzL2VudHlwby53b2ZmXG4vLyBtb2R1bGUgaWQgPSA0NzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9mb250cy9yZWxhdGl2aXR5LWdseXBocy53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udGVudC9mb250cy9yZWxhdGl2aXR5LWdseXBocy53b2ZmXG4vLyBtb2R1bGUgaWQgPSA0NzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvYXBwLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRlbnQvaW1nL2FwcC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQ3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltZy9mb3JrLWdyZWVuLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRlbnQvaW1nL2ZvcmstZ3JlZW4uc3ZnXG4vLyBtb2R1bGUgaWQgPSA0NzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvZm9yay1vcmFuZ2Uuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udGVudC9pbWcvZm9yay1vcmFuZ2Uuc3ZnXG4vLyBtb2R1bGUgaWQgPSA0NzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvZm9yay1wdXJwbGUuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udGVudC9pbWcvZm9yay1wdXJwbGUuc3ZnXG4vLyBtb2R1bGUgaWQgPSA0NzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvaWNvbi1sb2dvLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRlbnQvaW1nL2ljb24tbG9nby5zdmdcbi8vIG1vZHVsZSBpZCA9IDQ3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltZy9sb2dvLXJlbGF0aXZpdHkuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udGVudC9pbWcvbG9nby1yZWxhdGl2aXR5LnN2Z1xuLy8gbW9kdWxlIGlkID0gNDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1nL3NjcmlwdC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250ZW50L2ltZy9zY3JpcHQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA0Nzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvc3Rhci1ncmVlbi5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250ZW50L2ltZy9zdGFyLWdyZWVuLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1nL3N0YXItb3JhbmdlLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRlbnQvaW1nL3N0YXItb3JhbmdlLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1nL3N0YXItcHVycGxlLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRlbnQvaW1nL3N0YXItcHVycGxlLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1nL3Rvb2wuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udGVudC9pbWcvdG9vbC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQ4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLTxkaXYgY2xhc3M9XFxcImNvbnRlbnQtaGVhZGVyXFxcIiBbbmdDbGFzc109XFxcInsgJ29wZW4nIDogdmlld01vZGVsLmlzSGlkZGVuIH1cXFwiPi0tPlxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidGl0bGUtcm93XFxcIj5cXHJcXG4gICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJsb2dvXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJlbGF0aXZpdHktZm9udFxcXCI+UmVsYXRpdml0eTwvZGl2PjxkaXYgY2xhc3M9XFxcInRpdGxlLXRleHRcXFwiPkRldiBQcm9qZWN0czwvZGl2Pi0tPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nby1yZWxhdGl2aXR5XFxcIj48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci10ZXh0XFxcIj5BIGRpcmVjdG9yeSBvZiBvcGVuIHNvdXJjZSBwcm9qZWN0cyBidWlsdCBhbmQgbWFpbnRhaW5lZCBieSB0aGUgUmVsYXRpdml0eSB0ZWFtIGFuZCBvdXIgY3VzdG9tIGRldmVsb3BtZW50IHBhcnRuZXJzLjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImljb24tc2VhcmNoXFxcIiAoY2xpY2spPVxcXCJvblNlYXJjaENsaWNrZWQoKVxcXCIgPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VhcmNoLXRleHRcXFwiKGNsaWNrKT1cXFwib25TZWFyY2hDbGlja2VkKClcXFwiPlNlYXJjaDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0ODRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhbmVsLWl0ZW1cXFwiIFtuZ0NsYXNzXT1cXFwieyAnaGlkZGVuJzogZGlzcGxheU1vcmVQYXJ0bmVycygpIH1cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1pdGVtLXRleHRcXFwiPlxcclxcbiAgICAgICAge3t2aWV3TW9kZWwubmFtZX19XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcIm1vcmUtcGFydG5lcnNcXFwiIFtuZ0NsYXNzXT1cXFwieyAndmlzaWJsZSc6IGRpc3BsYXlNb3JlUGFydG5lcnMoKSB9XFxcIj5cXHJcXG4gICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcInBhbmVsLWl0ZW0tbGlua1xcXCI+U2hvdyBhbGwgcGFydG5lcnM8L2E+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvcGFydG5lci1wYW5lbC9wYXJ0bmVyLXBhbmVsLWl0ZW0vcGFydG5lci1wYW5lbC1pdGVtLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0ODVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhbmVsLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRlclxcXCI+RGV2ZWxvcG1lbnQgUGFydG5lcnM8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtcm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLXRleHRcXFwiPkludGVyZXN0ZWQgaW4gY3JlYXRpbmcgb3IgY29udHJpYnV0aW5nIHRvIGEgcHJvamVjdD8gPGEgY2xhc3M9XFxcImxpbmstdGV4dFxcXCIgaHJlZj1cXFwiI1xcXCI+TGV0IHVzIGtub3c8L2E+PGRpdiBjbGFzcz1cXFwiYXJyb3dcXFwiPjwvZGl2PjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidGlsZS1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPHBhcnRuZXItcGFuZWwtaXRlbSAqbmdGb3I9XFxcImxldCBwIG9mIHZpZXdNb2RlbC5wYXJ0bmVyUGFuZWxJdGVtc1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2aWV3TW9kZWxdPVxcXCJwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5kZXhdPVxcXCJwLmluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbW9yZVBhcnRuZXJzSW5kZXhdPVxcXCJ2aWV3TW9kZWwucGFuZWxJdGVtQ291bnRcXFwiPjwvcGFydG5lci1wYW5lbC1pdGVtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0bmVyLXBhbmVsL3BhcnRuZXItcGFuZWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYXV0aG9yLXR5cGUtY29sdW1uXFxcIiBbbmdDbGFzc109XFxcImF1dGhvclR5cGVUb0NsYXNzKClcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpY29uLWNvbHVtblxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LXR5cGUtaWNvblxcXCIgW25nQ2xhc3NdPVxcXCJwcm9qZWN0VHlwZVRvQ2xhc3MoKVxcXCI+PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50LWNvbHVtblxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYXJ0bmVyLXRleHRcXFwiIFtuZ0NsYXNzXT1cXFwiYXV0aG9yVHlwZVRvQ2xhc3MoKVxcXCI+e3t2aWV3TW9kZWwucGFydG5lcn19PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LXJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1uYW1lXFxcIj57e3ZpZXdNb2RlbC5uYW1lfX08L2Rpdj48ZGl2IGNsYXNzPVxcXCJ2ZXJzaW9uXFxcIj57e3ZpZXdNb2RlbC52ZXJzaW9ufX08L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPnt7dmlld01vZGVsLmRlc2NyaXB0aW9ufX08L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtY29sdW1uXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtcm93XFxcIiBbbmdDbGFzc109XFxcImF1dGhvclR5cGVUb0NsYXNzKClcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXItbG9nb1xcXCIgW25nQ2xhc3NdPVxcXCJhdXRob3JUeXBlVG9DbGFzcygpXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRhLXRleHRcXFwiPnt7dmlld01vZGVsLnN0YXJDb3VudH19PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yay1sb2dvXFxcIiBbbmdDbGFzc109XFxcImF1dGhvclR5cGVUb0NsYXNzKClcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtdGV4dFxcXCI+e3t2aWV3TW9kZWwuZm9ya0NvdW50fX08L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Byb2plY3QtaXRlbS9wcm9qZWN0LWl0ZW0uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5Qcm9qZWN0czwvZGl2PlxcclxcbiAgICA8cHJvamVjdC1pdGVtICpuZ0Zvcj1cXFwibGV0IGYgb2Ygdmlld01vZGVsLmZlYXR1cmVkSXRlbXNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgIFt2aWV3TW9kZWxdPVxcXCJmXFxcIj48L3Byb2plY3QtaXRlbT5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxsLWl0ZW1zXFxcIj5cXHJcXG4gICAgICAgIDxwcm9qZWN0LWl0ZW0gKm5nRm9yPVxcXCJsZXQgZiBvZiB2aWV3TW9kZWwucHJvamVjdEl0ZW1zXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICBbdmlld01vZGVsXT1cXFwiZlxcXCI+PC9wcm9qZWN0LWl0ZW0+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJtYWluLWNvbnRlbnRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0b3Atcm93XFxcIj48IS0tbmVlZHMgdG8gYmUgcG9zaXRpb24gcmVsYXR0aXZlLS0+ICAgXFxyXFxuICAgICAgICA8c2VhcmNoIFt2aWV3TW9kZWxdPVxcXCIoc2VhcmNoLm9ic2VydmFibGUgfCBhc3luYylcXFwiPjwvc2VhcmNoPjwhLS1hYnNvbHV0ZS0tPiAgICAgXFxyXFxuICAgICAgICA8aGVhZGVyIFtuZ0NsYXNzXT1cXFwieydoZWFkZXItaGlkZGVuJyA6IChyb290Lm9ic2VydmFibGUgfCBhc3luYykuaXNTZWFyY2hWaXNpYmxlfVxcXCIgW3ZpZXdNb2RlbF09XFxcIihoZWFkZXIub2JzZXJ2YWJsZSB8IGFzeW5jKVxcXCI+PC9oZWFkZXI+PCEtLWFic29sdXRlLS0+ICAgICAgICBcXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImlubmVyLXJvb3RcXFwiPlxcclxcbiAgICAgICAgICAgIDxwYXJ0bmVyLXBhbmVsIFt2aWV3TW9kZWxdPVxcXCIocGFydG5lclBhbmVsLm9ic2VydmFibGUgfCBhc3luYylcXFwiPjwvcGFydG5lci1wYW5lbD5cXHJcXG4gICAgICAgICAgICA8cHJvamVjdCBbdmlld01vZGVsXT1cXFwiKHByb2plY3Qub2JzZXJ2YWJsZSB8IGFzeW5jKVxcXCI+PC9wcm9qZWN0PlxcclxcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJvdHRvbS1yb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyLXRpdGxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgSW50ZXJlc3RlZCBpbiBsZWFybmluZyBtb3JlIGFib3V0IFJlbGF0aXZpdHkgZGV2ZWxvcG1lbnQ/XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyLXRleHRcXFwiPkdldCBzdGFydGVkIHdpdGggdGhlIGhlbHAgb2YgdGhlIFJlbGF0aXZpdHkgRGV2SGVscCBDb21tdW5pdHkuPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29tbXVuaXR5LXJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vcGxhdGZvcm0ua2N1cmEuY29tLzkuNS9Db250ZW50L1NpdGVfUmVzb3VyY2VzL0dldF9zdGFydGVkX3dpdGhfRGV2SGVscC5odG0/SGlnaGxpZ2h0PWRldmhlbHBcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBjbGFzcz1cXFwiZm9vdGVyLWxpbmtcXFwiPkdldCBTdGFydGVkPC9hPjxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJhcnJvd1xcXCI+PC9hPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvb3Rlci1yb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXItcm93LXRleHQgY29weXJpZ2h0XFxcIj7CqSAyMDE3IGtDdXJhIExMQzwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL2NvbW11bml0eS5yZWxhdGl2aXR5LmNvbS9zL2dyb3VwLzBGOTUwMDAwMDAwOHZYeUNBSVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGNsYXNzPVxcXCJmb290ZXItbGluayBsYXJnZS1tYXJnaW5cXFwiPkZvbGxvdyB1czwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cua2N1cmEuY29tL2pvaW4tdGhlLXRlYW0vYXZhaWxhYmxlLXBvc2l0aW9ucy9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBjbGFzcz1cXFwiZm9vdGVyLWxpbmsgc21hbGwtbWFyZ2luXFxcIj5Kb2luIG91ciB0ZWFtPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL3d3dy5rY3VyYS5jb20vUmVsYXRpdml0eVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGNsYXNzPVxcXCJmb290ZXItbGluayBzbWFsbC1tYXJnaW4gXFxcIj5MZWFybiBtb3JlPC9hPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3Jvb3Qvcm9vdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tPGRpdiBjbGFzcz1cXFwic2VhcmNoLWhlYWRlclxcXCIgW25nQ2xhc3NdPVxcXCJ7ICd2aXNpYmxlJyA6IHZpZXdNb2RlbC5pc1Zpc2libGUgfVxcXCI+LS0+XFxyXFxuPGRpdiBjbGFzcz1cXFwic2VhcmNoLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhdXRob3JzLWxhYmVsLWNvbHVtblxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmVydGljYWwtdGV4dFxcXCI+QXV0aG9yczwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50LWNvbHVtblxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VhcmNoLXJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImljb24tc2VhcmNoXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0ICNzZWFyY2hCb3ggdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcInNlYXJjaC1ib3hcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2hcXFwiIChrZXl1cCk9XFxcIm9uU2VhcmNoVGV4dENoYW5nZWQoc2VhcmNoQm94LnZhbHVlKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtY29udGVudC1yb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhdXRob3JzLWNvbHVtblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhdXRob3JcXFwiPjxkaXYgY2xhc3M9XFxcInJlY3RhbmdsZSBvcmFuZ2VcXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcInNlYXJjaC10ZXh0IG9yYW5nZVxcXCI+S0NVUkE8L2Rpdj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImF1dGhvclxcXCI+PGRpdiBjbGFzcz1cXFwicmVjdGFuZ2xlIHB1cnBsZVxcXCI+PC9kaXY+PGRpdiBjbGFzcz1cXFwic2VhcmNoLXRleHQgcHVycGxlXFxcIj5ERVZFTE9QTUVOVCBQQVJUTkVSUzwvZGl2PjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXV0aG9yXFxcIj48ZGl2IGNsYXNzPVxcXCJyZWN0YW5nbGUgZ3JlZW5cXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcInNlYXJjaC10ZXh0IGdyZWVuXFxcIj5PUEVOIFNPVVJDRSBDT01NVU5JVFk8L2Rpdj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcGljcy1jb2x1bW5cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZlcnRpY2FsLXRleHQgdmVydGljYWwtdGV4dC10b3BpY3NcXFwiPlRvcGljczwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcGljcy1hcnJheVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwidG9waWNzLWNvbnRhaW5lclxcXCIgPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJ0b3BpY1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVxcXCJsZXQgdG9waWMgb2Ygdmlld01vZGVsLnRhZy50YWdJdGVtc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAge3t0b3BpYy5uYW1lfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlZS1hbGwtdG9waWNzXFxcIj5TZWUgYWxsIHRvcGljczwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbG9zZS1jb2x1bW5cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImljb24tY2xvc2VcXFwiIChjbGljayk9XFxcIm9uU2VhcmNoQ2xvc2VkKClcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ0YWctaXRlbVxcXCI+XFxyXFxuICAgIDxhIGhyZWY9XFxcIiNcXFwiPnt7dmlld01vZGVsLk5hbWV9fTwvYT5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy90YWcvdGFnLWl0ZW0vdGFnLWl0ZW0uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwidGFnXFxcIj5cXHJcXG4gICAgPHRhZy1pdGVtICpuZ0Zvcj1cXFwibGV0IGkgb2Ygdmlld01vZGVsLnRhZ0l0ZW1zO1xcXCJcXHJcXG4gICAgICAgICAgICAgIFt2aWV3TW9kZWxdPVxcXCJpXFxcIj48L3RhZy1pdGVtPlxcclxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3RhZy90YWcuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9