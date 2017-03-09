let sameWidthAndHeight = {}

sameWidthAndHeight.install = function (Vue, opts = {}) {
  function resize (el) {
    var width = el.getBoundingClientRect().width
    if (width > 0) {
      el.style.height = `${width}px`
    }
  }

  Vue.directive('sameWidthAndHeight', function (el) {
    resize(el)
    el.addEventListener('resize', () => {
      resize(el)
    })
  })
}

export default sameWidthAndHeight
