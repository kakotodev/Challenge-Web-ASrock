$(document).ready(function () {
    // Fonction pour afficher/masquer la section #toggle-products
    function toggleProducts(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        $("#toggle-products").slideToggle(); // Alterne l'affichage de l'élément
    }

    // Attache l'événement "click" au lien "Products" par son ID
    $("#products-button").on("click", toggleProducts);
});

$(document).ready(function () {
    // Fonction pour afficher/masquer la section #toggle-products
    function toggleLogin(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        $("#login-popup").slideToggle(); // Alterne l'affichage de l'élément
    }

    // Attache l'événement "click" au lien "Products" par son ID
    $("#nav-button-login").on("click", toggleLogin);
});

$(document).ready(function() {
    function toggleClose1(event) {
        event.preventDefault();
        $("#login-popup").slideUp();
    }
    $(".close").on("click", toggleClose1)
})

$(document).ready(function() {
    function toggleClose2(event) {
        event.preventDefault();
        $("#register-popup").slideUp();
    }
    $("#register-popup .close").on("click", toggleClose2)
})

$(document).ready(function() {
    function toggleRegister(event) {
        event.preventDefault();
        $("#login-popup").slideUp();
        $("#register-popup").slideToggle();
    }
    $(".register-link").on("click", toggleRegister)
})

$(document).ready(function() {
    function toggleLanguage(event) {
        event.preventDefault();
        $("#language-popup").slideToggle();
    }
    $("#nav-button-langue").on("click", toggleLanguage);
});

$(document).ready(function() {

})

$(document).ready(function() {
    function toggleClose3(event) {
        event.preventDefault();
        $(".popup").slideUp();
    }
    $(".close").on("click", toggleClose3)
})


    const categoryItems = document.querySelectorAll('.categories ul li');
    const categoryImage = document.getElementById('category-image');

    // Mise à jour des chemins d'image avec des exemples clairs
    const images = {
        motherboard: 'images/motherboard.jpg',
        monitor: 'images/monitor.jpg',
        'graphics-card': 'images/graphics-card.jpg',
        'mini-pc': 'images/mini-pc.jpg',
        networking: 'images/networking.jpg',
    };

    // Attache un gestionnaire d'événement pour chaque élément de catégorie
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.getAttribute('data-category');
            if (images[category]) {
                // Change la source et l'attribut alt de l'image
                categoryImage.src = images[category];
                categoryImage.alt = `${category} image`;
            } else {
                console.error(`Image non trouvée pour la catégorie: ${category}`);
            }
        });
    });
