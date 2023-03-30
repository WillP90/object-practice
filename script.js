console.log("hello world");

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {}
    pizza.crustType = crustType
    pizza.sauceType = sauceType
    pizza.cheeses = cheeses
    pizza.toppings = toppings
    return pizza
}

var p1 = pizzaOven("deep dish", "traditional", ["mozerella"], ["pepperoni", "onion"])
var p2 = pizzaOven("hand tossed", "marinara", ["mozerella", "feta"], ["mushrooms", "olives", "onion"])
var p3 = pizzaOven("thin crust", "marinara", ["mozerella", "feta", "parmesaun"], ["chicken", "jalapenos", "onion"])
var p4 = pizzaOven("hand tossed", "alfredo", ["mozerella"], ["mushrooms", "spinach", "onion", "chicken"])
console.log(p1, p2, p3, p4);
