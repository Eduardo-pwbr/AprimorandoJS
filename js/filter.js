let listagem =[5, 7,"Eduardo", 10, "Ana", 3, "Bia"];


let filtro = listagem.filter((item)=>{

  return item.length <= 5;
})
console.log(filtro);