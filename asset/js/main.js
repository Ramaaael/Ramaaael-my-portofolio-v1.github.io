// TOGGLE MODE
const toggleButton = document.getElementById('toggle-button');
const toggleIcon = document.getElementById('toggle-icon');
const navLinks = document.querySelectorAll('.list-nav li a');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        toggleIcon.classList.remove('ri-sun-fill');
        toggleIcon.classList.add('ri-moon-fill');
        localStorage.setItem('theme', 'dark');
    } else {
        toggleIcon.classList.remove('ri-moon-fill');
        toggleIcon.classList.add('ri-sun-fill');
        localStorage.setItem('theme', 'light');
    }
});
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});
document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Ubah nilai 50 sesuai kebutuhan
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
});

window.addEventListener('load', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        toggleIcon.classList.remove('ri-sun-fill');
        toggleIcon.classList.add('ri-moon-fill');
    }
});

const text = document.querySelector(".sec");

const textLoad = () => {
        setTimeout(()=> {
            text.textContent =  "Informatics Engineering";
        },0);
        setTimeout(()=> {
            text.textContent =  "Sofware Engineering";
        },4000);
        setTimeout(()=> {
            text.textContent =  "Web Developer";
        },8000);
    }
    textLoad();
    setInterval(textLoad,12000);