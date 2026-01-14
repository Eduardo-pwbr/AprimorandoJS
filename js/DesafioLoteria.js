



function gerarNumeroMega(qtdnumeros)
{
  if(qtdnumeros < 6 || qtdnumeros > 9)
  {
    console.log("Apenas numeros de 6 até 9");
    return [];

  }
  const numeros = []
  while(numeros.length < qtdnumeros){
  const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
  
  numeros.push(numeroAleatorio)
  }

  return numeros;

}
const numeroSorteado = gerarNumeroMega(7)
console.log(numeroSorteado);

 
 // for (let i= 0; i < 5; i++) {
  // let teste = Number(prompt("Informe um numero"))
  // num.push(teste);
   // console.log(teste)
  //}