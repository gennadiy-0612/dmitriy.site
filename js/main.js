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
        let visible = document.querySelector('.burger');
        visible.addEventListener('click', shch.show);
        let folio = document.querySelector('.nav-folio');
        folio.addEventListener('click', shch.show);
        let locAddr = window.location.pathname;
        if ((locAddr == shch.locate.index1) || (locAddr == shch.locate.index2)) {
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

            shch['.topics'] = new shch.RefreshClass('.topics', 'show', '');
            shch['.topics']['.topics'].addAct();
            let n = 0;
            shch.balls = document.querySelectorAll('.where .listworks__li');
            shch.ballsLenght = shch.balls.length;
            for (n; n < shch.ballsLenght; n++) {
                document.querySelectorAll('.where .listworks__li')[n].addEventListener('click', shch.activeLight);
            }
            shch.modalVideoSlider = new shch.ModalShow('#videoSlider', '#videoButton', '#videoClose');
            shch.modalVideoSlider.startModal();
            shch.slideStatic = new shch.slider('.emotions__item', 'show-slide');
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
    this.Item = document.querySelectorAll(selectorSlide);
    this.Length = document.querySelectorAll(selectorSlide).length;
    this.Plus = function () {
        if (this.Current === (this.Length - 1)) {
            return true;
        } else {
            this.Item[this.Current].setAttribute('id', '')
            this.Current += 1;
            this.Item[this.Current].setAttribute('id', activeSlide)
        }
    };
    this.Minus = function () {
        console.log(this)
        if (this.Current) {
            this.Item[this.Current].setAttribute('id', '')
            this.Current -= 1;
            this.Item[this.Current].setAttribute('id', activeSlide)
        } else {
            this.Current = 0;
        }
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

shch.RefreshClass = function (oldClass, newClass, I) {
    this[oldClass + I] = {
        initState: 0,
        newClass: newClass,
        tagWorker: {},
        addAct: function () {
            console.log(this);
            if (I) this.tagWorker = document.querySelectorAll(oldClass)[I];
            else {
                this.tagWorker = document.querySelector(oldClass);
            }
            this.oldClass = this.tagWorker.getAttribute('class');
            this.tagWorker.addEventListener('click', this.changeIt.bind(this));
        },
        changeIt: function (e) {
            e.stopPropagation()
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

shch.includeHTML = function () {
    let z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    shch.includeHTML();
                    elmnt.setAttribute('class', 'modaljoinToUs');
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
};

class Swipe {
    constructor(element) {
        this.xDown = null;
        this.yDown = null;
        this.element = typeof (element) === 'string' ? document.querySelector(element) : element;

        this.element.addEventListener('touchstart', function (evt) {
            this.xDown = evt.touches[0].clientX;
            this.yDown = evt.touches[0].clientY;
        }.bind(this), false);

    }

    onLeft(callback) {
        if (typeof callback == 'undefined') return;
        this.onLeft = callback;
        return this;
    }

    onRight(callback) {
        if (typeof callback == 'undefined') return;
        this.onRight = callback;
        return this;
    }

    onUp(callback) {
        if (typeof callback == 'undefined') return;
        this.onUp = callback;
        return this;
    }

    onDown(callback) {
        if (typeof callback == 'undefined') return;
        this.onDown = callback;
        return this;
    }

    handleTouchMove(evt) {
        if (!this.xDown || !this.yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        this.xDiff = this.xDown - xUp;
        this.yDiff = this.yDown - yUp;

        if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) { // Most significant.
            if (this.xDiff > 0) {
                console.log(this)
                if (typeof this.onLeft == 'undefined') return;
                this.onLeft();
            } else {
                if (typeof this.onLeft == 'undefined') return;
                console.log(this)
                this.onRight();
            }
        } else {
            if (this.yDiff > 0) {
                this.onUp();
            } else {
                this.onDown();
            }
        }

        // Reset values.
        this.xDown = null;
        this.yDown = null;
    }

    run() {
        this.element.addEventListener('touchmove', function (evt) {
            this.handleTouchMove(evt);
        }.bind(this), false);
    }
}

// Use class to get element by string.
var swiperL = new Swipe('#show-slide');
swiperL.onLeft(function () {console.log(this)});
swiperL.run();
var swiperR = new Swipe('#show-slide');
swiperR.onRight(function () {console.log(this)});
swiperR.run();

// Get the element yourself.
// var swiper = new Swipe(document.getElementById('#show-slide'));
// swiper.onLeft(function() { alert('You swiped left.') });
// swiper.run();

// One-liner.
// (new Swipe('#my-element')).onLeft(function() { alert('You swiped left.') }).run();
// (new Swipe('#my-element')).onRight(function() { alert('You swiped right.') }).run();