const orderBtn = document.querySelector(".order-btn");
const modalOverlay = document.querySelector(".modal-overlay");

const burgerBtn = document.querySelector(".burger-btn");
const burgerOverlay = document.querySelector(".burger-overlay");

const crossBtn = document.querySelector(".cross-btn");
const crossBtnBurger = document.querySelector(".cross-btn-burger");

function openModal(event) {
  if (event.target.closest(".order-btn")) {
    modalOverlay.classList.add("is-open");
  }

  if (event.target.closest(".burger-btn")) {
    burgerOverlay.classList.add("is-open");
  }
}

function closeModal(event) {
  if (event.target.closest(".cross-btn")) {
    modalOverlay.classList.remove("is-open");
  }

  if (event.target.closest(".cross-btn-burger")) {
    burgerOverlay.classList.remove("is-open");
  }
}

function closeModalOverlay(event) {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove("is-open");
  }
}

orderBtn.addEventListener("click", openModal);
crossBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModalOverlay);

burgerBtn.addEventListener("click", openModal);
crossBtnBurger.addEventListener("click", closeModal);
