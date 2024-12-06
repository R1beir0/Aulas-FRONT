const pessoa = {};

function mostrar(){
    nome = document.getElementById('nome').value;
    email = document.getElementById('email').value;
    senha = document.getElementById('senha').value;

    console.log(nome);
    console.log(email);
    console.log(senha);

    pessoa.nome = nome;
    pessoa.email = email;
    pessoa.senha = senha;

    document.getElementById('nomeResultado').innerHTML = pessoa.nome;
    document.getElementById('emailResultado').innerHTML = pessoa.email;
    document.getElementById('senhaResultado').innerHTML = pessoa.senha;

}