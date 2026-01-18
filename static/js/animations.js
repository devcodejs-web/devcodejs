document.addEventListener('DOMContentLoaded', () => {
    // Todos los elementos a animar
    const animatedElements = document.querySelectorAll(
        '.hero__content, .webdev__card, .appdev__text, .appdev__image, .tech__card'
    );

    // Función para verificar si un elemento está visible en la ventana
    const isInViewport = el => {
        const rect = el.getBoundingClientRect();
        return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85;
    };

    // Animar elementos visibles
    const animateElements = () => {
        animatedElements.forEach((el, index) => {
            if (isInViewport(el)) {
                // Delay más rápido: 50ms entre elementos
                setTimeout(() => {
                    el.classList.add('show');
                }, index * 50);
            }
        });
    };

    // Inicialmente ocultamos todos los elementos
    animatedElements.forEach(el => el.classList.add('animate'));

    // Animamos al cargar y al hacer scroll
    animateElements();
    window.addEventListener('scroll', animateElements);
});
