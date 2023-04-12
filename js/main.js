$(function () {
    $(".slider__inner").slick({

        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        useCSS: false,
        useTransform: false,
      
        // the magic
        responsive: [{
      
            breakpoint: 300,
            settings: "unslick" // destroys slick
      
        }]
    });
    $('input, select').styler();
});