var notas = [2, 5, 10, 25, 50, 100]
var total = 0

for(var repeticoes = 0; repeticoes < notas.length; repeticoes++){
    total = total + notas[repeticoes]
}

alert(`O total do seu dinheiro é: ${total}`)