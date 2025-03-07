let currentCert = 0;
const certs = document.getElementById('certSlides');
const totalCerts = document.querySelectorAll('.certificate').length;

function showCert(index) {
    // Clamp index to valid range
    currentCert = Math.max(0, Math.min(index, totalCerts - 1));
    const offset = (currentCert * 100) / totalCerts; // Calculate percentage per certificate
    certs.style.transform = `translateX(-${offset}%)`;
}

function nextCert() {
    showCert(currentCert + 1);
}

function prevCert() {
    showCert(currentCert - 1);
}

// Navbar active link
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
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