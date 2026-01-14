const livros = ["CSS3","HTML5","JavaSript","React","TypeScript","PHP"]
let livros1 = livros.map((livro)=>"Livro"+ "livro")
let livros2 = livros.map((livro, index) =>"Livro"+"index"+" "+"livro")

console.log(livros)
console.log(livros1)
console.log(livros2)

const livrosA = [

  {titulo:"construindo Sites com HTML", autor:"Mauricio Samy Silva"},
  {titulo:"Web Scrapting com Python", autor:"Ryan Mitchell"},
  {titulo:"CSS3", autor:"Maurício Samy Silva"}


];

let livrosX = livrosA.map((livro) => "Livros:" + livro.titulo)
console.log(livrosX)

let livroY = livrosA.map((livro) =>"Autor:" + livro.autor)
console.log(livroY)


const carro = [
  {Fabricante:"Honda", Modelo:"Civic"},
  {Fabricante:"volkswagen", Modelo:"Polo"},
  {Fabricante:"Fiat", Modelo:"Mobi"}
];

let imprimir01 = carro.map((carros)=> "Fabricante:" + carros.Fabricante)
let imprimir02 = carro.map((carros)=> "Modelo:" + carros.Modelo)

console.log(imprimir01)
console.log(imprimir02)



const livrosB = [

  {titulo:"construindo Sites com HTML", autor:"Mauricio Samy Silva"},
  {titulo:"Web Scrapting com Python", autor:"Ryan Mitchell"},
  {titulo:"CSS3", autor:"Maurício Samy Silva"}


];

let imprimir03 = livrosB.filter((livro)=>  livro.titulo === "CSS3")
let imprimir04 = livrosB.filter((livro)=> livro.autor === "Mauricio Samy Silva")
let imprimir05 = livrosB.filter((livro)=> livro.titulo.includes("com"))

console.log(imprimir03)
console.log(imprimir04)
console.log(imprimir05)

const livrosc = [
  {id: 1, titulo:"construindo Sites com HTML"},
  {id: 2, titulo:"Web Scrapting com Python",},
  {id: 3, titulo:"CSS3" }
]

let imprimir06 = livrosc.find((livro)=> livro.id === 3)
console.log(imprimir06)