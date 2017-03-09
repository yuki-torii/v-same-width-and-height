var sameWidthAndHeight = {};

sameWidthAndHeight.install = function (Vue, opts) {
  if ( opts === void 0 ) opts = {};

  function resize (el) {
    var width = el.getBoundingClientRect().width;
    if (width > 0) {
      el.style.height = width + "px";
    }
  }

  Vue.directive('sameWidthAndHeight', function (el) {
    resize(el);
    el.addEventListener('resize', function () {
      resize(el);
    });
  });
};

var directives = {};

directives.install = function (Vue, options) {
  Vue.use(sameWidthAndHeight);
};

export default directives;
