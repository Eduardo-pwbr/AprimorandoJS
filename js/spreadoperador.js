

function imprimirNomes(lista) {
let dados = {
  ...lista,
  status: 'ativo',
  inicio: '20/10/2024',
  codigo: 'XYZ123'
}
console.log(dados);
}


//imprimirNomes({nome1: 'Ana', nome2: 'Bruno', nome3: 'Carla'});
imprimirNomes({nome: 'flavio', sobrenome: 'frança', cargo: 'dev'});