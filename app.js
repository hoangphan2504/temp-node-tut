// npm i <package name>
// npm install -g <package name>
// package.json
// npm init
// npm init -y

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)