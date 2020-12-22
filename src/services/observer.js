const chokidar = require('chokidar')
const EventEmitter = require('events').EventEmitter
const fsextra = require('fs-extra')

class Observer extends EventEmitter {
    constructor(){
        super()
    }
    watchFolder(folder) {
        try{
        console.log(`Watching for changes on: ${folder}`)
        

    } catch(error) {
        console.log(error)
    }
}
}
path = './content'
console.log('here')
var obs = new Observer()
obs.watchFolder(path)