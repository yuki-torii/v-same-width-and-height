var sameWidthAndHeight = {};

sameWidthAndHeight.install = function (Vue, opts) {
  if ( opts === void 0 ) opts = {};

  Vue.directive('sameWidthAndHeight', {
    bind: function bind (el) {
      el.addEventListener('load', function (e) {
        var width = el.getBoundingClientRect().width + 'px';
        el.style.width = width;
        el.style.height = width;
      });
    }
  });
};

var directives = {};

directives.install = function (Vue, options) {
  Vue.use(sameWidthAndHeight);
};

export default directives;
