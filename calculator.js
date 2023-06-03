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



// калькулятор для Расчет стоимость установки наружной рекламы (для видео рекламы)-----------------------------------------------------------------------------------------------------------------------
const locationSelect = document.getElementById("calculator__location");
const quantityInput = document.getElementById("calculator__quantity");
const seasonSelect = document.getElementById("calculator__season");
const resultOutput = document.getElementById("calculator__result");
const btnBook = document.getElementById("calculator__btn--book");

const locationPrices = {
  "Пл.Вокзальная, 13 (на билборде с размером 3*6 м)": 20000,
  "Ул. Савушкина, 5 (на билборде с размером 3*6 м)": 15000,
  "Ул. Н.Островского, 33 (на билборде с размером 3*6 м)": 10000,
  "Ул. Максима Горького 39/4 (на билборде с размером 3*5 м)": 15000,
  "Ул. Набережная 1 мая, 4 (на билборде с размером 3*6 м)": 25000,
  "Ул. Боевая, 29 (на здании с размером 5*12 м)": 35000,
  "Ул. Савушкина, Остановка Селенские Исады (на остановки с размером 3*1.5 м)": 4000,
};

function calculateCost(event) {
  event.preventDefault();
  const locationPrice = locationPrices[locationSelect.value];
  const quantity = parseInt(quantityInput.value);
  const season = seasonSelect.value;
  const lighting = document.getElementById("calculator__lighting").checked;
  const insurance = document.getElementById("calculator__insurance").checked;

  let cost = locationPrice * quantity;
  if (season === "Январь") {
    cost += cost * 0.5;
  } else if (season === "Февраль") {
    cost += cost * 0;
  } else if (season === "Март") {
    cost += cost * 0.2;
  } else if (season === "Апрель") {
    cost += cost * 0.4;
  } else if (season === "Май") {
    cost += cost * 0.7;
  } else if (season === "Июнь") {
    cost += cost * 0.6;
  } else if (season === "Июль") {
    cost += cost * 0.5;
  } else if (season === "Август") {
    cost += cost * 0.3;
  } else if (season === "Сентябрь") {
    cost += cost * 0.4;
  } else if (season === "Октябрь") {
    cost += cost * 0.2;
  } else if (season === "Ноябрь") {
    cost += cost * 0.1;
  } else if (season === "Декабрь") {
    cost += cost * 0.4;
  }

  if (lighting) {
    cost += cost * 0.1;
  }

  if (insurance) {
    cost += cost * 0.05;
  }

  resultOutput.textContent = `Стоимость установки наружной рекламы ${locationSelect.value} для видео рекламы: ${cost} рублей`;

  document.querySelector('#calculator__result--input').value = `На ${locationSelect.value} на сумму: ${cost} рублей.
  Количество типов рекламы в одном баннере: ${quantityInput.value}.
  Сезонность: ${seasonSelect.value}.
  Дополнительные освещение: ${lighting}.
  Страховка: ${insurance}`;

  btnBook.textContent = `Забронировать`
  resetBtn.textContent = `Сбросить`
}

document.querySelector("#calculator__form").addEventListener("submit", calculateCost);

// функций Сброса
const resetBtn = document.getElementById("calculator__btn--reset");

resetBtn.addEventListener("click", function() {
  locationSelect.value = "";
  quantityInput.value = "";
  seasonSelect.value = "";
  document.getElementById("calculator__lighting").checked = false;
  document.getElementById("calculator__insurance").checked = false;
  resultOutput.textContent = "";
  document.querySelector('#calculator__result--input').value = "";
  btnBook.textContent = "";
  resetBtn.textContent = "";
});



// калькулятор для Расчет стоимость установки наружной рекламы (для баннерной рекламы)-----------------------------------------------------------------------------------------------------------------------
const locationBannerSelect = document.getElementById("calculator__location--banner");
const quantityBannerInput = document.getElementById("calculator__quantity--banner");
const seasonBannerSelect = document.getElementById("calculator__season--banner");
const resultBannerOutput = document.getElementById("calculator__result--banner");
const btnBannerBook = document.getElementById("calculator__btn--book--banner");

