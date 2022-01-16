const fs = require('fs')

fs.readdir("./entrada/",(error,files)=>{
    if(error){
        console.log(`el error es: ${error}`)
    }else{
        const regex = /[0-9]{1,}.mp4/;//buscar un conjunto de numeros y .mp4
        files.forEach((file)=>{
            // console.log(file)
            const res = regex.exec(file)//resultado de la busqueda
            const newPath = `${__dirname}/salida/ONE PIECE ${res}`
            fs.rename(`./entrada/${file}`,newPath,(error)=>{
                if(error){
                    throw error
                }
                console.log("exito")
            })
        })
    }
})
