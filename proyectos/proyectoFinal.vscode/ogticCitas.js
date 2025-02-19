var backgroundElement = document.querySelector('.jw-background');

    JOUWWEB.templateConfig = {
        header: {
            selector: '.topmenu',
            mobileSelector: '.jw-mobile-menu',
            updatePusher: function (height, state) {

                if (state === 'desktop') {
                    // Expose the header height as a custom property so
                    // we can use this to set the background height in CSS.
                    if (backgroundElement && height) {
                        backgroundElement.setAttribute('style', '--header-height: ' + height + 'px;');
                    }
                } else if (state === 'mobile') {
                    $('.jw-menu-clone .jw-menu').css('margin-top', height);
                }
            },
        },
    };