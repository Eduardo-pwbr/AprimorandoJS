
const txtemail = document.getElementById("txtEmail")
const msgFeedback = document.getElementById("newsletterFeedback")

function cadastrarEmail(){
  let email = txtemail.value
  msgFeedback.innerHTML =`O email ${email} rcadastrado sucesso`
}

//email
//txtEmail
//msgFeedback