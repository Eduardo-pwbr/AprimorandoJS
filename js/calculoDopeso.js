const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault() 
  
   const nome = frm.inNome.value
   const altura = parseFloat(frm.inAltura.value) 
   const masculino = frm.inMasculino.checked
 
   

  alert("Sua altura é:"+ nome + altura + masculino )

  let peso;

  if(masculino) {
    peso = 22 * Math.pow(altura, 2)
  }
  else
  {
    peso = 21* Math.pow(altura, 2)
  }

 
  resp.innerText = `${nome} seu peso ideal é: ${altura.toFixed(3)} kg`
  
  })
