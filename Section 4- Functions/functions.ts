/*
Exercise: User Age Classification

Create a TypeScript program that classifies users into age groups based on their age. The age groups are as follows:

Under 18: "Minor"
18 to 64: "Adult"
65 and older: "Senior"
Your program should include the following:

A function named classifyAge that takes a single parameter, age, which is a number representing a user's age. The function should return a string representing the age group.

Inside the classifyAge function, use conditional statements to determine the age group based on the provided age.

Create a few test cases to verify that the classifyAge function correctly classifies the age groups.
*/

function classifyAge(age: number): string {
    if (age < 18) {
      return 'Minor';
    } else if (age >= 18 && age <= 64) {
      return 'Adult';
    } else {
      return 'Senior';
    }
  }
  
  
  // Test cases
  console.log(classifyAge(15)); // Should print "Minor"
  console.log(classifyAge(35)); // Should print "Adult"
  console.log(classifyAge(70)); // Should print "Senior"
  