let slideIndex = 1;
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}

document.addEventListener('DOMContentLoaded', function () {
  showSlides();
  document.querySelector('.loading-container').style.display = 'none';
  console.log('done');
});

function showSlides(n) {
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
}
