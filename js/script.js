//field sigin Up form
const FIELD1 = document.querySelectorAll('.siginUp__field');
const regPassword = /^\w{8,}$/;
const regEmail = /^[a-zA-z0-9]((.[a-zA-z0-9]{1,})?)+@[a-zA-z]+\.[a-zA-z]+$/;
const blockMassege = document.querySelector('.registration__blockMessage');
const reg = document.querySelector('.registration');
const sigin = document.querySelector('.siginUp');
const title = document.querySelector('.title');
//field registration form
const FIELD2 = document.querySelectorAll('.registration__field');
const regName = /^[A-Za-zа-яА-Я0-9]+$/;
const regText = /^[a-zA-zа-яА-Я0-9().,\s]{2,}$/;
const regHouse = /Select House/;
const HINT = document.querySelector('.siginUp__label-hint');
//Password enter
FIELD1[1].addEventListener('keyup', () => {
        if(!regPassword.test(FIELD1[1].value)){
            FIELD1[1].style.borderColor = 'red';
            HINT.style.opacity = '1';
        } else {
            FIELD1[1].style.borderColor = 'green';
            HINT.style.opacity = '0';
        }
})

FIELD1[1].onblur = () => {
    if(!regPassword.test(FIELD1[1].value)){
        FIELD1[1].style.borderColor = 'red';
        HINT.style.opacity = '1';
    }    
}

//Email enter
FIELD1[0].addEventListener('keyup', function() {
    if(!regEmail.test(FIELD1[0].value)){
        FIELD1[0].style.borderColor = 'red';
    } else {
        FIELD1[0].style.borderColor = 'green';
    }
})

FIELD1[0].onblur = () => {
    if(!regEmail.test(FIELD1[0].value)){
        FIELD1[0].style.borderColor = 'red';
    }
}

//Name enter
const HINT2 = document.querySelector('.registration__label-hint')
FIELD2[0].addEventListener('keyup', () => {
    if(!regName.test(FIELD2[0].value)){
        FIELD2[0].style.borderColor = 'red';
        HINT2.style.opacity = '1';
    } else {
        FIELD2[0].style.borderColor = 'green';
        HINT2.style.opacity = '0';
    }
})

FIELD2[0].onblur = () => {
    if(!regName.test(FIELD2[0].value)){
        FIELD2[0].style.borderColor = 'red';
        HINT2.style.opacity = '1';
    }
}

//home selection
FIELD2[1].onblur = () => {
    if(regHouse.test(FIELD2[1].value)){
        FIELD2[1].style.borderColor = 'red';
    } else {
        FIELD2[1].style.borderColor = 'green';
    }
}

//enter a short description about the user
FIELD2[2].addEventListener('keyup', () => {
    if(!regText.test(FIELD2[2].value)){
        FIELD2[2].style.borderColor = 'red';
        HINT.style.opacity = '1';
    } else {
        FIELD2[2].style.borderColor = 'green';
        HINT.style.opacity = '0';
    }
})

FIELD2[2].onblur = () => {
    if(!regText.test(FIELD2[2].value)){
        FIELD2[2].style.borderColor = 'red';
    }
}
//message block
reg.addEventListener('keyup', () => {
    if(regName.test(FIELD2[0].value) && !regHouse.test(FIELD2[1].value) && regText.test(FIELD2[2].value)) {
        blockMassege.style.opacity = '0';
        title.style.bottom = '-10%';
    } else {
        blockMassege.style.opacity = '1';
        title.style.bottom = '0';
    }
})

//submit sigin up form
sigin.addEventListener('submit', (e) => {
    e.preventDefault()
    //validation check
    if(regPassword.test(FIELD1[1].value) && regEmail.test(FIELD1[0].value)){
        document.querySelector('.registration').style.display = 'block';
        document.querySelector('.siginUp').style.display = 'none'; 
        blockMassege.style.opacity = '1';
        FIELD2[0].value = '';
        FIELD2[0].style.borderColor = '#d3bb89';
        FIELD2[2].value = '';
        FIELD2[2].style.borderColor = '#d3bb89'; 
    }
})

//submit registration form
reg.addEventListener('submit', (e) => {
    e.preventDefault()
    //validation check
    if(regName.test(FIELD2[0].value) && !regHouse.test(FIELD2[1].value) && regText.test(FIELD2[2].value)){
        document.querySelector('.registration').style.display = 'none';
        document.querySelector('.siginUp').style.display = 'block';
        title.style.bottom = '0';
        FIELD1[0].value = '';
        FIELD1[0].style.borderColor = '#d3bb89';
        FIELD1[1].value = '';
        FIELD1[1].style.borderColor = '#d3bb89'; 
    }
})
