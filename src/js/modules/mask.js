const mask = (selector) => {

  let setCursorPosition = (position, element) => {
    element.focus();

    // setSelectionRange() - устанавливает начальное и конечное положение выделения текста в элементе <input>.
    if (element.setSelectionRange) {
      // При таком использовании курсор встанет в определенную позицию
      element.setSelectionRange(position, position)
    } else if (element.createTextRange) {
      let range = element.createTextRange();

      range.collapse(true);
      range.moveEnd('character', position); // на каком символе будет заканчиваться выделение
      range.moveStart('character', position); // c какоuj символf будет начинатся выделение
      range.select();
    }
  };

  function createMask(event) {
    let matrix = `+7 (___) ___ __ __`;
    let i = 0;
    // Делаем инверсию цифр, получаем все НЕ цифры и заменяем их на пустую строку
    let def = matrix.replace(/\D/g, ''); // статичное условие, работает на основе matrix
    // Обращаемся к контексту и получаем value того элемента на котором проимходит событие
    let val = this.value.replace(/\D/g, ''); // динамичесное условие, на основе того что ввел пользователь

    // Если колличество цифр которое останется у нас в matrix после def(удаления) будет больше или равно 
    // val, то это значение мы должны заменить на стандартное.
    if (def.length >= val.length) {
      val = def;
    }

    // Проходим по всем элементам внутри и передаем callBack который выполнится для каждого элемента(тоесть для каждого символа что есть в matrix)
    // в elem будет подставляться каждый символ из matrix
    this.value = matrix.replace(/./g, function(elem) {
      // Проверям, входит ли символ в определенный диапазон. Диапазон задаем с помощью /[_\d]/
      return /[_\d]/.test(elem) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : elem;
    });

    if (event.type === 'blur') {
      if (this.value.length === 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  let inputs = document.querySelectorAll(selector);

  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
} 

export default mask;