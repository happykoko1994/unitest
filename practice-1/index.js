const userName = document.querySelector('.name'),
    phone = document.querySelector('.phone'),
    email = document.getElementById('email'),
    select = document.getElementById('select'),
    options = document.querySelector('.options'),
    errorSlot = document.querySelector('.error'),
    startBtn = document.querySelector('.start-button'),
    acceptBtn = document.querySelector('.button-block__accept'),
    cancelBtn = document.querySelector('.button-block__cancel'),
    modal = document.querySelector('.container'),
    mainContainer = document.querySelector('.main-container'),
    avatar = document.querySelector('.header-foto__avatar__img'),
    cross = document.querySelector('.header-foto__avatar__cross'),
    logo = document.querySelector('.logo');


//Модальное окно   

startBtn.addEventListener('click', () => {
    modal.style.display = 'block'
    mainContainer.style.backgroundColor = '#ccc'

})
cancelBtn.addEventListener('click', (e) => {
    modal.style.display = 'none'
    mainContainer.style.backgroundColor = '#fff'
})
mainContainer.addEventListener('click', (e) => {
    if (e.target.classList.value === 'main-container') {
        modal.style.display = 'none'
        mainContainer.style.backgroundColor = '#fff'
    }
})

//Всплывающее меню select

select.addEventListener('click', (e) => {
    options.classList.toggle('active')
    options.addEventListener('click', (e) => {
        select.textContent = e.target.textContent
        options.classList.remove('active')
    })
}
)

modal.addEventListener('click', (e) => {
    if (e.target.classList.value !== 'header-main__block__input select required' && e.target.classList.value !== 'options' && e.target.classList.value !== 'options__option') {
        options.classList.remove('active')
    }
})

//Кнопка Стать партнером проекта проверяет заполненность полей

acceptBtn.addEventListener('click', requiredHandler)
function requiredHandler() {
    let nameValid = false,
        phoneValid = false,
        emailValid = false,
        selectValid = false,
        avatarValid = false,
        formValid;
    //Проверки нейма-----
    try {
        if (userName.value === '') {
            userName.style.border = '1px solid red';
            nameValid = false
            throw new Error()
        } else {
            userName.style.border = '1px solid #ccc'
            nameValid = true
        }
    } catch (err) {
        errorSlot.innerHTML = `<red> не может быть пустым</red>`
        return
    }

    try {
        if (userName.value.length < 3) {
            userName.style.border = '1px solid red';
            nameValid = false
            throw new Error()
        } else {
            errorSlot.innerHTML = ""
            userName.style.border = '1px solid #ccc'
            nameValid = true
        }
    } catch (err) {
        errorSlot.innerHTML = `<red> меньше 3 символов</red>`
        return
    }
    //----------------------

    //Проверки телефона-----
    if (phone.value === '') {
        phone.style.border = '1px solid red'
        phoneValid = false
    } else {
        phone.style.border = '1px solid #ccc'
        phoneValid = true
    }
    if (phone.value.length < 3) {
        phone.style.border = '1px solid red'
        phoneValid = false

    } else {
        phone.style.border = '1px solid #ccc'
        phoneValid = true
    }
    //-----------------------

    //Проверки емайла---
    if (email.value === '') {
        email.style.border = '1px solid red'
        emailValid = false
    } else {
        email.style.border = '1px solid #ccc'
        emailValid = true
    }
    if (email.value.length < 3) {
        email.style.border = '1px solid red'
        emailValid = false
    } else {
        email.style.border = '1px solid #ccc'
        emailValid = true
    }
    if (email.value.indexOf('@') === -1) {
        email.style.border = '1px solid red'
        emailValid = false
    } else {
        email.style.border = '1px solid #ccc'
        emailValid = true
    }
    //------------------

    if (select.textContent === '') {
        select.style.border = '1px solid red'
    } else {
        select.style.border = '1px solid #ccc'
        selectValid = true
    }
    if (avatar.firstChild.getAttribute("src") === './images/ellipse.png') {
        logo.style.color = 'red'
        avatar.style.border = '1px solid red'
        avatarValid = false
    } else {
        logo.style.color = '#6A6E72'
        avatar.style.border = 'none'
        avatarValid = true;
        console.log('work');

    }

    formValid = [nameValid, phoneValid, emailValid, selectValid, avatarValid];
    const acceptForm = formValid.indexOf(false)
    if (acceptForm === -1) {
        acceptBtn.style.color = 'black '
        acceptBtn.style.backgroundColor = '#5cffa3'
        acceptBtn.textContent = 'Спасибо за регистрацию'
    } else {
        alert('Некорректно заполнены поля!')
    }
}

// Регулярка для телефона
phone.addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : "");
});

//Аватарка

function download(input) {
    let file = input.files[0];
    let reader = new FileReader;
    reader.readAsDataURL(file);

    reader.onload = function () {
        avatar.firstChild.src = reader.result
    }
}
cross.addEventListener('click', reset)
function reset() {
    let reset = './images/ellipse.png'

    avatar.firstChild.src = reset

}

console.log(avatar.firstChild.getAttribute("src"));
