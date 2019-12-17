

$(document).ready(function () {
    $('.googleMapPopUp').each(function () {
        var w = $(window).innerWidth();
        var h = $(window).innerHeight();
        var thisPopup = $(this);
        thisPopup.colorbox({
            iframe: true,
            innerWidth: w - 100,
            innerHeight: h - 100,
            opacity: 0.7,
            href: thisPopup.attr('href') + '&ie=UTF8&t=h&output=embed'
        });
    });
});