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

const texte = "Je suis El Hadji Amadou Gaye, un développeur Full Stack passionné par la création de solutions innovantes et fonctionnelles. Avec une expertise solide en développement web, je suis habile dans la création d'interfaces utilisateur dynamiques tout en assurant des performances optimales côté serveur. Ma passion pour le développement ne se limite pas à la programmation. Je suis également un fervent partisan de la collaboration et de la communication efficace au sein d'équipes multidisciplinaires. Si vous recherchez un développeur compétent pour votre prochain projet, n'hésitez pas à me contacter.";
const element = document.getElementById('animate-text');
afficher(texte,element,50);



// télécharger cv

document.getElementById("header__cv").addEventListener("click", function() {
  var lienCV = "../CV_2024-01-05_El Hadji Amadou_GAYE.pdf";
  var a = document.createElement("a");
  a.href = lienCV;
  a.download = "VotreCV.pdf"; // Nom de fichier à télécharger
  a.click();
});

// modal

// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");


var openModal = document.querySelectorAll(".myMdl");
var openModal1 = document.querySelectorAll(".myMdl1");
var openModal2 = document.querySelectorAll(".myMdl2");


var closeModal = document.getElementById("closeButton");
var closeModal1 = document.getElementById("closeButton1");
var closeModal2 = document.getElementById("closeButton2");

openModal.forEach(item =>{
  item.onclick = function() {
    modal.style.display = "block";
  }
})
openModal1.forEach(item =>{
  item.onclick = function() {
    modal1.style.display = "block";
  }
})
openModal2.forEach(item =>{
  item.onclick = function() {
    modal2.style.display = "block";
  }
})
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

closeModal.onclick = function() {
    modal.style.display = "none";
}
closeModal1.onclick = function() {
  modal1.style.display = "none";
}
closeModal2.onclick = function() {
  modal2.style.display = "none";
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
  var numero = '+33758289199'; // Numéro de téléphone (avec le code pays)

  // Créer un lien WhatsApp avec le numéro de téléphone
  var link = 'https://wa.me/' + numero;

  // Ouvrir le lien WhatsApp dans une nouvelle fenêtre
  window.open(link);
}

