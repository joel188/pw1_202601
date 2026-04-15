document.addEventListener("DOMContentLoaded", () => {
    let miCarusel = new Carousel("caruselPrincipal");
    miCarusel.init();
});

class Carousel {
    constructor(carouselId, tickTimeInSeconds = 3) {
        this.carouselHolder = document.getElementById(carouselId);
        this.track = this.carouselHolder.querySelector(".track");
        this.slides = [...this.track.querySelectorAll(".slide")];
        this.minLimit = 0;
        this.maxLimit = this.slides.length - 1;
        this.currentIndex = 0;
        this.tickTime = tickTimeInSeconds * 1000;
        this.tickerId = null;
        this.direction = 1;
    }

    init() {
        this.generateNavigationUI();
        this.tick();
    }

    tick() {
        // Limpiamos cualquier timeout previo para evitar duplicados
        if (this.tickerId) clearTimeout(this.tickerId);

        this.tickerId = setTimeout(() => {
            this.moveNext();
            this.tick();
        }, this.tickTime);
    }

    moveNext() {
        let tmpNewIndex = this.currentIndex + this.direction;
        
        if (tmpNewIndex > this.maxLimit) {
            this.direction = -1;
            tmpNewIndex = this.currentIndex + this.direction;
        } else if (tmpNewIndex < this.minLimit) {
            this.direction = 1;
            tmpNewIndex = this.currentIndex + this.direction;
        }
        
        this.moveTo(tmpNewIndex);
    }

    moveTo(newIndex) {
        // Aseguramos que el índice esté dentro de los límites
        if (newIndex >= this.minLimit && newIndex <= this.maxLimit) {
            this.currentIndex = newIndex;
            this.track.style.left = `${-100 * this.currentIndex}vw`;
        }
    }

    generateNavigationUI() {
        let btnLeft = document.createElement("BUTTON");
        let btnRight = document.createElement("BUTTON");

        btnLeft.classList.add("carousel-btn", "btnleft");
        btnRight.classList.add("carousel-btn", "btnright");

        btnLeft.textContent = "<";
        btnRight.textContent = ">";

        // Lógica Botón Derecho
        btnRight.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Si hay espacio a la derecha, avanza
            if (this.currentIndex < this.maxLimit) {
                this.moveTo(this.currentIndex + 1);
            } else {
                this.moveTo(0); // Opcional: vuelve al inicio
            }
            this.tick(); // Reinicia el contador de tiempo
        });

        // Lógica Botón Izquierdo
        btnLeft.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Si hay espacio a la izquierda, retrocede
            if (this.currentIndex > this.minLimit) {
                this.moveTo(this.currentIndex - 1);
            } else {
                this.moveTo(this.maxLimit); // Opcional: va al final
            }
            this.tick(); // Reinicia el contador de tiempo
        });

        this.carouselHolder.appendChild(btnLeft);
        this.carouselHolder.appendChild(btnRight);
    }
}



