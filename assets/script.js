function pintar(elemento, color) {
    elemento.style.backgroundColor = color;
}

const brocha = document.getElementById("pintura");

// agrego un listener de evento 'click' al elemento
brocha.addEventListener("click", function(event) {
    // Llamo la función pintar y paso el elemento y el color a 'yellow'
    pintar(brocha, 'yellow');
});
