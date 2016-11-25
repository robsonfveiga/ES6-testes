function real(strings,...values){
    const resultado = [];
    values.forEach(function(value,index){
        value =  `R$${value.toFixed(2)}`;
        resultado.push(strings[index],value)
    })
    return resultado.join('');
}

let preco = 29.99,parcela = 11;
console.log(real `1x de ${preco} ou 3x de ${parcela}`)
