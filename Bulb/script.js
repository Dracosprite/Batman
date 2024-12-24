const abc = document.querySelector("button");
const efg = document.querySelector(".circle");

let flag=1;
abc.addEventListener("click",function(){
if(flag===1){
        efg.style.backgroundColor = "black";
        flag=0;
    }
        else{
            efg.style.backgroundColor = "yellow";
            flag=1;
        }
    })
