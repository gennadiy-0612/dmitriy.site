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
        activeBack.setAttribute('style', 'left:' + (currentPosition - 10) + 'px;');
        shch.initPoint = currentPosition - 10;
        console.log(shch.initPoint + " " + currentPosition);
    },
    ainmated: function () {
        var o = 1.0; // start opacity
        var d = false; // direction. false = decrease, true = increase
        var s = 0.02; // step
        function anim() {
            if (d == false) {
                o -= s;
                if (o < 0.0) {
                    o = 0.0;
                    d = true;
                }
            } else {
                o += s;
                if (o > 1.0) {
                    o = 1.0;
                    d = false;
                }
            }
            document.querySelector('.listworks__blueball').style.opacity = o;
        }

        setInterval(anim, 1000 / 60); // 60 FPS.
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
        shch.ainmated();
    }
}
window.addEventListener('load', shch.burger);
