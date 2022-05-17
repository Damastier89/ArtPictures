const sliders = (slides, direction, prev, next) => {
  let slideIndex = 1;
  let paused = false;

  const items = document.querySelectorAll(slides);

  function showSlides(index) {
    if (index > items.length) {
      slideIndex = 1
    }

    if (index < 1) {
      slideIndex = items.length;
    }

    items.forEach(item => {
      item.classList.add('animated');
      item.style.display = 'none';
    });

    items[slideIndex - 1].style.display = 'block';
  }

  showSlides(slideIndex);

  function changeSlide(index) {
    showSlides(slideIndex += index);
  }

  try {
    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);

    prevBtn.addEventListener('click', () => {
      changeSlide(-1);
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRigth');
    });

    nextBtn.addEventListener('click', () => {
      changeSlide(1);
      items[slideIndex - 1].classList.remove('slideInRigth');
      items[slideIndex - 1].classList.add('slideInLeft');
    });
  } catch(error) {}

  function activatAnimation() {
    if (direction === 'vertical') {
      paused = setInterval(function() {
        changeSlide(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      paused = setInterval(function() {
        changeSlide(1);
        items[slideIndex - 1].classList.remove('slideInLeft');
        items[slideIndex - 1].classList.add('slideInRigth');
      }, 3000);
    }
  }

  activatAnimation();

  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });

  items[0].parentNode.addEventListener('mouseleave', () => {
    activatAnimation();
  });
};

export default sliders;