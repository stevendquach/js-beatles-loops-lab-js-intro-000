
var musicians = ["John Lennon", "Paul McCartney","Ringo Star", "George Harrison"]
var instruments = ["guitar", "bass", "drums", "vocals"]

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++)
  {
    array.push (`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}
function johnLennonFacts(facts) {
  var arrays = []
  var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  let i = 0;
    while (i < facts.length) {
    arrays.push (`${facts[i]} !!!`);
}
  return array
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array
}
