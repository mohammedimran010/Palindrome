// replace punctuation
const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function isPalindrome(input) {
  // replace punctuation and make lowercase
  const result = input.replace(regex, "").toLowerCase();
  let inputReversed = result.split("").reverse().join("");

  // check if input contains whitespaces
  if (result.indexOf(" ") > -1) {
    // check if removing spaces matches
    if (result.replace(/ /g, "") === inputReversed.replace(/ /g, "")) {
      return true;
    }
    // check if any word contains a palindrome
    const words = result.split(" ");
    let matchFound = false;
    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];
      if (
        currentWord.length > 1 &&
        currentWord === currentWord.split("").reverse().join("")
      ) {
        matchFound = true;
        break;
      }
    }
    return matchFound;
  }
  return result === inputReversed;
}

// This line tests your function. When you have the tests passing you can
// change it to stepTwo and then stepThree to see if you can extend the
// behaviour of your function.
// stepOne();
// stepTwo();
// stepThree();
// stepFour();
stepFive();

function stepOne() {
  // Your function should be able to see if a given string is a palindrome,
  // including whitespace
  assertTrue("racecar");
  assertTrue("level");
  assertFalse("notpalindrometon");
}

function stepTwo() {
  // Extend your function to identify palindrome phrases
  stepOne();
  assertTrue("eva can i stab bats in a cave");
  assertTrue("was it a rat i saw");
  assertFalse("this last phrase is not a palindrome");
}

function stepThree() {
  // Extend your function to identify whether a phrase contains a palindrome
  stepTwo();
  assertTrue("This level is tricky!");
  assertTrue("That is one fast racecar");
  assertFalse("No palindromes in this");
}

function stepFour() {
  // Extend your function to identify whether a phrase is a palindrome when mixed case
  stepThree();
  assertTrue("Mum");
  assertTrue("waS iT a rat i saw");
  assertTrue("This leveL is tricky!");
}

function stepFive() {
  // Extend your function to ignore punctuation
  stepFour();
  assertTrue("Mum!");
  assertTrue("waS iT a rat, i saw!");
  assertTrue("This 'leveL, is tricky!");
}

// Test util functions
function assert(input, expected) {
  const result = isPalindrome(input);
  if (result !== expected) {
    console.log(
      `>>> FAILED: "${input}". Expected ${expected} but got ${result}`
    );
  } else {
    console.log(`Passed: "${input}"`);
  }
}

function assertTrue(input) {
  assert(input, true);
}

function assertFalse(input) {
  assert(input, false);
}
