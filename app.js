const fs = require('fs')

fs.readdir("./entrada/",(error,files)=>{
    if(error){
        console.log(`el error es: ${error}`)
    }else{
        // console.log(files)
        const regex = /y2mate.com - /
        // console.log(regex);
        files.forEach((file)=>{
            const match = regex.exec(file)
            const cadenaNew = file.slice(13,file[file.length])
            // console.log(cadenaNew);
            const newPath = __dirname+`/salida/${cadenaNew}`
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
