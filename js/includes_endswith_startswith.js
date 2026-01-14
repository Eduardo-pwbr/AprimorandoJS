let nomes = [
  "Ana Silva",
  "Bruno Souza",
  "Carla Dias",
  "Daniel Oliveira",
  "Mariana Pereira",
];

console.log(nomes.includes("Carla Dias")); // true devolve valor booleano

if (nomes.includes("Daniel oliveira")) {
  console.log("O nome encontratdo.");
} else {
  console.log("Nome não encontrado.");
}


let nome = "Eduardo";
console.log(nome.startsWith("Edu")); // true

console.log(nome.endsWith("ardo")); // true