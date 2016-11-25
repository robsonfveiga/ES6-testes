let pessoa = {nome:'Robson',idade:'29'};
let {nome,idade} = pessoa;

console.log(nome,idade);

let {nome:n,idade:i} = pessoa;
console.log(n,i);

let {genero,situacao = 'Ativo'} = pessoa;
console.log(genero,situacao);

pessoa = {
    nome:'Robson',
    endereco:{
        rua:'A',
        numero:'1000'
    }
};

let {endereco:{rua,numero,cep}} = pessoa;
console.log(rua,numero,cep);


let [a] = [10];
console.log(a);

let [n1,,n3,,n5,n6 = 0] = [10,7,9,8];
console.log(n1,n3,n5,n6);

let [,[,nota]] = [[7,8,8],[9,6,8]];
console.log(nota);

function rand({min=0,max=1000}){
    let value = Math.random()*(max-min);
    return Math.floor(value)+min;
}

console.log(rand({max:50,min:40}));
console.log(rand({min:955}));
console.log(rand({}));
