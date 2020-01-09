function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  let heOrShe = this.gender === "male" ? "He" : "She";
  let interestList = this.interests.slice(1, -1).map(interest => " " + interest);
  this.bio = function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ' + heOrShe + ' likes ' + this.interests[0] + interestList + ' and ' + this.interests[this.interests.length - 1] + '.');
  };
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
}

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing', 'something', 'something', 'something', 'something', 'something', 'something']);
person1.bio();