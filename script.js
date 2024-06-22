document.addEventListener('DOMContentLoaded', function () {
  const carouselSlide = document.querySelector('.carousel-slide');
  const carouselItems = document.querySelectorAll('.carousel-item');

  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');

  let counter = 0;
  const size = carouselItems[0].clientWidth;

  nextBtn.addEventListener('click', () => {
      if (counter >= carouselItems.length - 1) return;
      carouselSlide.style.transition = 'transform 0.4s ease-in-out';
      counter++;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  });

  prevBtn.addEventListener('click', () => {
      if (counter <= 0) return;
      carouselSlide.style.transition = 'transform 0.4s ease-in-out';
      counter--;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  });
});
