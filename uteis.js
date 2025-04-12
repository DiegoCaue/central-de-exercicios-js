// function exemplodeFilter() {

// let numeros = [1,2,3,4,5,6,7,8,9,10];

// let numerosFiltrados = numeros.filter(numero => numero > 2);

// console.log(numerosFiltrados);

// }

// exemplodeFilter ()

//Filtrar numeros maiores que 20

function exerciciofilter1 () {
    const numeros = [15, 18, 22, 25, 13, 20, 17];
    const maioresQueVinte = numeros.filter(numero => numero > 20);

    console.log(maioresQueVinte);
}

exerciciofilter1 ()
 
//Nomes com letra D
 
function exerciciofilter2 () {
    const nomes = ["Davi", "Diego", "Joao", "Carlos", "Douglas", "Beatriz", 
]
const nomescomD = nomes.filter(none => nome.startsWith("D"));
console.log(nomescomD);
}

exerciciofilter2 ()

//Produtos com preços menor que 50

function exemplodeFilter3 () {
    const produtos = [
        {nome: "Teclado", preco: 120 },
        {nome: "Mouse", preco: 40 },
        {nome: "Fone de ouvido", preco: 80 },
        {nome: "Caderno", preco: 30 },
    ];
    const produtosBaratos = produtos.filter(produto => produto.preco < 50)
    alert(JSON.stringify(produtosBaratos));

}

// exemplodeFind () {
// const produtos = [
//     { id: 1, nome: "Teclado", preco: 100 },
//     { id: 2, nome: "Mouse", preco: 50 },
//     { id: 3, nome: "Monitor", preco: 700 }
//   ];
  
  
//   const produtoCaro = produtos.find(produto => produto.preco == 700);
//   console.log(produtoCaro); 
// }
// exemplodeFind ()  

function exerciciofind1 () {
    const nomes = ["João", "Carlos", "Amanda", "Arthur", "Beatriz"];
    const amanda = nomes.find(nome => nome == "Amanda");
    console.log(amanda); 

}
exerciciofind1 ()

function exerciciofind2() {
    
    const listaDeUsuarios = [
        { id: 1, nome: "Alice" },
        { id: 2, nome: "Bruno" },
        { id: 3, nome: "Carla" }
      ];
      
      const usuarioEncontrado = listaDeUsuarios.find(usuario => usuario.id == 2);
      
      console.log(usuarioEncontrado); 
      
}

exerciciofind2 ()

 function exerciciomap1 () {

    const palavras = ["olá", "mundo", "javascript"];
const enfatizadas = palavras.map(palavra => palavra + "!!!");
console.log(enfatizadas); // ["olá!!!", "mundo!!!", "javascript!!!"]

}

exerciciomap1 ()

function exerciciomap2 () {

const nomes = ["ana", "bruno", "carla"];
const nomesMaiusculos =
console.log(nomesMaiculos);

}

