var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function reiniciarBotoes(){
    document.getElementsByClassName("botoes").style.fontSize = "130%";
    document.getElementsByClassName("botoes").style.border = "1px solid rgb(185, 152, 189)";
    document.getElementsByClassName("botoes").style.color = "rgb(185, 152, 189)";
}

function homeB(){
    document.getElementById("sessao").style.visibility = "";
    document.getElementById("sessao").style.height = "auto";
    document.getElementById("home").style.fontSize = "170%";
    document.getElementById("home").style.color = "seashell";
    document.getElementById("home").style.backgroundColor = "rgb(185, 152, 189)";
    document.getElementById("home").style.textDecoration = none;
}

function perfumesB(){
    document.getElementById("sessao").style.visibility = "hidden";
    document.getElementById("sessao").style.height = "1px"

    //chamar esta função dentro de outras
}

