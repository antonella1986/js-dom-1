/* Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato) */

const button = 

document.getElementById('buttonLight').addEventListener('click', function() {
    document.getElementById('lighton').src = './img/yellow_lamp.png';
});