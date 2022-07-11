const calc = (size, material, optional, promocode, result) => {
  const sizeBlock = document.querySelector(size);
  const materialBlock = document.querySelector(material);
  const optionalBlock = document.querySelector(optional);
  const promocodeBlock = document.querySelector(promocode);
  const resultBlock = document.querySelector(result);

  let sum = 0;

  function calc() {
    sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionalBlock.value));

    if (sizeBlock.value == '' || materialBlock.value == '') {
      resultBlock.textContent = `Пожалуйста, выберите размер и материал картины!`
    } else if (promocodeBlock.value === 'IWANTPOPART') {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  }

  sizeBlock.addEventListener('change', calc);
  materialBlock.addEventListener('change', calc);
  optionalBlock.addEventListener('change', calc);
  promocodeBlock.addEventListener('input', calc);
};

export default calc;