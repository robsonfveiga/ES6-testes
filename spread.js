function media(...notas){
    return notas;
}

let notasAluno = [7.7,7.3,6.1,6.5];
console.log(media(...notasAluno))

let turmaES6 = [7.5,7.3,6.1,...notasAluno];
console.log(turmaES6);
