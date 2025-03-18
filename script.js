// Typing animation effect
const texts = ["Full Stack Developer", "Frontend Specialist", "Backend Engineer"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector('.typed-text').textContent = letter;
    
    if (letter.length === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
        }, 2000);
    }
    
    setTimeout(type, 150);
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});

// Navigation scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to reveal animation
window.addEventListener('scroll', function() {
    const skillCards = document.querySelectorAll('.skill-card');
    const projectCards = document.querySelectorAll('.project-card');
    
    skillCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.style.opacity = 1;
        }
    });
    
    projectCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.style.opacity = 1;
        }
    });
});