window.onload = function() {
    let obrazek = document.getElementById("obrazek");
    let pozice = -200; // Start mimo obrazovku

    function animace() {
        if (pozice < 200) { // Cílová pozice
            pozice += 5; // Posun o 5px
            obrazek.style.left = pozice + "px";
            requestAnimationFrame(animace);
        }
    }

    animace();
};
