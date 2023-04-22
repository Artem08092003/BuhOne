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


//accordion faq

new Accordion('.faq__accordion--container', {
  elementClass: 'faq__accordion--content',
  triggerClass: 'faq__accordion--trigger',
  panelClass: 'faq__accordion--panel',
  activeClass: 'faq__accordion--active'
});


//burger menu

const burger = document.querySelector('.header__burger--btn');
const menu = document.querySelector('.header__nav');
const menuLinks = menu.querySelectorAll('.header__nav--item .header__nav--link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('header__burger--line--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('header__stop--scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('header__burger--line--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('header__stop--scroll');

  });
});


//Search button

let searchForm = document.querySelector('.header__form'),
    searchBtnOpen = document.querySelector('.header__search--btn'),
    searchBtn = document.querySelector('.header__form--btn'),
    searchBtnClose = document.querySelector('.header__form--close');

searchBtnOpen.addEventListener('click', function (el) {
  searchForm.classList.add('header__form--active');
  searchBtnOpen.classList.add('header__form--close')
});

searchBtnClose.addEventListener('click', function () {
  searchForm.classList.remove('header__form--active');
  searchBtnOpen.classList.remove('header__form--close')
});
