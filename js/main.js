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
    initPoint: 0,
    activeLight: function (e) {
        e.stopPropagation();
        let currentPosition = this.offsetLeft;
        let activeBack = document.querySelector('.listworks__blueball');
        shch.currPos = currentPosition - 10;
        shch.distance = shch.currPos - shch.initPoint;
        // activeBack.setAttribute('style', 'left:' + (currentPosition - 10) + 'px;');
        shch.initPoint = currentPosition - 10;
        shch.ainmated();
    },
    ainmated: function () {
        shch.distanceAbs = Math.abs(shch.distance)
        shch.anim = function () {
            shch.distanceAbs = shch.distanceAbs + 1;
            if (!shch.distance) {
                console.log(shch.distanceAbs);
                shch.distanceAbs = 0;
                return false;
            }
            document.querySelector('.listworks__blueball').setAttribute('style', 'left:' + shch.distanceAbs + 'px;');
        }
        setInterval(shch.anim, 1000 / 60); // 60 FPS.}
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
