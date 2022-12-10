const openBtn = document.querySelector(".open_btn");
const modal = document.querySelector(".modal");
const modalBox = document.querySelector(".modal-box");

const closeBtn = document.querySelector(".btn-close");

const handleClick = () => {
  modal.classList.add("active");
  modalBox.classList.add("active");
};

openBtn.addEventListener("click", handleClick);

const close = (e) => {
  e.preventDefault();

  modal.classList.remove("active");
  modalBox.classList.remove("active");

  closeBtn.style.background = "red";
};

closeBtn.addEventListener("click", close);
