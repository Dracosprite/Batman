const a = document.querySelector(".box");
const b = document.querySelector("button");

b.addEventListener("click",function(){
    const a1 = Math.floor(Math.random()*255);
    const a2 = Math.floor(Math.random()*255);
    const a3 = Math.floor(Math.random()*255);
    const b1 = Math.floor(Math.random()*255);
    const b2 = Math.floor(Math.random()*255);
    const b3 = Math.floor(Math.random()*255);
    a.style.backgroundColor = `rgb(${a1},${a2},${a3})`;
    b.style.backgroundColor = `rgb(${a1},${a2},${a3})`;
    b.style.color = `rgb(${b1},${b2},${b3})`;
   
})
