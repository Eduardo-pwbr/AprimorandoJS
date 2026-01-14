// Desafio: Utilizando o array de produtos abaixo, utilize o método find para localizar um produto específico e exibir sua posição no array. Em seguida, remova esse produto do array e exiba o array atualizado.

let produtos = ["Computador", "Telefone", "Mouse", "Teclado"];

let buscaProduto = produtos.find((item, index)=>{

  return  console.log(`Produto encontrado: ${item} - Posição: ${index}`);

  
})


// Removendo o item "Mouse" do array
//produtos.splice(2,1);
//console.log(produtos);


// Solução alternativa de  busca  de item no array
//let listaDeProdutos = produtos.find((item, index)=>{

// if (item === "Computador"){
 //console.log(`Produto encontrado: ${item} - Posição: ${index}`);   

 //}
//})

// Removendo o item "Mouse" do array
//produtos.splice(2,1);
//console.log(produtos);



// Desafio: Ordene o array de números abaixo em ordem crescente utilizando o método sort e exiba o array ordenado no console.
//const numeros = [0,4,7,9,2,6,3,8,1,5,10];
//numeros.sort((a,b)=> a - b)
//console.log(numeros);



// Desafio: Ordene o array de números abaixo em ordem decrescente utilizando o método sort e exiba o array ordenado no console.
//const numeros = [0,4,7,9,2,6,3,8,1,5,10];
//numeros.sort((a,b)=> b - a)
//console.log(numeros);



// Desafio: Após ordenar o array de números em ordem crescente, remova o primeiro elemento do array utilizando o método splice e exiba o array atualizado no console.
//const numeros = [0,4,7,9,2,6,3,8,1,5,10];
//numeros.sort((a,b)=> a - b)
//numeros.splice(0,1);
//console.log(numeros);

// Desafio: Dada a string de data no formato "DD/MM/AAAA", utilize o método split para separar o dia, mês e ano, e exiba a data no formato "AAAA-MM-DD".
//let hoje = "20/07/2019";
//let partes = hoje.split("/");
//let dia = partes[0];
//let mes = partes[1];
//let ano = partes[2];
//console.log(ano + "-" + mes + "-" + dia);


function somar(a, b){
    return a + b;
} 
console.log(somar(3, 7));