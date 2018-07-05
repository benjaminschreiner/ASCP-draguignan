$('.carousel.carousel-slider').carousel({fullWidth: true});
// Next slide
$('.carousel').carousel({
    padding: 200    
});
autoplay();   
function autoplay() {
    setTimeout(autoplay, 4500);
    $('.carousel.carousel-slider').carousel('next');
}