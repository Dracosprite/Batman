
const phones = [
    {
        model: "Phone Model 1",
        price: 50000,
        color: "black",
        quantity: 43
    },
    {
        model: "Phone Model 2",
        price: 70000,
        color: "white",
        quantity: 64
    },
    {
        model: "Phone Model 3",
        price: 10000,
        color: "blue",
        quantity: 54
    }
];

let sum = 0
let quantity
phones.forEach(function (chcha) {
    sum = sum+ chcha.price* chcha.quantity

})

console.log(sum);
