window.onload = function() {
   let hamburguer = document.querySelector('.menu-button')
   let menu = document.querySelector('.menu')


   // open and close - click on button menu //
    hamburguer.addEventListener('click',function(){
      if(menu.classList.contains('-active')){
         menu.classList.remove('-active')
     }else{
         menu.classList.add('-active')
      }
   })
 
 // button - item sanfon //
   let sanfon = document.querySelectorAll('.accordion .item')
   sanfon.forEach(function(item){
     item.addEventListener('click',function(){
       if(item.classList.contains('-active')){
          item.classList.remove('-active')
      }else{
          item.classList.add('-active')
       }
    }) 
   })
 
 
 };
 