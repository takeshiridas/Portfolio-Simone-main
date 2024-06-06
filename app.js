var slideIndex = 1;
showSlides(slideIndex);

// Função para avançar/navegar pelos slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Função para mostrar um slide específico
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

// Automatizar a transição dos slides
setInterval(function() {
    plusSlides(1);
}, 5000); // Mudar a cada 5 segundos


function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

function mostrarDescricao(id) {
    var descricao = document.getElementById(id);
    descricao.style.display = "block";
}

function ocultarDescricao(id) {
    var descricao = document.getElementById(id);
    descricao.style.display = "none";
}

function toggleEmailPreview() {
    const emailPreviewContainer = document.querySelector('.email-preview-container');
    const overlay = document.querySelector('.overlay');
    const isVisible = emailPreviewContainer.style.display === 'flex';
    emailPreviewContainer.style.display = isVisible ? 'none' : 'flex';
    overlay.style.display = isVisible ? 'none' : 'block';
}


