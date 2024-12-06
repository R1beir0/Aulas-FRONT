//1
// Selecionando elementos
let titulo = document.getElementById('titulo');
console.log(titulo);    
let primeiroParagrafo = document.getElementById('p');
console.log(primeiroParagrafo);
let segundoParagrafo = document.getElementById('p2');

//2
// Alterando título
function tituloAlterado(){
    return document.getElementById('titulo').innerHTML="Bem-vindo ao meu site!";
}
//Alterando a cor
segundoParagrafo.style.backgroundColor='yellow';
segundoParagrafo.style.color='blue';


//3 
// lista de compras
//  let listaDeCompras = ["Arroz", "Feijão", "Massa", "Lentilha", "Salsicha", "Presunto"];
// let ul = document.getElementById('listaDeCompras');

// Selecionando os elementos do HTML
var adicionarButton = document.getElementById('adicionarButton');
var itemInput = document.getElementById('itemInput');
var listaDeCompras = document.getElementById('listaDeCompras');

// Função para adicionar um item à lista
adicionarButton.addEventListener('click', function() {
    // Pega o valor do campo de input
    var item = itemInput.value;

    // Verifica se o campo de entrada não está vazio
    if (item.trim() !== '') {
        // Cria um novo elemento <li>
        var li = document.createElement('li');
        li.textContent = item;

        // Adiciona o novo <li> à lista (<ul>)
        listaDeCompras.appendChild(li);

        // Limpa o campo de entrada
        itemInput.value = '';
    } else {
        alert('Por favor, digite um item para adicionar!');
    }
});

// (pesquisei)
//4 
   // Loop para criar 10 listas <ul>
   for (let i = 1; i <= 10; i++) {
    // Cria um elemento <ul> e define seu ID
    var ul = document.createElement('ul');
    ul.id = i;

    // Loop para criar a quantidade de <li> correspondentes ao ID do <ul>
    for (let j = 1; j <= i; j++) {
        // Cria um elemento <li>
        var li = document.createElement('li');
        li.textContent = `Item ${j} da lista ${i}`;

        // Adiciona o <li> à lista <ul>
        ul.appendChild(li);
    }

    // Adiciona o <ul> no corpo da página
    document.body.appendChild(ul);
}


//5
  // Botão 1: Exibe um alerta quando clicado
  document.getElementById('botaoAlerta').addEventListener('click', function() {
    alert('Parabéns, você clicou!');
});

// Botão 2: Altera o texto do parágrafo quando clicado
document.getElementById('botaoAlterarTexto').addEventListener('click', function() {
    document.getElementById('paragrafo').textContent = 'Texto alterado!';
});


//6 TEMAS 
document.getElementById('alternarTema').addEventListener('click', function() {
    document.body.classList.toggle('escuro');
    document.body.classList.toggle('claro');
});


//7
// Selecionando os elementos do HTML//
var addbutton = document.getElementById('adicionarBtn');
var input = document.getElementById('input');
var listar = document.getElementById('dinamica');


addbutton.addEventListener('click', function() {
    var item = input.value;
    if (item.trim() !== '') {
        var li = document.createElement('li');
        li.textContent = item;
        dinamica.appendChild(li);
        input.value = '';
    } else {
        alert('Por favor, digite um item para adicionar!');
    }
});

//8

