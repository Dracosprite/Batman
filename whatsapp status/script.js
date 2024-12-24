const statuses = [
    {
        coverphoto: 'https://images.unsplash.com/photo-1721332154191-ba5f1534266e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dHJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
        username: 'Aarav Sharma',
        time: `${Math.floor(Math.random() * 24)}.${Math.floor(Math.random() * 60)} hours ago`
    },
    {
        coverphoto: 'https://plus.unsplash.com/premium_photo-1734460425348-c8effae131f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dHJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
        username: 'Vivaan Patel',
        time: `${Math.floor(Math.random() * 24)}.${Math.floor(Math.random() * 60)} hours ago`
    },
    {
        coverphoto: 'https://images.unsplash.com/photo-1734467241412-8116545c5080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dHJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
        username: 'Aditya Singh',
        time: `${Math.floor(Math.random() * 24)}.${Math.floor(Math.random() * 60)} hours ago`
    },
    {
        coverphoto: 'https://images.unsplash.com/photo-1721332153521-120cb0cd02d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dHJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
        username: 'Vihaan Gupta',
        time: `${Math.floor(Math.random() * 24)}.${Math.floor(Math.random() * 60)} hours ago`
    },
    {
        coverphoto: 'https://images.unsplash.com/photo-1734467241437-94ff6f6be6c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dHJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D',
        username: 'Reyansh Verma',
        time: `${Math.floor(Math.random() * 24)}.${Math.floor(Math.random() * 60)} hours ago`
    }
];
let sum = ``
let state = document.querySelector(".state")
statuses.forEach(function (elem, idx) {
    sum += `    
<div  class="overlay">
   <div id=${idx} class="tot"></div>
                    <div class="state">
                        <img src=${elem.coverphoto}
                            alt="">
                    </div>
                    <div class="info">
                        <h1>${elem.username}</h1>
                        <h2>${elem.time}</h2>
                    </div>
                </div>`
})

let mid = document.querySelector(".mid")

mid.innerHTML = sum
let h1 = document.querySelector(".full h1")
let full = document.querySelector(".full")
let down = document.querySelector(".down")
mid.addEventListener("click", function (dets) {
    let gold = dets.target.id
    let grow = 0
h1.innerHTML = `${statuses[gold].username}`
h1.style.color = `green`
    full.style.display = `block`
    full.style.backgroundImage = `url(${statuses[gold].coverphoto})`
    let timer = setInterval(function () {
        grow++
        down.style.width = grow + `%`
    }, 30)
    setTimeout(function () {
        full.style.display = `none`
        clearInterval(timer)
       

    }, 3000)

})