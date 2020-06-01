const glob = require('glob')

console.log(
  '--- 多页面信息：--------------------------------------------------'
)
// 函数定义
function getEntry (globPath) {
  let entries = {}
  glob.sync(globPath).forEach(element => {
    let arr = element.split('/')
    let page = arr[2]
    let pageHtml = page + '.html'
    entries[page] = {
      entry: element,
      template: 'public/' + pageHtml,
      filename: pageHtml,
      chunks: ['chunk-vendors', 'chunk-common', page]
    }
  })
  return entries
}

let pagesobj = getEntry('src/pages/**/*.js')

console.log(pagesobj)
console.log(
  '------------------------------------------------------------------'
)

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  "pages": pagesobj
}