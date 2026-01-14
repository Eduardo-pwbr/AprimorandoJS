var numero = Number(prompt("Digite o numero!"))


function leituranumero()
{


 if(numero > 0 )
 {
  console.log("Numero é positivo")
 } 
  else if(numero < 0)
  {
    console.log("Numero é negativo")
  }
else{
  console.log("Numero é inválido")
}
 
if(numero % 2 == 0){
  console.log("Este numero é par!");
}
else
{
  console.log("Este numero impar!")
}
}
leituranumero()