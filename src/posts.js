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
    const data = fs.readFileSync(`${config.dev.postdir}/${postPath}`,"utf8")
    const content = fm(data)
    content.body  = marked(content.body)
    content.path = postPath;
    return content
}