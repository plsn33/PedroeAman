let currentIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    currentIndex = index;
    const slideWidth = slides.clientWidth;
    slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function currentSlide(index) {
    showSlide(index);
}

// Auto-slide a cada 3 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % dots.length;
    showSlide(currentIndex);
}, 3000);

// Defina a data de início do relacionamento
const startDate = new Date('2023-12-21T00:30:00'); // Substitua pela data real

function updateTimeTogether() {
    const now = new Date();
    const elapsed = now - startDate;

    // Calcula os dias, horas, minutos e segundos
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    // Atualiza o texto no elemento
    document.getElementById('countdown').textContent =
        `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

// Atualiza o cronômetro a cada segundo
setInterval(updateTimeTogether, 1000);

// Inicializa o cronômetro ao carregar a página
updateTimeTogether();
