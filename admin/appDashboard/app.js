const hamburger = document.querySelector('.vertical-nav--burger')
const container = document.querySelector('.container')



hamburger.addEventListener('click', () => {
    container.classList.toggle('exp')
})