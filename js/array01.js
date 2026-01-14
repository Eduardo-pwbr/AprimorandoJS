const arr = [ 1 , 4, 6, "Olá", true]
//const arr1 = [ 2 , 4, 6, 7, 20]
let  arr1 = [ 2 , 4, 6, 7, 20]

// every verifica cada elemento do array retor true que é valor boleano
//resultado true

let  imprimir  = arr.every(function(){
 return true
})

console.log(imprimir)

// retorna cada elemeno do array utilizando parametro
// resultado 1 , 4, 6, "Olá", true

let imprimir1  = arr.every(function(el){
   console.log (el)
   return true

})

//retornar cada elemento do array utilizando parametro e verificando o valor de retorno se é falso ou true
// resultado é falso
let imprimir2 = arr.every(function(el){
  return typeof el === "number"
})
console.log(imprimir2)


//retornar cada elemento do array utilizando parametro e verificando o valor de retorno se é falso ou true
// resultado é true  utilizando some porque tem numero

let imprimir3  = arr.some(function(el){
  return typeof el === "number"
})
console.log(imprimir3)

//retornar cada elemento do array utilizando parametro e verificando o valor de retorno se é falso ou true
// resultado é falso  porque não tem numero maior que 20

let imprimir4  = arr.some(function(el){
  return typeof el === "number" && el > 20
})
console.log(imprimir4)


// fazendo o filtro de array 
arr.filter(function(el,i, _arr){
  
  console.log(el)
  console.log(i)
  console.log(_arr)
 return true
})

arr.filter(function(el,i, _arr){
  
 return true
})
console.log(arr)


/////forEach percorendo array 

arr.forEach( function(el, i, _arr){
  console.log(i ,":", el)
})

// map retorando o valor alterado ao quadrado neste casso, declaração da variavel tem que ser let e não const.

arr1 = arr1.map( function(el,i ,_arr){
  
  return el * el

})

console.log(arr1)

