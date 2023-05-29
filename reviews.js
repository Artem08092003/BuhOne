const reviewsList = document.getElementById("reviews-list");
const reviewForm = document.getElementById("review-form");

// Функция для добавления отзыва
function addReview(event) {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const messageInput = document.getElementById("message");
  const ratingInput = document.querySelector('input[name="rating"]:checked');
  const name = nameInput.value;
  const message = messageInput.value;
  const rating = ratingInput ? ratingInput.value : "";
  const review = document.createElement("li");
  review.innerHTML = `<p><strong>${name}:</strong> ${message}</p><p><strong>Оценка:</strong> ${rating}</p><button class="delete-button">Удалить</button>`;
  reviewsList.appendChild(review);
  nameInput.value = "";
  messageInput.value = "";
  ratingInput.checked = false;
  saveReviews();
}

// Функция для удаления отзыва
function deleteReview(event) {
  if (event.target.classList.contains("delete-button")) {
    event.target.parentElement.remove();
    saveReviews();
  }
}

// Функция для сохранения отзывов в localStorage
function saveReviews() {
  localStorage.setItem("reviews", reviewsList.innerHTML);
}

// Функция для загрузки отзывов из localStorage
function loadReviews() {
  const savedReviews = localStorage.getItem("reviews");
  if (savedReviews) {
    reviewsList.innerHTML = savedReviews;
  }
}

reviewForm.addEventListener("submit", addReview);
reviewsList.addEventListener("click", deleteReview);

loadReviews();
