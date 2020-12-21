const config = require('./config')
const fs = require('fs')
const postMethods = require('./posts')
const addHomePage = require('./main.js')


const posts = fs
    .readdirSync(config.dev.postdir)
    .map(post => post.replace('.md',''))
    .map(post => postMethods.createPost(post))

postMethods.createPosts(posts)
addHomePage(posts)