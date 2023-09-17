var nota1 = Number(prompt("Digite sua primeira nota"))
var nota2 = Number(prompt("Digite sua segunda nota"))

var resultado = (nota1 + nota2) / 2

if(resultado >= 6){
    alert(`você foi aprovado, sua nota: ${resultado}`)
    alert('Parabéns') 
} else {
    alert(`você foi reprovado, sua nota: ${resultado}`)
    alert('Você ficou de recuperação.') 
}