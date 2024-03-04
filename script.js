function descobrir() {
let peso = parseInt(document.getElementById("teste1").value);
let altura = parseInt(document.getElementById("teste2").value);

let alturaEmMestros = altura / 100;

let contaDoImc = peso / (alturaEmMestros * alturaEmMestros);
contaDoImc = contaDoImc.toFixed(1);
    
let msg;

    if (contaDoImc < 18.5) {
          msg = "Abaixo do peso." +  `  IMC: ${contaDoImc}`;
    } else if (contaDoImc <= 24.90) {
          msg = "Peso normal." + ` IMC: ${contaDoImc}`;
    } else if (contaDoImc <= 29.90) {
          msg = "Sobrepeso." +   `  IMC: ${contaDoImc}`;
    } else if (contaDoImc <= 34.90) {
          msg= "Obesidade Grau I." +  `  IMC: ${contaDoImc}`;
    } else if (contaDoImc <= 39.90) {
          msg = "Obseidade Grau II."  +  ` IMC: ${contaDoImc}`;
    } else {
          msg = "Obseidade Grau III ou Mórbida."  +  ` IMC: ${contaDoImc}`;
    }
 document.getElementById("resultado").innerText = msg;
};
