// verificar se o número guardado na const é **par**

function verifica(numero) {
    if (numero % 2 === 0) {
      return "Par";
    } else {
      return "Ímpar";
    }
  }
  
  console.log(verifica(5));