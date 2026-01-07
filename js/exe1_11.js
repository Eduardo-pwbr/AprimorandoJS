const preco = Number(prompt("Informe o preço R$:"));
const nparcela = Number(prompt("Informe o numero de Parcelos:"))
const qtparcela = (preco )/nparcela;
const avista = (preco) - 6;



alert(`Preço R$:${preco.toFixed(2)}\n Á Vista R$${avista.toFixed(2)}\n ou ${nparcela}x R$:${qtparcela.toFixed(2)}`)