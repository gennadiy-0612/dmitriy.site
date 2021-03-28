let shch = {
    show: function () {
        let bodyMain = document.querySelector('body');
        let bodyMainClass = bodyMain.getAttribute('class');
        if (bodyMainClass === 'overno') bodyMain.setAttribute('class', 'overyes');
        else bodyMain.setAttribute('class', 'overno');
    },
    extender: function () {
        if (this.getAttribute('class') === 'maindirrection switcher') this.setAttribute('class', 'maindirrection switcher show')
        else this.setAttribute('class', 'maindirrection switcher')
    },
    burger: function () {
        let visible = document.querySelector('.burger');
        visible.addEventListener('click', shch.show);
        let switchers = document.querySelectorAll('.switcher');
        let i = 0;
        for (i; i < switchers.length; i++) {
            document.querySelectorAll('.switcher')[i].addEventListener('click', shch.extender);
        }
    }
}
window.addEventListener('load', shch.burger);
