const n1 = Number(prompt("Digite primeira nota:"))
const n2 = Number(prompt("Digite segunda nota:"))
const n3 = Number(prompt("Digite terceira nota:"))

function media(){
  return (n1+n2+n3)/3;
}

media()
if(media => 70)
{
  alert("Parabéns Aluno você foi aprovado:"+ media())
}
else
{
  alert("Desculpa Aluno você foi reprovado:"+ media())
}
