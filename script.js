ScrollReveal({ 
        reset: true,
        delay: 300,
        distance: '60px',
        duration: 1500,
    });

    // COMPONENTS
    ScrollReveal().reveal('.section-title');
    ScrollReveal().reveal('.section-desc', {
        delay: 600,
        duration: 2500
    });

    // HOME 
    ScrollReveal().reveal('.section-home__title',);
    ScrollReveal().reveal('.section-home__image', {
        origin: 'right'
    });
    ScrollReveal().reveal('.section-home__buttons', {
        delay: 600
    });

    // MENUS 
    ScrollReveal().reveal('.section-home__card', {
        interval: 300
    });

    // ABOUT 
    ScrollReveal().reveal('.section-home__image', {
        delay: 900,
        origin: 'left'
    });

    ScrollReveal().reveal('.section-about__stat', {
        delay: 1200,
        interval: 300
    });

    ScrollReveal().reveal('.section-about .primary-button', {
        duration: 3000,
        delay: 1200
    })

    //SERVICES 
    ScrollReveal().reveal('.section-services__card', {
        delay: 1200,
        interval: 300
    });

    //CONTACT
    ScrollReveal().reveal('.section-contact__info-item', {
        delay: 1200,
        interval: 300
    });

    ScrollReveal().reveal('.section-contact__form', {
        delay: 1800,
        duration: 3000
    });

    const headerMenuToggle = document.querySelector('.header__menu-toggle');
    const headerMenus = document.querySelector('.header__menus');

    headerMenuToggle.addEventListener('click', () => {
        headerMenus.classList.toggle('active');
    })

    // FILTER MENU
const filterBtns = document.querySelectorAll('.menu-filter__btn');
const menuCards = document.querySelectorAll('.menu-card');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Tukar button active
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.classList.add('light-button');
                b.classList.remove('primary-button');
            });

            btn.classList.add('active');
            btn.classList.add('primary-button');
            btn.classList.remove('light-button');

            // Filter card
            const filter = btn.dataset.filter;

            menuCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}