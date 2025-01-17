document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.button-categories button');
    const sections = document.querySelectorAll('.buy-options');
    const categoryImage = document.getElementById('category-image');

    // Gestion des clics sur les boutons de catégories
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.dataset.section;

            // Masque toutes les sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Affiche la section associée au bouton cliqué
            const targetSection = document.getElementById(`france-${sectionId}`);
            if (targetSection) {
                targetSection.style.display = 'block';
            }

            // Change l'image en fonction de la catégorie
            switch (sectionId) {
                case 'mb':
                    categoryImage.src = 'image/motherboard.jpg';
                    categoryImage.alt = 'Carte Mères';
                    break;
                case 'monitor':
                    categoryImage.src = 'image/monitor.jpg';
                    categoryImage.alt = 'Ecran Gamer';
                    break;
                case 'gpu':
                    categoryImage.src = 'image/graphics-card.jpg';
                    categoryImage.alt = 'Carte Graphique';
                    break;
                case 'minipc':
                    categoryImage.src = 'image/minipc.jpg';
                    categoryImage.alt = 'MiniPC';
                    break;
                case 'networking':
                    categoryImage.src = 'image/networking.jpg';
                    categoryImage.alt = 'Networking';
                    break;
                default:
                    categoryImage.src = 'image/default.jpg';
                    categoryImage.alt = 'Default Category';
            }
        });
    });
});
