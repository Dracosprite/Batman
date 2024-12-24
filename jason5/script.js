
let arr = [
    { name: "Parth", city: "New York", age: 30, income: 50000 },
    { name: "Aman", city: "Los Angeles", age: 25, income: 60000 },
    { name: "Abhijeet", city: "Chicago", age: 40, income: 70000 },
    { name: "Ayush", city: "Houston", age: 35, income: 80000 },
    { name: "Shivang", city: "Phoenix", age: 28, income: 55000 }
];
let sum = ``
arr.forEach(function(chacha){
 sum=sum+ `<div class="main">
        <h1>${chacha.name}</h1>
        <h4>age:${chacha.age},city:${chacha.city}</h4>
        <h3>income:${chacha.income}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ex cupiditate nihil quam provident natus! Accusantium repudiandae hic vel minima!</p>
    </div>`
 
    
})
let body=document.querySelector("body")
body.innerHTML=sum