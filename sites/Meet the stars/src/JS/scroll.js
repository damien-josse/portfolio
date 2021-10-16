var header = document.getElementById("header");
var btn = document.getElementById("backup");
var swipe = document.getElementById("swipe");
window.onscroll = function() {
    menu_scroll();
  };
  
  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.opacity = "100%";
      swipe.style.opacity = "0%";
    } else {
      btn.style.opacity = "0%";
      swipe.style.opacity = "100%";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }