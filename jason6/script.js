const products = [
    { model: "Product A", price: 500, color: "red", quantity: 10 },
    { model: "Product B", price: 1500, color: "green", quantity: 20 },
    { model: "Product C", price: 700, color: "blue", quantity: 15 }
];


let sum = 0
products.forEach(function(ani){
sum = sum + (ani.price*ani.quantity)
})
console.log(sum);
