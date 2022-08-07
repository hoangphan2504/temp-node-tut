const http= require('http')

const server = http.createServer((req,res) =>{
  if(req.url === '/'){
    res.end('Welcome to my home page')
  }
  if (req.url === '/about'){
    res.end('This is our short description')
  }
  res.end('<h1>Oops we do not find this page</h1> <a href="/">back home</a>'
  )
})

server.listen(5000)