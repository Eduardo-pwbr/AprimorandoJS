const arr = [1, 5, 10, "olá", true]

let sohsoma = arr.some( function(el){

  //console.log(el)
  return typeof el === "number"
})

//Filtrando array

arr.filter(function(el, i, _arr){
  //console.log(el)
  //console.log(i)
  //console.log(_arr)
  return false

})

const arr1 = arr.filter(function(el,i,_arr){
  return typeof el ==="number"
})

 arr.forEach(function(el, i, _arr){

 console.log(el, i)

})

console.log(arr)
console.log(arr1)

//console.log(sohsoma)

//every faz verificação conteúdo de ARRAY