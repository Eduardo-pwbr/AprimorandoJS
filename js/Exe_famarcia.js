const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit", (e) => {
  const medicamento = frm.inMedicamento.value;
  const preco = Number(frm.inPreco.value);

  const result = (preco + preco) - 0.9

  resp1.innerText = `Promoção de ${medicamento}`;
  resp2.innerHTML = `Leve 2 por apenas R${result.toFixed(2)}`;
  e.preventDefault();
});
