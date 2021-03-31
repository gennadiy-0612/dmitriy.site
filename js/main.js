let shch = {
    show: function () {
        let bodyMain = document.querySelector('body');
        let bodyMainClass = bodyMain.getAttribute('class');
        if (bodyMainClass === 'overno')
            bodyMain.setAttribute('class', 'overyes');
        else
            bodyMain.setAttribute('class', 'overno');
    },
    extender: function () {
        if (this.getAttribute('class') === 'maindirrection switcher')
            this.setAttribute('class', 'maindirrection switcher show')
        else
            this.setAttribute('class', 'maindirrection switcher')
    },
    initPoint: 0,
    count: 0,
    curr: 0,
    animBall: document.querySelector('.listworks__blueball'),
    activeLight: function (e) {
        e.stopPropagation();
        let activeBack = document.querySelector('.listworks__blueball');
        shch.curr = this.offsetLeft - 10;
        shch.distance = shch.initPoint - shch.curr;
        if (shch.distance < 0) shch.animated();
        if (shch.distance > 0) shch.animatedLeft();
    },
    animated: function () {
        shch.count = 1;
        shch.anim = function () {
            shch.initPoint += shch.count;
            shch.animBall.setAttribute('style', 'left:' + shch.initPoint + 'px;');
            if (shch.initPoint === shch.curr) {
                shch.initPoint = shch.curr;
                clearInterval(shch.go);
                return false;
            }
        }
        if (shch.distance > 0) shch.count = 1;
        shch.go = setInterval(shch.anim, 1000 / 60);// 60 FPS.}
    },
    animatedLeft: function () {
        shch.anim = function () {
            shch.count = 1;
            shch.distance -= shch.count;
            console.log(shch.initPoint + ' ' + shch.distance + ' ' + shch.curr + ' ' + shch.count);
            shch.animBall.setAttribute('style', 'left:' + shch.distance + 'px;');
            if (shch.distance < 0) {
                shch.initPoint = shch.curr;
                clearInterval(shch.go);
                return false;
            }
        }
        if (shch.distance > 0) shch.count = 1;
        shch.go = setInterval(shch.anim, 1000 / 60);// 60 FPS.}
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