import directive from './directive'

let directives = {}

directives.install = function (Vue, options) {
  Vue.use(directive)
}

export default directives
