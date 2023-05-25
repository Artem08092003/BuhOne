// Баннер--------------------------------------------------------------------------------------------

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


//how Табы--------------------------------------------------------------------------------------------

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


//accordion faq--------------------------------------------------------------------------------------------

new Accordion('.faq__accordion--container', {
  elementClass: 'faq__accordion--content',
  triggerClass: 'faq__accordion--trigger',
  panelClass: 'faq__accordion--panel',
  activeClass: 'faq__accordion--active'
});


//burger menu--------------------------------------------------------------------------------------------

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


//Search button--------------------------------------------------------------------------------------------

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


// // Карта яндекса API---------------------------------------------------

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("myMap-1", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [46.353604, 48.057829],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16
    });

    // Создание геообъекта с типом точка (метка).
    var myPlacemark = new ymaps.Placemark([46.353604, 48.057829], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/location.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });

    // удаление обьекты на карте
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('scrollZoom');

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
}
