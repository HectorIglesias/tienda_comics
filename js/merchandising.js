const galleryImages = document.querySelectorAll(".product img");
galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        image.classList.add("zoomed");
        setTimeout( () => {
            image.classList.remove("zoomed");
        }, 1000)
    })
})

const mensajesDivertidos = ["Bienvenido a la tienda de cómics más increible del universo", 
                            "¡Prepárate para sumergirte en el mundo de los superhéroes y las aventuras",
                            "¿Listo para encontrar los cómics más épicos y los coleccionables más buscados?",
                            "¡Explora nuestro catálogo y descubre un nuevo universo de emociones!",
                            "¡Aquí encontrarás todo lo que necesitas para convertirte en un verdadero fan de los cómics!"]

const mensajeAleatorio = mensajesDivertidos[Math.floor(Math.random() * mensajesDivertidos.length)]

let etiqueta = document.createElement("h2")
etiqueta.innerHTML = mensajeAleatorio
document.getElementsByClassName("banner")[0].appendChild(etiqueta)
