// Fonction optionnelle : ajout de défilement automatique
const carousel = document.getElementById('product-carousel');

// Défilement automatique vers la droite
setInterval(() => {
    carousel.scrollBy({ left: 200, behavior: 'smooth' });
}, 3000);

// Bonus : arrêt du défilement automatique si l'utilisateur interagit
let isUserInteracting = false;

carousel.addEventListener('scroll', () => {
    isUserInteracting = true;
    clearTimeout(resetInteractionTimeout);
    const resetInteractionTimeout = setTimeout(() => {
        isUserInteracting = false;
    }, 3000);
});
