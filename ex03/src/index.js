// Only Change code below this line
var myFood = {
  vegetable: "carrot",
  fruit: "orange",
  drink: "water",
};

function myFunction(myObj) {
  var vegetableValue = myObj["vegetable"];
  var fruitValue = myObj["fruit"];
  var drinkValue = myObj["drink"];
  return {
    vegetableValue,
    fruitValue,
    drinkValue,
  };
}
// Only Change code above this line

console.log(myFunction(myFood)); //Change this line

module.exports = myFunction(myFood);
