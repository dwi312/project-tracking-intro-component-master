const buttonMenu = document.querySelector('.button__menu');
const showMenu = document.querySelector('.nav__menu');

buttonMenu.addEventListener('click', ()=> {
    // console.log('buttonMenu')
    showMenu.classList.toggle('show-menu')
    buttonMenu.classList.toggle('show-menu')
    document.querySelector('.icon-menu').classList.toggle('close')
})

const listMenu = document.querySelectorAll('.list__menu');

listMenu.forEach(el => {
    el.addEventListener('click', (e) => {
        // console.log(el.target)
        alert('feature is comming soon...')
        showMenu.classList.remove('show-menu')
        buttonMenu.classList.remove('show-menu')
        document.querySelector('.icon-menu').classList.remove('close')
    })
});