const jantar = Number(prompt("Digite o valor do jantar:"))
const garson = jantar * 0.10;
const soma = jantar + garson;
//outro exexmplo
//const soma = jantar * 1.10
//const soma = jantar(jantar * 0.10)

alert(`Taxa do garçon R$: ${garson.toFixed(2)}\nTotal R$: ${soma.toFixed(2)}`)