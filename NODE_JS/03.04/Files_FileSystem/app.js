import fs from 'fs';

setTimeout(() => {
    fs.readFile('input.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error('Error by reading input.txt', err);
            return
        } 
        console.log(data);
        fs.writeFile('output.txt', data, 'utf-8', (err) => {
            if (err) {
                console.error('Error by writing in output.txt', err)                
                return
            }
            console.log('File successfully writed')
        })
    })
}, 1000)    