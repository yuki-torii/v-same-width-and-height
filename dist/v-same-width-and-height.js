(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['v-same-width-and-height'] = factory());
}(this, (function () { 'use strict';

var sameWidthAndHeight = {};

sameWidthAndHeight.install = function (Vue, opts) {
  if ( opts === void 0 ) opts = {};

  Vue.directive('sameWidthAndHeight', function (el) {
    el.addEventListener('resize', function (e) {
      var width = el.getBoundingClientRect().width;
      if (width > 0) {
        el.style.width = el.style.height = width + "px";
      }
    });
  });
};

var directives = {};

directives.install = function (Vue, options) {
  Vue.use(sameWidthAndHeight);
};

return directives;

})));
