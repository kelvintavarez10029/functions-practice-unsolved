// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};
 
const printPizzaPlace = (obj) => {
  for(const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
  return "Pizza place details printed.";
}
const toppingsPriceRange = (obj) => {
  let toppingNames = Object.keys(obj.pizzaToppings); // Array of topping names
  let toppingPrices = Object.values(obj.pizzaToppings); // Array of topping prices

  let min = Math.min(...toppingPrices);
  let max = Math.max(...toppingPrices);

  console.log("Topping Names:", toppingNames);
  console.log("Topping Prices:", toppingPrices);

  for (const key of toppingNames) {
    console.log(`${key} price: $${obj.pizzaToppings[key]}`);
  }

  return `The price range for toppings is $${min} to $${max}.`;
};

console.log(
  toppingsPriceRange(dominos)
)
console.log(printPizzaPlace(dominos))