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
    mainContainer = document.querySelector('.main-container');

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
    formValid = [nameValid, phoneValid, emailValid, selectValid];
    const acceptForm = formValid.indexOf(false)
    if (acceptForm === -1) {
        acceptBtn.style.color = 'black '
        acceptBtn.style.backgroundColor = '#5cffa3'
        acceptBtn.textContent = 'Спасибо за регистрацию'
    } else {
        alert('Некорректно заполнены поля!')
    }
}

//Ограничиваем ввод букв
phone.addEventListener('keypress', function (event) {


    // Разрешаем: backspace, delete, tab и escape
    if (event.keyCode == 43 || event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
        // Разрешаем: home, end, влево, вправо
        (event.keyCode >= 35 && event.keyCode <= 39)) {
        // Ничего не делаем
        return;
    } else {
        // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
        if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
            event.preventDefault();
        }
        // Остальные исключения
        if (event.keyCode === 101 || event.keyCode === 97 || event.keyCode === 100 || event.keyCode === 102 || event.keyCode === 103 || event.keyCode === 104 || event.keyCode === 39 || event.keyCode === 99 || event.keyCode === 98 || event.keyCode === 46 || event.keyCode === 105) {
            event.preventDefault()
        }
    }
});

