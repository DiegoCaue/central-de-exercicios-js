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

exemploDoWhile ()


function exercicio01 () { 
    for ( let contador = 1; contador <= 10; contador++ ) {
    
        console.log(contador);
    
    }
   
}

exercicio01 ()

function exercicio02 () {


let numero = prompt("Digite um número:");


for (let i = 1; i <= 10; i++) {
    console.log  (`${numero} x ${i} = ${numero * i}`);
}

}

exercicio02 ()

function exercicio03 () {

    let N = prompt("Digite um numero N:");
    let soma = 0;
    for (let i = 1; i <= N; i++) {
        soma += i;
    }
    console.log(`A soma dos primeiros ${N} números naturais é: ${soma}`);
    

}


exercicio03 ()

function intermediario01 () {
    let i = 1;

    while (i <=50) {
        if (i % 2 === 0) {
            console.log(i);

        }
        i++;
    }

}
  
intermediario01 ()


function intermediario03 () {

    let numero = (prompt ("Digite um numero"))

    while (numero >=0) { 
        console.log (numero);
        numero--;
    }

}

intermediario03 ()






