const a = document.querySelector("body");
const b = document.querySelector(".box");
const c = document.querySelector(".icon");
const h3 = document.querySelector("h3");
const btn = document.querySelector("button");
let flag =0;
btn.addEventListener("click",function(){
   if (flag === 0){
    h3.innerHTML= "The Night is Near";
 
   }
   else{
    h3.innerHTML= "Justice is served";

   }
   
    setTimeout(function(){
        if(flag===0){
            a.style.backgroundColor = "white";
            b.style.backgroundColor = "black";
            c.style.backgroundColor = "white";
            h3.innerHTML = "justice for gotham";
            h3.style.color = "white";
            btn.style.backgroundColor = "white";
            btn.style.color = "black";
            flag=1;
            }
            else{
                a.style.backgroundColor = "black";
                b.style.backgroundColor = "white";
                c.style.backgroundColor = "black";
                h3.innerHTML = "click to save gotham";
                h3.style.color = "black";
                btn.style.backgroundColor = "black";
                btn.style.color = "white";
                flag=0;
        
            }
        
    },3000)
    
    
})