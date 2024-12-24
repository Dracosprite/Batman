const products = [
    { model: "Product A", price: 500, color: "red", quantity: 10 },
    { model: "Product B", price: 1500, color: "green", quantity: 20 },
    { model: "Product C", price: 700, color: "blue", quantity: 15 }
];

let a = products[0].price*products[0].quantity
let b = products[1].price*products[1].quantity
let c = products[2].price*products[2].quantity
if(a>b&&b>c){
    console.log(products[0]);
    
}
else if(a<b&&c<b){
    console.log(products[1]);
}
else if(a<c&&b<a){
    console.log(products[2]);
}
