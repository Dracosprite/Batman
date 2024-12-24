let inscects = ['https://th.bing.com/th/id/OIP.V0npe_Q1op_2gN92DIXnwAHaH3?rs=1&pid=ImgDetMain','https://www.pngmart.com/files/11/Doge-Meme-PNG-Photos.png','https://th.bing.com/th/id/R.54f91b4d7376d97e8e3e212a6d130505?rik=s8akevnlO%2fgf1g&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f11%2fFrog-Meme-PNG-Transparent.png&ehk=p3ZVb6pZecUzwj0lsOLlkje3kyRmAgXmMFaKjTd1afQ%3d&risl=&pid=ImgRaw&r=0','https://www.pngmart.com/files/11/Green-Dank-Meme-PNG-Free-Download.png','https://www.pngmart.com/files/22/Meme-PNG-Photos.png','https://th.bing.com/th/id/OIP.z9Sgw-UKqHGYinPurUQsJAHaEK?rs=1&pid=ImgDetMain']
let btn = document.querySelector("button");
let body =document.querySelector("body")



btn.addEventListener("click",function(){
    let valuex =Math.random()*98
    let valuey =Math.random()*98
    let valuerot =Math.random()*360
    let a= Math.floor(Math.random()* inscects.length)
    let img = document.createElement("img")
    img.setAttribute("src",inscects[a])
 img.style.width = 90+"px"
 img.style.position ="absolute"
 img.style.top =valuey +"%"
img.style.left =valuex +"%"
img.style.rotate=valuerot +"deg"
   
    body.appendChild(img)
    

})
