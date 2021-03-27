let shch = {
    show: function () {
        let bodyMain = document.querySelector('body');
        let burgerMenu = document.querySelector('.burger');
        let burgerClass = burgerMenu.getAttribute('class');
        if (burgerClass === 'burger show') {
            burgerMenu.setAttribute('class', 'burger hide');
            bodyMain.setAttribute('class', 'overno');
        } else {
            burgerMenu.setAttribute('class', 'burger show');
            bodyMain.setAttribute('class', 'overyes');
        }
        console.log(burgerClass);
    },
    burger: function () {
        let visible = document.querySelector('.burger');
        visible.addEventListener('click', shch.show);
    }
}
window.addEventListener('load', shch.burger);
