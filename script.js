const targetWidth = 800;

function onSpecificSize() {
  let width = window.innerWidth;
  let changes = document.querySelectorAll('[class*="desktop"], [class*="mobile"]');

  changes.forEach((el) => {
    console.log(window.innerWidth);
    if (width <= targetWidth) {
      el.className = el.className.replace(/desktop/g, 'mobile');
    } else if (width > targetWidth && el.className.includes('mobile')) {
      el.className = el.className.replace(/mobile/g, 'desktop');
    }
  });
}

window.addEventListener('resize', onSpecificSize);

onSpecificSize();

btnHamburger.addEventListener('click', function () {
  let header = document.querySelector('.header__mobile');
  let fadeEls = document.querySelectorAll('.has-fade');
  let body = document.body;

  if (header.classList.contains('open')) {
    header.classList.remove('open');
    fadeEls.forEach(function (element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
      body.classList.remove('no-scroll');
    });
  } else {
    header.classList.add('open');
    fadeEls.forEach(function (element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
      body.classList.add('no-scroll');
    });
  }
});