const locationBannerPrices = {
  "ул. Академика Королева, 51 (на билборде с размером 3*6 м)": 9000,
  "Ул. Яблочкова, 2д (на билборде с размером 3*6 м)": 7000,
  "ул. Жилая, 16 (на билборде с размером 3*6 м)": 6000,
  "ул. Латышева, 7Д (на билборде с размером 3*5 м)": 5000,
  "ул. Бакинская, 121 (на билборде с размером 6*12 м)": 12000,
  "ул. Адмиралтейская_Свердлова, 18 (на здании с размером 5*10 м)": 10000,
  "Ул. Адмиралтейская, Остановка Сквер Ульяновых (на остановки с размером 3*1.5 м)": 3000,
};

function calculateBannerCost(event) {
  event.preventDefault();
  const locationBannerPrice = locationBannerPrices[locationBannerSelect.value];
  const quantityBanner = parseInt(quantityBannerInput.value);
  const seasonBanner = seasonBannerSelect.value;
  const lightingBanner = document.getElementById("calculator__lighting--banner").checked;
  const insuranceBanner = document.getElementById("calculator__insurance--banner").checked;

  let costBanner = locationBannerPrice * quantityBanner;
  if (seasonBanner === "Январь") {
    costBanner += costBanner * 0.5;
  } else if (seasonBanner === "Февраль") {
    costBanner += costBanner * 0;
  } else if (seasonBanner === "Март") {
    costBanner += costBanner * 0.2;
  } else if (seasonBanner === "Апрель") {
    costBanner += costBanner * 0.4;
  } else if (seasonBanner === "Май") {
    costBanner += costBanner * 0.7;
  } else if (seasonBanner === "Июнь") {
    costBanner += costBanner * 0.6;
  } else if (seasonBanner === "Июль") {
    costBanner += costBanner * 0.5;
  } else if (seasonBanner === "Август") {
    costBanner += costBanner * 0.3;
  } else if (seasonBanner === "Сентябрь") {
    costBanner += costBanner * 0.4;
  } else if (seasonBanner === "Октябрь") {
    costBanner += costBanner * 0.2;
  } else if (seasonBanner === "Ноябрь") {
    costBanner += costBanner * 0.1;
  } else if (seasonBanner === "Декабрь") {
    costBanner += costBanner * 0.4;
  }

  if (lightingBanner) {
    costBanner += costBanner * 0.1;
  }

  if (insuranceBanner) {
    costBanner += costBanner * 0.04;
  }

  resultBannerOutput.textContent = `Стоимость установки наружной рекламы ${locationBannerSelect.value} для баннерной рекламы: ${costBanner} рублей`;

  document.querySelector('#calculator__result--input--banner').value = `На ${locationBannerSelect.value} на сумму: ${costBanner} рублей.
  Двухстронняя(2) или Одностронняя(1) установка на одном баннере: ${quantityBannerInput.value}.
  Сезонность: ${seasonBannerSelect.value}.
  Дополнительные освещение: ${lightingBanner}.
  Страховка: ${insuranceBanner}`;

  btnBannerBook.textContent = `Забронировать`
  resetBannerBtn.textContent = `Сбросить`
}

document.querySelector("#calculator__form--banner").addEventListener("submit", calculateBannerCost);

// функций Сброса
const resetBannerBtn = document.getElementById("calculator__btn--reset--banner");

resetBannerBtn.addEventListener("click", function() {
  locationBannerSelect.value = "";
  quantityBannerInput.value = "";
  seasonBannerSelect.value = "";
  document.getElementById("calculator__lighting--banner").checked = false;
  document.getElementById("calculator__insurance--banner").checked = false;
  resultBannerOutput.textContent = "";
  document.querySelector('#calculator__result--input--banner').value = "";
  btnBannerBook.textContent = "";
  resetBannerBtn.textContent = "";
});
