// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const exp = require("constants")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('arrayShuffled', () => {
    it('takes in an array, removes the first item from the array and shuffles the remaining items.', () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(arrayShuffled(colors1)).toContain("blue", "green", "yellow", "pink")
    expect(arrayShuffled(colors2)).toContain("indigo", "periwinkle", "ochre", "aquamarine", "saffron")
    })
})

// ReferenceError: arrayShuffle is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// input: Array of colors
// output: Array of colors with the first item removed from the array and shuffles the remaining
// create a function that takes in all the variables with arrays
const arrayShuffled = (colors) => { 
    // create a new variable with the given variable without the first element in the array.
    let shuffled = colors.splice(1) 
    // assigns a random 'sort' value to each color
    .map(colors => ({ colors, sort: Math.random()}))
    // sorts the colors array with a new mapped index based on the new values that came from the previous line
    .sort((a, b) => a.sort - b.sort)
    .map(({ colors }) => colors)
    // returns the shuffled array of colors
    return shuffled
}

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe('talliedVotes', () => {
    it('takes in an object that contains up votes and down votes and returns the end tally.', () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31   
    expect(talliedVotes(votes1)).toEqual(11)  
    expect(talliedVotes(votes2)).toEqual(-31)
    })
})

// ReferenceError: talliedVotes is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// input: object with upvote and downvote values
// output: differende between the upvotes and downvotes
const talliedVotes = (votes) =>{
    // returns the difference of up votes and down votes for the input object
    return votes.upVotes - votes.downVotes
}