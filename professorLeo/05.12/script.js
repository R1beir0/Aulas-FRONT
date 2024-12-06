//Primeiro criamos uma variável e armazenamos o elemento dentro dela
const botao = document.getElementById("btn");
const botao2 = document.getElementById("btn2")

//Depois criamos a função que faz o que queremos que o botão execute
function imprimeFrase(){
    alert("click")
}

function TrocaCor(){
    if(botao.style.backgroundColor === "black") {
        botao.style.backgroundColor = "pink"
    } else {
        botao.style.backgroundColor = "black"
    }
}

//Por ultimo adicionamos um veneto que vai executar uma função quando alguma ação ocorrer. O primeiro parâmetro é a ação, o segundo parâmetro é a função que queremos executar.
botao.addEventListener("click", imprimeFrase);
botao2.addEventListener("click",TrocaCor);




