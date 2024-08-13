window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0)
})

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.animation')

elements.forEach((element) => myObserver.observe(element))

let isMenuVisible = false;

const menuContent = document.querySelector('header');
const menuToggle = menuContent.querySelector('.menu-toggle');

// Alterna a visibilidade do menu ao clicar no botão de toggle
menuToggle.addEventListener('click', () => {
    isMenuVisible = !isMenuVisible;
    menuContent.classList.toggle('on', isMenuVisible);
});