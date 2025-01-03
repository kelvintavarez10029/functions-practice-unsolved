/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/  

  const rickySteakHouse = {
  name:"Ricky's Steakhouse",
  cuisines: ['steal', 'seafood' , 'pasta'],
  numberOfStars: 4,
   favorited: true
}
rickySteakHouse.address=" 110 2nd ave"
rickySteakHouse.zipcode=10029;
rickySteakHouse.acceptsReservations=true;

rickySteakHouse.numberOfStars=5;
rickySteakHouse.favorited=false;
rickySteakHouse.cuisines.push("ice cream");

const retrieveProperty = (obj, key) => {
  if (obj[key] !== undefined) {
    return obj[key];
  }
  return "The information you requested does not exist.";
};
console.log(retrieveProperty(rickySteakHouse, "cuisines"));
console.log(retrieveProperty(rickySteakHouse, "favorited"));
console.log(retrieveProperty(rickySteakHouse, "name"));
console.log(retrieveProperty(rickySteakHouse, "nickName"));
console.log(retrieveProperty(rickySteakHouse, "state"));
  // YOUR WORK GOES HERE //
