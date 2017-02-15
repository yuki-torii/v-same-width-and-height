let sameWidthAndHeight = {}

sameWidthAndHeight.install = function (Vue, opts = {}) {
  Vue.directive('sameWidthAndHeight', {
    bind (el) {
      el.addEventListener('load', function (e) {
        var width = el.getBoundingClientRect().width
        if (width > 0) {
          el.style.width = el.style.height = `${width}px`
        }
      })
    }
  })
}

export default sameWidthAndHeight
