const {readFileSync,writeFileSync} = require('fs');
const os = require('os')
const path = require('path')

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first,second);

writeFileSync(
    './content/together.txt',
    `Here iis the result:\n\t${first+'\n\t'+second}\n`,
    {flag:'a'}
    )