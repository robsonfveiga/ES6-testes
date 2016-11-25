'use strict'

const fs = require('fs');

console.log('1');



//Codigo fica todo assincrono
let lerArquivo = (resolve,reject) => {
     fs.readFile('../ES6-testes/file2.txt', function(err, file2) {
         resolve(file2);
    })
}
let imprimiArquivo = (val) => {
    console.log(val.toString())
    return "arquivo lido e impresso";
}
let imprimiArquivo2 = (val) => {
    console.log(val)
}
new Promise(lerArquivo).then(imprimiArquivo).then(imprimiArquivo2)


console.log('2');
