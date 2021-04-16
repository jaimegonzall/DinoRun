const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");

function jump() {
    if(dino.classList != "jump"){
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 600);
    }
};

let isAlive = setInterval(function() {
    
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    
    if(cactusLeft < 80 && cactusLeft > 30 && dinoTop >= 120) {
        alert("Game Over");
    }

}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});