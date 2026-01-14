<<<<<<< HEAD

let app = document.querySelector("#app")

function teste()
{
 
  let liElement = document.createElement('li')
  let textElement = document.createElement('strong')
  let ulElement = document.querySelector('ul')

  let titleElement = document.createTextNode('lista')
  textElement.appendChild(titleElement)
  liElement.append(textElement)

  ulElement.appendChild(liElement);

  

}
teste()
=======
const frm = document.querySelector("form");
const res = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value;
  res.innerText = `O nome digitado é:${nome}`;
  e.preventDefault();
});

>>>>>>> 0a471fb76504a91458a0ec825505c753101137a4
