const http = require('http')
const express = require('express')
const url = require('url')
const app = express()

http.createServer(function(req, res){
    res.writeHead(200, {
        "Content-Type"  : "text/html"
    })
    // res.setHeader('Content-Type', 'text/html')

    // parse url
    const parsedUrl = url.parse(req.url, true)

    //get pathname
    const path = parsedUrl.pathname

    //get http method
    const method = req.method.toLowerCase()

    res.end(`pathname: ${path} dan methodnya ${method}`)
}).listen(3000)

// app.listen(3000, ()=>{

//     console.log('server running on port 3000')

// })

// app.get('/', (req, res)=>{
//     res.send('bruh jalannnnn')
// })
// app.get('/about', (req,res)=>{
//     res.send('this is about')
// })