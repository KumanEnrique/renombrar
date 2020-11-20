const { ifError } = require('assert')
const fs = require('fs')

fs.readdir("./entrada/",(error,files)=>{
    if(error){
        console.log(`el error es: ${error}`)
    }else{
        const regex = /[0-9]+/
       
        files.forEach((file)=>{
            const match = regex.exec(file)
            const newPath = __dirname+`/salida/${match[0]}jap-esp.png`
            fs.rename('./entrada/'+file,newPath,(error)=>{
                if(error){
                    console.log(`el error es: ${error}`)
                }else{
                    console.log('exito!!')
                }
            })
        })
    }
})