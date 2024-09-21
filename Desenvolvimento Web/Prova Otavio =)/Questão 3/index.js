//NÃO DEU TEMPO DE FAZER HMTL E CSS PERDÃO '-'
function calcularFatorial(numero) {

    // Verifica se o número é = 0 ou 1
    if (numero === 0 || numero === 1) {
        return 1; 
    } else {
        let fatorial = 1; // Começa com a variável do processo de fatorar como 1

        // Itera de 2 até o número informado
        for (let i = 2; i <= numero; i++) {
            fatorial *= i; // Multiplica o numero autal fatorial pelo valor de "i"
        }

        return fatorial; // Retorna o resultado do fatorial
    }
}

//EXEMPLO: Calcular os fatoriais dos números de 1 a 5
for (let i = 1; i <= 5; i++) {
    console.log(`O fatorial de ${i} é: ${calcularFatorial(i)}`);
}
