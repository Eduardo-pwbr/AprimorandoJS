// método de array contat(),join(),toString()

let arr = [0,1,2]
let arr1 = [4,5,6]


console.log( typeof arr.toString())
console.log(arr.join())
console.log(arr.join(" - ")) // método join posso adicionar parametro por exemplo: Separação de array
console.log(arr.concat(arr1))
console.log(arr1.toString())
console.log(arr.concat(arr1, 9,10,["Olá mundo"])) // implementando novos valores no  array


let arr2 = arr.concat(arr1)
arr[arr.length] ="novo valor"

console.log(arr2)
console.log(arr)

/// criando novo array vazia

let  arr4 = [].concat(arr1)
console.log(arr4)