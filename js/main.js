let shch = {
    show: function () {
        let bodyMain = document.querySelector('body');
        let bodyMainClass = bodyMain.getAttribute('class');
        if (bodyMainClass === 'overno')
            bodyMain.setAttribute('class', 'overyes');
        else
            bodyMain.setAttribute('class', 'overno');
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
    burger: function () {
        let visible = document.querySelector('.burger');
        visible.addEventListener('click', shch.show);
        let logisticI = 0;
        let logisticSwitcher = document.querySelectorAll('.maindirrection.switcher');
        let logisticSwitcherCount = logisticSwitcher.length;
        for (logisticI = 0; logisticI < logisticSwitcherCount; logisticI++) {
            shch['changeList' + logisticI] = new shch.RefreshClass('.maindirrection.switcher', 'show', logisticI);
            shch['changeList' + logisticI]['.maindirrection.switcher' + logisticI].addAct();
        }
        let logisticI2 = 0;
        let logisticSwitcher2 = document.querySelectorAll('.logistic__dirrection.switcher');
        let logisticSwitcherCount2 = logisticSwitcher2.length;
        for (logisticI2 = 0; logisticI2 < logisticSwitcherCount2; logisticI2++) {
            shch['changeList' + logisticI2] = new shch.RefreshClass('.logistic__dirrection.switcher', 'show', logisticI2);
            shch['changeList' + logisticI2]['.logistic__dirrection.switcher' + logisticI2].addAct();
        }
        let n = 0;
        shch.balls = document.querySelectorAll('.where .listworks__li');
        shch.ballsLenght = shch.balls.length;
        for (n; n < shch.ballsLenght; n++) {
            document.querySelectorAll('.where .listworks__li')[n].addEventListener('click', shch.activeLight);
        }
        shch.modalVideoSlider = new shch.ModalShow('#videoSlider', '#videoButton', '#videoClose');
        shch.modalVideoSlider.startModal();
        shch.modalCallBack = new shch.ModalShow('#callBack', ' .callBackButton', '.callBackClose');
        shch.modalCallBack.startModal();
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

shch.ModalShow = function (modalTag, open, close) {
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

shch.RefreshClass = function (oldClass, newClass, I) {
    this[oldClass + I] = {
        initState: 0,
        newClass: newClass,
        tagWorker: {},
        addAct: function () {
            if (I) this.tagWorker = document.querySelectorAll(oldClass)[I];
            else {
                this.tagWorker = document.querySelector(oldClass);
            }
            this.oldClass = this.tagWorker.getAttribute('class');
            this.tagWorker.addEventListener('click', this.changeIt.bind(this));
            console.log(this)
        },
        changeIt: function () {
            console.log(this);
            if (this.initState) {
                this.tagWorker.setAttribute('class', this.oldClass);
                this.initState = 0;
            } else {
                this.tagWorker.setAttribute('class', this.oldClass + ' ' + this.newClass);
                this.initState = 1;
            }
        }
    }
};