let sameWidthAndHeight = {}

sameWidthAndHeight.install = function (Vue, opts = {}) {
  Vue.directive('sameWidthAndHeight', {
    bind (el) {
      el.addEventListener('load', function (e) {
        var width = el.getBoundingClientRect().width + 'px'
        el.style.width = width
        el.style.height = width
      })
    }
  })
}

export default sameWidthAndHeight
