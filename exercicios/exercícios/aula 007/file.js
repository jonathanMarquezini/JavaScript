function soma(num1, num2){
    return num1 + num2
}

function subtrair(num1, num2){
    return num1 - num2
}

function multiplicacao(num1, num2){
    return num1 * num2
}

function divisao(num1, num2){
    return num1 / num2
}
function porcentagem(num1, num2){
    return num1 % num2
}

var parametro1 = parseFloat(prompt('Insira o primeiro numero a ser calculado:'))
var parametro2 = parseFloat(prompt('Insira o segundo numero a ser calculado:'))
var operacao = prompt('Escolha a operaçao;1 para soma; 2 para subtração; 3 para multiplicação; 4 para divisão, 5 para porcentagem')

if(operacao == 1){
    alert(soma(parametro1, parametro2))
} else if(operacao == 2){
    alert(subtrair(parametro1, parametro2))
} else if(operacao == 3){
    alert(multiplicacao(parametro1, parametro2))
} else if (operacao == 4){
    alert(divisao(parametro1, parametro2))
} else if(operacao == 5){
    alert(porcentagem(parametro1, parametro2))
}  else{
    alert('[ERRO] Digite um numero entre 1 a 4')
}