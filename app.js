const fs = require('fs')

fs.readdir("./APRENDER A PENSAR-LECTURA/",(error,files)=>{
    if(error){
        console.log(`el error es: ${error}`)
    }else{
        console.log(files)
        files.forEach(file=>{
            // fs.writeFileSync('names.txt',file + '\n')
            fs.appendFileSync('names.txt',file + '\n')
            console.log('exito!!!');
        })
    }
})
