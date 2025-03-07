let currentCert = 0;
const certs = document.getElementById('certSlides');
const totalCerts = document.querySelectorAll('.certificate').length;

function showCert(index) {
    currentCert = Math.max(0, Math.min(index, totalCerts - 1));
    const offset = (currentCert / totalCerts) * 100; // Calculate percentage based on total
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
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 140; // Match scroll-margin-top value
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        // Check if the middle of the viewport is within the section boundaries
        const viewportMiddle = window.pageYOffset + (window.innerHeight / 2);

        if (viewportMiddle >= sectionTop && viewportMiddle < sectionBottom) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
});