const navToggle = document.querySelector('.nav-mobile-toggle')
const nav = document.querySelector('.nav')

navToggle.addEventListener('click', function() {
    nav.classList.toggle('show')

    navToggle.classList.toggle('nav-mobile-toggle-close')
    document.body.classList.toggle('lock-scroll')
})

const menuDropdowns = document.querySelectorAll('.nav-link-dropdown')

for (let dropdown of menuDropdowns) {
    dropdown.addEventListener('click', function() {
        const dropdownMenu = this.nextElementSibling
        dropdownMenu.classList.toggle('hide')
        
        dropdown.children[0].classList.toggle('dropdown-icon-close')
    })
}