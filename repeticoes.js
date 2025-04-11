function exemploFor () {

    // FOR
    // 1o = Declarar contador.
    // 2o = Condição (enquanto).
    // 3o = Incremento.
    for (let contador = 1; contador <= 5; contador++) {
    
        alert(contador);
    
    }

}

function exemploWhile () {

    let contador = 1;

    while (contador <= 5) {

        console.log(contador);
        contador ++;

    }


}

function exemploDoWhile () {

    let contador = 1;

    do {

        alert(contador);
        contador++;

    } while (contador <= 5);

}



function exercicio01 () { 
    for ( let contador = 1; contador <= 10; contador++ ) {
    
        console.log(contador);
    
    }
   
}


function exercicio02 () {


let numero = prompt("Digite um número:");


for (let i = 1; i <= 10; i++) {
    console.log  (`${numero} x ${i} = ${numero * i}`);
}

}



function exercicio03 () {

    let N = prompt("Digite um numero N:");
    let soma = 0;
    for (let i = 1; i <= N; i++) {
        soma += i;
    }
    console.log(`A soma dos primeiros ${N} números naturais é: ${soma}`);
    

}




function intermediario01 () {
    let i = 1;

    while (i <=50) {
        if (i % 2 === 0) {
            console.log(i);

        }
        i++;
    }

}
  


function intermedirario02 () {
    let numeroAlertorio = Math.floor(Math.random() * (100 - 1) + 1);

    let tentativa;

    while (tentativa != numeroAlertorio) {

        tentativa = prompt("Insira um numero"); 

        if (numeroAleatorio > tentativa) {
            
            alert ("Numero aleatorio e maior.");

        } else if (numeroAlertorio < tentativa) {

            alert("numero aleatorio e menor");
        } else {
            alert ("Voce acertou");
        }
        
}

}




// function intermediario03 () {

//     let numero = (prompt ("Digite um numero"))

//     while (numero >=0) { 
//         console.log (numero);
//         numero--;
//     }

// }



function avancando03 () {

    // Pede um número ao usuário
    let numero = prompt("Digite um número:");
    
    // Converte o número para uma string e inicializa a variável de resultado
    let numeroInvertido = "";
    
    // Enquanto o número não for zero
    while (numero > 0) {
        // Obtém o último dígito do número e o adiciona à variável de resultado
        let ultimoDigito = numero % 10;
        numeroInvertido += ultimoDigito;
        
        // Remove o último dígito do número
        numero = Math.floor(numero / 10);
    }
    
    // Exibe o número invertido
    alert("Número invertido: " + numeroInvertido);
}



