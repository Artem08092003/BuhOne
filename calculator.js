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



// калькулятор для Расчет стоимость установки наружной рекламы на билборде с размером 3*6 (для видео рекламы)-----------------------------------------------------------------------------------------------------------------------
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

  let cost = locationPrice * quantity;
  if (season === "Январь") {
    cost += cost * 0.5;
  } else if (season === "Февраль") {
   cost += cost * 0.1;
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

  resultOutput.textContent = `Стоимость установки наружной рекламы ${locationSelect.value} для видео рекламы: ${cost} рублей`;
}

document.querySelector("#calculator__form").addEventListener("submit", calculateCost);

