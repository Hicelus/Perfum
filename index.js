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



function homeB(){
  reiniciarBotoes();
  reiniciarSessoes();

  document.getElementById("sessao").style.display = "block";
  document.getElementById("home").style.fontSize = "170%";
  document.getElementById("home").style.color = "seashell";
  document.getElementById("home").style.backgroundColor = "rgb(185, 152, 189)";
  document.getElementById("home").style.textDecoration = none;
}

function perfumesB(){
  reiniciarBotoes();
  reiniciarSessoes();

  document.getElementById("catPerfumes").style.display = "block";
  document.getElementById("perfumes").style.fontSize = "170%";
  document.getElementById("perfumes").style.color = "seashell";
  document.getElementById("perfumes").style.backgroundColor = "rgb(185, 152, 189)";
  document.getElementById("perfumes").style.textDecoration = none;
}

function kitsB(){
  reiniciarBotoes();
  reiniciarSessoes();

  document.getElementById("catKits").style.display = "block";
  document.getElementById("kits").style.fontSize = "170%";
  document.getElementById("kits").style.color = "seashell";
  document.getElementById("kits").style.backgroundColor = "rgb(185, 152, 189)";
  document.getElementById("kits").style.textDecoration = none;
}

function pedidoB(){
  reiniciarBotoes();
  reiniciarSessoes();

  document.getElementById("encomendas").style.display = "block";
  document.getElementById("pedidoBotao").style.fontSize = "170%";
  document.getElementById("pedidoBotao").style.color = "seashell";
  document.getElementById("pedidoBotao").style.backgroundColor = "rgb(185, 152, 189)";
  document.getElementById("pedidoBotao").style.textDecoration = none;
}

function reiniciarBotoes(){
  var botoes = document.getElementsByClassName("botoes");

  botoes[0].style.fontSize = "130%";
  botoes[0].style.border = "1px solid rgb(185, 152, 189)";
  botoes[0].style.color = "rgb(185, 152, 189)";
  botoes[0].style.backgroundColor = "white";

  botoes[1].style.fontSize = "130%";
  botoes[1].style.border = "1px solid rgb(185, 152, 189)";
  botoes[1].style.color = "rgb(185, 152, 189)";
  botoes[1].style.backgroundColor = "white";

  botoes[2].style.fontSize = "130%";
  botoes[2].style.border = "1px solid rgb(185, 152, 189)";
  botoes[2].style.color = "rgb(185, 152, 189)";
  botoes[2].style.backgroundColor = "white";

  botoes[3].style.fontSize = "130%";
  botoes[3].style.border = "1px solid rgb(185, 152, 189)";
  botoes[3].style.color = "rgb(185, 152, 189)";
  botoes[3].style.backgroundColor = "white";
}

function reiniciarSessoes(){
  var areas = document.getElementsByClassName("areas");

  areas[0].style.display = "none";
  areas[1].style.display = "none";
  areas[2].style.display = "none";
  areas[3].style.display = "none";
}

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}