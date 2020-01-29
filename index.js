var slideIndex = 0;

showSlides();
homeB();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("paginaSlide");
    var d = document.getElementsByClassName("seletorSlide");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }   

    for (i = 0; i < d.length; i++) {
      d[i].className = d[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    d[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }

function homeB(){
    reiniciarBotoes();
    reiniciarSessoes();
  
    document.getElementById("sHome").style.display = "block";
    document.getElementById("bHome").style.fontSize = "170%";
    document.getElementById("bHome").style.color = "seashell";
    document.getElementById("bHome").style.backgroundColor = "rgb(185, 152, 189)";
    document.getElementById("bHome").style.textDecoration = none;
}
  
function perfumesB(){
    reiniciarBotoes();
    reiniciarSessoes();
  
    document.getElementById("sPerfumes").style.display = "block";
    document.getElementById("bPerfumes").style.fontSize = "170%";
    document.getElementById("bPerfumes").style.color = "seashell";
    document.getElementById("bPerfumes").style.backgroundColor = "rgb(185, 152, 189)";
    document.getElementById("bPerfumes").style.textDecoration = none;
}
  
function kitsB(){
    reiniciarBotoes();
    reiniciarSessoes();
  
    document.getElementById("sKits").style.display = "block";
    document.getElementById("bKits").style.fontSize = "170%";
    document.getElementById("bKits").style.color = "seashell";
    document.getElementById("bKits").style.backgroundColor = "rgb(185, 152, 189)";
    document.getElementById("bKits").style.textDecoration = none;
}
  
function pedidoB(){
    reiniciarBotoes();
    reiniciarSessoes();
  
    document.getElementById("sPedidos").style.display = "block";
    document.getElementById("bPedido").style.fontSize = "170%";
    document.getElementById("bPedido").style.color = "seashell";
    document.getElementById("bPedido").style.backgroundColor = "rgb(185, 152, 189)";
    document.getElementById("bPedido").style.textDecoration = none;
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
    var areas = document.getElementsByClassName("sessoes");
  
    areas[0].style.display = "none";
    areas[1].style.display = "none";
    areas[2].style.display = "none";
    areas[3].style.display = "none";
}
  
function destacarKit(img) {
    var destaque = document.getElementById("kitDestaque");
    destaque.src = img.src;
    destaque.parentElement.style.display = "block";
}


