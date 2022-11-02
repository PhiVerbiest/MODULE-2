

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

// var Odyssey = "Nike Odyssey React";
// var Lebron = "Lebron 16";

// $(document).ready(function(){
//   $('#Nike_1').click(function(){
//         // window.location = $(this).find('a').attr('href');
//         document.write('<p id="jstext">' + Odyssey + '</p>');
//         return false;
//     });
// });



// function addListener(event, obj, fn) {
//   if (obj.addEventListener) {
//       obj.addEventListener(event, fn, false);   // modern browsers
//   } else {
//       obj.attachEvent("on"+event, fn);          // older versions of IE
//   }
// }

var Odyssey = 'odyssey.html';
var Lebron = 'lebron.html';
var Epic_React = 'epicreact.html';
var Air_Max_97 = 'airmax97.html';
var Free_RN_Motion = 'freernmotion.html';
var Free_RN_Flyknit = 'freernflyknit.html';

var Rise_React = 'risereact.html';
var Racer_G = 'racerg.html';
var EXP_X14 = 'expx14.html';
var Free_x_Retcon = 'freexretcon.html';
var Air_Force_107 = 'airforce107.html';
var Metcon_4_iD = 'metcon4id.html';

document.querySelector("#nike_1").addEventListener('click',function(){
  // document.write('<p id="jstext">' + Odyssey + '</p>');
  window.open(Odyssey);
},false)

document.querySelector("#nike_2").addEventListener('click',function(){
  window.open(Lebron);
},false)

document.querySelector("#nike_3").addEventListener('click',function(){
  window.open(Epic_React);
},false)

document.querySelector("#nike_4").addEventListener('click',function(){
  window.open(Air_Max_97);
},false)

document.querySelector("#nike_5").addEventListener('click',function(){
  window.open(Free_RN_Motion);
},false)

document.querySelector("#nike_6").addEventListener('click',function(){
  window.open(Free_RN_Flyknit);
},false)


document.querySelector("#nike_7").addEventListener('click',function(){
  window.open(Rise_React);
},false)

document.querySelector("#nike_8").addEventListener('click',function(){
  window.open(Racer_G);
},false)

document.querySelector("#nike_9").addEventListener('click',function(){
  window.open(EXP_X14);
},false)

document.querySelector("#nike_10").addEventListener('click',function(){
  window.open(Free_x_Retcon);
},false)

document.querySelector("#nike_11").addEventListener('click',function(){
  window.open(Air_Force_107);
},false)

document.querySelector("#nike_12").addEventListener('click',function(){
  window.open(Metcon_4_iD);
},false)


document.querySelector("#nike_13").addEventListener('click',function(){
  // document.write('<p id="jstext">' + Odyssey + '</p>');
  window.open(Odyssey);
},false)

document.querySelector("#nike_14").addEventListener('click',function(){
  window.open(Lebron);
},false)

document.querySelector("#nike_15").addEventListener('click',function(){
  window.open(Epic_React);
},false)

document.querySelector("#nike_16").addEventListener('click',function(){
  window.open(Air_Max_97);
},false)

document.querySelector("#nike_17").addEventListener('click',function(){
  window.open(Free_RN_Motion);
},false)

document.querySelector("#nike_18").addEventListener('click',function(){
  window.open(Free_RN_Flyknit);
},false)


document.querySelector("#nike_19").addEventListener('click',function(){
  window.open(Rise_React);
},false)

document.querySelector("#nike_20").addEventListener('click',function(){
  window.open(Racer_G);
},false)

document.querySelector("#nike_21").addEventListener('click',function(){
  window.open(EXP_X14);
},false)

document.querySelector("#nike_22").addEventListener('click',function(){
  window.open(Free_x_Retcon);
},false)

document.querySelector("#nike_23").addEventListener('click',function(){
  window.open(Air_Force_107);
},false)

document.querySelector("#nike_24").addEventListener('click',function(){
  window.open(Metcon_4_iD);
},false)



function bestelPagina(prijs) {
  window.location.href='bestelPagina.html?prijs=' + prijs;
}
