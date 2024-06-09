function initSlideshows() {
    var slideshows = ['slideshow1', 'slideshow2'];
    slideshows.forEach(function(id, index) {
        var container = document.getElementById(id);
        var slides = container.getElementsByClassName('slide');
        var indicatorsContainer = document.getElementById('indicators' + (index + 1));

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';

            // Cria os indicadores
            var indicator = document.createElement('span');
            indicator.classList.add('indicator');
            indicator.setAttribute('onclick', `currentSlide(${i + 1}, '${id}')`);
            indicatorsContainer.appendChild(indicator);
        }

        slides[0].style.display = 'block';
        indicatorsContainer.children[0].classList.add('active');
        container.currentSlide = 0;

        // Configura a mudança automática de slides a cada 5 segundos
        setInterval(function() {
            plusSlides(1, id);
        }, 5000);
    });
}

function plusSlides(n, slideshowId) {
    var container = document.getElementById(slideshowId);
    showSlides(container.currentSlide + n, slideshowId);
}

function currentSlide(n, slideshowId) {
    showSlides(n - 1, slideshowId);
}

function showSlides(n, slideshowId) {
    var container = document.getElementById(slideshowId);
    var slides = container.getElementsByClassName('slide');
    var indicatorsContainer = document.getElementById('indicators' + slideshowId.slice(-1));
    var indicators = indicatorsContainer.getElementsByClassName('indicator');

    if (n >= slides.length) {
        n = 0;
    }
    if (n < 0) {
        n = slides.length - 1;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (var i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(' active', '');
    }

    slides[n].style.display = 'block';
    indicators[n].className += ' active';
    container.currentSlide = n;
}

// Chamar initSlideshows diretamente porque o script é carregado após o DOM estar pronto
document.addEventListener("DOMContentLoaded", function() {
    initSlideshows();
});

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


