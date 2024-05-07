//Box inputs

const boxIn = document.querySelector('.box');
const boxUp = document.querySelector('.box_add');

//Buttons Box's

const buttonIn = document.querySelector('#in');
const buttonAdd = document.querySelector('#add')
const buttonUp = document.querySelector('#up')

//Hiding the Box's

buttonAdd.addEventListener('click', function() {
    boxIn.style.display = 'none';
    buttonAdd.style.display = 'none';
    boxUp.style.display = 'block'
})

