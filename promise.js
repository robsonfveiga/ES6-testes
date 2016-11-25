'use strict'

const init = ()=>{
    let saida = 2;
    return saida+1;
}

const add1 = valor =>{
    return valor+1;
}

const add2 = valor =>{
    return valor+2;
}


//Promise.resolve cria uma promise com o resultado passado como //parâmetro
Promise.resolve(init()).then(add1).then(console.log);// imprime 10
