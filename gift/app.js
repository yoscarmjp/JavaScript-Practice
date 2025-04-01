const tapa = document.getElementById('tapa');
const btn = document.getElementById('open');

let statusBox = false

btn.addEventListener('click', function(){
    if(statusBox === false){
        statusBox = true; // Cambiamos el estado de la caja a abierto
        tapa.style.transform = "translate(-15px, -35px) rotate(-45deg)" // Levantamos la tapa
    }else{
        statusBox = false // Cambiamos el estado de la caja a cerrado
        tapa.style.transform = "translate(0, 0)" // Bajamos la tapa
    }
})