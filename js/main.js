let shch = {
    move: 0,
    startLeft: 0,
    currLeft: 0,
    distanceLeft: 0,
    startTop: 0,
    currTop: 0,
    distanceTop: 0,
    animBall: document.querySelector('.listworks__blueball'),
    activeLight: function (e) {
        if (shch.move) {
            return;
        }
        shch.move = 1;
        shch.currLeft = this.offsetLeft - 10;
        shch.distanceLeft = shch.startLeft - shch.currLeft;
        shch.currTop = this.offsetTop;
        shch.distanceTop = shch.currTop - shch.startTop;
        shch.distanceLeft < 0 ? shch.animatedRight() : shch.animatedLeft();
    },
    animatedRight: function () {
        shch.anim = function () {
            shch.startLeft += 1;
            shch.animBall.setAttribute('style', 'left:' + shch.startLeft + 'px; top:' + shch.currTop + 'px;');
            if (shch.startLeft > shch.currLeft) {
                clearInterval(shch.go);
                shch.startTop = shch.currTop;
                shch.startLeft = shch.currLeft;
                shch.move = 0;
                return false;
            }
        }
        shch.go = setInterval(shch.anim, 10);
    },
    animatedLeft: function () {
        shch.anim = function () {
            shch.startLeft -= 1;
            shch.animBall.setAttribute('style', 'left:' + shch.startLeft + 'px; top:' + shch.currTop + 'px;');
            shch.distanceLeft -= 1;
            if (shch.distanceLeft < 0) {
                shch.animBall.setAttribute('style', 'left:' + shch.startLeft + 'px; top:' + shch.currTop + 'px;');
                shch.move = 0;
                shch.startTop = shch.currTop;
                shch.startLeft = shch.currLeft;
                clearInterval(shch.go);
                return false;
            }
        }
        shch.go = setInterval(shch.anim, 10);
    },
    burger: function () {
        shch.locate = {};
        if (window.location.origin == 'https://p.cx.ua') {
            shch.locate = {index1: '/pf/dmitriy.site/', index2: '/pf/dmitriy.site/index.html'};
        }
        if (window.location.origin == 'http://localhost:81') {
            shch.locate = {index1: '/', index2: '/index.html'};
        }
        shch['.overno'] = new shch.RefreshClass('.overno', 'overyes', '', '.burger');
        shch['.overno']['.overno'].addAct();
        let folio = document.querySelector('.nav-folio');
        folio.addEventListener('click', shch.show);
        let locAddr = window.location.pathname;
        if ((locAddr == shch.locate.index1) || (locAddr == shch.locate.index2)) {
            let logisticI = 0;
            let logisticSwitcher = document.querySelectorAll('.maindirrection.switcher');
            let logisticSwitcherCount = logisticSwitcher.length;
            for (logisticI = 0; logisticI < logisticSwitcherCount; logisticI++) {
                shch['.maindirrection' + logisticI] = new shch.RefreshClass('.maindirrection', 'show', logisticI, '.s3__p2');
                shch['.maindirrection' + logisticI]['.maindirrection' + logisticI].addAct();
            }
            let logisticI2 = 0;
            let logisticSwitcher2 = document.querySelectorAll('.logistic__dirrection');
            let logisticSwitcherCount2 = logisticSwitcher2.length;
            for (logisticI2 = 0; logisticI2 < logisticSwitcherCount2; logisticI2++) {
                shch['.logicInfo' + logisticI2] = new shch.RefreshClass('.logicInfo', 'show', logisticI2, '.logicButton', '.logistic__dirrection');
                shch['.logicInfo' + logisticI2]['.logicInfo' + logisticI2].addAct();
            }

            let n = 0;
            shch.balls = document.querySelectorAll('.where .listworks__li');
            shch.ballsLenght = shch.balls.length;
            for (n; n < shch.ballsLenght; n++) {
                document.querySelectorAll('.where .listworks__li')[n].addEventListener('click', shch.activeLight);
            }
            shch.modalVideoSlider = new shch.ModalShow('#videoSlider', '#videoButton', '#videoClose');
            shch.modalVideoSlider.startModal();
            shch.slideStatic = new shch.slider('.emotions__item', 'deskTopSlide');
            document.querySelector('.staticSlidePlus').addEventListener('click', shch.slideStatic.Plus.bind(shch.slideStatic));
            document.querySelector('.staticSlideMinus').addEventListener('click', shch.slideStatic.Minus.bind(shch.slideStatic));
            shch.slideVideo = new shch.slider('.video__item', 'show-video-slide');
            document.querySelector('.videoSlidePlus').addEventListener('click', shch.slideVideo.Plus.bind(shch.slideVideo));
            document.querySelector('.videoSlideMinus').addEventListener('click', shch.slideVideo.Minus.bind(shch.slideVideo));
            shch.ScrollDetect.firstEffect = new shch.ScrollDetect('.aboutus', 'appear', 1);
            window.addEventListener('scroll', shch.ScrollDetect.firstEffect.scrolling.bind(shch.ScrollDetect.firstEffect), false);
            shch.ScrollDetect.firstEffect = new shch.ScrollDetect('.keyprinciples', 'appear', 1);
            window.addEventListener('scroll', shch.ScrollDetect.firstEffect.scrolling.bind(shch.ScrollDetect.firstEffect), false);
        }
        shch.modalCallBack = new shch.ModalShow('.hide-form', ' .JOIN', '.callBackCloser');
        shch.modalCallBack.startModal();
        shch.swiper = new shch.Swipe('.emotions__item');
        shch.swiper.start()
        shch.swiper.run();
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
        } else {
            this.elementWork.setAttribute('class', this.initClass);
        }
        shch.startChanges = 0;
    }
}

