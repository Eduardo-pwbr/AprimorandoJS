


setInterval(() => {
  var data = new Date();
  document.write(data.toLocaleTimeString() + "<br>");
}, 1000);

setInterval(() => {
  document.write("Bom dia!");
}, 2000);

setTimeout(() => {
  document.write("Boa tarde!");
}, 5000);

var hora = new Date().getHours();
if (hora < 12) {
document.body.style.backgroundColor = "yellow";
} else if (hora < 2 ) { 
document.body.style.backgroundColor = "orange";
} else {
document.body.style.backgroundColor = "blue";
}