const cards = document.querySelectorAll(".card");
const popup = document.getElementById("popup");     
const ImgPopup = document.getElementById("imgPopup");
const textImg = document.getElementById("textImg");
const closePopup = document.getElementById("close");

cards.forEach(card => {
    const img = card.querySelector("img"); 
    img.addEventListener("click", () => {

        // Obtener la ruta base del archivo
        const base = img.src.replace(/-(small|medium|large|xlarge)-1x\.jpg/, "");

        // Construimos las rutas con xlarge
        const large1x = `${base}-xlarge-1x.jpg`;
        const large2x = `${base}-xlarge-2x.jpg`;

        ImgPopup.src = large1x;
        ImgPopup.srcset = `${large1x} 1x, ${large2x} 2x`;
        ImgPopup.alt = img.alt;
        textImg.textContent = img.alt;

        popup.style.display = "flex";
    });
});

//Cerrar si haces click en la x
closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Cerrar si haces click fuera
popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
});
