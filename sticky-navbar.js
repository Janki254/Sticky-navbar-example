const navbar = document.querySelector('.nav');

window.addEventListener('scroll', stickyNav);

function stickyNav() {
    if (window.scrollY > navbar.offsetHeight + 200) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
}
