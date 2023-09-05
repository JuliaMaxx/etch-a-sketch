document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");
  const preloader = document.querySelector(".loader");
  let imageCount = 0;

  function checkImagesLoaded() {
    imageCount++;
    if (imageCount === images.length) {
      preloader.style.display = "none";
    }
  }

  images.forEach((image) => {
    image.addEventListener("load", checkImagesLoaded);
  });
});
