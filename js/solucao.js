

function acao(){
 
  const contrato = document.querySelector("#contrato")
  const btn = document.querySelector('form input[type="submit"]')
  let checked = contrato.checked

  if(checked)
  {
    btn.disabled = false
  }
  else
  {
    btn.disabled = true
  }
  

}