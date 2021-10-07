$(document).ready(function () {
    if($(window).width() > 992){
        $('.dropdown').hover(function () {
            $(this).children('.dropdown-menu').addClass('show').attr('data-bs-popper', 'none');
            $(this).children('.nav-link').addClass('show');

        },function () {
            $(this).children('.dropdown-menu').removeClass('show');
            $(this).children('.nav-link').removeClass('show');
        })
    }
})

$(window).resize(function () {
    if($(window).width() > 992){
        $('.dropdown').hover(function () {
            $(this).children('.dropdown-menu').addClass('show').attr('data-bs-popper', 'none');
            $(this).children('.nav-link').addClass('show');

        },function () {
            $(this).children('.dropdown-menu').removeClass('show');
            $(this).children('.nav-link').removeClass('show');
        })
    }
})

