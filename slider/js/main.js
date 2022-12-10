const sliderImages = (activeSlide) => {
  const images = document.querySelectorAll(".images_img");

  images[activeSlide].classList.add("show");

  for (let item of images) {
    item.addEventListener("click", () => {
      for (let i of images) {
        i.classList.remove("show");
      }

      item.classList.add("show");
    });
  }

  //   for (let i = 0; i < images.length; i++) {
  //     images[i].addEventListener("click", () => {
  //       for (let j = 0; j < images.length; j++) {
  //         images[j].classList.remove("show");
  //       }

  //       images[i].classList.add("show");
  //     });
  //   }
};

sliderImages(3);
