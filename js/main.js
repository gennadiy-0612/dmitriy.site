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
        if (this.getAttribute('class') === 'logistic__dirrection switcher')
            this.setAttribute('class', 'logistic__dirrection switcher show')
        else
            this.setAttribute('class', 'logistic__dirrection switcher')
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
    switcher: function (classSwitch) {
        let i = 0;
        for (i; i < switchers.length; i++) {
            document.querySelectorAll('.logistic .switcher')[i].addEventListener('click', shch.extender);
        }
    },
    // modalShow: function (modalTag, open, close) {
    //     let modal = document.querySelector(modalTag);
    //     let btn = document.querySelector(open);
    //     let span = document.querySelector(close);
    //     btn.onclick = function () {
    //         modal.style.display = "block";
    //     }
    //     span.onclick = function () {
    //         modal.style.display = "none";
    //     }
    //     window.onclick = function (event) {
    //         if (event.target == modal) {
    //             modal.style.display = "none";
    //         }
    //     }
    // },
    burger: function () {
        let visible = document.querySelector('.burger');
        visible.addEventListener('click', shch.show);
        let switchers = document.querySelectorAll('.switcher');
        let i = 0;
        for (i; i < switchers.length; i++) {
            document.querySelectorAll('.logistic .switcher')[i].addEventListener('click', shch.extender);
        }
        let n = 0;
        shch.balls = document.querySelectorAll('.where .listworks__li');
        shch.ballsLenght = shch.balls.length;
        for (n; n < shch.ballsLenght; n++) {
            document.querySelectorAll('.where .listworks__li')[n].addEventListener('click', shch.activeLight);
        }
        shch.modalVideoSlider = new shch.modalShow('#videoSlider', '#videoButton', '#videoClose');
        shch.modalVideoSlider.startModal();
        shch.modalCallBack = new shch.modalShow('#callBack', ' .callBackButton', '.callBackClose');
        shch.modalCallBack.startModal();
        // shch.modalShow('.video__set', '.video__button', '.close');
        // shch.modalShow('.callBack', '.callBackButton', '.close');
        shch.slideStatic = new shch.slider('.emotions__item');
        document.querySelector('.staticSlidePlus').addEventListener('click', shch.slideStatic.Plus.bind(shch.slideStatic));
        document.querySelector('.staticSlideMinus').addEventListener('click', shch.slideStatic.Minus.bind(shch.slideStatic));
        shch.slideVideo = new shch.slider('.video__item');
        document.querySelector('.videoSlidePlus').addEventListener('click', shch.slideVideo.Plus.bind(shch.slideVideo));
        document.querySelector('.videoSlideMinus').addEventListener('click', shch.slideVideo.Minus.bind(shch.slideVideo));
        // shch.ScrollDetect.firstEffect = new shch.ScrollDetect('.aboutus', 'appear', 1);
        // window.addEventListener('scroll', shch.ScrollDetect.firstEffect.scrolling.bind(shch.ScrollDetect.firstEffect), false);
        // shch.ScrollDetect.firstEffect = new shch.ScrollDetect('.keyprinciples', 'appear', 1);
        // window.addEventListener('scroll', shch.ScrollDetect.firstEffect.scrolling.bind(shch.ScrollDetect.firstEffect), false);
    }
}
window.addEventListener('load', shch.burger);
shch.ScrollDetect = function (whoIsAnimate, whatKindAnimate, startChanges) {
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
            // console.clear();
            console.log(this.elementWork);
        } else {
            this.elementWork.setAttribute('class', this.initClass);
        }
        shch.startChanges = 0;
    }
}
shch.slider = function (selectorSlide) {
    this.Current = 0;
    this.Item = document.querySelectorAll(selectorSlide);
    this.Length = document.querySelectorAll(selectorSlide).length;
    this.Plus = function () {
        console.log(this)
        if (this.Current === (this.Length - 1)) {
            return true;
        } else {
            this.Item[this.Current].setAttribute('id', '')
            this.Current += 1;
            this.Item[this.Current].setAttribute('id', 'show-slide')
        }
        console.log(this.Current)
    };
    this.Minus = function () {
        console.log(this)
        if (this.Current) {
            this.Item[this.Current].setAttribute('id', '')
            this.Current -= 1;
            this.Item[this.Current].setAttribute('id', 'show-slide')
        } else {
            this.Current = 0;
        }
        console.log(this.Current)
    };
};

shch.modalShow = function (modalTag, open, close) {
    let modal = document.querySelector(modalTag);
    let btn = document.querySelector(open);
    let span = document.querySelector(close);
    this.startModal = function () {
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
    }
};

