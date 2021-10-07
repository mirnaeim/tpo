$(window).scroll(function () {
    let scrollTop = $(this).scrollTop()
    if(scrollTop> 500){
        $('nav.navbar').addClass('fixed-top')
    }
    else {
        $('nav.navbar').removeClass('fixed-top')
    }
})