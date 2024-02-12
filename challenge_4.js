/* Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

TEST DATA: Test with different bill values: 275, 40, and 430 */

// Using 1st Set of test data for the bill value
/* const bill = 275;

let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${bill + tip}`);

OUTPUT: The bill was 275, the tip was 41.25 and the total value was 316.25 */



// Using 2nd set of test data for the bill value
/* const bill = 40;
let tip = bill >= 50 && bill <+ 300 ? 0.15 * bill : 0.20 * bill;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${bill + tip}`); 

OUTPUT: The bill was 40, the tip was 8 and the total value was 48 */

// Using 3rd set of test data for the bill value
const bill = 430;
let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${bill + tip}`); 

// OUTPUT: The bill was 430, the tip was 86 and the total value was 516