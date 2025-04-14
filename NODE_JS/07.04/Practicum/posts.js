import fs from "fs"
import axios from "axios"

axios.get('https://jsonplaceholder.typicode.com/posts')
.then((res) => {

    const posts = res.data
    console.log(posts)

    const content = posts.map((item) => {
        return `id: ${item.id} \ntitle: ${item.title} \nbody: ${item.body} \n`
    }).join('')
    console.log(content)

    fs.writeFile('index.txt', content, (err) => {
        if(err){
            console.log('Error', err)
            return
        }

        console.log('Success')

        fs.readFile('index.txt', 'utf8', (err, data) => {
            if(err){
                console.log('Error', err)
                return
            }

            console.log('Data:', data)
        })
    })

    
}).catch(err => {
    console.error('Error', err)
})