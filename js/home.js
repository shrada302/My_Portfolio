
let menu =document.querySelector(".menu-toggle");

menu.style.overflow = "hidden";

function toggle(){
    if(menu.style.overflow == "hidden"){
       menu.style.overflow = "visible"; 
    }
else{
   menu.style.overflow = "hidden";
}}


 var typed = new Typed('#element', {
  strings: [
    'I am a passionate learner,',
    'I am a passionate coder,',
    'I am a passionate Designer.'
  ],
  typeSpeed: 50,
  showCursor: false, 
  loop:true
  
});