const fs = require('fs')
const prompt = require('prompt')
var title = ''

prompt.start()
const getDate= ()=>{
    Date_Object = new Date()
    Day = Date_Object.getDate()
    Month = Date_Object.getMonth()+1
    Year = Date_Object.getFullYear()
    Date = Month+'/'+Day+'/'+Year
    return Date
}

prompt.get(['title'], function(err,result){
    if(err) {return onErr(err)}
    data = `
    ---
    Author: Paul Carlson
    Title: ${result.title}
    Date: ${getDate()}
    ---
    `
    fs.writeFile(result.title+'.md',data,function (err) {
        if(err) throw err
    })
})