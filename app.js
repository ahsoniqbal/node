import http from 'http';

http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('hello world!');
        res.end();
    }
    else if(req.url === '/students' && req.method === 'GET'){
        res.write(JSON.stringify([
            {name: 'ahsan', age: 25},
            {name: 'ali', age: 33},
            {name: 'ahemd', age: 12}

        ]));
        res.end();
    }
})
.listen(3000, ()=>{
    console.log('connected on port 3000....');
});