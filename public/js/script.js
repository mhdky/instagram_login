const showLanguage = document.querySelector('.show-language');
const containerLanguage = document.querySelector('.container-language');
const closeLanguage = document.querySelector('.close-language');
showLanguage.addEventListener('click', () => {
    containerLanguage.style.display = 'flex';
    closeLanguage.style.display = 'block'
});
closeLanguage.addEventListener('click', () => {
    containerLanguage.style.display = 'none';
    closeLanguage.style.display = 'none';
});

// password hide and show 
function checkPassword() {
    const inputPassword = document.querySelector('#input-password');
    if (inputPassword.type === 'password') {
        inputPassword.type = 'text';
    } else {
        inputPassword.type = 'password';
    }

    const lineHide = document.querySelector('.line-hide');
    const eyePass = document.querySelector('.eye-pass');
    lineHide.classList.toggle('hidden');
    eyePass.classList.toggle('text-blue-700');
}

function loginShow () {
    const inputUsername = document.querySelector('#input-username');
    const inputPassword = document.querySelector('#input-password');
    const login = document.querySelector('.login');
    if (inputUsername.value.length > 0 && inputPassword.value.length > 0) {
        login.disabled = false;
        login.style.opacity = '1';
    } else {
        login.disabled = true;
        login.style.opacity = 0.3;
    }
}