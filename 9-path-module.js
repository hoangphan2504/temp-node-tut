const path = require('path')
const { text } = require('stream/consumers')

console.log(path.sep)

const filePath = path.join('/content','subfolder','text.txt')
console.log(filePath)


const base = path.basename(filePath)

console.log(base)

const absolute = path.resolve(__filename,'content','subfolder','text.txt')
console.log(absolute)