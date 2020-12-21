const config = require('./config')
const fs = require('fs')
const postMethods = require('./posts')

const posts = fs
    .readdirSync(config.dev.postdir)
    .map(post => post.replace('.md',''))

console.log(posts)