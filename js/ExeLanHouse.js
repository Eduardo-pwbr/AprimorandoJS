const frm = document.querySelector("form")
const res = document.querySelector("h3")
  const precoPorBloco = 1.50;

frm.addEventListener("submit",(e) =>{
  const minuto = Number(frm.inMinuto.value)
  const tempo = Number(frm.intempo.value)

  const calc = Math.ceil(tempo/minuto)
  const total =  calc/precoPorBloco


  res.innerText =`Valor a Pagar R$:${total.toFixed(2)}`
  e.preventDefault()
})