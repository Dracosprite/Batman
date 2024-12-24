

const stories = [
    {
        story: 'https://images.unsplash.com/photo-1721332153370-56d7cc352d63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
        post: 'https://images.unsplash.com/photo-1721332153370-56d7cc352d63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
        likes: 10,
        shares: 5,
        username: `suyash pawar`

    },
    {
        story: 'https://plus.unsplash.com/premium_photo-1670161434750-d2798af413d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
        post: 'https://plus.unsplash.com/premium_photo-1670161434750-d2798af413d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
        likes: 20,
        shares: 8,
        username: `suyash chatusvadi`
    },
    {
        story: 'https://images.unsplash.com/photo-1732647169576-49abfdef3348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
        post: 'https://images.unsplash.com/photo-1732647169576-49abfdef3348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
        likes: 15,
        shares: 3,
        username: `parth despande`
    },
    {
        story: 'https://images.unsplash.com/photo-1732677114541-a4ccaa0a8528?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
        post: 'https://images.unsplash.com/photo-1732677114541-a4ccaa0a8528?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
        likes: 25,
        shares: 10,
        username: `aman bhangi`
    },
    {
        story: 'https://plus.unsplash.com/premium_photo-1665426465884-d2361b53a866?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
        post: 'https://plus.unsplash.com/premium_photo-1665426465884-d2361b53a866?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
        likes: 30,
        shares: 12,
        username: `ayush airtel`
    }
];
let sum = ``

stories.forEach(function (e, idx) {
    sum += ` <div class="story">
                    <img id =${idx} src=${e.story}
                        alt="">
                </div>`
})

let up = document.querySelector(".up")
up.innerHTML = sum
let add = ``
stories.forEach(function (f) {
    add += `<div class="post"> 
                    <img
                    src=${f.post}
                        alt="">
                    <h1><i class="ri-heart-line">${f.likes} <i class="ri-share-line"></i>${f.shares}<i class="ri-chat-3-line"></i> </i>
                    </h1>
                </div>`
})
let mid = document.querySelector(".mid")
mid.innerHTML = add
let full = document.querySelector(".full")
let h1 = document.querySelector(".full h1")
up.addEventListener("click", function (dets) {

    let gold = dets.target.id

    full.style.display = `block`;
    full.style.backgroundImage = `url(${stories[gold].post})`
    h1.innerHTML = `${stories[gold].username}`
    let grow = 0


    let progress = document.querySelector(".progress")
    let suyash = setInterval(function () {
        grow++
        progress.style.width = grow + `%`
    }, 30)
    setTimeout(function () {
        full.style.display = `none`;
        clearInterval(suyash)
    }, 3000)


})

