'use strict'
const fs = require('fs');


let generator = function*(){
    yield fs.readFileSync('../ES6-testes/file.txt').toString();
    yield "Ultima linha de execução";
}

let  gen = generator();

while(!done){
    {value,done} = {value:'',done:false};
    console.log(value);
}
