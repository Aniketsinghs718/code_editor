/**
 * Test file for auto-fix functionality
 * Run this in the browser console or Node.js to verify the functions work
 */

// Sample code with issues for testing
const testCode1 = `let x = 5
console.log(x)
const sum = a + b`;

const testCode2 = `function test() {
console.log("test")
if (true) {
return true
}
}`;

const testCode3 = `const  x  =  5   +   3
let    name   =   "John"`;

const testCode4 = `function test() {
  if (true) {
    console.log("test"`;

console.log('Test Code 1 (Missing Semicolons):');
console.log(testCode1);
console.log('\nTest Code 2 (Bad Indentation):');
console.log(testCode2);
console.log('\nTest Code 3 (Extra Spaces):');
console.log(testCode3);
console.log('\nTest Code 4 (Missing Brackets):');
console.log(testCode4);

// To test in browser:
// 1. Open the app
// 2. Paste each test code
// 3. Click Auto-Fix
// 4. Verify the fixes are applied correctly

// Expected results after auto-fix:
// Test 1: Semicolons added to each line
// Test 2: Proper 2-space indentation
// Test 3: Single spaces between tokens
// Test 4: Missing closing brackets added
