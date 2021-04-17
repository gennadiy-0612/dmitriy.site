"use strict"
let shch = {
    burger: function () {
        shch.locate = {};
        if (window.location.origin === 'https://p.cx.ua') {
            shch.locate = {
                index1: '/pf/dmitriy.site/',
                index2: '/pf/dmitriy.site/index.html',
                vacancy: '/pf/dmitriy.site/vacancy.html'
            };
        }
        if (window.location.origin === 'http://localhost:81') {
            shch.locate = {
                index1: '/',
                index2: '/index.html',
                vacancy: '/vacancy.html'
            };
        }
        shch['.overno'] = new shch.RefreshClass('.overno', 'overyes', '', '.burger');
        shch['.overno']['.overno'].addAct();
        document.querySelector('.nav-folio').addEventListener('click', shch.foloiButton);

        shch['.overno'] = new shch.RefreshClass('.overno', 'overyes', '', '.burger');
        shch['.overno']['.overno'].addAct();
        document.querySelector('.JOIN').addEventListener('click', shch.foloiButton);
        let locAddr = window.location.pathname;
        if ((locAddr === shch.locate.index1) || (locAddr === shch.locate.index2)) {
            let logisticI = 0;
            let logisticSwitcher = document.querySelectorAll('.maindirrection.switcher');
            let logisticSwitcherCount = logisticSwitcher.length;
            for (logisticI; logisticI < logisticSwitcherCount; logisticI++) {
                shch['.maindirrection' + logisticI] = new shch.RefreshClass('.maindirrection', 'show', logisticI, '.s3__p2');
                shch['.maindirrection' + logisticI]['.maindirrection' + logisticI].addAct();
            }
            let logisticI2 = 0;
            let logisticSwitcher2 = document.querySelectorAll('.logistic__dirrection');
            let logisticSwitcherCount2 = logisticSwitcher2.length;
            for (logisticI2; logisticI2 < logisticSwitcherCount2; logisticI2++) {
                shch['.logicInfo' + logisticI2] = new shch.RefreshClass('.logicInfo', 'show', logisticI2, '.logicButton', '.logistic__dirrection');
                shch['.logicInfo' + logisticI2]['.logicInfo' + logisticI2].addAct();
            }
            let ballCollect = document.querySelectorAll('.where .listworks__li');
            let ballCollectMax = ballCollect.length;
            shch.setBall = new shch.PlaceBall('.where .listworks__li')
            for (let ballI = 0; ballI < ballCollectMax; ballI++) {
                ballCollect[ballI].addEventListener('click', shch.setBall.setPlace.bind(shch.setBall), false)
            }

            shch['#vS'] = new shch.RefreshClass('#videoSlider', 'show', '', '#videoButton', '', '#videoClose');
            shch['#vS']['#videoSlider'].addAct();
            shch.getReq(shch.locate.index1 + 'emotions/static/1.json', '.emotions__set', 'div', 'emotions__item backgray', shch.staticSlider, '.emotions__item', 'activeForward', 'activeBack', '.staticSlidePlus', '.staticSlideMinus', 'slideStatic');
            shch.getReq(shch.locate.index1 + 'emotions/video/1.json', '.videoEmotionSet', 'div', 'video__item', shch.staticSlider, '.video__item', 'activeForward', 'activeBack', '.videoSlidePlus', '.videoSlideMinus', 'slideVideo');
            shch.ScrollDetect.firstEffect = new shch.ScrollDetect('.aboutus', 'appear', 1);
            window.addEventListener('scroll', shch.ScrollDetect.firstEffect.scrolling.bind(shch.ScrollDetect.firstEffect), false);
            shch.ScrollDetect.firstEffect = new shch.ScrollDetect('.keyprinciples', 'appear', 1);
            window.addEventListener('scroll', shch.ScrollDetect.firstEffect.scrolling.bind(shch.ScrollDetect.firstEffect), false);
            shch.traceIt = new shch.HeaderTracer('.keyprinciples__trace');
            window.addEventListener('scroll', shch.traceIt.tracingHeader.bind(shch.traceIt));
        }
        if (locAddr === shch.locate.vacancy) {
            shch['.hf1'] = new shch.RefreshClass('.hidden-form-vacancies1', 'show-form-vacancies', '', '.vacancies-form-button1', '', '.hide-form-vacancies1');
            shch['.hf1']['.hidden-form-vacancies1'].addAct();
            shch['.hf2'] = new shch.RefreshClass('.hidden-form-vacancies2', 'show-form-vacancies', '', '.vacancies-form-button2', '', '.hide-form-vacancies2');
            shch['.hf2']['.hidden-form-vacancies2'].addAct();
            shch['.hf3'] = new shch.RefreshClass('.hidden-form-vacancies3', 'show-form-vacancies', '', '.vacancies-form-button3', '', '.hide-form-vacancies3');
            shch['.hf3']['.hidden-form-vacancies3'].addAct();
        }
        shch['.hide-form-index'] = new shch.RefreshClass('.hide-form-index', 'show', '', '.JOIN', '', '.callBackCloser');
        shch['.hide-form-index']['.hide-form-index'].addAct();
        if (window.msCrypto) document.querySelector('body').setAttribute('style', 'cursor:auto;');
    }
}
window.addEventListener('load', shch.burger);

