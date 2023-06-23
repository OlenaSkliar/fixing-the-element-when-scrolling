let el = document.querySelector('.float-element');
function handleWindowScroll(floatElement) {
    window.onscroll = function() {
        if (window.scrollY > floatElement.offsetTop - document.querySelector('header').offsetHeight &&
            window.scrollY < document.querySelector('.float-element__container').offsetHeight -
            document.querySelector('header')*2) {
            if (floatElement.style.position !== 'fixed') {
                floatElement.style.position = 'fixed';
                floatElement.style.top = document.querySelector('header').offsetHeight + 'px';
                floatElement.style.width = document.querySelector('.float-element__container').offsetWidth + 'px';
            }
        } else {
            if (floatElement.style.position === 'fixed') {
                floatElement.style.position = '';
                floatElement.style.top = '';
            }
        }
    };
}

handleWindowScroll(el);