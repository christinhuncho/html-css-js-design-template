const hamburgMenu = document.querySelector('.menu')
const menuList = document.querySelector('ul')
const lists = document.querySelectorAll('li')
const links = document.querySelectorAll('.nav-links')

hamburgMenu.addEventListener('click', function() {

    menuList.classList.toggle('nav-active')

})


links.forEach( link => {
    link.addEventListener('click', () => {
        links.forEach( otherLinks => {
            otherLinks.classList.remove('active')
        })
        link.classList.add('active')
    })
})