let img = document.querySelector("img")
let movex =0
let movey =0
document.addEventListener("keydown", function(chacha){
    
   if(chacha.code ==="KeyD" && movex<80){
    movex++
    img.style.left = movex + "%"
    console.log(movex);
    
   }
   else if(chacha.code ==="KeyA"&&movex>0){
    movex--
 
    img.style.left= movex + "%"
   }
   else if(chacha.code ==="KeyS" && movey<70 ){
    movey++
    img.style.top= movey + "%"
   }
   else if(chacha.code ==="KeyW"&& movey>0){
    movey--
    img.style.top= movey + "%"
   }
   
   

})