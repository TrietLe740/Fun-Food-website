
window.onload = () => {
    AOS.init();
    var offsetY;
    const parallaxs = document.querySelectorAll(".parallax");
    window.addEventListener("scroll", () => {
        offsetY = window.pageYOffset;
        parallaxs.forEach((parallax) => {
            parallax.style.backgroundPositionY = offsetY * -0.3 + "px";
        });
    });

    $('.slides').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: false,
        arrows:true,
        autoplay: true,
        variableWidth: true,
        nextArrow: '<i class="fas fa-chevron-right slick-right-arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left slick-left-arrow"></i>'
      });
};