shch.foloiButton = function () {
    if (shch['.overno']['.overno'].initState) {
        shch['.overno']['.overno'].infoTag.setAttribute('class', shch['.overno']['.overno'].infoTagClass)
        shch['.overno']['.overno'].initState = 0;
    }
}

shch.HeaderTracer = function (tracer) {
    this.letIsGo = 1;
    this.traceEl = document.querySelector(tracer);
    this.traceElOldClass = this.traceEl.getAttribute('class');
    this.actClass = 'Tracer';
    this.traceSel = this.traceEl.getAttribute('class');
    this.tracingHeader = function () {
        this.topPap = this.traceEl.parentElement.parentElement.offsetTop;
        this.heightPap = this.traceEl.parentElement.parentElement.offsetHeight;
        this.heightWind = window.innerHeight;
        this.heightHide = this.heightPap - this.heightWind;
        if (Math.floor(window.scrollY) > Math.floor(this.topPap)) {
            if (this.letIsGo) {
                this.traceEl.setAttribute('class', this.actClass + ' ' + this.traceElOldClass);
                this.letIsGo = 0;
            }
            if (Math.floor(window.scrollY) > (Math.floor(this.topPap) + this.heightHide + this.heightWind * .4)) {
                this.traceEl.setAttribute('class', this.traceElOldClass);
                return true;
            }
        } else {
            this.traceEl.setAttribute('class', this.traceElOldClass);
            return true;
        }
    }
}

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

shch.sliderDesk = function (selectorSlide, activeForward, activeBack, setSons) {
    this.length = setSons.length;
    this.num = 0;
    this.one = 0;
    this.two = 1;
    this.three = 2;
    this.Item = document.querySelectorAll(selectorSlide);
    this.Classes = this.Item[0].getAttribute('class');
    this.Plus = function () {
        this.one < this.length ? this.one++ : this.one = 0;
        this.two < this.length ? this.two++ : this.two = 0;
        this.three < this.length ? this.three++ : this.three = 0;
        this.changer(activeForward, this.one, this.two, this.three);
    };
    this.Minus = function () {
        this.one > 0 ? --this.one : this.one = this.length - 1;
        this.two > 0 ? --this.two : this.two = this.length - 1;
        this.three > 0 ? --this.three : this.three = this.length - 1;
        this.changer(activeBack, this.one, this.two, this.three);
    };
    this.changer = function (st, one, two, three) {
        this.Item[0].setAttribute('class', st + this.num + ' ' + this.Classes);
        if (this.length > one) {
            this.Item[0].innerHTML = setSons[one]['contents'];
        } else {
            this.Item[0].innerHTML = setSons[0]['contents'];
            this.one = 0;
        }
        this.Item[1].setAttribute('class', st + this.num + ' ' + this.Classes);
        if (this.length > two) {
            this.Item[1].innerHTML = setSons[two]['contents'];
        } else {
            this.Item[1].innerHTML = setSons[0]['contents'];
            this.two = 0;
        }
        this.Item[2].setAttribute('class', st + this.num + ' ' + this.Classes);
        if (this.length > three) {
            this.Item[2].innerHTML = setSons[three]['contents'];
        } else {
            this.Item[2].innerHTML = setSons[0]['contents'];
            this.three = 0;
        }
        this.num ? this.num = 0 : this.num = 1;
    };
};

