/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT // 

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};


// DO NOT EDIT THE ABOVE OBJECT // 
const grabCategories = (obj) => {
  return Object.keys(obj);
};

const verifyValues = (obj, target) => {
  return Object.values(obj).length === target;
};

const getToppingsInfo = (obj) => {
  return Object.entries(obj.pizzaToppings);
};

const printAd = (obj, topping) => {
  if (Object.keys(obj.pizzaToppings).length === 0) {
    return "No toppings available";
  } else {
    const price = obj.pizzaToppings[topping];
    if (price) {
    return `"Welcome to Papa John's! We are located at ${obj.address}. 
This week, we are having a sale on ${topping} for $${price}.
Better Ingredients. Better Pizza. Papa John's."`;}
  }
  return `Sorry, we don't have ${topping} as a topping.`;
};

console.log(grabCategories(papaJohns)); 
console.log(getToppingsInfo(papaJohns)); 
console.log(verifyValues(papaJohns, 8));
console.log(verifyValues(papaJohns, 9));
console.log(printAd(papaJohns, "bacon")); 
console.log(printAd(papaJohns, "apple")); 
// YOUR WORK GOES HERE // 
