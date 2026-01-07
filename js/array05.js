//falando dos métodos arr.push()
                    // pop()
                    // shift()
                    // unshif()
                    // slice()
                    // splice()

 //método push adiciona novos valores no array                   
let arr = [0, 1, 2, 3]
let original = arr.push(4,5,6, 7,true,"Olá mundo") // aqui altera o valor do array original com novos elementos
//console.log(original)
//console.log(arr)


//pop remove o último elemento do array
let ultimoitem = arr.pop()
let permanece = arr[arr.length - 1] // não altera o valor original
//console.log(ultimoitem)
//console.log(arr)
//console.log(permanece)


//removendo primeiro elemento do array
let primeiroitem = arr.shift()
console.log(primeiroitem)
console.log(arr)


 // método unshift adiciona novos elementos no array
 
 let novo  = arr.unshift("duda",10,20,30)
 console.log(novo)
 console.log(arr)

 // método slice() recorta a posição do array e retorna um novo array
 let arr2 = arr.slice(2, 4) // aqui retorna os elementos do array entre o índice 2 e 4
 console.log(arr2) // [2, 3]

 //método slice() removeos elementos da posição ro array
 let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 console.log(arr4.splice(2, 5)) // aqui retorna os elementos do array entre o índice 2 e 5 que foram removidos

 let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 arr6.reverse() // inverte a ordem dos elementos do array
 console.log(arr6)
// [9, 8, 7, 6, 5, 4, 3, 2, 1]


let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let soma = arr7.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0); // aqui soma todos os elementos do array e retorna o resultado
 console.log(soma) // 45

 let arr8 = [1, 2, 3]

 let soma2 = arr8.reduce(function(acumulador, valorAtual) {
  return acumulador + valorAtual;
 })
  console.log(soma) 

