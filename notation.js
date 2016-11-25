let nome = 'Robson', anoNascimento = 2016;

function idade(){
    return new Date().getFullYear() - anoNascimento;
}



var pessoa = {
    nome,
    anoNascimento,
    idade,
    toString(){
        return `${nome} = ${idade()}`;
    }
}

let teste = 'OI';
console.log(`Qual o valor da variavel ${teste}`)
