const fs = require('fs')

fs.readFile('example.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log('error, no file')
        return
    }
    console.log(data)
})
fs.writeFile('example.txt', 'text_text_text', (err) =>{
    if(err){
      console.log('error, no file')
      return
    }
    console.log('Successfully created')
    fs.readFile('example.txt', 'utf-8', (err, data) =>{
      if(err){
        console.log('error. no file')
        return
      }
      console.log('text: ', data)
      
    })
    fs.unlink('example.txt', (err) =>{
      if(err){
        console.log('error. no file')
        return
      }
      console.log('File successfully deleted')
    })
  })