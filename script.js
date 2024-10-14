// Show Menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

// Remove Menu Mobile
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
    document.getElementById('nav-menu').classList.remove('show');
};

navLinks.forEach(n => n.addEventListener('click', linkAction));

// Scroll Sections Active Link
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text');
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

// Add event listener to "Contact" link
document.getElementById('contact-link').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('email-display').style.display = 'block';
});

// Download File
function downloadFile() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1GNt_ig8qDjAvtvNDXV0pMCnhXfGdXcd-';
    link.download = 'CRNSINGI-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
