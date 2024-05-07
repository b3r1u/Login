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
            buttonAdd.style.display = 'none'
            dontIn.style.display = 'block'
            return;
        }
        
    } else {

    }
}

//logic for Register

function addUser() {

        const userUp = document.getElementById('userUp').value;
        const passUp = document.getElementById('passUp').value;
    
        if(userUp != '' && passUp != '') {
    
            const existUser = users.find(u => u.user === userUp);
    
            if (existUser) {
    
                alert('Usuário ja existe. Por favor, escolha outro nome de usuário')
            } else {
    
                users.push({ user: userUp, pass: passUp });
                alert('Usuário cadastrado com sucesso!')
                boxUp.style.display = 'none';
                buttonAdd.style.display = 'block';
                boxIn.style.display = 'block';
            }
        } else {
            alert('Preencha todos os campos de Cadastro!')
        }
}

buttonIn.addEventListener('click', function() {
    getUser();
})

buttonUp.addEventListener('click', function() {
    addUser();

})  



