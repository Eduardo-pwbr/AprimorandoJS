const frm = document.querySelector("form");
const res = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const quilo = Number(frm.inQuilo.value);
  const consumo = Number(frm.inConsumo.value);

  const result = (quilo / 1000) * consumo;
  res.innerText = `Valor a pagar RS ${result.toFixed(2)}`;

  e.preventDefault();
});
