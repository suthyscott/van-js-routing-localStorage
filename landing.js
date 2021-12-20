
const userInfo = document.getElementById('user-info')
const userNameInput = document.getElementById('username')

userInfo.addEventListener('submit', (e) => {
    e.preventDefault()

    window.localStorage.setItem('username', userNameInput.value)
    window.location.href = '/home.html'
})

