// indexof retorna a posição do array."Lembrando que array começa da posição 0"
let arr = [4, 5, 10, 20, 35, 4, 5]

//indexof pega primeira posição do array
console.log(arr.indexOf(35))

//lastIndexOf pega última posição do  array começando pelo Zero
console.log(arr.lastIndexOf(5) )

console.log(arr.includes(5))

//Exemplo de saber se posição é maior que numero solicitado
//retorno vai ser true
console.log(arr.indexOf(35) > 3)
console.log(arr.lastIndexOf(5) > 4)

//verifica a posição do array se ele maior que numero declarado
console.log(arr.find(function(el){

  return el > 20

}))

//verifica o elento index da posição do primeiro elemento encontrado 

console.log(arr.findIndex(function(el){
  return el > 10
}))