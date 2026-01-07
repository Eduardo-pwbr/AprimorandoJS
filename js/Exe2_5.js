const frm = document.querySelector("form")
const res1 = document.querySelector("#resp1")
const res2 = document.querySelector("#resp2")


frm.addEventListener("submit",(e) =>{

  const produto = frm.inProduto.value
  const preco = Number(frm.inPreco.value)
  const qtdUnidade = 3
  const precoPromocional = 15.00

  //const calc1 = (preco + preco)+3
  const calc2 = (qtdUnidade * preco )
  const uni =  calc2 - precoPromocional
  
  
  


 res1.innerHTML = `${produto} - Promoção: Leve 3 por:R$ ${precoPromocional.toFixed(2)}`
  res2.innerText = `O 3 produto custa apenas R$ ${uni.toFixed(2)}`

  
console.log(uni)

 e.preventDefault()
})

  


 
