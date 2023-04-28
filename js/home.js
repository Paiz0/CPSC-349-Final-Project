const imageContainerElement = document.querySelector(".image-container");
const loadButtonElement = document.querySelector(".btn");
const favImgElement = document.querySelector(".fav-image-container");

imageNum = 10;
let n = 11;

loadButtonElement.addEventListener("click", ()=>{
    addNewImages();
}, {passive: true});

window.addEventListener('load', initImgs());

function addNewImages() {
    for (let index = 0; index < imageNum; index++) {
        const newImgBtn = document.createElement("button");
        const newImage = document.createElement("img");
        newImgBtn.id = "b" + n;
        newImgBtn.className= "favBtn";
        newImgBtn.addEventListener('click', function(event){addToFavs(this.id)})
        newImage.id = n;
        newImage.src = `https://picsum.photos/seed/${Math.floor(Math.random()*10000)}/300/300?random=${Math.floor(Math.random()*2000)}`;
        
        imageContainerElement.appendChild(newImgBtn);
        document.getElementById(newImgBtn.id).appendChild(newImage);
        n++;
    }
}

function initImgs() {
    for (let index = 1; index < 11; index++) {
        document.getElementById(index.toString()).src = `https://picsum.photos/seed/${Math.floor(Math.random()*10000)}/300/300?random=${Math.floor(Math.random()*2000)}`;
        document.getElementById(index.toString()).addEventListener('click', function(event){addToFavs(this.id)});
    }
}

function addToFavs(id) {
    try{ //for dynamically added children
        window.open(document.getElementById(id).firstChild.src, "_blank")
    }
    catch{ //for initial children
        window.open(document.getElementById(id).src, "_blank")
    }
}