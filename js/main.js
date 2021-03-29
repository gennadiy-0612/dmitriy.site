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
    activeLight: function (e) {
        e.stopPropagation();
        let currentPosition = this.offsetLeft;
        let activeBack = document.querySelector('.listworks__blueball');
        activeBack.setAttribute('style', 'left:' + currentPosition + 'px;');
        document.querySelectorAll('.listworks__li')[3].offsetLeft
        let posit = window.screenX;
        console.log(posit);
    },
    burger: function () {
        let visible = document.querySelector('.burger');
        visible.addEventListener('click', shch.show);
        let switchers = document.querySelectorAll('.switcher');
        let i = 0;
        for (i; i < switchers.length; i++) {
            document.querySelectorAll('.switcher')[i].addEventListener('click', shch.extender);
        }
        let n = 0;
        for (n; n < switchers.length; n++) {
            document.querySelectorAll('.listworks__li')[n].addEventListener('click', shch.activeLight);
        }
    }
}
window.addEventListener('load', shch.burger);
