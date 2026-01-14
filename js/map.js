let  lista = [
    {nome: 'Ana', idade: 28},
    {nome: 'Bruno', idade: 34},
    {nome: 'Carla', idade: 25},
    {nome: 'Daniel', idade: 30}
];

let novaLista = ["Paulo","Fabio","Eduardo"]
  

novaLista.map((items, index)=>{
    console.log(`Passando:${items} - está na posição ${index}`);
})


let numeros = [1,2,3,4,5,6,7,8,9,10];

let total = numeros.reduce((acumulador, numero, indice, original)=>{
 console.log(`${acumulador} - total até o momento`);
 console.log(`${numero} - número atual`);
 console.log(`${indice} - índice atual`);
 console.log(`${original} - array original`);

 return acumulador += numero;
})
console.log(`O total é ${total}`);