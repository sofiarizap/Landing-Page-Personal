window.addEventListener ('scroll', function (){
    let animacion = document .getElementById( 'animado') ;
    let posicionobj1 = animacion.getBoundingClientRect().top;
    console.log (posicion0bj1);
    let tamañoDePantalla = window.innerHeight;
    if (posicionobj1 < tamañoDePantalla){
        animacion.style.animation ='mover 1s ease-out'
    }
})  
    
    