function multiply(a, b) {
    return a * b;
}
function calculateTotal(price, quantity) {
    return multiply(price, quantity);
}
const total = calculateTotal(10, 2);
console.log(total); 
