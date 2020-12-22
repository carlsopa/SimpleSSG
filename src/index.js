const config = require('./config')
const fs = require('fs')
const postMethods = require('./posts')
const addHomePage = require('./main.js')


const posts = fs
    .readdirSync(config.dev.postdir)
    //strip the ending '.md' from each item
    .map(post => post.replace('.md',''))
    //pass the striped item, to have it render a blog post
    .map(post => postMethods.createPost(post))

postMethods.createPosts(posts)
addHomePage(posts)