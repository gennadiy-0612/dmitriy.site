let shch = {
    show: function () {
        let bodyMain = document.querySelector('body');
        let bodyMainClass = bodyMain.getAttribute('class');
        if (bodyMainClass === 'overno') {
            bodyMain.setAttribute('class', 'overyes');
        } else {
            bodyMain.setAttribute('class', 'overno');
        }
    },
    burger: function () {
        let visible = document.querySelector('.burger');
        visible.addEventListener('click', shch.show);
    }
}
window.addEventListener('load', shch.burger);
