const config = require('./config')

const posts = fs
    .readdirSync(config.dev.postdir)
    .map(post => post.replace('.md',''))

console.log(posts)