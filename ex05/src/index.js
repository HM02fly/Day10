// Only Change code below this line
var school = {
  name: "Arena",
  location: "Sarajevo",
  established: 2020,
};

function myFunction(name) {
  school.name = name;
  return school;
}

console.log(myFunction("Paragon"));
// Only Change code above this line
module.exports = { school, myFunction };
