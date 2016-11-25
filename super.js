let pai = {
    func(){return 'Pai'}
}

let filho = {
    __proto__:pai,
    func(){return `${super.func()} e Filho`}
}

console.log(filho.func());
