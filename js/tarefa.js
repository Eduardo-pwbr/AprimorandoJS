let listelement = document.querySelector("#app ul");
let inputelement = document.querySelector("#app input");
let buttonelement = document.querySelector("#app button");


/*Salvando no localstorage listando uma lista ou buscando o que tem*/ 
var tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

/*
Esta parte do código serve para recuperar as tarefas salvas no localStorage ao carregar a página. 

var tarefas = [];

*/

/*Criando função de renderizar tarefa*/
function renderTarefas() {
  listelement.innerHTML = '';
  tarefas.map((todo) => {
    let liElement = document.createElement("li");
    let text = document.createTextNode(todo);
    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");
    let pos = tarefas.indexOf(todo);

    liElement.appendChild(text);
    listelement.appendChild(liElement);
    liElement.appendChild(linkElement);
    linkElement.innerHTML = "Excluir";
   

    
    linkElement.setAttribute("onclick", "excluirTarefa(" + pos + ")");

  })
}

/*Chamando a função de renderizar, carregando o conteúdo assim que página é aberta*/
renderTarefas();

/*Criando funcação de nova tarefa*/ 
function novaTarefa() {

  if(inputelement.value ===''){
    alert("Você precisa digitar uma tarefa!");
    return false;
  }
  else{
    tarefas.push(inputelement.value);
    inputelement.value = '';
    listelement.innerHTML = '';
  }
  renderTarefas();
  salvarTarefas();
}

buttonelement.onclick = novaTarefa;


/* criando função de excluir*/
function excluirTarefa(pos) {
  tarefas.splice(pos, 1);
  renderTarefas();
  salvarTarefas();
}

/*função de salvar*/
function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}



