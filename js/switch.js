 const bairro = prompt("Digite o bairro onde você mora:");
        let taxaEntrega;  
        switch (bairro.toLowerCase()) {
            case "centro":
                taxaEntrega = 5.00; 
                break;
            case "jardim":
                taxaEntrega = 7.00; 
                break;
            case "vila nova":
                taxaEntrega = 8.00;
                break;
            case "santa maria":
                taxaEntrega = 10.00;  
                break;
            case "boa vista":
                taxaEntrega = 12.00;
                break;
            default:
                taxaEntrega = null; 
        }
        alert(taxaEntrega !== null ? `A taxa de entrega para o bairro ${bairro} é R$ ${taxaEntrega.toFixed(2)}` : "Desculpe, não entregamos no seu bairro.");