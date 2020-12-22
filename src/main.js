const config = require('./config')
const fs = require('fs')

//Template for the main homepage of the site.  This will allow links and a bit of information about the author
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
//A function that will create the main page with the above template, as well as data passed to it through the posts
const addHomePage = posts => {
    fs.writeFile(`index.html`,homepage(posts),e=> {
        if(e) throw e;
    })
}
module.exports = addHomePage