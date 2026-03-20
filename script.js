const imagenes = document.querySelectorAll(".galeria img");
const lightbox = document.getElementById("lightbox");
const imgGrande = document.getElementById("img-grande");
const cerrar = document.getElementById("cerrar");

imagenes.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    imgGrande.src = img.src;
  });
});

cerrar.addEventListener("click", () => {
  lightbox.style.display = "none";
});
