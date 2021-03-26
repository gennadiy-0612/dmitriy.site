let shch = {
    show: function () {
        let burgerMenu = document.querySelector('.burger');
        let burgerClass = burgerMenu.getAttribute('class');
        burgerClass === 'burger show' ? burgerMenu.setAttribute('class', 'burger hide') : burgerMenu.setAttribute('class', 'burger show');
        console.log(burgerClass);
    },
    burger: function () {
        let visible = document.querySelector('.burger');
        visible.addEventListener('click', shch.show);
    }
}
window.addEventListener('load', shch.burger);
