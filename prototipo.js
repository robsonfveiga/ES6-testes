let avo = {attr1:'A'};
let pai = {__proto__:avo,attr2:'B'};
let filho = {__proto__:pai,attr3:'C'};

console.log(filho.attr1,filho.attr2,filho.attr3);

let mae = {corCabelo:'Castanho Escuro'};
let filha = {};
Object.setPrototypeOf(filha,mae);
console.log(filha.corCabelo);
