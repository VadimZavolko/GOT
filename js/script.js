const FIELD1 = document.querySelectorAll('.siginUp__field');
const regPassword = /^\w{8,}$/
const regEmail = /^[a-zA-z\.]+@[a-zA-z]+\.[a-zA-z]+$/

FIELD1[1].onblur = function() {
    const HINT = document.querySelector('.siginUp__label-hint')

    if(!regPassword.test(FIELD1[1].value)){
        FIELD1[1].style.borderColor = 'red';
        HINT.style.opacity = '1'
    }

    FIELD1[1].addEventListener('keyup', function() {
        if(!regPassword.test(FIELD1[1].value)){
            FIELD1[1].style.borderColor = 'red';
            HINT.style.opacity = '1'
        } else {
            FIELD1[1].style.borderColor = 'green';
            HINT.style.opacity = '0'
        }
    })
}

FIELD1[0].onblur = function() {
    if(!regEmail.test(FIELD1[0].value)){
        FIELD1[0].style.borderColor = 'red';
    }

    FIELD1[0].addEventListener('keyup', function() {
        if(!regEmail.test(FIELD1[0].value)){
            FIELD1[0].style.borderColor = 'red';
        } else {
            FIELD1[0].style.borderColor = 'green';
        }
    })
}

const FIELD2 = document.querySelectorAll('.registration__field');

const regName = /^[A-Za-zа-яА-Я0-9]+$/
FIELD2[0].onblur = function() {
    const HINT = document.querySelector('.registration__label-hint')
    if(!regName.test(FIELD2[0].value)){
        FIELD2[0].style.borderColor = 'red';
        HINT.style.opacity = '1'
    }

    FIELD2[0].addEventListener('keyup', function() {
        if(!regName.test(FIELD2[0].value)){
            FIELD2[0].style.borderColor = 'red';
            HINT.style.opacity = '1'
        } else {
            FIELD2[0].style.borderColor = 'green';
            HINT.style.opacity = '0'
        }
    })
}

const regHouse = /Select House/
FIELD2[1].onblur = function() {
    if(regHouse.test(FIELD2[1].value)){
        FIELD2[1].style.borderColor = 'red';
    } else {
        FIELD2[1].style.borderColor = 'green';
    }
}

const regText = /^[a-zA-zа-яА-Я0-9()]+$/
FIELD2[2].onblur = function() {
    if(!regText.test(FIELD2[2].value)){
        FIELD2[2].style.borderColor = 'red';
    }
    
    FIELD2[2].addEventListener('keyup', function() {
        if(!regText.test(FIELD2[2].value)){
            FIELD2[2].style.borderColor = 'red';
            HINT.style.opacity = '1'
        } else {
            FIELD2[2].style.borderColor = 'green';
            HINT.style.opacity = '0'
        }
    })
}

const blockMassege = document.querySelector('.registration__blockMessage');
const reg = document.querySelector('.registration');
const sigin = document.querySelector('.siginUp');
const title = document.querySelector('.title');


reg.addEventListener('keyup', function () {
    if(regName.test(FIELD2[0].value) && !regHouse.test(FIELD2[1].value) && regText.test(FIELD2[2].value)) {
        blockMassege.style.opacity = '0'
        title.style.bottom = '-10%'
    } else {
        blockMassege.style.opacity = '1'
        title.style.bottom = '0'
    }
})

sigin.addEventListener('submit', function(e) {
    e.preventDefault()
    if(regPassword.test(FIELD1[1].value) && regEmail.test(FIELD1[0].value)){
        document.querySelector('.registration').style.display = 'block';
        document.querySelector('.siginUp').style.display = 'none'
    }
})

