// const SliderImages = () => {
//   const images = document.querySelectorAll(".images_img");

//   // images[activeSlide].classList.add("active");

//   //   ------- 1 вариант --------------
//   // for (let i = 0; i < images.length; i++) {
//   //   images[i].addEventListener("click", () => {
//   //     images.forEach((slide) => {
//   //       slide.classList.remove("active");
//   //     });
//   //     images[i].classList.add("active");
//   //   });
//   // }

//   //   ------- 2 вариант --------------
//   for (let slide of images) {
//     slide.addEventListener("click", () => {
//       for (let item of images) {
//         item.classList.remove("active");
//       }
//       slide.classList.add("active");
//     });
//   }

//   //   ------- 3 вариант --------------
//   // images.forEach((item) => {
//   //   item.addEventListener("click", () => {
//   //     images.forEach((slide) => {
//   //       slide.classList.remove("active");
//   //     });
//   //     item.classList.add("active");
//   //   });
//   // });
// };

// SliderImages(3);

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
