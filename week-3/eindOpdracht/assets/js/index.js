window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByTagName("header")[0].style.opacity = "85%";
    document.getElementsByTagName("header")[0].style.zIndex = "100";  
  } else {
    document.getElementsByTagName("header")[0].style.opacity = "100%";
    document.getElementsByTagName("header")[0].style.zIndex = "100";
  }
}


