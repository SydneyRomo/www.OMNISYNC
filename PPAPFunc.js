document.addEventListener('DOMContentLoaded', function() {
    // ----------------------------------------------------------------
    // 1. Lógica para el Menú Toggle (Responsive Design)
    // ----------------------------------------------------------------
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            // Cambiar el texto del botón (☰ a X y viceversa)
            menuToggle.textContent = sidebar.classList.contains('active') ? '✖' : '☰';
        });

        // Ocultar el sidebar después de hacer clic en un enlace (en móvil)
        const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                // Solo si el sidebar está visible/activo
                if (sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                    menuToggle.textContent = '☰';
                }
            });
        });
    }

    // ----------------------------------------------------------------
    // 2. Lógica para el Carrusel (Basado en tu HTML con la función 'mover')
    // ----------------------------------------------------------------
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // Función global 'mover' para los botones onclick del HTML
    window.mover = function(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        const offset = -currentIndex * 100; 
        // Aplicar la transformación CSS al slider-track
        if (slider) {
            slider.style.transform = `translateX(${offset}%)`;
        }
    }
});