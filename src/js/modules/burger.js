const burger = (menuSelector, burgerSelector) => {
  const menu = document.querySelector(menuSelector);
  const burgerElement = document.querySelector(burgerSelector);

  menu.style.display = 'none';

  burgerElement.addEventListener('click', () => {
    // Свойство availWidth возвращает ширину экрана пользователя служащую непосредственно для вывода информации 
    // (т.е. ширина без размера таких элементов браузера как панель задач, полоса прокрутки и т.д.).
    if (menu.style.display === 'none' && window.screen.availWidth < 993) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });

  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      menu.style.display = 'none';
    }
  });
};

export default burger;