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
        if (this.getAttribute('class') === 'maindirrection switcher s3__p4 uperlinedesktop')
            this.setAttribute('class', 'maindirrection switcher s3__p4 uperlinedesktop show')
        else
            this.setAttribute('class', 'maindirrection switcher s3__p4 uperlinedesktop')
    },
    move: 0,
    start: 0,
    count: 0,
    curr: 0,
    distance: 0,
    animBall: document.querySelector('.listworks__blueball'),
    activeLight: function (e) {
        if (shch.move) {
            console.log(shch.move)
            return;
        }
        shch.move = 1;
        shch.curr = this.offsetLeft - 10;
        shch.distance = shch.start - shch.curr;
        shch.distance < 0 ? shch.animated() : shch.animatedLeft();
    },
    animated: function () {
        shch.count = 1;
        shch.anim = function () {
            shch.start += shch.count;
            shch.animBall.setAttribute('style', 'left:' + shch.start + 'px;');
            if (shch.start > shch.curr) {
                clearInterval(shch.go);
                shch.start = shch.curr;
                shch.move = 0;
                console.log(shch.move);
                return false;
            }
        }
        shch.go = setInterval(shch.anim, 100 / 60);
    },
    animatedLeft: function () {
        shch.count = 1;
        shch.anim = function () {
            shch.distance -= shch.count;
            shch.start -= shch.count;
            shch.animBall.setAttribute('style', 'left:' + shch.start + 'px;');
            if (shch.distance < 0) {
                shch.move = 0;
                shch.start = shch.curr;
                shch.count = 0;
                clearInterval(shch.go);
                return false;
            }
        }
        shch.go = setInterval(shch.anim, 100 / 60);
    },
    showIt: function (modal, open, close) {
        var modal = document.querySelector(modal);
        var btn = document.querySelector(open);
        var span = document.querySelector(close);
        btn.onclick = function () {
            modal.style.display = "block";
        }
        span.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    },
    staticSliderCurrent: 0,
    staticSliderItem: document.querySelectorAll('.emotions__item'),
    staticSliderLength: document.querySelectorAll('.emotions__item').length,
    staticSliderPlus: function () {
        if (shch.staticSliderCurrent === (shch.staticSliderLength - 1)) {
            return true;
        } else {
            // shch.staticSliderItem[shch.staticSliderCurrent].setAttribute('style', 'display:none')
            shch.staticSliderItem[shch.staticSliderCurrent].setAttribute('id', 'hide-slide')
            shch.staticSliderCurrent += 1;
            shch.staticSliderItem[shch.staticSliderCurrent].setAttribute('style', 'display:block')
            // shch.staticSliderItem[shch.staticSliderCurrent].setAttribute('id', 'show-slide')
        }
        console.log(shch.staticSliderCurrent)
    },
    staticSliderMinus: function () {
        if (shch.staticSliderCurrent) {
            // shch.staticSliderItem[shch.staticSliderCurrent].setAttribute('style', 'display:none')
            shch.staticSliderItem[shch.staticSliderCurrent].setAttribute('id', 'hide-slide')
            shch.staticSliderCurrent -= 1;
            // shch.staticSliderItem[shch.staticSliderCurrent].setAttribute('style', 'display:block')
            shch.staticSliderItem[shch.staticSliderCurrent].setAttribute('id', 'show-slide')
        } else {
            shch.staticSliderCurrent = 0;
        }
        console.log(shch.staticSliderCurrent)
    },
    slider : {
        Current: 0,
        Item: document.querySelectorAll('.emotions__item'),
        Length: document.querySelectorAll('.emotions__item').length,
        Plus: function () {
            if (shch.slider.Current === (shch.slider.Length - 1)) {
                return true;
            } else {
                shch.slider.Item[shch.slider.Current].setAttribute('style', 'display:none')
                shch.slider.Current += 1;
                shch.slider.Item[shch.slider.Current].setAttribute('style', 'display:block')
            }
            console.log(shch.slider.Current)
        },
        Minus: function () {
            if (shch.Slider.Current) {
                shch.Slider.Item[shch.Slider.Current].setAttribute('style', 'display:none')
                shch.Slider.Current -= 1;
                shch.Slider.Item[shch.Slider.Current].setAttribute('style', 'display:block')
            } else {
                shch.Slider.Current = 0;
            }
            console.log(shch.Slider.Current)
        },
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
        shch.balls = document.querySelectorAll('.where .listworks__li');
        shch.ballsLenght = shch.balls.length;
        for (n; n < shch.ballsLenght; n++) {
            document.querySelectorAll('.where .listworks__li')[n].addEventListener('click', shch.activeLight);
        }
        shch.showIt('.video__set', '.video__button', '.close');
        document.querySelector('.staticSlidePlus').addEventListener('click', shch.staticSliderPlus);
        document.querySelector('.staticSliderMinus').addEventListener('click', shch.staticSliderMinus);
        // ScrollDetect.firstEffect = new ScrollDetect('.aboutus', 'appear', 1);
        // window.addEventListener('scroll', ScrollDetect.firstEffect.scrolling.bind(ScrollDetect.firstEffect), false);
        // ScrollDetect.firstEffect = new ScrollDetect('.keyprinciples', 'appear', 1);
        // window.addEventListener('scroll', ScrollDetect.firstEffect.scrolling.bind(ScrollDetect.firstEffect), false);
    }
}
window.addEventListener('load', shch.burger);

function ScrollDetect(whoIsAnimate, whatKindAnimate, startChanges) {
    this.elementTarget = whoIsAnimate;
    this.animateClass = whatKindAnimate;
    this.windowH = window.innerHeight;
    this.initProps = function () {
        this.elementWork = document.querySelector(this.elementTarget);
        this.initClass = this.elementWork.getAttribute('class');
        this.elPositonY = this.elementWork.offsetTop;
    };
    this.scrolling = function () {
        this.initProps();
        if ((this.elPositonY + 100) > Math.floor(window.scrollY) && Math.floor(window.scrollY) > (this.elPositonY - this.windowH) && startChanges) {
            this.elementWork.setAttribute('class', this.initClass + ' ' + this.animateClass);
            startChanges = 0;
            console.clear();
            console.log(this.elementWork);
        } else {
            this.elementWork.setAttribute('class', this.initClass);
        }
        shch.startChanges = 0;
    }
}

