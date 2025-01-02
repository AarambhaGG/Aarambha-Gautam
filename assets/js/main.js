/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

/*===== MODAL FUNCTIONALITY =====*/
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var closeBtn = document.getElementsByClassName("close")[0];

// Get all "View details" links
var links = document.querySelectorAll('.portfolio__link-name');

// Add click event to each link
links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        var imgSrc = this.getAttribute('data-img'); // Get the image source from data attribute
        modal.style.display = "block"; // Show the modal
        modalImg.src = imgSrc; // Set the image source in the modal
    });
});

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside of the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Close the modal when the Escape key is pressed
window.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});