// Only Change code below this line
var lion = {
  name: "Simba",
  legs: 4,
  tails: 1,
};

function myFunction(propName, propValue) {
  lion[propName] = propValue;
  return lion;
}
// Only Change code above this line

console.log(myFunction("roar", "roar-roar"));
module.exports = myFunction;
