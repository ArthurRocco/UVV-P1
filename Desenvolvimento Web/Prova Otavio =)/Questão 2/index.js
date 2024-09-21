// Função para verificar se a senha atende aos critérios
function verificarSenha() {
    const senha = document.getElementById("password").value;
  
    // Verifica se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
      document.getElementById("result").textContent = "A senha deve ter pelo menos 8 caracteres.";
      return;
    }
  
    // Verifica se a senha contém pelo menos uma letra maiúscula, uma letra minúscula e um número
    const regexMaiuscula = /[A-Z]/;
    const regexMinuscula = /[a-z]/;
    const regexNumero = /[0-9]/;
  
    if (!regexMaiuscula.test(senha) || !regexMinuscula.test(senha) || !regexNumero.test(senha)) {
      document.getElementById("result").textContent = "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número.";
      return;
    }
  
    // Se a senha atender a todos os critérios, é considerada válida
    document.getElementById("result").textContent = "Senha válida!";
  }
  