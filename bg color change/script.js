let btns = document.querySelectorAll("button")
let body = document.querySelector("body")

btns.forEach(function(chacha) {
chacha.addEventListener("click", function(){
body.style.backgroundColor = chacha.innerHTML
})
})