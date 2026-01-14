const arr = [1, 2, 3];

const novoArr = [...arr, 4, 5, 6];  

//console.log("Array original: " + arr);
//console.log("Novo array com spread operator: " + novoArr);


function sum() {
console.log(arguments);
console.log(arguments.length);
}

sum(...arr);

 arr.push(...novoArr);
console.log(arr);