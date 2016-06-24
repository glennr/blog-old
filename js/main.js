$(document).ready(function() {

    setTimeout(function() {
        $('body.hidden').removeClass('hidden');
    }, 500);

    // typed.js
    $(function() {
        setTimeout(function() {
            $(".title").typed({
                strings: [
                    'Developer Tools',
                    'User Interfaces',
                    'API Design',
                    'Senior Web Developer',
                    'Coder',
                    'Automated Testing',
                    'Product Roadmapping'
                ],
                typeSpeed: 0,
                startDelay: 0,
                backSpeed: 0,
                backDelay: 2000,
                loop: true,
                loopCount: false,
                showCursor: false,
                cursorChar: "|",
                attr: null,
                contentType: 'html',
                callback: function() {},
                preStringTyped: function() {},
                onStringTyped: function() {},
                resetCallback: function() {}
            });
        }, 2750);
    });
});
