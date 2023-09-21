const userName = document.querySelector('.name'),
    phone = document.querySelector('.phone'),
    email = document.querySelector('.email'),
    select = document.querySelector('.select'),
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




//Кнопка Стать партнером проекта проверяет заполненность полей

acceptBtn.addEventListener('click', requiredHandler)
function requiredHandler() {
    let nameValid = false,
        phoneValid = false,
        emailValid = false,
        formValid;

    if (userName.value === '') {
        userName.style.border = '1px solid red';

    } else {
        userName.style.border = '1px solid #ccc'
        nameValid = true
    }
    if (phone.value === '') {
        phone.style.border = '1px solid red'
    } else {
        phone.style.border = '1px solid #ccc'
        phoneValid = true
    }
    if (email.value === '') {
        email.style.border = '1px solid red'
    } else {
        email.style.border = '1px solid #ccc'
        emailValid = true

    }
    formValid = [nameValid, phoneValid, emailValid];
    const acceptForm = formValid.indexOf(false)
    if (acceptForm === -1) {
        acceptBtn.style.color = 'black '
        acceptBtn.style.backgroundColor = '#5cffa3'
        acceptBtn.textContent = 'Спасибо за регистрацию'
    } else {
        alert('Заполнены не все поля!')
    }
}

