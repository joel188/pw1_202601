document.addEventListener("DOMContentLoaded", () => {
    let miCarusel = new Carousel("caruselPrincipal");
    miCarusel.init();
});
class WheelCarousel {
    constructor(carouselId, tickTimeInSeconds = 3) {
        this.carouselHolder = document.getElementById(carouselId);
        this.track = this.carouselHolder.querySelector(".track");
        this.tickTime = tickTimeInSeconds * 1000;
        this.tickerId = null;
        this.isMoving = false;
    }

    init() {
        this.generateNavigationUI();
        this.startTick();
        
        // Escuchamos cuando termina la transición para reordenar los elementos
        this.track.addEventListener('transitionend', () => this.reorganizeSlides());
    }

    moveNext() {
        if (this.isMoving) return;
        this.isMoving = true;

        // Aplicamos la transición para movernos al segundo slide (el que sigue)
        this.track.style.transition = "transform 0.5s ease-in-out";
        this.track.style.transform = "translateX(-100vw)";
    }

    reorganizeSlides() {
        // 1. Quitamos la transición para que el salto sea invisible
        this.track.style.transition = "none";
        
        // 2. Tomamos el primer hijo y lo movemos al final del contenedor
        const firstChild = this.track.firstElementChild;
        this.track.appendChild(firstChild);
        
        // 3. Reseteamos el transform a 0. Como el primer slide ahora es el que 
        // antes era el segundo, visualmente no se nota el cambio.
        this.track.style.transform = "translateX(0)";
        
        this.isMoving = false;
    }

    // El movimiento inverso funciona igual pero al revés
    movePrev() {
        if (this.isMoving) return;
        this.isMoving = true;

        // Primero movemos el último elemento al principio sin que se note
        const lastChild = this.track.lastElementChild;
        this.track.insertBefore(lastChild, this.track.firstElementChild);
        
        // Colocamos el track en -100vw instantáneamente
        this.track.style.transition = "none";
        this.track.style.transform = "translateX(-100vw)";

        // Forzamos un reflow para que el navegador registre el cambio de posición
        this.track.offsetHeight;

        // Animamos de vuelta a 0
        this.track.style.transition = "transform 0.5s ease-in-out";
        this.track.style.transform = "translateX(0)";
        
        // Al terminar, isMoving se vuelve false mediante el evento transitionend
    }

    startTick() {
        if (this.tickerId) clearInterval(this.tickerId);
        this.tickerId = setInterval(() => this.moveNext(), this.tickTime);
    }

    generateNavigationUI() {
        let btnLeft = document.createElement("button");
        let btnRight = document.createElement("button");
        btnLeft.className = "carousel-btn btnleft";
        btnRight.className = "carousel-btn btnright";
        btnLeft.textContent = "<";
        btnRight.textContent = ">";

        btnRight.onclick = () => { this.moveNext(); this.startTick(); };
        btnLeft.onclick = () => { this.movePrev(); this.startTick(); };

        this.carouselHolder.appendChild(btnLeft);
        this.carouselHolder.appendChild(btnRight);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const miRueda = new WheelCarousel("caruselPrincipal");
    miRueda.init();
});