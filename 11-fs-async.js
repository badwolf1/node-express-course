const { readFile, writeFile } = require('fs');

console.log('start');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    const first = result

    readFile('./content/second.txt','utf8',(err,result) => {
        if(err){
            console.log(err)
            return
        }
        //console.log(result)
        const second = result;
        writeFile('./content/together-async.txt',`Here is the aync result: ${first}, ${second}`,(err,result) =>{
            if(err){
               console.log(err) 
            }
            //console.log(err)
        })
        console.log('completed task')
    })
    
});

console.log('starting next one')