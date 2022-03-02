var hamburger = document.getElementById('hamburgerMenu');
var mask = document.getElementById('navMenuMask');
var white = document.getElementById('navMenuWhite');

hamburger.addEventListener('click', function(){
  mask.classList.toggle('shownLeft');
  white.classList.toggle('shownRight');
});