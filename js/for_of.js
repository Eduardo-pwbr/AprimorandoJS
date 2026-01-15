const arr = [1, 2, 3, 4, 5];
const obj ={
  nome: "Eduardo",
  idade: 20,  
  cidade: "São Paulo",
  email: "eduardo@email.com"

}
// Usando for...of para iterar sobre os elementos do array
//
for (let prop in obj) {
  console.log(`Valor do array: ${obj[prop]}`);
  console.log(obj[prop]);
}

// Usando for...of para iterar sobre os elementos do array
//retorna os valores do array
for (n  of arr) {
  console.log(`Valor do array: ${n}`);
}



function sum(){
  const number = Array.from(arguments);
  console.log(number);
  return number.reduce(function(sum,atual){
    return sum + atual;

  },0)

  
}
function evarege(){
return sum(...arguments) / arguments.length;
}
let soma =sum(1, 2, 3, 4, 5);
console.log(soma);

let media = evarege(1, 2, 3, 4, 5);
console.log(media);

