document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  function goToSlide(index) {
      if (index >= dots.length) {
          index = 0;
      } else if (index < 0) {
          index = dots.length - 1;
      }
      slides.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
      currentSlide = index;
  }

  function nextSlide() {
      goToSlide(currentSlide + 1);
  }

  function prevSlide() {
      goToSlide(currentSlide - 1);
  }

  dots.forEach(dot => {
      dot.addEventListener('click', () => {
          goToSlide(parseInt(dot.getAttribute('data-slide')));
      });
  });

  
  // setInterval(nextSlide, 3000);

  
  goToSlide(0);
});
