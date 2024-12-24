let img1 =document.querySelector(".img1");
let img2 =document.querySelector(".img2");
let btn =document.querySelector("button");

btn.addEventListener("click",function(){
    let a = img1.getAttribute("src");
let b= img2.getAttribute("src");

    img1.setAttribute("src",b)
    img2.setAttribute("src",a)
})

