$('.carousel.carousel-slider').carousel({fullWidth: true});
// Next slide
$('.carousel').carousel({
    padding: 200    
});
autoplay();   
function autoplay() {
    $('.carousel.carousel-slider').carousel('next');
    setTimeout(autoplay, 4500);
}