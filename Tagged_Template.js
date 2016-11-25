function tag(strings,...values){
    console.log(strings);
    console.log(values);
    return "Outro Valor"
}

let aluno = "Robson";
let status = 'Aprovado';
console.log(tag `${aluno} está ${status}`);
