const fs = require('fs');

const lendoArquivo = function(err, file1) {
    if (err) { // verifica se houve erro
        return console.log(err);
    } else { //Leu com sucesso
        fs.readFile('../ES6-testes/file2.txt', function(err, file2) {
            //Lê o segundo arquivo
            if (err) { // verifica se houve erro
                return console.log(err);
            }
            console.log(`${file1}  ${file2}`); //Imprime o resultado
        });
    }
}


fs.readFile('../ES6-testes/file.txt', lendoArquivo);
