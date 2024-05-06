const images = document.querySelectorAll(".ficha-comic-container img")

images.forEach(image => {
  image.addEventListener("click", () => {
    const imageURL = image.src;
    window.open(imageURL, "_blank");
  })
})