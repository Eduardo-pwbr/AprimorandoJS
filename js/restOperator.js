function listaConvidados(...nomes){
  console.log("Lista de convidados:" + nomes);
}
listaConvidados('Ana', 'Bruno', 'Carla', 'Daniel');


function sorteio(...numeros){

  console.log("Números sorteados: " + numeros);
  const  numerogerado = Math.floor(Math.random() * numeros.length);
  
  console.log("Numero gerado é:" + numeros[numerogerado]);

}

sorteio(5, 12, 23, 34, 45, 56);