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
    listWorksMove: function (e) {
        e.stopPropagation();
        let actLink = document.querySelector('.listworks__blueball');
        let screenLog = document.querySelectorAll('h3')[1];
        actLink.setAttribute('style', 'left:' +`${e.screenX}` +'px;');
        screenLog.innerText = `Screen X/Y: ${e.screenX}, ${e.screenY} Client X/Y: ${e.clientX}, ${e.clientY}`;
        document.querySelector('.listworks');
        let posit = window.screenX;
        console.log(posit)
    },
    burger: function () {
        let visible = document.querySelector('.burger');
        visible.addEventListener('click', shch.show);
        let switchers = document.querySelectorAll('.switcher');
        let i = 0;
        for (i; i < switchers.length; i++) {
            document.querySelectorAll('.switcher')[i].addEventListener('click', shch.extender);
        }
        document.querySelector('.listworks').addEventListener('mousedown', shch.listWorksMove)
    }
}
window.addEventListener('load', shch.burger);
