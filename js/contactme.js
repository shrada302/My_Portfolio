
let menu =document.querySelector(".menu-toggle");

menu.style.overflow = "hidden";

function toggle(){
    if(menu.style.overflow == "hidden"){
       menu.style.overflow = "visible"; 
    }
else{
   menu.style.overflow = "hidden";
}}
