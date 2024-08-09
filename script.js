$(document).ready(function () {
    const destinosInfo = {
        "CulD - The Cult DAO": {
            "img": "img/CulDPreview.JPG",
            "titulo": "CulD - The Cult DAO",
            "descripcion": "Supervised the operation and connection of Discord bots to our database in MongoDB. Led the content update initiative, where attention to detail generated a clearer idea about theproject. Implemented collaborative practices on GitHub, resulting in greater transparency and productivity. "
        },
        "Machu Picchu": {
            "img": "img/machu pichu.jpg",
            "titulo": "Machu Picchu",
            "descripcion": "Explora las majestuosas ruinas incas de Machu Picchu en Perú. Este sitio histórico ofrece vistas impresionantes y una experiencia inolvidable para los aventureros."
        },
        "Río de Janeiro": {
            "img": "img/Rio de janeiro.jpg",
            "titulo": "Río de Janeiro",
            "descripcion": "Disfruta de las playas soleadas, el vibrante carnaval y la icónica estatua del Cristo Redentor en Río de Janeiro, Brasil. La ciudad ofrece una mezcla única de cultura y naturaleza."
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
