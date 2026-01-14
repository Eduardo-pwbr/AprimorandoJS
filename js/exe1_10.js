const conta = Number(prompt("Informe conta a ser paga:"))
const qtpessoas = Number(prompt("Informe quantidade de pessoas"))
const total = (conta) / qtpessoas;

alert(`Valor da conta:${conta.toFixed(2)} Numero de Clientes ${qtpessoas} Valor por cliente R$${total.toFixed(2)}`)