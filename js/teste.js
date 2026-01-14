
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