let numberOne = prompt('Digite o 1º número:')
let numberTwo = prompt('Digite o 2º número')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo
let rest = numberOne % numberTwo

alert(`SOMA: ${sum}
SUBTRAÇÃO: ${sub}
MULTIPLICAÇÃO: ${mult}
DIVISÃO: ${div}
Resto da divisão: ${rest}`)

if(sum % 2 == 0){ // o RESTO do resultado da soma divido por 2 tem que ser 0 para a afirmação ser verdadeira ( no caso PAR)
    alert(`A soma dos dois números é igual a ${sum} que é um número par`)
}else{
    alert(`A soma dos dois números é igual a ${sum} que é um número Impar`)
}

if(numberOne == numberTwo){
    alert(`o 1º número e o segundo número inserido são iguais`)
}else{
    alert('Os números inseridos nao são iguais')
}