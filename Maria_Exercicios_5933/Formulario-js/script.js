// // Aguardar até que o DOM esteja completamente carregado
// document.addEventListener('DOMContentLoaded', function() {
//     // Selecionando o formulário e adicionando o ouvinte de evento
//     document.getElementById('meuForm').addEventListener('submit', function(event) {
//         event.preventDefault();  // Impede o envio do formulário

//         // Obtendo os valores dos campos
//         const nome = document.getElementById('nome').value;
//         const email = document.getElementById('email').value;
//         const telefone = document.getElementById('telefone').value;
//         const idade = document.getElementById('idade').value;
//         const cidade = document.getElementById('cidade').value;

//         // Exibindo os dados na tela
//         const respostaDiv = document.getElementById('resposta');
//         respostaDiv.innerHTML = `
//             <p><strong>Nome:</strong> ${nome}</p>
//             <p><strong>E-mail:</strong> ${email}</p>
//             <p><strong>Telefone:</strong> ${telefone}</p>
//             <p><strong>Idade:</strong> ${idade}</p>
//             <p><strong>Cidade:</strong> ${cidade}</p>
//         `;
//     });
// });

// Aguardar até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Selecionando o botão de envio e adicionando o ouvinte de evento
    document.getElementById('btnEnviar').addEventListener('click', function() {
        // Obtendo os valores dos campos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value; 
        const telefone = document.getElementById('telefone').value;
        const idade = document.getElementById('idade').value;
        const cidade = document.getElementById('cidade').value;

        // Exibindo os dados na tela
        const respostaDiv = document.getElementById('resposta');
        respostaDiv.innerHTML = `
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>E-mail:</strong> ${email}</p>
              <p><strong>Senha:</strong> ${senha}</p>
            <p><strong>Telefone:</strong> ${telefone}</p>
            <p><strong>Idade:</strong> ${idade}</p>
            <p><strong>Cidade:</strong> ${cidade}</p>
        `;
    });
});