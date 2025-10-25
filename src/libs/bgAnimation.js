// service animation
export const serviceBgAnimation = (parent, item) => {
  const bgAnimWidget = document.querySelector(`.${parent}`);
  const activeBg = document.querySelector(`.${parent} .active-bg`);
  let currentElement = document.querySelector(`.${parent} .current`);

  function activeItem(activeBg, element) {
    if (activeBg && element) {
      const rect = element.getBoundingClientRect();
      const widgetRect = bgAnimWidget.getBoundingClientRect();
      activeBg.style.width = `${rect.width}px`;
      activeBg.style.height = `${rect.height}px`;
      activeBg.style.left = `${rect.left - widgetRect.left}px`;
      activeBg.style.top = `${rect.top - widgetRect.top}px`;
    }
  }

  bgAnimWidget.addEventListener(
    'mouseenter',
    (event) => {
      if (event.target.classList.contains(`${item}`)) {
        const target = event.target;
        activeItem(activeBg, target);
        document.querySelectorAll(`.${parent} .${item}`).forEach((item2) => {
          item2.classList.remove('current');
        });
        target.classList.add('current');
      }
    },
    true,
  );

  bgAnimWidget.addEventListener('mouseleave', () => {
    currentElement = document.querySelector(`.${parent} .current`);
    activeItem(activeBg, currentElement);
    document.querySelectorAll(`.${item}`).forEach((item2) => {
      item2.classList.remove('mleave');
    });
  });

  activeItem(activeBg, currentElement);
};