shch.includeHTML = function (cb, num) {
    let z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status === 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    elmnt.removeAttribute("w3-include-html");
                    shch.includeHTML(cb);
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
    if (cb) cb();
};

shch.emotionsGall = function (papa, sonTag, son, sonSet) {
    let Papa = document.querySelector(papa);
    for (let i = 0; i < sonSet.length; i++) {
        let newNode = document.createElement(sonTag);
        Papa.appendChild(newNode);
        newNode.setAttribute('class', son);
        newNode.innerHTML = sonSet[i]['contents'];
    }
};

shch.staticSlider = function (setEmotions, papa, sonTag, sonClass, setEm, nextCl, backCl, sliderPlus, sliderMinus, objectSlide) {
    shch.emotionsGall(papa, sonTag, sonClass, setEmotions);
    shch[objectSlide] = new shch.sliderDesk(setEm, nextCl, backCl, setEmotions);
    document.querySelector(sliderPlus).addEventListener('click', shch[objectSlide].Plus.bind(shch[objectSlide]));
    document.querySelector(sliderMinus).addEventListener('click', shch[objectSlide].Minus.bind(shch[objectSlide]));
    shch.staticSwipe = new shch.Swipe(setEm);
    shch.staticSwipe.start();
    shch.staticSwipe.run(shch[objectSlide].Plus.bind(shch[objectSlide]), shch[objectSlide].Minus.bind(shch[objectSlide]));
};

shch.getReq = function (file, pap, sonT, conCl, slider, setEms, nextClass, backClass, sliderPlus, sliderMinus) {
    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                slider(JSON.parse(this.responseText), pap, sonT, conCl, setEms, nextClass, backClass, sliderPlus, sliderMinus)
            }
            if (this.status === 404) {
                console.log("Page not found.");
            }
        }
    }
    http.open("GET", file, true);
    http.send();
}

shch.RefreshClass = function (childT, newClass, I, button, parentTag, closer) {
    this[childT + I] = {
        childT: childT,
        newClass: newClass,
        button: button,
        infoTag: {},
        parentT: {},
        closer: {},
        initState: 0,
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
            if (closer) {
                this.closer = document.querySelector(closer);
                this.closer.addEventListener('click', this.changeIt.bind(this));
            }
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
        for (i; i < all.length; i++) {
            this.element = all[i];
            this.element.addEventListener('touchstart', function (evt) {
                this.xDown = evt.touches[0].clientX;
                this.yDown = evt.touches[0].clientY;
            }.bind(this), {passive: false});
        }
    }

    this.prev = function (back) {
        this.prev = back;
    }
    this.next = function (forward) {
        this.next = forward;
    }

    this.handleTouchMove = function (evt) {
        if (!this.xDown || !this.yDown) {
            return true;
        }

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;

        this.xDiff = this.xDown - xUp;
        this.yDiff = this.yDown - yUp;

        if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) { // Most significant.
            if (this.xDiff > 0) {
                this.prev();
            } else {
                this.next();
            }

            // Reset values.
            this.xDown = null;
            this.yDown = null;
        }
    }

    this.run = function (back, forward) {
        this.prev = back;
        this.next = forward;
        let i = 0;
        let all = document.querySelectorAll(element);
        for (i; i < all.length; i++) {
            this.element = all[i];
            this.element.addEventListener('touchmove', function (evt) {
                this.handleTouchMove(evt);
            }.bind(this), {passive: false});
        }
    }
}

shch.PlaceBall = function (balls) {
    this.initLI = document.querySelector(balls);
    this.initLI.setAttribute('id', 'ballIsPlaced')
    this.setPlace = function (e) {
        if (this.initLI === e.target) return;
        e.target.setAttribute('id', 'ballIsPlaced');
        this.initLI.setAttribute('id', '');
        this.initLI = e.target
    }
}
