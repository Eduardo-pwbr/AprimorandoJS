/* Find serve para busca item dentro do array*/ 
let listagem =[5, 7,"duda", 10, "ana", 3, "bia"];

let busca = listagem.find((item)=>{
    if (item === "ateste")
    {
      return console.log(`Item encontrado: ${item}`);
    }
    else{
         console.log(`Item não encontrado: ${item}`);
    }
 
        

})    
