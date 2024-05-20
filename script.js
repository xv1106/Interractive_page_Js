// Compteur de clics sur le footer
document.addEventListener("DOMContentLoaded", function() {
  // On choppe le footer
  var footer = document.querySelector("footer");
  
  // Quand tu cliques sur le footer, ça affiche "clique" dans la console
  footer.addEventListener("click", function() {
      console.log("clique");
  });
});

// Menu hamburger
document.addEventListener("DOMContentLoaded", function() {
  // On choppe le bouton du menu hamburger
  var navbarToggler = document.querySelector(".navbar-toggler");
  
  // On choppe le menu caché (navbarHeader)
  var navbarHeader = document.getElementById("navbarHeader");

  // Quand tu cliques sur le bouton, ça affiche ou cache le menu
  navbarToggler.addEventListener("click", function() {
      navbarHeader.classList.toggle("collapse");
  });
});

// Première carte (texte rouge)
document.addEventListener("DOMContentLoaded", function() {
  // On prend la première carte qu'on trouve
  var firstCard = document.querySelector(".card");
  console.log(firstCard);

  // On choppe le bouton "Edit" de la première carte
  var editButton = firstCard.querySelector(".btn-outline-secondary");
  console.log(editButton);

  // Quand tu cliques sur le bouton "Edit", le texte devient rouge
  editButton.addEventListener("click", function() {
      var cardText = firstCard.querySelector(".card-text");
      cardText.style.color = "red";
  });
});

// Deuxième carte (texte vert)
document.addEventListener("DOMContentLoaded", function() {
  // On prend la deuxième carte (pas la première, donc index 1)
  var secondCard = document.querySelectorAll(".card")[1];
  console.log(secondCard);

  // On choppe le bouton "Edit" de la deuxième carte
  var editButton = secondCard.querySelector(".btn-outline-secondary");
  console.log(editButton);

  // Quand tu cliques sur le bouton "Edit", le texte devient vert ou redevient normal
  editButton.addEventListener("click", function() {
      var cardText = secondCard.querySelector(".card-text");
      if (cardText.style.color === 'green') {
          cardText.style.color = '';
      } else {
          cardText.style.color = 'green';
      }
  });
});

// Activer/désactiver Bootstrap
document.addEventListener("DOMContentLoaded", function() {
  // On choppe la barre de navigation (navbar)
  var navbar = document.querySelector(".navbar");

  // Quand tu fais un double-clic sur la navbar, ça désactive/active Bootstrap
  navbar.addEventListener("dblclick", function() {
      // On choppe le lien qui charge Bootstrap
      var bootstrapLink = document.querySelector('link[href*="bootstrap"]');
      
      // On vérifie si Bootstrap est activé ou pas, et on change ça
      if (bootstrapLink.disabled) {
          bootstrapLink.disabled = false;
      } else {
          bootstrapLink.disabled = true;
      }
  });
});

// Réduire les cartes
document.addEventListener("DOMContentLoaded", function() {
  // Fonction pour remettre les propriétés CSS des cartes à la normale
  function restoreCard(card) {
    var img = card.querySelector('.card-img-top');
    var text = card.querySelector('.card-text');
    var editButton = card.querySelector('.btn-outline-secondary');
    img.style.width = '';
    text.style.display = '';
    editButton.style.display = '';
  }

  // On choppe tous les boutons "View"
  var viewButtons = document.querySelectorAll('.btn-success');

  // Pour chaque bouton "View", on ajoute des événements
  viewButtons.forEach(function(button) {
    // Quand la souris passe sur le bouton
    button.addEventListener('mouseenter', function() {
      // On choppe la carte parente du bouton
      var card = button.closest('.card');

      // On remet les autres cartes à la normale
      var allCards = document.querySelectorAll('.card');
      allCards.forEach(function(otherCard) {
        if (otherCard !== card) {
          restoreCard(otherCard);
        }
      });

      // On réduit l'image de la carte et on cache le texte
      var img = card.querySelector('.card-img-top');
      var text = card.querySelector('.card-text');
      var editButton = card.querySelector('.btn-outline-secondary');
      img.style.width = '20%';
      text.style.display = 'none';
      editButton.style.display = 'block';
    });

    // Quand la souris quitte le bouton
    button.addEventListener('mouseleave', function() {
      // On choppe la carte parente du bouton
      var card = button.closest('.card');

      // On remet les propriétés CSS de cette carte à la normale
      restoreCard(card);
    });
  });
});
