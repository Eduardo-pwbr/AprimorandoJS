const frm = document.querySelector("form");
const res = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value;
  res.innerText = `O nome digitado é:${nome}`;
  e.preventDefault();
});

