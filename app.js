/*
A. Q + A
How do we assign a value to a variable?
    Using let, const, or var
How do we change the value of a variable?
    Reassigning the value of the variable
How do we assign an existing variable to a new variable?
Remind me, what are declare, assign, and define?
What is pseudocoding and why should you do it?
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
*/

//--------------   B. Strings ---------------------------

let firstVariable;
firstVariable = "Hello World";
firstVariable = 7;
let secondVariable = firstVariable;
secondVariable = "Hi Hi";

//The value of first value is 7

let yourName = "Joshua Alegbe";
console.log("Hello, my name is " + yourName);


//--------------  C. Booleans ---------------------------

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

//--------------   D. The Farm ---------------------------

let animal = "hawk";

if(animal === "cow"){
    console.log("mooooooo")
}
else{
    console.log("Hey! You're not a cow.")
}

//--------------   E. Driver's Ed ---------------------------

let personAge = 23;

if(personAge < 17) {
    console.log("Sorry, you're too young.");
}

else{
    console.log("Here are the keys!");
}

//--------------   II. LOOPS ------------------------------
//--------------   A. The basics ---------------------------
/*
for(let i = 0; i < 11; i++){
    console.log(i);
}

for(let i = 10; i < 401; i++ ){
    console.log(i);
}

for(let i = 12; i < 20; i+=3 ) {
    console.log(i)
}
*/

//--------------   B. Get even ---------------------------

for(let i = 0; i < 101; i++) {
    let msg = ""
    if(i % 2 == 0)
        msg = " <-- is an even number"
    console.log(String(i) + msg);
}

//--------------   C. Give me Five ---------------------------

for(let i = 0; i < 101; i++) {
    if(i % 5 == 0)
        console.log("I found a " + String(i) + ". High five!");
    if(i % 3 == 0)
        console.log("I found a " + String(i) + ". Three is a crowd");
    
}

//--------------   D. Savings Account ---------------------------

let bank_account = 0;

for(let i = 0; i < 11; i++) {
    bank_account += i;
}

console.log(bank_account);
bank_account = 0;

for(let i = 0; i < 101; i++) {
    bank_account += i*2;
}

console.log(bank_account);

//--------------   III. Array & Control Flow ------------------------------
//--------------   A. Talk about it ---------------------------
/*
What are the things in an array called?

Do Arrays guarantee those things will be in order?

What real-life thing could you model with an array?


*/
//--------------   B. Easy Does it ---------------------------
let quotes = ["When lifes gives you lemons", "Never say never", "Lock in"];

//--------------   C. Accessing elements ---------------------------

const randomThings = [1, 10, "Hello", true];

//How do you access the 1st element in the array?
randomThings[0];

//Change the value of "Hello"to "World"
randomThings[2] = 'World';

//Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings[2]);

//--------------   D. Change values ---------------------------

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

//What would you write to access the 3rd element of the array?

ourClass[2];

//Change the value of "Github" to "Octocat"

ourClass[4] = "Octocat";

//Add a new element, "Cloud City" to the array

ourClass.push("Cloud City");

//--------------   E. Mix It Up ---------------------------

const myArray = [5, 10, 500, 20];

myArray.push("Aegon");
myArray.push("Jon");

myArray.shift();

myArray.unshift("Bob Marley");

myArray.pop();

myArray.reverse();

console.log(myArray);

//--------------   F. Biggie Smalls ---------------------------

let num = 100;

if(num < 100) {
    console.log("little number");
}

else {
    console.log("big number");
}

//--------------   G. Monkey in the Middle ---------------------------

if(num < 5) {
    console.log("little number");
}

else if(num > 10) {
    console.log("big number");
}

else {
    console.log("monkey");
}

//--------------   H. What's in Your Closet? ---------------------------

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

console.log("Kristyn is rocking that" , kristynsCloset[2] , "today!");

kristynsCloset.splice(6, 0, "raybans");

kristynsCloset[5] = "stained knit hat";

thomsShirt = thomsCloset[0][3];

thomsPants = thomsCloset[1][1];

thomsAcc = thomsCloset[2][0];

console.log("Thom is setting the standard with his", thomsShirt, "and", thomsPants, ",complimented by his", thomsAcc, ".")

thomsCloset[1][2] = "Footie Pajamas";

// -------------    IV. Functions ----------------------------------
//--------------   A. printGreeting ---------------------------

function printGreeting(name) {
    return "Howdy, " + name;
}

console.log(printGreeting("Josh"));

function printCool(name) {
    console.log(name, "is mad cool");
}

printCool("Ekko")

function calculateCube(num) {
    console.log(num**3);
}

calculateCube(2);

function isVowel(char) {
    character = char.toLowerCase();
    return (character == 'a' ||
    character == 'e' ||
    character == 'i' ||
    character == 'o' ||
    character == 'u')
}

console.log(isVowel('A'));
console.log(isVowel('E'));
console.log(isVowel('I'));
console.log(isVowel('O'));
console.log(isVowel('U'));
console.log(isVowel('Z'));

function getTwoLengths(string1, string2) {
    let arr = [];
    arr.push(string1.length)
    arr.push(string2.length)

    return arr;
}

console.log(getTwoLengths("Hank", "Hippopopalous"));

function getMultipleLengths(arr) {
    let lengthArray = [];
    for ( let i = 0 ; i < arr.length; i++) {
        lengthArray.push(arr[i].length);
    }

    return lengthArray;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

function maxOfThree(num1, num2, num3) {
    let max = num1;
    if (max < num2)
        max = num2;

    if (max < num3)
        max = num3;

    return max;
}

console.log(maxOfThree(2, 9, 1093));

function printLongestWord(arr) {
    let longest = "";
    for (let i = 0; i < arr.length; i++) {
        if(longest.length < arr[i].length)
            longest = arr[i];
    }
    return longest;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// -------------------   Objects ------------------------
user = {
    name:"Tom",
    email:"tomwayne@yahoo.com",
    age:30,
    purchased:[]
};

user.email = "wayneTom@gmail.com"
user.age++;

user.location = "Gotham";

user.purchased.push("carbohydrates");
user.purchased.push('peace of mind');
user.purchased.push("Merion jodhpurs");
console.log(user.purchased[2]);

user.friend = {
    name:"Lex Luthor",
    age:19,
    location:"Metropolis",
    purchased:[]
};

console.log(user.friend.name);

console.log(user.friend.location);

user.friend.age = 55;

user.friend.purchased.push("The One Ring");

user.friend.purchased.push("A latte");

console.log(user.friend.purchased[1]);

//console.log(user);

for ( let i = 0; i < user.purchased.length; i++) 
    console.log(user.purchased[i]);

for ( let i = 0; i < user.friend.purchased.length; i++)
    console.log(user.friend.purchased[i]);

function updateUser() {
    user.age++;
    user.name = user.name.toUpperCase();
}

updateUser();

console.log(user.age, user.name);


function oldAndLoud(person) {
    person.age++;
    person.name = person.name.toUpperCase();
}

console.log(user.age, user.name);

//  CAT

cat1 = {
    name:"mama",
    breed:"Persian",
    age:4
};

console.log(cat1.age, cat1.breed);

cat2 = {
    name:"papa",
    breed:"Sphynx",
    age:5
};

function combineCats(mama, papa) {
    return {
        name:mama.name + papa.name,
        breed:(papa.breed + '-'  +mama.breed),
        age:1
    }
}

console.log(combineCats(cat1, cat2));

console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));