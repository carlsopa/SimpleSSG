const chokidar = require('chokidar')
const EventEmitter = require('events').EventEmitter
const fse = require('fs-extra')

class Observer extends EventEmitter {
    constructor(){
        super()
    }
    watchFolder(folder) {
        try{
        console.log(`Watching for changes on: ${folder}`)
        var watcher = chokidar.watch(folder, {persistent: true})
        watcher
            .on('add', filePath=>{console.log('add')})
            .on('unlink', filePath=>{console.log('gone')})
        

    } catch(error) {
        console.log(error)
    }
}
}
path = './content'
var obs = new Observer()
obs.watchFolder(path)