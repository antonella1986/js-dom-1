/* Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato) */

let button = document.getElementById("buttonLight");

button.addEventListener("click", function() {
    document.getElementById("buttonLight").src = './img/yellow_lamp.png';
});