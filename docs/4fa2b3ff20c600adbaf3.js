webpackJsonp([1],Array(34).concat([
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ProjectCleanEarth.vue": 47,
	"./ProjectComponent.vue": 48,
	"./ProjectIoTBrowser.vue": 49,
	"./ProjectTravelTour.vue": 50
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
webpackContext.id = 34;

/***/ }),
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
/* 46 */,
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

/***/ })
]));