
this.desc = 'Sou eu .... :)';
const obj = {desc:'Sou obj... :P'};

const func = function(){
    //console.log(this);
}
func();

const funcBind = func.bind(obj);
funcBind();

//const arrowFunc = () => console.log(this);
//arrowFunc();

function Pessoa(){
    let self = this;
    self.idade = 0;
    setInterval(()=>{
        this.idade++;
        console.log(this.idade);
    },1000);
}

//new Pessoa();
