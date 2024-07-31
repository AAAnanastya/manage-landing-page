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
