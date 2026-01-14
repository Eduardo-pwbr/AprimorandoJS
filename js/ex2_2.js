const frm = document. querySelector("form")
const res1 = document.querySelector("h3")
const res2 = document.querySelector("h4")


frm.addEventListener("submit",(e)=>{

  const titulo = frm.inTitulo.value
  const duracao = Number(frm.inDuracao.value)

  const horas = Math.floor(duracao / 60)
  const minutos= duracao % 60

  res1.innerText = titulo
  res2.innerText = `${horas} hora(s) ${minutos}minuto(s)`

  e.preventDefault()
})