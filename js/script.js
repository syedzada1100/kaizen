$(document).ready(function () {
    var syed = $('#shaz');
    syed.owlCarousel({
        items: 1,
        nav: true,
        navText: ["←", "→"],
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
    });

    var syed = $('#syed');
    syed.owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    var syed = $('#shah');
    syed.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
    });

    var syed = $('#zada');
    syed.owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});
