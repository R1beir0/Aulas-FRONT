//Puxando os elementos
//1
const botao = document.getElementById("meuBotao")
const texto = document.getElementById("texto")
//2
const paragrafo = document.getElementById("btn")
const meuParagrafo = document.getElementById("meuParagrafo")
//3
const botao3 = document.getElementById("btn2")

let pressionada = document.getElementById("pressionada")




//Funções
//Altera o texto quando clica/1 (click)
function alteraTexto(){
    texto.innerText = "O TEXTO FOI ALTERADO!!" 
    texto.style.color = 'blue'
}

//Altera o texto quando o mouse passa por cima do botão/2 (mouseover)
function trocaTexto(){
   if(meuParagrafo.innerText === "Texto original"){
    meuParagrafo.innerText = "Mudou porque você passou o mause no botão"
   }else{
    meuParagrafo.innerText = "Texto original"
   }
}
// função quando eu tiro o cursor do mouse de cima/3 (mouseover e mouseout)
function passeMouse(){
    meuParagrafo.innerText = "Mudou porque você passou o mause no botão"
}
function tireMouse(){
    meuParagrafo.innerText = "Você tirou o mouse de cima"
}

//4 (dblclick)
function CliqueDuasVezes(){
alert("Você clicou duas vezes")
}

//5 (keydown)
// function pressionaTecla(event){
//     console.log('Tecla pressionada:' + event.key);
// }
// document.addEventListener('keydown', pressionaTecla)

function TECLApressionada(event){
    // pressionada.innerText='Tecla pressionada:' + event.key 
    pressionada.textContent += event.key //-> Soma (cria palavras)
}


//Eventos
botao.addEventListener("click", alteraTexto)  //Chama a função quando clico no mouse
paragrafo.addEventListener("mouseover", passeMouse) //Chama a função quiando passo o cursor do mouse por cima (Mesmo evento da função trocaTexto)
paragrafo.addEventListener("mouseout", tireMouse) //Chama a função quando eu tiro o cursor do mouse de cima
botao3.addEventListener("dblclick", CliqueDuasVezes) //Chama a função quando clica duas vezes no botão
document.addEventListener('keydown', TECLApressionada) // Mostra a tecla pressionada na página


//Função anonima
document.getEventListener("keydown", function(event){
        pressionada.textContent='Tecla pressionada:' + event.key 
}
)