let  arr = [1, 3, 5, 7, 9];

//let  arr1 = arr.push(11, 13,true,"olá"); // Adiciona elementos ao final do array

//console.log(arr);
//console.log(arr1);

//let  arr2 = arr.pop(); // Remove o último elemento do array
//console.log(arr2);
//console.log(arr);
//let utimo = arr[arr.length - 1];
//console.log(arr[utimo]);

let  arr3 = arr.shift(); // Remove o primeiro elemento do array
console.log(arr3);

let  arr4 = arr.unshift(0, 2, 4); // Adiciona elementos no início do array
console.log(arr4);
console.log(arr);

let  arr5 = arr.slice(4); // Extrai uma parte do array (do índice 2 ao 4)
console.log(arr5);
console.log(arr);

let  arr6 = arr.splice(2 , 0,"teste"); // Remove e/ou adiciona elementos no array

console.log(arr6);

console.log(arr);