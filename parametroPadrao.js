function soma(a=1,b=1){
    return a+b;
}
console.log(soma());
console.log(soma(2,3));
console.log(soma(0));



function loucura(a=soma(),b){
    return `valor doidao: ${a} e valor do b: ${b}`;
}

console.log(loucura(2,3));
