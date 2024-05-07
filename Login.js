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
    dontIn.style.display = 'none'
    boxIn.style.display = 'none';
    buttonAdd.style.display = 'none';
    boxUp.style.display = 'block'
})

//Logic for login

let users = [
    {user: 'berio@gmail.com', pass: '123456'}
];

function getUser() {

    const style = window.getComputedStyle(boxIn)

    if(style.display !== 'none') {

        //Box fields
        const user = document.getElementById('userIn').value;
        const pass = document.getElementById('passIn').value;
    
    
        for (let i = 0; i < users.length; i++) {
    
            if(user != '' && pass != ''){
    
                const userExist = users.find(u => u.user === user && u.pass === pass);
                if(userExist) {
                    boxIn.style.display = 'none';
                    buttonAdd.style.display = 'none'
                    popIn.style.display = 'block'
                    return;
                }
            }
            boxIn.style.display = 'none';
            // buttonAdd.style.display = 'none'
            dontIn.style.display = 'block'
            return;
        }
        
    } else {

    }
}

//logic for Register

//Saving at LocalStorage

function saveDataLocalStorage() {
    const usersString = JSON.stringify(users);

    localStorage.setItem('users', usersString);
}

//Function to load the dates of localStorage

function loadDataFromLocalStorage() {
    const usersString = localStorage.getItem('users');

    if(usersString) {
        users = JSON.parse(usersString);
    }
}

//Loading the dates from localStorage when de the page get load
window.addEventListener('load', function() {
    loadDataFromLocalStorage();
})

function addUser() {

        const userUp = document.getElementById('userUp').value;
        const passUp = document.getElementById('passUp').value;
    
        if(userUp != '' && passUp != '') {
    
            const existUser = users.find(u => u.user === userUp);
    
            if (existUser) {

                const userName = document.querySelector('.userName');
                userName.style.display = 'block'

            } else {
    
                users.push({ user: userUp, pass: passUp });

                saveDataLocalStorage();

                boxUp.style.display = 'none';
                buttonAdd.style.display = 'block';
                boxIn.style.display = 'block';
            }

        } else {
            const nullFields = document.querySelector('.nullFields');
            nullFields.style.display = 'block'
        }
}

buttonIn.addEventListener('click', function() {
    getUser();
})

buttonUp.addEventListener('click', function() {
    addUser();

})  



