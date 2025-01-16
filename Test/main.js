
// // Gestion de la pop-up des langues
//   const languagePopup = document.getElementById('language-popup');
//   const languageButton = document.getElementById('nav-button-langue');
//   const closeLanguagePopup = languagePopup.querySelector('.close');

//   if (languageButton) {
//     languageButton.addEventListener('click', () => {
//       languagePopup.style.display = 'block';
//     });
//   }

//   if (closeLanguagePopup) {
//     closeLanguagePopup.addEventListener('click', () => {
//       languagePopup.style.display = 'none';
//     });
//   }

//   window.addEventListener('click', event => {
//     if (event.target === languagePopup) {
//       languagePopup.style.display = 'none';
//     }
//   });

$(document).ready(function() {
    function toggleLanguage(event) {
        event.preventDefault();
        $("#language-popup").slideToggle();
    }
    $("#nav-button-langue").on("click", toggleLanguage);
});

$(document).ready(function() {
    function toggleClose3(event) {
        event.preventDefault();
        $(".popup").slideUp();
    }
    $(".close").on("click", toggleClose3)
})