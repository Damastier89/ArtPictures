const filterElemetns = () => {
  const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        btnLovers = menu.querySelector('.lovers'),
        btnChef = menu.querySelector('.chef'),
        btnGirl = menu.querySelector('.girl'),
        btnGuy = menu.querySelector('.guy'),
        btnGrandmother = menu.querySelector('.grandmother'),
        btnGranddad = menu.querySelector('.granddad');

  const wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGuy = wrapper.querySelectorAll('.guy'),
        no = document.querySelector('.portfolio-no'); 

  function typeFilter(markType) {
    markAll.forEach(mark => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });

    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');

    if (markType) {
      markType.forEach(mark => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      })
    } else {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }
  };      

  function addListener(btn, mark) {
    return btn.addEventListener('click', () => {
      typeFilter(mark);
    })
  };

  addListener(btnGranddad);
  addListener(btnAll, markAll);
  addListener(btnLovers, markLovers);
  addListener(btnChef, markChef);
  addListener(btnGirl, markGirl);
  addListener(btnGuy, markGuy);
  addListener(btnGrandmother);
  addListener(btnGranddad);

  menu.addEventListener('click', (event) => {
    let target = event.target;

    if (target && target.tagName == "LI") {
      items.forEach(btn => btn.classList.remove('active'));
      target.classList.add('active');
    }
  });
};

export default filterElemetns;