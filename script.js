const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const togglePassword = document.getElementById('togglePassword');
const errorMessage = document.getElementById('errorMessage');

if (storageInfo(username, password)) {
    localStorage.setItem('isLoggedIn', 'true'); // ← ЭТО ВАЖНО
    alert('Вы успешно вошли!');
    window.location.href = 'user-page.html'; 
}

if (storageInfo(username, password)) {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'user-page.html';
}

loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); 
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    if (storageInfo(username, password)) {
        alert('Вы успешно вошли!');
        localStorage.setItem('isLoggedIn', 'true'); // <- вот это
        window.location.href = 'user-page.html'; 
    } else {
        errorMessage.textContent = 'Логин или пароль неправильный!';
        errorMessage.style.display = 'block'; 
    }
});

function setDefaultUser() {
    const defaultUsername = '1171031'
    const defaultPassword = '72596'
    if (!localStorage.getItem('username') || !localStorage.getItem('password') ){
        localStorage.setItem('username', defaultUsername)
        localStorage.setItem('password', defaultPassword)
        console.log('')
    }
}
function storageInfo(username, password) {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    return username === storedUsername && password === storedPassword;
}


togglePassword.addEventListener('click', ()=>{
    if (passwordInput.type === 'password'){
        passwordInput.type = 'text'
        togglePassword.textContent = '🙈'
    }else{
        passwordInput.type = 'password'
        togglePassword.textContent = '👁'
    }
})

function check(){
    const usernameValue = usernameInput.value.trim()
    const passwordValue = passwordInput.value.trim()

    submitButton.disabled = !(usernameValue  && passwordValue)
}


setDefaultUser()
usernameInput.addEventListener('input', check)
passwordInput.addEventListener('input', check)

