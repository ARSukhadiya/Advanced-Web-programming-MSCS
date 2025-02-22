var s = str => {
    count = 0;
    for (i=0; i<str.length ; i++){
        if(str.charAt(i) >= 'A' && str.charAt(i) <="Z"){
            count++;
        }
    }

    return count;
}

word = "Hello, how Are zYou?"
console.log(`Number of upper case letters: in ${word} is ${s(word)}`)



// lambdta type one-liner function
var evenOdd = (num) =>  num%2==0 ? "even" : "odd"
console.log(evenOdd(2))


// multiple optional arguments
// function add(){
//     if arguments.length == 0 {
//         return "Please enter parameters"
//     }
// }

// add(1, 2)


// setTimeout
function show(){
    console.log("Hello");

    document.write("Hello")
}

setTimeout(show, 3000)


/*
Objects in javascript: ordered collection of properties, name and value pair

Syntax:
    let ob_name = {}
*/

let person = {
    firstName: 'John',
    lastName: 'Don'
};
console.log(person)

let book = {
    title: "ABC",
    published: 2014,
    keywords: ["Success", "Toppers", "High performers"]
}

console.log(book)
console.log(book.title)


/**
 * Accessors and Mutators - getters and setters : modify and retrieve thge object
 * Data hiding, security
 * 
 * Access Specifiers
 * getters - returns the value | accessor
 * setters - modify the value  | Mutator
 */

let rectangle = {
    width: 5,
    height: 10,

    get area(){
        return this.width * this.height;
    },

    set area(val1){
      this.width = val1 * val1  
    }
};

let area = rectangle.area;
console.log(area)
console.log(rectangle.width);

rectangle.area = 100;
console.log(rectangle.width);


/**
 * Objects as Maps: A map or associative array -- a DS that maps keys to values
 */
let stateCapitals = {
    AR: "Little Rock",
    CO: "Denver",
    NM: "Santa Fe"
};

console.log("CO capitals is ", stateCapitals["CO"])
stateCapitals["Texas"] = "Austin";

console.log("StateCapitals is ", stateCapitals)


/** for (let variable in object){body}
 * 
 */
console.log("Capitals: ")
for(let state in stateCapitals){
    console.log(state + " : " + stateCapitals[state])
}



let stateCapitals2 = new Map()
stateCapitals2.set("AR", "Little Rock");
stateCapitals2.set("CO", "Denver");
stateCapitals2.set("NM", "Santa Fe");
console.log("Size of the map: " + stateCapitals2.size)

if (stateCapitals2.has("CO")){
    console.log("CO capital is " + stateCapitals2.get("CO"))
}

console.log("\n\nAll capitals:");
for(let [state, capital] of stateCapitals2){
    console.log(state + " : " + capital)
}



/**
 * Math functions
 */
function getRandomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

for (let i=0 ; i<10 ; i++){
    console.log("Random number: " + getRandomNumber(1, 10));
}