shch.slider = function (selectorSlide, activeSlide) {
    this.Current = 0;
    this.secondSlide = 1;
    this.thirdSlide = 2;
    this.Item = document.querySelectorAll(selectorSlide);
    this.Length = document.querySelectorAll(selectorSlide).length;
    this.Plus = function () {
        if (this.thirdSlide === (this.Length - 1)) {
            return;
        } else {
            this.Item[this.Current].setAttribute('id', '');
            this.Item[this.secondSlide].setAttribute('id', '');
            this.Item[this.thirdSlide].setAttribute('id', '');
            this.Current += 1;
            this.secondSlide += 1;
            this.thirdSlide += 1;
            this.Item[this.Current].setAttribute('id', activeSlide);
            this.Item[this.secondSlide].setAttribute('id', activeSlide + '1');
            this.Item[this.thirdSlide].setAttribute('id', activeSlide + '2');
        }
        console.log(this)
    };
    this.Minus = function () {
        if (this.Current) {
            this.Item[this.Current].setAttribute('id', '');
            this.Item[this.secondSlide].setAttribute('id', '');
            this.Item[this.thirdSlide].setAttribute('id', '');
            this.Current -= 1;
            this.secondSlide -= 1;
            this.thirdSlide -= 1;
            this.Item[this.Current].setAttribute('id', activeSlide);
            this.Item[this.secondSlide].setAttribute('id', activeSlide + '1');
            this.Item[this.thirdSlide].setAttribute('id', activeSlide + '2');
        } else {
            this.Current = 0;
            return;
        }
        console.log(this.Current)
        console.log(this)
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
            event.stopPropagation();
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
};

shch.RefreshClass = function (childT, newClass, I, button, parentTag) {
    this[childT + I] = {
        initState: 0,
        newClass: newClass,
        childT: childT,
        button: button,
        infoTag: {},
        parentT: {},
        addAct: function () {
            if (I) {
                this.infoTag = document.querySelectorAll(this.childT)[I];
                this.infoTagClass = this.infoTag.getAttribute('class');
                this.button = document.querySelectorAll(this.button)[I];
                if (parentTag) {
                    this.parentT = document.querySelectorAll(parentTag)[I];
                    this.parentTclass = this.parentT.getAttribute('class');
                }
            } else {
                this.infoTag = document.querySelector(this.childT);
                this.infoTagClass = this.infoTag.getAttribute('class');
                this.button = document.querySelector(this.button);
                if (parentTag) {
                    this.parentT = document.querySelector(parentTag);
                    this.parentTclass = this.parentT.getAttribute('class')
                }
            }
            this.button.addEventListener('click', this.changeIt.bind(this));
        },
        changeIt: function (e) {
            e.stopPropagation()
            if (this.initState) {
                this.infoTag.setAttribute('class', this.infoTagClass);
                if (parentTag) this.parentT.setAttribute('class', this.parentTclass);
                this.initState = 0;
            } else {
                this.infoTag.setAttribute('class', this.infoTagClass + ' ' + this.newClass);
                if (parentTag) this.parentT.setAttribute('class', this.parentTclass + ' ' + this.newClass);
                this.initState = 1;
            }
        }
    }
};

shch.Swipe = function (element) {
    this.start = function () {
        this.xDown = null;
        this.yDown = null;
        let i = 0;
        let all = document.querySelectorAll(element);
        for (i = 0; i < all.length; i++) {
            this.element = all[i];
            this.element.addEventListener('touchstart', function (evt) {
                this.xDown = evt.touches[0].clientX;
                this.yDown = evt.touches[0].clientY;
            }.bind(this));
        }
    }

    this.handleTouchMove = function (evt) {
        if (!this.xDown || !this.yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        this.xDiff = this.xDown - xUp;
        this.yDiff = this.yDown - yUp;

        if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) { // Most significant.
            if (this.xDiff > 0) {
                shch.slideStatic.Plus()
            } else {
                shch.slideStatic.Minus()
            }

            // Reset values.
            this.xDown = null;
            this.yDown = null;
        }
    }
    this.run = function () {
        let i = 0;
        let all = document.querySelectorAll(element);
        for (i = 0; i < all.length; i++) {
            this.element = all[i];
            this.element.addEventListener('touchmove', function (evt) {
                this.handleTouchMove(evt);
            }.bind(this),{passive:true});
        }
    }
}