
var peso;
var altura;
var imc;
var resultado;

function calcularIMC(event) {
    
  event.preventDefault();
  
    peso = document.getElementById("peso").value;
    altura = parseFloat(document.getElementById("altura").value); 

    imc = peso / (altura * altura);

 
    if (imc < 17) {
    
    resultado = document.getElementById("resultado").innerHTML = "Muito abaixo do peso " + imc.toFixed(2);
    resultado = document.getElementById("resultado").style.color = "red";
    }
    else if (imc > 17 && imc <= 18.49) {
    resultado = document.getElementById("resultado").innerHTML = "Abaixo do peso " + imc.toFixed(2);
    resultado = document.getElementById("resultado").style.color = "red";
    }
    
    else if (imc >= 18.5 && imc <= 24.99) {
    resultado = document.getElementById("resultado").innerHTML = "Peso normal " + imc.toFixed(2);
    resultado = document.getElementById("resultado").style.color = "blue";
    }
    
    else if (imc >= 25 && imc <= 29.99) {
    resultado = document.getElementById("resultado").innerHTML = "Acima do peso " + imc.toFixed(2);
     resultado = document.getElementById("resultado").style.color = "red";
    }   
    else if (imc >= 30 && imc <= 34.99) {
    resultado = document.getElementById("resultado").innerHTML = "Obesidade I " + imc.toFixed(2);
    resultado = document.getElementById("resultado").style.color = "red";
    }
    else
    {
    resultado = document.getElementById("resultado").innerHTML = "Obesidade II (severa) " + imc.toFixed(2);
    }
    
 document.getElementById("peso").value = "";
 document.getElementById("altura").value = "";
        
  
    
}