let num1=Number(prompt('digite um numero'))
let sinal=prompt('qual sera o sinal ?')
let num2=Number(prompt('qual o outro numero'))
let resultado=0

if(sinal="+"){
    resultado=(num1+num2);
}   else if(sinal='-'){
    resultado=(num1-num2)
    }else if (sinal="*"){
        resultado=(num1*num2)
    }else if(sinal='/'){
        resultado=(num1/num2)
    }else {
        console.log=('voce digitou um sinal invalido, tente novamente')
    }

console.log (resultado)