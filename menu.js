const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const over = document.getElementById('over-menu');
const btnFechar = menu.querySelector('.btn-fechar');
const linksMenu = menu.querySelectorAll('a');

// Abrir menu
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
});

// Fechar no X
btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

// Fechar no overlay
over.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

// Clique nos links do menu
linksMenu.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');

        // Sempre fecha o menu
        menu.classList.remove('abrir-menu');

        // INÍCIO
        if (targetId === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return;
        }

        const target = document.querySelector(targetId);
        if (!target) return;

        let offset;
        const isMobile = window.innerWidth <= 1020;

        // ===== MOBILE =====
        if (isMobile) {
            if (targetId === "#contato-mobile") offset = 740;
            else if (targetId === "#especialidades") offset = 40;
            else if (targetId === "#portfolio") offset = 0;
            else offset = 80;
        }

        // ===== DESKTOP =====
        else {
            if (targetId === "#contato-mobile") offset = 580;
            else if (targetId === "#especialidades") offset = 60;
            else if (targetId === "#portfolio") offset = 80;
            else if (targetId === "#formulario") offset = 20;
            else offset = 240;
        }

        const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            offset;

        setTimeout(() => {
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }, 300);
    });
});
