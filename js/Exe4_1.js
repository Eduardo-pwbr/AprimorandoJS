const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit",(e) =>{

  const nome = frm.inNome.value;
  const n1 = Number(frm.inNota1.value);
  const n2 = Number(frm.inNota2.value);
  media = (n1 + n2) / 2;

  if (media >= 7 && n2 <= 10) {

    resp1.innerText = `${nome} Você foi aprovado com média ${media.toFixed(2)}aprovado`;
    resp1.style.color ="blue"
  }
  else if (media >= 5 && n2 <= 10) 
  {
    resp1.innerText = `${nome} Você está em recuperação com média ${media.toFixed(2)} recuperação`; 
     resp1.style.color ="red"
   
  }
  else 
  {
   resp1.innerText = `${nome} Você foi reprovado com média ${media.toFixed(2)}Recprovado`;
  }

   e.preventDefault();
  
 
 // resp1.innerText = `Olá ${nome}, seja bem-vindo(a)!`;
  
 

})