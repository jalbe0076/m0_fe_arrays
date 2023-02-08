var userNames = ["Miru", "Ada", "Felix", "Tamara"];
var userAges = [40, 2, 1, 34];
var truthy = [true, true, false, true];

//remove the element in the index position 3 reducing the elements in the array to 3 and log the string "Tamara"
console.log(userNames.pop());
//will log ["Miru", "Ada", "Felix"]
console.log(userNames);
//remove the element in the index position 0 reducing the elements in the array to 3 and log the number 34
console.log(userAges.shift());
//will log [2, 1, 34]
console.log(userAges);
//add the boolean false value to the front of the array increasing the number of elements to 5 and log the number of elements in the array
console.log(truthy.unshift(false));
//will log [false, true, true, false, true]
console.log(truthy);
//will log [true, true]
console.log(truthy.slice(1, 3));
//will add the indicated numerical values to the front of the userAges array
userAges.unshift(4, 1, 34, 54, 65, 34, 3);
//will display the new numerical values added at the front of the array
console.log(userAges.slice(0, 7));
//will add the indicated numerical values to the end of the userAges array and display them using splice in two different ways
userAges.push(2, 3, 64, 89);
console.log(userAges.slice(-4));
console.log(userAges.slice(10));
//this will display the string "Ada" located in index position 1
console.log(userNames[1]);