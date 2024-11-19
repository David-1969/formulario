// Função para capturar o envio do formulário e exibir uma resposta
document.getElementById("cadastro-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio normal do formulário

    // Coleta os dados do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const data = document.getElementById("data").value;

    // Exibe uma mensagem de confirmação
    const respostaCadastro = document.getElementById("resposta-cadastro");
    respostaCadastro.innerHTML = `<p>Cadastro realizado com sucesso!</p>
                                  <p>Nome: ${nome}</p>
                                  <p>E-mail: ${email}</p>
                                  <p>Telefone: ${telefone}</p>
                                  <p>Data para Entrevista: ${data}</p>`;
});
