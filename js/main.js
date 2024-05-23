document.addEventListener("DOMContentLoaded", function () {
    // Función para cargar el encabezado
    function cargarEncabezado() {
        fetch('header.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('header-container').innerHTML = html;

                // Añadir el script para el menú hamburguesa después de cargar el encabezado
                const menuToggle = document.querySelector('.menu-toggle');
                const nav = document.querySelector('.nav');

                if (menuToggle && nav) {
                    menuToggle.addEventListener('click', function() {
                        nav.classList.toggle('active');
                    });
                }
            });
    }

    // Función para cargar el pie de página
    function cargarPieDePagina() {
        fetch('footer.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('footer-container').innerHTML = html;
            });
    }

    // Función para iniciar las animaciones con Intersection Observer
    function iniciarAnimaciones() {
        const aboutSection = document.querySelector('.about-section');
        const missionVisionSection = document.querySelector('.mission-vision-section');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (aboutSection) observer.observe(aboutSection);
        if (missionVisionSection) observer.observe(missionVisionSection);
    }

    // Llamar a las funciones para cargar el encabezado y el pie de página
    cargarEncabezado();
    cargarPieDePagina();
    iniciarAnimaciones();
});
