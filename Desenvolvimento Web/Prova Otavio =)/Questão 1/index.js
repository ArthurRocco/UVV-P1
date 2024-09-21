function isPrimo(numero) {
    // Verifica se o número é menor que 2, que não pode ser primo
    if (numero < 2) {
      return false;
    }
  
    // Verifica se o número é divisível por algum valor entre 2 e a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        // Se o número for divisível, não é primo
        return false;
      }
    }
  
    // Se não foi encontrado nenhum divisor, o número é primo
    return true;
  }
  
  function verificarPrimo() {
    const min = 1;
    const max = 1000;
    
    // Gera um número aleatório entre min e max
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;
    
    // Verifica se o número gerado é primo
    const resultado = isPrimo(numero) ? "é primo" : "não é primo";
    
    // Exibe o resultado na div com o ID "result"
    document.getElementById("result").textContent = `O número sorteado (${numero}) ${resultado}.`;
  }
  