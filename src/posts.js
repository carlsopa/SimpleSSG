const config = require('./config')
const fs = require('fs')
const matter = require('gray-matter')
const marked = require('marked')

const postHTML = data => `
<html lang="en">
    <head>
        <title></title>
    </head>
    <body>
    <div>
    ${data.body}
    </div>
</html>`

const createPost = postPath => {
    const data = fs.readFileSync(`${config.dev}/${postPath}`,"utf8")
    const content = fm(data)
    content.body  = marked(content.body)
    content.path = postPath;
    return content
}

const createPosts = posts => {
    posts.forEach(post=>{
        if(!fs.existsSync(`${config.dev.outdir}/${post.path}`))
            fs.mkdirSync(`${config.dev.outdir}/${post.path}`)
        fs.writeFile(
            `${config.dev.outdir}/${post.path}/index.html`,
            posthtml(post),
            e => {
                if (e) throw e
                console.log('success!')
            }
        )
    })
}
module.exports = {
    createPost: createPost,
    createPosts: createPosts
}