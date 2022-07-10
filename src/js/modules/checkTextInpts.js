const checkTextInpts = (selector) => {
  const textInputs = document.querySelectorAll(selector);

  textInputs.forEach(input => {
    input.addEventListener('keypress', function(event) {
      // Регулярное выражение для проверки русского языка
      if (event.key.match(/[^а-яё 0-9]/ig)) {
        event.preventDefault();
      }
    });
  });
};

export default checkTextInpts;