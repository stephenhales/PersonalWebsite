webpackJsonp([0],Array(33).concat([
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./CandyDispenserComponent.vue": 87,
	"./CleanEarthComponent.vue": 59,
	"./ContactComponent.vue": 60,
	"./FooterComponent.vue": 13,
	"./HomeAutomationComponent.vue": 88,
	"./HomeComponent.vue": 61,
	"./IntroComponent.vue": 62,
	"./IoTBrowserComponent.vue": 63,
	"./LoginComponent.vue": 89,
	"./NavComponent.vue": 12,
	"./ShareComponent.vue": 90,
	"./TravelTourComponent.vue": 91,
	"./WorkExperienceComponent.vue": 92,
	"./projects/ProjectCleanEarth.vue": 47,
	"./projects/ProjectComponent.vue": 48,
	"./projects/ProjectIoTBrowser.vue": 49,
	"./projects/ProjectTravelTour.vue": 50
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 33;

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports) {

module.exports = "imgs/cleanEarth.png?67f3171f4efeeff228ce8b7d49ae4170";

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			traditionalBulb: 2
		};
	}
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

//import WaterProfileComponent from './WaterProfileComponent.vue'


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'profile',
  components: {},
  methods: {}
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			meals: 1,
			cowWeight: 1000,
			cowLife: 540,
			cowMethane: 250,
			poundPerMeal: .5
		};
	},
	methods: {
		totalCow: function totalCow() {
			return this.cowLife * this.cowMethane * (this.poundPerMeal / this.cowWeight) * this.meals;
		}
	}
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            numRefills: 6
        };
    }
});

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.icon-photo {\n  width: 10vh;\n  height: 10vh;\n}\n", ""]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.fullscreen {\n  width: 100%;\n  height: 100vh;\n}\n#component {\n  margin: 0 auto;\n  max-width: 800px;\n  padding-top: 60px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "imgs/utdesign.jpg?6aeac7a7a764bbb4eff1b922998cdbca";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(57)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(53),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Projects\\PersonalWebsite\\app\\src\\scripts\\components\\projects\\ProjectCleanEarth.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ProjectCleanEarth.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75c74ae0", Component.options)
  } else {
    hotAPI.reload("data-v-75c74ae0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(58)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(54),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Projects\\PersonalWebsite\\app\\src\\scripts\\components\\projects\\ProjectComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ProjectComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-787e0a24", Component.options)
  } else {
    hotAPI.reload("data-v-787e0a24", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(55)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(51),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Projects\\PersonalWebsite\\app\\src\\scripts\\components\\projects\\ProjectIoTBrowser.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ProjectIoTBrowser.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f99c239", Component.options)
  } else {
    hotAPI.reload("data-v-2f99c239", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(56)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(52),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Projects\\PersonalWebsite\\app\\src\\scripts\\components\\projects\\ProjectTravelTour.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ProjectTravelTour.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4187a371", Component.options)
  } else {
    hotAPI.reload("data-v-4187a371", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i', {
    staticClass: "fa fa-cutlery",
    staticStyle: {
      "font-size": "10em"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('h1', [_vm._v("Reduce Your Meat Consumption")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('p', [_vm._v("If you reduced the amount of meat you consume each week by "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.meals),
      expression: "meals"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2"
    },
    domProps: {
      "value": (_vm.meals)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.meals = $event.target.value
      }
    }
  }), _vm._v(" meals, you would reduce your impact on methane emissions in a day by "), _c('b', [_vm._v(_vm._s(_vm.totalCow()))]), _vm._v(" liters")]), _vm._v(" "), _c('p', [_vm._v("...in a week "), _c('b', [_vm._v(_vm._s((_vm.totalCow() * 7).toFixed(1)))]), _vm._v(" liters")]), _vm._v(" "), _c('p', [_vm._v("...in a month "), _c('b', [_vm._v(_vm._s((_vm.totalCow() * 31).toFixed(1)))]), _vm._v(" liters")]), _vm._v(" "), _c('p', [_vm._v("...in a year a whopping "), _c('b', [_vm._v(_vm._s((_vm.totalCow() * 365).toFixed(1)))]), _vm._v(" liters!!")])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("Methane from cattle accounts for "), _c('b', [_vm._v("14.5")]), _vm._v(" and "), _c('b', [_vm._v("18")]), _vm._v(" percent of the total greenhouse gas emissions")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2f99c239", module.exports)
  }
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i', {
    staticClass: "fa fa-tint",
    staticStyle: {
      "font-size": "10em"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('h2', [_vm._v("Reusable Water Bottles!")]), _vm._v(" "), _c('p', [_vm._v("Roughly only 20% of plastic bottles are recycled in the US.")]), _vm._v(" "), _c('p', [_vm._v("For "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.numRefills),
      expression: "numRefills"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2"
    },
    domProps: {
      "value": (_vm.numRefills)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.numRefills = $event.target.value
      }
    }
  }), _vm._v(" refills of a 32oz standard water bottle, you would be saving "), _c('b', [_vm._v(_vm._s(Math.ceil(_vm.numRefills * 2 * .8)) + " plastic bottles from the landfill.")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4187a371", module.exports)
  }
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('img', {
    staticClass: "icon-photo",
    attrs: {
      "src": __webpack_require__(37)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-8"
  }, [_c('h1', [_vm._v("CleanEarth.Life")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', [_c('img', {
    staticClass: "team-photo",
    attrs: {
      "src": "team-photo"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', [_c('p', [_vm._v("We created this at a Hackathon in Dallas 2017 over Earthday weekend.")]), _vm._v(" "), _c('p', [_vm._v("The goal of this website was to show that a single person can make a significant on their ecological footprint.")]), _vm._v(" "), _c('p', [_vm._v("We set about solving this problem with a website which could track a users progress over time. The user account was implemented with JSP which allowed us\n\t\t\t\tto develop a lightweight application faster. We decided to learn a new language over the course of the weekend, and decided upon Vue.js which would\n\t\t\t\tallow our front end to be composed of easy to build components. This allowed us to create content really fast. Our biggest bottleneck over the course of the\n\t\t\t\tweekend was actually doing the research for each of the statistics.")]), _vm._v(" "), _c('p', [_vm._v("From this hackathon, we learned to focus more on the business ideas of an application rather than the implementation. A lot of our time went into developing a\n\t\t\t\thighly refined website instead of developing a proof of concept which was not as refined. As a result, we have a website that has a great looking home page\n\t\t\t\tbut the scope was limited.")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-75c74ae0", module.exports)
  }
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background-color": "white"
    },
    attrs: {
      "id": "content"
    }
  }, [_c('div', {
    staticClass: "component"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-787e0a24", module.exports)
  }
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("762d81c0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2f99c239\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectIoTBrowser.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2f99c239\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectIoTBrowser.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("896f0b72", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4187a371\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectTravelTour.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4187a371\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectTravelTour.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5d2d341a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-75c74ae0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectCleanEarth.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-75c74ae0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectCleanEarth.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5599ec24", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-787e0a24\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectComponent.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-787e0a24\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(105)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(65),
  /* template */
  __webpack_require__(94),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Projects\\PersonalWebsite\\app\\src\\scripts\\components\\CleanEarthComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CleanEarthComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ea94ade", Component.options)
  } else {
    hotAPI.reload("data-v-1ea94ade", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(111)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(66),
  /* template */
  __webpack_require__(100),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Projects\\PersonalWebsite\\app\\src\\scripts\\components\\ContactComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ContactComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b7d2278", Component.options)
  } else {
    hotAPI.reload("data-v-7b7d2278", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(107)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(96),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Projects\\PersonalWebsite\\app\\src\\scripts\\components\\HomeComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HomeComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37ee27b3", Component.options)
  } else {
    hotAPI.reload("data-v-37ee27b3", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(108)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(69),
  /* template */
  __webpack_require__(97),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Projects\\PersonalWebsite\\app\\src\\scripts\\components\\IntroComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] IntroComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-660c086c", Component.options)
  } else {
    hotAPI.reload("data-v-660c086c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(106)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(70),
  /* template */
  __webpack_require__(95),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Projects\\PersonalWebsite\\app\\src\\scripts\\components\\IoTBrowserComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] IoTBrowserComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34371758", Component.options)
  } else {
    hotAPI.reload("data-v-34371758", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      minutes: 2,
      waterSaved: 0
    };
  },
  created: function created() {
    this.waterSaved = this.minutes * 2.1;
  },
  watch: {
    'minutes': function minutes(to, from) {
      this.waterSaved = (this.minutes * 2.1).toFixed(1);
    }
  }
});

/***/ }),
/* 65 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 66 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

(function () {
	var redirect = sessionStorage.redirect;
	delete sessionStorage.redirect;
	if (redirect && redirect != location.href) {
		history.replaceState(null, null, redirect);
	}
})();

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			showerMinutes: 2,
			milesReduced: 2,
			lightReplace: 2,
			bottlesReduced: 2,
			meatReduced: 2,
			pledgeMade: false,
			fbData: {}
		};
	},
	created: function created() {},
	methods: {
		postData: function postData() {
			var vm = this;
			firebase.database().ref('Pledge/').transaction(function (data) {
				vm.pledgeMade = true;
				data.showerMinutes += vm.showerMinutes;
				data.milesReduced += vm.milesReduced;
				data.lightReplace += vm.lightReplace;
				data.bottlesReduced += vm.bottlesReduced;
				data.meatReduced += vm.meatReduced;
				data.usersPledged += 1;
				vm.fbData = data;
				return data;
			});
		}
	}
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IntroComponent_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IntroComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__IntroComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavComponent_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__NavComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HomeComponent_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HomeComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__HomeComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CleanEarthComponent_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CleanEarthComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__CleanEarthComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__IoTBrowserComponent_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__IoTBrowserComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__IoTBrowserComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ContactComponent_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ContactComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ContactComponent_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  components: { NavComponent: __WEBPACK_IMPORTED_MODULE_1__NavComponent_vue___default.a, HomeComponent: __WEBPACK_IMPORTED_MODULE_2__HomeComponent_vue___default.a, IntroComponent: __WEBPACK_IMPORTED_MODULE_0__IntroComponent_vue___default.a, CleanEarthComponent: __WEBPACK_IMPORTED_MODULE_3__CleanEarthComponent_vue___default.a, IotBrowserComponent: __WEBPACK_IMPORTED_MODULE_4__IoTBrowserComponent_vue___default.a, ContactComponent: __WEBPACK_IMPORTED_MODULE_5__ContactComponent_vue___default.a },
  methods: {
    scroll: function scroll(id) {
      this.$SmoothScroll(document.getElementById(id));
    }
  }
});

/***/ }),
/* 69 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//

/***/ }),
/* 70 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 71 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 72 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			distance: 2,
			mpg: 25
		};
	}
});

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.project-photo {\n  width: 40vh;\n  height: 40vh;\n}\n", ""]);

// exports


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.project-photo-iot {\n  width: 40vh;\n  height: 16vh;\n}\n", ""]);

// exports


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.fullscreen {\n  height: 100vh;\n  min-height: 600px;\n}\n.component {\n  padding-left: 20vw;\n  padding-right: 20vw;\n  width: 100%;\n  min-height: 200px;\n}\n.component-section {\n  padding: 10vh 10px;\n}\n.project-section {\n  padding: 10vh 10px;\n  z-index: -1;\n  font-size: 14px;\n}\n.border-photo {\n  margin: 0 auto;\n  width: 100%;\n  height: 300px;\n}\n", ""]);

// exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n#child {\n  display: inline-block;\n  vertical-align: top;\n}\n", ""]);

// exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "imgs/code.jpg?8b55b6df7050af5a66fa512587a48b7c";

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "imgs/ricardo-gomez-angel-210602.jpg?6cfcdd75fba8cd1fe557ca05fd218c06";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(112)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(101),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Projects\\PersonalWebsite\\app\\src\\scripts\\components\\CandyDispenserComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CandyDispenserComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-88ae1fbc", Component.options)
  } else {
    hotAPI.reload("data-v-88ae1fbc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(109)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(98),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Projects\\PersonalWebsite\\app\\src\\scripts\\components\\HomeAutomationComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HomeAutomationComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70d9525c", Component.options)
  } else {
    hotAPI.reload("data-v-70d9525c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(114)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(71),
  /* template */
  __webpack_require__(103),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Projects\\PersonalWebsite\\app\\src\\scripts\\components\\LoginComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] LoginComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f5227ae2", Component.options)
  } else {
    hotAPI.reload("data-v-f5227ae2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(113)

var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(102),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Projects\\PersonalWebsite\\app\\src\\scripts\\components\\ShareComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ShareComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c1735c4e", Component.options)
  } else {
    hotAPI.reload("data-v-c1735c4e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(104)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(72),
  /* template */
  __webpack_require__(93),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Projects\\PersonalWebsite\\app\\src\\scripts\\components\\TravelTourComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TravelTourComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d31d5c0", Component.options)
  } else {
    hotAPI.reload("data-v-0d31d5c0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(110)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(99),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Projects\\PersonalWebsite\\app\\src\\scripts\\components\\WorkExperienceComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] WorkExperienceComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76e8c277", Component.options)
  } else {
    hotAPI.reload("data-v-76e8c277", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('h2', [_vm._v("Travel Tour")])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('img', {
    staticClass: "project-photo",
    attrs: {
      "src": __webpack_require__(46)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-8"
  }, [_c('p', [_vm._v("Carry your own tour guide with you wherever you choose to travel.\r\n\t\t\t\tTours should be dynamic and customizable, not 2 hours on a bus on which you can't choose where to visit.\r\n\t\t\t\tTravel Tour allows you to choose where your tour goes, and what information you listen to, and how long your tour is.")]), _vm._v(" "), _c('p', [_vm._v("See the website demo in action "), _c('a', {
    attrs: {
      "href": "https://stephenhales.github.io/TravelTour/",
      "title": "here"
    }
  }, [_vm._v("here")]), _vm._v("!")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0d31d5c0", module.exports)
  }
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('router-link', {
    staticClass: "navLink",
    attrs: {
      "active-class": "active",
      "to": "/project/CleanEarth",
      "exact": ""
    }
  }, [_c('img', {
    staticClass: "project-photo",
    attrs: {
      "src": __webpack_require__(37)
    }
  })])], 1), _vm._v(" "), _vm._m(1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('h2', [_vm._v("CleanEarth.Life")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-8"
  }, [_c('p', [_vm._v("This website was created to show that a single change can make a significant difference on your ecological footprint.")]), _vm._v(" "), _c('p', [_vm._v("People don't realize what impact a few small changes every day can have on their environmental impact.\n\t\t\t\tThis project uses algorithms which we developed through research in order to give accurate results about a person's environmental impact. The end product is both shocking and humbling.")]), _vm._v(" "), _c('p', [_vm._v("My teammates and I developed this project at an Earthday themed Hackathon.")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1ea94ade", module.exports)
  }
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('router-link', {
    staticClass: "navLink",
    attrs: {
      "active-class": "active",
      "to": "/project/IoTBrowser",
      "exact": ""
    }
  }, [_c('img', {
    staticClass: "project-photo-iot",
    attrs: {
      "src": __webpack_require__(46)
    }
  })])], 1), _vm._v(" "), _vm._m(1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('h2', [_vm._v("Browser for the Internet of Things")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-8"
  }, [_c('p', [_vm._v("Smartphone browser that utilizes bluetooth discovery, NFC, and object recognition to afford users proximity discovery,\n\t\t\t\tintuitive selection, and live interaction with the various types of Internet of Things devices they will encounter.\t")]), _vm._v(" "), _c('p', [_vm._v("My teammates and I developed this project as our UTDesign senior year project.")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-34371758", module.exports)
  }
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background-color": "white"
    },
    attrs: {
      "id": "content"
    }
  }, [_c('div', {
    staticClass: "row fullscreen",
    attrs: {
      "id": "intro"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "component"
  }, [_c('div', {
    staticClass: "component-section"
  }, [_c('intro-component')], 1), _vm._v(" "), _c('div', {
    staticClass: "bottom_aligner"
  }, [_c('a', {
    attrs: {
      "href": "#projects"
    },
    on: {
      "click": function($event) {
        _vm.scroll("projects")
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-down",
    staticStyle: {
      "font-size": "7em"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "row",
    attrs: {
      "id": "projects"
    }
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "component"
  }, [_c('div', {
    staticClass: "project-section"
  }, [_c('clean-earth-component')], 1)]), _vm._v(" "), _c('div', {
    staticClass: "component"
  }, [_c('div', {
    staticClass: "project-section"
  }, [_c('iot-browser-component')], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row",
    attrs: {
      "id": "contact"
    }
  }, [_c('div', {
    staticClass: "component"
  }, [_c('div', {
    staticClass: "component-section"
  }, [_c('contact-component')], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    staticClass: "border-photo",
    attrs: {
      "src": __webpack_require__(86),
      "alt": "introPic"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    staticClass: "border-photo",
    attrs: {
      "src": __webpack_require__(85),
      "alt": "introPic"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-37ee27b3", module.exports)
  }
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "intro"
  }, [_c('h3', [_vm._v("I'm a software engineer who dabbles with too many side projects.")]), _vm._v(" "), _c('h5', [_c('strong', [_vm._v("Check them out below")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-660c086c", module.exports)
  }
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i', {
    staticClass: "fa fa-handshake-o",
    staticStyle: {
      "font-size": "10em"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), (!_vm.pledgeMade) ? _c('span', [_c('h1', [_vm._v("Make the Pledge!")]), _vm._v(" "), _c('p', [_vm._v("I will commit to:")]), _vm._v(" "), _c('p', [_vm._v("showering "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.showerMinutes),
      expression: "showerMinutes"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2",
      "disabled": _vm.pledgeMade
    },
    domProps: {
      "value": (_vm.showerMinutes)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.showerMinutes = $event.target.value
      }
    }
  }), _vm._v(" minutes less a day")]), _vm._v(" "), _c('p', [_vm._v("driving   "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.milesReduced),
      expression: "milesReduced"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2",
      "disabled": _vm.pledgeMade
    },
    domProps: {
      "value": (_vm.milesReduced)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.milesReduced = $event.target.value
      }
    }
  }), _vm._v(" miles less a day")]), _vm._v(" "), _c('p', [_vm._v("replacing "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.lightReplace),
      expression: "lightReplace"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2",
      "disabled": _vm.pledgeMade
    },
    domProps: {
      "value": (_vm.lightReplace)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.lightReplace = $event.target.value
      }
    }
  }), _vm._v(" traditional light bulbs")]), _vm._v(" "), _c('p', [_vm._v("using     "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.bottlesReduced),
      expression: "bottlesReduced"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2",
      "disabled": _vm.pledgeMade
    },
    domProps: {
      "value": (_vm.bottlesReduced)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.bottlesReduced = $event.target.value
      }
    }
  }), _vm._v(" disposable water bottles less a week")]), _vm._v(" "), _c('p', [_vm._v("eating \t "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.meatReduced),
      expression: "meatReduced"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2",
      "disabled": _vm.pledgeMade
    },
    domProps: {
      "value": (_vm.meatReduced)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.meatReduced = $event.target.value
      }
    }
  }), _vm._v(" less meals with meat a week")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "button",
      "value": "Make the Pledge!",
      "disabled": _vm.pledgeMade
    },
    on: {
      "click": function($event) {
        _vm.postData()
      }
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.pledgeMade) ? _c('span', [_c('h2', [_vm._v("Thanks for making the pledge!! You and " + _vm._s(_vm.fbData.usersPledged) + " others have committed to:")]), _vm._v(" "), _c('p', [_vm._v("Using " + _vm._s((_vm.fbData.showerMinutes * 2.1).toFixed(1)) + " gallons when showering per day!")]), _vm._v(" "), _c('p', [_vm._v("Reducing car pollution by " + _vm._s((_vm.fbData.milesReduced / 25 * 19.5).toFixed(1)) + " pounds!")]), _vm._v(" "), _c('p', [_vm._v("Saving $" + _vm._s(_vm.fbData.lightReplace * 100) + " a year on energy!")]), _vm._v(" "), _c('p', [_vm._v("Using " + _vm._s(_vm.fbData.bottlesReduced) + " less disposible plastic bottles per week!")]), _vm._v(" "), _c('p', [_vm._v("Reducing methane emissions by " + _vm._s((540 * 250 * (.5 / 1000) * _vm.fbData.meatReduced).toFixed(1)) + " liters a day!")])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-70d9525c", module.exports)
  }
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i', {
    staticClass: "fa fa-car",
    staticStyle: {
      "font-size": "10em"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('h1', [_vm._v("Reduce Car Emissions")]), _vm._v(" "), _c('p', [_vm._v("Drive more conservatively to reduce amount of fuel that you use")]), _vm._v(" "), _c('p', [_vm._v("If you reduced your daily commute by "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.distance),
      expression: "distance"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2"
    },
    domProps: {
      "value": (_vm.distance)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.distance = $event.target.value
      }
    }
  }), _vm._v(" miles per day in a car that averaged "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.mpg),
      expression: "mpg"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2"
    },
    domProps: {
      "value": (_vm.mpg)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.mpg = $event.target.value
      }
    }
  }), _vm._v(" city miles per gallon, you would save a daily amount of "), _c('b', [_vm._v(_vm._s(((_vm.distance / _vm.mpg) * 19.5).toFixed(1)) + " pounds")]), _vm._v(" of pollution")]), _vm._v(" "), _c('p', [_vm._v("...in a week "), _c('b', [_vm._v(_vm._s(((_vm.distance / _vm.mpg) * 19.5 * 7).toFixed(1)))]), _vm._v(" pounds")]), _vm._v(" "), _c('p', [_vm._v("...in a month "), _c('b', [_vm._v(_vm._s(((_vm.distance / _vm.mpg) * 19.5 * 31).toFixed(1)))]), _vm._v(" pounds")]), _vm._v(" "), _c('p', [_vm._v("...in a year a whopping "), _c('b', [_vm._v(_vm._s(((_vm.distance / _vm.mpg) * 19.5 * 365).toFixed(1)))]), _vm._v(" pounds!!")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-76e8c277", module.exports)
  }
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', [_vm._v("Feel free to drop me a line using the form below! I generally will reply within 2 business days. I look forward to connecting with you.")]), _vm._v(" "), _c('form', {
    attrs: {
      "name": "contactForm"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "fName"
    }
  }, [_vm._v("First Name:")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "form-input",
    attrs: {
      "name": "fName",
      "required": "required"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "lName"
    }
  }, [_vm._v("Last Name:")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "form-input",
    attrs: {
      "name": "lName",
      "required": "required"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "_replyto"
    }
  }, [_vm._v("Email:")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "form-email",
    attrs: {
      "type": "email",
      "required": "required",
      "name": "_replyto"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "body"
    }
  }, [_vm._v("Message:")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('textarea', {
    staticClass: "form-message",
    attrs: {
      "name": "body",
      "required": "required"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "validation"
    }
  }, [_vm._v("What color is the sky on a clear day?")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "form-input",
    attrs: {
      "name": "validation",
      "required": "required"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    attrs: {
      "type": "submit",
      "value": "Send"
    }
  })])]), _vm._v(" "), _c('p', {})])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7b7d2278", module.exports)
  }
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('h2', [_vm._v("Browser for the Internet of Things")])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('img', {
    staticClass: "project-photo",
    attrs: {
      "src": __webpack_require__(46)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-8"
  }, [_c('p', [_vm._v("Smartphone browser that utilizes bluetooth discovery, NFC, and object recognition to afford users proximity discovery,\r\n\t\t\t\tintuitive selection, and live interaction with the various types of Internet of Things devices they will encounter.\t")]), _vm._v(" "), _c('p', [_vm._v("My teammates and I developed this project as our UTDesign senior year project.")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-88ae1fbc", module.exports)
  }
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "a2a_kit a2a_kit_size_32 a2a_default_style"
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c1735c4e", module.exports)
  }
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form"
  }, [_c('div', {
    attrs: {
      "id": "login"
    }
  }, [_c('h1', [_vm._v("Welcome Back!")]), _vm._v(" "), _c('form', {
    attrs: {
      "action": "/login",
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "field-wrap"
  }, [_c('label', [_vm._v("\n\t\t\t\t\tUsername"), _c('span', {
    staticClass: "req"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text",
      "required": "",
      "autocomplete": "off",
      "name": "username"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "field-wrap"
  }, [_c('label', [_vm._v("\n\t\t\t\t\tPassword"), _c('span', {
    staticClass: "req"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "password",
      "required": "",
      "autocomplete": "off",
      "name": "password"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "forgot"
  }, [_c('a', {
    attrs: {
      "href": "/signup"
    }
  }, [_vm._v("Need an Account?")])]), _vm._v(" "), _c('button', {
    staticClass: "button button-block"
  }, [_vm._v("Log In")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f5227ae2", module.exports)
  }
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4524964a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0d31d5c0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TravelTourComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0d31d5c0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TravelTourComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("441db718", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1ea94ade\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CleanEarthComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1ea94ade\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CleanEarthComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("09f37ba1", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-34371758\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./IoTBrowserComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-34371758\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./IoTBrowserComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("d4cbf89c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-37ee27b3\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HomeComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-37ee27b3\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HomeComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("13f71f25", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-660c086c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./IntroComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-660c086c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./IntroComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("c34e0cb0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-70d9525c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HomeAutomationComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-70d9525c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HomeAutomationComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4bf4ee96", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-76e8c277\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./WorkExperienceComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-76e8c277\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./WorkExperienceComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("c6e8b3b0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7b7d2278\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContactComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7b7d2278\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContactComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("be5c327a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-88ae1fbc\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CandyDispenserComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-88ae1fbc\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CandyDispenserComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6f4fa857", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-c1735c4e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ShareComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-c1735c4e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ShareComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("ee5a5df8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f5227ae2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LoginComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f5227ae2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LoginComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })
]));