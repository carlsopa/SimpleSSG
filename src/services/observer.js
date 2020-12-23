const chokidar = require('chokidar')
const EventEmitter = require('events').EventEmitter
const fse = require('fs-extra')
const postMethods = require('../posts')
const addHomePage = require('../main.js')
const config = require('../config')

const create = () =>{
    const posts = fse
                    .readdirSync(config.dev.postdir)
                    .map(post => post.replace('.md',''))
                    .map(post => postMethods.createPost(post))

                postMethods.createPosts(posts)
                addHomePage(posts)
}
class Observer extends EventEmitter {
    constructor(){
        super()
    }
    watchFolder(folder) {
        try{
        console.log(`Watching for changes on: ${folder}`)
        var watcher = chokidar.watch(folder, {persistent: true})
        watcher
            .on('add', filePath=>{create()})
            .on('change', filePath=>{create()})
            .on('unlink', filePath=>{create()})
        

    } catch(error) {
        console.log(error)
    }
}
}
path = './content'
var obs = new Observer()
obs.watchFolder(path)