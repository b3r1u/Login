//Box de inputs

const boxIn = document.querySelector('.box');
const boxUp = document.querySelector('.box_add');

//Botões das box 

const buttonIn = document.querySelector('#in');
const buttonAdd = document.querySelector('#add')
const buttonUp = document.querySelector('#up')


buttonAdd.addEventListener('click', function() {
    boxIn.style.display = 'none';
    buttonAdd.style.display = 'none';
    boxUp.style.display = 'block'
})