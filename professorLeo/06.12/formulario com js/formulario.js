//Pega o elemento com o id 'formulário' e o armazena em uma variável
const form = document.getElementById("formulario")
//Pega o elemento com o id 'mensagem' e o armazena em uma variável
const campoTexto = document.getElementById("mensagem")

//Adiciona um evento que ocorre quando clicamos no botão 'submit', ou seja, quando enviamos os dados do formulário
form.addEventListener("submit", function(event){
    event.preventDefault(); //Evita o envio real do formulário
    alert('Formulário enviado')
})

//Evento de foco no campo de texto 
campoTexto.addEventListener('focus', function(){
    //Trocar a cor do campo de texto para amarelo
    campoTexto.style.backgroundColor='yellow'
})
// (blur é quando perde o foco)
campoTexto.addEventListener('blur', function(){
    campoTexto.style.backgroundColor='white'
}) 

//Evento de mudança no campo de texto
campoTexto.addEventListener('change', function(){
console.log('Valor alterado para:' + campoTexto.value)
})

//Evento de rolagem da página
window.addEventListener('scroll', function(){
     console.log('A página foi rolada. Posição de scroll:' + this.window.scrollY)
})