const hamburgerMenu = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.nav__links--mobile')

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('opened')
    mobileMenu.classList.toggle('closed')
    hamburgerMenu.classList.toggle('active')
})
