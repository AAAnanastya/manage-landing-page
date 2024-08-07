const targetWidth = 800;

function onSpecificSize() {
  let width = window.innerWidth;
  let changes = document.querySelectorAll('[class*="desktop"], [class*="mobile"]');

  changes.forEach((el) => {
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

const slider = new A11YSlider(document.querySelector('.slider'), {
  slidesToShow: 1,
  adaptiveHeight: false,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    800: {
      dots: false,
      slidesToShow: 3,
    },
  },
});

function emailIsValid() {
  let input = document.querySelector('input[type="email"]');
  let email = input.value.trim();
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let notification = document.getElementById('error-message');

  if (regex.test(email) == false) {
    input.classList.add('error');
    notification.classList.remove('notification__hidden');
    notification.classList.add('notification__shown');
  } else if (regex.test(email) == true && input.className.includes('error')) {
    input.classList.remove('error');
    notification.classList.remove('notification__shown');
    notification.classList.add('notification__hidden');
  }
}
