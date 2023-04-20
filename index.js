// Баннер

let swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})


//how Табы

document.querySelectorAll('.how__link').forEach(function (howTabsBtn) {

  howTabsBtn.addEventListener('click', function (e) {

    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.how__link').forEach(function (btn) {

      btn.classList.remove('how__link--active')
    });

    e.currentTarget.classList.add('how__link--active');

    document.querySelectorAll('.how__content').forEach(function (howContentRem) {
      howContentRem.classList.remove('how__content--active')
    });

    document.querySelectorAll(`[data-target="${path}"]`).forEach(function (howContentAdd) {
    howContentAdd.classList.add('how__content--active');
    });

  });
});

