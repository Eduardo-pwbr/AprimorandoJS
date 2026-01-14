const frm = document.querySelector("form");
const res1 = document.querySelector("#outResp1");
const res2 = document.querySelector("#outResp2");
const res3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {

const veículo = frm.inVeiculo.value;
const preco = Number(frm.inPreco.value);

const entrada = preco * 0.5;
const parcela = (entrada * 0.5) / 12;

res1.innerText =`Promoção:${veículo}`
res2.innerText =`Entrada de R$:${entrada}`
res3.innerHTML = `12x de R$ ${parcela}`

e.preventDefault();
});
