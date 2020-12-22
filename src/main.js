const config = require('./config')
const fs = require('fs')

const homepage = posts => `
<!DOCTYPE html>
<html lang="en">
<head>
<title>${config.site.blogName}</title>
</head>
<body>
<h1>${config.site.blogName}</h1>
<div>
${posts.map(
    post=>`<div><h3><a href="./public/${post.path.replace(' ','-')}.html"Title</a></h3>
    <p>Description</p></div>`
).join("")}
</div>
</body>
</html>
`
const addHomePage = posts => {
    fs.writeFile(`index.html`,homepage(posts),e=> {
        if(e) throw e;
        console.log('index created')
    })
}
module.exports = addHomePage