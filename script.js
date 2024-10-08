$(document).ready(function () {
    const destinosInfo = {
        "CulD - The Cult DAO": {
            "img": "img/CulDPreview.JPG",
            "titulo": "CulD - The Cult DAO",
            "descripcion": "Supervised the operation and connection of Discord bots to our database in MongoDB. Led the content update initiative, where attention to detail generated a clearer idea about the project. Implemented collaborative practices on GitHub, resulting in greater transparency and productivity. "
        },
        "Agencia IA": {
            "img": "img/AIAPreview.JPG",
            "titulo": "Agencia IA",
            "descripcion": "Freelance project currently under development."
        },
        "AeroVia Express": {
            "img": "img/AVPreview.JPG",
            "titulo": "AeroVia Express",
            "descripcion": "Bootcamp Front Exercise."
        }
    };

    $('.ver-mas').on('click', function (event) {
        event.preventDefault();
        const destino = $(this).closest('.card').data('destino');
        const info = destinosInfo[destino];

        $('#info-contenido').html(`
            <img src="${info.img}" class="img-fluid mb-3" alt="${info.titulo}">
            <h2>${info.titulo}</h2>
            <p>${info.descripcion}</p>
        `);

        $('#info-recuadro').removeClass('recuadro-oculto');
    });

    $('#cerrar-recuadro').on('click', function () {
        $('#info-recuadro').addClass('recuadro-oculto');
    });

    $('#info-recuadro').on('click', function (event) {
        if (event.target === this) {
            $(this).addClass('recuadro-oculto');
        }
    });
});
