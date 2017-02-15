var sameWidthAndHeight = {};

sameWidthAndHeight.install = function (Vue, opts) {
  if ( opts === void 0 ) opts = {};

  Vue.directive('sameWidthAndHeight', {
    bind: function bind (el) {
      el.addEventListener('load', function (e) {
        var width = el.getBoundingClientRect().width;
        if (width > 0) {
          el.style.width = el.style.height = width + "px";
        }
      });
    }
  });
};

var directives = {};

directives.install = function (Vue, options) {
  Vue.use(sameWidthAndHeight);
};

export default directives;
