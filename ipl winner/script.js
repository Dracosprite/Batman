let team =["csk", "rcb", "mi", "dc", "kkr", "srh" ,"gt","rr","pk","lsg"];
let body = document.querySelector("body");
let h2 = document.querySelector("h2");
let btn =document.querySelector("button");
let a=team.length;
let num =Math.floor(Math.random()*a);

btn.addEventListener("click",function(){
    let num = Math.floor(Math.random()*a);
    h2.innerHTML = team[num];
    if(h2.innerHTML==="csk"){
        body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp3156840.jpg')"
      
        
    }
    else if (h2.innerHTML==="rcb"){
        body.style.backgroundImage = "url('https://images.indiafantasy.com/wp-content/uploads/20230313150350/RCB-logo-1.png')"
    }
    else if (h2.innerHTML==="mi"){
        body.style.backgroundImage = "url('https://wallpaperaccess.com/full/4561369.jpg')"
    }
    else if (h2.innerHTML==="dc"){
        body.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.uahA8HR9UX8pZtEPP3f66wHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain')"
    }
    else if (h2.innerHTML==="kkr"){
        body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp4298363.jpg')"
    }
    else if (h2.innerHTML==="srh"){
        body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp4234385.jpg')"
    }
    else if (h2.innerHTML==="gt"){
        body.style.backgroundImage = "url('https://www.lamron.co/cdn/shop/products/FL-CR0109_3.jpg?v=1680206103')"
    }
    else if (h2.innerHTML==="rr"){
        body.style.backgroundImage = "url('https://images.hindustantimes.com/img/2021/01/15/1600x900/RR_logo_1610701396766_1610701407865.PNG')"
    }
    else if (h2.innerHTML==="pk"){
        body.style.backgroundImage = "url('https://i.cdn.newsbytesapp.com/images/l55120230324091158.jpeg')"
    }
    else if (h2.innerHTML==="lsg"){
        body.style.backgroundImage = "url('https://static.startuptalky.com/2024/03/Most-Valuable-IPL-Team-2024-Lucknow-Super-Giants-StartupTalky.jpg')"
    }
   


    
})
