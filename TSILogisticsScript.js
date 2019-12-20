// AIzaSyD0by67OIut1O6D-Cqpq47QDDUG6eV-X6M


$(".googleMapPopUp").on('click', function () {

    $.fancybox.open({
        src: 'TISMap.html',
        type: 'iframe',
        opts: {
            afterShow: function (instance, current) {
                console.info('done!');
            }
        }
    });

});


