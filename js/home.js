const imageContainerElement = document.querySelector(".image-container");
const buttonElement = document.querySelector(".btn");

buttonElement.addEventListener("click", ()=>{
    imageNum = 10;
    addNewImages();
}, {passive: true});

function addNewImages() {
    for (let index = 0; index < imageNum; index++) {
        const newImage = document.createElement("img");
        newImage.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        imageContainerElement.appendChild(newImage);
    }
}