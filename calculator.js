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
    cost += cost * 0.3;
  } else if (season === "Ноябрь") {
    cost += cost * 0.2;
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
}

document.querySelector("#calculator__form").addEventListener("submit", calculateCost);



// калькулятор для Расчет стоимость установки наружной рекламы (для баннерной рекламы)-----------------------------------------------------------------------------------------------------------------------
const locationBannerSelect = document.getElementById("calculator__location--banner");
const quantityBannerInput = document.getElementById("calculator__quantity--banner");
const seasonBannerSelect = document.getElementById("calculator__season--banner");
const resultBannerOutput = document.getElementById("calculator__result--banner");

const locationBannerPrices = {
  "Пл.Вокзальная, 13 (на билборде с размером 3*6 м)": 20000,
  "Ул. Савушкина, 5 (на билборде с размером 3*6 м)": 15000,
  "Ул. Н.Островского, 33 (на билборде с размером 3*6 м)": 10000,
  "Ул. Максима Горького 39/4 (на билборде с размером 3*5 м)": 15000,
  "Ул. Набережная 1 мая, 4 (на билборде с размером 3*6 м)": 25000,
  "Ул. Боевая, 29 (на здании с размером 5*12 м)": 35000,
  "Ул. Савушкина, Остановка Селенские Исады (на остановки с размером 3*1.5 м)": 4000,
};

function calculateBannerCost(event) {
  event.preventDefault();
  const locationBannerPrice = locationPrices[locationBannerSelect.value];
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
    costBanner += costBanner * 0.3;
  } else if (seasonBanner === "Ноябрь") {
    costBanner += costBanner * 0.2;
  } else if (seasonBanner === "Декабрь") {
    costBanner += costBanner * 0.4;
  }

  if (lightingBanner) {
    costBanner += costBanner * 0.1;
  }

  if (insuranceBanner) {
    costBanner += costBanner * 0.04;
  }

  resultBannerOutput.textContent = `Стоимость установки наружной рекламы ${locationBannerSelect.value} для видео рекламы: ${costBanner} рублей`;
}

document.querySelector("#calculator__form--banner").addEventListener("submit", calculateBannerCost);
