let currentCert = 0;
const certs = document.getElementById('certSlides');
const totalCerts = document.querySelectorAll('.certificate').length;

function showCert(index) {
    if (index >= totalCerts) currentCert = 0;
    if (index < 0) currentCert = totalCerts - 1;
    certs.style.transform = `translateX(-${currentCert * 100}%)`;
}

function nextCert() {
    currentCert++;
    showCert(currentCert);
}

function prevCert() {
    currentCert--;
    showCert(currentCert);
}

// Navbar active link
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(current)) {
            link.classList.add('active');
        }
    });
});