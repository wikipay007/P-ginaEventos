$(document).ready(function() {
    let $carousel = $('.testimonial-carousel');

    // Clonar itens para evitar espaços
    $carousel.children().clone().appendTo($carousel);

    // Inicializar o Slick Carousel
    $carousel.slick({
        slidesToShow: 3, // Quantidade de slides visíveis
        slidesToScroll: 1, // Quantos slides rolar por vez
        autoplay: true, // Habilita autoplay
        autoplaySpeed: 3000, // Velocidade do autoplay (3s)
        dots: true, // Mostra as bolinhas
        arrows: true, // Ativa os botões de navegação
        infinite: true, // Garante o looping contínuo
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2 // Mostra 2 slides em telas menores
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1 // Mostra 1 slide em telas menores
                }
            }
        ]
    });
});