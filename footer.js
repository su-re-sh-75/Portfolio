$(document).ready(function(){
    var foot2 = document.querySelector('.foot-2');
    foot2.addEventListener('click', function () {
      var svg = document.querySelector('.foot-2 svg');

      svg.style.animation = 'none';
      void svg.offsetWidth; // Trigger reflow to restart the animation
      svg.style.animation = 'refresh .25s linear 0s 1 forwards';
    });

    foot2.addEventListener('animationend', function () {
      var svg = document.querySelector('.foot-2 svg');
      svg.style.animation = '';
    });
});