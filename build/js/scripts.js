// Custom Scripts
// Custom scripts

// BURGER

const burger = document.querySelector('.burger')
const aside = document.querySelector('.aside')

burger.addEventListener('click', () => {
    aside.classList.toggle('aside-active')
})

document.addEventListener('click', (event) => {
    if (!aside.contains(event.target) && !burger.contains(event.target)) {
        aside.classList.remove('aside-active');
    }
});
