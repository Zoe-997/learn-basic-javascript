$(document).ready(function() {
    new WOW().init();
});

var header_height = $('header').height();
var menu_mobile = $('.nav-sections');
var overlay_menu = $('.header-tool .nav-toggle:after');

if ($(window).width() < 1200) {
    menu_mobile.css({ top : header_height + "px" }); 
    document.styleSheets[0].addRule('.header-tool .nav-toggle:after', 'top :' + header_height + 'px !important;');
}

// refer:
// https://www.it-swarm-vi.com/vi/javascript/chon-va-thao-tac-cac-phan-tu-gia-css-nhu-truoc-va-sau-khi-su-dung-jquery/971726806/