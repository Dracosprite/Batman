let body  =document.querySelector("body");
let cursor = document.querySelector(".cursor");
let h1 = document.querySelector("h1");


body.addEventListener("mousemove",function(e) {
    cursor.style.left = e.x + "px";
    cursor.style.top = e.y + "px";
    
})

h1.addEventListener("mouseenter",function(e) {
    cursor.style.scale = 9
    cursor.style.backgroundColor ="red"
})

h1.addEventListener("mouseleave",function(e) {
    cursor.style.scale = 1
cursor.style.backgroundColor ="white"
})
    