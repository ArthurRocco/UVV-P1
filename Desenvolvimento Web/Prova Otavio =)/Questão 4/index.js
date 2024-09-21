//NÃO DEU TEMPO DE FAZER HMTL E CSS DNV PERDÃO '-'
function verificarQuadradoPerfeito(numero) {
    if (numero < 0) {
    return false;
    }
    var raiz = Math.sqrt(numero);
    return raiz % 1 === 0;
    }

   // Determinando se o número é quadrado perfeito:

console.log(verificarQuadradoPerfeito(7)); // true (7 * 7 = 49)
console.log(verificarQuadradoPerfeito(4)); // true (4 * 4 = 16)