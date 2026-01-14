var area = document.getElementById('area')

function entrar(){

var nome = prompt("Qual é seu nome?")

if(nome === "" || nome === null)
{
  alert("Seu nome não foi preenchido correto")
  area.innerHTML = "Clique aqui novamente.."
}
else{
  area.innerHTML ="Meu nome é:" + nome + " ";

  //criando elemento dentro do html utilizando javascript

  let botaoSair = document.createElement("button");
  botaoSair.innerHTML = "Sair da Conta";
  botaoSair.onclick = sair;
  area.appendChild(botaoSair);
}



}

function sair(){
  alert("Até mais!");
  area.innerHTML = "Você saiu."
}

function mediaAluno(n1, n2){
  
  var media = (n1 + n2)/2;

  if(media >= 7 ){
    console.log("Aluno aprovado na média" + media)
  }
  else
  {
    console.log("Aluno reprovado na média" + media)
  }
 
}

function informacao(nome, curso){
  var mensagem = "Seja bem vindo"+" " + nome +" " +"ao curso" +" " + curso;

  console.log(mensagem);


}
