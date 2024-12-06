const sayHello = () => console.log('Hello');
// function execute(fn){
//     fn();
// }
// execute(sayHello)

// function olaMundo(){
//     let ola= document.getElementById('ola');

//     ola.innerHTML='Olá mundo';

//    let newDiv = document.createElement('div'); //Cria um elemento

//    newDiv.textContent="Seja bem-vindo";

// newDiv.style.backgroundColor = "aliceblue";
// newDiv.style.border = "1px solid brown";
// newDiv.style.margin = "1px";

// ola.appendChild(newDiv);
// }

// function Lista(){
//     let body = document.querySelector('body');

//     let newDiv = document.createElement('div');

//     let newUl = document.createElement('ul');
//     let newli = document.createElement('li');

//     newUl.appendChild(newli);
//     newUl.appendChild(newli);
//     newUl.appendChild(newli);
//     newUl.appendChild(newli);

//      newUl = document.createElement('ul');
//     for(let i = 1; i <= 4; i++) {
//         const newli = document.createElement('li');
//         newli.textContent = `item ${i}`;
//         newUl.appendChild(newli);
//     }

//     newDiv.appendChild(newUl);

//     body.appendChild(newDiv);}

function createLi() {
  let lis = document.getElementsByTagName('li');
  console.log(lis);
  console.log(lis.length);
  let body = document.querySelector('body');
  let newUl = document.createElement('ul');
  let newDiv = document.createElement('div');

  if (lis.length == 0) {

    newDiv.style.backgroundColor = '123123';

}

let li = document.createElement('li');
newUl.appendChild(li);
console.log(lis.length);
newDiv.appendChild(newUl);
body.appendChild(newDiv);

}