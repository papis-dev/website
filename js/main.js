//Menu burger

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");
var items = document.querySelectorAll(".item");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;
items.forEach(item =>{
  item.onclick = closeNav;
});

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}

//carousel

// Ajouter des événements de défilement automatique si nécessaire
if (window.innerWidth < 768){
  let carousel = document.querySelector('.skills__carousel');
  let scrollAmount = 0;

function slide() {
    scrollAmount += 1;
    carousel.scrollLeft = scrollAmount;
    if (scrollAmount >= (carousel.scrollWidth - carousel.clientWidth)) {
        scrollAmount = 0;
    }
}

let scrollInterval = setInterval(slide, 10);

// Arrêter le défilement lorsque la souris survole le carrousel
carousel.addEventListener('mouseenter', function () {
    clearInterval(scrollInterval);
});

// Reprendre le défilement lorsque la souris quitte le carrousel
carousel.addEventListener('mouseleave', function () {
    scrollInterval = setInterval(slide, 50);
});
}

else if (window.matchMedia("(min-width:1024px)").matches) {
  //scroll horizontal
  gsap.registerPlugin(ScrollTrigger)

  let sections = gsap.utils.toArray(".elements");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".skills__carousel",
      pin: ".skills",
      pinSpacing: true,
      scrub: 1,
      end: "+=3000",
    }
  });
}


//afficher lettre par lettre 
const afficher = (texte,element,vitesse) =>{
  let index = 0;
  const interval = setInterval(()=>{
      element.textContent += texte[index];
      index++;
      if(index===texte.length){
          clearInterval(interval);
      }
  },vitesse);
}

const texte = "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more  recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.";
const element = document.getElementById('animate-text');
afficher(texte,element,50);



// télécharger cv

document.getElementById("header__cv").addEventListener("click", function() {
  var lienCV = "../portfolio/CV_2024-01-05_El Hadji Amadou_GAYE.pdf"; // Remplacez ceci par le chemin de votre CV
  var a = document.createElement("a");
  a.href = lienCV;
  a.download = "VotreCV.pdf"; // Nom de fichier à télécharger
  a.click();
});

// modal

// Get the modal
var modal = document.getElementById("myModal");


var openModal = document.querySelectorAll(".myMdl");
var closeModal = document.getElementById("closeButton");

openModal.forEach(item =>{
  item.onclick = function() {
    modal.style.display = "block";
  }
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
closeModal.onclick = function() {
    modal.style.display = "none";
}

//mail

function mail() {
  var destinataire = 'papisgaye19@gmail.com';

  var mailtoLink = 'mailto:' + destinataire;
  
  // Ouvrir un lien mailto dans une nouvelle fenêtre
  window.open(mailtoLink);
}

// appeler

function call() {
  var numero = '+33758289199'; 

  var link = 'tel:' + numero;
  
  // Ouvrir le lien tel dans la même fenêtre (appel téléphonique)
  window.location.href = link;
}