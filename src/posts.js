const config = require('./config')
const fs = require('fs')
const matter = require('gray-matter')
const marked = require('marked')
//A basic template for the given posts, this one does not provide much in terms of design, it is just to get the markdown into html.
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
//we pass in the path to the individual files, and this goes through and breaks them apart and pulls out meta-data as well as function data.  It will return the main function data of the post.
const createPost = postPath => {
    const data = fs.readFileSync(`${config.dev.postdir}/${postPath}.md`,"utf8")
    const content = matter(data)
    content.body  = marked(content.content)
    content.path = postPath;
    return content
}
//taking the main content from the above function we pass it through to the above template, and then output a new html file with the markdown, properly paresed out into HTML.
const createPosts = posts => {
    posts.forEach(post=>{
        if(!fs.existsSync(`${config.dev.outdir}/${post.path}`))
            fs.mkdirSync(`${config.dev.outdir}/${post.path}`)
        fs.writeFile(
            `${config.dev.outdir}/${post.path.replace(' ','-')}.html`,
            postHTML(post),
            e => {
                if (e) throw e
            }
        )
    })
}
module.exports = {
    createPost: createPost,
    createPosts: createPosts
}