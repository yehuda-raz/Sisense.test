import { containeMaxWidths } from "../_variables"


jQuery(document).ready(($) => {

    checkSize()

    $('.nav-toggle').click((e) => {
        $(e.target).toggleClass('active');
        $('body').toggleClass('nav-active');
    })

    $(window).on('resize', function () {
        checkSize()
    });


})



const checkSize = () => {
    if ($(window).width() < containeMaxWidths.lg) {
        $('.nav-sis').addClass('responsive-nav')
        $('.nav-toggle').css('display', 'block')
    }
    else {
        $('.nav-sis').removeClass('responsive-nav')
        $('body').removeClass('nav-active')
        $('.nav-toggle').removeClass('active')
        $('.nav-toggle').css('display', 'none')

    }
}