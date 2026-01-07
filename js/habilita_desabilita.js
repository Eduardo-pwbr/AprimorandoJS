const txtemail = document.getElementById("txtEmail")


function editarEmail()
{
  txtemail.disabled = false
  txtemail.focus()
}


function disabledEmail()
{
  txtemail.disabled = true
}