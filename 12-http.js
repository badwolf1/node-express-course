const http = require('http');
const PORT = '5005';

const server = http.createServer((req,res) => {
    if (req.url === '/'){
        //console.log(req)
       // res.write('Welcome to our homepage!');
        //res.write()
        res.end(`
        <h1>Welcome to our homepage!</h1> <br>
        <a href='/about'>About</a>`)
    }
    else if (req.url === '/about') {
        res.write('Welcome to about!')
        res.end(`
        <h1>Whoops!</h1>
        <a href='/'>Go Back Home</a>`);
    }
    else{
        res.end(`
        <h1>Whoops!</h1>
        <p>Cant find the page</p>
        <a href='/'>Go Back Home</a>
        `)
    }

})

server.listen(PORT);