window.onload = function start(){	
  var i = 1;
  function Move(){ 	
    i = (i%8)+1; // 8 est le nombre de photos dans le slider
    document.getElementById('i'+i).checked = true;
  }
  setInterval(Move,4000); //change toutes les 5 secondes
  };
  
  
  // Lorsque l'utilisateur fait défiler la page
  window.onscroll = function() {menu_scroll();};
  
  // Obtient le menu et la position quand le menu doit apparaître
  var header = document.getElementById("myheader");
  var language = document.getElementById("language");
  
  var banner = document.getElementById("scroll");
  
  // Obtient la position quand l'élément scroll atteint le haut de la page
  var sticky = banner.offsetTop;
  
  // Ajoutez la classe sticky au menu lorsque l'utilisateur atteint sa position de défilement. Supprimez sticky lorsque l'utilisateur quitte la position de défilement
  function menu_scroll() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      language.classList.add("sticky-language");
  
    } else {
      header.classList.remove("sticky");
      language.classList.remove("sticky-language");
    }
  }
  
  //Bouton retour en haut du site
  var mybutton = document.getElementById("backup");
        window.onscroll = function() {scrollFunction();};
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
  
  
        
  // Ouvre la photo en grand
  function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("close").style.display = "block";
  }
  
  // Ferme la photo en grand
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("close").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Contrôle suivant précédent
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // vignettes
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides-photos");
    var dots = document.getElementsByClassName("demo-photos");
    var captionText = document.getElementById("caption-photos");
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-photos", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active-photos";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }