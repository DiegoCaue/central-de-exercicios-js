function exerciciocondicionais1 () {


let numero = prompt ("Qual sua idade")

if (numero >18 ) { 
    alert ("maior de idade")
}

else {
    if (numero <18);
alert ("menor de idade")
}
gerarlog("Exercicios de maioridade executado ás no alert:" + new Date().toLocaleString());
}






function exerciciocondicionais2 () {

let numero = prompt("Digite um numero")

if (numero >0) {

    alert ("Positivo");
} 

else {
    if (numero <0 )  
    alert("negativo");
}
}


function exerciciocondicionais03 () {
let nota = prompt ("Nota do aluno")

if (nota >=60)
    alert ("Aprovado")

else {
    alert ("Reprovado")
}
}


function exerciciocondicionais04 () {
let numero = prompt ("Digite um numero")
 
if (numero >0)
    alert ("Positivo")

if (numero >=0)
    alert ("igual a Zero")

else 
    alert("negativo")
}


function exerciciocondicionais05 () {
let numero = prompt ("Classificacao de idade")

if (numero <=12)
    alert ("criança")

if (numero <=17)
if (numero >=13)
    alert ("adolescente")

if (numero >=18)
    alert ("adulto")
}


function exerciciocondicionais06 () {
let numero = prompt ("Digite um numero")

if (numero %2==0)
    alert ("numero Par")

else 
    alert ("Numero Impar")

}
function exercicioIntermediario1 () {
    let num1 = prompt ("Digite primeiro numero")
    let num2 = prompt ("Digite segundo numero")
    let num3 = prompt ("Digite terceiro numero")

    let maior

    if (num1 >= num2 && num1 >= num3) { maior = num1}
    else if (num2 >= num1 && num2 >= num3)  {maior = num2}
    else {
        maior = num3
    }

    alert ("O maior numero é:" +maior)

    
}

function gerarlog (textodoLog) {

let logsContainer = document.querySelector(".logs-container");

let paragraph = document.createElement ("p");

paragraph.innerHTML = textodoLog;

logsContainer.appendChild(paragraph);

}









    








