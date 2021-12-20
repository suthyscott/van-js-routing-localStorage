const welcomeBanner = document.getElementById('welcome-banner')
const backToLanding = document.getElementById('back-to-landing')

welcomeBanner.innerText += ' ' + window.localStorage.getItem('username')

backToLanding.addEventListener('click', () => {
    window.localStorage.removeItem('username')
    window.location.href('/landing.js')
})