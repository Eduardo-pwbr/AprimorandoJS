
var arr = [1, 2, 3, 4, 5];

// Usando reverse() para inverter a ordem dos elementos do array
var reversedArr = arr.reverse();
console.log("Array invertido: " + reversedArr); // Saída: [5, 4, 3, 2, 1] 

// Usando reduce() para somar todos os elementos do array
var sum = arr.reduce(function(accumulator, atual) {
    return accumulator + atual;
})

console.log("Soma dos elementos: " + sum); // Saída: 15

// Desafio: Usar reverse() e reduce() juntos
var desafioArr = [1,3,4,1,4,5,3,5,8,9];
const numerosUnicos = desafioArr.reduce(function(accumulator, atual) {
    if (accumulator.indexOf(atual) === -1) {
        accumulator.push(atual);
    }
    return accumulator;
}, []);

console.log("Números únicos: " + numerosUnicos); // Saída: [1,3,4,5,8,9]


const numeroUnicos = desafioArr.reduce(function(numeroAtual, atual) {
  if(numeroAtual.indexOf(atual) < 0) {
    numeroAtual.push(atual);
  }
  return numeroAtual;
}, []);

console.log("Números únicos: " + numeroUnicos); // Saída: [1,3,4,5,8,9]