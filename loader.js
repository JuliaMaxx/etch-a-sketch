document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.querySelector(".loader");

  function checkImagesLoaded() {
    
    preloader.style.display = "none"; 
    console.log('done')
  }

  setTimeout(checkImagesLoaded, 5000); 
});
