//Box de inputs
const boxIn = document.querySelector('.box');
const boxUp = document.querySelector('.box_add');

//Botões das box 
const buttonIn = document.querySelector('#in');
const buttonAdd = document.querySelector('#add')
const buttonUp = document.querySelector('#up')

//PopUps
const popIn = document.querySelector('.popIn');
const dontIn = document.querySelector('.dontIn');

//Hidig Boxs
buttonAdd.addEventListener('click', function() {
    boxIn.style.display = 'none';
    buttonAdd.style.display = 'none';
    boxUp.style.display = 'block'
})

//Logic for login

function getUser() {

    //Box fields
    const user = document.getElementById('userIn').value;
    const pass = document.getElementById('passIn').value;

    let users = [
        {user: 'berio@gmail.com', pass: '123456'}
    ];

    for (let i = 0; i < users.length; i++) {

        if(users[i].user === user && users[i].pass === pass) {
            boxIn.style.display = 'none';
            buttonAdd.style.display = 'none'
            popIn.style.display = 'block'
            return;
        }
    }

    boxIn.style.display = 'none';
    buttonAdd.style.display = 'none'
    dontIn.style.display = 'block'
}

buttonIn.addEventListener('click', function() {
    getUser();
})



