/* sfx */
var sfx = new Audio();
document.getElementById("buttonn").addEventListener("click", function(){
    sfx.pause();
    sfx = new Audio('assets/sounds/erwin.mp3');
    sfx.play();
});

/* slideshow */
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1700); // Change image every 2 seconds
}

/* change text */
$(document).ready(function(){
		$("#soz").mouseover(function(){
			$('#soz').html("オタクショップ");
});
});

$(document).ready(function(){
		$("#soz").mouseout(function(){
			$('#soz').html("GEEKSHOP");
});
});

/* discount */
var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});

/* back to top */
let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

/* animate */
$(document).ready(function(){
    $("myBtn1").click(function(){
        $("buttonn1").animate({
            left: -300
        });
    });
});

document.getElementById("buttonn1").addEventListener("click", function(){
    $("buttonn1").animate({
            left: -300
        });
});