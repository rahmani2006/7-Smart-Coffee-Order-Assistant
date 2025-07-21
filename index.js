
//1:Login & Access Control
let username = prompt("Enter your username (admin or user):");
let password = prompt("Enter your password:");

let role = "";
let securityLevel = "";

if ((username === "admin" || username === "user") && password === "1234") {
    role = username;
    securityLevel = (username === "admin") ? "high" : "low";
} else {
    alert("Incorrect username or password. Access denied.");
    throw new Error("Login failed.");
}

// 2: Coffee Shop Order Calculator
let name = prompt("What is your name?");
let age = parseInt(prompt("What is your age?"));
let coffeeType = prompt("What type of coffee? (espresso, latte, cappuccino)").toLowerCase();
let quantity = parseInt(prompt("How many cups?"));

let pricePerCup = 0;
if (coffeeType === "espresso") {
    pricePerCup = 2.5;
} else if (coffeeType === "latte") {
    pricePerCup = 3.5;
} else if (coffeeType === "cappuccino") {
    pricePerCup = 4.0;
} else {
    alert("Invalid coffee type.");
    throw new Error("Invalid coffee type.");
}

let originalTotal = pricePerCup * quantity;
let discount = 0;

if (age < 18 || age > 60) {
    discount = originalTotal * 0.10;
}
let finalTotal = originalTotal - discount;

//3: Bill Splitter with Tip
let splitCount = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
let tipPercent = parseInt(prompt("Enter tip percentage (0, 5, 10, or 15):"));

let tipAmount = (finalTotal * tipPercent) / 100;
let totalWithTip = finalTotal + tipAmount;
let eachPays = totalWithTip / splitCount;

alert(`Hello ${name}!
You ordered ${quantity} ${coffeeType}(s).
Original total: $${originalTotal.toFixed(2)}
Discount: $${discount.toFixed(2)}
Tip: $${tipAmount.toFixed(2)}
Total with Tip: $${totalWithTip.toFixed(2)}
Split between ${splitCount} people: $${eachPays.toFixed(2)} each`);
