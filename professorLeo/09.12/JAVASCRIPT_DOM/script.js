//Selecionando elementos
const botaoMudar = document.getElementById("botao-mudar")
const descricoes = document.getElementsByClassName("descricao") //Retorna um Array, ou seja, tem indices.
const botaoAdicionar = document.getElementById("botao-adicionar")
const botaoRemover = document.getElementById("botao-remover")
const botaoRemoveClass = document.getElementById("botao-remove-class")


//Mudando o texto do título quando o botão é clicado
botaoMudar.addEventListener('click', function(){
for(let i=0; i<descricoes.length; i++) 
descricoes[i].textContent = 'Parágrafo modificado'
})


//Criando um elemento (P)
const novoParagrafo = document.createElement('p');
novoParagrafo.innerText="Novo parágrafo criado com js!";
document.body.appendChild(novoParagrafo);


//Botão que adiciona um parágrafo
botaoAdicionar.addEventListener('click', function(){
    const novoParagrafo = document.createElement('p')
    novoParagrafo.className = "novoP" 
    novoParagrafo.textContent = 'Novo parágrafo criado'
    document.body.appendChild(novoParagrafo)
})

botaoRemoveClass.addEventListener('click', function(){
const novoP = document.getElementsByClassName('novoP')
novoP[0].classList.remove('novoP')
})


//Removendo um elemento
botaoRemover.addEventListener('click', function(){
descricoes[0].remove();
})

//Evento de tempo
let eventoTempo = setTimeout(function(){
    console.log('Executado após 2 segundos');
}, 2000)

clearTimeout('eventoTempo')

let eventoIntervalo = setInterval(function(){
    console.log('Executado após 2 segundos');
}, 2000)

clearInterval(eventoIntervalo)

