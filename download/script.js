let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let a = document.querySelector(".growth");
let flag =0;

btn.addEventListener("click", function(){
    let b= Math.floor(Math.random() * 100);
    btn.style.pointerEvents ="none";
    let suyash = setInterval(function(){
        flag++;
        h1.innerHTML=flag +"%"
        a.style.width = flag +"%"
        

    },b)
    setTimeout(function(){
        clearInterval(suyash);
        btn.innerHTML ="Downloaded";
        btn.style.opacity = "0.4";
        btn.style.pointerEvents="none";
    },b*100)
})