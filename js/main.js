// ===== SMOOTH SCROLL PARA LINKS DE NAVEGAÇÃO =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== FORM SUBMISSION =====
document.getElementById('subm').addEventListener('click', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const msn = document.getElementById('msn').value;
    
    if (nome && email && celular && msn) {
        alert(`Thank you for your message, ${nome}! We'll get back to you soon at ${email}.`);
        document.querySelectorAll('.form-control').forEach(input => input.value = '');
    } else {
        alert('Please fill in all fields.');
    }
});

// ===== NAVBAR ACTIVE STATE =====
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section, div[id]');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== PRELOAD ICONS =====
window.addEventListener('load', function() {
    const icons = [
        './images/icons/home_icon.png',
        './images/icons/game_info_icon.png',
        './images/icons/guide_icon.png',
        './images/icons/mensage_icon.png',
        './images/icons/github_icon.png',
        './images/icons/internet_icon.png'
    ];
    
    icons.forEach(iconPath => {
        const img = new Image();
        img.src = iconPath;
    });
});
